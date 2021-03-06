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
    exports.CellphoneSettings = 'M16,16H8V4H16M16,0H8C6.9,0 6,0.9 6,2V18C6,19.1 6.9,20 8,20H16C17.1,20 18,19.1 18,18V2C18,0.9 17.1,0 16,0M15,24H17V22H15M11,24H13V22H11M7,24H9V22H7V24Z';
});
