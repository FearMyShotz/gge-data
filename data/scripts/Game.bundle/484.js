Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = function () {
  function CastleEquipmentFactory() {}
  CastleEquipmentFactory.createEquipmentVO = function (e, t) {
    var i;
    if (t === undefined) {
      t = false;
    }
    if (e.length >= 12 && e[11] == n.EquipmentConst.EQUIPMENT_TYPE_ID_RELIC) {
      i = new r.RelicEquipmentVO();
    } else {
      switch (e[1]) {
        case n.EquipmentConst.SLOT_HERO:
          i = new s.CastleHeroVO();
          break;
        default:
          i = new a.BasicEquipmentVO();
      }
    }
    if (t) {
      i.parseCustomPrivateOfferEquipment(e);
    } else {
      i.parseEquipFromArray(e);
    }
    return i;
  };
  return CastleEquipmentFactory;
}();
exports.CastleEquipmentFactory = o;
var a = require("./198.js");
var s = require("./1177.js");
var r = require("./686.js");