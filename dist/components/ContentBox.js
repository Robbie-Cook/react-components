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
function ContentBox(props) {
    var theme = themer_1.useTheme().getComponent('contentBox');
    return (core_1.jsx("div", __assign({ css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        color: ", ";\n        display: flex;\n        flex-direction: column;\n        max-width: 300px;\n        background-color: ", ";\n        padding: 40px;\n        border-radius: 5px;\n\n        & h3 {\n          margin-top: 0px;\n        }\n      "], ["\n        color: ", ";\n        display: flex;\n        flex-direction: column;\n        max-width: 300px;\n        background-color: ", ";\n        padding: 40px;\n        border-radius: 5px;\n\n        & h3 {\n          margin-top: 0px;\n        }\n      "])), theme.colors.text, theme.colors.muted) }, props), props.children));
}
exports.default = ContentBox;
var templateObject_1;
