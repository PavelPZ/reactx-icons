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
    exports.Satellite = 'M5,18L8.5,13.5L11,16.5L14.5,12L19,18M5,12V10C7.76,10 10,7.76 10,5H12C12,8.87 8.87,12 5,12M5,5H8C8,6.66 6.66,8 5,8M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z';
});
