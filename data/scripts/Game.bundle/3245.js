Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemXpBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemXpBoosterVE, e);
  Object.defineProperty(CollectableItemXpBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_XPBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemXpBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_xpBooster_boost_tt";
  };
  return CollectableItemXpBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemXpBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");