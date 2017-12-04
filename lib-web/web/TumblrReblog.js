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
    var data = { path: 'M3.75,17L8,12.75V16H18V11.5L20,9.5V16C20,17.1 19.1,18 18,18H8V21.25L3.75,17M20.25,7L16,11.25V8H6V12.5L4,14.5V8C4,6.9 4.9,6 6,6H16V2.75L20.25,7Z' };
    exports.default = data;
});
