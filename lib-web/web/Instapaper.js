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
    var data = { path: 'M10,5C10,4.45 9.55,4 9,4H8V2H16V4H15C14.45,4 14,4.45 14,5V19C14,19.55 14.45,20 15,20H16V22H8V20H9C9.55,20 10,19.55 10,19V5Z' };
    exports.default = data;
});
