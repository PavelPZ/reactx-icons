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
    exports.Openid = 'M14,2L11,3.5V19.94C7,19.5 4,17.46 4,15C4,12.75 6.5,10.85 10,10.22V8.19C4.86,8.88 1,11.66 1,15C1,18.56 5.36,21.5 11,21.94C11.03,21.94 11.06,21.94 11.09,21.94L14,20.5V2M15,8.19V10.22C16.15,10.43 17.18,10.77 18.06,11.22L16.5,12L23,13.5L22.5,9L20.5,10C19,9.12 17.12,8.47 15,8.19Z';
});
