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
    var data = { path: 'M12,17L15,20V18H21V16H15V14L12,17M9,5C10.66,5 12,6.34 12,8V11C12,12.66 10.66,14 9,14C7.34,14 6,12.66 6,11V8C6,6.34 7.34,5 9,5M9,7C8.45,7 8,7.45 8,8V11C8,11.55 8.45,12 9,12C9.55,12 10,11.55 10,11V8C10,7.45 9.55,7 9,7M4,12C4.55,12 5,12.45 5,13C5,13.55 4.55,14 4,14C3.45,14 3,13.55 3,13C3,12.45 3.45,12 4,12Z' };
    exports.default = data;
});
