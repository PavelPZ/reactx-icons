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
    var data = { path: 'M5,9.5L7.5,14H2.5L5,9.5M3,4H7V8H3V4M5,20C6.1,20 7,19.1 7,18C7,16.9 6.1,16 5,16C3.9,16 3,16.9 3,18C3,19.1 3.9,20 5,20M9,5V7H21V5H9M9,19H21V17H9V19M9,13H21V11H9V13Z' };
    exports.default = data;
});
