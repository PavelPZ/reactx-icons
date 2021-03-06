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
    exports.Autorenew = 'M12,6V9L16,5L12,1V4C7.58,4 4,7.58 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12C6,8.69 8.69,6 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12C18,15.31 15.31,18 12,18V15L8,19L12,23V20C16.42,20 20,16.42 20,12C20,10.43 19.54,8.97 18.76,7.74Z';
});
