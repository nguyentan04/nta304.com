import Web3 from 'web3';
import { COIN_TOTAL_SUPPLY, MAX_APPROVE_AMOUNT, TOKEN_ABI } from 'src/constants';
import { TransactionReceipt } from 'web3-core';

export const fetchAccount = (web3Instance: Web3 | null) => {
  return (): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const [address] = await web3Instance.eth.getAccounts();
        resolve(address);
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const fetchAccountBalance = (web3Instance: Web3 | null, tokenContract: string) => {
  return (): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const [address] = await web3Instance.eth.getAccounts();
        const tokenContractInstance = new web3Instance.eth.Contract(TOKEN_ABI, tokenContract, { from: address });
        const balance = await tokenContractInstance.methods.balanceOf(address).call();
        resolve(balance);
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const fetchApprovalStatusQuery = (web3Instance: Web3 | null, tokenContract: string, spender: string) => {
  return (): Promise<boolean> => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const { toBN } = web3Instance.utils;
        const [address] = await web3Instance.eth.getAccounts();
        const tokenContractInstance = new web3Instance.eth.Contract(TOKEN_ABI, tokenContract, { from: address });
        const allowance = await tokenContractInstance.methods.allowance(address, spender).call();
        if (toBN(allowance).gt(toBN(COIN_TOTAL_SUPPLY))) {
          return resolve(true);
        }
        resolve(false);
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const requestApproval = (web3Instance: Web3 | null, tokenContract: string, spender: string) => {
  return new Promise<TransactionReceipt>(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const tokenContractInstance = new web3Instance.eth.Contract(TOKEN_ABI, tokenContract, { from: address });
      const tx = await tokenContractInstance.methods.approve(spender, MAX_APPROVE_AMOUNT).send();
      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};
