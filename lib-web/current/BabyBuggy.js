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
    exports.BabyBuggy = 'M13,2V10H21C21,5.58 17.42,2 13,2M19.32,15.89C20.37,14.54 21,12.84 21,11H6.44L5.5,9H2V11H4.22C4.22,11 6.11,15.07 6.34,15.42C5.24,16 4.5,17.17 4.5,18.5C4.5,20.43 6.07,22 8,22C9.76,22 11.22,20.7 11.46,19H13.54C13.78,20.7 15.24,22 17,22C18.93,22 20.5,20.43 20.5,18.5C20.5,17.46 20.04,16.53 19.32,15.89M8,20C7.17,20 6.5,19.33 6.5,18.5C6.5,17.67 7.17,17 8,17C8.83,17 9.5,17.67 9.5,18.5C9.5,19.33 8.83,20 8,20M17,20C16.17,20 15.5,19.33 15.5,18.5C15.5,17.67 16.17,17 17,17C17.83,17 18.5,17.67 18.5,18.5C18.5,19.33 17.83,20 17,20Z';
});
