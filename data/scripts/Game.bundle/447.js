Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function FusionForgeEvent(t, i = null, n = true, o = false) {
    var a = e.call(this, t, n, o) || this;
    a.params = i;
    return a;
  }
  n.__extends(FusionForgeEvent, e);
  FusionForgeEvent.__initialize_static_members = function () {
    FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED = "onFusionForgeInfoUpdated";
    FusionForgeEvent.ON_FUSE_DONE = "onFuseDone";
    FusionForgeEvent.ON_FORGE_LEVEL_UP = "onForgeLevelUp";
    FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED = "onForgeEnergyRecharged";
    FusionForgeEvent.ON_CATALYST_CONVERSION_DONE = "onCatalystConversionDone";
  };
  return FusionForgeEvent;
}(require("./366.js").CastleEvent);
exports.FusionForgeEvent = o;
o.__initialize_static_members();