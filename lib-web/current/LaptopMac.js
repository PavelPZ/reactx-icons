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
    exports.LaptopMac = 'M12,19C11.45,19 11,18.55 11,18C11,17.45 11.45,17 12,17C12.55,17 13,17.45 13,18C13,18.55 12.55,19 12,19M4,5H20V16H4M20,18C21.1,18 22,17.1 22,16V5C22,3.89 21.1,3 20,3H4C2.89,3 2,3.89 2,5V16C2,17.1 2.9,18 4,18H0C0,19.1 0.9,20 2,20H22C23.1,20 24,19.1 24,18H20Z';
});
