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
    var data = { path: 'M4,5V7H6V19H8V7H14V16C14,17.66 15.34,19 17,19C18.66,19 20,17.66 20,16H18C18,16.55 17.55,17 17,17C16.45,17 16,16.55 16,16V7H18V5' };
    exports.default = data;
});
