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
    exports.CurrencyTry = 'M19,12C19,16.97 14.97,21 10,21H8V12.77L5,13.87V11.74L8,10.64V8.87L5,9.96V7.84L8,6.74V3H10V6L15,4.2V6.32L10,8.14V9.92L15,8.1V10.23L10,12.05V19C13.87,19 17,15.87 17,12H19Z';
});
