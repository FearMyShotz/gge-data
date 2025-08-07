Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetAreaBuildingProductionVO(t, i, n, o) {
    var a = this;
    a.KID = 0;
    a.AID = 0;
    a.WID = 0;
    a.OID = 0;
    CONSTRUCTOR_HACK;
    (a = e.call(this) || this).KID = t;
    a.AID = i;
    a.WID = n;
    a.OID = o;
    return a;
  }
  n.__extends(C2SGetAreaBuildingProductionVO, e);
  C2SGetAreaBuildingProductionVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_AREA_BUILDING_PRODUCTION_INFO;
  };
  return C2SGetAreaBuildingProductionVO;
}(o.BasicCommandVO);
exports.C2SGetAreaBuildingProductionVO = s;