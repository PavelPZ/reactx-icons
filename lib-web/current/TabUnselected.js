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
    exports.TabUnselected = 'M15,21H17V19H15M11,21H13V19H11M19,13H21V11H19M19,21C20.1,21 21,20.1 21,19H19M7,5H9V3H7M19,17H21V15H19M19,3H11V9H21V5C21,3.89 20.1,3 19,3M5,21V19H3C3,20.1 3.9,21 5,21M3,17H5V15H3M7,21H9V19H7M3,5H5V3C3.89,3 3,3.89 3,5M3,13H5V11H3M3,9H5V7H3V9Z';
});
