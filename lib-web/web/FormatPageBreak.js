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
    var data = { path: 'M7,11H9V13H7V11M11,11H13V13H11V11M19,17H15V11.17L21,17.17V22H3V13H5V20H19V17M3,2H21V11H19V4H5V11H3V2Z' };
    exports.default = data;
});
