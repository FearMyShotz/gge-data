Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./8.js");
var u = require("./11.js");
var d = require("./3517.js");
var p = require("./36.js");
var h = require("./137.js");
var g = function (e) {
  function CastleTempServerWelcomeDialog() {
    var t = this;
    t.pages = 2;
    t._currentPageIndex = -1;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleTempServerWelcomeDialog.NAME) || this;
  }
  n.__extends(CastleTempServerWelcomeDialog, e);
  CastleTempServerWelcomeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_close, this.dialogDisp.btn_left, this.dialogDisp.btn_right], p.ClickFeedbackButton);
  };
  CastleTempServerWelcomeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_tempServer_start_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_ok.txt_value, new s.LocalizedTextVO("dialog_tempServer_welcomePopup_startButton"));
    this.setPageIndex(0);
    this.dialogDisp.mc_teaser.gotoAndStop(h.TempServerHelper.getAssetFrame());
    this._itemList.onShow();
  };
  CastleTempServerWelcomeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
        break;
      case this.dialogDisp.btn_left:
        this.changePage(-1);
        break;
      case this.dialogDisp.btn_right:
        this.changePage(1);
    }
  };
  CastleTempServerWelcomeDialog.prototype.changePage = function (e) {
    if (this._currentPageIndex + e >= this.pages) {
      this.setPageIndex(0);
    } else if (this._currentPageIndex + e < 0) {
      this.setPageIndex(this.pages - 1);
    } else {
      this.setPageIndex(this._currentPageIndex + e);
    }
  };
  CastleTempServerWelcomeDialog.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this._itemList) {
      this._itemList.onHide();
    }
  };
  CastleTempServerWelcomeDialog.prototype.updateItems = function () {
    this._itemList ||= new d.TempServerWelcomeDialogList(this.dialogDisp);
    this._itemList.update(this._currentPageIndex);
  };
  CastleTempServerWelcomeDialog.prototype.setPageIndex = function (e) {
    if (this._currentPageIndex != e) {
      var t = [a.Localize.text("dialog_tempServer_welcomePopup_pageCounter", [e + 1, this.pages])];
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_tempServer_welcomePopup_pageHeader_" + (e + 1), t));
      this._currentPageIndex = e;
      this.updateItems();
    }
  };
  CastleTempServerWelcomeDialog.NAME = "CastleTempServerWelcome";
  return CastleTempServerWelcomeDialog;
}(u.CastleExternalDialog);
exports.CastleTempServerWelcomeDialog = g;
o.classImplementsInterfaces(g, "ICollectableRendererList");