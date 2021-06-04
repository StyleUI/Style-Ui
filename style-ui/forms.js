"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./styles/Forms.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Form = probs => {
  const disable_state = "form-toggle-button";
  const active_state = "form-toggle-button active";
  const signup_active = "signup_section";
  const signup_disable = "signup_section_disable";
  const signin_active = "signin_section";
  const signin_diable = "signin_section_disable";
  const [signup_form_active, set_signup_form_actve] = (0, _react.useState)(disable_state); // for button toggle

  const [signin_form_active, set_signin_form_active] = (0, _react.useState)(active_state); // for button toggle

  const [display_signup, set_display_signup] = (0, _react.useState)(signup_active); // for signup block

  const [display_signin, set_display_signin] = (0, _react.useState)(signin_active); // for signin block

  const signup = event => {
    event.preventDefault();

    if (signin_form_active == disable_state) {
      set_signup_form_actve(disable_state);
      set_signin_form_active(active_state);
      set_display_signup(signup_disable);
      set_display_signin(signin_active);
    } else {
      set_signin_form_active(disable_state);
      set_signup_form_actve(active_state);
      set_display_signup(signup_active);
      set_display_signin(signin_diable);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", null, probs.children);
};

var _default = Form;
exports.default = _default;