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
    exports.Roomba = 'M12,2C14.65,2 17.19,3.06 19.07,4.93L17.65,6.35C16.15,4.85 14.12,4 12,4C9.88,4 7.84,4.84 6.35,6.35L4.93,4.93C6.81,3.06 9.35,2 12,2M3.66,6.5L5.11,7.94C4.39,9.17 4,10.57 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,10.57 19.61,9.17 18.88,7.94L20.34,6.5C21.42,8.12 22,10.04 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,10.04 2.58,8.12 3.66,6.5M12,6C15.31,6 18,8.69 18,12C18,13.59 17.37,15.12 16.24,16.24L14.83,14.83C14.08,15.58 13.06,16 12,16C10.94,16 9.92,15.58 9.17,14.83L7.76,16.24C6.63,15.12 6,13.59 6,12C6,8.69 8.69,6 12,6M12,8C11.45,8 11,8.45 11,9C11,9.55 11.45,10 12,10C12.55,10 13,9.55 13,9C13,8.45 12.55,8 12,8Z';
});
