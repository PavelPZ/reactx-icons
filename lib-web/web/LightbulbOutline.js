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
    var data = { path: 'M12,2C15.87,2 19,5.13 19,9C19,11.38 17.81,13.47 16,14.74V17C16,17.55 15.55,18 15,18H9C8.45,18 8,17.55 8,17V14.74C6.19,13.47 5,11.38 5,9C5,5.13 8.13,2 12,2M9,21V20H15V21C15,21.55 14.55,22 14,22H10C9.45,22 9,21.55 9,21M12,4C9.24,4 7,6.24 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9C17,6.24 14.76,4 12,4Z' };
    exports.default = data;
});
