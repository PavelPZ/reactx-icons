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
    exports.HomeOutline = 'M9,19V13H11L13,13H15V19H18V10.91L12,4.91L6,10.91V19H9M12,2.09L21.91,12H20V21H13V15H11V21H4V12H2.09L12,2.09Z';
});
