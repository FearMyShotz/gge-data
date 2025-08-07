Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SEnchantEquipmentEvent(t, i) {
    var n = this;
    n.C2 = 0;
    n.EID = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this) || this).C2 = t;
    n.EID = i;
    return n;
  }
  n.__extends(C2SEnchantEquipmentEvent, e);
  C2SEnchantEquipmentEvent.prototype.getCmdId = function () {
    return a.ClientConstSF.S2C_ENCHANT_EQUIPMENT_EVENT;
  };
  return C2SEnchantEquipmentEvent;
}(o.BasicCommandVO);
exports.C2SEnchantEquipmentEvent = s;