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
    var data = { path: 'M5.5,0H18.5C21.54,0 24,2.46 24,5.5V18.5C24,21.54 21.54,24 18.5,24H5.5C2.46,24 0,21.54 0,18.5V5.5C0,2.46 2.46,0 5.5,0M15.39,15.18C15.39,16.76 14.5,17.81 12.85,17.95V12.61C14.55,13.13 15.39,13.66 15.39,15.18M11.65,6V10.88C10.34,10.5 9.03,9.93 9.03,8.43C9.03,6.94 10.18,6.12 11.65,6M15.5,7.6L16.5,6.8C15.62,5.66 14.4,4.92 12.85,4.77V3.8H11.65V3.8L11.65,4.75C9.5,4.89 7.68,6.17 7.68,8.5C7.68,11 9.74,11.78 11.65,12.29V17.96C10.54,17.84 9.29,17.31 8.43,16.03L7.3,16.78C8.2,18.12 9.76,19 11.65,19.14V20.2H12.07L12.85,20.2V19.16C15.35,19 16.7,17.34 16.7,15.14C16.7,12.58 14.81,11.76 12.85,11.19V6.05C14,6.22 14.85,6.76 15.5,7.6Z' };
    exports.default = data;
});