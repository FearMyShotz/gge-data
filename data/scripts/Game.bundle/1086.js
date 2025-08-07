Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = function (e) {
  function CastleArtifactEventDialogProperties(t) {
    var i = e.call(this) || this;
    i.eventVO = t;
    return i;
  }
  n.__extends(CastleArtifactEventDialogProperties, e);
  Object.defineProperty(CastleArtifactEventDialogProperties.prototype, "skinId", {
    get: function () {
      if (this.eventVO.skinID == s.ArtifactConst.SKIN_RENEGADE_DESERT_KINGDOM || this.eventVO.skinID == s.ArtifactConst.SKIN_RENEGADE_VOLCANO_KINGDOM) {
        return s.ArtifactConst.SKIN_RENEGADE_ICE_KINGDOM;
      } else {
        return this.eventVO.skinID;
      }
    },
    enumerable: true,
    configurable: true
  });
  return CastleArtifactEventDialogProperties;
}(o.BasicProperties);
exports.CastleArtifactEventDialogProperties = r;
a.classImplementsInterfaces(r, "ISkinnable");