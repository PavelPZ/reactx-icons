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
    var data = { path: 'M22,14H20V16H14V13H16V11H14V6C14,4.9 13.1,4 12,4H4V2H2V10H4V8H10V11H8V13H10V18C10,19.1 10.9,20 12,20H20V22H22' };
    exports.default = data;
});
