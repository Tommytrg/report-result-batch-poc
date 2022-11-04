import { RouterDataFeedsConfig } from "./types";

export const dataFeedsRouter: RouterDataFeedsConfig = {
  "abi": "./src/abi/WitnetPriceRouter.json",
  "chains": {
    // "avalanche": {
    //   "name": "Avalanche",
    //   "networks": {
    //     "avalanche.mainnet": {
    //       "mainnet": true,
    //       "address": "0xBaaF31F4AAc5ab5334b6E239a83bf4E855C55ea7",
    //       "blockExplorer": "https://snowtrace.io/address/{address}",
    //       "color": "#070fdf",
    //       "name": "Avalanche Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-AVAX/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "avalanche.fuji": {
    //       "address": "0x99Af0CF37d1C6b9Bdfe33cc0A89C00D97D3c42F4",
    //       "blockExplorer": "https://testnet.snowtrace.io/address/{address}",
    //       "color": "#E84142",
    //       "name": "Avalanche Fuji",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-AVAX/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "boba": {
    //   "name": "Boba",
    //   "networks": {
    //     "boba.rinkeby": {
    //       "address": "0x36928Aeedaaf7D85bcA39aDfB2A39ec529ce221a",
    //       "blockExplorer": "https://blockexplorer.rinkeby.boba.network/address/{address}",
    //       "color": "#1cd83d",
    //       "name": "Boba Rinkeby",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BOBA/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.25,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-OLO/USDC-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-FRAX/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.25,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-FXS/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.25,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.25,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "boba.mainnet": {
    //       "mainnet": true,
    //       "address": "0x93f61D0D5F623144e7C390415B70102A9Cc90bA5",
    //       "blockExplorer": "https://blockexplorer.boba.network/address/{address}",
    //       "color": "#007dff",
    //       "name": "Boba Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BOBA/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 3600
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-OLO/USDC-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-FRAX/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    "celo": {
      "name": "Celo",
      "networks": {
        "celo.alfajores": {
          "address": "0x6f8A7E2bBc1eDb8782145cD1089251f6e2C738AE",
          "blockExplorer": "https://alfajores-blockscout.celo-testnet.org/address/{address}",
          "color": "#1cd8d2",
          "name": "Celo Alfajores",
          "pollingPeriod": 45000,
          "feeds": {
            "Price-BTC/USD-6": {
              "label": "$",
              "deviationPercentage": 1.0,
              "maxSecsBetweenUpdates": 3600,
              "minSecsBetweenUpdates": 300
            },
            "Price-CELO/EUR-6": {
              "label": "€",
              "deviationPercentage": 1.0,
              "maxSecsBetweenUpdates": 3600,
              "minSecsBetweenUpdates": 300
            },
            "Price-CELO/USD-6": {
              "label": "$",
              "deviationPercentage": 1.0,
              "maxSecsBetweenUpdates": 3600,
              "minSecsBetweenUpdates": 300
            },
            "Price-ETH/USD-6": {
              "label": "$",
              "deviationPercentage": 1.0,
              "maxSecsBetweenUpdates": 3600,
              "minSecsBetweenUpdates": 300
            },
            "Price-IMMO/MCUSD-6": {
              "label": "$",
              "deviationPercentage": 1.0,
              "maxSecsBetweenUpdates": 3600,
              "minSecsBetweenUpdates": 300
            },
            "Price-NCT/CELO-6": {
              "label": " ",
              "deviationPercentage": 1.0,
              "maxSecsBetweenUpdates": 3600,
              "minSecsBetweenUpdates": 300
            },
            "Price-NCT/USD-6": {
              "isRouted": true,
              "label": "$"
            }
          }
        },
        // "celo.mainnet": {
        //   "mainnet": true,
        //   "address": "0x931673904eB6E69D775e35F522c0EA35575297Cb",
        //   "blockExplorer": "https://explorer.celo.org/address/{address}",
        //   "color": "#ff8100",
        //   "name": "Celo Mainnet",
        //   "pollingPeriod": 45000,
        //   "feeds": {
        //     "Price-CELO/EUR-6": {
        //       "label": "€",
        //       "deviationPercentage": 1.0,
        //       "maxSecsBetweenUpdates": 86400,
        //       "minSecsBetweenUpdates": 900
        //     },
        //     "Price-CELO/USD-6": {
        //       "label": "$",
        //       "deviationPercentage": 1.0,
        //       "maxSecsBetweenUpdates": 86400,
        //       "minSecsBetweenUpdates": 900
        //     },
        //     "Price-BTC/USD-6": {
        //       "label": "$",
        //       "deviationPercentage": 3.5,
        //       "maxSecsBetweenUpdates": 86400,
        //       "minSecsBetweenUpdates": 3600
        //     },
        //     "Price-ETH/USD-6": {
        //       "label": "$",
        //       "deviationPercentage": 3.5,
        //       "maxSecsBetweenUpdates": 86400,
        //       "minSecsBetweenUpdates": 3600
        //     },
        //     "Price-IMMO/MCUSD-6": {
        //       "label": "$",
        //       "deviationPercentage": 1.0,
        //       "maxSecsBetweenUpdates": 86400,
        //       "minSecsBetweenUpdates": 3600
        //     },
        //     "Price-NCT/CELO-6": {
        //       "label": " ",
        //       "deviationPercentage": 3.5,
        //       "maxSecsBetweenUpdates": 86400,
        //       "minSecsBetweenUpdates": 3600
        //     },
        //     "Price-NCT/USD-6": {
        //       "isRouted": true,
        //       "label": "$"
        //     }
        //   }
        // }
      }
    },
    // "conflux": {
    //   "name": "Conflux",
    //   "networks": {
    //     "conflux.tethys": {
    //       "address": "0x806c8dFd322EE2d52b188CC472e0814F64304C32",
    //       "blockExplorer": "https://confluxscan.io/address/{address}",
    //       "color": "#ff0000",
    //       "name": "Conflux Core (Hydra)",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-CFX/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 3600
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 3600
    //         }
    //       }
    //     },
    //     "conflux.espace.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://evm.confluxscan.net/address/{address}",
    //       "color": "#6600ff",
    //       "name": "Conflux eSpace (Mainnet)",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-CFX/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "conflux.testnet": {
    //       "address": "0x8F61C7b18F69bB87D6151B8a5D733E1945ea6c25",
    //       "blockExplorer": "https://testnet.confluxscan.io/address/{address}",
    //       "color": "#6600ff",
    //       "name": "Conflux Core (Testnet)",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-CFX/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         }
    //       }
    //     },
    //     "conflux.espace.testnet": {
    //       "address": "0x49C0BCce51a8B28f92d008394F06d5B259657F33",
    //       "blockExplorer": "https://evmtestnet.confluxscan.net/address/{address}",
    //       "color": "#6600ff",
    //       "name": "Conflux eSpace (Testnet)",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-CFX/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "cronos": {
    //   "name": "Cronos",
    //   "networks": {
    //     "cronos.testnet": {
    //       "address": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
    //       "blockExplorer": "https://testnet.cronoscan.com/address/{address}",
    //       "color": "#6600ff",
    //       "name": "Cronos Testnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-CRO/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ELON/USD-9": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-ELON/USDT-9": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.25,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ADA/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ATOM/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-AVAX/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-CRO/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.25,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DOGE/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DOT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-EOS/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-LINK/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-SHIB/USD-9": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-SOL/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-TUSD/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.25,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.25,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-WBTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-XLM/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ALGO/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-APE/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-MATIC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "cronos.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://cronoscan.com/address/{address}",
    //       "color": "#6600ff",
    //       "name": "Cronos Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-CRO/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-CRO/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ELON/USD-9": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-ELON/USDT-9": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "cube": {
    //   "name": "Cube",
    //   "networks": {
    //     "cube.testnet": {
    //       "address": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
    //       "blockExplorer": "https://testnet.cubescan.network/en-us/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Cube EVM Testnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-CUBE/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-CUBE/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "cube.mainnet": {
    //       "mainnet": true,
    //       "address": "0xE22f48DDdcb34BD34489fE224d7fFC1b0a361D87",
    //       "blockExplorer": "https://cubescan.network/en-us/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Cube EVM Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-CUBE/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-CUBE/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // // "dogechain": {
    // //   "name": "Dogechain",
    // //   "networks": {
    // //     "dogechain.testnet": {
    // //       "address": "0x9E943Ab1FD0D35B3BaDe31AA78D60C485EA1a604",
    // //       "blockExplorer": "https://explorer-testnet.dogechain.dog/address/{address}",
    // //       "color": "#f6006f",
    // //       "name": "Dogechain Testnet",
    // //       "pollingPeriod": 45000,
    // //       "feeds": {
    // //         "Price-DOGE/USD-6": {
    // //           "label": "$",
    // //           "deviationPercentage": 1.0,
    // //           "maxSecsBetweenUpdates": 86400,
    // //           "minSecsBetweenUpdates": 900
    // //         }
    // //       }
    // //     }
    // //   }
    // // },
    // "ethereum": {
    //   "name": "Ethereum",
    //   "networks": {
    //     "ethereum.goerli": {
    //       "address": "0x1cF3Aa9DBF4880d797945726B94B9d29164211BE",
    //       "blockExplorer": "https://goerli.etherscan.io/address/{address}",
    //       "color": "#ff5599",
    //       "name": "Ethereum Goerli",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-NATION/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "ethereum.mainnet": {
    //       "mainnet": true,
    //       "address": "0x83A757eAe821Ad7B520D9A74952337138A80b2AF",
    //       "blockExplorer": "https://etherscan.io/address/{address}",
    //       "color": "#ff5599",
    //       "name": "Ethereum Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 604800,
    //           "minSecsBetweenUpdates": 604800
    //         },
    //         "Price-NATION/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 604800,
    //           "minSecsBetweenUpdates": 86400
    //         }
    //       }
    //     }
    //   }
    // },
    // "harmony": {
    //   "name": "Harmony",
    //   "networks": {
    //     "harmony.testnet": {
    //       "address": "0x08d479a544b05B297454e5CAc133abA3a584AB8E",
    //       "blockExplorer": "https://explorer.pops.one/address/{address}",
    //       "color": "#f6006f",
    //       "name": "Harmony Testnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         }
    //       }
    //     }
    //   }
    // },
    // "kava": {
    //   "name": "Kava",
    //   "networks": {
    //     "kava.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://explorer.kava.io/address/{address}",
    //       "color": "#ff0066",
    //       "name": "Kava EVM Mainnet",
    //       "pollingPeriod": 10000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KAVA/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-KAVA/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "kava.testnet": {
    //       "address": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
    //       "blockExplorer": "https://explorer.evm-alpha.kava.io/address/{address}",
    //       "color": "#ff0066",
    //       "name": "Kava EVM Testnet",
    //       "pollingPeriod": 10000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KAVA/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-KAVA/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "kcc": {
    //   "name": "KCC",
    //   "networks": {
    //     "kcc.testnet": {
    //       "address": "0xba7CF62498340fa3734EC51Ca8A69928F0d9E03a",
    //       "blockExplorer": "https://scan-testnet.kcc.network/address/{address}",
    //       "color": "#ff0066",
    //       "name": "KCC Testnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BORING/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KCS/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-KSW/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-MJT/KCS-9": {
    //           "label": " ",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-SAX/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "kcc.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://scan.kcc.io/address/{address}",
    //       "color": "#ff0066",
    //       "name": "KCC Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BORING/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KCS/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KSW/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-MJT/KCS-9": {
    //           "label": " ",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-SAX/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "klaytn": {
    //   "name": "Klaytn",
    //   "networks": {
    //     "klaytn.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://scope.klaytn.com/account/{address}",
    //       "color": "#ff0066",
    //       "name": "Klaytn Cypress (Mainnet)",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-KLAY/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-KLAY/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KRW/USD-9": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KSP/KRW-6": {
    //           "label": "₩",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KSP/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "klaytn.testnet": {
    //       "address": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
    //       "blockExplorer": "https://baobab.scope.klaytn.com/account/{address}",
    //       "color": "#ff0066",
    //       "name": "Klaytn Baobab (Testnet)",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-KLAY/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-KLAY/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KRW/USD-9": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KSP/KRW-6": {
    //           "label": "₩",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-KSP/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "metis": {
    //   "name": "Metis",
    //   "networks": {
    //     "metis.rinkeby": {
    //       "address": "0x5134EAF08bcf8cE1922991150AAad1774e93751f",
    //       "blockExplorer": "https://stardust-explorer.metis.io/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Metis Rinkeby",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-METIS/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "metis.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://andromeda-explorer.metis.io/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Metis Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-METIS/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "meter": {
    //   "name": "Meter",
    //   "networks": {
    //     "meter.testnet": {
    //       "address": "0xBbDB82a16d7b66bb076879f766042b914F1C7572",
    //       "blockExplorer": "https://scan-warringstakes.meter.io/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Meter Testnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-MTR/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-MTRG/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "meter.mainnet": {
    //       "mainnet": true,
    //       "address": "0xA0Ea8C99159843afdAE9eD092E8eaec0368e8A20",
    //       "blockExplorer": "https://scan.meter.io/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Meter Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-MTR/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-MTRG/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "moonbeam": {
    //   "name": "Moonbeam",
    //   "networks": {
    //     "moonbeam.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://blockscout.moonbeam.network/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Moonbeam Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-GLINT/USDC-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-GLMR/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-GLMR/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-STELLA/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-STELLA/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-GLINT/USD-6": {
    //           "isRouted": true,
    //           "label": "$",
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "moonbeam.moonbase": {
    //       "address": "0x56834Ff8D4b27db647Da97CA3bd8540f7fA0e89D",
    //       "blockExplorer": "https://moonbase.moonscan.io/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Moonbase Alpha",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-GLINT/USD-6": {
    //           "isRouted": true,
    //           "label": "$",
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-GLINT/USDC-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-GLMR/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-GLMR/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-STELLA/USD-6": {
    //           "isRouted": true,
    //           "label": "$"
    //         },
    //         "Price-STELLA/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "moonbeam.moonriver": {
    //       "address": "0xE22f48DDdcb34BD34489fE224d7fFC1b0a361D87",
    //       "blockExplorer": "https://moonriver.moonscan.io/address/{address}",
    //       "color": "#ff6600",
    //       "name": "Moonriver",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-MOVR/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "okxchain": {
    //   "name": "OKXChain",
    //   "networks": {
    //     "okxchain.testnet": {
    //       "address": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
    //       "blockExplorer": "https://www.oklink.com/en/okc-test/address/{address}",
    //       "color": "#ff0066",
    //       "name": "OKXChain Testnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-OKT/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         }
    //       }
    //     },
    //     "okxchain.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://www.oklink.com/en/okc/address/{address}",
    //       "color": "#ff0066",
    //       "name": "OKXChain Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-OKT/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 0.5,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         },
    //         "Price-USDT/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 3600,
    //           "minSecsBetweenUpdates": 300
    //         }
    //       }
    //     }
    //   }
    // },
    // "optimism": {
    //   "name": "Optimism",
    //   "networks": {
    //     "optimism.goerli": {
    //       "address": "0xD9465D38f50f364b3263Cb219e58d4dB2D584530",
    //       "blockExplorer": "https://blockscout.com/optimism/goerli/address/{address}",
    //       "color": "#66ff00",
    //       "name": "Optimism Goerli (testnet)",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-OP/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "optimism.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://optimistic.etherscan.io/address/{address}",
    //       "color": "#66ff00",
    //       "name": "Optimism Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-OP/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "polygon": {
    //   "name": "Polygon",
    //   "networks": {
    //     "polygon.goerli": {
    //       "address": "0x6d5544ca5b35bf2e7a78ace4E7B8d191fe5C9FAb",
    //       "blockExplorer": "https://mumbai.polygonscan.com/address/{address}",
    //       "color": "#66ff00",
    //       "name": "Polygon Mumbai",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 3600
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 3600
    //         },
    //         "Price-MATIC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-VSQ/DAI-6": {
    //           "label": "◈",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "polygon.mainnet": {
    //       "mainnet": true,
    //       "address": "0x3806311c7138ddF2bAF2C2093ff3633E5A73AbD4",
    //       "blockExplorer": "https://polygonscan.com/address/{address}",
    //       "color": "#66ff00",
    //       "name": "Polygon Mainnet",
    //       "pollingPeriod": 45000,
    //       "feeds": {
    //         "Price-BTC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-DAI/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 0.1,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-ETH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-MATIC/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 3.5,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         },
    //         "Price-VSQ/DAI-6": {
    //           "label": "◈",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "reef": {
    //   "name": "Reef",
    //   "networks": {
    //     "reef.testnet": {
    //       "address": "0xB600e92DbA7CA66895Aa353d9128514ba47e7896",
    //       "blockExplorer": "https://testnet.reefscan.com/contract/{address}",
    //       "color": "#66ff00",
    //       "name": "Reef Testnet",
    //       "pollingPeriod": 180000,
    //       "feeds": {
    //         "Price-REEF/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "smartbch": {
    //   "name": "SmartBCH",
    //   "networks": {
    //     "smartbch.amber": {
    //       "address": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
    //       "blockExplorer": "https://www.smartscan.cash/address/{address}",
    //       "color": "#66ff00",
    //       "name": "SmartBCH Amber (testnet)",
    //       "pollingPeriod": 10000,
    //       "feeds": {
    //         "Price-BCH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "smartbch.mainnet": {
    //       "mainnet": true,
    //       "address": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
    //       "blockExplorer": "https://www.smartscan.cash/address/{address}",
    //       "color": "#66ff00",
    //       "name": "SmartBCH Mainnet",
    //       "pollingPeriod": 10000,
    //       "feeds": {
    //         "Price-BCH/USD-6": {
    //           "label": "$",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // },
    // "syscoin": {
    //   "name": "Syscoin",
    //   "networks": {
    //     "syscoin.testnet": {
    //       "address": "0x9E943Ab1FD0D35B3BaDe31AA78D60C485EA1a604",
    //       "blockExplorer": "https://tanenbaum.io/address/{address}",
    //       "color": "#66ff00",
    //       "name": "Syscoin NEVM Tanenbaum (testnet)",
    //       "pollingPeriod": 90000,
    //       "feeds": {
    //         "Price-SYS/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     },
    //     "syscoin.mainnet": {
    //       "address": "0xE22f48DDdcb34BD34489fE224d7fFC1b0a361D87",
    //       "blockExplorer": "https://syscoin.io/address/{address}",
    //       "color": "#66ff00",
    //       "mainnet": true,
    //       "name": "Syscoin NEVM Mainnet",
    //       "pollingPeriod": 90000,
    //       "feeds": {
    //         "Price-SYS/USDT-6": {
    //           "label": "₮",
    //           "deviationPercentage": 1.0,
    //           "maxSecsBetweenUpdates": 86400,
    //           "minSecsBetweenUpdates": 900
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
