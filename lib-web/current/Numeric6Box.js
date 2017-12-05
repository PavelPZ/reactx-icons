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
    exports.Numeric6Box = 'M15,9H11V11H13C14.1,11 15,11.9 15,13V15C15,16.11 14.1,17 13,17H11C9.9,17 9,16.1 9,15V9C9,7.89 9.9,7 11,7H15M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M11,15H13V13H11V15Z';
});
