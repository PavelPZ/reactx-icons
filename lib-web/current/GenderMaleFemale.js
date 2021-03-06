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
    exports.GenderMaleFemale = 'M17.58,4H14V2H21V9H19V5.41L15.17,9.24C15.69,10.03 16,11 16,12C16,14.42 14.28,16.44 12,16.9V19H14V21H12V23H10V21H8V19H10V16.9C7.72,16.44 6,14.42 6,12C6,9.24 8.24,7 11,7C12,7 12.96,7.3 13.75,7.83L17.58,4M11,9C9.34,9 8,10.34 8,12C8,13.66 9.34,15 11,15C12.66,15 14,13.66 14,12C14,10.34 12.66,9 11,9Z';
});
