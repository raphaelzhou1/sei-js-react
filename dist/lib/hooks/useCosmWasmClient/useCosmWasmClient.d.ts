import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate';
export declare type UseCosmWasmClient = {
    isLoading: boolean;
    cosmWasmClient?: CosmWasmClient;
};
declare const useCosmWasmClient: (customRpcUrl?: string) => UseCosmWasmClient;
export default useCosmWasmClient;
