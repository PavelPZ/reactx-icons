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
    exports.MapMarkerPlus = 'M9,11.5C10.38,11.5 11.5,10.38 11.5,9C11.5,7.62 10.38,6.5 9,6.5C7.62,6.5 6.5,7.62 6.5,9C6.5,10.38 7.62,11.5 9,11.5M9,2C12.86,2 16,5.13 16,9C16,14.25 9,22 9,22C9,22 2,14.25 2,9C2,5.13 5.13,2 9,2M15,17H18V14H20V17H23V19H20V22H18V19H15V17Z';
});
