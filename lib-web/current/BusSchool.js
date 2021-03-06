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
    exports.BusSchool = 'M3,6C1.89,6 1,6.89 1,8V15H3C3,16.66 4.34,18 6,18C7.66,18 9,16.66 9,15H15C15,16.66 16.34,18 18,18C19.66,18 21,16.66 21,15H23V12C23,10.89 22.11,10 21,10H19V8C19,6.89 18.11,6 17,6H3M13.5,7.5H17.5V10H13.5V7.5M2.5,7.5H6.5V10H2.5V7.5M8,7.5H12V10H8V7.5M6,13.5C6.83,13.5 7.5,14.17 7.5,15C7.5,15.83 6.83,16.5 6,16.5C5.17,16.5 4.5,15.83 4.5,15C4.5,14.17 5.17,13.5 6,13.5M18,13.5C18.83,13.5 19.5,14.17 19.5,15C19.5,15.83 18.83,16.5 18,16.5C17.17,16.5 16.5,15.83 16.5,15C16.5,14.17 17.17,13.5 18,13.5Z';
});
