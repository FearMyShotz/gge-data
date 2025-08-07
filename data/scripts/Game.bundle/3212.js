Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./145.js");
var r = require("./640.js");
var l = function (e) {
  function FactionEmptyTowerVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(FactionEmptyTowerVE, e);
  FactionEmptyTowerVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._buildingClip = this.loadExternalClip(this.assetClipName));
  };
  Object.defineProperty(FactionEmptyTowerVE.prototype, "assetClipName", {
    get: function () {
      return "FactionLookout_TowerCorner_Level" + this.towerVO.isoData.objects.defences.currentWallLevel;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ATowerVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionEmptyTowerVE.prototype, "assetFileName", {
    get: function () {
      return "Event" + a.EventConst.EVENTTYPE_FACTION + "Lib";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ATowerVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionEmptyTowerVE.prototype.createAdditionalClips = function () {
    e.prototype.createAdditionalClips.call(this);
    this.additionalClips.addClips(s.IsoAdditionalClipEnum.CAMP_FIRE);
  };
  return FactionEmptyTowerVE;
}(r.ATowerVE);
exports.FactionEmptyTowerVE = l;
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");