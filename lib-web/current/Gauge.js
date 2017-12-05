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
    exports.Gauge = 'M17.3,18C19,16.5 20,14.4 20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,14.4 5,16.5 6.7,18C8.2,16.7 10,16 12,16C14,16 15.9,16.7 17.3,18M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M7,9C7.55,9 8,9.45 8,10C8,10.55 7.55,11 7,11C6.45,11 6,10.55 6,10C6,9.45 6.45,9 7,9M10,6C10.55,6 11,6.45 11,7C11,7.55 10.55,8 10,8C9.45,8 9,7.55 9,7C9,6.45 9.45,6 10,6M17,9C17.55,9 18,9.45 18,10C18,10.55 17.55,11 17,11C16.45,11 16,10.55 16,10C16,9.45 16.45,9 17,9M14.4,6.1C14.9,6.3 15.1,6.9 15,7.4L13.6,10.8C13.8,11.1 14,11.5 14,12C14,13.1 13.1,14 12,14C10.9,14 10,13.1 10,12C10,11 10.7,10.1 11.7,10L13.1,6.7C13.3,6.1 13.9,5.9 14.4,6.1Z';
});
