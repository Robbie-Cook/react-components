"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
// import styled from '@emotion/styled'
var React = __importStar(require("react"));
var themer_1 = require("@robbie-cook/themer");
var LoadingIcon_1 = __importDefault(require("../components/icons/LoadingIcon"));
/**
 * A normal button component
 */
var Button = function (props) {
    var theme = themer_1.useTheme().getComponent("button");
    var _a = React.useState(theme.colors.primary), iconColor = _a[0], setIconColor = _a[1];
    return (core_1.jsx("button", __assign({ onMouseEnter: function () { return setIconColor(theme.colors.background); }, onMouseLeave: function () { return setIconColor(theme.colors.primary); }, css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        border: 1px solid ", ";\n        background-color: ", ";\n        font-size: 0.78rem;\n        padding: 10px 20px;\n        color: ", ";\n        transition: all 0.2s;\n\n        &:hover {\n          cursor: pointer;\n          background-color: ", ";\n          color: ", ";\n        }\n        &:active {\n          transform: scale(1.1);\n        }\n      "], ["\n        border: 1px solid ", ";\n        background-color: ", ";\n        font-size: 0.78rem;\n        padding: 10px 20px;\n        color: ", ";\n        transition: all 0.2s;\n\n        &:hover {\n          cursor: pointer;\n          background-color: ", ";\n          color: ", ";\n        }\n        &:active {\n          transform: scale(1.1);\n        }\n      "])), theme.colors.primary, theme.colors.background, theme.colors.primary, theme.colors.primary, theme.colors.background) }, props, { onClick: props.onClick, style: props.style }), props.loading ? (core_1.jsx(LoadingIcon_1.default, { color: iconColor })) : (props.children)));
};
exports.default = Button;
var templateObject_1;
