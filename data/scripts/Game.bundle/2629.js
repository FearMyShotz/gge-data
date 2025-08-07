Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SellBuildingDeco(t) {
    var i = this;
    i.OID = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).OID = t;
    return i;
  }
  n.__extends(C2SellBuildingDeco, e);
  C2SellBuildingDeco.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_SELL_BUILDING_DECO;
  };
  return C2SellBuildingDeco;
}(o.BasicCommandVO);
exports.C2SellBuildingDeco = s;