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
    exports.FlagOutline = 'M14.5,6H20V16H13L12.5,14H7V21H5V4H14L14.5,6M7,6V12H13L13.5,14H18V8H14L13.5,6H7Z';
});
