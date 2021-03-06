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
    exports.Clipboard = 'M9,4C9,2.34 10.34,1 12,1C13.66,1 15,2.34 15,4H19C20.1,4 21,4.9 21,6V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V6C3,4.9 3.9,4 5,4H9M12,3C11.45,3 11,3.45 11,4C11,4.55 11.45,5 12,5C12.55,5 13,4.55 13,4C13,3.45 12.55,3 12,3Z';
});
