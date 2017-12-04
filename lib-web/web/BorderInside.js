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
    var data = { path: 'M19,17H21V15H19M19,21H21V19H19M13,3H11V11H3V13H11V21H13V13H21V11H13M15,21H17V19H15M19,5H21V3H19M19,9H21V7H19M17,3H15V5H17M5,3H3V5H5M9,3H7V5H9M3,17H5V15H3M5,7H3V9H5M7,21H9V19H7M3,21H5V19H3V21Z' };
    exports.default = data;
});
