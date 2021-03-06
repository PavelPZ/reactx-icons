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
    exports.Panorama = 'M8.5,12.5L11,15.5L14.5,11L19,17H5M23,18V6C23,4.9 22.1,4 21,4H3C1.9,4 1,4.9 1,6V18C1,19.1 1.9,20 3,20H21C22.1,20 23,19.1 23,18Z';
});
