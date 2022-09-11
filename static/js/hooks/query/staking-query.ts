import Web3 from 'web3';
import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { fetchStakingDetail, fetchStakingPendingReward, fetchUserStakingInfo } from 'src/service';
import { QUERY_KEY } from 'src/constants';
import { StakingDetailResponse, StakingUserInfoResponse } from 'src/dto/staking-response';

export const useStakingDetailQuery = (
  smartChefContract: string,
  options?: UseQueryOptions<StakingDetailResponse, string, StakingDetailResponse, QueryKey>,
): UseQueryResult<StakingDetailResponse> => {
  const result = useQuery<StakingDetailResponse, string>(
    [QUERY_KEY.STAKING_DETAIL, smartChefContract],
    fetchStakingDetail(smartChefContract),
    {
      ...options,
    },
  );
  return result;
};

export const useStakingUserInfoQuery = (
  web3Instance: Web3 | null,
  smartChefContract: string,
  options?: UseQueryOptions<StakingUserInfoResponse, string, StakingUserInfoResponse, QueryKey>,
): UseQueryResult<StakingUserInfoResponse> => {
  const result = useQuery<StakingUserInfoResponse, string>(
    [QUERY_KEY.STAKING_USER_INFO, smartChefContract],
    fetchUserStakingInfo(web3Instance, smartChefContract),
    {
      enabled: !!web3Instance,
      ...options,
    },
  );
  return result;
};

export const useStakingPendingRewardQuery = (
  web3Instance: Web3 | null,
  smartChefContract: string,
  options?: UseQueryOptions<string, string, string, QueryKey>,
): UseQueryResult<string> => {
  const result = useQuery<string, string>(
    [QUERY_KEY.STAKING_PENDING_REWARD, smartChefContract],
    fetchStakingPendingReward(web3Instance, smartChefContract),
    {
      enabled: !!web3Instance,
      ...options,
    },
  );
  return result;
};
