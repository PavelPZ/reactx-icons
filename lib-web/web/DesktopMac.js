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
    var data = { path: 'M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16C1,17.1 1.9,18 3,18H10L8,21V22H16V21L14,18H21C22.1,18 23,17.1 23,16V4C23,2.89 22.1,2 21,2Z' };
    exports.default = data;
});
