Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./1043.js");
var r = function (e) {
  function PalisadeDefenceVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(PalisadeDefenceVE, e);
  PalisadeDefenceVE.prototype.updateFlagVisibility = function () {};
  Object.defineProperty(PalisadeDefenceVE.prototype, "assetClipName", {
    get: function () {
      return "SeasonCamp_Castlewall";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlewallDefenceVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PalisadeDefenceVE.prototype, "assetFileName", {
    get: function () {
      return "Castlewall_SeasonCamp_" + a.CastleModel.specialEventData.activeSeasonVO.eventId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.CastlewallDefenceVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  return PalisadeDefenceVE;
}(s.CastlewallDefenceVE);
exports.PalisadeDefenceVE = r;
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");