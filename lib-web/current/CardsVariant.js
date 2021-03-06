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
    exports.CardsVariant = 'M5,2H19C19.55,2 20,2.45 20,3V13C20,13.55 19.55,14 19,14H5C4.45,14 4,13.55 4,13V3C4,2.45 4.45,2 5,2M6,4V12H18V4H6M20,17C20,17.55 19.55,18 19,18H5C4.45,18 4,17.55 4,17V16H20V17M20,21C20,21.55 19.55,22 19,22H5C4.45,22 4,21.55 4,21V20H20V21Z';
});
