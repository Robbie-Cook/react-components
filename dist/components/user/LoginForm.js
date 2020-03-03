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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
var react_1 = require("react");
var Input_1 = __importDefault(require("../input/Input"));
var Button_1 = __importDefault(require("../Button"));
var themer_1 = require("@robbie-cook/themer");
var H3_1 = __importDefault(require("../text/H3"));
var ContentBox_1 = __importDefault(require("../ContentBox"));
/** The UI for a login form */
var LoginForm = function (props) {
    var theme = themer_1.useTheme();
    var _a = react_1.useState(null), username = _a[0], setUsername = _a[1];
    var _b = react_1.useState(null), password = _b[0], setPassword = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    /**
     * Whether an error has occurred in the form
     */
    var _d = react_1.useState(null), error = _d[0], setError = _d[1];
    return (core_1.jsx(ContentBox_1.default, __assign({}, props),
        core_1.jsx(H3_1.default, { css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          text-transform: uppercase;\n          text-align: center;\n          margin-bottom: 40px;\n          min-width: 250px;\n        "], ["\n          text-transform: uppercase;\n          text-align: center;\n          margin-bottom: 40px;\n          min-width: 250px;\n        "]))) }, "Login"),
        core_1.jsx(Input_1.default, { placeholder: "Email", column: true, onChange: function (value) {
                setUsername(value);
            } }),
        core_1.jsx(Input_1.default, { placeholder: "Password", column: true, type: "password", onChange: function (value) {
                setPassword(value);
            } }),
        core_1.jsx(Button_1.default, { css: core_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n          margin-top: 15px;\n        "], ["\n          margin-top: 15px;\n        "]))), loading: loading, onClick: function () {
                setError(null);
                if (!username || !password) {
                    setError('Username or password empty!');
                    return;
                }
                setLoading(true);
                props.onSubmit(username, password);
                // Set these to null *straight away* for security reasons
                setUsername(null);
                setPassword(null);
                setLoading(false);
            } }, "Log in")));
};
exports.default = LoginForm;
var templateObject_1, templateObject_2;
