Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemReputationBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemReputationBoosterVE, e);
  Object.defineProperty(CollectableItemReputationBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_ReputaionBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemReputationBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_reputationBooster_boost_tt";
  };
  return CollectableItemReputationBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemReputationBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");