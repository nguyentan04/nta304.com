import { useMutation, UseMutationOptions, UseMutationResult } from 'react-query';
import { requestApproval } from 'src/service';
import { TransactionReceipt } from 'web3-core';
import { RequestApprovalParam } from 'src/dto/web3-request-params';

export const useRequestApprovalMutation = (
  options?: UseMutationOptions<TransactionReceipt, string, RequestApprovalParam>,
): UseMutationResult<TransactionReceipt, string, RequestApprovalParam> => {
  const mutation = useMutation<TransactionReceipt, string, RequestApprovalParam>(
    (params) => requestApproval(params.web3, params.tokenContract, params.spender),
    options,
  );
  return mutation;
};
