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
    var data = { path: 'M8,9H11V4H13V9H16L20,17H4L8,9M14,18C14,19.1 13.1,20 12,20C10.9,20 10,19.1 10,18H14Z' };
    exports.default = data;
});
