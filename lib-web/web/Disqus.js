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
    var data = { path: 'M12.08,22C9.63,22 7.39,21.11 5.66,19.63L1.41,20.21L3.05,16.15C2.5,14.88 2.16,13.5 2.16,12C2.16,6.5 6.6,2 12.08,2C17.56,2 22,6.5 22,12C22,17.5 17.56,22 12.08,22M17.5,11.97V11.94C17.5,9.06 15.46,7 11.95,7H8.16V17H11.9C15.43,17 17.5,14.86 17.5,11.97M12,14.54H10.89V9.46H12C13.62,9.46 14.7,10.39 14.7,12V12C14.7,13.63 13.62,14.54 12,14.54Z' };
    exports.default = data;
});