import { StargateClient } from '@cosmjs/stargate';
export declare type UseStargateClient = {
    isLoading: boolean;
    stargateClient?: StargateClient;
};
declare const useStargateClient: (customRpcUrl?: string) => UseStargateClient;
export default useStargateClient;
