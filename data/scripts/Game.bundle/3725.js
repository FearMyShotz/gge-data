Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./17.js");
var l = require("./11.js");
var c = require("./287.js");
var u = require("./13.js");
var d = require("./8.js");
var p = require("./20.js");
var h = require("./2.js");
var g = require("./1773.js");
var C = function (e) {
  function EventDifficultyConfirmDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, EventDifficultyConfirmDialog.NAME) || this;
  }
  n.__extends(EventDifficultyConfirmDialog, e);
  EventDifficultyConfirmDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    d.ButtonHelper.initButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no], p.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_difficultyScaling_confirmDifficulty_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_confirmDifficulty_title")));
  };
  EventDifficultyConfirmDialog.prototype.applyPropertiesLoaded = function (e = null) {
    c.DifficultyScalingHelper.addDifficultyIcon(this.dialogDisp.mc_icon0, this.dialogProperties.difficultyVO, 60, 60, null);
    c.DifficultyScalingHelper.addDifficultyIcon(this.dialogDisp.mc_icon1, this.dialogProperties.difficultyVO, 60, 60, null);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_difficulty, new a.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId(this.dialogProperties.difficultyVO.name_textID))).autoFitToBounds = true;
  };
  EventDifficultyConfirmDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_yes:
        s.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID).openEventDialogAfterNewParse = true;
        h.BasicModel.smartfoxClient.sendCommandVO(new g.C2SSelectEventDifficultyVO(this.dialogProperties.eventID, this.dialogProperties.difficultyVO.difficultyID, this.dialogProperties.c2Unlock));
        r.CastleLayoutManager.getInstance().hideAllDialogs();
        break;
      case this.dialogDisp.btn_no:
        this.hide();
    }
  };
  Object.defineProperty(EventDifficultyConfirmDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EventDifficultyConfirmDialog.__initialize_static_members = function () {
    EventDifficultyConfirmDialog.NAME = "EventDifficultyConfirm";
  };
  return EventDifficultyConfirmDialog;
}(l.CastleExternalDialog);
exports.EventDifficultyConfirmDialog = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();