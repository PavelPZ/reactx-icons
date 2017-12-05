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
    exports.RelativeScale = 'M20,18H4V6H20M20,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.89 21.1,4 20,4M12,10H10V12H12M8,10H6V12H8M16,14H14V16H16M16,10H14V12H16V10Z';
});
