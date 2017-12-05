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
    exports.LaptopWindows = 'M3,4H21C21.55,4 22,4.45 22,5V16C22,16.55 21.55,17 21,17H22L24,20V21H0V20L2,17H3C2.45,17 2,16.55 2,16V5C2,4.45 2.45,4 3,4M4,6V15H20V6H4Z';
});
