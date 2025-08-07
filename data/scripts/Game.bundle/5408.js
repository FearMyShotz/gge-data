Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./608.js");
var d = require("./140.js");
var p = require("./207.js");
var h = require("./13.js");
var g = require("./15.js");
var C = require("./4.js");
var _ = require("./1931.js");
var m = require("./24.js");
var f = require("./20.js");
var O = require("./8.js");
var E = require("./11.js");
var y = require("./1839.js");
var b = function (e) {
  function AdvisorAttackSummaryDialog() {
    return e.call(this, AdvisorAttackSummaryDialog.NAME) || this;
  }
  n.__extends(AdvisorAttackSummaryDialog, e);
  AdvisorAttackSummaryDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    O.ButtonHelper.initButtons([this.dialogDisp.btn_close], f.ClickFeedbackButtonHover);
    s.GoodgameTextFieldManager.getInstance().registerTextField(this.dialogDisp.txt_title, new l.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("title_advisor_AttackSummary")));
    this.attackSummaryComponent = new y.AdvisorAttackOverviewComponent(this.dialogDisp.mc_summary, true);
    this.dialogDisp.btn_help.visible = false;
  };
  AdvisorAttackSummaryDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    C.CastleModel.smartfoxClient.sendCommandVO(new u.C2SReadMessagesVO(this.dialogProperties.messageID));
    g.CastleBasicController.getInstance().addEventListener(d.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageDataReceived));
  };
  AdvisorAttackSummaryDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    g.CastleBasicController.getInstance().removeEventListener(d.CastleMessageDataEvent.NEW_MESSAGE_BODY, this.bindFunction(this.onMessageDataReceived));
  };
  AdvisorAttackSummaryDialog.prototype.onMessageDataReceived = function (e) {
    var t = e.params[0];
    var i = new _.AdvisorAttackOverviewVO();
    i.parseServerData(JSON.parse(t));
    this.attackSummaryComponent.update(i);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_teaser);
    var n = p.AdvisorAttackHelper.getTeaserFileName(this.dialogProperties.advisorType);
    var s = new m.CastleGoodgameExternalClip(n + "_Summary", o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(n), null, 0, false);
    this.dialogDisp.mc_teaser.addChild(s);
  };
  AdvisorAttackSummaryDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (O.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          E.CastleExternalDialog.dialogHandler.showHelper("", c.Localize.text(""));
      }
    }
  };
  Object.defineProperty(AdvisorAttackSummaryDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  AdvisorAttackSummaryDialog.NAME = "NomadAdvisorSummaryExt";
  return AdvisorAttackSummaryDialog;
}(E.CastleExternalDialog);
exports.AdvisorAttackSummaryDialog = b;
r.classImplementsInterfaces(b, "ICollectableRendererList");