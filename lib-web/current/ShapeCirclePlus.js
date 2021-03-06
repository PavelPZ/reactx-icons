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
    exports.ShapeCirclePlus = 'M11,19C14.31,19 17,16.31 17,13H19C19,17.42 15.42,21 11,21C6.58,21 3,17.42 3,13C3,8.58 6.58,5 11,5V7C7.69,7 5,9.69 5,13C5,16.31 7.69,19 11,19M19,5H22V7H19V10H17V7H14V5H17V2H19V5Z';
});
