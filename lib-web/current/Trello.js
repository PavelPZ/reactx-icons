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
    exports.Trello = 'M4,3H20C20.55,3 21,3.45 21,4V20C21,20.55 20.55,21 20,21H4C3.45,21 3,20.55 3,20V4C3,3.45 3.45,3 4,3M5.5,5C5.22,5 5,5.22 5,5.5V17.5C5,17.78 5.22,18 5.5,18H10.5C10.78,18 11,17.78 11,17.5V5.5C11,5.22 10.78,5 10.5,5H5.5M13.5,5C13.22,5 13,5.22 13,5.5V11.5C13,11.78 13.22,12 13.5,12H18.5C18.78,12 19,11.78 19,11.5V5.5C19,5.22 18.78,5 18.5,5H13.5Z';
});
