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
    var data = { path: 'M18,8C19.1,8 20,8.9 20,10V20C20,21.1 19.1,22 18,22H6C4.89,22 4,21.1 4,20V10C4,8.9 4.9,8 6,8H15V6C15,4.34 13.66,3 12,3C10.34,3 9,4.34 9,6H7C7,3.24 9.24,1 12,1C14.76,1 17,3.24 17,6V8H18M12,17C13.1,17 14,16.1 14,15C14,13.9 13.1,13 12,13C10.9,13 10,13.9 10,15C10,16.1 10.9,17 12,17Z' };
    exports.default = data;
});
