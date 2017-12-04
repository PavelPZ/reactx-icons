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
    var data = { path: 'M11.5,0.5C12,0.75 13,2.4 13,3.5C13,4.6 12.33,5 11.5,5C10.67,5 10,4.85 10,3.75C10,2.65 11,2 11.5,0.5M18.5,9C21,9 23,11 23,13.5C23,15.06 22.21,16.43 21,17.24V23H12L3,23V17.24C1.79,16.43 1,15.06 1,13.5C1,11 3,9 5.5,9H10V6H13V9H18.5M12,16C13.38,16 14.5,14.88 14.5,13.5H16C16,14.88 17.12,16 18.5,16C19.88,16 21,14.88 21,13.5C21,12.12 19.88,11 18.5,11H5.5C4.12,11 3,12.12 3,13.5C3,14.88 4.12,16 5.5,16C6.88,16 8,14.88 8,13.5H9.5C9.5,14.88 10.62,16 12,16Z' };
    exports.default = data;
});
