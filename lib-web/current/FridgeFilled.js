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
    exports.FridgeFilled = 'M7,2H17C18.1,2 19,2.9 19,4V9H5V4C5,2.9 5.9,2 7,2M19,19C19,20.1 18.1,21 17,21V22H15V21H9V22H7V21C5.9,21 5,20.1 5,19V10H19V19M8,5V7H10V5H8M8,12V15H10V12H8Z';
});
