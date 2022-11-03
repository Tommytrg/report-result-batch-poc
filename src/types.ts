import { AbiItem } from "web3-utils"
export { AbiItem}

// export enum Network {
//   EthereumMainnet = "ethereum-mainnet",
//   EthereumGoerli = "ethereum-goerli",
//   EthereumRinkeby = "ethereum-rinkeby",
//   AvalancheFuji = "avalanche-fuji",
//   AvalancheMainnet = "avalanche-mainnet",
//   BobaMainnet = "boba-mainnet",
//   BobaRinkeby = "boba-rinkeby",
//   ConfluxTethys = "conflux-tethys",
//   ConfluxTestnet = "conflux-testnet",
//   CeloMainnet = "celo-mainnet",
//   CeloAlfajores = "celo-alfajores",
//   HarmonyTestnet = "harmony-testnet",
//   MetisMainnet = "metis-mainnet",
//   MetisRinkeby = "metis-rinkeby",
//   MoonbeamMoonbase = "moonbeam-moonbase",
//   PolygonMainnet = "polygon-mainnet",
//   PolygonGoerli = "polygon-goerli",
//   KCCMainnet = "KCC-mainnet",
//   KCCTestnet = "KCC-testnet",
  
// }

export type FeedInfoGeneric<ABI> = {
  id: string
  abi: ABI
  routerAbi: ABI
  routerAddress: string
}
export type FeedInfo = FeedInfoGeneric<Array<AbiItem>>

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

export type DryRun = Array<{ feed: string; addr: string; dryrun: string }>

export type DryRunByNetwork = Record<string, DryRun | null>