Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./55.js");
var r = require("./4.js");
var l = require("./127.js");
var c = require("./24.js");
var u = require("./158.js");
var d = createjs.Point;
var p = function (e) {
  function CollectableItemRelicVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemRelicVE, e);
  CollectableItemRelicVE.prototype.iconCreate = function () {
    if (this.relicItemVO.isRelicDefined()) {
      this.triggerOnAllIconDispLoadedManually = true;
      this.scaleManually = true;
      var e = this.renderer.getRenderer(f.CollectableRenderOptions.ICON_TRANSFORM);
      var t = 1;
      if (e) {
        t = e.transform.scale;
        e.transform.scale = 1;
      }
      var i = this.options.icon.dimension.x * t;
      i -= Math.round(6 / 55 * (i - i * (6 / 55)));
      var n = this.options.icon.dimension.y * t;
      n -= Math.round(6 / 55 * (n - n * (6 / 55)));
      if (this.relicItemVO.type == _.CollectableItemRelicVO.TYPE_EQUIPMENT) {
        g.EquipmentIconHelper.addEquipmentIcon(this.relicItemVO.vo, this.dispCreator.dispContainer, i, n, this.bindFunction(this.onAllDispClipsLoaded), true, false, false, true, this.options.icon.useFavIcon);
      } else if (this.relicItemVO.type == _.CollectableItemRelicVO.TYPE_GEM) {
        var o = new d(i, n);
        this.dispCreator.addDisp(h.CastleGemRenderer.renderAsset(this.relicItemVO.vo, this.bindFunction(this.onAllDispClipsLoaded), o, this.renderer.options.icon.useFavIcon));
        this.updateIconDimension();
      }
    } else {
      this.triggerOnAllIconDispLoadedManually = false;
      var u;
      var p = this.relicItemVO.getBluePrintVO();
      u = this.relicItemVO.type == _.CollectableItemRelicVO.TYPE_GEM ? l.BasicEquippableVO.SLOT_TYPE_GEM : l.BasicEquippableVO.getSlotType(p ? r.CastleModel.equipData.relicXml.getRelicType(p.relicTypeId).slotId : -1);
      var m = a.int(r.CastleModel.equipData.relicXml.getStarRating(this.relicItemVO.predefinedMinRating));
      var O = CollectableItemRelicVE.ASSET_PREFIX + "_" + s.ClientConstUtils.capitalizeFirstLetter(u) + "_" + m;
      this.dispCreator.addClip(new c.CastleGoodgameExternalClip(O, C.IsoHelper.view.getAssetFileURL(CollectableItemRelicVE.ASSET_FILE_NAME_UNDEFINED)));
    }
  };
  CollectableItemRelicVE.prototype.tooltipCreate = function () {
    return g.EquipmentIconHelper.getToolTipByEquipmentVO(this.relicItemVO.vo);
  };
  CollectableItemRelicVE.prototype.tooltipShowAdvanced = function () {
    g.EquipmentIconHelper.showRelicToolTip(this.renderer.clips.getTooltipTargetMc(), this.relicItemVO.vo);
  };
  CollectableItemRelicVE.prototype.onAllDispClipsLoaded = function (t = null) {
    e.prototype.onAllDispClipsLoaded.call(this, t);
    if (this.relicItemVO.type == _.CollectableItemRelicVO.TYPE_EQUIPMENT) {
      m.CastleMovieClipHelper.createHitArea(this.dispCreator.dispContainer);
    }
  };
  Object.defineProperty(CollectableItemRelicVE.prototype, "relicItemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemRelicVE.__initialize_static_members = function () {
    CollectableItemRelicVE.ASSET_FILE_NAME_UNDEFINED = CollectableItemRelicVE.ASSET_PREFIX + "_Undefined_2_0";
  };
  CollectableItemRelicVE.ASSET_PREFIX = "Relic_Equipment";
  return CollectableItemRelicVE;
}(u.ACollectableItemVE);
exports.CollectableItemRelicVE = p;
var h = require("./248.js");
var g = require("./73.js");
var C = require("./46.js");
var _ = require("./289.js");
var m = require("./41.js");
var f = require("./19.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();