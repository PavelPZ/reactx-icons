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
    exports.FormatWrapTight = 'M12,7L17,17H7L12,7M3,3H21V5H3V3M3,7H9V9H3V7M21,7V9H15V7H21M3,11H7V13H3V11M21,11V13H17V11H21M3,15H6V17H3V15M21,15V17H18V15H21M3,19H21V21H3V19Z';
});
