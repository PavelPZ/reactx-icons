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
    exports.AccountAlert = 'M10,4C12.21,4 14,5.79 14,8C14,10.21 12.21,12 10,12C7.79,12 6,10.21 6,8C6,5.79 7.79,4 10,4M10,14C14.42,14 18,15.79 18,18V20H2V18C2,15.79 5.58,14 10,14M20,12V7H22V12H20M20,16V14H22V16H20Z';
});
