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
    exports.BookUnsecure = 'M18,2H12V9L9.5,7.5L7,9V2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V4C20,2.9 19.1,2 18,2M18,20H10V16H11V14C11,12.34 12.34,11 14,11C15.66,11 17,12.34 17,14H15C15,13.45 14.55,13 14,13C13.45,13 13,13.45 13,14V16H18V20Z';
});
