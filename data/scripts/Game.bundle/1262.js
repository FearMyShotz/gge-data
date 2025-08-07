Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemVipPointVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemVipPointVO, e);
  CollectableItemVipPointVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.amount = t;
  };
  CollectableItemVipPointVO.prototype.getTooltipTextId = function () {
    return "dialog_VipScreen_premiumPoints_v2";
  };
  CollectableItemVipPointVO.prototype.getDescriptionTextId = function () {
    return "vipPoints_short_info";
  };
  CollectableItemVipPointVO.__initialize_static_members = function () {
    CollectableItemVipPointVO.SERVER_KEY = "VP";
    CollectableItemVipPointVO.XML_KEY = "vipPoints";
  };
  return CollectableItemVipPointVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemVipPointVO = o;
o.__initialize_static_members();