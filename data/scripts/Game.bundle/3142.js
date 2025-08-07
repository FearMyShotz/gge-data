Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./1044.js");
var r = function (e) {
  function FactionPalisadeDefenceVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionPalisadeDefenceVE, e);
  FactionPalisadeDefenceVE.prototype.updateFlagVisibility = function () {};
  Object.defineProperty(FactionPalisadeDefenceVE.prototype, "assetClipName", {
    get: function () {
      return "FactionCamp_Castlewall_Level" + this.vo.isoData.objects.defences.currentWallLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlewallDefenceVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionPalisadeDefenceVE.prototype, "assetFileName", {
    get: function () {
      return "Event" + a.EventConst.EVENTTYPE_FACTION + "Lib";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlewallDefenceVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return FactionPalisadeDefenceVE;
}(s.CastlewallDefenceVE);
exports.FactionPalisadeDefenceVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");