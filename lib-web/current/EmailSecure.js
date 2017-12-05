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
    exports.EmailSecure = 'M20.5,0C21.88,0 23,1.12 23,2.5V3C23.55,3 24,3.45 24,4V8C24,8.55 23.55,9 23,9H18C17.45,9 17,8.55 17,8V4C17,3.45 17.45,3 18,3V2.5C18,1.12 19.12,0 20.5,0M12,11L4,6V8L12,13L16.18,10.39C16.69,10.77 17.32,11 18,11H22V18C22,19.1 21.1,20 20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H15V8C15,8.36 15.06,8.7 15.18,9L12,11M20.5,1C19.67,1 19,1.67 19,2.5V3H22V2.5C22,1.67 21.33,1 20.5,1Z';
});
