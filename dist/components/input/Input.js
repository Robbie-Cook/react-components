"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var themer_1 = require("@robbie-cook/themer");
var Input = function (props) {
    var theme = themer_1.useTheme().getComponent("input");
    return (core_1.jsx("label", { css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        display: flex;\n        ", ";\n        font-family: ", ";\n        font-weight: normal;\n        font-size: 0.7em;\n        height: 40px;\n        margin-bottom: 16px;\n        \n        justify-content: center;\n        align-items: center;\n      "], ["\n        display: flex;\n        ", ";\n        font-family: ", ";\n        font-weight: normal;\n        font-size: 0.7em;\n        height: 40px;\n        margin-bottom: 16px;\n        \n        justify-content: center;\n        align-items: center;\n      "])), props.column ? "flex-direction: column" : "flex-direction: row", theme.font.fontFamily) },
        core_1.jsx("span", { css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          margin-right: 20px;\n          min-width: 80px;\n        "], ["\n          margin-right: 20px;\n          min-width: 80px;\n        "]))) }, props.label),
        core_1.jsx("input", { css: core_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n          font-size: inherit;\n          border: 2px solid ", ";\n          border-radius: 4px;\n          height: 100%;\n          box-sizing: border-box;\n          padding: 6px;\n          color: ", ";\n          ", ";\n          &:focus {\n            border: 2px solid ", ";\n          }\n        "], ["\n          font-size: inherit;\n          border: 2px solid ", ";\n          border-radius: 4px;\n          height: 100%;\n          box-sizing: border-box;\n          padding: 6px;\n          color: ", ";\n          ", ";\n          &:focus {\n            border: 2px solid ", ";\n          }\n        "])), theme.colors.primary, theme.colors.textColor, props.column ? "width: 100%" : "width: auto", theme.colors.textColor), id: props.key, type: props.type ? props.type : "text", placeholder: props.placeholder, onChange: function (e) {
                props.onChange(e.target.value);
            } })));
};
exports.default = Input;
var templateObject_1, templateObject_2, templateObject_3;
