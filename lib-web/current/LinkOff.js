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
    exports.LinkOff = 'M2,5.27L3.28,4L20,20.72L18.73,22L14.73,18H13V16.27L9.73,13H8V11.27L5.5,8.76C4.5,9.5 3.9,10.68 3.9,12C3.9,14.26 5.74,16.1 8,16.1H11V18H8C4.69,18 2,15.31 2,12C2,10.16 2.83,8.5 4.14,7.41L2,5.27M16,6C19.31,6 22,8.69 22,12C22,14.21 20.8,16.15 19,17.19L17.6,15.77C19.07,15.15 20.1,13.7 20.1,12C20.1,9.73 18.26,7.9 16,7.9H13V6H16M8,6H11V7.9H9.72L7.82,6H8M16,11V13H14.82L12.82,11H16Z';
});
