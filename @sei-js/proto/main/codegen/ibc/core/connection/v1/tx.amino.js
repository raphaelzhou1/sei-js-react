"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _helpers = require("@osmonauts/helpers");
var AminoConverter = {
  "/ibc.core.connection.v1.MsgConnectionOpenInit": {
    aminoType: "cosmos-sdk/MsgConnectionOpenInit",
    toAmino: function toAmino(_ref) {
      var clientId = _ref.clientId,
        counterparty = _ref.counterparty,
        version = _ref.version,
        delayPeriod = _ref.delayPeriod,
        signer = _ref.signer;
      return {
        client_id: clientId,
        counterparty: {
          client_id: counterparty.clientId,
          connection_id: counterparty.connectionId,
          prefix: {
            key_prefix: counterparty.prefix.keyPrefix
          }
        },
        version: {
          identifier: version.identifier,
          features: version.features
        },
        delay_period: delayPeriod.toString(),
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var client_id = _ref2.client_id,
        counterparty = _ref2.counterparty,
        version = _ref2.version,
        delay_period = _ref2.delay_period,
        signer = _ref2.signer;
      return {
        clientId: client_id,
        counterparty: {
          clientId: counterparty.client_id,
          connectionId: counterparty.connection_id,
          prefix: {
            keyPrefix: counterparty.prefix.key_prefix
          }
        },
        version: {
          identifier: version.identifier,
          features: version.features
        },
        delayPeriod: _helpers.Long.fromString(delay_period),
        signer: signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenTry": {
    aminoType: "cosmos-sdk/MsgConnectionOpenTry",
    toAmino: function toAmino(_ref3) {
      var _omitDefault, _omitDefault2, _omitDefault3, _omitDefault4;
      var clientId = _ref3.clientId,
        previousConnectionId = _ref3.previousConnectionId,
        clientState = _ref3.clientState,
        counterparty = _ref3.counterparty,
        delayPeriod = _ref3.delayPeriod,
        counterpartyVersions = _ref3.counterpartyVersions,
        proofHeight = _ref3.proofHeight,
        proofInit = _ref3.proofInit,
        proofClient = _ref3.proofClient,
        proofConsensus = _ref3.proofConsensus,
        consensusHeight = _ref3.consensusHeight,
        signer = _ref3.signer;
      return {
        client_id: clientId,
        previous_connection_id: previousConnectionId,
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value
        },
        counterparty: {
          client_id: counterparty.clientId,
          connection_id: counterparty.connectionId,
          prefix: {
            key_prefix: counterparty.prefix.keyPrefix
          }
        },
        delay_period: delayPeriod.toString(),
        counterparty_versions: counterpartyVersions.map(function (el0) {
          return {
            identifier: el0.identifier,
            features: el0.features
          };
        }),
        proof_height: proofHeight ? {
          revision_height: (_omitDefault = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault === void 0 ? void 0 : _omitDefault.toString(),
          revision_number: (_omitDefault2 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault2 === void 0 ? void 0 : _omitDefault2.toString()
        } : {},
        proof_init: proofInit,
        proof_client: proofClient,
        proof_consensus: proofConsensus,
        consensus_height: consensusHeight ? {
          revision_height: (_omitDefault3 = (0, _helpers.omitDefault)(consensusHeight.revisionHeight)) === null || _omitDefault3 === void 0 ? void 0 : _omitDefault3.toString(),
          revision_number: (_omitDefault4 = (0, _helpers.omitDefault)(consensusHeight.revisionNumber)) === null || _omitDefault4 === void 0 ? void 0 : _omitDefault4.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var client_id = _ref4.client_id,
        previous_connection_id = _ref4.previous_connection_id,
        client_state = _ref4.client_state,
        counterparty = _ref4.counterparty,
        delay_period = _ref4.delay_period,
        counterparty_versions = _ref4.counterparty_versions,
        proof_height = _ref4.proof_height,
        proof_init = _ref4.proof_init,
        proof_client = _ref4.proof_client,
        proof_consensus = _ref4.proof_consensus,
        consensus_height = _ref4.consensus_height,
        signer = _ref4.signer;
      return {
        clientId: client_id,
        previousConnectionId: previous_connection_id,
        clientState: {
          typeUrl: client_state.type_url,
          value: client_state.value
        },
        counterparty: {
          clientId: counterparty.client_id,
          connectionId: counterparty.connection_id,
          prefix: {
            keyPrefix: counterparty.prefix.key_prefix
          }
        },
        delayPeriod: _helpers.Long.fromString(delay_period),
        counterpartyVersions: counterparty_versions.map(function (el0) {
          return {
            identifier: el0.identifier,
            features: el0.features
          };
        }),
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        proofInit: proof_init,
        proofClient: proof_client,
        proofConsensus: proof_consensus,
        consensusHeight: consensus_height ? {
          revisionHeight: _helpers.Long.fromString(consensus_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(consensus_height.revision_number || "0", true)
        } : undefined,
        signer: signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenAck": {
    aminoType: "cosmos-sdk/MsgConnectionOpenAck",
    toAmino: function toAmino(_ref5) {
      var _omitDefault5, _omitDefault6, _omitDefault7, _omitDefault8;
      var connectionId = _ref5.connectionId,
        counterpartyConnectionId = _ref5.counterpartyConnectionId,
        version = _ref5.version,
        clientState = _ref5.clientState,
        proofHeight = _ref5.proofHeight,
        proofTry = _ref5.proofTry,
        proofClient = _ref5.proofClient,
        proofConsensus = _ref5.proofConsensus,
        consensusHeight = _ref5.consensusHeight,
        signer = _ref5.signer;
      return {
        connection_id: connectionId,
        counterparty_connection_id: counterpartyConnectionId,
        version: {
          identifier: version.identifier,
          features: version.features
        },
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value
        },
        proof_height: proofHeight ? {
          revision_height: (_omitDefault5 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault5 === void 0 ? void 0 : _omitDefault5.toString(),
          revision_number: (_omitDefault6 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault6 === void 0 ? void 0 : _omitDefault6.toString()
        } : {},
        proof_try: proofTry,
        proof_client: proofClient,
        proof_consensus: proofConsensus,
        consensus_height: consensusHeight ? {
          revision_height: (_omitDefault7 = (0, _helpers.omitDefault)(consensusHeight.revisionHeight)) === null || _omitDefault7 === void 0 ? void 0 : _omitDefault7.toString(),
          revision_number: (_omitDefault8 = (0, _helpers.omitDefault)(consensusHeight.revisionNumber)) === null || _omitDefault8 === void 0 ? void 0 : _omitDefault8.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var connection_id = _ref6.connection_id,
        counterparty_connection_id = _ref6.counterparty_connection_id,
        version = _ref6.version,
        client_state = _ref6.client_state,
        proof_height = _ref6.proof_height,
        proof_try = _ref6.proof_try,
        proof_client = _ref6.proof_client,
        proof_consensus = _ref6.proof_consensus,
        consensus_height = _ref6.consensus_height,
        signer = _ref6.signer;
      return {
        connectionId: connection_id,
        counterpartyConnectionId: counterparty_connection_id,
        version: {
          identifier: version.identifier,
          features: version.features
        },
        clientState: {
          typeUrl: client_state.type_url,
          value: client_state.value
        },
        proofHeight: proof_height ? {
          revisionHeight: _helpers.Long.fromString(proof_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(proof_height.revision_number || "0", true)
        } : undefined,
        proofTry: proof_try,
        proofClient: proof_client,
        proofConsensus: proof_consensus,
        consensusHeight: consensus_height ? {
          revisionHeight: _helpers.Long.fromString(consensus_height.revision_height || "0", true),
          revisionNumber: _helpers.Long.fromString(consensus_height.revision_number || "0", true)
        } : undefined,
        signer: signer
      };
    }
  },
  "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
    aminoType: "cosmos-sdk/MsgConnectionOpenConfirm",
    toAmino: function toAmino(_ref7) {
      var _omitDefault9, _omitDefault10;
      var connectionId = _ref7.connectionId,
        proofAck = _ref7.proofAck,
        proofHeight = _ref7.proofHeight,
        signer = _ref7.signer;
      return {
        connection_id: connectionId,
        proof_ack: proofAck,
        proof_height: proofHeight ? {
          revision_height: (_omitDefault9 = (0, _helpers.omitDefault)(proofHeight.revisionHeight)) === null || _omitDefault9 === void 0 ? void 0 : _omitDefault9.toString(),
          revision_number: (_omitDefault10 = (0, _helpers.omitDefault)(proofHeight.revisionNumber)) === null || _omitDefault10 === void 0 ? void 0 : _omitDefault10.toString()
        } : {},
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var connection_id = _ref8.connection_id,
        proof_ack = _ref8.proof_ack,
        proof_height = _ref8.proof_height,
        signer = _ref8.signer;
      return {
        connectionId: connection_id,
        proofAck: proof_ack,
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