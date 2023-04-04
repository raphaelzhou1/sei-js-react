import { Keplr as KeplrWindow } from '@keplr-wallet/types';
import { WalletConnect, WalletWindowInterface, WalletWindowKey } from './types';
declare global {
    interface Window {
        coin98?: {
            keplr: KeplrWindow;
        };
        falcon?: WalletWindowInterface;
        keplr?: KeplrWindow;
        leap?: WalletWindowInterface;
    }
}
export declare const connect: (inputWallet: WalletWindowKey, chainId: string) => Promise<WalletConnect>;
