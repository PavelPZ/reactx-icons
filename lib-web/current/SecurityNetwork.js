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
    exports.SecurityNetwork = 'M13,18H14C14.55,18 15,18.45 15,19H22V21H15C15,21.55 14.55,22 14,22H10C9.45,22 9,21.55 9,21H2V19H9C9,18.45 9.45,18 10,18H11V16.34C8.07,15.13 6,12 6,8.67V4.67L12,2L18,4.67V8.67C18,12 15.93,15.13 13,16.34V18M12,4L8,5.69V9H12V4M12,9V15C13.91,14.53 16,12.06 16,10V9H12Z';
});
