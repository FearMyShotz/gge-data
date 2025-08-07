Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SGetEquipmentInventory() {
    return e.call(this) || this;
  }
  n.__extends(C2SGetEquipmentInventory, e);
  C2SGetEquipmentInventory.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_GET_EQUIPMENT_INVENTORY;
  };
  return C2SGetEquipmentInventory;
}(o.BasicCommandVO);
exports.C2SGetEquipmentInventory = s;