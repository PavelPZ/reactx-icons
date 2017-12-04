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
    var data = { path: 'M7,17L10.2,10.2L17,7L13.8,13.8L7,17M12,11.1C11.5,11.1 11.1,11.5 11.1,12C11.1,12.5 11.5,12.9 12,12.9C12.5,12.9 12.9,12.5 12.9,12C12.9,11.5 12.5,11.1 12,11.1M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z' };
    exports.default = data;
});
