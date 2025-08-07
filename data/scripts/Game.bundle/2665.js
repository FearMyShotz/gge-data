Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./23.js");
var a = require("./23.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./2.js");
var u = require("./35.js");
var d = require("./9.js");
var p = require("./8.js");
var h = require("./82.js");
var g = require("./47.js");
var C = require("./59.js");
var _ = require("./1453.js");
var m = require("./529.js");
var f = require("./30.js");
var O = require("./2675.js");
var E = require("./2676.js");
var y = require("./151.js");
var b = require("./4.js");
var D = require("./448.js");
var I = require("./20.js");
var T = require("./42.js");
var v = require("./16.js");
var S = require("./13.js");
var A = function (e) {
  function CastleLegendSkillClassicSublayer(t) {
    var i = e.call(this, t) || this;
    i._itxt_title = i.textFieldManager.registerTextField(i.subLayerDisp.txt_title, new r.TextVO(""));
    i._itxt_pointsLeft = i.textFieldManager.registerTextField(i.subLayerDisp.mc_points2.txt_value, new s.LocalizedNumberVO(0));
    i._itxt_pointsSpent = i.textFieldManager.registerTextField(i.subLayerDisp.mc_points1.txt_value, new s.LocalizedNumberVO(0));
    i.subLayerDisp.mc_points1.mouseChildren = false;
    i.subLayerDisp.mc_points2.mouseChildren = false;
    i.textFieldManager.registerTextField(i.subLayerDisp.btn_reset.txt_label, new r.TextVO(S.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_reset")));
    p.ButtonHelper.initButtons([i.subLayerDisp.btn_reset], I.ClickFeedbackButtonHover);
    var n = new g.SimpleScrollVO().initByParent(i.subLayerDisp.mc_slider).addMouseWheelElements([i.subLayerDisp]);
    var o = new C.DynamicSizeScrollStrategyVertical(true, i.subLayerDisp.mc_ItemContainer.mask.height);
    i.scrollComponent = new h.ModernSliderScrollComponent(n, o, true);
    c.MovieClipHelper.clearMovieClip(i.subLayerDisp.mc_ItemContainer);
    return i;
  }
  n.__extends(CastleLegendSkillClassicSublayer, e);
  CastleLegendSkillClassicSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.treeComponent = new _.CastleLegendSkillTreeComponent(t.sublayerID);
    this.subLayerDisp.mc_ItemContainer.addChild(this.treeComponent.disp);
    this.scrollComponent.init(0, this.treeComponent.height - this.subLayerDisp.mc_ItemContainer.mask.height, CastleLegendSkillClassicSublayer.SCROLL_STEP_PIXELS, CastleLegendSkillClassicSublayer.SCROLL_STEP_PIXELS);
    this.scrollComponent.show();
    this.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this.updateResetButton();
    this.updateText();
    this.controller.addEventListener(m.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
  };
  CastleLegendSkillClassicSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.treeComponent) {
      this.treeComponent.hide();
      c.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_ItemContainer);
    }
    if (this.scrollComponent) {
      this.scrollComponent.hide();
      this.scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    }
    this.controller.removeEventListener(m.LegendSkillsDataEvent.LEGEND_SKILLS_UPDATED, this.bindFunction(this.onLegendSkillsUpdated));
  };
  CastleLegendSkillClassicSublayer.prototype.updateResetButton = function () {
    p.ButtonHelper.enableButton(this.subLayerDisp.btn_reset, this.legendSkillData.userSkills.length > 0);
  };
  CastleLegendSkillClassicSublayer.prototype.updateText = function () {
    var e = this.legendSkillData.getSpentPoints(this._params.sublayerID);
    var t = this.legendSkillData.skillPointsLeft;
    this._itxt_title.textContentVO.stringValue = this._params.sublayerID == D.CastleLegendSkillDialog.SUBLAYER_ATTACK ? S.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_titleAttack") : S.TextHelper.toUpperCaseLocaSafeTextId("dialog_legendTemple_titleDefence");
    this._itxt_title.verticalAlign = T.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._itxt_pointsLeft.textContentVO.numberValue = t;
    this._itxt_pointsSpent.textContentVO.numberValue = e;
    this._itxt_pointsLeft.color = this.legendSkillData.skillPointsLeft > 0 ? v.ClientConstColor.FONT_INSUFFICIENT_COLOR : v.ClientConstColor.FONT_DEFAULT_COLOR;
    this.subLayerDisp.mc_points2.toolTipText = {
      t: "dialog_legendTemple_counter",
      p: [t]
    };
    var i = this._params.sublayerID == D.CastleLegendSkillDialog.SUBLAYER_ATTACK ? "dialog_legendTemple_attackCounter" : "dialog_legendTemple_defenseCounter";
    this.subLayerDisp.mc_points1.toolTipText = {
      t: i,
      p: [e]
    };
  };
  CastleLegendSkillClassicSublayer.prototype.onLegendSkillsUpdated = function (e) {
    this.updateResetButton();
    this.updateText();
    if (this.treeComponent) {
      this.treeComponent.updateTree();
    }
  };
  CastleLegendSkillClassicSublayer.prototype.onScrollValueChange = function (e) {
    a.TweenMax.killTweensOf(this.treeComponent.disp);
    a.TweenMax.to(this.treeComponent.disp, 0.2, {
      y: -this.scrollComponent.currentValue,
      ease: o.Power1.easeOut
    });
  };
  CastleLegendSkillClassicSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_reset:
          if (this.legendSkillData.newResetTimeStamp > f.CachedTimer.getCachedTimer()) {
            d.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleLegendSkillCooldownDialog, new E.CastleLegendSkillCooldownDialogProperties(this.bindFunction(this.onConfirmReset)));
          } else {
            d.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleStandardYesNoDialog, new c.BasicStandardYesNoDialogProperties(l.Localize.text("legendCooldown_skip_copy_header"), l.Localize.text("legendCooldown_skip_copy"), this.bindFunction(this.onConfirmReset)));
          }
      }
    }
  };
  CastleLegendSkillClassicSublayer.prototype.onConfirmReset = function (e = null) {
    this.legendSkillData.requestSkillReset();
  };
  CastleLegendSkillClassicSublayer.prototype.showHelp = function () {
    d.CastleDialogHandler.getInstance().showHelper("", l.Localize.text("dialog_legendTemple_help"));
  };
  Object.defineProperty(CastleLegendSkillClassicSublayer.prototype, "legendSkillData", {
    get: function () {
      return b.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillClassicSublayer.SCROLL_STEP_PIXELS = 124;
  return CastleLegendSkillClassicSublayer;
}(u.CastleDialogSubLayer);
exports.CastleLegendSkillClassicSublayer = A;