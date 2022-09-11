import { BSC_RPC, COIN_CHAIN_ID } from 'src/constants';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
  }
}

export const getWeb3 = () =>
  // eslint-disable-next-line no-async-promise-executor
  new Promise<Web3>(async (resolve, reject) => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      try {
        await window.ethereum.enable();
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: `0x${COIN_CHAIN_ID.toString(16)}` }],
          });
        } catch (error) {
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [
                  {
                    chainId: `0x${COIN_CHAIN_ID.toString(16)}`,
                    rpcUrl: BSC_RPC,
                  },
                ],
              });
            } catch (addError) {
              console.error(addError);
            }
          }
          console.error(error);
        }
        resolve(web3);
      } catch (error) {
        reject(error);
      }
    }
  });
