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
    exports.RunFast = 'M17.12,10L16.04,8.18L15.31,11.05L17.8,15.59V22H16V17L13.67,13.89L12.07,18.4L7.25,20.5L6.2,19L10.39,16.53L12.91,6.67L10.8,7.33V11H9V5.8L14.42,4.11L14.92,4.03C15.54,4.03 16.08,4.37 16.38,4.87L18.38,8.2H22V10H17.12M17,3.8C16,3.8 15.2,3 15.2,2C15.2,1 16,0.2 17,0.2C18,0.2 18.8,1 18.8,2C18.8,3 18,3.8 17,3.8M7,9V11H4C3.45,11 3,10.55 3,10C3,9.45 3.45,9 4,9H7M9.25,13L8.75,15H5C4.45,15 4,14.55 4,14C4,13.45 4.45,13 5,13H9.25M7,5V7H3C2.45,7 2,6.55 2,6C2,5.45 2.45,5 3,5H7Z';
});
