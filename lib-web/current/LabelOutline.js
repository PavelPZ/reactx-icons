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
    exports.LabelOutline = 'M16,17H5V7H16L19.55,12M17.63,5.84C17.27,5.33 16.67,5 16,5H5C3.9,5 3,5.9 3,7V17C3,18.1 3.9,19 5,19H16C16.67,19 17.27,18.66 17.63,18.15L22,12L17.63,5.84Z';
});
