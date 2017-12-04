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
    var data = { path: 'M3,3H21V7H3V3M4,8H20V21H4V8M9.5,11C9.22,11 9,11.22 9,11.5V13H15V11.5C15,11.22 14.78,11 14.5,11H9.5Z' };
    exports.default = data;
});
