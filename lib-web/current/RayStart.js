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
    exports.RayStart = 'M4,9C5.31,9 6.42,9.83 6.83,11H22V13H6.83C6.42,14.17 5.31,15 4,15C2.34,15 1,13.66 1,12C1,10.34 2.34,9 4,9Z';
});
