"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AminoConverter = void 0;
var _types = require("./types");
var _encoding = require("@cosmjs/encoding");
var _helpers = require("@osmonauts/helpers");
var AminoConverter = {
  "/cosmwasm.wasm.v1.MsgStoreCode": {
    aminoType: "wasm/MsgStoreCode",
    toAmino: function toAmino(_ref) {
      var sender = _ref.sender,
        wasmByteCode = _ref.wasmByteCode,
        instantiatePermission = _ref.instantiatePermission;
      return {
        sender: sender,
        wasm_byte_code: (0, _encoding.toBase64)(wasmByteCode),
        instantiate_permission: {
          permission: instantiatePermission.permission,
          address: instantiatePermission.address
        }
      };
    },
    fromAmino: function fromAmino(_ref2) {
      var sender = _ref2.sender,
        wasm_byte_code = _ref2.wasm_byte_code,
        instantiate_permission = _ref2.instantiate_permission;
      return {
        sender: sender,
        wasmByteCode: (0, _encoding.fromBase64)(wasm_byte_code),
        instantiatePermission: {
          permission: (0, _types.accessTypeFromJSON)(instantiate_permission.permission),
          address: instantiate_permission.address
        }
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgInstantiateContract": {
    aminoType: "wasm/MsgInstantiateContract",
    toAmino: function toAmino(_ref3) {
      var sender = _ref3.sender,
        admin = _ref3.admin,
        codeId = _ref3.codeId,
        label = _ref3.label,
        msg = _ref3.msg,
        funds = _ref3.funds;
      return {
        sender: sender,
        admin: admin,
        code_id: codeId.toString(),
        label: label,
        msg: JSON.parse((0, _encoding.fromUtf8)(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref4) {
      var sender = _ref4.sender,
        admin = _ref4.admin,
        code_id = _ref4.code_id,
        label = _ref4.label,
        msg = _ref4.msg,
        funds = _ref4.funds;
      return {
        sender: sender,
        admin: admin,
        codeId: _helpers.Long.fromString(code_id),
        label: label,
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgExecuteContract": {
    aminoType: "wasm/MsgExecuteContract",
    toAmino: function toAmino(_ref5) {
      var sender = _ref5.sender,
        contract = _ref5.contract,
        msg = _ref5.msg,
        funds = _ref5.funds;
      return {
        sender: sender,
        contract: contract,
        msg: JSON.parse((0, _encoding.fromUtf8)(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    },
    fromAmino: function fromAmino(_ref6) {
      var sender = _ref6.sender,
        contract = _ref6.contract,
        msg = _ref6.msg,
        funds = _ref6.funds;
      return {
        sender: sender,
        contract: contract,
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg)),
        funds: funds.map(function (el0) {
          return {
            denom: el0.denom,
            amount: el0.amount
          };
        })
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgMigrateContract": {
    aminoType: "wasm/MsgMigrateContract",
    toAmino: function toAmino(_ref7) {
      var sender = _ref7.sender,
        contract = _ref7.contract,
        codeId = _ref7.codeId,
        msg = _ref7.msg;
      return {
        sender: sender,
        contract: contract,
        code_id: codeId.toString(),
        msg: JSON.parse((0, _encoding.fromUtf8)(msg))
      };
    },
    fromAmino: function fromAmino(_ref8) {
      var sender = _ref8.sender,
        contract = _ref8.contract,
        code_id = _ref8.code_id,
        msg = _ref8.msg;
      return {
        sender: sender,
        contract: contract,
        codeId: _helpers.Long.fromString(code_id),
        msg: (0, _encoding.toUtf8)(JSON.stringify(msg))
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgUpdateAdmin": {
    aminoType: "wasm/MsgUpdateAdmin",
    toAmino: function toAmino(_ref9) {
      var sender = _ref9.sender,
        newAdmin = _ref9.newAdmin,
        contract = _ref9.contract;
      return {
        sender: sender,
        new_admin: newAdmin,
        contract: contract
      };
    },
    fromAmino: function fromAmino(_ref10) {
      var sender = _ref10.sender,
        new_admin = _ref10.new_admin,
        contract = _ref10.contract;
      return {
        sender: sender,
        newAdmin: new_admin,
        contract: contract
      };
    }
  },
  "/cosmwasm.wasm.v1.MsgClearAdmin": {
    aminoType: "wasm/MsgClearAdmin",
    toAmino: function toAmino(_ref11) {
      var sender = _ref11.sender,
        contract = _ref11.contract;
      return {
        sender: sender,
        contract: contract
      };
    },
    fromAmino: function fromAmino(_ref12) {
      var sender = _ref12.sender,
        contract = _ref12.contract;
      return {
        sender: sender,
        contract: contract
      };
    }
  }
};
exports.AminoConverter = AminoConverter;