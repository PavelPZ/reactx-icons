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
    exports.FolderLock = 'M20,6C21.1,6 22,6.9 22,8V18C22,19.1 21.1,20 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4H10L12,6H20M19,17V13H18V12C18,10.34 16.66,9 15,9C13.34,9 12,10.34 12,12V13H11V17H19M15,11C15.55,11 16,11.45 16,12V13H14V12C14,11.45 14.45,11 15,11Z';
});
