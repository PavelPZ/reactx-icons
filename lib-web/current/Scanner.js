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
    exports.Scanner = 'M19.8,10.7L4.2,5L3.5,6.9L17.6,12H5C3.9,12 3,12.9 3,14V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V12.5C21,11.7 20.5,10.9 19.8,10.7M7,17H5V15H7V17M19,17H9V15H19V17Z';
});
