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
    exports.Umbrella = 'M12,2C7.03,2 3,6.03 3,11H11V19C11,19.55 10.55,20 10,20C9.45,20 9,19.55 9,19H7C7,20.66 8.34,22 10,22C11.66,22 13,20.66 13,19V11H21C21,6.03 16.97,2 12,2Z';
});
