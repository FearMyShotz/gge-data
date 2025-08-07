Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./9.js");
var p = require("./17.js");
var h = require("./20.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./1142.js");
var m = function (e) {
  function DonationEventStartDialog() {
    return e.call(this, DonationEventStartDialog.NAME) || this;
  }
  n.__extends(DonationEventStartDialog, e);
  DonationEventStartDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    g.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_help], h.ClickFeedbackButtonHover);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
  };
  DonationEventStartDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_startDonationEvent_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_new.txt_copy, new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("new")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_teaser, new r.LocalizedTextVO("dialog_startDonationEvent_join"));
    var i = this.getTextIds();
    for (var n = 0; n < 3; n++) {
      this.textFieldManager.registerTextField(this.dialogDisp["txt_title" + n], new l.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId(i[n][0])));
      var o = new s.HTMLTextCustomVO();
      o.addLocalizedTextVO(new r.LocalizedTextVO(i[n][1]));
      this.textFieldManager.registerTextField(this.dialogDisp["txt_copy" + n], o);
    }
  };
  DonationEventStartDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        d.CastleDialogHandler.getInstance().showHelper("", s.Localize.text("dialog_mainDonationEvent_helpPopup"));
        break;
      case this.dialogDisp.btn_ok:
        this.onOK();
    }
  };
  DonationEventStartDialog.prototype.onOK = function () {
    var e = u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_DONATION);
    if (e && !p.CastleLayoutManager.getInstance().isDialogVisible(_.DonationEventDialog)) {
      e.openDialog();
    }
    this.hide();
  };
  DonationEventStartDialog.prototype.getTextIds = function () {
    return DonationEventStartDialog.TEXT_DEFAULT;
  };
  DonationEventStartDialog.TEXT_DEFAULT = [["dialog_startDonationEvent_subtitle1", "dialog_startDonationEvent_desc1"], ["dialog_startDonationEvent_subtitle2", "dialog_startDonationEvent_desc2"], ["rankingGlobal", "dialog_startDonationEvent_desc4"]];
  DonationEventStartDialog.NAME = "DonationEventStarter1";
  return DonationEventStartDialog;
}(C.CastleExternalDialog);
exports.DonationEventStartDialog = m;
o.classImplementsInterfaces(m, "ICollectableRendererList");