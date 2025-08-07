Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./4.js");
var a = function () {
  function ExpiredEquipmentVO() {
    this.equipments = [];
  }
  ExpiredEquipmentVO.prototype.parseData = function (e) {
    this.lordVO = o.CastleModel.lordData.getLordByID(e.LID);
    for (var t = 0; t < e.EE.length; ++t) {
      var i = e.EE[t];
      var a = o.CastleModel.equipData.getEquipmentByUniqueID(i[0]);
      if (i.length >= 2) {
        a.enchantmentLevel = n.int(i[1]);
      }
      if (i.length >= 3) {
        a.gemVO = o.CastleModel.gemData.getGemVO(i[2]);
      }
      this.equipments.push(a);
    }
  };
  ExpiredEquipmentVO.prototype.getEquipmentBySlotType = function (e) {
    if (this.equipments != null) {
      for (var t = 0, i = this.equipments; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.slotType == e) {
          return n;
        }
      }
    }
    return null;
  };
  return ExpiredEquipmentVO;
}();
exports.ExpiredEquipmentVO = a;