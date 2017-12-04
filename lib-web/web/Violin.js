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
    var data = { path: 'M11,2C10.45,2 10,2.45 10,3V5L10,9C10,9.28 10.22,9.5 10.5,9.5H12C12.28,9.5 12.5,9.72 12.5,10C12.5,10.28 12.28,10.5 12,10.5H10.5C9.73,10.5 9,9.77 9,9V5.16C7.27,5.6 6,7.13 6,9V10.5C7.38,10.5 8.5,11.62 8.5,13C8.5,14.38 7.38,15.5 6,15.5V17C6,19.77 8.23,22 11,22H13C15.77,22 18,19.77 18,17V15.5C16.62,15.5 15.5,14.38 15.5,13C15.5,11.62 16.62,10.5 18,10.5V9C18,6.78 16.22,5 14,5V3C14,2.45 13.55,2 13,2H11M10.75,16.5H13.25L12.75,20H11.25L10.75,16.5Z' };
    exports.default = data;
});
