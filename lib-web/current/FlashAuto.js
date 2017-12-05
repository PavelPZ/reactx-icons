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
    exports.FlashAuto = 'M16.85,7.65L18,4L19.15,7.65M19,2H17L13.8,11H15.7L16.4,9H19.6L20.3,11H22.2M3,2V14H6V23L13,11H9L13,2H3Z';
});
