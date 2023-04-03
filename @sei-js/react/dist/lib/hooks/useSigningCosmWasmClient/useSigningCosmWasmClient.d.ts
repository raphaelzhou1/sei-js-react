import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
export declare type UseSigningCosmWasmClient = {
    isLoading: boolean;
    signingCosmWasmClient?: SigningCosmWasmClient;
};
declare const useSigningCosmWasmClient: (customRpcUrl?: string) => UseSigningCosmWasmClient;
export default useSigningCosmWasmClient;
