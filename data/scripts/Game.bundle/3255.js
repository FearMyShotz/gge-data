Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemLongTermPointEventBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemLongTermPointEventBoosterVE, e);
  Object.defineProperty(CollectableItemLongTermPointEventBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_LongTermPEBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemLongTermPointEventBoosterVE.prototype.getBoosterTooltipId = function () {
    return "pointsEvent_booster_tooltip";
  };
  return CollectableItemLongTermPointEventBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemLongTermPointEventBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");