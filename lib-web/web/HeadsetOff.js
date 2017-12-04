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
    var data = { path: 'M22.5,4.77L20.43,6.84C20.8,7.82 21,8.89 21,10V20C21,21.66 19.66,23 18,23H12V21H19V20H15V12.27L9,18.27V20H7.27L4.77,22.5L3.5,21.22L21.22,3.5L22.5,4.77M12,1C14.53,1 16.82,2.04 18.45,3.72L17.04,5.14C15.77,3.82 14,3 12,3C8.13,3 5,6.13 5,10V12H9V13.18L3.5,18.67C3.19,18.19 3,17.62 3,17V10C3,5.03 7.03,1 12,1M19,12V10C19,9.46 18.94,8.94 18.83,8.44L15.27,12H19Z' };
    exports.default = data;
});