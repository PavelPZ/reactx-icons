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
    exports.Contacts = 'M20,0H4V2H20V0M4,24H20V22H4V24M20,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.9 21.1,4 20,4M12,6.75C13.24,6.75 14.25,7.76 14.25,9C14.25,10.24 13.24,11.25 12,11.25C10.76,11.25 9.75,10.24 9.75,9C9.75,7.76 10.76,6.75 12,6.75M17,17H7V15.5C7,13.83 10.33,13 12,13C13.67,13 17,13.83 17,15.5V17Z';
});