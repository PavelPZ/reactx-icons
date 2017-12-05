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
    exports.MusicNoteOff = 'M12,3V8.68L15,11.68V6H19V3H12M5.28,4.5L4,5.77L10.26,12.03C7.89,12.15 6,14.1 6,16.5C6,19 8,21 10.5,21C12.9,21 14.85,19.11 14.97,16.74L19.68,21.45L20.96,20.18L15,14.22L12,11.22L5.28,4.5Z';
});
