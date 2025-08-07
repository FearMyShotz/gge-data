Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./207.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./24.js");
var p = require("./20.js");
var h = require("./133.js");
var g = require("./298.js");
var C = require("./8.js");
var _ = require("./73.js");
var m = function (e) {
  function AdvisorAttackFailDialog() {
    return e.call(this, AdvisorAttackFailDialog.NAME) || this;
  }
  n.__extends(AdvisorAttackFailDialog, e);
  AdvisorAttackFailDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close], p.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackFailed")));
    this._lordTooltipTrigger = new g.LordEffectTooltipTrigger(this.dialogDisp.mc_lord);
  };
  AdvisorAttackFailDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var i = l.AdvisorAttackHelper.getTeaserFileName(this.dialogProperties.advisorType);
    var n = new d.CastleGoodgameExternalClip(i + "_Fail", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, false);
    this.dialogDisp.mc_teaser.addChild(n);
    var s = u.CastleModel.lordData.getLordByID(this.dialogProperties.commanderId);
    _.EquipmentIconHelper.addLordIcon(s, this.dialogDisp.mc_lord, 61);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_commander, s.name);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new r.LocalizedTextVO("advisor_AttackFailed_reason" + this.dialogProperties.failureId));
    var c = h.LordEffectHelper.STRATEGY_ATTACK;
    this._lordTooltipTrigger.setProperties(s, null, null, c);
    this._lordTooltipTrigger.show();
    this.dialogDisp.mc_failIcon.gotoAndStop(this.dialogProperties.failureId + 1);
  };
  AdvisorAttackFailDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._lordTooltipTrigger.hide();
  };
  AdvisorAttackFailDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(AdvisorAttackFailDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackFailDialog.NAME = "NomadAdvisorFailExt";
  return AdvisorAttackFailDialog;
}(require("./11.js").CastleExternalDialog);
exports.AdvisorAttackFailDialog = m;
s.classImplementsInterfaces(m, "ICollectableRendererList");