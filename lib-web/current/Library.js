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
    exports.Library = 'M12,8C13.66,8 15,6.66 15,5C15,3.34 13.66,2 12,2C10.34,2 9,3.34 9,5C9,6.66 10.34,8 12,8M12,11.54C9.64,9.35 6.5,8 3,8V19C6.5,19 9.64,20.35 12,22.54C14.36,20.35 17.5,19 21,19V8C17.5,8 14.36,9.35 12,11.54Z';
});
