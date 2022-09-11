import Web3 from 'web3';
import { TransactionReceipt } from 'web3-core';
import { StakingDetailResponse, StakingUserInfoResponse } from 'src/dto/staking-response';
import { BSC_RPC, SMART_CHEF_ABI } from 'src/constants';

export const fetchStakingDetail = (smartChefContract: string) => {
  return (): Promise<StakingDetailResponse> => {
    return new Promise(async (resolve, reject) => {
      try {
        const web3Instance = new Web3(BSC_RPC);
        const smartChefContractInstance = new web3Instance.eth.Contract(SMART_CHEF_ABI, smartChefContract);
        const response = await smartChefContractInstance.methods.detail().call();
        resolve({
          startBlock: parseInt(response[0]),
          endBlock: parseInt(response[1]),
          poolLimitPerUser: response[2],
          rewardPerBlock: response[3],
          totalDeposit: response[4],
          lockTime: parseInt(response[5]),
          stakeToken: response[6],
          rewardToken: response[7],
        });
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const fetchUserStakingInfo = (web3Instance: Web3 | null, smartChefContract: string) => {
  return (): Promise<StakingUserInfoResponse> => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const [address] = await web3Instance.eth.getAccounts();
        const smartChefContractInstance = new web3Instance.eth.Contract(SMART_CHEF_ABI, smartChefContract);
        const response = await smartChefContractInstance.methods.userInfo(address).call();
        resolve({
          stakeAmount: response[0],
          rewardDebt: response[1],
          lastDepositTime: parseInt(response[2]),
        });
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const fetchStakingPendingReward = (web3Instance: Web3 | null, smartChefContract: string) => {
  return (): Promise<string> => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const [address] = await web3Instance.eth.getAccounts();
        const smartChefContractInstance = new web3Instance.eth.Contract(SMART_CHEF_ABI, smartChefContract, {
          from: address,
        });
        const response = await smartChefContractInstance.methods.pendingReward(address).call();
        resolve(response);
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const depositStaking = (web3Instance: Web3 | null, smartChefContract: string, amount: string) => {
  return new Promise<TransactionReceipt>(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const smartChefContractInstance = new web3Instance.eth.Contract(SMART_CHEF_ABI, smartChefContract, {
        from: address,
      });
      const tx = await smartChefContractInstance.methods.deposit(amount).send();
      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};

export const withdrawStaking = (web3Instance: Web3 | null, smartChefContract: string, amount: string) => {
  return new Promise<TransactionReceipt>(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const smartChefContractInstance = new web3Instance.eth.Contract(SMART_CHEF_ABI, smartChefContract, {
        from: address,
      });
      const tx = await smartChefContractInstance.methods.withdraw(amount).send();
      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};
