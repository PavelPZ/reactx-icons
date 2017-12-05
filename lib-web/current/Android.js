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
    exports.Android = 'M15,5H14V4H15M10,5H9V4H10M15.53,2.16L16.84,0.85C17.03,0.66 17.03,0.34 16.84,0.14C16.64,-0.05 16.32,-0.05 16.13,0.14L14.65,1.62C13.85,1.23 12.95,1 12,1C11.04,1 10.14,1.23 9.34,1.63L7.85,0.14C7.66,-0.05 7.34,-0.05 7.15,0.14C6.95,0.34 6.95,0.66 7.15,0.85L8.46,2.16C6.97,3.26 6,5 6,7H18C18,5 17,3.25 15.53,2.16M20.5,8C19.67,8 19,8.67 19,9.5V16.5C19,17.33 19.67,18 20.5,18C21.33,18 22,17.33 22,16.5V9.5C22,8.67 21.33,8 20.5,8M3.5,8C2.67,8 2,8.67 2,9.5V16.5C2,17.33 2.67,18 3.5,18C4.33,18 5,17.33 5,16.5V9.5C5,8.67 4.33,8 3.5,8M6,18C6,18.55 6.45,19 7,19H8V22.5C8,23.33 8.67,24 9.5,24C10.33,24 11,23.33 11,22.5V19H13V22.5C13,23.33 13.67,24 14.5,24C15.33,24 16,23.33 16,22.5V19H17C17.55,19 18,18.55 18,18V8H6V18Z';
});
