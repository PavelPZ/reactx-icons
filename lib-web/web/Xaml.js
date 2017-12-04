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
    var data = { path: 'M18.93,12L15.46,18H8.54L5.07,12L8.54,6H15.46L18.93,12M23.77,12L19.73,19L18,18L21.46,12L18,6L19.73,5L23.77,12M0.23,12L4.27,5L6,6L2.54,12L6,18L4.27,19L0.23,12Z' };
    exports.default = data;
});
