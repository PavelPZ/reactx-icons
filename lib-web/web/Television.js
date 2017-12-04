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
    var data = { path: 'M20,17H4V5H20M20,3H4C2.89,3 2,3.89 2,5V17C2,18.1 2.9,19 4,19H8V21H16V19H20C21.1,19 22,18.1 22,17V5C22,3.89 21.1,3 20,3Z' };
    exports.default = data;
});
