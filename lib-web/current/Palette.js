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
    exports.Palette = 'M17.5,12C16.67,12 16,11.33 16,10.5C16,9.67 16.67,9 17.5,9C18.33,9 19,9.67 19,10.5C19,11.33 18.33,12 17.5,12M14.5,8C13.67,8 13,7.33 13,6.5C13,5.67 13.67,5 14.5,5C15.33,5 16,5.67 16,6.5C16,7.33 15.33,8 14.5,8M9.5,8C8.67,8 8,7.33 8,6.5C8,5.67 8.67,5 9.5,5C10.33,5 11,5.67 11,6.5C11,7.33 10.33,8 9.5,8M6.5,12C5.67,12 5,11.33 5,10.5C5,9.67 5.67,9 6.5,9C7.33,9 8,9.67 8,10.5C8,11.33 7.33,12 6.5,12M12,3C7.03,3 3,7.03 3,12C3,16.97 7.03,21 12,21C12.83,21 13.5,20.33 13.5,19.5C13.5,19.11 13.35,18.76 13.11,18.5C12.88,18.23 12.73,17.88 12.73,17.5C12.73,16.67 13.4,16 14.23,16H16C18.76,16 21,13.76 21,11C21,6.58 16.97,3 12,3Z';
});
