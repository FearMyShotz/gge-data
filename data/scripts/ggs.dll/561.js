Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./138.js");
var a = require("./228.js");
var s = function () {
  function System() {}
  Object.defineProperty(System, "totalMemory", {
    get: function () {
      return 0;
    },
    enumerable: true,
    configurable: true
  });
  System.setClipboard = function (e) {
    a.Clipboard.generalClipboard.setData(i.ClipboardFormats.TEXT_FORMAT, e);
  };
  System.gc = function () {};
  return System;
}();
exports.System = s;