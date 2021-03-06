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
    exports.AccountSwitch = 'M16,9C18.33,9 23,10.17 23,12.5V15H17V12.5C17,11 16.19,9.89 15.04,9.05L16,9M8,9C10.33,9 15,10.17 15,12.5V15H1V12.5C1,10.17 5.67,9 8,9M8,7C6.34,7 5,5.66 5,4C5,2.34 6.34,1 8,1C9.66,1 11,2.34 11,4C11,5.66 9.66,7 8,7M16,7C14.34,7 13,5.66 13,4C13,2.34 14.34,1 16,1C17.66,1 19,2.34 19,4C19,5.66 17.66,7 16,7M9,16.75V19H15V16.75L18.25,20L15,23.25V21H9V23.25L5.75,20L9,16.75Z';
});
