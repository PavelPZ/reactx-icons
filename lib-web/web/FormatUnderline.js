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
    var data = { path: 'M5,21H19V19H5V21M12,17C15.31,17 18,14.31 18,11V3H15.5V11C15.5,12.93 13.93,14.5 12,14.5C10.07,14.5 8.5,12.93 8.5,11V3H6V11C6,14.31 8.69,17 12,17Z' };
    exports.default = data;
});
