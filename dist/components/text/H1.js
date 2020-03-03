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
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var themer_1 = require("@robbie-cook/themer");
var H1 = function (props) {
    var theme = themer_1.useTheme().getComponent('h1');
    return (core_1.jsx("h1", __assign({ css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        color: ", ";\n        font-family: ", ";\n        font-weight: bold;\n      "], ["\n        color: ", ";\n        font-family: ", ";\n        font-weight: bold;\n      "])), theme.colors.text, theme.font.fontFamily) }, props), props.children));
};
exports.default = H1;
var templateObject_1;
