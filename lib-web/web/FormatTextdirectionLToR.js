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
    var data = { path: 'M21,18L17,14V17H5V19H17V22M9,10V15H11V4H13V15H15V4H17V2H9C6.79,2 5,3.79 5,6C5,8.21 6.79,10 9,10Z' };
    exports.default = data;
});
