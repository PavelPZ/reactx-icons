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
    exports.BookMultipleVariant = 'M19,18H9C7.9,18 7,17.1 7,16V4C7,2.9 7.9,2 9,2H19C20.1,2 21,2.9 21,4V16C21,17.1 20.1,18 19,18M10,9L12,7.5L14,9V4H10V9M17,20V22H5C3.9,22 3,21.1 3,20V6H5V20H17Z';
});
