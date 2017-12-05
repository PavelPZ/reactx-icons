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
    exports.GuitarAcoustic = 'M19.59,3H22V5H20.41L16.17,9.24C15.8,8.68 15.32,8.2 14.76,7.83L19.59,3M12,8C14.21,8 16,9.79 16,12C16,13.82 14.77,15.42 13,15.87V16C13,18.76 10.76,21 8,21C5.24,21 3,18.76 3,16C3,13.24 5.24,11 8,11H8.13C8.58,9.24 10.17,8 12,8M12,10.5C11.17,10.5 10.5,11.17 10.5,12C10.5,12.83 11.17,13.5 12,13.5C12.83,13.5 13.5,12.83 13.5,12C13.5,11.17 12.83,10.5 12,10.5M6.94,14.24L6.23,14.94L9.06,17.77L9.77,17.06L6.94,14.24Z';
});
