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
    exports.Transcribe = 'M20,5C21.1,5 22,5.9 22,7V17C22,18.1 21.1,19 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M18,17V15H12.5L10.5,17H18M6,17H8.5L15.35,10.12C15.55,9.93 15.55,9.61 15.35,9.41L13.59,7.65C13.39,7.45 13.07,7.45 12.88,7.65L6,14.53V17Z';
});
