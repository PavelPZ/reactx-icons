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
    exports.VectorTriangle = 'M9,3V9H9.73L5.79,16H2V22H8V20H16V22H22V16H18.21L14.27,9H15V3M11,5H13V7H11M12,9.04L16,16.15V18H8V16.15M4,18H6V20H4M18,18H20V20H18';
});
