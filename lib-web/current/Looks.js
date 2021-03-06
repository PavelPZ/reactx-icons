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
    exports.Looks = 'M12,6C5.92,6 1,10.92 1,17H3C3,12.04 7.04,8 12,8C16.96,8 21,12.04 21,17H23C23,10.92 18.08,6 12,6M12,10C8.14,10 5,13.14 5,17H7C7,14.24 9.24,12 12,12C14.76,12 17,14.24 17,17H19C19,13.14 15.86,10 12,10Z';
});
