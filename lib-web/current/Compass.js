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
    exports.Compass = 'M14.19,14.19L6,18L9.81,9.81L18,6M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,10.9C11.39,10.9 10.9,11.39 10.9,12C10.9,12.61 11.39,13.1 12,13.1C12.61,13.1 13.1,12.61 13.1,12C13.1,11.39 12.61,10.9 12,10.9Z';
});
