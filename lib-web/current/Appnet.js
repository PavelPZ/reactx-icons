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
    exports.Appnet = 'M14.47,9.14C15.07,7.69 16.18,4.28 16.35,3.68C16.5,3.09 16.95,3 17.2,3H19.25C19.59,3 19.78,3.26 19.7,3.68C17.55,11.27 16.09,13.5 16.09,14C16.09,15.28 17.46,17.67 18.74,17.67C19.5,17.67 19.34,16.56 20.19,16.56H21.81C22.07,16.56 22.32,16.82 22.32,17.25C22.32,17.67 21.85,21 18.61,21C15.36,21 14.15,17.08 14.15,17.08C13.73,17.93 11.23,21 8.16,21C2.7,21 1.68,15.2 1.68,11.79C1.68,8.37 3.3,3 7.91,3C12.5,3 14.47,9.14 14.47,9.14M4.5,11.53C4.5,13.5 4.41,17.59 8,17.67C10.04,17.76 11.91,15.2 12.81,13.15C11.57,8.89 10.72,6.33 8,6.33C4.32,6.41 4.5,11.53 4.5,11.53Z';
});
