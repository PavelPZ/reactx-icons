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
    exports.CameraPartyMode = 'M12,17C10.37,17 8.94,16.21 8,15H12C13.66,15 15,13.66 15,12C15,11.65 14.93,11.31 14.82,11H16.9C16.96,11.32 17,11.66 17,12C17,14.76 14.76,17 12,17M12,7C13.63,7 15.06,7.79 16,9H12C10.34,9 9,10.34 9,12C9,12.35 9.07,12.68 9.18,13H7.1C7.03,12.68 7,12.34 7,12C7,9.24 9.24,7 12,7M20,4H16.83L15,2H9L7.17,4H4C2.9,4 2,4.9 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.89 21.1,4 20,4Z';
});
