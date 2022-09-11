import * as React from 'react';
import {
  BLOCK_PER_YEAR,
  BSC_RPC,
  COIN_CHAIN_ID,
  DEX_FACTORY_CONTRACT,
  DEX_PAIR_CODE_HASH,
  DEX_TOKENS,
  PAIR_ABI,
  SMART_CHEF_ABI,
  STAKING_ITEMS,
  TOKEN_ABI,
} from 'src/constants';
import Web3 from 'web3';
import DexContext from './DexContext';
import { Token } from '@uniswap/sdk-core';
import { Pair } from 'src/core/entities/pair';
import { toBN, toWei } from 'web3-utils';
import useInterval from 'src/hooks/useInterval';

const BN1e18 = toWei('1');

export const DexProvider: React.FC = ({ children }) => {
  const web3Instance = React.useRef<Web3>(new Web3(BSC_RPC));
  const [smartChefApr, setSmartChefApr] = React.useState<Record<string, number>>({});
  const fetchApr = React.useCallback(async () => {
    const tokenPriceMap: Record<string, number> = {};
    await Promise.all(
      DEX_TOKENS.map(async (tokenInfo) => {
        let ratio = toBN(1e18);
        for (let i = 0; i < tokenInfo.routes.length; i++) {
          const route = tokenInfo.routes[i];
          const tokenA = new Token(COIN_CHAIN_ID, route.source_token, route.source_token_decimal);
          const tokenB = new Token(COIN_CHAIN_ID, route.target_token, route.target_token_decimal);
          const address = Pair.getAddress(DEX_PAIR_CODE_HASH, DEX_FACTORY_CONTRACT, tokenA, tokenB);
          const pairContract = new web3Instance.current.eth.Contract(PAIR_ABI, address);
          const reserveResult = await pairContract.methods.getReserves().call();
          const balances = tokenA.sortsBefore(tokenB)
            ? [reserveResult[0], reserveResult[1]]
            : [reserveResult[1], reserveResult[0]];
          ratio = ratio.mul(toBN(balances[1])).div(toBN(balances[0]));
        }
        tokenPriceMap[tokenInfo.contract] = ratio.div(toBN(1e10)).toNumber() / 1e8;
      }),
    );
    const stakingApr: Record<string, number> = {};
    await Promise.all(
      STAKING_ITEMS.map(async (stakingItem) => {
        const currentToken = stakingItem.isLPStaking ? stakingItem.sourceToken1 : stakingItem.stakeToken;
        if (!currentToken || !tokenPriceMap[currentToken] || !tokenPriceMap[stakingItem.rewardToken]) {
          return;
        }
        const smartChefContract = new web3Instance.current.eth.Contract(SMART_CHEF_ABI, stakingItem.contract);
        const rewardPerBlock = toBN(await smartChefContract.methods.rewardPerBlock().call());
        const rewardTokenPerYear = rewardPerBlock.muln(BLOCK_PER_YEAR).div(toBN(BN1e18)).toNumber();
        const rewardPerYear = rewardTokenPerYear * tokenPriceMap[stakingItem.rewardToken];
        let apr = 0;
        if (stakingItem.isLPStaking && stakingItem.sourceToken1) {
          const lpTokenContract = new web3Instance.current.eth.Contract(TOKEN_ABI, stakingItem.stakeToken);
          const totalSupply = toBN(await lpTokenContract.methods.totalSupply().call())
            .div(toBN(BN1e18))
            .toNumber();
          const totalStake = toBN(await lpTokenContract.methods.balanceOf(stakingItem.contract).call())
            .div(toBN(BN1e18))
            .toNumber();
          const tokenContract = new web3Instance.current.eth.Contract(TOKEN_ABI, stakingItem.sourceToken1);
          let totalStakeToken = toBN(await tokenContract.methods.balanceOf(stakingItem.stakeToken).call())
            .muln(2)
            .div(toBN(BN1e18))
            .toNumber();
          if (!totalStakeToken) {
            totalStakeToken = 1e4;
          }
          const totalStakeValue = (totalStake / totalSupply) * totalStakeToken * tokenPriceMap[currentToken];
          apr = (rewardPerYear / totalStakeValue) * 100;
        } else {
          let totalStakeToken = toBN(await smartChefContract.methods.stakedTokenSupply().call())
            .div(toBN(BN1e18))
            .toNumber();
          if (!totalStakeToken) {
            totalStakeToken = 1e4;
          }
          const totalStakeValue = totalStakeToken * tokenPriceMap[currentToken];
          apr = (rewardPerYear / totalStakeValue) * 100;
        }
        stakingApr[stakingItem.contract] = apr;
      }),
    );
    setSmartChefApr(stakingApr);
  }, []);
  useInterval(fetchApr, 10000, true);

  const getApr = React.useCallback(
    (smartChefContract): number => {
      return smartChefApr[smartChefContract];
    },
    [smartChefApr],
  );

  return (
    <DexContext.Provider
      value={{
        getApr,
      }}
    >
      {children}
    </DexContext.Provider>
  );
};
