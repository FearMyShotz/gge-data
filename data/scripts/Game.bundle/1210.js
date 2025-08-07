Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./7.js");
var s = function (e) {
  function C2SEquipmentSpaceLeftVO() {
    return e.call(this) || this;
  }
  n.__extends(C2SEquipmentSpaceLeftVO, e);
  C2SEquipmentSpaceLeftVO.prototype.getCmdId = function () {
    return a.ClientConstSF.C2S_EQUIPMENT_INVENTORY_SPACE_LEFT;
  };
  return C2SEquipmentSpaceLeftVO;
}(o.BasicCommandVO);
exports.C2SEquipmentSpaceLeftVO = s;