"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const provider_1 = require("../../provider");
const useWallet = () => (0, react_1.useContext)(provider_1.SeiWalletContext);
exports.default = useWallet;
