"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _channel = require("./channel");
var _helpers = require("@osmonauts/helpers");
var AminoConverter = {
  "/ibc.core.channel.v1.MsgChannelOpenInit": {
    aminoType: "cosmos-sdk/MsgChannelOpenInit",
    toAmino: function toAmino(_ref) {
      var portId = _ref.portId,
        channel = _ref.channel,
        signer = _ref.signer;
      return {
        port_id: portId,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.portId,
            channel_id: channel.counterparty.channelId
          },
          connection_hops: channel.connectionHops,
          version: channel.version
        },
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var port_id = _ref2.port_id,
        channel = _ref2.channel,
        signer = _ref2.signer;
      return {
        portId: port_id,
        channel: {
          state: (0, _channel.stateFromJSON)(channel.state),
          ordering: (0, _channel.orderFromJSON)(channel.ordering),
          counterparty: {
            portId: channel.counterparty.port_id,
            channelId: channel.counterparty.channel_id
          },
          connectionHops: channel.connection_hops,
          version: channel.version
        },
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenTry": {
    aminoType: "cosmos-sdk/MsgChannelOpenTry",
    toAmino: function toAmino(_ref3) {
      var _omitDefault, _omitDefault2;
      var portId = _ref3.portId,
        previousChannelId = _ref3.previousChannelId,
        channel = _ref3.channel,
        counterpartyVersion = _ref3.counterpartyVersion,
        proofInit = _ref3.proofInit,
        proofHeight = _ref3.proofHeight,
        signer = _ref3.signer;
      return {
        port_id: portId,
        previous_channel_id: previousChannelId,
        channel: {
          state: channel.state,
          ordering: channel.ordering,
          counterparty: {
            port_id: channel.counterparty.portId,
            channel_id: channel.counterparty.channelId
          },
          connection_hops: channel.connectionHops,
          version: channel.version
        },
        counterparty_version: counterpartyVersion,
        proof_init: proofInit,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault === void 0 ? void 0 : _omitDefault.toString(),
          revision_number: (_omitDefault2 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault2 === void 0 ? void 0 : _omitDefault2.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var port_id = _ref4.port_id,
        previous_channel_id = _ref4.previous_channel_id,
        channel = _ref4.channel,
        counterparty_version = _ref4.counterparty_version,
        proof_init = _ref4.proof_init,
        proof_height = _ref4.proof_height,
        signer = _ref4.signer;
      return {
        portId: port_id,
        previousChannelId: previous_channel_id,
        channel: {
          state: (0, _channel.stateFromJSON)(channel.state),
          ordering: (0, _channel.orderFromJSON)(channel.ordering),
          counterparty: {
            portId: channel.counterparty.port_id,
            channelId: channel.counterparty.channel_id
          },
          connectionHops: channel.connection_hops,
          version: channel.version
        },
        counterpartyVersion: counterparty_version,
        proofInit: proof_init,
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenAck": {
    aminoType: "cosmos-sdk/MsgChannelOpenAck",
    toAmino: function toAmino(_ref5) {
      var _omitDefault3, _omitDefault4;
      var portId = _ref5.portId,
        channelId = _ref5.channelId,
        counterpartyChannelId = _ref5.counterpartyChannelId,
        counterpartyVersion = _ref5.counterpartyVersion,
        proofTry = _ref5.proofTry,
        proofHeight = _ref5.proofHeight,
        signer = _ref5.signer;
      return {
        port_id: portId,
        channel_id: channelId,
        counterparty_channel_id: counterpartyChannelId,
        counterparty_version: counterpartyVersion,
        proof_try: proofTry,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault3 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault3 === void 0 ? void 0 : _omitDefault3.toString(),
          revision_number: (_omitDefault4 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault4 === void 0 ? void 0 : _omitDefault4.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var port_id = _ref6.port_id,
        channel_id = _ref6.channel_id,
        counterparty_channel_id = _ref6.counterparty_channel_id,
        counterparty_version = _ref6.counterparty_version,
        proof_try = _ref6.proof_try,
        proof_height = _ref6.proof_height,
        signer = _ref6.signer;
      return {
        portId: port_id,
        channelId: channel_id,
        counterpartyChannelId: counterparty_channel_id,
        counterpartyVersion: counterparty_version,
        proofTry: proof_try,
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
    aminoType: "cosmos-sdk/MsgChannelOpenConfirm",
    toAmino: function toAmino(_ref7) {
      var _omitDefault5, _omitDefault6;
      var portId = _ref7.portId,
        channelId = _ref7.channelId,
        proofAck = _ref7.proofAck,
        proofHeight = _ref7.proofHeight,
        signer = _ref7.signer;
      return {
        port_id: portId,
        channel_id: channelId,
        proof_ack: proofAck,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault5 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault5 === void 0 ? void 0 : _omitDefault5.toString(),
          revision_number: (_omitDefault6 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault6 === void 0 ? void 0 : _omitDefault6.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var port_id = _ref8.port_id,
        channel_id = _ref8.channel_id,
        proof_ack = _ref8.proof_ack,
        proof_height = _ref8.proof_height,
        signer = _ref8.signer;
      return {
        portId: port_id,
        channelId: channel_id,
        proofAck: proof_ack,
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelCloseInit": {
    aminoType: "cosmos-sdk/MsgChannelCloseInit",
    toAmino: function toAmino(_ref9) {
      var portId = _ref9.portId,
        channelId = _ref9.channelId,
        signer = _ref9.signer;
      return {
        port_id: portId,
        channel_id: channelId,
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var port_id = _ref10.port_id,
        channel_id = _ref10.channel_id,
        signer = _ref10.signer;
      return {
        portId: port_id,
        channelId: channel_id,
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
    aminoType: "cosmos-sdk/MsgChannelCloseConfirm",
    toAmino: function toAmino(_ref11) {
      var _omitDefault7, _omitDefault8;
      var portId = _ref11.portId,
        channelId = _ref11.channelId,
        proofInit = _ref11.proofInit,
        proofHeight = _ref11.proofHeight,
        signer = _ref11.signer;
      return {
        port_id: portId,
        channel_id: channelId,
        proof_init: proofInit,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault7 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault7 === void 0 ? void 0 : _omitDefault7.toString(),
          revision_number: (_omitDefault8 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault8 === void 0 ? void 0 : _omitDefault8.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var port_id = _ref12.port_id,
        channel_id = _ref12.channel_id,
        proof_init = _ref12.proof_init,
        proof_height = _ref12.proof_height,
        signer = _ref12.signer;
      return {
        portId: port_id,
        channelId: channel_id,
        proofInit: proof_init,
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgRecvPacket": {
    aminoType: "cosmos-sdk/MsgRecvPacket",
    toAmino: function toAmino(_ref13) {
      var _omitDefault9, _omitDefault10, _omitDefault11, _omitDefault12;
      var packet = _ref13.packet,
        proofCommitment = _ref13.proofCommitment,
        proofHeight = _ref13.proofHeight,
        signer = _ref13.signer;
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: (_omitDefault9 = (0, _helpers.omitDefault)(packet.timeoutHeight.revisionHeight)) === null || _omitDefault9 === void 0 ? void 0 : _omitDefault9.toString(),
            revision_number: (_omitDefault10 = (0, _helpers.omitDefault)(packet.timeoutHeight.revisionNumber)) === null || _omitDefault10 === void 0 ? void 0 : _omitDefault10.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_commitment: proofCommitment,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault11 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault11 === void 0 ? void 0 : _omitDefault11.toString(),
          revision_number: (_omitDefault12 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault12 === void 0 ? void 0 : _omitDefault12.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref14) {
      var packet = _ref14.packet,
        proof_commitment = _ref14.proof_commitment,
        proof_height = _ref14.proof_height,
        signer = _ref14.signer;
      return {
        packet: {
          sequence: _helpers.Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: _helpers.Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: _helpers.Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: _helpers.Long.fromString(packet.timeout_timestamp)
        },
        proofCommitment: proof_commitment,
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgTimeout": {
    aminoType: "cosmos-sdk/MsgTimeout",
    toAmino: function toAmino(_ref15) {
      var _omitDefault13, _omitDefault14, _omitDefault15, _omitDefault16;
      var packet = _ref15.packet,
        proofUnreceived = _ref15.proofUnreceived,
        proofHeight = _ref15.proofHeight,
        nextSequenceRecv = _ref15.nextSequenceRecv,
        signer = _ref15.signer;
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: (_omitDefault13 = (0, _helpers.omitDefault)(packet.timeoutHeight.revisionHeight)) === null || _omitDefault13 === void 0 ? void 0 : _omitDefault13.toString(),
            revision_number: (_omitDefault14 = (0, _helpers.omitDefault)(packet.timeoutHeight.revisionNumber)) === null || _omitDefault14 === void 0 ? void 0 : _omitDefault14.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_unreceived: proofUnreceived,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault15 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault15 === void 0 ? void 0 : _omitDefault15.toString(),
          revision_number: (_omitDefault16 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault16 === void 0 ? void 0 : _omitDefault16.toString()
        } : {},
        next_sequence_recv: nextSequenceRecv.toString(),
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref16) {
      var packet = _ref16.packet,
        proof_unreceived = _ref16.proof_unreceived,
        proof_height = _ref16.proof_height,
        next_sequence_recv = _ref16.next_sequence_recv,
        signer = _ref16.signer;
      return {
        packet: {
          sequence: _helpers.Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: _helpers.Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: _helpers.Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: _helpers.Long.fromString(packet.timeout_timestamp)
        },
        proofUnreceived: proof_unreceived,
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        nextSequenceRecv: _helpers.Long.fromString(next_sequence_recv),
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgTimeoutOnClose": {
    aminoType: "cosmos-sdk/MsgTimeoutOnClose",
    toAmino: function toAmino(_ref17) {
      var _omitDefault17, _omitDefault18, _omitDefault19, _omitDefault20;
      var packet = _ref17.packet,
        proofUnreceived = _ref17.proofUnreceived,
        proofClose = _ref17.proofClose,
        proofHeight = _ref17.proofHeight,
        nextSequenceRecv = _ref17.nextSequenceRecv,
        signer = _ref17.signer;
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: (_omitDefault17 = (0, _helpers.omitDefault)(packet.timeoutHeight.revisionHeight)) === null || _omitDefault17 === void 0 ? void 0 : _omitDefault17.toString(),
            revision_number: (_omitDefault18 = (0, _helpers.omitDefault)(packet.timeoutHeight.revisionNumber)) === null || _omitDefault18 === void 0 ? void 0 : _omitDefault18.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        proof_unreceived: proofUnreceived,
        proof_close: proofClose,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault19 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault19 === void 0 ? void 0 : _omitDefault19.toString(),
          revision_number: (_omitDefault20 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault20 === void 0 ? void 0 : _omitDefault20.toString()
        } : {},
        next_sequence_recv: nextSequenceRecv.toString(),
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref18) {
      var packet = _ref18.packet,
        proof_unreceived = _ref18.proof_unreceived,
        proof_close = _ref18.proof_close,
        proof_height = _ref18.proof_height,
        next_sequence_recv = _ref18.next_sequence_recv,
        signer = _ref18.signer;
      return {
        packet: {
          sequence: _helpers.Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: _helpers.Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: _helpers.Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: _helpers.Long.fromString(packet.timeout_timestamp)
        },
        proofUnreceived: proof_unreceived,
        proofClose: proof_close,
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        nextSequenceRecv: _helpers.Long.fromString(next_sequence_recv),
        signer: signer
      };
    }
  },
  "/ibc.core.channel.v1.MsgAcknowledgement": {
    aminoType: "cosmos-sdk/MsgAcknowledgement",
    toAmino: function toAmino(_ref19) {
      var _omitDefault21, _omitDefault22, _omitDefault23, _omitDefault24;
      var packet = _ref19.packet,
        acknowledgement = _ref19.acknowledgement,
        proofAcked = _ref19.proofAcked,
        proofHeight = _ref19.proofHeight,
        signer = _ref19.signer;
      return {
        packet: {
          sequence: packet.sequence.toString(),
          source_port: packet.sourcePort,
          source_channel: packet.sourceChannel,
          destination_port: packet.destinationPort,
          destination_channel: packet.destinationChannel,
          data: packet.data,
          timeout_height: packet.timeoutHeight ? {
            revision_height: (_omitDefault21 = (0, _helpers.omitDefault)(packet.timeoutHeight.revisionHeight)) === null || _omitDefault21 === void 0 ? void 0 : _omitDefault21.toString(),
            revision_number: (_omitDefault22 = (0, _helpers.omitDefault)(packet.timeoutHeight.revisionNumber)) === null || _omitDefault22 === void 0 ? void 0 : _omitDefault22.toString()
          } : {},
          timeout_timestamp: packet.timeoutTimestamp.toString()
        },
        acknowledgement: acknowledgement,
        proof_acked: proofAcked,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault23 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault23 === void 0 ? void 0 : _omitDefault23.toString(),
          revision_number: (_omitDefault24 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault24 === void 0 ? void 0 : _omitDefault24.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref20) {
      var packet = _ref20.packet,
        acknowledgement = _ref20.acknowledgement,
        proof_acked = _ref20.proof_acked,
        proof_height = _ref20.proof_height,
        signer = _ref20.signer;
      return {
        packet: {
          sequence: _helpers.Long.fromString(packet.sequence),
          sourcePort: packet.source_port,
          sourceChannel: packet.source_channel,
          destinationPort: packet.destination_port,
          destinationChannel: packet.destination_channel,
          data: packet.data,
          timeoutHeight: packet.timeout_height ? {
            revisionHeight: _helpers.Long.fromString(packet.timeout_height.revision_height || "0", true),
            revisionNumber: _helpers.Long.fromString(packet.timeout_height.revision_number || "0", true)
          } : undefined,
          timeoutTimestamp: _helpers.Long.fromString(packet.timeout_timestamp)
        },
        acknowledgement: acknowledgement,
        proofAcked: proof_acked,
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        signer: signer
      };
    }
  }
};
exports.AminoConverter = AminoConverter;