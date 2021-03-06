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
    exports.HeadphonesOff = 'M12,1C7.03,1 3,5.03 3,10V17C3,17.62 3.19,18.19 3.5,18.67L9,13.18V12H5V10C5,6.13 8.13,3 12,3C14,3 15.77,3.82 17.04,5.14L18.45,3.72C16.82,2.04 14.53,1 12,1M21.22,3.5L3.5,21.22L4.77,22.5L7.27,20H9V18.27L15,12.27V20H18C19.66,20 21,18.66 21,17V10C21,8.89 20.8,7.82 20.43,6.84L22.5,4.77L21.22,3.5M18.83,8.44C18.94,8.94 19,9.46 19,10V12H15.27L18.83,8.44Z';
});
