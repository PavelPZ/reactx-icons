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
    var data = { path: 'M16.5,16H8C6.34,16 5,14.66 5,13C5,11.34 6.34,10 8,10C8.05,10 8.09,10 8.14,10C8.58,8.28 10.13,7 12,7C14.21,7 16,8.79 16,11H16.5C17.88,11 19,12.12 19,13.5C19,14.88 17.88,16 16.5,16M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z' };
    exports.default = data;
});
