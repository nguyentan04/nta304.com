import Web3 from 'web3';
import { TransactionReceipt } from 'web3-core';
import { BSC_RPC, NFT_STAKING_CONTRACT, NFT_STAKING_CONTRACT_ABI } from 'src/constants';
import { NFTStakingInfo, NFTStakingTransaction } from 'src/dto';

export const fetchNFTStakingTransaction = (web3Instance: Web3 | null) => {
  return (): Promise<NFTStakingTransaction> => {
    return new Promise(async (resolve, reject) => {
      if (!web3Instance) {
        reject('Web3 is null');
        return;
      }
      try {
        const [address] = await web3Instance.eth.getAccounts();
        const nftStakingContract = new web3Instance.eth.Contract(NFT_STAKING_CONTRACT_ABI, NFT_STAKING_CONTRACT, {
          from: address,
        });
        const response = await nftStakingContract.methods._stakingTransactions(address).call();
        resolve({
          tokenLocked: response[0],
          timeLocked: parseInt(response[1]),
          availableToMint: parseInt(response[2]),
          minted: parseInt(response[3]),
        });
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const fetchNFTStakingInfo = () => {
  return (): Promise<NFTStakingInfo> => {
    return new Promise(async (resolve, reject) => {
      try {
        const web3Instance = new Web3(BSC_RPC);
        const nftStakingContract = new web3Instance.eth.Contract(NFT_STAKING_CONTRACT_ABI, NFT_STAKING_CONTRACT);
        const response = await nftStakingContract.methods.info().call();
        resolve({
          nftContract: response[0],
          erc20TokenContract: response[1],
          erc20TokenForNFT: response[2],
          timeToUnlock: parseInt(response[3]),
          startTime: parseInt(response[4]),
          endTime: parseInt(response[5]),
          totalNFTAvailable: parseInt(response[6]),
          totalValueLocked: response[7],
        });
      } catch (e) {
        reject(e.message);
      }
    });
  };
};

export const stakeNFTStaking = (web3Instance: Web3 | null, amount: string) => {
  return new Promise<TransactionReceipt>(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const nftStakingContract = new web3Instance.eth.Contract(NFT_STAKING_CONTRACT_ABI, NFT_STAKING_CONTRACT, {
        from: address,
      });
      const tx = await nftStakingContract.methods.stake(amount).send();
      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};

export const unstakeNFTStaking = (web3Instance: Web3 | null) => {
  return new Promise<TransactionReceipt>(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const nftStakingContract = new web3Instance.eth.Contract(NFT_STAKING_CONTRACT_ABI, NFT_STAKING_CONTRACT, {
        from: address,
      });
      const tx = await nftStakingContract.methods.unstake().send();
      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};

export const mintNFTFromStaking = (web3Instance: Web3 | null) => {
  return new Promise<TransactionReceipt>(async (resolve, reject) => {
    if (!web3Instance) {
      reject('Web3 is null');
      return;
    }
    try {
      const [address] = await web3Instance.eth.getAccounts();
      const nftStakingContract = new web3Instance.eth.Contract(NFT_STAKING_CONTRACT_ABI, NFT_STAKING_CONTRACT, {
        from: address,
      });
      const tx = await nftStakingContract.methods.mintNFT().send();
      const receipt = await web3Instance.eth.getTransactionReceipt(tx.transactionHash);
      resolve(receipt);
    } catch (e) {
      reject(e.message);
    }
  });
};
