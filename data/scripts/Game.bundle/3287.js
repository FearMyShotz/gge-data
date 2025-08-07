Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./4.js");
var s = require("./68.js");
var r = require("./24.js");
var l = require("./529.js");
var c = require("./239.js");
var u = require("./356.js");
var d = function (e) {
  function CollectableItemConstructionItemBlueprintVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CollectableItemConstructionItemBlueprintVE, e);
  CollectableItemConstructionItemBlueprintVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
    this.triggerOnAllIconDispLoadedManually = true;
  };
  CollectableItemConstructionItemBlueprintVE.prototype.iconCreate = function () {
    this.dispCreator.cacheDisp = false;
    this._clip = new r.CastleGoodgameExternalClip(this.itemBlueprintVO.blueprintVO.assetName, this.itemBlueprintVO.blueprintVO.assetURL, null, 0, false);
    this.dispCreator.addClip(castAs(this._clip, "IGoodgameClip"));
    this._clip.doWhenLoaded(this.bindFunction(this.onMainClipLoaded));
  };
  CollectableItemConstructionItemBlueprintVE.prototype.iconDestroy = function () {
    this._clip = null;
    e.prototype.iconDestroy.call(this);
  };
  CollectableItemConstructionItemBlueprintVE.prototype.tooltipShowAdvanced = function () {
    if (this.itemBlueprintVO.blueprintVO) {
      u.ConstructionItemTooltipHelper.showBlueprintToolTip(this.renderer.clips.getTooltipTargetMc(), this.itemBlueprintVO.blueprintVO);
    }
  };
  CollectableItemConstructionItemBlueprintVE.prototype.onMainClipLoaded = function (e = null) {
    var t = this._clip.currentshownDisplayObject;
    t.glow.visible = false;
    t.banner.visible = false;
    var i = this.itemBlueprintVO.blueprintVO.recipes;
    if (c.ConstructionItemsHelper.isRecipeUnlocked(i[0])) {
      var n = a.CastleModel.constructionItemBlueprintData.newBlueprints;
      if (i != null) {
        for (var o = 0, r = i; o < r.length; o++) {
          var u = r[o];
          if (u !== undefined && n.indexOf(u.id) > -1) {
            t.banner.visible = true;
            break;
          }
        }
      }
    } else {
      this.dispCreator.dispContainer.useFilters(s.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    }
    l.ConstructionItemRenderer.renderBlueprint(this.itemBlueprintVO.blueprintVO, this._clip, this.bindFunction(this.onAllDispClipsLoaded));
  };
  Object.defineProperty(CollectableItemConstructionItemBlueprintVE.prototype, "itemBlueprintVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return CollectableItemConstructionItemBlueprintVE;
}(require("./158.js").ACollectableItemVE);
exports.CollectableItemConstructionItemBlueprintVE = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");