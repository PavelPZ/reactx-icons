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
    var data = { path: 'M18.65,2.85L19.26,6.71L22.77,8.5L21,12L22.78,15.5L19.24,17.29L18.63,21.15L14.74,20.54L11.97,23.3L9.19,20.5L5.33,21.14L4.71,17.25L1.22,15.47L3,11.97L1.23,8.5L4.74,6.69L5.35,2.86L9.22,3.5L12,0.69L14.77,3.46L18.65,2.85M9.5,7C8.67,7 8,7.67 8,8.5C8,9.33 8.67,10 9.5,10C10.33,10 11,9.33 11,8.5C11,7.67 10.33,7 9.5,7M14.5,14C13.67,14 13,14.67 13,15.5C13,16.33 13.67,17 14.5,17C15.33,17 16,16.33 16,15.5C16,14.67 15.33,14 14.5,14M8.41,17L17,8.41L15.59,7L7,15.59L8.41,17Z' };
    exports.default = data;
});
