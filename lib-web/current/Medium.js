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
    exports.Medium = 'M21.93,6.62L15.89,16.47L11.57,9.43L15,3.84C15.17,3.58 15.5,3.47 15.78,3.55L21.93,6.62M22,19.78C22,20.35 21.5,20.57 20.89,20.26L16.18,17.91L22,8.41V19.78M9,19.94C9,20.5 8.57,20.76 8.07,20.5L2.55,17.76C2.25,17.6 2,17.2 2,16.86V4.14C2,3.69 2.33,3.5 2.74,3.68L8.7,6.66L9,7.12V19.94M15.29,17.46L10,14.81V8.81L15.29,17.46Z';
});
