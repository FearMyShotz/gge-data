Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./242.js");
var s = require("./24.js");
var r = require("./2.js");
var l = require("./85.js");
var c = function (e) {
  function CollectableRendererLevelIndicatorMC() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableRendererLevelIndicatorMC, e);
  CollectableRendererLevelIndicatorMC.prototype.reset = function () {
    if (this.clips.buildingLevelMC) {
      this.clips.buildingLevelMC.visible = false;
    }
  };
  CollectableRendererLevelIndicatorMC.prototype.update = function () {
    var e = this.clips.collectableLevelIndicatorVO.levelClassName;
    this._levelClip = new s.CastleGoodgameExternalClip(e, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e));
    this._levelClip.recycleAsset = false;
    if (e) {
      var t = this.clips.itemMc ? this.clips.itemMc : this.clips.iconMc;
      if (t) {
        t.addChild(this._levelClip);
      }
      if (this.clips.collectableLevelIndicatorVO.pos) {
        this._levelClip.x = this.clips.collectableLevelIndicatorVO.pos.x;
        this._levelClip.y = this.clips.collectableLevelIndicatorVO.pos.y;
      }
      if (this.clips.collectableLevelIndicatorVO.scale) {
        this._levelClip.scaleX = this.clips.collectableLevelIndicatorVO.scale.x;
        this._levelClip.scaleY = this.clips.collectableLevelIndicatorVO.scale.y;
      }
    }
    if (this._levelClip.isLoaded) {
      this.loadingComplete(this._levelClip);
    } else {
      this._levelClip.clipLoaded.addOnce(this.bindFunction(this.loadingComplete));
    }
  };
  CollectableRendererLevelIndicatorMC.prototype.loadingComplete = function (e) {
    var t = this._levelClip.currentshownDisplayObject;
    var i = this.clips.collectableLevelIndicatorVO.level;
    r.GoodgameTextFieldManager.getInstance().registerTextField(t.txt_value, new l.CastleLocalizedNumberVO(i));
  };
  CollectableRendererLevelIndicatorMC.LEVEL_INDICATOR_BUILDING = "Colleactable_LevelIndicator_Building";
  CollectableRendererLevelIndicatorMC.LEVEL_INDICATOR_UNIT = "Colleactable_LevelIndicator_Unit";
  return CollectableRendererLevelIndicatorMC;
}(a.ACollectableRenderComponent);
exports.CollectableRendererLevelIndicatorMC = c;
o.classImplementsInterfaces(c, "ICollectableRendererList");