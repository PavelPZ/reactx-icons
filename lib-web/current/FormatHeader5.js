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
    exports.FormatHeader5 = 'M3,4H5V10H9V4H11V18H9V12H5V18H3V4M15,4H20V6H15V10H17C19.21,10 21,11.79 21,14C21,16.21 19.21,18 17,18H15C13.9,18 13,17.1 13,16V15H15V16H17C18.1,16 19,15.1 19,14C19,12.9 18.1,12 17,12H15C13.9,12 13,11.1 13,10V6C13,4.9 13.9,4 15,4Z';
});
