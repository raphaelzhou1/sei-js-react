"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = void 0;
/* eslint-disable @typescript-eslint/naming-convention */
const encoding_1 = require("@cosmjs/encoding");
const inthelpers_1 = require("../inthelpers");
const jsonrpc_1 = require("../jsonrpc");
const encodings_1 = require("../encodings");
const requests = require("../requests");
function encodeHeightParam(param) {
    return {
        height: (0, encodings_1.may)(inthelpers_1.smallIntToApi, param.height),
    };
}
function encodeBlockchainRequestParams(param) {
    return {
        minHeight: (0, encodings_1.may)(inthelpers_1.smallIntToApi, param.minHeight),
        maxHeight: (0, encodings_1.may)(inthelpers_1.smallIntToApi, param.maxHeight),
    };
}
function encodeBlockSearchParams(params) {
    return {
        query: params.query,
        page: (0, encodings_1.may)(inthelpers_1.smallIntToApi, params.page),
        per_page: (0, encodings_1.may)(inthelpers_1.smallIntToApi, params.per_page),
        order_by: params.order_by,
    };
}
function encodeAbciQueryParams(params) {
    return {
        path: (0, encodings_1.assertNotEmpty)(params.path),
        data: (0, encoding_1.toHex)(params.data),
        height: (0, encodings_1.may)(inthelpers_1.smallIntToApi, params.height),
        prove: params.prove,
    };
}
function encodeBroadcastTxParams(params) {
    return {
        tx: (0, encoding_1.toBase64)((0, encodings_1.assertNotEmpty)(params.tx)),
    };
}
function encodeTxParams(params) {
    return {
        hash: (0, encoding_1.toHex)((0, encodings_1.assertNotEmpty)(params.hash)),
        prove: params.prove,
    };
}
function encodeTxSearchParams(params) {
    return {
        query: params.query,
        prove: params.prove,
        page: (0, encodings_1.may)(inthelpers_1.smallIntToApi, params.page),
        per_page: (0, encodings_1.may)(inthelpers_1.smallIntToApi, params.per_page),
        order_by: params.order_by,
    };
}
function encodeValidatorsParams(params) {
    return {
        height: (0, encodings_1.may)(inthelpers_1.smallIntToApi, params.height),
        page: (0, encodings_1.may)(inthelpers_1.smallIntToApi, params.page),
        per_page: (0, encodings_1.may)(inthelpers_1.smallIntToApi, params.per_page),
    };
}
class Params {
    static encodeAbciInfo(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method);
    }
    static encodeAbciQuery(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeAbciQueryParams(req.params));
    }
    static encodeBlock(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeHeightParam(req.params));
    }
    static encodeBlockchain(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeBlockchainRequestParams(req.params));
    }
    static encodeBlockResults(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeHeightParam(req.params));
    }
    static encodeBlockSearch(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeBlockSearchParams(req.params));
    }
    static encodeBroadcastTx(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeBroadcastTxParams(req.params));
    }
    static encodeCommit(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeHeightParam(req.params));
    }
    static encodeGenesis(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method);
    }
    static encodeHealth(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method);
    }
    static encodeNumUnconfirmedTxs(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method);
    }
    static encodeStatus(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method);
    }
    static encodeSubscribe(req) {
        const eventTag = { key: 'tm.event', value: req.query.type };
        const query = requests.buildQuery({ tags: [eventTag], raw: req.query.raw });
        return (0, jsonrpc_1.createJsonRpcRequest)('subscribe', { query: query });
    }
    static encodeTx(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeTxParams(req.params));
    }
    // TODO: encode params for query string???
    static encodeTxSearch(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeTxSearchParams(req.params));
    }
    static encodeValidators(req) {
        return (0, jsonrpc_1.createJsonRpcRequest)(req.method, encodeValidatorsParams(req.params));
    }
}
exports.Params = Params;