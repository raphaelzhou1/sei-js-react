"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.SeiWalletContext = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@sei-js/core");
const supportedWallets = core_1.SUPPORTED_WALLETS.map((wallet) => wallet.windowKey);
exports.SeiWalletContext = (0, react_1.createContext)({
    supportedWallets,
    accounts: [],
    installedWallets: [],
    connect: () => undefined,
    disconnect: () => undefined,
});
const SeiWalletProvider = ({ children, chainConfiguration, }) => {
    const [inputWallet, setInputWallet] = (0, react_1.useState)();
    const [offlineSigner, setOfflineSigner] = (0, react_1.useState)();
    const [accounts, setAccounts] = (0, react_1.useState)([]);
    const [connectedWallet, setConnectedWallet] = (0, react_1.useState)();
    const suggestAndConnect = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        if (!inputWallet)
            return;
        if (inputWallet === 'keplr' || inputWallet === 'leap') {
            yield (0, core_1.suggestChain)(inputWallet, {
                chainName: `Sei ${chainConfiguration.chainId}`,
                chainId: chainConfiguration.chainId,
                rpcUrl: chainConfiguration.rpcUrl,
                restUrl: chainConfiguration.restUrl,
            });
        }
        const connectedWallet = yield (0, core_1.connect)(inputWallet, chainConfiguration.chainId);
        if (!connectedWallet)
            return;
        setOfflineSigner(connectedWallet.offlineSigner);
        setAccounts(connectedWallet.accounts);
        if (connectedWallet.accounts.length > 0) {
            setConnectedWallet(inputWallet);
        }
    }), [
        inputWallet,
        chainConfiguration.chainId,
        chainConfiguration.restUrl,
        chainConfiguration.rpcUrl,
    ]);
    (0, react_1.useEffect)(() => {
        if (inputWallet) {
            suggestAndConnect().then(() => setConnectedWallet(inputWallet));
        }
        else {
            setConnectedWallet(undefined);
            setAccounts([]);
            setOfflineSigner(undefined);
        }
    }, [
        inputWallet,
        chainConfiguration.chainId,
        chainConfiguration.restUrl,
        chainConfiguration.rpcUrl,
    ]);
    const installedWallets = (0, react_1.useMemo)(() => window
        ? core_1.SUPPORTED_WALLETS.filter((wallet) => window === null || window === void 0 ? void 0 : window[wallet.windowKey]).map((wallet) => wallet.windowKey)
        : [], [window]);
    const connect = (walletKey) => {
        setInputWallet(walletKey);
    };
    const disconnect = () => {
        setInputWallet(undefined);
    };
    const contextValue = {
        chainId: chainConfiguration.chainId,
        restUrl: chainConfiguration.restUrl,
        rpcUrl: chainConfiguration.rpcUrl,
        supportedWallets,
        accounts,
        offlineSigner,
        connectedWallet,
        installedWallets,
        setInputWallet,
        connect,
        disconnect,
    };
    return (react_1.default.createElement(exports.SeiWalletContext.Provider, { value: contextValue }, children));
};
exports.default = SeiWalletProvider;
