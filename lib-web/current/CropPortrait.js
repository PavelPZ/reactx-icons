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
    exports.CropPortrait = 'M17,19H7V5H17M17,3H7C5.9,3 5,3.9 5,5V19C5,20.1 5.9,21 7,21H17C18.1,21 19,20.1 19,19V5C19,3.89 18.1,3 17,3Z';
});
