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
    exports.Douban = 'M20,6H4V4H20V6M20,18V20H4V18H7.33L6.26,14H5V8H19V14H17.74L16.67,18H20M7,12H17V10H7V12M9.4,18H14.6L15.67,14H8.33L9.4,18Z';
});
