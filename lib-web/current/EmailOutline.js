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
    exports.EmailOutline = 'M4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20H4C2.89,20 2,19.1 2,18V6C2,4.89 2.89,4 4,4M12,11L20,6H4L12,11M4,18H20V8.37L12,13.36L4,8.37V18Z';
});
