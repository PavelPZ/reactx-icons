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
    var data = { path: 'M21,8V7L18,9L15,7V8L18,10M22,3H2C0.9,3 0,3.9 0,5V19C0,20.1 0.9,21 2,21H22C23.1,21 24,20.1 24,19V5C24,3.9 23.1,3 22,3M8,6C9.66,6 11,7.34 11,9C11,10.66 9.66,12 8,12C6.34,12 5,10.66 5,9C5,7.34 6.34,6 8,6M14,18H2V17C2,15 6,13.9 8,13.9C10,13.9 14,15 14,17M22,12H14V6H22' };
    exports.default = data;
});
