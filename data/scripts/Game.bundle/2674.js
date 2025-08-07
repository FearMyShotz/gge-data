Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./28.js");
var c = require("./30.js");
var u = require("./4.js");
var d = require("./1410.js");
var p = require("./8.js");
var h = require("./11.js");
var g = createjs.MouseEvent;
var C = function (e) {
  function CastleLegendSkillCooldownDialog() {
    var t = this;
    t._elapsedTime = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleLegendSkillCooldownDialog.NAME) || this;
  }
  n.__extends(CastleLegendSkillCooldownDialog, e);
  CastleLegendSkillCooldownDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_skip]);
  };
  CastleLegendSkillCooldownDialog.prototype.addEventListenerOnShow = function () {
    this.dialogDisp.btn_skip.addEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOverSkipButton));
    this.cooldown_component.addEventListenerOnShow();
  };
  CastleLegendSkillCooldownDialog.prototype.removeEventListenerOnHide = function () {
    this.dialogDisp.btn_skip.removeEventListener(g.MOUSE_OVER, this.bindFunction(this.onMouseOverSkipButton));
    this.cooldown_component.removeEventListenerOnHide();
  };
  CastleLegendSkillCooldownDialog.prototype.onMouseOverSkipButton = function (e) {
    this.dialogDisp.btn_skip.toolTipText = {
      t: "dungeonCooldown_skip_tooltip",
      p: [new r.LocalizedNumberVO(a.LegendSkillConst.resetSkipCostC2(this.legendSkillData.getSpentPoints(), this.legendSkillData.resetsCounter), false)]
    };
    p.ButtonHelper.enableButton(this.dialogDisp.btn_skip, true);
  };
  CastleLegendSkillCooldownDialog.prototype.showLoaded = function (t = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.text_description, new s.LocalizedTextVO("dialog_legendTemple_skip_text"));
    this._elapsedTime = (this.legendSkillData.newResetTimeStamp - c.CachedTimer.getCachedTimer()) * l.ClientConstTime.MILLISEC_2_SEC;
    var i = (this.legendSkillData.newResetTimeStamp - this.legendSkillData.lastResetTimeStamp) * l.ClientConstTime.MILLISEC_2_SEC;
    this.cooldown_component = new d.CastleCooldownComponent(this.dialogDisp.cooldown_component, this.bindFunction(this.onTimeUp), this._elapsedTime, i, "dialog_legendTemple_skip");
    this.updateTime();
    p.ButtonHelper.delayEnableButton(this.dialogDisp.btn_skip, true);
    e.prototype.showLoaded.call(this, t);
  };
  CastleLegendSkillCooldownDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_skip:
          this.skipWithRubies();
      }
    }
  };
  CastleLegendSkillCooldownDialog.prototype.updateTime = function () {
    this.cooldown_component.updateTime(this._elapsedTime);
  };
  CastleLegendSkillCooldownDialog.prototype.onTimeUp = function () {
    this.hide();
  };
  CastleLegendSkillCooldownDialog.prototype.skipWithRubies = function () {
    p.ButtonHelper.enableButton(this.dialogDisp.btn_skip, false);
    if (this.dialogProperties.confirmSkipCallback) {
      this.dialogProperties.confirmSkipCallback();
    }
    this.hide();
  };
  Object.defineProperty(CastleLegendSkillCooldownDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillCooldownDialog.prototype, "legendSkillData", {
    get: function () {
      return u.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillCooldownDialog.__initialize_static_members = function () {
    CastleLegendSkillCooldownDialog.NAME = "LegendSkillCooldownEx";
  };
  return CastleLegendSkillCooldownDialog;
}(h.CastleExternalDialog);
exports.CastleLegendSkillCooldownDialog = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();