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
    var data = { path: 'M14,4V8H6V4H14M15,13C15.55,13 16,12.55 16,12C16,11.45 15.55,11 15,11C14.45,11 14,11.45 14,12C14,12.55 14.45,13 15,13M13,19V15H7V19H13M15,9C16.66,9 18,10.34 18,12V17H15V21H5V17H2V12C2,10.34 3.34,9 5,9H15M22,7V12H20V7H22M22,14V16H20V14H22Z' };
    exports.default = data;
});