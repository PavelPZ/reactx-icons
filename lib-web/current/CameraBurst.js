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
    exports.CameraBurst = 'M1,5H3V19H1V5M5,5H7V19H5V5M22,5H10C9.45,5 9,5.45 9,6V18C9,18.55 9.45,19 10,19H22C22.55,19 23,18.55 23,18V6C23,5.45 22.55,5 22,5M11,17L13.5,13.85L15.29,16L17.79,12.78L21,17H11Z';
});
