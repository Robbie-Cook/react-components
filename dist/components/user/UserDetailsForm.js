"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var H3_1 = __importDefault(require("../text/H3"));
var Button_1 = __importDefault(require("../Button"));
function UserDetailsForm(props) {
    return (core_1.jsx("div", null,
        core_1.jsx(H3_1.default, null, props.username ? "Welcome, " + props.username + "!" : "Welcome!"),
        core_1.jsx("p", null,
            "Email: ",
            core_1.jsx("span", null, props.email)),
        core_1.jsx(Button_1.default, { onClick: props.onLogout }, "Log out"),
        core_1.jsx(Button_1.default, { onClick: props.onSettingsClicked }, "Settings")));
}
exports.default = UserDetailsForm;
