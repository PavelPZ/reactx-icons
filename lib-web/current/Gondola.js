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
    exports.Gondola = 'M18,10H13V7.59L22.12,6.07L21.88,4.59L16.41,5.5C16.46,5.35 16.5,5.18 16.5,5C16.5,4.17 15.83,3.5 15,3.5C14.17,3.5 13.5,4.17 13.5,5C13.5,5.35 13.63,5.68 13.84,5.93L13,6.07V5H11V6.41L10.41,6.5C10.46,6.35 10.5,6.18 10.5,6C10.5,5.17 9.83,4.5 9,4.5C8.17,4.5 7.5,5.17 7.5,6C7.5,6.36 7.63,6.68 7.83,6.93L1.88,7.93L2.12,9.41L11,7.93V10H6C4.89,10 4,10.9 4,12V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18V12C20,10.9 19.1,10 18,10M6,12H8.25V16H6V12M9.75,16V12H14.25V16H9.75M18,16H15.75V12H18V16Z';
});
