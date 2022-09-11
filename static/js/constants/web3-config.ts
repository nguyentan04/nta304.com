import { AbiItem } from 'web3-utils';

type StakingItem = {
  name: string;
  stakeToken: string;
  rewardToken: string;
  contract: string;
  isLPStaking: boolean;
  sourceToken1?: string;
  sourceToken2?: string;
  description: string;
  lockTime: number;
};

export const MAX_APPROVE_AMOUNT = '115792089237316195423570985008687907853269984665640564039457584007913129639935';

export const COIN_CODE = 'DGZ';
export const COIN_FUND_CODE = 'USDT';
export const COIN_DECIMAL = 18;
export const COIN_TOTAL_SUPPLY = '1000000000000000000000000000000';

// DEV
// export const COIN_CHAIN_ID = 97;
// export const BSC_SCAN_HOST = 'https://testnet.bscscan.com/';
// export const BSC_RPC = 'https://data-seed-prebsc-1-s1.binance.org:8545/';
// export const ICO_CONTRACT = '0xc099d7dC2511b5aeCe11b0990808639d8B19CfA0';
// export const ICO_TOKEN_CONTRACT = '0x18B12c470569d48f13e665ABbC8fB14DD1FE4a5e';
// export const FUND_TOKEN_CONTRACT = '0x4aD3b9f9a08c8400B67c7f79f1983592de9496b5';
// export const FUND_TOKEN_DECIMAL = 18;
// export const CURRENT_ICO_ID = '1004';
// export const VESTING_SEGMENT_TIME = 600;
// export const BLOCK_PER_YEAR = 10512000;

// export const STAKING_ITEMS: StakingItem[] = [
//   {
//     name: 'DGZ Flexible Staking',
//     stakeToken: '0x18B12c470569d48f13e665ABbC8fB14DD1FE4a5e',
//     rewardToken: '0x18B12c470569d48f13e665ABbC8fB14DD1FE4a5e',
//     contract: '0xd72c76caDEFCBF2AEdcA7daAAc4A983f2FFB42d9',
//     description: 'You can unstake from this pool anytime',
//     lockTime: 0,
//     isLPStaking: false,
//   },
//   {
//     name: 'DGZ Locked Staking',
//     stakeToken: '0x18B12c470569d48f13e665ABbC8fB14DD1FE4a5e',
//     rewardToken: '0x18B12c470569d48f13e665ABbC8fB14DD1FE4a5e',
//     contract: '0x88b2c8a275E0F92048AE34413B91D30dB50a6C3d',
//     description: 'Your funds will be locked for 2 months',
//     lockTime: 600,
//     isLPStaking: false,
//   },
// ];
// export const DEX_FACTORY_CONTRACT = '0xB7926C0430Afb07AA7DEfDE6DA862aE0Bde767bc';
// export const DEX_PAIR_CODE_HASH = '0xecba335299a6693cb2ebc4782e74669b84290b6378ea3a3873c7231a8d7d1074';
// export const DEX_TOKENS = [
//   {
//     contract: '0x18B12c470569d48f13e665ABbC8fB14DD1FE4a5e',
//     routes: [
//       {
//         source_token: '0x18B12c470569d48f13e665ABbC8fB14DD1FE4a5e',
//         source_token_decimal: 18,
//         target_token: '0xe75840611532802DBec3A4010fd16533389Bc549',
//         target_token_decimal: 18,
//       },
//     ],
//   },
// ];

// export const PAIR_ABI: AbiItem[] = [
//   {
//     constant: true,
//     inputs: [],
//     name: 'getReserves',
//     outputs: [
//       {
//         internalType: 'uint112',
//         name: 'reserve0',
//         type: 'uint112',
//       },
//       {
//         internalType: 'uint112',
//         name: 'reserve1',
//         type: 'uint112',
//       },
//       {
//         internalType: 'uint32',
//         name: 'blockTimestampLast',
//         type: 'uint32',
//       },
//     ],
//     payable: false,
//     stateMutability: 'view',
//     type: 'function',
//   },
// ];

