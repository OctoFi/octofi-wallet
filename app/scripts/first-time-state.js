/**
 * @typedef {Object} FirstTimeState
 * @property {Object} config Initial configuration parameters
 * @property {Object} NetworkController Network controller state
 */

/**
 * @type {FirstTimeState}
 */
const initialState = {
  config: {},
  PreferencesController: {
    frequentRpcListDetail: [
      {
        rpcUrl: 'https://rpc.xdaichain.com',
        chainId: '0x64',
        ticker: 'XDAI',
        nickname: 'xDai',
        rpcPrefs: {
          blockExplorerUrl: 'https://blockscout.com/xdai/mainnet/',
        },
      },
      {
        rpcUrl: 'https://rpc-mainnet.maticvigil.com',
        chainId: '0x89',
        ticker: 'MATIC',
        nickname: 'Matic (Polygon)',
        rpcPrefs: {
          blockExplorerUrl: 'https://explorer-mainnet.maticvigil.com',
        },
      },
      {
        rpcUrl: 'https://bsc-dataseed1.binance.org',
        chainId: '0x38',
        ticker: 'BNB',
        nickname: 'Binance Smart Chain',
        rpcPrefs: {
          blockExplorerUrl: 'https://bscscan.com',
        },
      },
      {
        rpcUrl: 'https://api.avax.network/ext/bc/C/rpc',
        chainId: '0xa86a',
        ticker: 'AVAX',
        nickname: 'Avalanche C-Chain',
        rpcPrefs: {
          blockExplorerUrl: 'https://cchain.explorer.avax.network',
        },
      },
    ],
  },
};

export default initialState;
