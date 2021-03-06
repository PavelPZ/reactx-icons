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
    exports.RayEndArrow = 'M1,12L5,16V13H17.17C17.58,14.17 18.69,15 20,15C21.66,15 23,13.66 23,12C23,10.34 21.66,9 20,9C18.69,9 17.58,9.83 17.17,11H5V8L1,12Z';
});
