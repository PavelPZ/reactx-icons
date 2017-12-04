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
    var data = { path: 'M2,5V19H22V5H2M6,17H4V7H6C8.86,7.09 11.1,9.33 11,12C11.1,14.67 8.86,16.91 6,17M20,17H18C15.14,16.91 12.9,14.67 13,12C12.9,9.33 15.14,7.09 18,7H20V17Z' };
    exports.default = data;
});
