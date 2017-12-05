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
    exports.ArrowExpandDown = 'M22,4V2H2V4H11V18.17L5.5,12.67L4.08,14.08L12,22L19.92,14.08L18.5,12.67L13,18.17V4H22Z';
});
