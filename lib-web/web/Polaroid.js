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
    var data = { path: 'M6,3H18C19.1,3 20,3.9 20,5V19C20,20.1 19.1,21 18,21H6C4.9,21 4,20.1 4,19V5C4,3.9 4.9,3 6,3M6,5V17H18V5H6Z' };
    exports.default = data;
});
