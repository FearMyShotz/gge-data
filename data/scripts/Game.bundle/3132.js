Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3133.js");
var s = require("./145.js");
var r = function (e) {
  function TreasureChestBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(TreasureChestBuildingVE, e);
  TreasureChestBuildingVE.prototype.createDisp = function () {
    if (this.vo.isoData.areaData.isMyArea && !this.vo.isoData.areaData.isUnderConquerProcess) {
      return e.prototype.createDisp.call(this);
    }
  };
  TreasureChestBuildingVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    this.additionalClips.addClips(s.IsoAdditionalClipEnum.EXCLAMATION_MARK2);
  };
  TreasureChestBuildingVE.prototype.onMouseClick = function () {
    if (this.vo.isoData.areaData.isMyArea && !this.vo.isoData.areaData.isUnderConquerProcess) {
      l.CastleComponent.dialogHandler.registerDefaultDialogs(c.CastleTreasureChestBuildingDialog, new a.CastleTreasureChestBuildingDialogProperties(this.vo.objectId));
    }
  };
  return TreasureChestBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.TreasureChestBuildingVE = r;
var l = require("./14.js");
var c = require("./3134.js");
o.classImplementsInterfaces(r, "ICollectableRendererList", "IIngameUICapable");