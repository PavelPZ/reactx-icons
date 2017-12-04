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
    var data = { path: 'M21,17V5H3V17H21M21,3C22.1,3 23,3.9 23,5V17C23,18.1 22.1,19 21,19H16V21H8V19H3C1.9,19 1,18.1 1,17V5C1,3.9 1.9,3 3,3H21M5,7H11V11H5V7M5,13H11V15H5V13M13,7H19V9H13V7M13,11H19V15H13V11Z' };
    exports.default = data;
});
