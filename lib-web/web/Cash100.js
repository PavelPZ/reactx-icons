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
    var data = { path: 'M2,5H22V20H2V5M20,18V7H4V18H20M17,8C17,9.1 17.9,10 19,10V15C17.9,15 17,15.9 17,17H7C7,15.9 6.1,15 5,15V10C6.1,10 7,9.1 7,8H17M17,13V12C17,10.9 16.33,10 15.5,10C14.67,10 14,10.9 14,12V13C14,14.1 14.67,15 15.5,15C16.33,15 17,14.1 17,13M15.5,11C15.78,11 16,11.22 16,11.5V13.5C16,13.78 15.78,14 15.5,14C15.22,14 15,13.78 15,13.5V11.5C15,11.22 15.22,11 15.5,11M13,13V12C13,10.9 12.33,10 11.5,10C10.67,10 10,10.9 10,12V13C10,14.1 10.67,15 11.5,15C12.33,15 13,14.1 13,13M11.5,11C11.78,11 12,11.22 12,11.5V13.5C12,13.78 11.78,14 11.5,14C11.22,14 11,13.78 11,13.5V11.5C11,11.22 11.22,11 11.5,11M8,15H9V10H8L7,10.5V11.5L8,11V15Z' };
    exports.default = data;
});
