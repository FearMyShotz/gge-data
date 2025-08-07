Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./3.js");
var s = require("./20.js");
var r = require("./8.js");
var l = require("./11.js");
var c = require("./164.js");
var u = function (e) {
  function GeneralIntroductionPopUpDialog() {
    return e.call(this, GeneralIntroductionPopUpDialog.NAME) || this;
  }
  n.__extends(GeneralIntroductionPopUpDialog, e);
  GeneralIntroductionPopUpDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    r.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_goto], s.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new o.LocalizedTextVO("generals_introduction_popup_header1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subheader1, new o.LocalizedTextVO("generals_introduction_popup_subHeader1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description1, new o.LocalizedTextVO("generals_introduction_popup_description1"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subheader2, new o.LocalizedTextVO("generals_introduction_popup_subHeader2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description2, new o.LocalizedTextVO("generals_introduction_popup_description2"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_subheader3, new o.LocalizedTextVO("generals_introduction_popup_subHeader3"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description3, new o.LocalizedTextVO("generals_introduction_popup_description3"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new o.LocalizedTextVO("generals_introduction_popup_questreminder"));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_goto.txt_label, new o.LocalizedTextVO("generals_introduction_popup_questbutton"));
  };
  GeneralIntroductionPopUpDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        l.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("help_generals_introduction_popup"));
        break;
      case this.dialogDisp.btn_goto:
        c.GeneralsHelper.showGeneralsHubDialog();
        this.hide();
    }
  };
  GeneralIntroductionPopUpDialog.NAME = "GeneralIntroductionPopUpExt";
  return GeneralIntroductionPopUpDialog;
}(l.CastleExternalDialog);
exports.GeneralIntroductionPopUpDialog = u;