// // New App Config
// export const NFT_CONTRACT = '0x1850C326DabA31fbe7E2fd331dacDfaf061e9777';
// export const ERC20_TOKEN_FOR_NFT_STAKING = '0x2D9b62Fa8a46DD2974f0ea20C52F659DaFbf2809';
// export const ERC20_TOKEN_DECIMAL_FOR_NFT_STAKING = 18;
// export const NFT_STAKING_CONTRACT = '0xf96405C383Db80f367DEEc6af4E2Ee56D945B3CD';

// <================================================================================================>

// PROD
export const COIN_CHAIN_ID = 56;
export const BSC_SCAN_HOST = 'https://bscscan.com/';
export const BSC_RPC = 'https://bsc-dataseed.binance.org/';
export const ICO_CONTRACT = '0x61DB2c3a1434E0244345D7764777C81BE8EB3890';
export const ICO_TOKEN_CONTRACT = '0xc81177F2be4677EEad8aE66EB78F21f172DBD1b5';
export const FUND_TOKEN_CONTRACT = '0x55d398326f99059fF775485246999027B3197955';
export const FUND_TOKEN_DECIMAL = 18;
export const CURRENT_ICO_ID = '1001';
export const VESTING_SEGMENT_TIME = 2592000;
export const BLOCK_PER_YEAR = 10512000;

export const STAKING_ITEMS: StakingItem[] = [
  {
    name: 'DGZ Flexible Staking',
    stakeToken: '0xc81177F2be4677EEad8aE66EB78F21f172DBD1b5',
    rewardToken: '0xc81177F2be4677EEad8aE66EB78F21f172DBD1b5',
    contract: '0x2CcD4abEE0C9a311F02E7e3188f182c28717A93c',
    description: 'You can unstake from this pool anytime',
    lockTime: 0,
    isLPStaking: false,
  },
  {
    name: 'DGZ Locked Staking',
    stakeToken: '0xc81177F2be4677EEad8aE66EB78F21f172DBD1b5',
    rewardToken: '0xc81177F2be4677EEad8aE66EB78F21f172DBD1b5',
    contract: '0x97C2b8C5892627B47Ae8B8603F26b40D9a58c7B9',
    description: 'Your funds will be locked for 2 months',
    lockTime: 5184000,
    isLPStaking: false,
  },
];
export const DEX_FACTORY_CONTRACT = '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73';
export const DEX_PAIR_CODE_HASH = '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5';
export const DEX_TOKENS = [
  {
    contract: '0xc81177F2be4677EEad8aE66EB78F21f172DBD1b5',
    routes: [
      {
        source_token: '0xc81177F2be4677EEad8aE66EB78F21f172DBD1b5',
        source_token_decimal: 18,
        target_token: '0x55d398326f99059fF775485246999027B3197955',
        target_token_decimal: 18,
      },
    ],
  },
];

