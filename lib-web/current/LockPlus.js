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
    exports.LockPlus = 'M18,8H17V6C17,3.24 14.76,1 12,1C9.24,1 7,3.24 7,6V8H6C4.9,8 4,8.9 4,10V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V10C20,8.9 19.1,8 18,8M8.9,6C8.9,4.29 10.29,2.9 12,2.9C13.71,2.9 15.1,4.29 15.1,6V8H8.9V6M16,16H13V19H11V16H8V14H11V11H13V14H16V16Z';
});
