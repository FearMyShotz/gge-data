Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./1053.js");
var s = function (e) {
  function CollectableItemLongTermPointEventBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemLongTermPointEventBoosterVO, e);
  CollectableItemLongTermPointEventBoosterVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    var i = o.int(t[0]);
    var n = o.int(t[1]);
    this.percentageBoosterVO = new a.PercentageBoosterVO(i, n);
  };
  CollectableItemLongTermPointEventBoosterVO.prototype.getTooltipTextId = function () {
    return "longPointsEventBooster_name";
  };
  CollectableItemLongTermPointEventBoosterVO.prototype.getDescriptionTextId = function () {
    return "longPointsEventBooster_short_info";
  };
  CollectableItemLongTermPointEventBoosterVO.__initialize_static_members = function () {
    CollectableItemLongTermPointEventBoosterVO.SERVER_KEY = "LTB";
    CollectableItemLongTermPointEventBoosterVO.XML_KEY = "longTermPointEventBooster";
  };
  return CollectableItemLongTermPointEventBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemLongTermPointEventBoosterVO = s;
s.__initialize_static_members();