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
    var data = { path: 'M15,10.5C15,11.33 14.33,12 13.5,12C14.34,12 15,12.67 15,13.5V15C15,16.11 14.11,17 13,17H9V15H13V13H11V11H13V9H9V7H13C14.11,7 15,7.89 15,9M19,3H5C3.91,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.11,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z' };
    exports.default = data;
});
