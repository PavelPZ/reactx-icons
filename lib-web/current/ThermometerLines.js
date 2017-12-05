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
    exports.ThermometerLines = 'M17,3H21V5H17V3M17,7H21V9H17V7M17,11H21V13H17.75L17,12.1V11M21,15V17H19C19,16.31 18.9,15.63 18.71,15H21M17,17C17,19.76 14.76,22 12,22C9.24,22 7,19.76 7,17C7,15.36 7.79,13.91 9,13V5C9,3.34 10.34,2 12,2C13.66,2 15,3.34 15,5V13C16.21,13.91 17,15.36 17,17M11,8V14.17C9.83,14.58 9,15.69 9,17C9,18.66 10.34,20 12,20C13.66,20 15,18.66 15,17C15,15.69 14.17,14.58 13,14.17V8H11M7,3V5H3V3H7M7,7V9H3V7H7M7,11V12.1L6.25,13H3V11H7M3,15H5.29C5.1,15.63 5,16.31 5,17H3V15Z';
});