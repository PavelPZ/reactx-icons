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
    var data = { path: 'M17.65,6.35C16.2,4.9 14.21,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18C8.69,18 6,15.31 6,12C6,8.69 8.69,6 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z' };
    exports.default = data;
});