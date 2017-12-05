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
    exports.TabletIpad = 'M19,19H4V3H19M11.5,23C10.67,23 10,22.33 10,21.5C10,20.67 10.67,20 11.5,20C12.33,20 13,20.67 13,21.5C13,22.33 12.33,23 11.5,23M18.5,0H4.5C3.12,0 2,1.12 2,2.5V21.5C2,22.88 3.12,24 4.5,24H18.5C19.88,24 21,22.88 21,21.5V2.5C21,1.12 19.88,0 18.5,0Z';
});
