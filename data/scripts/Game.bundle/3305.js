Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./195.js");
var s = function (e) {
  function CollectableItemSeasonLeagueEventPassVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemSeasonLeagueEventPassVE, e);
  Object.defineProperty(CollectableItemSeasonLeagueEventPassVE.prototype, "iconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_SeasonPassEvent;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.ACollectableItemSimpleIconVE.prototype, "iconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemSeasonLeagueEventPassVE;
}(a.ACollectableItemSimpleIconVE);
exports.CollectableItemSeasonLeagueEventPassVE = s;
o.classImplementsInterfaces(s, "ICollectableRendererList");