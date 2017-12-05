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
    exports.ContentSaveAll = 'M17,7V3H7V7H17M14,17C15.66,17 17,15.66 17,14C17,12.34 15.66,11 14,11C12.34,11 11,12.34 11,14C11,15.66 12.34,17 14,17M19,1L23,5V17C23,18.1 22.1,19 21,19H7C5.89,19 5,18.1 5,17V3C5,1.9 5.9,1 7,1H19M1,7H3V21H17V23H3C1.9,23 1,22.1 1,21V7Z';
});
