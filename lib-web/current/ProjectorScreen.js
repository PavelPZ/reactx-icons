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
    exports.ProjectorScreen = 'M4,2C3.45,2 3,2.45 3,3V4C3,4.55 3.45,5 4,5H5V14H11V16.59L6.79,20.79L8.21,22.21L11,19.41V22H13V19.41L15.79,22.21L17.21,20.79L13,16.59V14H19V5H20C20.55,5 21,4.55 21,4V3C21,2.45 20.55,2 20,2H4Z';
});
