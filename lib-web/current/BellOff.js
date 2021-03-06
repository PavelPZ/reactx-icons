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
    exports.BellOff = 'M14,20C14,21.1 13.1,22 12,22C10.9,22 10,21.1 10,20H14M19.74,21.57L17.17,19H3L6,16V10C6,9.35 6.1,8.72 6.3,8.13L3.47,5.3L4.89,3.89L7.29,6.29L21.15,20.15L19.74,21.57M11,4.08V3C11,2.45 11.45,2 12,2C12.55,2 13,2.45 13,3V4.08C15.84,4.56 18,7.03 18,10V14.17L8.77,4.94C9.44,4.5 10.19,4.22 11,4.08Z';
});
