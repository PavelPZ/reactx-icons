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
    exports.MoveResizeVariant = 'M1.88,0.46L0.46,1.88L5.59,7H2V9H9V2H7V5.59M11,7V9H21V15H23V9C23,7.9 22.1,7 21,7M7,11V21C7,22.1 7.9,23 9,23H15V21H9V11M15.88,14.46L14.46,15.88L19.6,21H17V23H23V17H21V19.59';
});
