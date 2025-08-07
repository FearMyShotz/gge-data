Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./39.js");
var p = require("./2515.js");
var h = require("./21.js");
var g = require("./13.js");
var C = require("./4.js");
var _ = require("./27.js");
var m = require("./8.js");
var f = require("./11.js");
var O = require("./135.js");
var E = createjs.Point;
var y = function (e) {
  function CastleABGTowerEffectsActivateDialog() {
    return e.call(this, CastleABGTowerEffectsActivateDialog.NAME) || this;
  }
  n.__extends(CastleABGTowerEffectsActivateDialog, e);
  CastleABGTowerEffectsActivateDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(g.TextHelper.toUpperCaseLocaSafeTextId("dialog_beyondTheHorizon_AllianceTower_buffActivation_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new l.LocalizedTextVO("dialog_beyondTheHorizon_AllianceTower_buffActivation_copy"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costTxt, new l.LocalizedTextVO("cost"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_cost, new c.LocalizedNumberVO(0));
    this.itxt_discount = this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_value, new l.LocalizedTextVO(s.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_timer.txt_time, new r.TextVO(""));
    this.dialogDisp.mc_timer.mouseChildren = false;
    this.dialogDisp.mc_timer.toolTipText = "dialog_remainingTime_AllianceTower_playerRevive_tooltip";
    this.dialogDisp.mc_discount.mouseChildren = false;
    this.dialogDisp.mc_discount.visible = false;
    this.dialogDisp.mc_c2.toolTipText = d.ClientConstTextIds.C2;
    this.effectTooltipTrigger = new I.LordEffectTooltipTrigger(this.dialogDisp.mc_effects);
    m.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], S.ClickFeedbackButtonHover);
  };
  CastleABGTowerEffectsActivateDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_name, new r.TextVO(this.dialogProperties.allianceTowerMapObjectVO.areaNameString));
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_tower);
    this.dialogDisp.mc_tower.addChild(T.WorldmapObjectIconHelper.drawMapObjectIcon(this.dialogProperties.allianceTowerMapObjectVO, new E(166, 258), true, false, false, "", null, true));
    var i = new b.LordVO();
    i.parseAllianceTowerBuffInfo(this.dialogProperties.currentAllianceTowerBuffInfoVO, false);
    this.effectTooltipTrigger.setProperties(i, this.dialogProperties.allianceTowerMapObjectVO);
    this.effectTooltipTrigger.show();
    this.onTimer();
  };
  CastleABGTowerEffectsActivateDialog.prototype.addEventListenerOnShow = function () {
    e.prototype.addEventListenerOnShow.call(this);
    C.CastleModel.timerData.addEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
  };
  CastleABGTowerEffectsActivateDialog.prototype.removeEventListenerOnHide = function () {
    e.prototype.removeEventListenerOnHide.call(this);
    C.CastleModel.timerData.removeEventListener(h.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    this.effectTooltipTrigger.hide();
  };
  CastleABGTowerEffectsActivateDialog.prototype.onTimer = function (e = null) {
    this.itxt_time.textContentVO.stringValue = _.CastleTimeStringHelper.getShortTimeString(C.CastleModel.allianceBattlegroundData.remainingSecondsTillRevive);
    this.itxt_cost.textContentVO.numberValue = C.CastleModel.allianceBattlegroundData.getAllianceTowerEffectActivationCost();
  };
  CastleABGTowerEffectsActivateDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (m.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          var i = u.int(this.itxt_cost.textContentVO.numberValue);
          if (C.CastleModel.currencyData.c2Amount >= i) {
            C.CastleModel.smartfoxClient.sendCommandVO(new p.C2SActivateAllianceTowerBuffVO(this.dialogProperties.allianceTowerMapObjectVO.absAreaPos));
            this.hide();
          } else {
            D.CastleDialogHandler.getInstance().registerDefaultDialogs(v.CastleNoMoneyC2Dialog, new O.CastleNoMoneyC2DialogProperties());
          }
      }
    }
  };
  Object.defineProperty(CastleABGTowerEffectsActivateDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleABGTowerEffectsActivateDialog.NAME = "CastleABGTowerEffectsActivate";
  return CastleABGTowerEffectsActivateDialog;
}(f.CastleExternalDialog);
exports.CastleABGTowerEffectsActivateDialog = y;
var b = require("./730.js");
var D = require("./9.js");
var I = require("./298.js");
var T = require("./70.js");
var v = require("./138.js");
var S = require("./20.js");
o.classImplementsInterfaces(y, "ICollectableRendererList");