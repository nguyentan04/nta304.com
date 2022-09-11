import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';
import { depositStaking, withdrawStaking } from 'src/service';
import { TransactionReceipt } from 'web3-core';
import { StakingDepositRequestParam, StakingWithdrawRequestParam } from 'src/dto/staking-request-params';

export const useStakingDepositMutation = (
  options?: UseMutationOptions<TransactionReceipt, string, StakingDepositRequestParam>,
): UseMutationResult<TransactionReceipt, string, StakingDepositRequestParam> => {
  const mutation = useMutation<TransactionReceipt, string, StakingDepositRequestParam>(
    (params) => depositStaking(params.web3, params.smartChefContract, params.amount),
    options,
  );
  return mutation;
};

export const useStakingWithdrawMutation = (
  options?: UseMutationOptions<TransactionReceipt, string, StakingWithdrawRequestParam>,
): UseMutationResult<TransactionReceipt, string, StakingWithdrawRequestParam> => {
  const mutation = useMutation<TransactionReceipt, string, StakingWithdrawRequestParam>(
    (params) => withdrawStaking(params.web3, params.smartChefContract, params.amount),
    options,
  );
  return mutation;
};
