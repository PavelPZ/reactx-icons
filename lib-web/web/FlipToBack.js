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
    var data = { path: 'M15,17H17V15H15M15,5H17V3H15M5,7H3V19C3,20.1 3.9,21 5,21H17V19H5M19,17C20.1,17 21,16.1 21,15H19M19,9H21V7H19M19,13H21V11H19M9,17V15H7C7,16.1 7.9,17 9,17M13,3H11V5H13M19,3V5H21C21,3.89 20.1,3 19,3M13,15H11V17H13M9,3C7.89,3 7,3.89 7,5H9M9,11H7V13H9M9,7H7V9H9V7Z' };
    exports.default = data;
});
