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
    exports.SurroundSound31 = 'M13,17C12.45,17 12,16.55 12,16C12,15.45 12.45,15 13,15C13.55,15 14,15.45 14,16C14,16.55 13.55,17 13,17M19,7V15H20V17H16V15H17V9H16L17,7H19M4,7H8C9.1,7 10,7.9 10,9V15C10,16.1 9.1,17 8,17H4V15H8V13H5V11H8V9H4V7Z';
});
