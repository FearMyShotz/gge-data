Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./55.js");
var s = require("./290.js");
var r = require("./24.js");
var l = require("./14.js");
var c = createjs.Point;
var u = function (e) {
  function SeasonLeaguePromotionIconComponent(t, i, n) {
    var o = this;
    o._dispCreator = new s.DispCreatorComponent();
    o._iconType = SeasonLeaguePromotionIconComponent.TYPE_NORMAL;
    o._iconSize = new c();
    o._vo = null;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._parentDisp = t;
    o._iconType = i;
    o._iconSize = n;
    o._dispCreator.cacheDisp = false;
    o._dispCreator.init(t);
    o._dispCreator.onLoadedSignal.add(o.bindFunction(o.onLoaded));
    o._dispCreator.switchCreationState(true);
    o._dispCreator.addClip(new r.CastleGoodgameExternalClip(o.getAssetClipName(), d.IsoHelper.view.getAssetFileURL(SeasonLeaguePromotionIconComponent.ASSET_FILE_NAME)));
    o._dispCreator.switchCreationState(false);
    return o;
  }
  n.__extends(SeasonLeaguePromotionIconComponent, e);
  SeasonLeaguePromotionIconComponent.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    this._dispCreator.destroy();
  };
  SeasonLeaguePromotionIconComponent.prototype.updateWithNewVO = function (e) {
    this._vo = e;
    this.update();
  };
  SeasonLeaguePromotionIconComponent.prototype.update = function () {
    var e = this.getItemMc();
    if (e && (e.visible = this.vo !== null, this.vo)) {
      e.x = 0;
      e.y = 0;
      e.mc_major.gotoAndStop(this.vo.majorRank);
      var t = this.vo.minorRank > 0;
      e.mc_minor.visible = t;
      if (t) {
        e.mc_minor.gotoAndStop(this.vo.minorRank);
      }
      this._parentDisp.mouseChildren = false;
      this._parentDisp.toolTipText = this.vo.getNameTextId();
      this._dispCreator.updateCache();
    }
  };
  SeasonLeaguePromotionIconComponent.prototype.setVisibility = function (e) {
    var t = this.getItemMc();
    if (t) {
      t.visible = e;
    }
  };
  SeasonLeaguePromotionIconComponent.prototype.getItemMc = function () {
    return this._dispCreator.getClipMc(0);
  };
  SeasonLeaguePromotionIconComponent.prototype.getAssetClipName = function () {
    switch (this.iconType) {
      case SeasonLeaguePromotionIconComponent.TYPE_BIG:
        return SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_BIG;
      case SeasonLeaguePromotionIconComponent.TYPE_NORMAL:
        return SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_NORMAL;
      case SeasonLeaguePromotionIconComponent.TYPE_SMALL:
        return SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_SMALL;
      default:
        return SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_NORMAL;
    }
  };
  SeasonLeaguePromotionIconComponent.prototype.onLoaded = function () {
    this._dispCreator.onLoadedSignal.remove(this.bindFunction(this.onLoaded));
    var e = this.getItemMc();
    p.CastleMovieClipHelper.uncacheSafe(e);
    var t = a.ClientConstUtils.getScaleFactorForFitInBounds(new c(e.width, e.height), this._iconSize);
    e.scaleX = e.scaleY = t;
    this.update();
  };
  Object.defineProperty(SeasonLeaguePromotionIconComponent.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionIconComponent.prototype, "iconSize", {
    get: function () {
      return this._iconSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeaguePromotionIconComponent.prototype, "iconType", {
    get: function () {
      return this._iconType;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeaguePromotionIconComponent.TYPE_BIG = "typeBig";
  SeasonLeaguePromotionIconComponent.TYPE_NORMAL = "typeNormal";
  SeasonLeaguePromotionIconComponent.TYPE_SMALL = "typeSmall";
  SeasonLeaguePromotionIconComponent.ASSET_FILE_NAME = "SeasonLeaguePromotionIcons";
  SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_SMALL = "SeasonLeaguePromotionIcon_Small";
  SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_NORMAL = "SeasonLeaguePromotionIcon_Normal";
  SeasonLeaguePromotionIconComponent.ASSET_CLIP_NAME_BIG = "SeasonLeaguePromotionIcon_Big";
  return SeasonLeaguePromotionIconComponent;
}(l.CastleComponent);
exports.SeasonLeaguePromotionIconComponent = u;
var d = require("./46.js");
var p = require("./41.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");