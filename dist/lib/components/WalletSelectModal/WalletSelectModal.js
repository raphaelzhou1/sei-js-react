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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_outside_click_handler_1 = __importDefault(require("react-outside-click-handler"));
const styles_1 = require("./styles");
const provider_1 = require("../../provider");

const WalletSelectModal = ({ setShowConnectModal, inputWallets, walletSelectStyles, }) => {
    
    const { installedWallets, connectedWallet, setInputWallet, supportedWallets, } = (0, react_1.useContext)(provider_1.SeiWalletContext);
    const wallets = inputWallets || supportedWallets;
    const renderWallet = (wallet) => {
        const renderConnection = () => {
            if (connectedWallet === wallet)
                return react_1.default.createElement("p", null, "connected");
            if (installedWallets.includes(wallet))
                return react_1.default.createElement("p", null, "detected");
            return null;
        };
        const selectWallet = () => {
            if (setInputWallet)
                setInputWallet(wallet);
            setShowConnectModal(false);
        };
        return (react_1.default.createElement("div", { key: wallet, style: styles_1.styles.row, onClick: selectWallet },
            react_1.default.createElement("div", { style: styles_1.styles.info },
                react_1.default.createElement("p", { style: Object.assign(Object.assign({}, styles_1.styles.name), walletSelectStyles === null || walletSelectStyles === void 0 ? void 0 : walletSelectStyles.name) }, wallet)),
            renderConnection()));
    };
    return (react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles_1.styles.background), walletSelectStyles === null || walletSelectStyles === void 0 ? void 0 : walletSelectStyles.background) },
        react_1.default.createElement(react_outside_click_handler_1.default, { onOutsideClick: (e) => {
                e.stopPropagation();
                setShowConnectModal(false);
            } },
            react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles_1.styles.card), walletSelectStyles === null || walletSelectStyles === void 0 ? void 0 : walletSelectStyles.card) },
                react_1.default.createElement("h2", null, "Connect your wallet"),
                react_1.default.createElement("br", null),
                wallets.map(renderWallet)))));
};
exports.default = WalletSelectModal;
