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
    var data = { path: 'M4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4M4,6V18H20V6H4M5.5,7.5H11V9.17C10.15,9.47 9.47,10.15 9.17,11H5.5V7.5M18.5,7.5V11H14.83C14.53,10.15 13.85,9.47 13,9.17V7.5H18.5M18.5,16.5H13V14.83C13.85,14.53 14.53,13.85 14.83,13H18.5V16.5M5.5,16.5V13H9.17C9.47,13.85 10.15,14.53 11,14.83V16.5H5.5M12,10.5C12.83,10.5 13.5,11.17 13.5,12C13.5,12.83 12.83,13.5 12,13.5C11.17,13.5 10.5,12.83 10.5,12C10.5,11.17 11.17,10.5 12,10.5Z' };
    exports.default = data;
});
