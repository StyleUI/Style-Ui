"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = Navbar;
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./styles/Navbar.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Navbar(probs) {
  const bars = "fas fa-align-justify";
  const close = "fas fa-times-circle";
  const mobile_class = "navlink active";
  const [click, newclick] = (0, _react.useState)(bars);
  const [mobile_menue, set_mobile_menue] = (0, _react.useState)("navlink");

  const icon_click_handler = event => {
    event.preventDefault();

    if (click === bars) {
      set_mobile_menue(mobile_class);
      newclick(close);
    } else {
      set_mobile_menue("navlink");
      newclick(bars);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: "Navbar"
  }, /*#__PURE__*/_react.default.createElement("nav", {
    className: probs.bg
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: probs.Logo,
    className: probs.display,
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("h3", {
    className: "logo"
  }, probs.brand_name), /*#__PURE__*/_react.default.createElement("img", {
    class: probs.brand_image
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: mobile_menue
  }, probs.children), /*#__PURE__*/_react.default.createElement("div", {
    onClick: icon_click_handler,
    className: "burger right"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: click
  })))));
}

var _default = Navbar;
exports.default = _default;