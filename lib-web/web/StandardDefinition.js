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
    var data = { path: 'M13,7H16C17.66,7 19,8.34 19,10V14C19,15.66 17.66,17 16,17H13V7M16,15C16.55,15 17,14.55 17,14V10C17,9.45 16.55,9 16,9H15V15H16M7,7H11V9H7V11H9C10.1,11 11,11.9 11,13V15C11,16.1 10.1,17 9,17H5V15H9V13H7C5.9,13 5,12.1 5,11V9C5,7.9 5.9,7 7,7Z' };
    exports.default = data;
});
