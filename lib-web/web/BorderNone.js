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
    var data = { path: 'M15,5H17V3H15M15,13H17V11H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M11,9H13V7H11M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M11,13H13V11H11M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M11,17H13V15H11M7,21H9V19H7M7,13H9V11H7M7,5H9V3H7V5Z' };
    exports.default = data;
});
