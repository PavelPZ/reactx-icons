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
    var data = { path: 'M8,2H16C17.1,2 18,2.9 18,4V20C18,21.1 17.1,22 16,22H8C6.9,22 6,21.1 6,20V4C6,2.9 6.9,2 8,2M8,4V20H16V4H8M10,13H12V17H10V13M10,6H14V7.5H10V6M10,9H14V10.5H10V9Z' };
    exports.default = data;
});
