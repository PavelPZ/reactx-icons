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
    exports.LibraryMusic = 'M4,6H2V20C2,21.1 2.9,22 4,22H18V20H4M18,7H15V12.5C15,13.88 13.88,15 12.5,15C11.12,15 10,13.88 10,12.5C10,11.12 11.12,10 12.5,10C13.07,10 13.58,10.19 14,10.5V5H18M20,2H8C6.9,2 6,2.9 6,4V16C6,17.1 6.9,18 8,18H20C21.1,18 22,17.1 22,16V4C22,2.9 21.1,2 20,2Z';
});
