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
    exports.CommentCheck = 'M9,22C8.45,22 8,21.55 8,21V18H4C2.9,18 2,17.1 2,16V4C2,2.89 2.9,2 4,2H20C21.1,2 22,2.9 22,4V16C22,17.1 21.1,18 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,15L18,7L16.59,5.58L10,12.17L7.41,9.59L6,11L10,15Z';
});
