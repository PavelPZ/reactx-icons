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
    exports.TabletAndroid = 'M19.25,19H4.75V3H19.25M14,22H10V21H14M18,0H6C4.34,0 3,1.34 3,3V21C3,22.66 4.34,24 6,24H18C19.66,24 21,22.66 21,21V3C21,1.34 19.66,0 18,0Z';
});
