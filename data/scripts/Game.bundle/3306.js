Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./195.js");
var s = function (e) {
  function CollectableItemSeasonLeaguePromotionPassVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemSeasonLeaguePromotionPassVE, e);
  Object.defineProperty(CollectableItemSeasonLeaguePromotionPassVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_SeasonPassPromotion;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemSeasonLeaguePromotionPassVE;
}(a.ACollectableItemSimpleIconVE);
exports.CollectableItemSeasonLeaguePromotionPassVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");