import Web3 from 'web3';
import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { fetchNFTStakingInfo, fetchNFTStakingTransaction } from 'src/service';
import { QUERY_KEY } from 'src/constants';
import { NFTStakingInfo, NFTStakingTransaction } from 'src/dto';

export const useNFTStakingTransactionQuery = (
  web3Instance: Web3 | null,
  options?: UseQueryOptions<NFTStakingTransaction, string, NFTStakingTransaction, QueryKey>,
): UseQueryResult<NFTStakingTransaction> => {
  const result = useQuery<NFTStakingTransaction, string>(
    QUERY_KEY.NFT_STAKING_TRANSACTION,
    fetchNFTStakingTransaction(web3Instance),
    {
      enabled: !!web3Instance,
      ...options,
    },
  );
  return result;
};

export const useNFTStakingInfoQuery = (
  options?: UseQueryOptions<NFTStakingInfo, string, NFTStakingInfo, QueryKey>,
): UseQueryResult<NFTStakingInfo> => {
  const result = useQuery<NFTStakingInfo, string>(QUERY_KEY.NFT_STAKING_INFO, fetchNFTStakingInfo(), {
    ...options,
  });
  return result;
};
