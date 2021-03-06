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
    exports.Flashlight = 'M9,10L6,5H18L15,10H9M18,4H6V2H18V4M9,22V11H15V22H9M12,13C11.45,13 11,13.45 11,14C11,14.55 11.45,15 12,15C12.55,15 13,14.55 13,14C13,13.45 12.55,13 12,13Z';
});
