Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemAllianceCoinBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemAllianceCoinBoosterVE, e);
  Object.defineProperty(CollectableItemAllianceCoinBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_AllianceCoinBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAllianceCoinBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_royalCoinsBooster_boost_tt";
  };
  return CollectableItemAllianceCoinBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemAllianceCoinBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");