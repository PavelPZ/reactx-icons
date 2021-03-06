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
    exports.Script = 'M14,20C15.1,20 16,19.1 16,18V5H9C8.45,5 8,5.45 8,6V16H5V5C5,3.34 6.34,2 8,2H19C20.66,2 22,3.34 22,5V6H18V18L18,19C18,20.66 16.66,22 15,22H5C3.34,22 2,20.66 2,19V18H12C12,19.1 12.9,20 14,20Z';
});
