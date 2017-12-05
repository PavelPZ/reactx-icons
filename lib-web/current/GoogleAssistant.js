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
    exports.GoogleAssistant = 'M8,3C11.31,3 14,5.69 14,9C14,12.31 11.31,15 8,15C4.69,15 2,12.31 2,9C2,5.69 4.69,3 8,3M21,8C21.55,8 22,8.45 22,9C22,9.55 21.55,10 21,10C20.45,10 20,9.55 20,9C20,8.45 20.45,8 21,8M17.5,10C18.88,10 20,11.12 20,12.5C20,13.88 18.88,15 17.5,15C16.12,15 15,13.88 15,12.5C15,11.12 16.12,10 17.5,10M17.5,16C19.16,16 20.5,17.34 20.5,19C20.5,20.66 19.16,22 17.5,22C15.84,22 14.5,20.66 14.5,19C14.5,17.34 15.84,16 17.5,16Z';
});
