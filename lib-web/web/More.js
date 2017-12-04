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
    var data = { path: 'M19,13.5C18.17,13.5 17.5,12.83 17.5,12C17.5,11.17 18.17,10.5 19,10.5C19.83,10.5 20.5,11.17 20.5,12C20.5,12.83 19.83,13.5 19,13.5M14,13.5C13.17,13.5 12.5,12.83 12.5,12C12.5,11.17 13.17,10.5 14,10.5C14.83,10.5 15.5,11.17 15.5,12C15.5,12.83 14.83,13.5 14,13.5M9,13.5C8.17,13.5 7.5,12.83 7.5,12C7.5,11.17 8.17,10.5 9,10.5C9.83,10.5 10.5,11.17 10.5,12C10.5,12.83 9.83,13.5 9,13.5M22,3H7C6.31,3 5.77,3.35 5.41,3.88L0,12L5.41,20.11C5.77,20.64 6.37,21 7.06,21H22C23.1,21 24,20.1 24,19V5C24,3.89 23.1,3 22,3Z' };
    exports.default = data;
});
