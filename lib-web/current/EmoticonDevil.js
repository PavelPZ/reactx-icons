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
    exports.EmoticonDevil = 'M1.5,2.09C2.4,3 3.87,3.73 5.69,4.25C7.41,2.84 9.61,2 12,2C14.39,2 16.59,2.84 18.31,4.25C20.13,3.73 21.6,3 22.5,2.09C22.47,3.72 21.65,5.21 20.28,6.4C21.37,8 22,9.92 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,9.92 2.63,8 3.72,6.4C2.35,5.21 1.53,3.72 1.5,2.09M20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12M10.5,10C10.5,10.8 9.8,11.5 9,11.5C8.2,11.5 7.5,10.8 7.5,10V8.5L10.5,10M16.5,10C16.5,10.8 15.8,11.5 15,11.5C14.2,11.5 13.5,10.8 13.5,10L16.5,8.5V10M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z';
});
