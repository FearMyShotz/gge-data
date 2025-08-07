Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = function (e) {
  function CastleRerollAlienChancesDialog() {
    return e.call(this, CastleRerollAlienChancesDialog.NAME) || this;
  }
  n.__extends(CastleRerollAlienChancesDialog, e);
  CastleRerollAlienChancesDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    s.ButtonHelper.initButtons([this.dialogDisp.btn_close], c.ClickFeedbackButton, 1);
  };
  CastleRerollAlienChancesDialog.prototype.onClick = function (t) {
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
      }
    }
  };
  CastleRerollAlienChancesDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateRewards();
    this.chanceList.onShow();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.LocalizedTextVO("dialog_dethrone_chances_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_dethrone_chances_subtitle"));
  };
  CastleRerollAlienChancesDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.chanceList.onHide();
  };
  CastleRerollAlienChancesDialog.prototype.updateRewards = function () {
    if (!this.chanceList) {
      this.chanceList = new l.CastleRerollAlienChanceDialogList(this.dialogDisp);
      this.chanceList.update();
    }
  };
  CastleRerollAlienChancesDialog.NAME = "CastleRerollAlienChances";
  return CastleRerollAlienChancesDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleRerollAlienChancesDialog = r;
var l = require("./4183.js");
var c = require("./36.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");