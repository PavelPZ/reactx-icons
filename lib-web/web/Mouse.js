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
    var data = { path: 'M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z' };
    exports.default = data;
});
