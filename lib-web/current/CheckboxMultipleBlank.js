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
    exports.CheckboxMultipleBlank = 'M22,16C22,17.1 21.1,18 20,18H8C6.89,18 6,17.1 6,16V4C6,2.89 6.89,2 8,2H20C21.1,2 22,2.9 22,4V16M16,20V22H4C2.9,22 2,21.1 2,20V7H4V20H16Z';
});
