"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestChain = exports.getChainSuggest = exports.SUPPORTED_WALLETS = void 0;
const KEPLR_WALLET = {
    windowKey: 'keplr',
};
const LEAP_WALLET = {
    windowKey: 'leap',
};
const FALCON_WALLET = {
    windowKey: 'falcon',
};
const COIN_98_WALLET = {
    windowKey: 'coin98',
};
exports.SUPPORTED_WALLETS = [
    KEPLR_WALLET,
    LEAP_WALLET,
    COIN_98_WALLET,
    FALCON_WALLET,
];
const DEFAULT_CHAIN_INFO = {
    chainName: 'Sei Testnet',
    chainId: 'atlantic-1',
    restUrl: 'https://sei-chain-incentivized.com/sei-chain-app/',
    rpcUrl: 'https://sei-chain-incentivized.com/sei-chain-tm/',
};
const getChainSuggest = (chainInfo = {}) => {
    const prefix = 'sei';
    const { chainId, chainName, rpcUrl, restUrl } = Object.assign(Object.assign({}, DEFAULT_CHAIN_INFO), chainInfo);
    return {
        chainId: chainId,
        chainName: chainName,
        rpc: rpcUrl,
        rest: restUrl,
        bip44: {
            coinType: 118,
        },
        bech32Config: {
            bech32PrefixAccAddr: prefix,
            bech32PrefixAccPub: `${prefix}pub`,
            bech32PrefixValAddr: `${prefix}valoper`,
            bech32PrefixValPub: `${prefix}valoperpub`,
            bech32PrefixConsAddr: `${prefix}valcons`,
            bech32PrefixConsPub: `${prefix}valconspub`,
        },
        currencies: [
            {
                coinDenom: 'SEI',
                coinMinimalDenom: 'usei',
                coinDecimals: 6,
            },
            {
                coinDenom: 'USDC',
                coinMinimalDenom: 'uusdc',
                coinDecimals: 6,
                coinGeckoId: 'usd-coin',
            },
            {
                coinDenom: 'ATOM',
                coinMinimalDenom: 'uatom',
                coinDecimals: 6,
                coinGeckoId: 'cosmos',
            },
            {
                coinDenom: 'WETH',
                coinMinimalDenom: 'ibc/C2A89D98873BB55B62CE86700DFACA646EC80352E8D03CC6CF34DD44E46DC75D',
                coinDecimals: 18,
                coinGeckoId: 'weth',
            },
            {
                coinDenom: 'WBTC',
                coinMinimalDenom: 'ibc/42BCC21A2B784E813F8878739FD32B4AA2D0A68CAD94F4C88B9EA98609AB0CCD',
                coinDecimals: 8,
                coinGeckoId: 'bitcoin',
            },
            {
                coinDenom: 'aUSDC',
                coinMinimalDenom: 'ibc/6D45A5CD1AADE4B527E459025AC1A5AEF41AE99091EF3069F3FEAACAFCECCD21',
                coinDecimals: 6,
                coinGeckoId: 'usd-coin',
            },
            {
                coinDenom: 'UST2',
                coinMinimalDenom: 'factory/sei1466nf3zuxpya8q9emxukd7vftaf6h4psr0a07srl5zw74zh84yjqpeheyc/uust2',
                coinDecimals: 6,
            },
            {
                coinDenom: 'uCeler',
                coinMinimalDenom: 'factory/sei174t9p63nzlmsycmd9x9zxx3ejq9lp2y9f69rp9/uceler',
                coinDecimals: 6,
            },
        ],
        feeCurrencies: [
            {
                coinDenom: 'SEI',
                coinMinimalDenom: 'usei',
                coinDecimals: 6,
            },
        ],
        stakeCurrency: {
            coinDenom: 'SEI',
            coinMinimalDenom: 'usei',
            coinDecimals: 6,
        },
        coinType: 118,
        features: ['stargate', 'ibc-transfer', 'cosmwasm'],
    };
};
exports.getChainSuggest = getChainSuggest;
const suggestChain = (inputWallet, chainInfo) => __awaiter(void 0, void 0, void 0, function* () {
    if (typeof window === 'undefined' || !window) {
        throw new Error('Window is undefined.');
    }
    const windowKey = inputWallet === 'coin98' ? 'keplr' : inputWallet;
    const walletProvider = window[windowKey];
    if (!walletProvider) {
        throw new Error(`Wallet ${inputWallet} is not installed.`);
    }
    const config = (0, exports.getChainSuggest)(chainInfo);
    yield walletProvider.experimentalSuggestChain(config);
});
exports.suggestChain = suggestChain;
