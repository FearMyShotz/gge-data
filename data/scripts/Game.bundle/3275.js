Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemResourcePointVO(t = 0) {
    CONSTRUCTOR_HACK;
    return e.call(this, t) || this;
  }
  n.__extends(CollectableItemResourcePointVO, e);
  CollectableItemResourcePointVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.amount = t[1];
  };
  CollectableItemResourcePointVO.prototype.getTooltipTextId = function () {
    return "colossus_donateResource_labelPoints";
  };
  CollectableItemResourcePointVO.prototype.getDescriptionTextId = function () {
    return "colossusPoints_short_info";
  };
  CollectableItemResourcePointVO.__initialize_static_members = function () {
    CollectableItemResourcePointVO.SERVER_KEY = "RP";
    CollectableItemResourcePointVO.XML_KEY = "resourcePoints";
  };
  return CollectableItemResourcePointVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemResourcePointVO = o;
o.__initialize_static_members();