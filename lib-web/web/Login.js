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
    var data = { path: 'M10,17.25V14H3V10H10V6.75L15.25,12L10,17.25M8,2H17C18.1,2 19,2.9 19,4V20C19,21.1 18.1,22 17,22H8C6.9,22 6,21.1 6,20V16H8V20H17V4H8V8H6V4C6,2.9 6.9,2 8,2Z' };
    exports.default = data;
});