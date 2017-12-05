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
    exports.Houzz = 'M12,24V16L5.1,20V12H5.1V4L12,0V8L5.1,12L12,16V8L18.9,4V12H18.9V20L12,24Z';
});
