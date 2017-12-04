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
    var data = { path: 'M-0.05,16.79L3.19,12.97L-0.05,9.15L1.5,7.86L4.5,11.41L7.5,7.86L9.05,9.15L5.81,12.97L9.05,16.79L7.5,18.07L4.5,14.5L1.5,18.07L-0.05,16.79M24,17C24,17.55 23.55,18 23,18H20C18.9,18 18,17.1 18,16V14C18,12.9 18.9,12 20,12H22V10H18V8H23C23.55,8 24,8.45 24,9M22,14H20V16H22V14M16,17C16,17.55 15.55,18 15,18H12C10.9,18 10,17.1 10,16V10C10,8.9 10.9,8 12,8H14V5H16V17M14,16V10H12V16H14Z' };
    exports.default = data;
});
