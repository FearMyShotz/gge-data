Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemHeroRandomVO(t = -1, i = 1) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i) || this;
  }
  n.__extends(CollectableItemHeroRandomVO, e);
  CollectableItemHeroRandomVO.prototype.getTooltipTextId = function () {
    return "equipment_slotType_hero";
  };
  CollectableItemHeroRandomVO.__initialize_static_members = function () {
    CollectableItemHeroRandomVO.SERVER_KEY = "RE";
  };
  return CollectableItemHeroRandomVO;
}(require("./687.js").CollectableItemEquipmentRarenessVO);
exports.CollectableItemHeroRandomVO = o;
o.__initialize_static_members();