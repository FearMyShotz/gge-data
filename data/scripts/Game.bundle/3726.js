Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./4.js");
var r = require("./17.js");
var l = require("./11.js");
var c = createjs.Point;
var u = require("./13.js");
var d = require("./25.js");
var p = require("./19.js");
var h = require("./8.js");
var g = require("./20.js");
var C = require("./67.js");
var _ = require("./2.js");
var m = require("./1773.js");
var f = require("./9.js");
var O = require("./3727.js");
var E = require("./1774.js");
var y = require("./287.js");
var b = function (e) {
  function EventDifficultyConfirmRewardsDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, EventDifficultyConfirmRewardsDialog.NAME) || this;
  }
  n.__extends(EventDifficultyConfirmRewardsDialog, e);
  EventDifficultyConfirmRewardsDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_yes, this.dialogDisp.btn_no, this.dialogDisp.bnt_info], g.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.LocalizedTextVO("dialog_difficultyScaling_confirmClassic_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_difficultyScaling_confirmClassic_title")));
  };
  EventDifficultyConfirmRewardsDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.updateEffectList();
  };
  EventDifficultyConfirmRewardsDialog.prototype.updateEffectList = function () {
    d.CollectableRenderHelper.displayMultipleItemsComplete(this, new C.CollectableRenderClipsList(this.dialogDisp, "mc_item").addItemMcs("mc_item").addInfoBtns("parent.btn_info"), this.dialogProperties.rewards, new p.CollectableRenderOptions(p.CollectableRenderOptions.SET_DEFAULT, new c(60, 60)));
  };
  EventDifficultyConfirmRewardsDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_yes:
        s.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID).openEventDialogAfterNewParse = true;
        _.BasicModel.smartfoxClient.sendCommandVO(new m.C2SSelectEventDifficultyVO(this.dialogProperties.eventID, 0, false));
        r.CastleLayoutManager.getInstance().hideAllDialogs();
        break;
      case this.dialogDisp.btn_no:
        this.hide();
        break;
      case this.dialogDisp.bnt_info:
        f.CastleDialogHandler.getInstance().registerDialogs(O.DifficultyScalingRewardOverviewDialog, new E.EventDifficultyRewardsOverviewDialogProperties(null, y.DifficultyScalingHelper.getSinglePlayerScoreEvent(this.dialogProperties.eventID), y.DifficultyScalingHelper.getAllianceScoreEvent(this.dialogProperties.eventID)));
    }
  };
  Object.defineProperty(EventDifficultyConfirmRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  EventDifficultyConfirmRewardsDialog.__initialize_static_members = function () {
    EventDifficultyConfirmRewardsDialog.NAME = "EventDifficultyConfirmRewards";
  };
  return EventDifficultyConfirmRewardsDialog;
}(l.CastleExternalDialog);
exports.EventDifficultyConfirmRewardsDialog = b;
o.classImplementsInterfaces(b, "ICollectableRendererList");
b.__initialize_static_members();