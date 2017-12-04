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
    var data = { path: 'M19,3H15V5H19V9H21V5C21,3.89 20.1,3 19,3M19,19H15V21H19C20.1,21 21,20.1 21,19V15H19M5,15H3V19C3,20.1 3.9,21 5,21H9V19H5M3,5V9H5V5H9V3H5C3.9,3 3,3.9 3,5Z' };
    exports.default = data;
});
