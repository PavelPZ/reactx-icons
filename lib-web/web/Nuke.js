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
    var data = { path: 'M14.04,12H10V11H5.5C3.57,11 2,9.43 2,7.5C2,5.57 3.57,4 5.5,4C6.53,4 7.45,4.44 8.09,5.15C8.5,3.35 10.08,2 12,2C13.92,2 15.5,3.35 15.91,5.15C16.55,4.44 17.47,4 18.5,4C20.43,4 22,5.57 22,7.5C22,9.43 20.43,11 18.5,11H14.04V12M10,16.9V15.76H5V13.76H19V15.76H14.04V16.92L20,19.08C20.58,19.29 21,19.84 21,20.5C21,21.33 20.33,22 19.5,22H4.5C3.67,22 3,21.33 3,20.5C3,19.84 3.42,19.29 4,19.08L10,16.9Z' };
    exports.default = data;
});
