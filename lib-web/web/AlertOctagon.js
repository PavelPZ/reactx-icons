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
    var data = { path: 'M13,13H11V7H13M12,17.3C11.28,17.3 10.7,16.72 10.7,16C10.7,15.28 11.28,14.7 12,14.7C12.72,14.7 13.3,15.28 13.3,16C13.3,16.72 12.72,17.3 12,17.3M15.73,3H8.27L3,8.27V15.73L8.27,21H15.73L21,15.73V8.27L15.73,3Z' };
    exports.default = data;
});
