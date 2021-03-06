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
    exports.MusicNoteBluetoothOff = 'M10,3V8.68L13,11.68V6H17V3H10M3.28,4.5L2,5.77L8.26,12.03C5.89,12.15 4,14.1 4,16.5C4,19 6,21 8.5,21C10.9,21 12.85,19.11 12.97,16.74L17.68,21.45L18.96,20.18L13,14.22L10,11.22L3.28,4.5M20,7V10.79L17.71,8.5L17,9.21L19.79,12L17,14.79L17.71,15.5L20,13.21V17H20.5L23.35,14.15L21.21,12L23.36,9.85L20.5,7H20M21,8.91L21.94,9.85L21,10.79V8.91M21,13.21L21.94,14.15L21,15.09V13.21Z';
});
