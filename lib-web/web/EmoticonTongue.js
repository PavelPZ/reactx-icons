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
    var data = { path: 'M9,8C10.1,8 11,8.9 11,10C11,10.36 10.9,10.71 10.73,11C10.39,10.4 9.74,10 9,10C8.26,10 7.61,10.4 7.27,11C7.1,10.71 7,10.36 7,10C7,8.9 7.9,8 9,8M15,8C16.1,8 17,8.9 17,10C17,10.36 16.9,10.71 16.73,11C16.39,10.4 15.74,10 15,10C14.26,10 13.61,10.4 13.27,11C13.1,10.71 13,10.36 13,10C13,8.9 13.9,8 15,8M12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.47,22 2,17.5 2,12C2,6.48 6.48,2 12,2M9,13H15C15.55,13 16,13.45 16,14C16,14.55 15.55,15 15,15C15,17 14.1,18 13,18C11.9,18 11,17 11,15H9C8.45,15 8,14.55 8,14C8,13.45 8.45,13 9,13Z' };
    exports.default = data;
});
