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
    var data = { path: 'M18,4V3C18,2.45 17.55,2 17,2H5C4.45,2 4,2.45 4,3V7C4,7.55 4.45,8 5,8H17C17.55,8 18,7.55 18,7V6H19V10H9V21C9,21.55 9.45,22 10,22H12C12.55,22 13,21.55 13,21V12H21V4H18Z' };
    exports.default = data;
});
