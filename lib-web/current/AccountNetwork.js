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
    exports.AccountNetwork = 'M13,16V18H14C14.55,18 15,18.45 15,19H22V21H15C15,21.55 14.55,22 14,22H10C9.45,22 9,21.55 9,21H2V19H9C9,18.45 9.45,18 10,18H11V16H5V14.5C5,12.57 8.13,11 12,11C15.87,11 19,12.57 19,14.5V16H13M12,2C13.93,2 15.5,3.57 15.5,5.5C15.5,7.43 13.93,9 12,9C10.07,9 8.5,7.43 8.5,5.5C8.5,3.57 10.07,2 12,2Z';
});
