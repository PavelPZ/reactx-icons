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
    var data = { path: 'M17,7C19.76,7 22,9.24 22,12C22,14.76 19.76,17 17,17C14.24,17 12,14.76 12,12C12,9.24 14.24,7 17,7M4,14C2.9,14 2,13.1 2,12C2,10.9 2.9,10 4,10H10V14H4Z' };
    exports.default = data;
});
