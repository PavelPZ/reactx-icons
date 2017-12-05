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
    exports.MicrophoneVariantOff = 'M2,5.27L3.28,4L20,20.72L18.73,22L16,19.26C15.86,21.35 14.12,23 12,23C9.79,23 8,21.21 8,19V18H7L6.16,9.82C5.82,9.47 5.53,9.06 5.33,8.6L2,5.27M9,3C11.21,3 13,4.79 13,7H8.82L6.08,4.26C6.81,3.5 7.85,3 9,3M11.84,9.82L11.82,10L9.82,8H12.87C12.69,8.7 12.33,9.32 11.84,9.82M11,18H10V19C10,20.1 10.9,21 12,21C13.1,21 14,20.1 14,19V17.27L11.35,14.62L11,18M18,10H20L19,11L20,12H18C16.9,12 16,12.9 16,14V14.18L14.3,12.5C14.9,11 16.33,10 18,10M8,12C8,12.55 8.45,13 9,13C9.21,13 9.4,12.94 9.56,12.83L8.17,11.44C8.06,11.6 8,11.79 8,12Z';
});
