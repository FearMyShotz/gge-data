Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./930.js");
var u = require("./207.js");
var d = require("./13.js");
var p = require("./4.js");
var h = require("./24.js");
var g = require("./20.js");
var C = require("./8.js");
var _ = function (e) {
  function AdvisorAttackOverviewCancelDialog() {
    return e.call(this, AdvisorAttackOverviewCancelDialog.NAME) || this;
  }
  n.__extends(AdvisorAttackOverviewCancelDialog, e);
  AdvisorAttackOverviewCancelDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    C.ButtonHelper.initButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.btn_close], g.ClickFeedbackButtonHover);
    this.dialogDisp.btn_close.visible = false;
  };
  AdvisorAttackOverviewCancelDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (this.dialogProperties.movements.length > 1) {
      s.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_title, new r.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackCancelAll")));
      s.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("advisor_AttackCancelAll"));
    } else {
      s.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_title, new r.TextVO(d.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackCancel")));
      s.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("advisor_AttackCancel"));
    }
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var i = u.AdvisorAttackHelper.getTeaserFileName(this.dialogProperties.advisorType);
    var n = new h.CastleGoodgameExternalClip(i + "_Cancel", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i), null, 0, false);
    this.dialogDisp.mc_teaser.addChild(n);
  };
  AdvisorAttackOverviewCancelDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_yes:
        this.cancelAttacks();
        this.hide();
        if (this.dialogProperties.yesCallBack) {
          this.dialogProperties.yesCallBack();
        }
        break;
      case this.dialogDisp.btn_no:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  AdvisorAttackOverviewCancelDialog.prototype.cancelAttacks = function () {
    this.dialogProperties.movements.forEach(function (e) {
      p.CastleModel.smartfoxClient.sendCommandVO(new c.C2SCancelMovementVO(e.objectId));
    });
  };
  Object.defineProperty(AdvisorAttackOverviewCancelDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackOverviewCancelDialog.NAME = "NomadAdvisorOverviewCancelExt";
  return AdvisorAttackOverviewCancelDialog;
}(require("./11.js").CastleExternalDialog);
exports.AdvisorAttackOverviewCancelDialog = _;