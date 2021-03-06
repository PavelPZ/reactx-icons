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
    exports.Airplay = 'M6,22H18L12,16M21,3H3C1.9,3 1,3.9 1,5V17C1,18.1 1.9,19 3,19H7V17H3V5H21V17H17V19H21C22.1,19 23,18.1 23,17V5C23,3.9 22.1,3 21,3Z';
});
