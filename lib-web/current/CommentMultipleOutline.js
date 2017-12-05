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
    exports.CommentMultipleOutline = 'M12,23C11.45,23 11,22.55 11,22V19H7C5.9,19 5,18.1 5,17V7C5,5.89 5.9,5 7,5H21C22.1,5 23,5.9 23,7V17C23,18.1 22.1,19 21,19H16.9L13.2,22.71C13,22.9 12.75,23 12.5,23V23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3C1,1.9 1.9,1 3,1H19V3H3V15Z';
});
