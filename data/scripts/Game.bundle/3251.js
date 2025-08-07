Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemSamuraiBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemSamuraiBoosterVE, e);
  Object.defineProperty(CollectableItemSamuraiBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_SamuraiBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemSamuraiBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_samuraiBooster_boost_tt";
  };
  return CollectableItemSamuraiBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemSamuraiBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");