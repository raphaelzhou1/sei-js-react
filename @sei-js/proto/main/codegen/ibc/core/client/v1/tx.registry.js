"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/ibc.core.client.v1.MsgCreateClient", _tx.MsgCreateClient], ["/ibc.core.client.v1.MsgUpdateClient", _tx.MsgUpdateClient], ["/ibc.core.client.v1.MsgUpgradeClient", _tx.MsgUpgradeClient], ["/ibc.core.client.v1.MsgSubmitMisbehaviour", _tx.MsgSubmitMisbehaviour]];
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
    createClient: function createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: _tx.MsgCreateClient.encode(value).finish()
      };
    },
    updateClient: function updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: _tx.MsgUpdateClient.encode(value).finish()
      };
    },
    upgradeClient: function upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: _tx.MsgUpgradeClient.encode(value).finish()
      };
    },
    submitMisbehaviour: function submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: _tx.MsgSubmitMisbehaviour.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createClient: function createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: value
      };
    },
    updateClient: function updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: value
      };
    },
    upgradeClient: function upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: value
      };
    },
    submitMisbehaviour: function submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: value
      };
    }
  },
  fromPartial: {
    createClient: function createClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgCreateClient",
        value: _tx.MsgCreateClient.fromPartial(value)
      };
    },
    updateClient: function updateClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpdateClient",
        value: _tx.MsgUpdateClient.fromPartial(value)
      };
    },
    upgradeClient: function upgradeClient(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgUpgradeClient",
        value: _tx.MsgUpgradeClient.fromPartial(value)
      };
    },
    submitMisbehaviour: function submitMisbehaviour(value) {
      return {
        typeUrl: "/ibc.core.client.v1.MsgSubmitMisbehaviour",
        value: _tx.MsgSubmitMisbehaviour.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;