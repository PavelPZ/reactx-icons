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
    exports.Dns = 'M7,9C5.9,9 5,8.1 5,7C5,5.9 5.9,5 7,5C8.1,5 9,5.9 9,7C9,8.1 8.1,9 7,9M20,3H4C3.45,3 3,3.45 3,4V10C3,10.55 3.45,11 4,11H20C20.55,11 21,10.55 21,10V4C21,3.45 20.55,3 20,3M7,19C5.9,19 5,18.1 5,17C5,15.9 5.9,15 7,15C8.1,15 9,15.9 9,17C9,18.1 8.1,19 7,19M20,13H4C3.45,13 3,13.45 3,14V20C3,20.55 3.45,21 4,21H20C20.55,21 21,20.55 21,20V14C21,13.45 20.55,13 20,13Z';
});
