"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/Navbar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NavItem = probs => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("li", {
    className: probs.hover
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: probs.as,
    className: probs.color
  }, /*#__PURE__*/_react.default.createElement("i", {
    class: probs.icon_class
  }), " ", probs.item, " ")), probs.children);
};

var _default = NavItem;
exports.default = _default;