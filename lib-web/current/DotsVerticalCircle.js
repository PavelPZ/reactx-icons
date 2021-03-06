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
    exports.DotsVerticalCircle = 'M2,12C2,6.48 6.48,2 12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12M10.5,12C10.5,12.83 11.17,13.5 12,13.5C12.83,13.5 13.5,12.83 13.5,12C13.5,11.17 12.83,10.5 12,10.5C11.17,10.5 10.5,11.17 10.5,12M10.5,17.5C10.5,18.33 11.17,19 12,19C12.83,19 13.5,18.33 13.5,17.5C13.5,16.67 12.83,16 12,16C11.17,16 10.5,16.67 10.5,17.5M10.5,6.5C10.5,7.33 11.17,8 12,8C12.83,8 13.5,7.33 13.5,6.5C13.5,5.67 12.83,5 12,5C11.17,5 10.5,5.67 10.5,6.5Z';
});
