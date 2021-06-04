"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/Alert.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Alert = probs => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: probs.type
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: probs.color
  }, " ", probs.children, " ")));
};

var _default = Alert;
exports.default = _default;