export const PAIR_ABI: AbiItem[] = [
  { inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'spender', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'Burn',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount0', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'amount1', type: 'uint256' },
    ],
    name: 'Mint',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'sender', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount0In', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'amount1In', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'amount0Out', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'amount1Out', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
    ],
    name: 'Swap',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint112', name: 'reserve0', type: 'uint112' },
      { indexed: false, internalType: 'uint112', name: 'reserve1', type: 'uint112' },
    ],
    name: 'Sync',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'from', type: 'address' },
      { indexed: true, internalType: 'address', name: 'to', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    constant: true,
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'MINIMUM_LIQUIDITY',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'PERMIT_TYPEHASH',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'burn',
    outputs: [
      { internalType: 'uint256', name: 'amount0', type: 'uint256' },
      { internalType: 'uint256', name: 'amount1', type: 'uint256' },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'factory',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'getReserves',
    outputs: [
      { internalType: 'uint112', name: '_reserve0', type: 'uint112' },
      { internalType: 'uint112', name: '_reserve1', type: 'uint112' },
      { internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32' },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: '_token0', type: 'address' },
      { internalType: 'address', name: '_token1', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'kLast',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'mint',
    outputs: [{ internalType: 'uint256', name: 'liquidity', type: 'uint256' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'nonces',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'owner', type: 'address' },
      { internalType: 'address', name: 'spender', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
      { internalType: 'uint256', name: 'deadline', type: 'uint256' },
      { internalType: 'uint8', name: 'v', type: 'uint8' },
      { internalType: 'bytes32', name: 'r', type: 'bytes32' },
      { internalType: 'bytes32', name: 's', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'price0CumulativeLast',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'price1CumulativeLast',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ internalType: 'address', name: 'to', type: 'address' }],
    name: 'skim',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'uint256', name: 'amount0Out', type: 'uint256' },
      { internalType: 'uint256', name: 'amount1Out', type: 'uint256' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'bytes', name: 'data', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'symbol',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [],
    name: 'sync',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token0',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'token1',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { internalType: 'address', name: 'from', type: 'address' },
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'value', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

// New App Config
export const NFT_CONTRACT = '0x0F8c312B554C7E63C87008F14F9Ea64fa42ab26E';
export const ERC20_TOKEN_FOR_NFT_STAKING = '0xc81177F2be4677EEad8aE66EB78F21f172DBD1b5';
export const ERC20_TOKEN_DECIMAL_FOR_NFT_STAKING = 18;
export const NFT_STAKING_CONTRACT = '0x2C59Ebc0fBC22048FCebC2dEC6D6373999298804';

export const TOKEN_ABI: AbiItem[] = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'allowance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const ICO_ABI: AbiItem[] = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_icoID',
        type: 'uint256',
      },
    ],
    name: 'getICO',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'ID',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'admin',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'icoToken',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'fundToken',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'icoTokenSale',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'fundTokenRaise',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'startTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'claimTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'cliffTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'vestingSegment',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'tgeRatio',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'status',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: 'minimumDeposit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalFundAmount',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalParticipant',
            type: 'uint256',
          },
        ],
        internalType: 'struct ICODetail',
        name: 'itemDetail',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_icoID',
        type: 'uint256',
      },
    ],
    name: 'getUserTransaction',
    outputs: [
      {
        components: [
          {
            internalType: 'uint256',
            name: 'depositAmount',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'vestingWallet',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'hasClaimed',
            type: 'bool',
          },
        ],
        internalType: 'struct UserTransaction',
        name: 'transaction',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_icoID',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_icoID',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_icoID',
        type: 'uint256',
      },
    ],
    name: 'claim',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const VESTING_WALLET_ABI: AbiItem[] = [
  {
    inputs: [],
    name: 'info',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'segmentPassed',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingAmount',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const SMART_CHEF_ABI: AbiItem[] = [
  {
    inputs: [],
    name: 'endBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lockTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardPerBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakedToken',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'startBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakedTokenSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'userInfo',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardDebt',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastDepositTime',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_user',
        type: 'address',
      },
    ],
    name: 'pendingReward',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'detail',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const NFT_CONTRACT_ABI: AbiItem[] = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const NFT_STAKING_CONTRACT_ABI: AbiItem[] = [
  {
    inputs: [],
    name: '_endTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: '_erc20TokenStakePerNFT',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: '_stakeERC20Token',
    outputs: [
      {
        internalType: 'contract IERC20Decimal',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: 'info',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: '_stakingTransactions',
    outputs: [
      {
        internalType: 'uint256',
        name: '_tokenLocked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_timeLocked',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_availableToMint',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minted',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: '_startTime',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: '_timeToUnlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: '_totalNFTAvailable',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
  },
  {
    inputs: [],
    name: '_totalValueLocked',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'tokenAmount_',
        type: 'uint256',
      },
    ],
    name: 'stake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mintNFT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export const QUERY_KEY = {
  APPROVE_STATUS: 'approval_status',
  APPROVE_RECEIPT: 'approve_receipt',
  ACCOUNT: 'account',
  ACCOUNT_BALANCE: 'account_balance',
  ICO_DETAIL: 'ico_detail',
  STAKING_DETAIL: 'staking_detail',
  STAKING_USER_INFO: 'staking_user_info',
  STAKING_PENDING_REWARD: 'staking_pending_reward',
  TRANSACTION_DETAIL: 'transaction_detail',
  VESTING_WALLET_INFO: 'vesting_wallet_info',
  NFT_STAKING_TRANSACTION: 'nft_staking_transaction',
  NFT_STAKING_INFO: 'nft_staking_info',
};
