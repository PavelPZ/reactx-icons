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
    exports.Thermometer = 'M17,17C17,19.76 14.76,22 12,22C9.24,22 7,19.76 7,17C7,15.36 7.79,13.91 9,13V5C9,3.34 10.34,2 12,2C13.66,2 15,3.34 15,5V13C16.21,13.91 17,15.36 17,17M11,8V14.17C9.83,14.58 9,15.69 9,17C9,18.66 10.34,20 12,20C13.66,20 15,18.66 15,17C15,15.69 14.17,14.58 13,14.17V8H11Z';
});
