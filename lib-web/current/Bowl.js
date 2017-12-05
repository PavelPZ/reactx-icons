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
    exports.Bowl = 'M22,15C22,18.87 18.87,22 15,22H9C5.13,22 2,18.87 2,15V12H15.58L20.3,4.44L22,5.5L17.94,12H22V15Z';
});
