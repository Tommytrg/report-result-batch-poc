export const witnetAddresses: Record<string, Record<string, { WitnetParserLib: string, WitnetPriceRouter: string, WitnetRandomness?: string, WitnetRequestBoard: string}>> = {
  "default": {
    "ethereum.goerli": {
      "WitnetParserLib": "0xd80ffbc599ad5f2Bb6b33AEaAC5E4Fac3cfaf0D1",
      "WitnetPriceRouter": "0x1cF3Aa9DBF4880d797945726B94B9d29164211BE",
      "WitnetRandomness": "0x6Eb87EcCe6218Cd0e97299331D2aa5d2e53da5cD",
      "WitnetRequestBoard": "0xb58D05247d16b3F1BD6B59c52f7f61fFef02BeC8"
    },
    "ethereum.rinkeby": {
      "WitnetParserLib": "0xF4fE7fA5c5e6CCa213377F10fD98b6b0DC00cd70",
      "WitnetPriceRouter": "0xa50b17C2fc373c247C3b603f83df6A7800cB0DC9",
      "WitnetRandomness": "0x50F742Fbf9a445AE6B2136F5987414A4c5aeE921",
      "WitnetRequestBoard": "0x6cE42a35C61ccfb42907EEE57eDF14Bb69C7fEF4"
    },
    "ethereum.mainnet": {
      "WitnetParserLib": "0xaD18Fd3CC724A11c2B0D8cc7f1B108d8A3388416",
      "WitnetPriceRouter": "0x83A757eAe821Ad7B520D9A74952337138A80b2AF",
      "WitnetRandomness": "0x894907c7Ab64C1092620B5c8Ba039BB6E611eba8",
      "WitnetRequestBoard": "0x9E4fae1c7ac543a81E4E2a5486a0dDaad8194bdA"
    }
  },
  "avalanche": {
    "avalanche.testnet": {
      "WitnetParserLib": "0x62B1BB81E57E9c0E22A0dc6FdeE456146a7D7083",
      "WitnetPriceRouter": "0x99Af0CF37d1C6b9Bdfe33cc0A89C00D97D3c42F4",
      "WitnetRandomness": "0xD47fc24C99fD94f33bD2f33FE373b1447bB10724",
      "WitnetRequestBoard": "0xD9465D38f50f364b3263Cb219e58d4dB2D584530"
    },
    "avalanche.mainnet": {
      "WitnetParserLib": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetPriceRouter": "0xBaaF31F4AAc5ab5334b6E239a83bf4E855C55ea7",
      "WitnetRandomness": "0xa4A73a2A32320282a4d7dDe6a7467AeFA3B7950F",
      "WitnetRequestBoard": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079"
    }
  },
  "boba": {
    "boba.rinkeby": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0x36928Aeedaaf7D85bcA39aDfB2A39ec529ce221a",
      "WitnetRandomness": "0xeAcAcC48eDD5221EC7182E1789d8bFa9dF801dFF",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "boba.mainnet": {
      "WitnetParserLib": "0x6473063EBEabC0606A4159b7d9F79BB306ED0D2A",
      "WitnetPriceRouter": "0x93f61D0D5F623144e7C390415B70102A9Cc90bA5",
      "WitnetRandomness": "0x3D7Ccf6518deBE3d2fd20c4b6AEc3FD904c0Ad29",
      "WitnetRequestBoard": "0xd3AD9a4b26527E3bA5Fc60B75Eb002D47D98e292"      
    }
  },
  "celo": {
    "celo.alfajores": {
      "WitnetParserLib": "0x1A58F1dAD4592814733913Dd59CcEbf55c45C6e1",
      "WitnetPriceRouter": "0x6f8A7E2bBc1eDb8782145cD1089251f6e2C738AE",
      "WitnetRequestBoard": "0x99a0B5eb260Fe3BfcF9d658850e3dD6d6B69183A",
      "WitnetRandomness": "0xbD804467270bCD832b4948242453CA66972860F5"
    },
    "celo.mainnet": {
      "WitnetParserLib": "0x46FF6e05fd0a5fb4D794B99eCAE41c43f4D62d15",
      "WitnetPriceRouter": "0x931673904eB6E69D775e35F522c0EA35575297Cb",
      "WitnetRandomness": "0x3D7Ccf6518deBE3d2fd20c4b6AEc3FD904c0Ad29",
      "WitnetRequestBoard": "0x03E709E6422E30C033456FCde38C70A12553E468"
    }
  },
  "conflux": {
    "conflux.core.testnet": {
      "WitnetParserLib": "0x88E443F2CB310B24dd505AeBECA23e7aBA562326",
      "WitnetPriceRouter": "0x8F61C7b18F69bB87D6151B8a5D733E1945ea6c25",
      "WitnetRandomness": "0x887bC8Db7D91413D1575071925Ee8d77fE2CBc81",
      "WitnetRequestBoard": "0x8aB653B73a0e0552dDdce8c76F97c6AA826EFbD4"
    },
    "conflux.core.mainnet": {
      "WitnetParserLib": "0x8A026e6956B4DB3E81bb113401798e59cFBEA4C6",
      "WitnetPriceRouter": "0x806c8dFd322EE2d52b188CC472e0814F64304C32",
      "WitnetRandomness": "0x8C3824A9A6C3F5B0ac107E2c7dBc8d88c14aF6D9",
      "WitnetRequestBoard": "0x84C708bfd79bBC83Ad8753dAb1852EfE9D6712CC"
    },
    "conflux.espace.testnet": {
      "WitnetParserLib": "0x2881F0106A1894add7600B4B147e715078Fded03",
      "WitnetPriceRouter": "0x49C0BCce51a8B28f92d008394F06d5B259657F33",
      "WitnetRandomness": "0xa784093826e2894Ab3Db315f4e05F0F26407BBfF",
      "WitnetRequestBoard": "0x0C4be6AA667df48de54BA174bE7948875fdf152B"
    },
    "conflux.espace.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x1ebd93231a7fe551e1d6405404df34909eff4c2c",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "cronos": {
    "cronos.testnet": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
      "WitnetRandomness": "0x0017A464A86f48B342Cae3b8Fe29cFCDaA7b0643",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "cronos.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x3737be6FcFf5B3B0f9DCc9a9ae1Da56561D0d0d3",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "cube": {
    "cube.testnet": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
      "WitnetRandomness": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "cube.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xE22f48DDdcb34BD34489fE224d7fFC1b0a361D87",
      "WitnetRandomness": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "dogechain": {
    "dogechain.testnet": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0x9E943Ab1FD0D35B3BaDe31AA78D60C485EA1a604",
      "WitnetRandomness": "0xD9465D38f50f364b3263Cb219e58d4dB2D584530",      
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    }
  },
  "harmony": {
    "harmony.testnet#0": {
      "WitnetParserLib": "0x315cfa2F1108d1B490302d79AB4a5A99452e5800",
      "WitnetPriceRouter": "0x08d479a544b05B297454e5CAc133abA3a584AB8E",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    }
  },
  "hsc": {
    "hsc.testnet": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
      "WitnetRandomness": "0xe1330491bdC37fc4E8801843Bb3015815822F8A8",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    }
  },
  "kava": {
    "kava.testnet": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
      "WitnetRandomness": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "kava.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x1ebD93231a7fE551E1d6405404Df34909eff4c2C",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "kcc": {
    "kcc.testnet": {
      "WitnetParserLib": "0x351cEe820E3A393dCF126FbEE60928a80E99C2e1",
      "WitnetPriceRouter": "0xba7CF62498340fa3734EC51Ca8A69928F0d9E03a",
      "WitnetRandomness": "0x76c72518060952FAec3f90666F047e39E3333f7E",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "kcc.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x1ebd93231a7fe551e1d6405404df34909eff4c2c",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "klaytn": {
    "klaytn.testnet": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
      "WitnetRandomness": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "klaytn.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x1ebD93231a7fE551E1d6405404Df34909eff4c2C",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "meter": {
    "meter.testnet": {
      "WitnetParserLib": "0x3a46EF336f619e69dcDCa36A6772596E0fD800B3",
      "WitnetPriceRouter": "0xBbDB82a16d7b66bb076879f766042b914F1C7572",
      "WitnetRandomness": "0x89de43D6295D960Af1F2029a66CE680c7f798fC1",
      "WitnetRequestBoard": "0xF99883aa51Fb76E37De6aC37854230d2337D2752"
    },
    "meter.mainnet": {
      "WitnetParserLib": "0x60507Ef497EC61d407cD6Fa1c65FE820620bfA88",
      "WitnetPriceRouter": "0xA0Ea8C99159843afdAE9eD092E8eaec0368e8A20",
      "WitnetRandomness": "0xE189B1D26dAAB45cd344452f29Db8E93B5C7FaF1",
      "WitnetRequestBoard": "0x4e645446799776B9670D18E1ecBCad059987eaCa"
    }
  },
  "metis": {
    "metis.rinkeby": {
      "WitnetParserLib": "0xAec43b0DED0148B8456B355Ec2dA3930b42bFA08",
      "WitnetPriceRouter": "0x5134EAF08bcf8cE1922991150AAad1774e93751f",
      "WitnetRandomness": "0x7b0D67739b5B9480080817E5b921EbbA714236ca",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "metis.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0xB280e3B785f615C000A8BeBb55C35eCD2376F2eb",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "moonbeam": {
    "moonbeam.moonbase": {
      "WitnetParserLib": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
      "WitnetPriceRouter": "0x56834Ff8D4b27db647Da97CA3bd8540f7fA0e89D",
      "WitnetRandomness": "0x45111778a7db1356DaAB576cBe73681F0745182c",
      "WitnetRequestBoard": "0x02Cd4089679EAA9431a88170fd784e7dE78A2425"
    },
    "moonbeam.moonriver": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xE22f48DDdcb34BD34489fE224d7fFC1b0a361D87",
      "WitnetRandomness": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    },
    "moonbeam.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x1ebD93231a7fE551E1d6405404Df34909eff4c2C",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "okxchain": {
    "okxchain.testnet": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
      "WitnetRandomness": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "okxchain.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x1ebD93231a7fE551E1d6405404Df34909eff4c2C",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "optimism": {
    "optimism.goerli": {
      "WitnetParserLib": "0x02Cd4089679EAA9431a88170fd784e7dE78A2425",
      "WitnetPriceRouter": "0xD9465D38f50f364b3263Cb219e58d4dB2D584530",
      "WitnetRandomness": "0x9E943Ab1FD0D35B3BaDe31AA78D60C485EA1a604",
      "WitnetRequestBoard": "0x0985FDe9f424fe4f5AC516F66bAf5591e18aCBEb"
    },
    "optimism.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x1ebD93231a7fE551E1d6405404Df34909eff4c2C",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "polygon": {
    "polygon.goerli": {
      "WitnetParserLib": "0x70767887abBF23291B24620dE6bcEBe8d8F1e6F3",
      "WitnetPriceRouter": "0x6d5544ca5b35bf2e7a78ace4E7B8d191fe5C9FAb",
      "WitnetRandomness": "0x0178287DfECA2F13F342512282bc8B59e774aE43",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "polygon.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0x3806311c7138ddF2bAF2C2093ff3633E5A73AbD4",
      "WitnetRandomness": "0xc8c0d4dB2D7801D6E2A863934597cFD31689f7D5",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "reef": {
    "reef.testnet": {
      "WitnetParserLib": "0x5757040246996BFcDC890CD1CcdE6D414eAbFF74",
      "WitnetPriceRouter": "0xB600e92DbA7CA66895Aa353d9128514ba47e7896",
      "WitnetRandomness": "0x3f159F3bD5c27A936E0C897a4584Eb1647a62197",
      "WitnetRequestBoard": "0x77d64ec18b0a14fefe673e3aa194c816c2383232"
    }
  },
  "smartbch": {
    "smartbch.amber": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0xB4B2E2e00e9d6E5490d55623E4F403EC84c6D33f",
      "WitnetRandomness": "0xeD074DA2A76FD2Ca90C1508930b4FB4420e413B0",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "smartbch.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRandomness": "0x1ebD93231a7fE551E1d6405404Df34909eff4c2C",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  },
  "syscoin": {
    "syscoin.testnet": {
      "WitnetParserLib": "0x7D8A488BACB56dA2De17628e26a21fFd97792b81",
      "WitnetPriceRouter": "0x9E943Ab1FD0D35B3BaDe31AA78D60C485EA1a604",
      "WitnetRandomness": "0x56834Ff8D4b27db647Da97CA3bd8540f7fA0e89D",
      "WitnetRequestBoard": "0x58D8ECe142c60f5707594a7C1D90e46eAE5AF431"
    },
    "syscoin.mainnet": {
      "WitnetParserLib": "0x1D9c4a8f8B7b5F9B8e2641D81927f8F8Cc7fF079",
      "WitnetPriceRouter": "0xE22f48DDdcb34BD34489fE224d7fFC1b0a361D87",
      "WitnetRandomness": "0xD39D4d972C7E166856c4eb29E54D3548B4597F53",
      "WitnetRequestBoard": "0xd653fbd7c736838289262F0F41A458f35393C88a"
    }
  }
}
