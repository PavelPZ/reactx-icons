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
    exports.ClockIn = 'M2.21,0.79L0.79,2.21L4.8,6.21L3,8H8V3L6.21,4.8M12,8C8.14,8 5,11.13 5,15C5,18.87 8.13,22 12,22C15.86,22 19,18.87 19,15C19,11.13 15.87,8 12,8M12,10.15C14.67,10.15 16.85,12.32 16.85,15C16.85,17.68 14.68,19.85 12,19.85C9.32,19.85 7.15,17.68 7.15,15C7.15,12.32 9.32,10.15 12,10.15M11,12V15.69L14.19,17.53L14.94,16.23L12.5,14.82V12';
});
