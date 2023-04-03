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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncateAddress = void 0;
const react_1 = __importStar(require("react"));
const styles_1 = require("./styles");
const react_outside_click_handler_1 = __importDefault(require("react-outside-click-handler"));
const provider_1 = require("../../provider");
const WalletSelectModal_1 = require("../WalletSelectModal");
const truncateAddress = (address) => `${address.slice(0, 3)}....${address.slice(address.length - 5)}`;
exports.truncateAddress = truncateAddress;
const WalletConnectButton = ({ buttonStyles, buttonClassName, }) => {
    const [showMenu, setShowMenu] = (0, react_1.useState)(false);
    const [recentlyCopied, setRecentlyCopied] = (0, react_1.useState)(false);
    const [showConnectModal, setShowConnectModal] = (0, react_1.useState)(false);
    const { connectedWallet, accounts, setInputWallet } = (0, react_1.useContext)(provider_1.SeiWalletContext);
    const changeWallet = () => {
        if (setInputWallet)
            setInputWallet(undefined);
        setShowConnectModal(true);
        setShowMenu(false);
    };
    const copyAddress = () => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        setRecentlyCopied(true);
        yield navigator.clipboard.writeText((_a = accounts === null || accounts === void 0 ? void 0 : accounts[0]) === null || _a === void 0 ? void 0 : _a.address);
        setTimeout(() => {
            setRecentlyCopied(false);
        }, 600);
    });
    const disconnect = () => {
        if (setInputWallet)
            setInputWallet(undefined);
    };
    const renderButton = () => {
        if (!connectedWallet) {
            return (react_1.default.createElement("button", { className: buttonClassName, style: buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.button, onClick: () => setShowConnectModal(true) }, "connect wallet"));
        }
        const accountLabel = (accounts === null || accounts === void 0 ? void 0 : accounts[0]) === undefined
            ? 'connecting...'
            : (0, exports.truncateAddress)(accounts[0].address);
        return (react_1.default.createElement("div", { style: styles_1.styles.wrapper },
            react_1.default.createElement("button", { className: buttonClassName, style: buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.button, onClick: () => setShowMenu(true) }, accountLabel),
            showMenu && (react_1.default.createElement(react_outside_click_handler_1.default, { onOutsideClick: () => setShowMenu(false) },
                react_1.default.createElement("div", { style: Object.assign(Object.assign({}, styles_1.styles.menu), buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.menu) },
                    accounts && (react_1.default.createElement("p", { onClick: copyAddress },
                        react_1.default.createElement("span", { style: Object.assign(Object.assign({}, styles_1.styles.menuItem), buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.menuItem) }, recentlyCopied ? 'copied' : 'copy address'))),
                    react_1.default.createElement("p", { style: Object.assign(Object.assign({}, styles_1.styles.menuItem), buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.menuItem), onClick: changeWallet }, "change wallet"),
                    react_1.default.createElement("p", { onClick: disconnect, style: Object.assign(Object.assign({}, styles_1.styles.menuItem), buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.menuItem) }, "disconnect"))))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        renderButton(),
        showConnectModal && (react_1.default.createElement(WalletSelectModal_1.WalletSelectModal, { walletSelectStyles: buttonStyles === null || buttonStyles === void 0 ? void 0 : buttonStyles.walletSelectStyles, setShowConnectModal: setShowConnectModal }))));
};
exports.default = WalletConnectButton;
