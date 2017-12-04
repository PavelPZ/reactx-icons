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
    var data = { path: 'M21,3V15.5C21,17.43 19.43,19 17.5,19C15.57,19 14,17.43 14,15.5C14,13.57 15.57,12 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L9,8.6V17.5C9,19.43 7.43,21 5.5,21C3.57,21 2,19.43 2,17.5C2,15.57 3.57,14 5.5,14C6.04,14 6.55,14.12 7,14.34V6L21,3Z' };
    exports.default = data;
});
