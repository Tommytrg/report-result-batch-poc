require("dotenv").config()

import { AbiItem, toHex } from "web3-utils"
// import { Contract } from "web3-eth-contract"

export enum Network {
  EthereumMainnet = "ethereum-mainnet",
  EthereumGoerli = "ethereum-goerli",
  EthereumRinkeby = "ethereum-rinkeby",
  AvalancheFuji = "avalanche-fuji",
  AvalancheMainnet = "avalanche-mainnet",
  BobaMainnet = "boba-mainnet",
  BobaRinkeby = "boba-rinkeby",
  ConfluxTethys = "conflux-tethys",
  ConfluxTestnet = "conflux-testnet",
  CeloMainnet = "celo-mainnet",
  CeloAlfajores = "celo-alfajores",
  HarmonyTestnet = "harmony-testnet",
  MetisMainnet = "metis-mainnet",
  MetisRinkeby = "metis-rinkeby",
  MoonbeamMoonbase = "moonbeam-moonbase",
  PolygonMainnet = "polygon-mainnet",
  PolygonGoerli = "polygon-goerli",
  KCCMainnet = "KCC-mainnet",
  KCCTestnet = "KCC-testnet",
}

export type FeedInfoGeneric<ABI> = {
  id: string
  abi: ABI
  routerAbi: ABI
  routerAddress: string
}
export type FeedInfo = FeedInfoGeneric<Array<AbiItem>>

export type ContractInfo = {
  contractAddress: string
  contractId: string
}

export type ContractsState = {
  lastPrice: string
  lastTimestamp: string
  lastDrTxHash: string
  requestId: string
}

export type FeedInfoRouterConfigMap = {
  [key: string]: FeedParamsConfig
}

export type FeedParamsConfig = {
  label: string
  isRouted?: boolean
  deviationPercentage?: number
  maxSecsBetweenUpdates?: number
  minSecsBetweenUpdates?: number
}

export type FeedConfig = {
  address: string
  blockExplorer: string
  hide?: boolean
  mainnet?: boolean
  color: string
  name: string
  pollingPeriod: number
  feeds: FeedInfoRouterConfigMap
}

export type Chain = {
  name: string
  hide?: boolean
  networks: Record<string, FeedConfig>
}

export type RouterDataFeedsConfig = {
  abi: string
  chains: Record<string, Chain>
}

import Web3 from "web3"
import { dataFeedsRouter } from "./dataFeedsRouter"
import feedContractAbi from "./abi/PriceFeed.json"
import routerContractAbi from "./abi/PriceFeedRouter.json"

async function main() {
  const chains = Object.values(dataFeedsRouter.chains)
  for (const chain of chains) {
    console.log(`Chain: ${chain.name}`)
    const entries = Object.entries(chain.networks)
    for (const [networkKey, feedConfig] of entries) {
      const network: Network = networkKey.replace(".", "-") as Network

      if (!Object.values(Network).includes(network)) {
        console.error(`The following network is not valid ${network}`)
      }

      const provider = getProvider(network)
      for (const priceFeedId of Object.keys(feedConfig.feeds)) {
        const feedInfo: FeedInfo = {
          id: priceFeedId,
          routerAbi: routerContractAbi as Array<AbiItem>,
          abi: feedContractAbi as Array<AbiItem>,
          routerAddress: feedConfig.address,
        }
        try {
          const priceFeedInfo = await fetchRouter(feedInfo, provider as string)
          const lastQueryId = await fetchLastQueryId(
            priceFeedId,
            provider as string,
            priceFeedInfo?.contractAddress as string
          )

          console.log(`${priceFeedId}`, lastQueryId)
        } catch (e) {
          console.log(`${priceFeedId}`, e)
        }
      }
    }
  }
}

main()

function getProvider(network: Network) {
  // The provider env variable name should be the network name specified in the config plus '_PROVIDER' ex.MOONBEAM_MOONBASE_PROVIDER
  const envVariableName = `${network.toUpperCase().replace("-", "_")}_PROVIDER`
  const provider = process.env[envVariableName]

  if (!provider) {
    console.error(`env variable not set ${envVariableName}`)
  }

  return provider
}

async function fetchRouter(
  feedInfo: FeedInfo,
  provider: string
): Promise<ContractInfo | null> {
  return await new Promise(async (resolve, reject) => {
    try {
      const timeout = 10000
      const web3 = new Web3(
        new Web3.providers.HttpProvider(provider, { timeout })
      )

      setTimeout(() => {
        reject("Timeout")
      }, timeout)

      const routerContract = new web3.eth.Contract(
        feedInfo.routerAbi,
        feedInfo.routerAddress
      )

      const contractId = await routerContract.methods
        .currencyPairId(feedInfo.id)
        .call()
      const address = await routerContract.methods
        .getPriceFeed(contractId)
        .call()
      resolve({
        contractAddress: address,
        contractId: contractId,
      })
    } catch (err) {
      reject(err)
    }
  })
}

async function fetchLastQueryId(
  feedName: string,
  provider: string,
  address: string
) {
  return new Promise(async (resolve, reject) => {
    try {
      setTimeout(() => {
        console.log(`Timeout while reading from ${feedName}`)
        resolve(true)
      }, 30000)
      const web3 = new Web3(new Web3.providers.HttpProvider(provider))
      const feedContract = new web3.eth.Contract(
        feedContractAbi as Array<AbiItem>,
        address
      )

      const lastQueryId = await feedContract.methods.latestQueryId().call()

      resolve(lastQueryId)
    } catch (err) {
      const e = new Error(`Error reading contract state for ${feedName} ${err}`)
      reject(e)
    }
  })
}
