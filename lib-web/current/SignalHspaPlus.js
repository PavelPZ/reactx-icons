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
    exports.SignalHspaPlus = 'M19,8V11H22V14H19V17H16V14H13V11H16V8H19M5,10.5H8V4.5H11V19.5H8V13.5H5V19.5H2V4.5H5V10.5Z';
});
