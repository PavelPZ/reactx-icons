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
    exports.EmoticonNeutral = 'M8.5,11C7.67,11 7,10.33 7,9.5C7,8.67 7.67,8 8.5,8C9.33,8 10,8.67 10,9.5C10,10.33 9.33,11 8.5,11M15.5,11C14.67,11 14,10.33 14,9.5C14,8.67 14.67,8 15.5,8C16.33,8 17,8.67 17,9.5C17,10.33 16.33,11 15.5,11M12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.47,22 2,17.5 2,12C2,6.48 6.48,2 12,2M9,14H15C15.55,14 16,14.45 16,15C16,15.55 15.55,16 15,16H9C8.45,16 8,15.55 8,15C8,14.45 8.45,14 9,14Z';
});
