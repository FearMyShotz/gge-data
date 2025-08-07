Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemRageBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemRageBoosterVE, e);
  Object.defineProperty(CollectableItemRageBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_RageBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemRageBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_rageBooster_boost_tt";
  };
  return CollectableItemRageBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemRageBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");