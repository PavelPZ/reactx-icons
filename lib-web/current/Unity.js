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
    exports.Unity = 'M9.11,17H6.5L1.59,12L6.5,7H9.11L10.42,4.74L17.21,3L19.08,9.74L17.77,12L19.08,14.26L17.21,21L10.42,19.26L9.11,17M9.25,16.75L14.38,18.13L11.42,13H5.5L9.25,16.75M16.12,17.13L17.5,12L16.12,6.87L13.15,12L16.12,17.13M9.25,7.25L5.5,11H11.42L14.38,5.87L9.25,7.25Z';
});
