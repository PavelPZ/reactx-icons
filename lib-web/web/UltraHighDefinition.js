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
    var data = { path: 'M9,7H11V11H13V7H15V17H13V13H11V17H9V7M17,7H20C21.66,7 23,8.34 23,10V14C23,15.66 21.66,17 20,17H17V7M20,15C20.55,15 21,14.55 21,14V10C21,9.45 20.55,9 20,9H19V15H20M7,14C7,15.66 5.66,17 4,17C2.34,17 1,15.66 1,14V7H3V14C3,14.55 3.45,15 4,15C4.55,15 5,14.55 5,14V7H7V14Z' };
    exports.default = data;
});
