Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./309.js");
var a = function () {
  function JavascriptCallDefaultFactory() {}
  JavascriptCallDefaultFactory.prototype.createVO = function (e) {
    var t;
    if (e === undefined) {
      e = "";
    }
    if (e && e != "") {
      t = new i.JavascriptCallDefaultVO(e);
    }
    return t;
  };
  return JavascriptCallDefaultFactory;
}();
exports.JavascriptCallDefaultFactory = a;