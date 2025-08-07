Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemKhanMedalBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemKhanMedalBoosterVE, e);
  Object.defineProperty(CollectableItemKhanMedalBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_KhanMedalBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemKhanMedalBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_khanMedalBooster_boost_tt";
  };
  return CollectableItemKhanMedalBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemKhanMedalBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");