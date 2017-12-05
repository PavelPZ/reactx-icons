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
    exports.Human = 'M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z';
});
