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
    var data = { path: 'M12,1.5C16.97,1.5 21,5.53 21,10.5C21,13.11 19.89,15.47 18.11,17.11L17.05,16.05C18.55,14.68 19.5,12.7 19.5,10.5C19.5,6.36 16.14,3 12,3C7.86,3 4.5,6.36 4.5,10.5C4.5,12.7 5.45,14.68 6.95,16.05L5.89,17.11C4.11,15.47 3,13.11 3,10.5C3,5.53 7.03,1.5 12,1.5M12,4.5C15.31,4.5 18,7.19 18,10.5C18,12.28 17.22,13.89 16,15L14.92,13.92C15.89,13.1 16.5,11.87 16.5,10.5C16.5,8 14.5,6 12,6C9.5,6 7.5,8 7.5,10.5C7.5,11.87 8.11,13.1 9.08,13.92L8,15C6.78,13.89 6,12.28 6,10.5C6,7.19 8.69,4.5 12,4.5M8.11,17.65L11.29,14.46C11.68,14.07 12.32,14.07 12.71,14.46L15.89,17.65C16.28,18.04 16.28,18.67 15.89,19.06L12.71,22.24C12.32,22.63 11.68,22.63 11.29,22.24L8.11,19.06C7.72,18.67 7.72,18.04 8.11,17.65Z' };
    exports.default = data;
});
