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
    var data = { path: 'M2,4H4V2H10V4C15.52,4 20,8.48 20,14H22V20H20V22H18V20H16V14H18C18,9.58 14.42,6 10,6V8H4V6H2V4M18,16V18H20V16H18M6,4V6H8V4H6Z' };
    exports.default = data;
});
