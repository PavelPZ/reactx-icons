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
    exports.Headset = 'M12,1C7,1 3,5 3,10V17C3,18.66 4.34,20 6,20H9V12H5V10C5,6.13 8.13,3 12,3C15.87,3 19,6.13 19,10V12H15V20H19V21H12V23H18C19.66,23 21,21.66 21,20V10C21,5 16.97,1 12,1Z';
});
