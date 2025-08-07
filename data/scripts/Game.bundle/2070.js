Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SIsoPlaceCustomInventoryObjectVO(t, i, n, o) {
    var a = this;
    a.COID = 0;
    a.X = 0;
    a.Y = 0;
    a.R = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).COID = t;
    a.X = i;
    a.Y = n;
    a.R = o;
    return a;
  }
  n.__extends(C2SIsoPlaceCustomInventoryObjectVO, e);
  C2SIsoPlaceCustomInventoryObjectVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_PLACE_CUSTOM_INVENTORY_OBJECT;
  };
  return C2SIsoPlaceCustomInventoryObjectVO;
}(o.BasicCommandVO);
exports.C2SIsoPlaceCustomInventoryObjectVO = s;