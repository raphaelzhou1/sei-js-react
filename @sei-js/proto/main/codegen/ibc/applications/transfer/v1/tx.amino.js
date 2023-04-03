"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("@osmonauts/helpers");
var AminoConverter = {
  "/ibc.applications.transfer.v1.MsgTransfer": {
    aminoType: "cosmos-sdk/MsgTransfer",
    toAmino: function toAmino(_ref) {
      var _omitDefault, _omitDefault2;
      var sourcePort = _ref.sourcePort,
        sourceChannel = _ref.sourceChannel,
        token = _ref.token,
        sender = _ref.sender,
        receiver = _ref.receiver,
        timeoutHeight = _ref.timeoutHeight,
        timeoutTimestamp = _ref.timeoutTimestamp;
      return {
        source_port: sourcePort,
        source_channel: sourceChannel,
        token: {
          denom: token.denom,
          amount: _helpers.Long.fromNumber(token.amount).toString()
        },
        sender: sender,
        receiver: receiver,
        timeout_height: timeoutHeight ? {
          revision_height: (_omitDefault = (0, _helpers.omitDefault)(timeoutHeight.revisionHeight)) === null || _omitDefault === void 0 ? void 0 : _omitDefault.toString(),
          revision_number: (_omitDefault2 = (0, _helpers.omitDefault)(timeoutHeight.revisionNumber)) === null || _omitDefault2 === void 0 ? void 0 : _omitDefault2.toString()
        } : {},
        timeout_timestamp: timeoutTimestamp.toString()
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var source_port = _ref2.source_port,
        source_channel = _ref2.source_channel,
        token = _ref2.token,
        sender = _ref2.sender,
        receiver = _ref2.receiver,
        timeout_height = _ref2.timeout_height,
        timeout_timestamp = _ref2.timeout_timestamp;
      return {
        sourcePort: source_port,
        sourceChannel: source_channel,
        token: {
          denom: token.denom,
          amount: token.amount
        },
        sender: sender,
        receiver: receiver,
        timeoutHeight: timeout_height ? {
          revisionHeight: _helpers.Long.fromString(timeout_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(timeout_height.revision_number || "0", true)
        } : undefined,
        timeoutTimestamp: _helpers.Long.fromString(timeout_timestamp)
      };
    }
  }
};
exports.AminoConverter = AminoConverter;