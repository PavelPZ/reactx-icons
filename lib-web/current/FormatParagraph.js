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
    exports.FormatParagraph = 'M13,4C15.21,4 17,5.79 17,8C17,10.21 15.21,12 13,12H11V18H9V4H13M13,10C14.1,10 15,9.1 15,8C15,6.9 14.1,6 13,6H11V10H13Z';
});
