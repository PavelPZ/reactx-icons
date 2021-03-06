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
    exports.PotMix = 'M19,19C19,20.1 18.1,21 17,21H7C5.9,21 5,20.1 5,19V13H3V10H14L18,3.07L19.73,4.07L16.31,10H21V13H19V19Z';
});
