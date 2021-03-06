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
    exports.GooglePhotos = 'M17,12V7L12,2V7H7L2,12H7V17L12,22V17H17L22,12H17M12.88,12.88L12,15.53L11.12,12.88L8.47,12L11.12,11.12L12,8.46L12.88,11.11L15.53,12L12.88,12.88Z';
});
