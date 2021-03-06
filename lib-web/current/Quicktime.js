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
    exports.Quicktime = 'M12,3C16.97,3 21,7.03 21,12C21,13.76 20.5,15.4 19.62,16.79L21,18.17V20C21,20.55 20.55,21 20,21H18.18L16.79,19.62C15.41,20.5 13.76,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C12.65,17 13.26,16.88 13.83,16.65L10.95,13.77C10.17,13 10.17,11.72 10.95,10.94C11.73,10.16 13,10.16 13.78,10.94L16.66,13.82C16.88,13.26 17,12.64 17,12C17,9.24 14.76,7 12,7Z';
});
