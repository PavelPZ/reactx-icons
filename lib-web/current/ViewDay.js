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
    exports.ViewDay = 'M2,3V6H21V3M20,8H3C2.45,8 2,8.45 2,9V15C2,15.55 2.45,16 3,16H20C20.55,16 21,15.55 21,15V9C21,8.45 20.55,8 20,8M2,21H21V18H2V21Z';
});
