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
    exports.BookmarkPlusOutline = 'M17,18V5H7V18L12,15.82L17,18M17,3C18.1,3 19,3.9 19,5V21L12,18L5,21V5C5,3.89 5.9,3 7,3H17M11,7H13V9H15V11H13V13H11V11H9V9H11V7Z';
});
