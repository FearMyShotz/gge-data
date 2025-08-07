Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemKhanTabletBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemKhanTabletBoosterVE, e);
  Object.defineProperty(CollectableItemKhanTabletBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_KhanTabletBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemKhanTabletBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_nomadBooster_boost_tt";
  };
  return CollectableItemKhanTabletBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemKhanTabletBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");