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
    var data = { path: 'M12,6C9.79,6 8,7.79 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10C16,7.79 14.21,6 12,6Z' };
    exports.default = data;
});
