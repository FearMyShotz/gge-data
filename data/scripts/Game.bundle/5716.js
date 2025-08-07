Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./7.js");
var r = function (e) {
  function C2SEquipEquipmentVO(t, i, n) {
    var o = this;
    o.EID = 0;
    o.LID = 0;
    o.E = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this).EID = t;
    o.LID = i;
    o.E = a.int(n ? 1 : 0);
    return o;
  }
  n.__extends(C2SEquipEquipmentVO, e);
  C2SEquipEquipmentVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_EQUIP_EQUIPMENT;
  };
  return C2SEquipEquipmentVO;
}(o.BasicCommandVO);
exports.C2SEquipEquipmentVO = r;