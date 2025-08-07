Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./7.js");
var l = function (e) {
  function C2SIsoRepairBuildingVO(t, i = -1, n = false) {
    var o = this;
    o.OID = 0;
    o.PO = 0;
    o.PWR = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).OID = t;
    o.PO = i;
    o.PWR = s.int(n == 1 ? 1 : 0);
    return o;
  }
  n.__extends(C2SIsoRepairBuildingVO, e);
  C2SIsoRepairBuildingVO.prototype.getCmdId = function () {
    return r.ClientConstSF.C2S_REPAIR_BUILDING;
  };
  return C2SIsoRepairBuildingVO;
}(o.BasicCommandVO);
exports.C2SIsoRepairBuildingVO = l;
a.classImplementsInterfaces(l, "IBuildingConstructionCommandVO");