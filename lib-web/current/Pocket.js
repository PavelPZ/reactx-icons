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
    exports.Pocket = 'M22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12V4.5C2,3.12 3.12,2 4.5,2H19.5C20.88,2 22,3.12 22,4.5V12M15.88,8.25L12,12.13L8.12,8.24C7.53,7.65 6.58,7.65 6,8.24C5.41,8.82 5.41,9.77 6,10.36L10.93,15.32C11.5,15.9 12.47,15.9 13.06,15.32L18,10.37C18.59,9.78 18.59,8.83 18,8.25C17.42,7.66 16.47,7.66 15.88,8.25Z';
});
