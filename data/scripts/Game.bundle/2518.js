Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./13.js");
var p = require("./24.js");
var h = require("./81.js");
var g = require("./82.js");
var C = require("./47.js");
var _ = require("./189.js");
var m = require("./8.js");
var f = require("./2519.js");
var O = function (e) {
  function CastleABGTowerEffectsDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CastleABGTowerEffectsDialogItem, e);
  CastleABGTowerEffectsDialogItem.prototype.initLoaded = function () {
    var e = this.getItemMc();
    this.itxt_level = E.CastleComponent.textFieldManager.registerTextField(e.txt_level, new u.LocalizedTextVO("", [0]));
    this.itxt_value = E.CastleComponent.textFieldManager.registerTextField(e.txt_value, new u.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_ADD, [0]));
    m.ButtonHelper.initButtons([e.btn_minus, e.btn_plus, e.btn_max], b.ClickFeedbackButtonHover);
    m.ButtonHelper.initBasicButtons([e.btn_info]);
    this._scrollComponent = new g.ModernSliderScrollComponent(new C.SimpleScrollVO().initByParent(e).addSliderButton(e.mc_slider.btn_slider).addSliderLine(e.mc_slider.sliderBar), new _.SimpleScrollStrategyHorizontal(true));
  };
  CastleABGTowerEffectsDialogItem.prototype.fill = function () {
    var e = this.getItemMc();
    E.CastleComponent.textFieldManager.registerTextField(e.txt_name, new c.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_" + this.towerEffectVO.currentBonusVO.effect.name + "_name")));
    this._scrollComponent.init(this.towerEffectVO.currentLevel, this.towerEffectVO.effectMaxLevel);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this._scrollComponent.scrollToValue(this.towerEffectVO.selectedLevel - this.towerEffectVO.currentLevel);
    this._scrollComponent.enableComponent(this.towerEffectVO.currentLevel < this.towerEffectVO.effectMaxLevel);
    a.MovieClipHelper.clearMovieClip(e.mc_icon);
    var t = "Effect_Icon_" + this.towerEffectVO.effectID;
    if (l.BasicModel.basicLoaderData.isItemAssetVersioned(t)) {
      var i = new p.CastleGoodgameExternalClip(t, l.BasicModel.basicLoaderData.getVersionedItemAssetUrl(t));
      i.clipSizeComponent = new r.ClipSizeComponent(73, 71);
      e.mc_icon.addChild(i);
    }
  };
  CastleABGTowerEffectsDialogItem.prototype.onScroll = function () {
    var e = this.getItemMc();
    this.towerEffectVO.selectedLevel = this._scrollComponent.currentValue;
    var t = this.towerEffectVO.getEffectValueForLevel(this.towerEffectVO.selectedLevel);
    this.itxt_value.textContentVO.textReplacements = [t];
    if (this.towerEffectVO.currentLevel == this.towerEffectVO.selectedLevel) {
      this.itxt_level.textContentVO.textId = "level_placeholder";
    } else {
      this.itxt_level.textContentVO.textId = "level_basePlusX_placeholder";
    }
    this.itxt_level.textContentVO.textReplacements = [this.towerEffectVO.currentLevel, this.towerEffectVO.selectedLevel - this.towerEffectVO.currentLevel];
    e.mc_progress.progress_current.scaleX = this.getProgressScale(this.towerEffectVO.currentLevel);
    e.mc_progress.progress_new.scaleX = this.getProgressScale(this.towerEffectVO.selectedLevel);
    this.updateSliderFill();
    this.changeCallback();
  };
  CastleABGTowerEffectsDialogItem.prototype.getProgressScale = function (e) {
    return e / this.towerEffectVO.effectMaxLevel;
  };
  CastleABGTowerEffectsDialogItem.prototype.updateSliderFill = function () {
    var e = this.getItemMc();
    e.mc_slider.mc_sliderLineFill.width = e.mc_slider.btn_slider.x - e.mc_slider.sliderBar.x;
  };
  CastleABGTowerEffectsDialogItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._scrollComponent.hide();
  };
  CastleABGTowerEffectsDialogItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.getItemMc().btn_info:
          E.CastleComponent.dialogHandler.registerDefaultDialogs(y.CastleABGTowerEffectDetailDialog, new f.CastleABGTowerEffectDetailDialogProperties(this.towerEffectVO));
      }
    }
  };
  Object.defineProperty(CastleABGTowerEffectsDialogItem.prototype, "towerEffectVO", {
    get: function () {
      return this.data[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleABGTowerEffectsDialogItem.prototype, "changeCallback", {
    get: function () {
      return this.data[1];
    },
    enumerable: true,
    configurable: true
  });
  return CastleABGTowerEffectsDialogItem;
}(h.AInfiniteScrollListItem);
exports.CastleABGTowerEffectsDialogItem = O;
var E = require("./14.js");
var y = require("./2520.js");
var b = require("./20.js");
o.classImplementsInterfaces(O, "ICollectableRendererList");