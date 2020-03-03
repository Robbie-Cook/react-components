"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var Button_1 = __importDefault(require("../Button"));
var Dropdown_1 = __importDefault(require("./Dropdown"));
/**
 * Defines a dropdown menu, which is activated by pressing the button
 */
var DropdownMenu = function (props) {
    var _a = react_1.useState(false), active = _a[0], setActive = _a[1];
    return (core_1.jsx("div", { css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""]))), className: props.className },
        core_1.jsx(Button_1.default, { onClick: function (e) {
                return setActive(!active);
            } }, props.label),
        core_1.jsx(Dropdown_1.default, { active: active, children: props.children })));
};
exports.default = DropdownMenu;
var templateObject_1;
