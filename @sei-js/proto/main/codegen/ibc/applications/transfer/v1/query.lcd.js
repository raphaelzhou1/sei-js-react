"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LCDQueryClient = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _helpers = require("@osmonauts/helpers");
var LCDQueryClient = /*#__PURE__*/function () {
  function LCDQueryClient(_ref) {
    var requestClient = _ref.requestClient;
    (0, _classCallCheck2["default"])(this, LCDQueryClient);
    (0, _defineProperty2["default"])(this, "req", void 0);
    this.req = requestClient;
    this.denomTrace = this.denomTrace.bind(this);
    this.denomTraces = this.denomTraces.bind(this);
    this.params = this.params.bind(this);
  }
  /* DenomTrace queries a denomination trace information. */
  (0, _createClass2["default"])(LCDQueryClient, [{
    key: "denomTrace",
    value: function () {
      var _denomTrace = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(params) {
        var endpoint;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              endpoint = "ibc/apps/transfer/v1/denom_traces/".concat(params.hash);
              _context.next = 3;
              return this.req.get(endpoint);
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function denomTrace(_x) {
        return _denomTrace.apply(this, arguments);
      }
      return denomTrace;
    }() /* DenomTraces queries all denomination traces. */
  }, {
    key: "denomTraces",
    value: function () {
      var _denomTraces = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        var params,
          options,
          endpoint,
          _args2 = arguments;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              params = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {
                pagination: undefined
              };
              options = {
                params: {}
              };
              if (typeof (params === null || params === void 0 ? void 0 : params.pagination) !== "undefined") {
                (0, _helpers.setPaginationParams)(options, params.pagination);
              }
              endpoint = "ibc/apps/transfer/v1/denom_traces";
              _context2.next = 6;
              return this.req.get(endpoint, options);
            case 6:
              return _context2.abrupt("return", _context2.sent);
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function denomTraces() {
        return _denomTraces.apply(this, arguments);
      }
      return denomTraces;
    }() /* Params queries all parameters of the ibc-transfer module. */
  }, {
    key: "params",
    value: function () {
      var _params2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var _params,
          endpoint,
          _args3 = arguments;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _params = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              endpoint = "ibc/apps/transfer/v1/params";
              _context3.next = 4;
              return this.req.get(endpoint);
            case 4:
              return _context3.abrupt("return", _context3.sent);
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function params() {
        return _params2.apply(this, arguments);
      }
      return params;
    }()
  }]);
  return LCDQueryClient;
}();
exports.LCDQueryClient = LCDQueryClient;