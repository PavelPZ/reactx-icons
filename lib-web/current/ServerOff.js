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
    exports.ServerOff = 'M4,1H20C20.55,1 21,1.45 21,2V6C21,6.55 20.55,7 20,7H8.82L6.82,5H7V3H5V3.18L3.21,1.39C3.39,1.15 3.68,1 4,1M22,22.72L20.73,24L19.73,23H4C3.45,23 3,22.55 3,22V18C3,17.45 3.45,17 4,17H13.73L11.73,15H4C3.45,15 3,14.55 3,14V10C3,9.45 3.45,9 4,9H5.73L3.68,6.95C3.38,6.85 3.15,6.62 3.05,6.32L1,4.27L2.28,3L22,22.72M20,9C20.55,9 21,9.45 21,10V14C21,14.55 20.55,15 20,15H16.82L10.82,9H20M20,17C20.55,17 21,17.45 21,18V19.18L18.82,17H20M9,5H10V3H9V5M9,13H9.73L9,12.27V13M9,21H10V19H9V21M5,11V13H7V11H5M5,19V21H7V19H5Z';
});
