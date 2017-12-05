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
    exports.Itunes = 'M7.85,17.07C7.03,17.17 3.5,17.67 4.06,20.26C4.69,23.3 9.87,22.59 9.83,19C9.81,16.57 9.83,9.2 9.83,9.2C9.83,9.2 9.76,8.53 10.43,8.39L18.19,6.79C18.19,6.79 18.83,6.65 18.83,7.29C18.83,7.89 18.83,14.2 18.83,14.2C18.83,14.2 18.9,14.83 18.12,15C17.34,15.12 13.91,15.4 14.19,18C14.5,21.07 20,20.65 20,17.07V2.61C20,2.61 20.04,1.62 18.9,1.87L9.5,3.78C9.5,3.78 8.66,3.96 8.66,4.77C8.66,5.5 8.66,16.11 8.66,16.11C8.66,16.11 8.66,16.96 7.85,17.07Z';
});
