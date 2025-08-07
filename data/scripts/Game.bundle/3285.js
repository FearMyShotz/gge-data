Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemPermanentToolSlotVO() {
    CONSTRUCTOR_HACK;
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemPermanentToolSlotVO, e);
  CollectableItemPermanentToolSlotVO.prototype.getTooltipTextId = function () {
    return "productionSlot_name";
  };
  CollectableItemPermanentToolSlotVO.prototype.getDescriptionTextId = function () {
    return "productionSlot_short_info";
  };
  CollectableItemPermanentToolSlotVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  CollectableItemPermanentToolSlotVO.__initialize_static_members = function () {
    CollectableItemPermanentToolSlotVO.SERVER_KEY = "PTS";
    CollectableItemPermanentToolSlotVO.XML_KEY = "toolSlot";
  };
  return CollectableItemPermanentToolSlotVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemPermanentToolSlotVO = o;
o.__initialize_static_members();