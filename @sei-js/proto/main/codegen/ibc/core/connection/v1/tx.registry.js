"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/ibc.core.connection.v1.MsgConnectionOpenInit", _tx.MsgConnectionOpenInit], ["/ibc.core.connection.v1.MsgConnectionOpenTry", _tx.MsgConnectionOpenTry], ["/ibc.core.connection.v1.MsgConnectionOpenAck", _tx.MsgConnectionOpenAck], ["/ibc.core.connection.v1.MsgConnectionOpenConfirm", _tx.MsgConnectionOpenConfirm]];
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
    connectionOpenInit: function connectionOpenInit(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: _tx.MsgConnectionOpenInit.encode(value).finish()
      };
    },
    connectionOpenTry: function connectionOpenTry(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: _tx.MsgConnectionOpenTry.encode(value).finish()
      };
    },
    connectionOpenAck: function connectionOpenAck(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: _tx.MsgConnectionOpenAck.encode(value).finish()
      };
    },
    connectionOpenConfirm: function connectionOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: _tx.MsgConnectionOpenConfirm.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    connectionOpenInit: function connectionOpenInit(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: value
      };
    },
    connectionOpenTry: function connectionOpenTry(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: value
      };
    },
    connectionOpenAck: function connectionOpenAck(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: value
      };
    },
    connectionOpenConfirm: function connectionOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: value
      };
    }
  },
  fromPartial: {
    connectionOpenInit: function connectionOpenInit(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenInit",
        value: _tx.MsgConnectionOpenInit.fromPartial(value)
      };
    },
    connectionOpenTry: function connectionOpenTry(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenTry",
        value: _tx.MsgConnectionOpenTry.fromPartial(value)
      };
    },
    connectionOpenAck: function connectionOpenAck(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenAck",
        value: _tx.MsgConnectionOpenAck.fromPartial(value)
      };
    },
    connectionOpenConfirm: function connectionOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.connection.v1.MsgConnectionOpenConfirm",
        value: _tx.MsgConnectionOpenConfirm.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;