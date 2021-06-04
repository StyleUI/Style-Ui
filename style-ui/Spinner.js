"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./styles/Spinner.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Spinner = probs => {
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: probs.color
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: probs.type
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: probs.size,
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "7",
    "stroke-width": "2"
  })))), /*#__PURE__*/_react.default.createElement("div", {
    class: probs.type
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "grey"
  })));
};

var _default = Spinner;
exports.default = _default;