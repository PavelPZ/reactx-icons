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
    exports.Flask = 'M6,22C4.34,22 3,20.66 3,19C3,18.4 3.18,17.84 3.5,17.37L9,7.81V6C8.45,6 8,5.55 8,5V4C8,2.9 8.9,2 10,2H14C15.1,2 16,2.9 16,4V5C16,5.55 15.55,6 15,6V7.81L20.5,17.37C20.82,17.84 21,18.4 21,19C21,20.66 19.66,22 18,22H6M5,19C5,19.55 5.45,20 6,20H18C18.55,20 19,19.55 19,19C19,18.79 18.93,18.59 18.82,18.43L16.53,14.47L14,17L8.93,11.93L5.18,18.43C5.07,18.59 5,18.79 5,19M13,10C12.45,10 12,10.45 12,11C12,11.55 12.45,12 13,12C13.55,12 14,11.55 14,11C14,10.45 13.55,10 13,10Z';
});
