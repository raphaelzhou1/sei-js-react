"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/cosmwasm.wasm.v1.MsgStoreCode", _tx.MsgStoreCode], ["/cosmwasm.wasm.v1.MsgInstantiateContract", _tx.MsgInstantiateContract], ["/cosmwasm.wasm.v1.MsgExecuteContract", _tx.MsgExecuteContract], ["/cosmwasm.wasm.v1.MsgMigrateContract", _tx.MsgMigrateContract], ["/cosmwasm.wasm.v1.MsgUpdateAdmin", _tx.MsgUpdateAdmin], ["/cosmwasm.wasm.v1.MsgClearAdmin", _tx.MsgClearAdmin]];
exports.registry = registry;
var load = function load(protoRegistry) {
  registry.forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      typeUrl = _ref2[0],
      mod = _ref2[1];
    protoRegistry.register(typeUrl, mod);
  });
};
exports.load = load;
var MessageComposer = {
  encoded: {
    storeCode: function storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: _tx.MsgStoreCode.encode(value).finish()
      };
    },
    instantiateContract: function instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: _tx.MsgInstantiateContract.encode(value).finish()
      };
    },
    executeContract: function executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: _tx.MsgExecuteContract.encode(value).finish()
      };
    },
    migrateContract: function migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: _tx.MsgMigrateContract.encode(value).finish()
      };
    },
    updateAdmin: function updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: _tx.MsgUpdateAdmin.encode(value).finish()
      };
    },
    clearAdmin: function clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: _tx.MsgClearAdmin.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    storeCode: function storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: value
      };
    },
    instantiateContract: function instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: value
      };
    },
    executeContract: function executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: value
      };
    },
    migrateContract: function migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: value
      };
    },
    updateAdmin: function updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: value
      };
    },
    clearAdmin: function clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: value
      };
    }
  },
  fromPartial: {
    storeCode: function storeCode(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
        value: _tx.MsgStoreCode.fromPartial(value)
      };
    },
    instantiateContract: function instantiateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgInstantiateContract",
        value: _tx.MsgInstantiateContract.fromPartial(value)
      };
    },
    executeContract: function executeContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgExecuteContract",
        value: _tx.MsgExecuteContract.fromPartial(value)
      };
    },
    migrateContract: function migrateContract(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgMigrateContract",
        value: _tx.MsgMigrateContract.fromPartial(value)
      };
    },
    updateAdmin: function updateAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgUpdateAdmin",
        value: _tx.MsgUpdateAdmin.fromPartial(value)
      };
    },
    clearAdmin: function clearAdmin(value) {
      return {
        typeUrl: "/cosmwasm.wasm.v1.MsgClearAdmin",
        value: _tx.MsgClearAdmin.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;