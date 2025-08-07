Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemXpVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemXpVO, e);
  CollectableItemXpVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.amount = t[0];
  };
  CollectableItemXpVO.prototype.getTooltipTextId = function () {
    return "xp";
  };
  CollectableItemXpVO.prototype.getDescriptionTextId = function () {
    return "xp_short_info";
  };
  CollectableItemXpVO.__initialize_static_members = function () {
    CollectableItemXpVO.SERVER_KEY = "XP";
    CollectableItemXpVO.XML_KEY = "xp";
  };
  return CollectableItemXpVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemXpVO = o;
o.__initialize_static_members();