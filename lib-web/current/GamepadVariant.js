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
    exports.GamepadVariant = 'M7,6H17C20.31,6 23,8.69 23,12C23,15.31 20.31,18 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18C3.69,18 1,15.31 1,12C1,8.69 3.69,6 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12C14.67,12 14,12.67 14,13.5C14,14.33 14.67,15 15.5,15C16.33,15 17,14.33 17,13.5C17,12.67 16.33,12 15.5,12M18.5,9C17.67,9 17,9.67 17,10.5C17,11.33 17.67,12 18.5,12C19.33,12 20,11.33 20,10.5C20,9.67 19.33,9 18.5,9Z';
});
