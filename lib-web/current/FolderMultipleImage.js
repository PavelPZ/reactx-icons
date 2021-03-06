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
    exports.FolderMultipleImage = 'M7,15L11.5,9L15,13.5L17.5,10.5L21,15M22,4H14L12,2H6C4.9,2 4,2.9 4,4V16C4,17.1 4.9,18 6,18H22C23.1,18 24,17.1 24,16V6C24,4.9 23.1,4 22,4M2,6H0V11H0V20C0,21.1 0.9,22 2,22H20V20H2V6Z';
});
