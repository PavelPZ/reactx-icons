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
    var data = { path: 'M2,5.27L3.28,4L20,20.72L18.73,22L13.38,16.65C12.55,18.35 10.93,19.59 9,19.92V22H7V19.92C4.16,19.44 2,16.97 2,14H4C4,16.21 5.79,18 8,18C9.82,18 11.36,16.78 11.84,15.11L10,13.27V14C10,15.1 9.1,16 8,16C6.9,16 6,15.1 6,14V9.27L2,5.27M21.41,9.41L17.17,13.66L18.18,10H14C12.9,10 12,9.1 12,8V4C12,2.9 12.9,2 14,2H20C21.1,2 22,2.9 22,4V8C22,8.55 21.78,9.05 21.41,9.41Z' };
    exports.default = data;
});
