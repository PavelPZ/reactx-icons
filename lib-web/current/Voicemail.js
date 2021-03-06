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
    exports.Voicemail = 'M18.5,15C16.57,15 15,13.43 15,11.5C15,9.57 16.57,8 18.5,8C20.43,8 22,9.57 22,11.5C22,13.43 20.43,15 18.5,15M5.5,15C3.57,15 2,13.43 2,11.5C2,9.57 3.57,8 5.5,8C7.43,8 9,9.57 9,11.5C9,13.43 7.43,15 5.5,15M18.5,6C15.46,6 13,8.46 13,11.5C13,12.83 13.47,14.05 14.26,15H9.74C10.53,14.05 11,12.83 11,11.5C11,8.46 8.54,6 5.5,6C2.46,6 0,8.46 0,11.5C0,14.54 2.46,17 5.5,17H18.5C21.54,17 24,14.54 24,11.5C24,8.46 21.54,6 18.5,6Z';
});
