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
    exports.CashUsd = 'M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.89 21.1,4 20,4M11,17H13V16H14C14.55,16 15,15.55 15,15V12C15,11.45 14.55,11 14,11H11V10H15V8H13V7H11V8H10C9.45,8 9,8.45 9,9V12C9,12.55 9.45,13 10,13H13V14H9V16H11V17Z';
});
