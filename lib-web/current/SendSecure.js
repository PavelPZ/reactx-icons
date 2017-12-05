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
    exports.SendSecure = 'M23,18V17.5C23,16.12 21.88,15 20.5,15C19.12,15 18,16.12 18,17.5V18C17.45,18 17,18.45 17,19V23C17,23.55 17.45,24 18,24H23C23.55,24 24,23.55 24,23V19C24,18.45 23.55,18 23,18M22,18H19V17.5C19,16.67 19.67,16 20.5,16C21.33,16 22,16.67 22,17.5V18M23,12L2,21V14L17,12L2,10V3L23,12Z';
});
