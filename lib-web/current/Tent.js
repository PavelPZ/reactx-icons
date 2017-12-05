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
    exports.Tent = 'M4,6C4,7.19 4.39,8.27 5,9C3.34,9 2,7.66 2,6C2,4.34 3.34,3 5,3C4.39,3.73 4,4.81 4,6M2,21V19H4.76L12,4.78L19.24,19H22V21H2M12,9.19L7,19H17L12,9.19Z';
});
