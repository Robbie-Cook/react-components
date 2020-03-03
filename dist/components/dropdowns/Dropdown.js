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
var ContentBox_1 = __importDefault(require("../ContentBox"));
var themer_1 = require("@robbie-cook/themer");
/**
 * A class to get the appropriate
 * offset from the side for the element
 * This is to prevent the element going off the screen.
 *
 * Note: make sure that the element you pass is not position:absolute,
 * as this will have an incorrect width.
 *
 * @param {HTMLElement} element The HTML element to inspect
 */
var calculateXOffset = function (element) {
    var rect = element.getBoundingClientRect();
    console.log(rect);
    var overflow = window.innerWidth - rect.left;
    return overflow;
};
/**
 * Defines a UI dropdown
 */
var Dropdown = function (props) {
    var offsetElement = react_1.useRef(null);
    var theme = themer_1.useTheme();
    // // If the user clicks anywhere but the dropdown, close
    // // the dropdown
    // document.addEventListener("click", (ev: MouseEvent) => {
    //   const dropdownElement = offsetElement.current as HTMLElement;
    //   const boundingRect = dropdownElement.getBoundingClientRect();
    //   console.log(boundingRect.x);
    //   console.log(ev.clientX, ev.clientY);
    // })
    // How much to offset the dropdown to the left/right
    var _a = react_1.useState(null), wrapRight = _a[0], setWrapRight = _a[1];
    react_1.useLayoutEffect(function () {
        var _a, _b, _c, _d, _e, _f;
        if (offsetElement.current) {
            var boundingBox = (_b = (_a = offsetElement) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect();
            console.log('Box', ((_c = boundingBox) === null || _c === void 0 ? void 0 : _c.x) + ((_d = boundingBox) === null || _d === void 0 ? void 0 : _d.width));
            console.log('Window', window.innerWidth);
            if (((_e = boundingBox) === null || _e === void 0 ? void 0 : _e.x) + ((_f = boundingBox) === null || _f === void 0 ? void 0 : _f.width) < window.innerWidth) {
                console.log('Dropdown longer than screen. Wrapping it.');
                setWrapRight(true);
            }
        }
    }, [offsetElement]);
    return (core_1.jsx("div", { className: "side", css: core_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        position: absolute;\n        margin-top: 7px;\n        transition: opacity 0.2s ease 0s;\n        ", ";\n        ", "\n      "], ["\n        position: absolute;\n        margin-top: 7px;\n        transition: opacity 0.2s ease 0s;\n        ", ";\n        ",
            "\n      "])), wrapRight ? 'right: 0' : '', props.active
            ? "opacity: 1"
            : "opacity: 0; height: 0; width: 0; overflow: hidden"), ref: offsetElement },
        core_1.jsx(ContentBox_1.default, null, props.children)));
};
exports.default = Dropdown;
var templateObject_1;
