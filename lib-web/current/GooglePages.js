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
    exports.GooglePages = 'M19,3H13V8L17,7L16,11H21V5C21,3.89 20.1,3 19,3M17,17L13,16V21H19C20.1,21 21,20.1 21,19V13H16M8,13H3V19C3,20.1 3.9,21 5,21H11V16L7,17M3,5V11H8L7,7L11,8V3H5C3.89,3 3,3.89 3,5Z';
});
