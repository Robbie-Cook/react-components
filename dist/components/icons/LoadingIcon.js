"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** @jsx jsx */
var core_1 = require("@emotion/core");
/**
 * A loading icon taken from https://samherbert.net/svg-loaders/.
 * Thanks, Sam!
 */
var LoadingIcon = function (props) { return (
// <!-- By Sam Herbert (@sherb), for everyone. More @ http://goo.gl/7AJzbL -->
core_1.jsx("svg", { width: "38", height: "38", viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" },
    core_1.jsx("defs", null,
        core_1.jsx("linearGradient", { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
            core_1.jsx("stop", { "stop-color": props.color, "stop-opacity": "0", offset: "0%" }),
            core_1.jsx("stop", { "stop-color": props.color, "stop-opacity": ".631", offset: "63.146%" }),
            core_1.jsx("stop", { "stop-color": props.color, offset: "100%" }))),
    core_1.jsx("g", { fill: "none", "fill-rule": "evenodd" },
        core_1.jsx("g", { transform: "translate(1 1)" },
            core_1.jsx("path", { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: "url(#a)", "stroke-width": "2" },
                core_1.jsx("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })),
            core_1.jsx("circle", { fill: props.color, cx: "36", cy: "18", r: "1" },
                core_1.jsx("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })))))); };
exports.default = LoadingIcon;
