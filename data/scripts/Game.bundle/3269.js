Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CollectableItemExtinguishFireVO() {
    CONSTRUCTOR_HACK;
    return e.call(this, 1) || this;
  }
  n.__extends(CollectableItemExtinguishFireVO, e);
  CollectableItemExtinguishFireVO.prototype.getTooltipTextId = function () {
    return "extinguishFire_name";
  };
  CollectableItemExtinguishFireVO.prototype.getDescriptionTextId = function () {
    return "extinguishFire_short_info";
  };
  CollectableItemExtinguishFireVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  CollectableItemExtinguishFireVO.__initialize_static_members = function () {
    CollectableItemExtinguishFireVO.SERVER_KEY = "EF";
    CollectableItemExtinguishFireVO.XML_KEY = "extinguishFire";
  };
  return CollectableItemExtinguishFireVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemExtinguishFireVO = o;
o.__initialize_static_members();