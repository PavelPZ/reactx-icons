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
    var data = { path: 'M9,14C11.67,14 17,15.33 17,18V20H1V18C1,15.33 6.33,14 9,14M9,12C6.79,12 5,10.21 5,8C5,5.79 6.79,4 9,4C11.21,4 13,5.79 13,8C13,10.21 11.21,12 9,12M19,13.28L16.54,14.77L17.2,11.96L15,10.08L17.89,9.83L19,7.19L20.13,9.83L23,10.08L20.82,11.96L21.5,14.77L19,13.28Z' };
    exports.default = data;
});
