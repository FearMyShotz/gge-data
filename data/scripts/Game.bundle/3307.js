Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./24.js");
var d = require("./14.js");
var p = require("./3308.js");
var h = require("./3310.js");
var g = function (e) {
  function ACollectableItemLootBoxVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACollectableItemLootBoxVE, e);
  ACollectableItemLootBoxVE.prototype.init = function (t, i) {
    e.prototype.init.call(this, t, i);
  };
  ACollectableItemLootBoxVE.prototype.iconCreate = function () {
    this.iconContainer.visible = false;
    var e = this.getAssetName();
    var t = this.getAssetBGName();
    var i = r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
    var n = r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t);
    var o = new u.CastleGoodgameExternalClip(e, i, null, 0, false);
    var a = new u.CastleGoodgameExternalClip(t, n, null, 0, false);
    this.dispCreator.addClip(a);
    this.dispCreator.addClip(o);
    if (this.options.icon.showMysteryBoxDrawCounter) {
      var s = this.getAssetDrawCounterName();
      var l = r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(s);
      this._iconDrawCountClip = new u.CastleGoodgameExternalClip(s, l, null, 0, false);
      this.dispCreator.addClip(this._iconDrawCountClip);
    }
  };
  ACollectableItemLootBoxVE.prototype.getAssetName = function () {
    return "Collectable_" + this.mysteryBoxVO.lootBoxVO.name;
  };
  ACollectableItemLootBoxVE.prototype.getAssetBGName = function () {
    return "Collectable_BG_rarity_" + this.mysteryBoxVO.lootBoxVO.rarity;
  };
  ACollectableItemLootBoxVE.prototype.getAssetDrawCounterName = function () {
    return "Collectable_MysteryBox_DrawCounter";
  };
  ACollectableItemLootBoxVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  ACollectableItemLootBoxVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  ACollectableItemLootBoxVE.prototype.onInfoButtonClicked = function () {
    d.CastleComponent.layoutManager.showDialog(p.MysteryBoxInfoDialog, new h.MysteryBoxInfoDialogProperties(this.mysteryBoxVO));
  };
  ACollectableItemLootBoxVE.prototype.onAllDispClipsLoaded = function (t = null) {
    if (this._iconDrawCountClip) {
      var i = this._iconDrawCountClip.currentshownDisplayObject;
      var n = this.options.icon.dimension.x * -0.003125 + 1.125;
      n = o.MathBase.clamp(n, 0.7, 1);
      i.mc_drawCount.scaleX = i.mc_drawCount.scaleY = n;
      s.GoodgameTextFieldManager.getInstance().registerTextField(i.mc_drawCount.txt_value, new c.NumberVO(this.mysteryBoxVO.lootBoxVO.draws), new a.InternalGGSTextFieldConfigVO(true));
    }
    this.iconContainer.visible = true;
    e.prototype.onAllDispClipsLoaded.call(this, t);
  };
  Object.defineProperty(ACollectableItemLootBoxVE.prototype, "mysteryBoxVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemLootBoxVE;
}(require("./158.js").ACollectableItemVE);
exports.ACollectableItemLootBoxVE = g;
l.classImplementsInterfaces(g, "ICollectableRendererList");