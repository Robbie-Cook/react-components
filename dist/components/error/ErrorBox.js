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
var cancel_svg_1 = __importDefault(require("../../../assets/images/icons/cancel.svg"));
var themer_1 = require("@robbie-cook/themer");
/**
 * An error box to show if something isn't working
 */
function ErrorBox(props) {
    var theme = themer_1.useTheme('errorBox');
    return (core_1.jsx("span", null,
        core_1.jsx("img", { css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          filter: invert(51%) sepia(12%) saturate(2905%) hue-rotate(313deg)\n            brightness(100%) contrast(106%);\n        "], ["\n          filter: invert(51%) sepia(12%) saturate(2905%) hue-rotate(313deg)\n            brightness(100%) contrast(106%);\n        "]))), src: cancel_svg_1.default }),
        props.children));
}
exports.default = ErrorBox;
var templateObject_1;
