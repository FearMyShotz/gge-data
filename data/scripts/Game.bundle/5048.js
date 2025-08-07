Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./13.js");
var c = require("./4.js");
var u = require("./1105.js");
var d = require("./8.js");
var p = require("./11.js");
var h = require("./525.js");
var g = require("./425.js");
var C = function (e) {
  function CastleRerollAlienSuccessDialog() {
    return e.call(this, CastleRerollAlienSuccessDialog.NAME) || this;
  }
  n.__extends(CastleRerollAlienSuccessDialog, e);
  CastleRerollAlienSuccessDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_bookmark, this.dialogDisp.btn_spy], E.ClickFeedbackButton, 1);
  };
  CastleRerollAlienSuccessDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    if (this.isHardReroll) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_feedback_fortify_title")));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_feedback_fortify_desc"));
      this.dialogDisp.mc_icon.gotoAndStop(2);
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("dialog_feedback_exile_title")));
      this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new s.LocalizedTextVO("dialog_feedback_exile_desc"));
      this.dialogDisp.mc_icon.gotoAndStop(1);
    }
    this.textFieldManager.registerTextField(this.dialogDisp.btn_bookmark.txt_value, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("ringmenu_markLocation")));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_spy.txt_value, new r.TextVO(l.TextHelper.toUpperCaseLocaSafeTextId("ringmenu_spy_menu")));
    this.updateSpyButton();
  };
  CastleRerollAlienSuccessDialog.prototype.updateSpyButton = function () {
    var e = this.targetMapObject.ownerInfo.isLegend || u.MapObjectHelper.isLandmark(this.targetMapObject);
    d.ButtonHelper.enableButton(this.dialogDisp.btn_spy, c.CastleModel.spyData.getNumAvailableSpies(e) > 0);
  };
  CastleRerollAlienSuccessDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.dialogDisp.btn_spy) {
      this.updateSpyButton();
    }
  };
  CastleRerollAlienSuccessDialog.prototype.onClick = function (t) {
    if (d.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_bookmark:
          this.bookmarkTarget();
          break;
        case this.dialogDisp.btn_spy:
          this.spyTarget();
      }
    }
  };
  CastleRerollAlienSuccessDialog.prototype.bookmarkTarget = function () {
    o.CommandController.instance.executeCommand(_.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.targetMapObject);
    p.CastleExternalDialog.dialogHandler.registerDefaultDialogs(O.CastleWorldmapBookmarkSetDialog, new g.CastleWorldmapBookmarkSetDialogProperties(this.targetMapObject));
    this.hide();
  };
  CastleRerollAlienSuccessDialog.prototype.spyTarget = function () {
    o.CommandController.instance.executeCommand(_.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.targetMapObject);
    m.CastleDialogHandler.getInstance().registerDefaultDialogs(f.CastleSpyDialog, new h.CastleSpyDialogProperties(this.targetMapObject, f.CastleSpyDialog.TAB_SPY));
    this.hide();
  };
  Object.defineProperty(CastleRerollAlienSuccessDialog.prototype, "targetMapObject", {
    get: function () {
      return c.CastleModel.alienRerollData.requestWMO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRerollAlienSuccessDialog.prototype, "isHardReroll", {
    get: function () {
      return c.CastleModel.alienRerollData.requestRerollIsHard;
    },
    enumerable: true,
    configurable: true
  });
  CastleRerollAlienSuccessDialog.NAME = "CastleRerollAlienSuccess";
  return CastleRerollAlienSuccessDialog;
}(p.CastleExternalDialog);
exports.CastleRerollAlienSuccessDialog = C;
var _ = require("./29.js");
var m = require("./9.js");
var f = require("./443.js");
var O = require("./441.js");
var E = require("./36.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");