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
    exports.SurroundSound = 'M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4M7.76,16.24L6.35,17.65C4.78,16.1 4,14.05 4,12C4,9.95 4.78,7.9 6.34,6.34L7.75,7.75C6.59,8.93 6,10.46 6,12C6,13.54 6.59,15.07 7.76,16.24M12,16C9.79,16 8,14.21 8,12C8,9.79 9.79,8 12,8C14.21,8 16,9.79 16,12C16,14.21 14.21,16 12,16M17.66,17.66L16.25,16.25C17.41,15.07 18,13.54 18,12C18,10.46 17.41,8.93 16.24,7.76L17.65,6.35C19.22,7.9 20,9.95 20,12C20,14.05 19.22,16.1 17.66,17.66M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10Z';
});
