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
    exports.Numeric6BoxOutline = 'M11,13H13V15H11M11,17H13C14.1,17 15,16.1 15,15V13C15,11.89 14.1,11 13,11H11V9H15V7H11C9.9,7 9,7.9 9,9V15C9,16.11 9.9,17 11,17M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z';
});
