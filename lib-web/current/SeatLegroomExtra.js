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
    exports.SeatLegroomExtra = 'M4,12V3H2V12C2,14.76 4.24,17 7,17H13V15H7C5.34,15 4,13.66 4,12M22.83,17.24C22.45,16.5 21.54,16.27 20.8,16.61L19.71,17.11L16.3,10.13C15.96,9.45 15.27,9 14.5,9H11V3H5V11C5,12.66 6.34,14 8,14H15L18.41,21L22.13,19.3C22.9,18.94 23.23,18 22.83,17.24Z';
});
