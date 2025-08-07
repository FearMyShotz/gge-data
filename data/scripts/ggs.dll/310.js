Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./311.js");
var a = require("./8.js");
var s = function () {
  function JavascriptCallSetCashHashFactory() {}
  JavascriptCallSetCashHashFactory.prototype.createVO = function () {
    return new i.JavascriptCallSetCashHashVO(a.BasicController.getInstance().paymentHash);
  };
  return JavascriptCallSetCashHashFactory;
}();
exports.JavascriptCallSetCashHashFactory = s;