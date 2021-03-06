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
    exports.FridgeFilledBottom = 'M8,8V6H10V8H8M7,2H17C18.1,2 19,2.9 19,4V19C19,20.1 18.1,21 17,21V22H15V21H9V22H7V21C5.9,21 5,20.1 5,19V4C5,2.9 5.9,2 7,2M7,4V9H17V4H7M8,12V15H10V12H8Z';
});
