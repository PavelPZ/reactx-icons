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
    exports.Waves = 'M2,18C4.22,17 6.44,16 8.67,16C10.89,16 13.11,18 15.33,18C17.56,18 19.78,16 22,16V19C19.78,19 17.56,21 15.33,21C13.11,21 10.89,19 8.67,19C6.44,19 4.22,20 2,21V18M2,12C4.22,11 6.44,10 8.67,10C10.89,10 13.11,12 15.33,12C17.56,12 19.78,10 22,10V13C19.78,13 17.56,15 15.33,15C13.11,15 10.89,13 8.67,13C6.44,13 4.22,14 2,15V12M2,6C4.22,5 6.44,4 8.67,4C10.89,4 13.11,6 15.33,6C17.56,6 19.78,4 22,4V7C19.78,7 17.56,9 15.33,9C13.11,9 10.89,7 8.67,7C6.44,7 4.22,8 2,9V6Z';
});
