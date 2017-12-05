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
    exports.RecordRec = 'M12.5,5C8.36,5 5,8.36 5,12.5C5,16.64 8.36,20 12.5,20C16.64,20 20,16.64 20,12.5C20,8.36 16.64,5 12.5,5M7,10H9C9.55,10 10,10.45 10,11V12C10,12.5 9.62,12.9 9.14,12.97L10.31,15H9.15L8,13V15H7M12,10H14V11H12V12H14V13H12V14H14V15H12C11.45,15 11,14.55 11,14V11C11,10.45 11.45,10 12,10M16,10H18V11H16V14H18V15H16C15.45,15 15,14.55 15,14V11C15,10.45 15.45,10 16,10M8,11V12H9V11';
});
