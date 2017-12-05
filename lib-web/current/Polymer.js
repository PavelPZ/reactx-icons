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
    exports.Polymer = 'M19,4H15L7.1,16.63L4.5,12L9,4H5L0.5,12L5,20H9L16.89,7.37L19.5,12L15,20H19L23.5,12L19,4Z';
});
