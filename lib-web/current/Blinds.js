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
    exports.Blinds = 'M3,2H21C21.55,2 22,2.45 22,3V5C22,5.55 21.55,6 21,6H20V13C20,13.55 19.55,14 19,14H13V16.17C14.17,16.58 15,17.69 15,19C15,20.66 13.66,22 12,22C10.34,22 9,20.66 9,19C9,17.69 9.83,16.58 11,16.17V14H5C4.45,14 4,13.55 4,13V6H3C2.45,6 2,5.55 2,5V3C2,2.45 2.45,2 3,2M12,18C11.45,18 11,18.45 11,19C11,19.55 11.45,20 12,20C12.55,20 13,19.55 13,19C13,18.45 12.55,18 12,18Z';
});
