Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = function (e) {
  function OfficersSchoolDialog() {
    return e.call(this, OfficersSchoolDialog.NAME) || this;
  }
  n.__extends(OfficersSchoolDialog, e);
  OfficersSchoolDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    s.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_list, this.dialogDisp.btn_tab_unlocked]);
    s.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close], d.ClickFeedbackButton);
    this._subLayer = new Map();
    this._subLayer.set(OfficersSchoolDialog.TAB_MAIN, new c.OfficersSchoolDialogList(this.dialogDisp.sublayer_list));
    this._subLayer.set(OfficersSchoolDialog.TAB_UNLOCK, new u.OfficersSchoolDialogUnlock(this.dialogDisp.sublayer_unlocked));
    this.dialogDisp.btn_tab_list.toolTipText = "dialog_trainingProgram_prolongProgram_header";
    this.dialogDisp.btn_tab_unlocked.toolTipText = "dialog_trainingProgram_unitUnlock_header";
  };
  OfficersSchoolDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.changeCategory(OfficersSchoolDialog.TAB_MAIN);
  };
  OfficersSchoolDialog.prototype.changeCategory = function (t) {
    function updateButton(e, t) {
      e.gotoAndStop(t ? 2 : 1);
    }
    if (this._currentCategory != t) {
      e.prototype.changeCategory.call(this, t);
      this.showSublayer(this._subLayer.get(t), []);
      updateButton(this.dialogDisp.btn_tab_list, this._currentCategory == OfficersSchoolDialog.TAB_MAIN);
      updateButton(this.dialogDisp.btn_tab_unlocked, this._currentCategory == OfficersSchoolDialog.TAB_UNLOCK);
    }
  };
  OfficersSchoolDialog.prototype.onClick = function (t) {
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_tab_list:
          this.changeCategory(OfficersSchoolDialog.TAB_MAIN);
          break;
        case this.dialogDisp.btn_tab_unlocked:
          this.changeCategory(OfficersSchoolDialog.TAB_UNLOCK);
          break;
        case this.dialogDisp.btn_help:
          l.CastleExternalDialog.dialogHandler.showHelper("", a.Localize.text("dialog_trainingProgram_help_desc"));
      }
    }
  };
  OfficersSchoolDialog.NAME = "OfficersSchool";
  OfficersSchoolDialog.TAB_MAIN = "tab_main";
  OfficersSchoolDialog.TAB_UNLOCK = "tab_unlock";
  return OfficersSchoolDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.OfficersSchoolDialog = r;
var l = require("./11.js");
var c = require("./3076.js");
var u = require("./3082.js");
var d = require("./36.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");