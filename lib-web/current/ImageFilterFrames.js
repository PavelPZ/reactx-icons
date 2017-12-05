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
    exports.ImageFilterFrames = 'M18,8H6V18H18M20,20H4V6H8.5L12.04,2.5L15.5,6H20M20,4H16L12,0L8,4H4C2.9,4 2,4.9 2,6V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V6C22,4.9 21.1,4 20,4Z';
});
