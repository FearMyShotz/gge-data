Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./1053.js");
var s = function (e) {
  function CollectableItemReputationBoosterVO() {
    CONSTRUCTOR_HACK;
    return e.call(this) || this;
  }
  n.__extends(CollectableItemReputationBoosterVO, e);
  CollectableItemReputationBoosterVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    var i = o.int(t[0]);
    var n = o.int(t[1]);
    this.percentageBoosterVO = new a.PercentageBoosterVO(i, n);
  };
  CollectableItemReputationBoosterVO.prototype.getTooltipTextId = function () {
    return "reputationBooster_name";
  };
  CollectableItemReputationBoosterVO.prototype.getDescriptionTextId = function () {
    return "reputationBooster_short_info";
  };
  CollectableItemReputationBoosterVO.__initialize_static_members = function () {
    CollectableItemReputationBoosterVO.SERVER_KEY = "REPB";
    CollectableItemReputationBoosterVO.XML_KEY = "reputationPointBooster";
  };
  Object.defineProperty(CollectableItemReputationBoosterVO.prototype, "amount", {
    get: function () {
      return 1;
    },
    set: function (e) {
      this._amount = 1;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemReputationBoosterVO;
}(require("./328.js").ACollectableItemPercentageBoosterVO);
exports.CollectableItemReputationBoosterVO = s;
s.__initialize_static_members();