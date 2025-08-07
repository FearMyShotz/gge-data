Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./6.js");
var s = function (e) {
  function CollectableItemGemRandomVO(t = a.int(-o.EquipmentConst.RARENESS_COMMON), i = 1) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i) || this;
  }
  n.__extends(CollectableItemGemRandomVO, e);
  CollectableItemGemRandomVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.id = -t;
  };
  CollectableItemGemRandomVO.prototype.parseXmlObject = function (e) {
    this.id = -a.int(e);
  };
  CollectableItemGemRandomVO.prototype.getTooltipTextId = function () {
    return "equipmentRareness_name";
  };
  CollectableItemGemRandomVO.prototype.getDescriptionTextId = function () {
    return "randomEquipment_short_info";
  };
  CollectableItemGemRandomVO.__initialize_static_members = function () {
    CollectableItemGemRandomVO.SERVER_KEY = "GLID";
    CollectableItemGemRandomVO.XML_KEY = "gemLevelIDs";
  };
  return CollectableItemGemRandomVO;
}(require("./567.js").ACollectableItemGemVO);
exports.CollectableItemGemRandomVO = s;
s.__initialize_static_members();