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
    var data = { path: 'M19,7H11V14H3V5H1V20H3V17H21V20H23V11C23,8.79 21.21,7 19,7M7,13C8.66,13 10,11.66 10,10C10,8.34 8.66,7 7,7C5.34,7 4,8.34 4,10C4,11.66 5.34,13 7,13Z' };
    exports.default = data;
});
