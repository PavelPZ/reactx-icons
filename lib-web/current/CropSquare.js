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
    exports.CropSquare = 'M18,18H6V6H18M18,4H6C4.9,4 4,4.9 4,6V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18V6C20,4.89 19.1,4 18,4Z';
});
