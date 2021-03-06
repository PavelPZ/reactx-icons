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
    exports.CameraRearVariant = 'M6,0H18C19.1,0 20,0.9 20,2V22C20,23.1 19.1,24 18,24H6C4.9,24 4,23.1 4,22V2C4,0.9 4.9,0 6,0M12,2C10.9,2 10,2.9 10,4C10,5.1 10.9,6 12,6C13.1,6 14,5.1 14,4C14,2.9 13.1,2 12,2M13,18H9V20H13V22L16,19L13,16V18Z';
});
