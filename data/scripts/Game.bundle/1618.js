Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = function (e) {
  function CollectableItemEquipmentUniqueVO(t = -1) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, 1) || this).id = t;
    return i;
  }
  n.__extends(CollectableItemEquipmentUniqueVO, e);
  CollectableItemEquipmentUniqueVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.id = t;
  };
  CollectableItemEquipmentUniqueVO.prototype.setRemainingTime = function (e) {
    if (this.equipmentVO) {
      this.equipmentVO.setRemainingTime(e);
    }
  };
  CollectableItemEquipmentUniqueVO.prototype.parseXmlObject = function (e) {
    this.id = o.int(e);
    this.amount = 1;
  };
  CollectableItemEquipmentUniqueVO.prototype.getTooltipTextId = function () {
    return "equipmentRareness_name";
  };
  CollectableItemEquipmentUniqueVO.__initialize_static_members = function () {
    CollectableItemEquipmentUniqueVO.SERVER_KEY = "UE";
    CollectableItemEquipmentUniqueVO.XML_KEY = "equipmentIDs";
  };
  return CollectableItemEquipmentUniqueVO;
}(require("./480.js").ACollectableItemEquipmentVO);
exports.CollectableItemEquipmentUniqueVO = a;
a.__initialize_static_members();