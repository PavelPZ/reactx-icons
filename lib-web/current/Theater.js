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
    exports.Theater = 'M4,15H6C7.1,15 8,15.9 8,17V19H9V17C9,15.9 9.9,15 11,15H13C14.1,15 15,15.9 15,17V19H16V17C16,15.9 16.9,15 18,15H20C21.1,15 22,15.9 22,17V19H23V22H1V19H2V17C2,15.9 2.9,15 4,15M11,7L15,10L11,13V7M4,2H20C21.1,2 22,2.9 22,4V13.54C21.41,13.19 20.73,13 20,13V4H4V13C3.27,13 2.59,13.19 2,13.54V4C2,2.9 2.9,2 4,2Z';
});
