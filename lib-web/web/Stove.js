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
    var data = { path: 'M6,14H8L11,17H9L6,14M4,4H5V3C5,2.45 5.45,2 6,2H10C10.55,2 11,2.45 11,3V4H13V3C13,2.45 13.45,2 14,2H18C18.55,2 19,2.45 19,3V4H20C21.1,4 22,4.9 22,6V19C22,20.1 21.1,21 20,21V22H17V21H7V22H4V21C2.9,21 2,20.1 2,19V6C2,4.9 2.9,4 4,4M18,7C18.55,7 19,7.45 19,8C19,8.55 18.55,9 18,9C17.45,9 17,8.55 17,8C17,7.45 17.45,7 18,7M14,7C14.55,7 15,7.45 15,8C15,8.55 14.55,9 14,9C13.45,9 13,8.55 13,8C13,7.45 13.45,7 14,7M20,6H4V10H20V6M4,19H20V12H4V19M6,7C6.55,7 7,7.45 7,8C7,8.55 6.55,9 6,9C5.45,9 5,8.55 5,8C5,7.45 5.45,7 6,7M13,14H15L18,17H16L13,14Z' };
    exports.default = data;
});
