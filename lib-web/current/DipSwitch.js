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
    exports.DipSwitch = 'M3,4H7C7.55,4 8,4.45 8,5V19C8,19.55 7.55,20 7,20H3C2.45,20 2,19.55 2,19V5C2,4.45 2.45,4 3,4M10,4H14C14.55,4 15,4.45 15,5V19C15,19.55 14.55,20 14,20H10C9.45,20 9,19.55 9,19V5C9,4.45 9.45,4 10,4M17,4H21C21.55,4 22,4.45 22,5V19C22,19.55 21.55,20 21,20H17C16.45,20 16,19.55 16,19V5C16,4.45 16.45,4 17,4M4,18H6V13H4V18M11,11H13V6H11V11M18,18H20V13H18V18Z';
});
