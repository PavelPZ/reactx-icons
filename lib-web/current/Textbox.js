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
    exports.Textbox = 'M17,7H22V17H17V19C17,19.55 17.45,20 18,20H20V22H17.5C16.95,22 16,21.55 16,21C16,21.55 15.05,22 14.5,22H12V20H14C14.55,20 15,19.55 15,19V5C15,4.45 14.55,4 14,4H12V2H14.5C15.05,2 16,2.45 16,3C16,2.45 16.95,2 17.5,2H20V4H18C17.45,4 17,4.45 17,5V7M2,7H13V9H4V15H13V17H2V7M20,15V9H17V15H20Z';
});
