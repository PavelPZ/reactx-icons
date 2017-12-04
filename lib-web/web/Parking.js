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
    var data = { path: 'M13.2,11H10V7H13.2C14.3,7 15.2,7.9 15.2,9C15.2,10.1 14.3,11 13.2,11M13,3H6V21H10V15H13C16.31,15 19,12.31 19,9C19,5.68 16.31,3 13,3Z' };
    exports.default = data;
});
