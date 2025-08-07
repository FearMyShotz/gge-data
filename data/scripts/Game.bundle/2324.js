Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./7.js");
var r = function (e) {
  function C2SSetAutoSellEquipmentConditionsEventVO(t) {
    var i = e.call(this) || this;
    i.ECS = [];
    for (var n = 0, o = Array.from(t.actives.keys()); n < o.length; n++) {
      var s = o[n];
      if (s !== undefined) {
        var r = t.actives.get(s);
        if (r != null) {
          for (var l = 0, c = Array.from(r.keys()); l < c.length; l++) {
            var u = c[l];
            if (u !== undefined) {
              if (r.get(u)) {
                i.ECS.push([s, s == a.EquipmentConst.SLOT_HERO ? a.EquipmentConst.RARENESS_HERO_COMMON - 1 + u : u]);
              }
            }
          }
        }
      }
    }
    return i;
  }
  n.__extends(C2SSetAutoSellEquipmentConditionsEventVO, e);
  C2SSetAutoSellEquipmentConditionsEventVO.prototype.getCmdId = function () {
    return s.ClientConstSF.C2S_SET_AUTO_SELL_EQUIPMENT_CONDITIONS;
  };
  return C2SSetAutoSellEquipmentConditionsEventVO;
}(o.BasicCommandVO);
exports.C2SSetAutoSellEquipmentConditionsEventVO = r;