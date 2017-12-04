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
    var data = { path: 'M16,15H8V5H16M16,1H8C6.89,1 6,1.89 6,3V17C6,18.1 6.9,19 8,19H16C17.1,19 18,18.1 18,17V3C18,1.89 17.1,1 16,1M8,23H16V21H8V23Z' };
    exports.default = data;
});