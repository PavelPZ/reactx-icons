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
    exports.LanguageCsharp = 'M11.5,15.97L11.91,18.41C11.65,18.55 11.23,18.68 10.67,18.8C10.1,18.93 9.43,19 8.66,19C6.45,18.96 4.79,18.3 3.68,17.04C2.56,15.77 2,14.16 2,12.21C2.05,9.9 2.72,8.13 4,6.89C5.32,5.64 6.96,5 8.94,5C9.69,5 10.34,5.07 10.88,5.19C11.42,5.31 11.82,5.44 12.08,5.59L11.5,8.08L10.44,7.74C10.04,7.64 9.58,7.59 9.05,7.59C7.89,7.58 6.93,7.95 6.18,8.69C5.42,9.42 5.03,10.54 5,12.03C5,13.39 5.37,14.45 6.08,15.23C6.79,16 7.79,16.4 9.07,16.41L10.4,16.29C10.83,16.21 11.19,16.1 11.5,15.97M13.89,19L14.5,15H13L13.34,13H14.84L15.16,11H13.66L14,9H15.5L16.11,5H18.11L17.5,9H18.5L19.11,5H21.11L20.5,9H22L21.66,11H20.16L19.84,13H21.34L21,15H19.5L18.89,19H16.89L17.5,15H16.5L15.89,19H13.89M16.84,13H17.84L18.16,11H17.16L16.84,13Z';
});
