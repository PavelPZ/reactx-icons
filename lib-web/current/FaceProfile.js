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
    exports.FaceProfile = 'M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C9,20 6.39,18.34 5,15.89L6.75,14V13C6.75,12.31 7.31,11.75 8,11.75C8.69,11.75 9.25,12.31 9.25,13V14H12M16,11.75C15.31,11.75 14.75,12.31 14.75,13C14.75,13.69 15.31,14.25 16,14.25C16.69,14.25 17.25,13.69 17.25,13C17.25,12.31 16.69,11.75 16,11.75Z';
});
