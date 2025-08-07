Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./27.js");
var u = require("./1351.js");
var d = require("./8.js");
var p = function (e) {
  function CastleAllianceBookmarkSetTimeDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceBookmarkSetTimeDialog.NAME) || this;
  }
  n.__extends(CastleAllianceBookmarkSetTimeDialog, e);
  CastleAllianceBookmarkSetTimeDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.timeSelector = new u.TimeSelectionComponent(this.dialogDisp, "Bookmarks_alliance_setTime_minTime_tooltip", "Bookmarks_alliance_setTime_maxTime_tooltip");
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok, this.dialogDisp.btn_help]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    var i = c.CastleTimeStringHelper.getEventTimeString(s.AllianceConst.ALLIANCE_BOOKMARK_MAX_TIME_OFFSET);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new l.LocalizedTextVO("Bookmarks_alliance_setTime_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new l.LocalizedTextVO("Bookmarks_alliance_setTime_copy", [i]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_timeTitle, new l.LocalizedTextVO("Bookmarks_alliance_setTime_attackTime_copy")).verticalAlign = o.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_dateTitle, new l.LocalizedTextVO("Bookmarks_alliance_setTime_attackDay_copy"));
  };
  CastleAllianceBookmarkSetTimeDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.timeSelector.show(this.dialogProperties.preselectedTime, this.dialogProperties.minDelayInSeconds, this.dialogProperties.maxDelayInSeconds);
  };
  CastleAllianceBookmarkSetTimeDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.timeSelector.hide();
  };
  CastleAllianceBookmarkSetTimeDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.acceptCurrentEditTime();
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          h.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_bookmarks_alliance_setTime"));
      }
    }
  };
  CastleAllianceBookmarkSetTimeDialog.prototype.acceptCurrentEditTime = function () {
    if (this.dialogProperties.timeWasSetCallback) {
      this.dialogProperties.timeWasSetCallback(this.timeSelector.selectedTime);
    }
  };
  Object.defineProperty(CastleAllianceBookmarkSetTimeDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceBookmarkSetTimeDialog.__initialize_static_members = function () {
    CastleAllianceBookmarkSetTimeDialog.NAME = "CastleAllianceBookmarkSetTime";
  };
  return CastleAllianceBookmarkSetTimeDialog;
}(require("./11.js").CastleExternalDialog);
exports.CastleAllianceBookmarkSetTimeDialog = p;
var h = require("./9.js");
a.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();