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
    var data = { path: 'M17.45,15.18L22,6.81V19L22,21H2V3H4V15.54L4,19H4.31L6,19H6.57L10.96,11.44L17.45,15.18M22,3L21.97,3.45L17,11L10,6L6,12V3H22Z' };
    exports.default = data;
});
