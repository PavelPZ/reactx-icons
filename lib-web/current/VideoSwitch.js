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
    exports.VideoSwitch = 'M13,15.5V13H7V15.5L3.5,12L7,8.5V11H13V8.5L16.5,12M18,9.5V6C18,5.45 17.55,5 17,5H3C2.45,5 2,5.45 2,6V18C2,18.55 2.45,19 3,19H17C17.55,19 18,18.55 18,18V14.5L22,18.5V5.5L18,9.5Z';
});
