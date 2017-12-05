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
    exports.FileMultiple = 'M15,7H20.5L15,1.5V7M8,0H16L22,6V18C22,19.1 21.1,20 20,20H8C6.89,20 6,19.1 6,18V2C6,0.9 6.9,0 8,0M4,4V22H20V24H4C2.9,24 2,23.1 2,22V4H4Z';
});
