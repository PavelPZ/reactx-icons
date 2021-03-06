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
    exports.TableEdit = 'M21.7,13.35L20.7,14.35L18.65,12.3L19.65,11.3C19.86,11.08 20.21,11.08 20.42,11.3L21.7,12.58C21.92,12.79 21.92,13.14 21.7,13.35M12,18.94L18.07,12.88L20.12,14.93L14.06,21H12V18.94M4,2H18C19.1,2 20,2.9 20,4V8.17L16.17,12H12V16.17L10.17,18H4C2.9,18 2,17.1 2,16V4C2,2.9 2.9,2 4,2M4,6V10H10V6H4M12,6V10H18V6H12M4,12V16H10V12H4Z';
});
