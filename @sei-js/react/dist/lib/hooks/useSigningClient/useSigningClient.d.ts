import { SigningStargateClient } from '@cosmjs/stargate';
export declare type UseSigningClient = {
    isLoading: boolean;
    signingClient?: SigningStargateClient;
};
declare const useSigningClient: (customRpcUrl?: string) => UseSigningClient;
export default useSigningClient;
