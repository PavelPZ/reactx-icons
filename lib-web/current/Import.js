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
    exports.Import = 'M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6C4.9,4 4,4.9 4,6V9H6V6H18V18H6V15H4V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18Z';
});
