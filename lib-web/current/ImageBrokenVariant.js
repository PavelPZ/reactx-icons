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
    exports.ImageBrokenVariant = 'M21,5V11.59L18,8.58L14,12.59L10,8.59L6,12.59L3,9.58V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5M18,11.42L21,14.43V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V12.42L6,15.41L10,11.41L14,15.41';
});