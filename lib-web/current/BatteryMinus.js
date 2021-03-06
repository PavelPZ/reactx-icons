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
    exports.BatteryMinus = 'M16.67,4C17.4,4 18,4.6 18,5.33V20.67C18,21.4 17.4,22 16.67,22H7.33C6.6,22 6,21.4 6,20.67V5.33C6,4.6 6.6,4 7.33,4H9V2H15V4H16.67M8,12V14H16V12';
});
