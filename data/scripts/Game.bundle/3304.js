Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./195.js");
var s = function (e) {
  function CollectableItemSeasonLeagueSeasonPassVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemSeasonLeagueSeasonPassVE, e);
  Object.defineProperty(CollectableItemSeasonLeagueSeasonPassVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_SeasonPass;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemSeasonLeagueSeasonPassVE;
}(a.ACollectableItemSimpleIconVE);
exports.CollectableItemSeasonLeagueSeasonPassVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");