import React from 'react';
import { SeiWalletProviderProps, WalletProvider } from './types';
export declare const SeiWalletContext: React.Context<WalletProvider>;
declare const SeiWalletProvider: ({ children, chainConfiguration, }: SeiWalletProviderProps) => JSX.Element;
export default SeiWalletProvider;
