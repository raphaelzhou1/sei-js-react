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
exports.getSigningClient = exports.getStargateClient = void 0;
const stargate_1 = require("@cosmjs/stargate");
const client_1 = require("../client");
const getStargateClient = (rpcEndpoint, options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    if (options.useTM34) {
        return stargate_1.StargateClient.connect(rpcEndpoint, options);
    }
    return client_1.SeiStargateClient.connect(rpcEndpoint, options);
});
exports.getStargateClient = getStargateClient;
const getSigningClient = (rpcEndpoint, signer, options = {}) => __awaiter(void 0, void 0, void 0, function* () {
    if (options.useTM34) {
        return stargate_1.SigningStargateClient.connectWithSigner(rpcEndpoint, signer, options);
    }
    return client_1.SeiSigningStargateClient.connectWithSigner(rpcEndpoint, signer, options);
});
exports.getSigningClient = getSigningClient;
