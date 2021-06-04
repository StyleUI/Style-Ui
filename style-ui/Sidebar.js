"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = _interopRequireDefault(require("react"));

require("./styles/Sidebar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Sidebar(probs) {
  return /*#__PURE__*/_react.default.createElement("div", null, probs.children);
}