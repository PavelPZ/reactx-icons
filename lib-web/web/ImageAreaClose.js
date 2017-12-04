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
    var data = { path: 'M12,23L8,19H16L12,23M20,3C21.1,3 22,3.9 22,5V15C22,16.1 21.1,17 20,17H4C2.9,17 2,16.1 2,15V5C2,3.9 2.9,3 4,3H20M5,14H19L14.5,8L11,12.5L8.5,9.5L5,14Z' };
    exports.default = data;
});
