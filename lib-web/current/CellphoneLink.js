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
    exports.CellphoneLink = 'M22,17H18V10H22M23,8H17C16.45,8 16,8.45 16,9V19C16,19.55 16.45,20 17,20H23C23.55,20 24,19.55 24,19V9C24,8.45 23.55,8 23,8M4,6H22V4H4C2.9,4 2,4.9 2,6V17H0V20H14V17H4V6Z';
});
