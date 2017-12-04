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
    var data = { path: 'M19.5,15.5C19.5,15.78 19.28,16 19,16C18.72,16 18.5,15.78 18.5,15.5V8.5C18.5,6.57 16.43,5 14.5,5H6C3.79,5 2,6.79 2,9V19H6V15H11V19H15V14.5C15,14.22 15.22,14 15.5,14C15.78,14 16,14.22 16,14.5V16C16,17.66 17.34,19 19,19C20.66,19 22,17.66 22,16V14H19.5V15.5Z' };
    exports.default = data;
});