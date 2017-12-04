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
    var data = { path: 'M3,19V17H17L15.26,15.24L16.67,13.83L20.84,18L16.67,22.17L15.26,20.76L17,19H3M17,8V5H15V8H17M17,3C18.11,3 19,3.9 19,5V8C19,9.11 18.11,10 17,10H15V11C15,13.21 13.21,15 11,15H7C4.79,15 3,13.21 3,11V3H17Z' };
    exports.default = data;
});
