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
    var data = { path: 'M21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3H19C20.1,3 21,3.9 21,5M19,11H17V9H15V11H13V13H15V15H17V13H19V11M10,7H8C6.9,7 6,7.9 6,9V11C6,12.11 6.9,13 8,13H10V15H6V17H10C11.1,17 12,16.1 12,15V9C12,7.89 11.1,7 10,7M8,9H10V11H8V9Z' };
    exports.default = data;
});
