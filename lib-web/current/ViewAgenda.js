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
    exports.ViewAgenda = 'M20,3H3C2.45,3 2,3.45 2,4V10C2,10.55 2.45,11 3,11H20C20.55,11 21,10.55 21,10V4C21,3.45 20.55,3 20,3M20,13H3C2.45,13 2,13.45 2,14V20C2,20.55 2.45,21 3,21H20C20.55,21 21,20.55 21,20V14C21,13.45 20.55,13 20,13Z';
});
