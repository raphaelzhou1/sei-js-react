"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/ibc.applications.transfer.v1.MsgTransfer", _tx.MsgTransfer]];
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
    transfer: function transfer(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: _tx.MsgTransfer.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    transfer: function transfer(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: value
      };
    }
  },
  fromPartial: {
    transfer: function transfer(value) {
      return {
        typeUrl: "/ibc.applications.transfer.v1.MsgTransfer",
        value: _tx.MsgTransfer.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;