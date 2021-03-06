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
    exports.MusicCircle = 'M16,9V7H12V12.5C11.58,12.19 11.07,12 10.5,12C9.12,12 8,13.12 8,14.5C8,15.88 9.12,17 10.5,17C11.88,17 13,15.88 13,14.5V9H16M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2Z';
});
