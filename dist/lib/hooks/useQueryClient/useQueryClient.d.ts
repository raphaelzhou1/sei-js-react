import { getQueryClient } from '@sei-js/core';
export declare type QueryClient = Awaited<ReturnType<typeof getQueryClient>>;
export declare type UseQueryClient = {
    isLoading: boolean;
    queryClient?: QueryClient;
};
declare const useQueryClient: () => UseQueryClient;
export default useQueryClient;
