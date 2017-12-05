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
    exports.ClosedCaption = 'M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14C18,14.55 17.55,15 17,15H14C13.45,15 13,14.55 13,14V10C13,9.45 13.45,9 14,9H17C17.55,9 18,9.45 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14C11,14.55 10.55,15 10,15H7C6.45,15 6,14.55 6,14V10C6,9.45 6.45,9 7,9H10C10.55,9 11,9.45 11,10M19,4H5C3.89,4 3,4.89 3,6V18C3,19.1 3.9,20 5,20H19C20.1,20 21,19.1 21,18V6C21,4.89 20.1,4 19,4Z';
});
