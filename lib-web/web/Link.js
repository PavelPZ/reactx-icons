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
    var data = { path: 'M16,6H13V7.9H16C18.26,7.9 20.1,9.73 20.1,12C20.1,14.26 18.26,16.1 16,16.1H13V18H16C19.31,18 22,15.31 22,12C22,8.68 19.31,6 16,6M3.9,12C3.9,9.73 5.74,7.9 8,7.9H11V6H8C4.69,6 2,8.69 2,12C2,15.31 4.69,18 8,18H11V16.1H8C5.74,16.1 3.9,14.26 3.9,12M8,13H16V11H8V13Z' };
    exports.default = data;
});
