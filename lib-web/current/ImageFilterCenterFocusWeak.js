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
    exports.ImageFilterCenterFocusWeak = 'M5,15H3V19C3,20.1 3.9,21 5,21H9V19H5M5,5H9V3H5C3.9,3 3,3.9 3,5V9H5M19,3H15V5H19V9H21V5C21,3.9 20.1,3 19,3M19,19H15V21H19C20.1,21 21,20.1 21,19V15H19M12,8C9.79,8 8,9.79 8,12C8,14.21 9.79,16 12,16C14.21,16 16,14.21 16,12C16,9.79 14.21,8 12,8M12,14C10.9,14 10,13.1 10,12C10,10.9 10.9,10 12,10C13.1,10 14,10.9 14,12C14,13.1 13.1,14 12,14Z';
});
