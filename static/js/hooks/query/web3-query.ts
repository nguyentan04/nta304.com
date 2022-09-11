import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import { fetchAccount, fetchAccountBalance, fetchApprovalStatusQuery } from 'src/service';
import Web3 from 'web3';
import { QUERY_KEY } from 'src/constants';

export const useAccountQuery = (web3Instance: Web3 | null): UseQueryResult<string> => {
  const result = useQuery<string>(QUERY_KEY.ACCOUNT, fetchAccount(web3Instance), {
    refetchOnWindowFocus: false,
    enabled: !!web3Instance,
  });
  return result;
};

export const useAccountBalanceQuery = (
  web3Instance: Web3 | null,
  tokenContract: string,
  options?: UseQueryOptions<string, string, string, QueryKey>,
): UseQueryResult<string> => {
  const result = useQuery<string, string>(QUERY_KEY.ACCOUNT_BALANCE, fetchAccountBalance(web3Instance, tokenContract), {
    enabled: !!web3Instance,
    ...options,
  });
  return result;
};

export const useApprovalStatusQuery = (
  web3Instance: Web3 | null,
  tokenContract: string,
  spender: string,
): UseQueryResult<boolean> => {
  const result = useQuery<boolean>(
    [QUERY_KEY.APPROVE_STATUS, tokenContract, spender],
    fetchApprovalStatusQuery(web3Instance, tokenContract, spender),
    {
      refetchOnWindowFocus: false,
      enabled: !!web3Instance,
    },
  );
  return result;
};
