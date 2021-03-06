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
    exports.SeatLegroomNormal = 'M5,12V3H3V12C3,14.76 5.24,17 8,17H14V15H8C6.34,15 5,13.66 5,12M20.5,18H19V11C19,9.9 18.1,9 17,9H12V3H6V11C6,12.66 7.34,14 9,14H16V21H20.5C21.33,21 22,20.33 22,19.5C22,18.67 21.33,18 20.5,18Z';
});
