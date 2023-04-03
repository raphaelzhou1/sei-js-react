"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registry = exports.load = exports.MessageComposer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _tx = require("./tx");
var registry = [["/ibc.core.channel.v1.MsgChannelOpenInit", _tx.MsgChannelOpenInit], ["/ibc.core.channel.v1.MsgChannelOpenTry", _tx.MsgChannelOpenTry], ["/ibc.core.channel.v1.MsgChannelOpenAck", _tx.MsgChannelOpenAck], ["/ibc.core.channel.v1.MsgChannelOpenConfirm", _tx.MsgChannelOpenConfirm], ["/ibc.core.channel.v1.MsgChannelCloseInit", _tx.MsgChannelCloseInit], ["/ibc.core.channel.v1.MsgChannelCloseConfirm", _tx.MsgChannelCloseConfirm], ["/ibc.core.channel.v1.MsgRecvPacket", _tx.MsgRecvPacket], ["/ibc.core.channel.v1.MsgTimeout", _tx.MsgTimeout], ["/ibc.core.channel.v1.MsgTimeoutOnClose", _tx.MsgTimeoutOnClose], ["/ibc.core.channel.v1.MsgAcknowledgement", _tx.MsgAcknowledgement]];
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
    channelOpenInit: function channelOpenInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value: _tx.MsgChannelOpenInit.encode(value).finish()
      };
    },
    channelOpenTry: function channelOpenTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: _tx.MsgChannelOpenTry.encode(value).finish()
      };
    },
    channelOpenAck: function channelOpenAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: _tx.MsgChannelOpenAck.encode(value).finish()
      };
    },
    channelOpenConfirm: function channelOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: _tx.MsgChannelOpenConfirm.encode(value).finish()
      };
    },
    channelCloseInit: function channelCloseInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: _tx.MsgChannelCloseInit.encode(value).finish()
      };
    },
    channelCloseConfirm: function channelCloseConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: _tx.MsgChannelCloseConfirm.encode(value).finish()
      };
    },
    recvPacket: function recvPacket(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: _tx.MsgRecvPacket.encode(value).finish()
      };
    },
    timeout: function timeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: _tx.MsgTimeout.encode(value).finish()
      };
    },
    timeoutOnClose: function timeoutOnClose(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: _tx.MsgTimeoutOnClose.encode(value).finish()
      };
    },
    acknowledgement: function acknowledgement(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: _tx.MsgAcknowledgement.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    channelOpenInit: function channelOpenInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value: value
      };
    },
    channelOpenTry: function channelOpenTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: value
      };
    },
    channelOpenAck: function channelOpenAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: value
      };
    },
    channelOpenConfirm: function channelOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: value
      };
    },
    channelCloseInit: function channelCloseInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: value
      };
    },
    channelCloseConfirm: function channelCloseConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: value
      };
    },
    recvPacket: function recvPacket(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: value
      };
    },
    timeout: function timeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: value
      };
    },
    timeoutOnClose: function timeoutOnClose(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: value
      };
    },
    acknowledgement: function acknowledgement(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: value
      };
    }
  },
  fromPartial: {
    channelOpenInit: function channelOpenInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenInit",
        value: _tx.MsgChannelOpenInit.fromPartial(value)
      };
    },
    channelOpenTry: function channelOpenTry(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenTry",
        value: _tx.MsgChannelOpenTry.fromPartial(value)
      };
    },
    channelOpenAck: function channelOpenAck(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenAck",
        value: _tx.MsgChannelOpenAck.fromPartial(value)
      };
    },
    channelOpenConfirm: function channelOpenConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelOpenConfirm",
        value: _tx.MsgChannelOpenConfirm.fromPartial(value)
      };
    },
    channelCloseInit: function channelCloseInit(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseInit",
        value: _tx.MsgChannelCloseInit.fromPartial(value)
      };
    },
    channelCloseConfirm: function channelCloseConfirm(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgChannelCloseConfirm",
        value: _tx.MsgChannelCloseConfirm.fromPartial(value)
      };
    },
    recvPacket: function recvPacket(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgRecvPacket",
        value: _tx.MsgRecvPacket.fromPartial(value)
      };
    },
    timeout: function timeout(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeout",
        value: _tx.MsgTimeout.fromPartial(value)
      };
    },
    timeoutOnClose: function timeoutOnClose(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgTimeoutOnClose",
        value: _tx.MsgTimeoutOnClose.fromPartial(value)
      };
    },
    acknowledgement: function acknowledgement(value) {
      return {
        typeUrl: "/ibc.core.channel.v1.MsgAcknowledgement",
        value: _tx.MsgAcknowledgement.fromPartial(value)
      };
    }
  }
};
exports.MessageComposer = MessageComposer;