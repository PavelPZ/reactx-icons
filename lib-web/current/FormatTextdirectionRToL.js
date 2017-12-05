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
    exports.FormatTextdirectionRToL = 'M8,17V14L4,18L8,22V19H20V17M10,10V15H12V4H14V15H16V4H18V2H10C7.79,2 6,3.79 6,6C6,8.21 7.79,10 10,10Z';
});
