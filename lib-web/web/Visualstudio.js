(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var data = { path: 'M17,8.5L12.25,12.32L17,16V8.5M4.7,18.4L2,16.7V7.7L5,6.7L9.3,10.03L18,2L22,4.5V20L17,22L9.34,14.66L4.7,18.4M5,14L6.86,12.28L5,10.5V14Z' };
    exports.default = data;
});
