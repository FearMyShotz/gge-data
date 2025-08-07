Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./2.js");
var a = require("./16.js");
var s = i.getLogger(a.CREATEJS_UTILITIES_LOGGER);
var r = function () {
  function DictionaryUtils() {}
  DictionaryUtils.getKeys = function (e) {
    var t = "DictionaryUtils.getKeys is not yet implemented";
    s.debug(t);
    return t.split(" ");
  };
  return DictionaryUtils;
}();
exports.DictionaryUtils = r;