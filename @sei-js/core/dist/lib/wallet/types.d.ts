import { OfflineSigner, AccountData } from '@cosmjs/proto-signing';
export declare type WalletWindowInterface = {
    enable: (chainId: string) => Promise<void>;
    getOfflineSigner: (chainId: string) => Promise<OfflineSigner>;
    getOfflineSignerAuto(chainId: string): Promise<OfflineSigner>;
    experimentalSuggestChain: (config: object) => Promise<void>;
};
export declare type WalletConnect = {
    accounts: readonly AccountData[];
    offlineSigner: OfflineSigner;
};
export declare type WalletWindowKey = 'keplr' | 'leap' | 'coin98' | 'falcon';
export declare type SupportedWallet = {
    windowKey: WalletWindowKey;
};
export declare type ChainInfo = {
    chainName?: string;
    chainId?: string;
    restUrl?: string;
    rpcUrl?: string;
};
