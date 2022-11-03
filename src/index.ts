require("dotenv").config()

import { dataFeedsRouter } from "./dataFeedsRouter"
import Web3 from "web3"
import feedContractAbi from "./abi/PriceFeed.json"
import routerContractAbi from "./abi/PriceFeedRouter.json"
import witnetRequestBoardAbi from "./abi/WitnetRequestBoard.json"
import { AbiItem } from "web3-utils"
import { DryRun, DryRunByNetwork, FeedInfo } from "./types"
import cbor from "cbor"
import { witnetAddresses } from "./witetAddresses"

// const wrbAddresses = Object.values(witnetAddresses).reduce((acc, value) => {
//   const entries = Object.entries(value).flat()
//   console.log('entries......................', entries)
//   const [networkName, obj] = Object.entries(value)

//   return {
//     ...acc,
//     // [networkName]: val.WitnetRequestBoard
//   }
// }, {} as Record<string, string>)

const wrbAddresses: Record<string, string> = Object.entries(
  Object.values(witnetAddresses).reduce((acc, obj) => {
    return Object.assign(acc, obj)
  }, {})
).reduce((acc, [key, val]) => {
  return {
    ...acc,
    [key]: val.WitnetRequestBoard,
  }
}, {})

const selectedNetworks = Object.values(dataFeedsRouter.chains)
  .flatMap((x) => Object.keys(x.networks))
  .flat()

const networks = [
  "avalanche.mainnet",
  "avalanche.fuji",
  "boba.rinkeby",
  "boba.mainnet",
  "celo.alfajores",
  "celo.mainnet",
  "conflux.tethys",
  "conflux.espace.mainnet",
  "conflux.testnet",
  "conflux.espace.testnet",
  "cronos.testnet",
  "cronos.mainnet",
  "cube.testnet",
  "cube.mainnet",
  "dogechain.testnet",
  "ethereum",
  "ethereum.goerli",
  "ethereum.mainnet",
  "harmony.testnet",
  "kava.mainnet",
  "kava.testnet",
  "kcc.testnet",
  "kcc.mainnet",
  "klaytn.mainnet",
  "klaytn.testnet",
  "metis.rinkeby",
  "metis.mainnet",
  "meter.testnet",
  "meter.mainnet",
  "moonbeam.mainnet",
  "moonbeam.moonbase",
  "moonbeam.moonriver",
  "okxchain.testnet",
  "okxchain.mainnet",
  "optimism.goerli",
  "optimism.mainnet",
  "polygon.goerli",
  "polygon.mainnet",
  "reef.testnet",
  "smartbch.amber",
  "smartbch.mainnet",
  "syscoin.testnet",
  "syscoin.mainnet",
]

export const dryRunsByNetwork: DryRunByNetwork = networks
  .filter((name) => selectedNetworks.includes(name))
  .reduce((acc, val) => {
    try {
      acc[val] = require(`./dryRuns/${val}.dryruns.json`)
    } catch (e) {
      console.log(`[ERROR] DryRun file not found for ${val}`)
      acc[val] = null
    }

    return acc
  }, {} as DryRunByNetwork)

async function main() {
  const state: {
    [key: string]: { [key: string]: { lastQueryId: string; id: string } }
  } = {}

  const chains = Object.values(dataFeedsRouter.chains)
  for (const chain of chains) {
    console.log(`Chain: ${chain.name}`)
    const entries = Object.entries(chain.networks)
    for (const [networkKey, feedConfig] of entries) {
      state[networkKey] = {}
      console.log(`  Network: ${networkKey}`)
      const provider = getProvider(networkKey)
      const networkPromises = []

      const timeout = 10000
      const web3 = new Web3(
        new Web3.providers.HttpProvider(provider as string, { timeout })
      )
      const lastQueryIds: { [key: string]: number } = {}
      for (const priceFeedId of Object.keys(feedConfig.feeds)) {
        const promise = new Promise(async (resolve) => {
          const feedInfo: FeedInfo = {
            id: priceFeedId,
            routerAbi: routerContractAbi as Array<AbiItem>,
            abi: feedContractAbi as Array<AbiItem>,
            routerAddress: feedConfig.address,
          }

          try {
            const routerContract = new web3.eth.Contract(
              feedInfo.routerAbi,
              feedInfo.routerAddress
            )

            const contractId = await routerContract.methods
              .currencyPairId(feedInfo.id)
              .call({ gas: "" })
            const priceFeedAddress = await routerContract.methods
              .getPriceFeed(contractId)
              .call({ gas: "" })
            const feedContract = new web3.eth.Contract(
              feedContractAbi as Array<AbiItem>,
              priceFeedAddress
            )

            const lastQueryId = await feedContract.methods
              .latestQueryId()
              .call()
            lastQueryIds[priceFeedAddress] = lastQueryId
            state[networkKey][priceFeedAddress] = {
              lastQueryId,
              id: priceFeedId,
            }
            console.log(`    ${priceFeedId}`, lastQueryId)
          } catch (e) {
            console.log(`    ${priceFeedId}`, (e as Error).message)
          }
          resolve("")
        })
        networkPromises.push(promise)
      }

      await Promise.all(networkPromises)

      if (dryRunsByNetwork[networkKey]) {
        const dryrun: DryRun = dryRunsByNetwork[networkKey] as DryRun
        const dryRunExtended = dryrun.map((x) => {
          return {
            ...x,
            lastQueryId: lastQueryIds[x.addr],
            value: Number(x.dryrun),
          }
        })

        reportResultBatch(web3, wrbAddresses[networkKey], dryRunExtended)
      } else {
        console.log(`  DryRun file not found: ${networkKey}`)
      }
    }
  }
}

main()

function getProvider(network: string) {
  // The provider env variable name should be the network name specified in the config plus '_PROVIDER' ex.MOONBEAM_MOONBASE_PROVIDER
  const envVariableName = `${network.toUpperCase().replace(".", "_")}_PROVIDER`
  const provider = process.env[envVariableName]

  if (!provider) {
    console.error(`    env variable not set ${envVariableName}`)
  }

  return provider
}

async function reportResultBatch(
  web3Provider: Web3,
  wrbAddress: string,
  result: Array<{ lastQueryId: number; value: number }>
) {
  try {
    const wrb = new web3Provider.eth.Contract(
      witnetRequestBoardAbi as Array<AbiItem>,
      wrbAddress
    )
    const timestamp = Math.floor(Date.now() / 1000) - (5 * 60)
    const batch = result.map((result) => {
      return [
        result.lastQueryId,
        timestamp,
        "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        cbor.encode(result.value),
      ]
    })
    const accounts = await web3Provider.eth.getAccounts()
    const callResult = await wrb.methods.reportResultBatch(batch, true).send({ from: accounts[0], gas: "1000000" })
    console.log('--- batch -->', batch)
    console.dir(callResult, { depth: null })
  } catch (e) {
    console.log("    ", e)
  }
}
