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
exports.getSigningCosmWasmClient = exports.getCosmWasmClient = void 0;
const cosmwasm_stargate_1 = require("@cosmjs/cosmwasm-stargate");
const client_1 = require("../client");
const getCosmWasmClient = (rpcEndpoint, options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    if (options.useTM34) {
        return cosmwasm_stargate_1.CosmWasmClient.connect(rpcEndpoint);
    }
    return client_1.SeiCosmWasmClient.connect(rpcEndpoint);
});
exports.getCosmWasmClient = getCosmWasmClient;
const getSigningCosmWasmClient = (rpcEndpoint, signer, options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    if (options.useTM34) {
        return cosmwasm_stargate_1.SigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer, options);
    }
    return client_1.SeiSigningCosmWasmClient.connectWithSigner(rpcEndpoint, signer, options);
});
exports.getSigningCosmWasmClient = getSigningCosmWasmClient;
