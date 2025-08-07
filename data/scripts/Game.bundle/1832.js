Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SRequestGoodgamesGift(t = 0) {
    var i = this;
    i.CR = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).CR = t;
    return i;
  }
  n.__extends(C2SRequestGoodgamesGift, e);
  C2SRequestGoodgamesGift.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_REQUEST_GOODGAMES_GIFT;
  };
  return C2SRequestGoodgamesGift;
}(o.BasicCommandVO);
exports.C2SRequestGoodgamesGift = s;