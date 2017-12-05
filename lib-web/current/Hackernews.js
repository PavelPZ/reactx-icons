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
    exports.Hackernews = 'M2,2H22V22H2V2M11.25,17.5H12.75V13.06L16,7H14.5L12,11.66L9.5,7H8L11.25,13.06V17.5Z';
});
