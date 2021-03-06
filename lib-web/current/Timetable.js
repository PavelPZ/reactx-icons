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
    exports.Timetable = 'M14,12H15.5V14.82L17.94,16.23L17.19,17.53L14,15.69V12M4,2H18C19.1,2 20,2.9 20,4V10.1C21.24,11.36 22,13.09 22,15C22,18.87 18.87,22 15,22C13.09,22 11.36,21.24 10.1,20H4C2.9,20 2,19.1 2,18V4C2,2.9 2.9,2 4,2M4,15V18H8.67C8.24,17.09 8,16.07 8,15H4M4,8H10V5H4V8M18,8V5H12V8H18M4,13H8.29C8.63,11.85 9.26,10.82 10.1,10H4V13M15,10.15C12.32,10.15 10.15,12.32 10.15,15C10.15,17.68 12.32,19.85 15,19.85C17.68,19.85 19.85,17.68 19.85,15C19.85,12.32 17.68,10.15 15,10.15Z';
});
