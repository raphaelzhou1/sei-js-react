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
const react_1 = require("react");
const core_1 = require("@sei-js/core");
const provider_1 = require("../../provider");
const utils_1 = require("../../utils");
const useStargateClient = (customRpcUrl) => {
    const { rpcUrl, chainId } = (0, react_1.useContext)(provider_1.SeiWalletContext);
    const [isLoading, setIsLoading] = (0, react_1.useState)(true);
    const [stargateClient, setStargateClient] = (0, react_1.useState)();
    (0, react_1.useEffect)(() => {
        const getClient = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (!rpcUrl || !chainId)
                    return;
                setIsLoading(true);
                const client = yield (0, core_1.getStargateClient)(customRpcUrl || rpcUrl, {
                    useTM34: (0, utils_1.shouldUseTm34Client)(chainId),
                });
                setStargateClient(client);
                setIsLoading(false);
            }
            catch (_a) {
                console.error('Error creating signing client');
            }
        });
        getClient();
    }, [customRpcUrl, rpcUrl, chainId]);
    return { stargateClient, isLoading };
};
exports.default = useStargateClient;
