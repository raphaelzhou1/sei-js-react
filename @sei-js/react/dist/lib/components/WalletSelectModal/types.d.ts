import { WalletWindowKey } from '@sei-js/core';
import { CSSProperties } from 'react';
export declare type WalletSelectStyles = {
    background?: CSSProperties;
    card?: CSSProperties;
    name?: CSSProperties;
};
export declare type WalletSelectModalProps = {
    setShowConnectModal: (show: boolean) => void;
    inputWallets?: WalletWindowKey[];
    walletSelectStyles?: WalletSelectStyles;
};
