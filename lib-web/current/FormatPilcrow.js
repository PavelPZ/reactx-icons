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
    exports.FormatPilcrow = 'M10,11C7.79,11 6,9.21 6,7C6,4.79 7.79,3 10,3H18V5H16V21H14V5H12V21H10V11Z';
});
