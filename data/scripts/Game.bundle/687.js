Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./4.js");
var s = require("./483.js");
var r = function (e) {
  function CollectableItemEquipmentRarenessVO(t = -1, i = 1) {
    var n = this;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this).id = t;
    return n;
  }
  n.__extends(CollectableItemEquipmentRarenessVO, e);
  CollectableItemEquipmentRarenessVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    var i = t;
    var n = true;
    var r = 0;
    if (typeof t == "number") {
      r = o.int(-t);
    } else if (i && i.length == 1) {
      r = o.int(-i[0]);
    } else {
      n = false;
    }
    this.equipmentVO = n ? a.CastleModel.equipData.getEquipmentByUniqueID(r) : s.CastleEquipmentFactory.createEquipmentVO(i, i.length == 5);
  };
  CollectableItemEquipmentRarenessVO.prototype.parseXmlObject = function (e) {
    this.id = -o.int(e);
  };
  CollectableItemEquipmentRarenessVO.prototype.getTooltipTextId = function () {
    return "randomEquipment_name";
  };
  CollectableItemEquipmentRarenessVO.__initialize_static_members = function () {
    CollectableItemEquipmentRarenessVO.SERVER_KEY = "GE";
    CollectableItemEquipmentRarenessVO.XML_KEY = "equipmentRarenessID";
  };
  return CollectableItemEquipmentRarenessVO;
}(require("./479.js").ACollectableItemEquipmentVO);
exports.CollectableItemEquipmentRarenessVO = r;
r.__initialize_static_members();