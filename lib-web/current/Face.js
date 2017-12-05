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
    exports.Face = 'M9,11.75C8.31,11.75 7.75,12.31 7.75,13C7.75,13.69 8.31,14.25 9,14.25C9.69,14.25 10.25,13.69 10.25,13C10.25,12.31 9.69,11.75 9,11.75M15,11.75C14.31,11.75 13.75,12.31 13.75,13C13.75,13.69 14.31,14.25 15,14.25C15.69,14.25 16.25,13.69 16.25,13C16.25,12.31 15.69,11.75 15,11.75M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,20C7.59,20 4,16.41 4,12C4,11.71 4,11.42 4.05,11.14C6.41,10.09 8.28,8.16 9.26,5.77C11.07,8.33 14.05,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20Z';
});
