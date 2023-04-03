"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var AminoConverter = {
  "/ibc.core.client.v1.MsgCreateClient": {
    aminoType: "cosmos-sdk/MsgCreateClient",
    toAmino: function toAmino(_ref) {
      var clientState = _ref.clientState,
        consensusState = _ref.consensusState,
        signer = _ref.signer;
      return {
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value
        },
        consensus_state: {
          type_url: consensusState.typeUrl,
          value: consensusState.value
        },
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var client_state = _ref2.client_state,
        consensus_state = _ref2.consensus_state,
        signer = _ref2.signer;
      return {
        clientState: {
          typeUrl: client_state.type_url,
          value: client_state.value
        },
        consensusState: {
          typeUrl: consensus_state.type_url,
          value: consensus_state.value
        },
        signer: signer
      };
    }
  },
  "/ibc.core.client.v1.MsgUpdateClient": {
    aminoType: "cosmos-sdk/MsgUpdateClient",
    toAmino: function toAmino(_ref3) {
      var clientId = _ref3.clientId,
        header = _ref3.header,
        signer = _ref3.signer;
      return {
        client_id: clientId,
        header: {
          type_url: header.typeUrl,
          value: header.value
        },
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var client_id = _ref4.client_id,
        header = _ref4.header,
        signer = _ref4.signer;
      return {
        clientId: client_id,
        header: {
          typeUrl: header.type_url,
          value: header.value
        },
        signer: signer
      };
    }
  },
  "/ibc.core.client.v1.MsgUpgradeClient": {
    aminoType: "cosmos-sdk/MsgUpgradeClient",
    toAmino: function toAmino(_ref5) {
      var clientId = _ref5.clientId,
        clientState = _ref5.clientState,
        consensusState = _ref5.consensusState,
        proofUpgradeClient = _ref5.proofUpgradeClient,
        proofUpgradeConsensusState = _ref5.proofUpgradeConsensusState,
        signer = _ref5.signer;
      return {
        client_id: clientId,
        client_state: {
          type_url: clientState.typeUrl,
          value: clientState.value
        },
        consensus_state: {
          type_url: consensusState.typeUrl,
          value: consensusState.value
        },
        proof_upgrade_client: proofUpgradeClient,
        proof_upgrade_consensus_state: proofUpgradeConsensusState,
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var client_id = _ref6.client_id,
        client_state = _ref6.client_state,
        consensus_state = _ref6.consensus_state,
        proof_upgrade_client = _ref6.proof_upgrade_client,
        proof_upgrade_consensus_state = _ref6.proof_upgrade_consensus_state,
        signer = _ref6.signer;
      return {
        clientId: client_id,
        clientState: {
          typeUrl: client_state.type_url,
          value: client_state.value
        },
        consensusState: {
          typeUrl: consensus_state.type_url,
          value: consensus_state.value
        },
        proofUpgradeClient: proof_upgrade_client,
        proofUpgradeConsensusState: proof_upgrade_consensus_state,
        signer: signer
      };
    }
  },
  "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
    aminoType: "cosmos-sdk/MsgSubmitMisbehaviour",
    toAmino: function toAmino(_ref7) {
      var clientId = _ref7.clientId,
        misbehaviour = _ref7.misbehaviour,
        signer = _ref7.signer;
      return {
        client_id: clientId,
        misbehaviour: {
          type_url: misbehaviour.typeUrl,
          value: misbehaviour.value
        },
        signer: signer
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var client_id = _ref8.client_id,
        misbehaviour = _ref8.misbehaviour,
        signer = _ref8.signer;
      return {
        clientId: client_id,
        misbehaviour: {
          typeUrl: misbehaviour.type_url,
          value: misbehaviour.value
        },
        signer: signer
      };
    }
  }
};
exports.AminoConverter = AminoConverter;