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
    exports.Mailbox = 'M20,6H10V12H8V4H14V0H6V6H4C2.9,6 2,6.9 2,8V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V8C22,6.9 21.1,6 20,6Z';
});
