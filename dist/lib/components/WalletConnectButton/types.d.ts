import { CSSProperties } from 'react';
import { WalletSelectStyles } from '../WalletSelectModal/types';
export declare type WalletConnectButtonProps = {
    buttonClassName?: string;
    buttonStyles?: {
        button?: CSSProperties;
        menu?: CSSProperties;
        menuItem?: CSSProperties;
        walletSelectStyles?: WalletSelectStyles;
    };
};
