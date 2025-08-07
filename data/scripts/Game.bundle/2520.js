Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./13.js");
var d = require("./24.js");
var p = require("./76.js");
var h = require("./77.js");
var g = require("./8.js");
var C = function (e) {
  function CastleABGTowerEffectDetailDialog() {
    return e.call(this, CastleABGTowerEffectDetailDialog.NAME) || this;
  }
  n.__extends(CastleABGTowerEffectDetailDialog, e);
  CastleABGTowerEffectDetailDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_buffDetails_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new c.LocalizedTextVO("level"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_value, new c.LocalizedTextVO("value"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new c.LocalizedTextVO("cost_simple"));
    g.ButtonHelper.initButtons([this.dialogDisp.btn_close], O.ClickFeedbackButtonHover);
    var i = new h.InfiniteScrollListOptions(m.CastleABGTowerEffectDetailDialogItem, "CastleABGTowerEffectDetail_ListItem", f.CastleAllianceBattleGroundEventDialog.NAME);
    i.itemPaddingY = 4;
    i.useSmoothScroll = true;
    this._list = new _.InfiniteScrollListComponent(new p.InfiniteScrollListClips(this.dialogDisp).addSliderMc(this.dialogDisp.mc_slider), i);
  };
  CastleABGTowerEffectDetailDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new c.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_" + this.dialogProperties.towerEffectVO.currentBonusVO.effect.name + "_desc"));
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_icon);
    var i = "Effect_Icon_" + this.dialogProperties.towerEffectVO.effectID;
    if (r.BasicModel.basicLoaderData.isItemAssetVersioned(i)) {
      var n = new d.CastleGoodgameExternalClip(i, r.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i));
      n.clipSizeComponent = new s.ClipSizeComponent(73, 71);
      this.dialogDisp.mc_icon.addChild(n);
    }
    var o = [];
    for (var l = 1; l < this.dialogProperties.towerEffectVO.effectMaxLevel; l++) {
      o.push([this.dialogProperties.towerEffectVO, l]);
    }
    this._list.onShow();
    this._list.updateWithNewData(o);
  };
  CastleABGTowerEffectDetailDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._list.onHide();
  };
  CastleABGTowerEffectDetailDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleABGTowerEffectDetailDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerEffectDetailDialog.NAME = "CastleABGTowerEffectDetail";
  return CastleABGTowerEffectDetailDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleABGTowerEffectDetailDialog = C;
var _ = require("./78.js");
var m = require("./2521.js");
var f = require("./249.js");
var O = require("./20.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");