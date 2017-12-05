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
    exports.HumbleBundle = 'M11.91,6.4L10.8,7.06C9.53,3.71 11.36,3.5 11.36,3.5C10.2,5.08 11.91,6.4 11.91,6.4M13.45,3.56C14.47,3.56 16.28,5.69 11.41,10.25C6.7,14.67 10.5,15.92 10.5,15.92C8.43,13.73 12.2,11.19 12.2,11.19C12.2,11.19 15,12.54 16,13.13C16.97,13.71 17.6,17.23 16.11,18.96C13.3,22.23 5.74,20.9 4.76,18.25C4.34,17.13 3,13.04 5.7,10.54C7.82,8.67 8.75,9.18 11.78,7.4C15.22,5.38 13.41,3.5 13.45,3.56M2.25,3.14L10.29,7.34L8.35,8.19L1.5,4.61C1.08,4.4 0.92,3.9 1.13,3.5C1.34,3.09 1.84,2.93 2.25,3.14M22.73,13.83C23.14,14.04 23.29,14.54 23.08,14.94C22.87,15.34 22.38,15.5 21.97,15.29L12.63,10.42L13.74,9.14L22.73,13.83Z';
});
