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
    var data = { path: 'M18,6H16V15C16,16 15.82,16.64 15,16.95L9.5,19V6C9.5,5.3 9.74,4.1 11,4.24L18,5V3.79L9,2.11C8.64,2.04 8.36,2 8,2C6.72,2 6,2.78 6,4V20.37C6,21.95 7.37,22.26 8,22L17,18.32C18,17.91 18,17 18,16V6Z' };
    exports.default = data;
});
