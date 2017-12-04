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
    var data = { path: 'M5.5,21C4.72,21 4.04,20.55 3.71,19.9V19.9L1.1,10.44L1,10C1,9.45 1.45,9 2,9H6.58L11.18,2.43C11.36,2.17 11.66,2 12,2C12.34,2 12.65,2.17 12.83,2.44L17.42,9H22C22.55,9 23,9.45 23,10L22.96,10.29L20.29,19.9C19.96,20.55 19.28,21 18.5,21H5.5M12,4.74L9,9H15L12,4.74M12,13C10.9,13 10,13.9 10,15C10,16.1 10.9,17 12,17C13.1,17 14,16.1 14,15C14,13.9 13.1,13 12,13Z' };
    exports.default = data;
});