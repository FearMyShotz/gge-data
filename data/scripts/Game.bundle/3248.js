Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./299.js");
var s = function (e) {
  function CollectableItemGallantryBoosterVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemGallantryBoosterVE, e);
  Object.defineProperty(CollectableItemGallantryBoosterVE.prototype, "percentageIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_GallantryBooster;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemPercentageBoosterVE.prototype, "percentageIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemGallantryBoosterVE.prototype.getBoosterTooltipId = function () {
    return "dialog_gallantryBooster_boost_tt";
  };
  return CollectableItemGallantryBoosterVE;
}(a.ACollectableItemPercentageBoosterVE);
exports.CollectableItemGallantryBoosterVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");