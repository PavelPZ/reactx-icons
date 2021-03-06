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
    exports.Logout = 'M17,17.25V14H10V10H17V6.75L22.25,12L17,17.25M13,2C14.1,2 15,2.9 15,4V8H13V4H4V20H13V16H15V20C15,21.1 14.1,22 13,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2H13Z';
});
