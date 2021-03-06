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
    exports.DeleteSweep = 'M15,16H19V18H15V16M15,8H22V10H15V8M15,12H21V14H15V12M3,18C3,19.1 3.9,20 5,20H11C12.1,20 13,19.1 13,18V8H3V18M14,5H11L10,4H6L5,5H2V7H14V5Z';
});
