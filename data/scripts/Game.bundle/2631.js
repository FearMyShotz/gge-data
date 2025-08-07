Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SellStoredDeco(t, i, n = -1) {
    var o = this;
    o.WID = 0;
    o.AMT = 0;
    o.UID = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).WID = t;
    o.AMT = i;
    o.UID = n;
    return o;
  }
  n.__extends(C2SellStoredDeco, e);
  C2SellStoredDeco.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SELL_STORED_DECO;
  };
  return C2SellStoredDeco;
}(o.BasicCommandVO);
exports.C2SellStoredDeco = s;