Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemPermanentUnitSlotVO() {
    CONSTRUCTOR_HACK;
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemPermanentUnitSlotVO, e);
  CollectableItemPermanentUnitSlotVO.prototype.getTooltipTextId = function () {
    return "recruitmentSlot_name";
  };
  CollectableItemPermanentUnitSlotVO.prototype.getDescriptionTextId = function () {
    return "recruitmentSlot_short_info";
  };
  CollectableItemPermanentUnitSlotVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  CollectableItemPermanentUnitSlotVO.__initialize_static_members = function () {
    CollectableItemPermanentUnitSlotVO.SERVER_KEY = "PUS";
    CollectableItemPermanentUnitSlotVO.XML_KEY = "unitSlot";
  };
  return CollectableItemPermanentUnitSlotVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemPermanentUnitSlotVO = o;
o.__initialize_static_members();