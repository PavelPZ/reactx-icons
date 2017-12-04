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
    var data = { path: 'M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H9V18H5V8H19V18H15V20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z' };
    exports.default = data;
});
