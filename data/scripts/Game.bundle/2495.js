Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./31.js");
var s = require("./19.js");
var r = require("./4.js");
var l = require("./33.js");
var c = require("./24.js");
var u = require("./40.js");
var d = createjs.MovieClip;
var p = createjs.Point;
var h = function (e) {
  function ACastleAllianceDialogTreasuryBoosterItem(t, i, n) {
    var o = e.call(this, new d()) || this;
    t.addChild(o.disp);
    o._itemClip = new c.CastleGoodgameExternalClip(i, C.IsoHelper.view.getAssetFileURL(f.CastleAllianceDialog.NAME));
    o.disp.addChild(o._itemClip);
    o._buffVO = n;
    return o;
  }
  n.__extends(ACastleAllianceDialogTreasuryBoosterItem, e);
  ACastleAllianceDialogTreasuryBoosterItem.prototype.destroy = function () {
    this._itemClip = null;
    e.prototype.destroy.call(this);
  };
  ACastleAllianceDialogTreasuryBoosterItem.prototype.update = function () {
    this.updateIcon();
  };
  ACastleAllianceDialogTreasuryBoosterItem.prototype.updateIcon = function () {
    var e = r.CastleModel.allianceBuffData.getAllianceBuffVoBySeriesIDAndLevel(this.buffVO.seriesID, this.allianceInfoVO.getBoostMaxLevel(this.buffVO.seriesID)).getBonusVOByEffectType(l.EffectTypeEnum.EFFECT_TYPE_UNKNOWN);
    if (e) {
      m.CollectableRenderHelper.displaySingleItemComplete(this, new a.CollectableRenderClips(this.itemMc.mc_icon).addIconMc(this.itemMc.mc_icon), new g.CollectableItemEffectVO(e.effect.effectID, false), new s.CollectableRenderOptions(s.CollectableRenderOptions.ICON, new p(60, 60)));
    }
  };
  Object.defineProperty(ACastleAllianceDialogTreasuryBoosterItem.prototype, "itemMc", {
    get: function () {
      return this._itemClip.currentshownDisplayObject;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleAllianceDialogTreasuryBoosterItem.prototype, "allianceInfoVO", {
    get: function () {
      _.AllianceInfoVO;
      return r.CastleModel.allianceData.myAllianceVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleAllianceDialogTreasuryBoosterItem.prototype, "buffVO", {
    get: function () {
      return this._buffVO;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleAllianceDialogTreasuryBoosterItem;
}(u.CastleItemRenderer);
exports.ACastleAllianceDialogTreasuryBoosterItem = h;
var g = require("./612.js");
var C = require("./46.js");
var _ = require("./704.js");
var m = require("./25.js");
var f = require("./125.js");
o.classImplementsInterfaces(h, "ICollectableRendererList");