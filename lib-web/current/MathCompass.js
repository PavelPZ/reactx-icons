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
    exports.MathCompass = 'M13,4.2V3C13,2.4 12.6,2 12,2V4.2C9.8,4.6 9,5.7 9,7C9,7.8 9.3,8.5 9.8,9L4,19.9V22L6.2,20L11.6,10C11.7,10 11.9,10 12,10C13.7,10 15,8.7 15,7C15,5.7 14.2,4.6 13,4.2M12.9,7.5C12.7,7.8 12.4,8 12,8C11.4,8 11,7.6 11,7C11,6.8 11.1,6.7 11.1,6.5C11.3,6.2 11.6,6 12,6C12.6,6 13,6.4 13,7C13,7.2 12.9,7.3 12.9,7.5M20,19.9V22H20L17.8,20L13.4,11.8C14.1,11.6 14.7,11.3 15.2,10.9L20,19.9Z';
});
