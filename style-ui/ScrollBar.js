"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/ScrollBar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ScrollBar = probs => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "scrollbar",
    id: probs.style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "force-overflow"
  })));
};

var _default = ScrollBar;
exports.default = _default;