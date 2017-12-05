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
    exports.LedVariantOn = 'M12,3C9.79,3 8,4.79 8,7V13H6V15H9V21H11V15H13V21H15V15H18V13H16V7C16,4.79 14.21,3 12,3Z';
});
