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
    exports.Binoculars = 'M11,6H13V13H11V6M9,20C9,20.55 8.55,21 8,21H5C4.45,21 4,20.55 4,20V15L6,6H10V13C10,13.55 9.55,14 9,14V20M10,5H7V3H10V5M15,20V14C14.45,14 14,13.55 14,13V6H18L20,15V20C20,20.55 19.55,21 19,21H16C15.45,21 15,20.55 15,20M14,5V3H17V5H14Z';
});
