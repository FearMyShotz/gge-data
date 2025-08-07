Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./2273.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./8.js");
var p = require("./11.js");
var h = require("./2274.js");
var g = function (e) {
  function CastleAcceptGDPRDialog() {
    return e.call(this, CastleAcceptGDPRDialog.NAME) || this;
  }
  n.__extends(CastleAcceptGDPRDialog, e);
  CastleAcceptGDPRDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_label, new s.LocalizedTextVO("dialog_GDPR_confirmationDialog_button"));
    d.ButtonHelper.initButton(this.dialogDisp.btn_ok, -1, _.ClickFeedbackButton);
    this.linkComponent = new h.GDPRLinkComponent(this.dialogDisp.mc_copy, "dialog_GDPR_confirmationDialog_copy1", "");
    this.linkComponent.update();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(c.TextHelper.toUpperCaseLocaSafe(a.Localize.text("dialog_GDPR_confirmationDialog_header")))).autoFitToBounds = true;
    if (u.CastleModel.tutorialData.isInTutorial()) {
      C.CastleTutorialClickBlocker.instance.add(this.dialogDisp.btn_ok);
    }
  };
  CastleAcceptGDPRDialog.prototype.hideLoaded = function (t = null) {
    this.linkComponent.dispose();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleAcceptGDPRDialog.prototype.acceptGDPR = function () {
    u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SConfirmTermsAndConditionVO());
    this.hide();
  };
  CastleAcceptGDPRDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.acceptGDPR();
    }
  };
  CastleAcceptGDPRDialog.NAME = "CastleAcceptGDPR";
  return CastleAcceptGDPRDialog;
}(p.CastleExternalDialog);
exports.CastleAcceptGDPRDialog = g;
var C = require("./433.js");
var _ = require("./36.js");
o.classImplementsInterfaces(g, "ICollectableRendererList");