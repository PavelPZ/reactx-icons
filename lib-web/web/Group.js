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
    var data = { path: 'M8,8V12H13V8H8M1,1H5V2H19V1H23V5H22V19H23V23H19V22H5V23H1V19H2V5H1V1M5,19V20H19V19H20V5H19V4H5V5H4V19H5M6,6H15V10H18V18H8V14H6V6M15,14H10V16H16V12H15V14Z' };
    exports.default = data;
});
