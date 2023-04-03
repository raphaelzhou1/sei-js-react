"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Params = exports.Model = exports.ContractInfo = exports.ContractCodeHistoryOperationTypeSDKType = exports.ContractCodeHistoryOperationType = exports.ContractCodeHistoryEntry = exports.CodeInfo = exports.AccessTypeSDKType = exports.AccessTypeParam = exports.AccessType = exports.AccessConfig = exports.AbsoluteTxPosition = void 0;
exports.accessTypeFromJSON = accessTypeFromJSON;
exports.accessTypeToJSON = accessTypeToJSON;
exports.contractCodeHistoryOperationTypeFromJSON = contractCodeHistoryOperationTypeFromJSON;
exports.contractCodeHistoryOperationTypeToJSON = contractCodeHistoryOperationTypeToJSON;
var _any = require("../../../google/protobuf/any");
var _m0 = _interopRequireWildcard(require("protobufjs/minimal"));
var _helpers = require("@osmonauts/helpers");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/** AccessType permission types */
var AccessType;
/** AccessType permission types */
exports.AccessType = AccessType;
(function (AccessType) {
  AccessType[AccessType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
  AccessType[AccessType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
  AccessType[AccessType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
  AccessType[AccessType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
  AccessType[AccessType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessType || (exports.AccessType = AccessType = {}));
var AccessTypeSDKType;
exports.AccessTypeSDKType = AccessTypeSDKType;
(function (AccessTypeSDKType) {
  AccessTypeSDKType[AccessTypeSDKType["ACCESS_TYPE_UNSPECIFIED"] = 0] = "ACCESS_TYPE_UNSPECIFIED";
  AccessTypeSDKType[AccessTypeSDKType["ACCESS_TYPE_NOBODY"] = 1] = "ACCESS_TYPE_NOBODY";
  AccessTypeSDKType[AccessTypeSDKType["ACCESS_TYPE_ONLY_ADDRESS"] = 2] = "ACCESS_TYPE_ONLY_ADDRESS";
  AccessTypeSDKType[AccessTypeSDKType["ACCESS_TYPE_EVERYBODY"] = 3] = "ACCESS_TYPE_EVERYBODY";
  AccessTypeSDKType[AccessTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AccessTypeSDKType || (exports.AccessTypeSDKType = AccessTypeSDKType = {}));
function accessTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "ACCESS_TYPE_UNSPECIFIED":
      return AccessType.ACCESS_TYPE_UNSPECIFIED;
    case 1:
    case "ACCESS_TYPE_NOBODY":
      return AccessType.ACCESS_TYPE_NOBODY;
    case 2:
    case "ACCESS_TYPE_ONLY_ADDRESS":
      return AccessType.ACCESS_TYPE_ONLY_ADDRESS;
    case 3:
    case "ACCESS_TYPE_EVERYBODY":
      return AccessType.ACCESS_TYPE_EVERYBODY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return AccessType.UNRECOGNIZED;
  }
}
function accessTypeToJSON(object) {
  switch (object) {
    case AccessType.ACCESS_TYPE_UNSPECIFIED:
      return "ACCESS_TYPE_UNSPECIFIED";
    case AccessType.ACCESS_TYPE_NOBODY:
      return "ACCESS_TYPE_NOBODY";
    case AccessType.ACCESS_TYPE_ONLY_ADDRESS:
      return "ACCESS_TYPE_ONLY_ADDRESS";
    case AccessType.ACCESS_TYPE_EVERYBODY:
      return "ACCESS_TYPE_EVERYBODY";
    default:
      return "UNKNOWN";
  }
}
/** ContractCodeHistoryOperationType actions that caused a code change */
var ContractCodeHistoryOperationType;
/** ContractCodeHistoryOperationType actions that caused a code change */
exports.ContractCodeHistoryOperationType = ContractCodeHistoryOperationType;
(function (ContractCodeHistoryOperationType) {
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
  ContractCodeHistoryOperationType[ContractCodeHistoryOperationType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationType || (exports.ContractCodeHistoryOperationType = ContractCodeHistoryOperationType = {}));
var ContractCodeHistoryOperationTypeSDKType;
exports.ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationTypeSDKType;
(function (ContractCodeHistoryOperationTypeSDKType) {
  ContractCodeHistoryOperationTypeSDKType[ContractCodeHistoryOperationTypeSDKType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED"] = 0] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
  ContractCodeHistoryOperationTypeSDKType[ContractCodeHistoryOperationTypeSDKType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT"] = 1] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
  ContractCodeHistoryOperationTypeSDKType[ContractCodeHistoryOperationTypeSDKType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE"] = 2] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
  ContractCodeHistoryOperationTypeSDKType[ContractCodeHistoryOperationTypeSDKType["CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS"] = 3] = "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
  ContractCodeHistoryOperationTypeSDKType[ContractCodeHistoryOperationTypeSDKType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ContractCodeHistoryOperationTypeSDKType || (exports.ContractCodeHistoryOperationTypeSDKType = ContractCodeHistoryOperationTypeSDKType = {}));
function contractCodeHistoryOperationTypeFromJSON(object) {
  switch (object) {
    case 0:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED;
    case 1:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT;
    case 2:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE;
    case 3:
    case "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS":
      return ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ContractCodeHistoryOperationType.UNRECOGNIZED;
  }
}
function contractCodeHistoryOperationTypeToJSON(object) {
  switch (object) {
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_UNSPECIFIED";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_INIT";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_MIGRATE";
    case ContractCodeHistoryOperationType.CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS:
      return "CONTRACT_CODE_HISTORY_OPERATION_TYPE_GENESIS";
    default:
      return "UNKNOWN";
  }
}
/** AccessTypeParam */

function createBaseAccessTypeParam() {
  return {
    value: 0
  };
}
var AccessTypeParam = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.value !== 0) {
      writer.uint32(8).int32(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccessTypeParam();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$value;
    var message = createBaseAccessTypeParam();
    message.value = (_object$value = object.value) !== null && _object$value !== void 0 ? _object$value : 0;
    return message;
  }
};
exports.AccessTypeParam = AccessTypeParam;
function createBaseAccessConfig() {
  return {
    permission: 0,
    address: ""
  };
}
var AccessConfig = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.permission !== 0) {
      writer.uint32(8).int32(message.permission);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAccessConfig();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.permission = reader.int32();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$permission, _object$address;
    var message = createBaseAccessConfig();
    message.permission = (_object$permission = object.permission) !== null && _object$permission !== void 0 ? _object$permission : 0;
    message.address = (_object$address = object.address) !== null && _object$address !== void 0 ? _object$address : "";
    return message;
  }
};
exports.AccessConfig = AccessConfig;
function createBaseParams() {
  return {
    codeUploadAccess: undefined,
    instantiateDefaultPermission: 0,
    maxWasmCodeSize: _helpers.Long.UZERO
  };
}
var Params = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.codeUploadAccess !== undefined) {
      AccessConfig.encode(message.codeUploadAccess, writer.uint32(10).fork()).ldelim();
    }
    if (message.instantiateDefaultPermission !== 0) {
      writer.uint32(16).int32(message.instantiateDefaultPermission);
    }
    if (!message.maxWasmCodeSize.isZero()) {
      writer.uint32(24).uint64(message.maxWasmCodeSize);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseParams();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeUploadAccess = AccessConfig.decode(reader, reader.uint32());
          break;
        case 2:
          message.instantiateDefaultPermission = reader.int32();
          break;
        case 3:
          message.maxWasmCodeSize = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$instantiateDe;
    var message = createBaseParams();
    message.codeUploadAccess = object.codeUploadAccess !== undefined && object.codeUploadAccess !== null ? AccessConfig.fromPartial(object.codeUploadAccess) : undefined;
    message.instantiateDefaultPermission = (_object$instantiateDe = object.instantiateDefaultPermission) !== null && _object$instantiateDe !== void 0 ? _object$instantiateDe : 0;
    message.maxWasmCodeSize = object.maxWasmCodeSize !== undefined && object.maxWasmCodeSize !== null ? _helpers.Long.fromValue(object.maxWasmCodeSize) : _helpers.Long.UZERO;
    return message;
  }
};
exports.Params = Params;
function createBaseCodeInfo() {
  return {
    codeHash: new Uint8Array(),
    creator: "",
    instantiateConfig: undefined
  };
}
var CodeInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.codeHash.length !== 0) {
      writer.uint32(10).bytes(message.codeHash);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.instantiateConfig !== undefined) {
      AccessConfig.encode(message.instantiateConfig, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseCodeInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeHash = reader.bytes();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 5:
          message.instantiateConfig = AccessConfig.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$codeHash, _object$creator;
    var message = createBaseCodeInfo();
    message.codeHash = (_object$codeHash = object.codeHash) !== null && _object$codeHash !== void 0 ? _object$codeHash : new Uint8Array();
    message.creator = (_object$creator = object.creator) !== null && _object$creator !== void 0 ? _object$creator : "";
    message.instantiateConfig = object.instantiateConfig !== undefined && object.instantiateConfig !== null ? AccessConfig.fromPartial(object.instantiateConfig) : undefined;
    return message;
  }
};
exports.CodeInfo = CodeInfo;
function createBaseContractInfo() {
  return {
    codeId: _helpers.Long.UZERO,
    creator: "",
    admin: "",
    label: "",
    created: undefined,
    ibcPortId: "",
    extension: undefined
  };
}
var ContractInfo = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.codeId.isZero()) {
      writer.uint32(8).uint64(message.codeId);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.admin !== "") {
      writer.uint32(26).string(message.admin);
    }
    if (message.label !== "") {
      writer.uint32(34).string(message.label);
    }
    if (message.created !== undefined) {
      AbsoluteTxPosition.encode(message.created, writer.uint32(42).fork()).ldelim();
    }
    if (message.ibcPortId !== "") {
      writer.uint32(50).string(message.ibcPortId);
    }
    if (message.extension !== undefined) {
      _any.Any.encode(message.extension, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractInfo();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.codeId = reader.uint64();
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.admin = reader.string();
          break;
        case 4:
          message.label = reader.string();
          break;
        case 5:
          message.created = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;
        case 6:
          message.ibcPortId = reader.string();
          break;
        case 7:
          message.extension = _any.Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$creator2, _object$admin, _object$label, _object$ibcPortId;
    var message = createBaseContractInfo();
    message.codeId = object.codeId !== undefined && object.codeId !== null ? _helpers.Long.fromValue(object.codeId) : _helpers.Long.UZERO;
    message.creator = (_object$creator2 = object.creator) !== null && _object$creator2 !== void 0 ? _object$creator2 : "";
    message.admin = (_object$admin = object.admin) !== null && _object$admin !== void 0 ? _object$admin : "";
    message.label = (_object$label = object.label) !== null && _object$label !== void 0 ? _object$label : "";
    message.created = object.created !== undefined && object.created !== null ? AbsoluteTxPosition.fromPartial(object.created) : undefined;
    message.ibcPortId = (_object$ibcPortId = object.ibcPortId) !== null && _object$ibcPortId !== void 0 ? _object$ibcPortId : "";
    message.extension = object.extension !== undefined && object.extension !== null ? _any.Any.fromPartial(object.extension) : undefined;
    return message;
  }
};
exports.ContractInfo = ContractInfo;
function createBaseContractCodeHistoryEntry() {
  return {
    operation: 0,
    codeId: _helpers.Long.UZERO,
    updated: undefined,
    msg: new Uint8Array()
  };
}
var ContractCodeHistoryEntry = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.operation !== 0) {
      writer.uint32(8).int32(message.operation);
    }
    if (!message.codeId.isZero()) {
      writer.uint32(16).uint64(message.codeId);
    }
    if (message.updated !== undefined) {
      AbsoluteTxPosition.encode(message.updated, writer.uint32(26).fork()).ldelim();
    }
    if (message.msg.length !== 0) {
      writer.uint32(34).bytes(message.msg);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseContractCodeHistoryEntry();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operation = reader.int32();
          break;
        case 2:
          message.codeId = reader.uint64();
          break;
        case 3:
          message.updated = AbsoluteTxPosition.decode(reader, reader.uint32());
          break;
        case 4:
          message.msg = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$operation, _object$msg;
    var message = createBaseContractCodeHistoryEntry();
    message.operation = (_object$operation = object.operation) !== null && _object$operation !== void 0 ? _object$operation : 0;
    message.codeId = object.codeId !== undefined && object.codeId !== null ? _helpers.Long.fromValue(object.codeId) : _helpers.Long.UZERO;
    message.updated = object.updated !== undefined && object.updated !== null ? AbsoluteTxPosition.fromPartial(object.updated) : undefined;
    message.msg = (_object$msg = object.msg) !== null && _object$msg !== void 0 ? _object$msg : new Uint8Array();
    return message;
  }
};
exports.ContractCodeHistoryEntry = ContractCodeHistoryEntry;
function createBaseAbsoluteTxPosition() {
  return {
    blockHeight: _helpers.Long.UZERO,
    txIndex: _helpers.Long.UZERO
  };
}
var AbsoluteTxPosition = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (!message.blockHeight.isZero()) {
      writer.uint32(8).uint64(message.blockHeight);
    }
    if (!message.txIndex.isZero()) {
      writer.uint32(16).uint64(message.txIndex);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseAbsoluteTxPosition();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockHeight = reader.uint64();
          break;
        case 2:
          message.txIndex = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var message = createBaseAbsoluteTxPosition();
    message.blockHeight = object.blockHeight !== undefined && object.blockHeight !== null ? _helpers.Long.fromValue(object.blockHeight) : _helpers.Long.UZERO;
    message.txIndex = object.txIndex !== undefined && object.txIndex !== null ? _helpers.Long.fromValue(object.txIndex) : _helpers.Long.UZERO;
    return message;
  }
};
exports.AbsoluteTxPosition = AbsoluteTxPosition;
function createBaseModel() {
  return {
    key: new Uint8Array(),
    value: new Uint8Array()
  };
}
var Model = {
  encode: function encode(message) {
    var writer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _m0.Writer.create();
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },
  decode: function decode(input, length) {
    var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    var end = length === undefined ? reader.len : reader.pos + length;
    var message = createBaseModel();
    while (reader.pos < end) {
      var tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial: function fromPartial(object) {
    var _object$key, _object$value2;
    var message = createBaseModel();
    message.key = (_object$key = object.key) !== null && _object$key !== void 0 ? _object$key : new Uint8Array();
    message.value = (_object$value2 = object.value) !== null && _object$value2 !== void 0 ? _object$value2 : new Uint8Array();
    return message;
  }
};
exports.Model = Model;