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
    var data = { path: 'M7,2C5.9,2 5,2.9 5,4V19C5,20.1 5.9,21 7,21V22H9V21H15V22H17V21C18.1,21 19,20.1 19,19V4C19,2.9 18.1,2 17,2H7M8,6H10V8H8V6M7,11H17V19H7V11M8,12V15H10V12H8Z' };
    exports.default = data;
});
