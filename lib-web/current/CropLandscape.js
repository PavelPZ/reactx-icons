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
    exports.CropLandscape = 'M19,17H5V7H19M19,5H5C3.9,5 3,5.9 3,7V17C3,18.1 3.9,19 5,19H19C20.1,19 21,18.1 21,17V7C21,5.89 20.1,5 19,5Z';
});
