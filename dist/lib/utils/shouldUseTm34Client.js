"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldUseTm34Client = void 0;
const shouldUseTm34Client = (chainId) => {
    return chainId === 'atlantic-1' || chainId === 'sei-devnet-1';
};
exports.shouldUseTm34Client = shouldUseTm34Client;
