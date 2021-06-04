"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/Hover.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hover = probs => {
  return /*#__PURE__*/_react.default.createElement("div", null, probs.children);
};

var _default = Hover;
exports.default = _default;