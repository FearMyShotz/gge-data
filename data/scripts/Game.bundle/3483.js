Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./31.js");
var c = require("./19.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./8.js");
var h = require("./11.js");
var g = createjs.Point;
var C = function (e) {
  function SeasonLeagueDailyRewardDialog() {
    return e.call(this, SeasonLeagueDailyRewardDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueDailyRewardDialog, e);
  SeasonLeagueDailyRewardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    p.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok], m.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_medalPayout_header"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_multiReward.mc_player.txt_title, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("forYou"))).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_multiReward.mc_alliance.txt_title, new r.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("forYourAlliance"))).autoFitToBounds = true;
  };
  SeasonLeagueDailyRewardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateText();
    this.updateReward();
  };
  SeasonLeagueDailyRewardDialog.prototype.updateText = function () {
    var e = d.CastleModel.specialEventData.createEventVOByEventID(this.dialogProperties.eventId);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(this.dialogProperties.allianceRank > 0 ? "dialog_seasonLeague_medalPayoutAlliance_copy" : "dialog_seasonLeague_medalPayout_copy", [e ? a.Localize.text(e.eventBuildingNameId) : "-", this.dialogProperties.rank, this.dialogProperties.allianceRank])).autoFitToBounds = true;
  };
  SeasonLeagueDailyRewardDialog.prototype.updateReward = function () {
    this.destroyCollectableRenderList();
    if (this.dialogProperties.allianceReward) {
      this.dialogDisp.mc_singleReward.visible = false;
      this.dialogDisp.mc_multiReward.visible = true;
      this.displayReward(this.dialogDisp.mc_multiReward.mc_player, this.dialogProperties.reward);
      this.displayReward(this.dialogDisp.mc_multiReward.mc_alliance, this.dialogProperties.allianceReward);
    } else {
      this.dialogDisp.mc_singleReward.visible = true;
      this.dialogDisp.mc_multiReward.visible = false;
      this.displayReward(this.dialogDisp.mc_singleReward, this.dialogProperties.reward);
    }
  };
  SeasonLeagueDailyRewardDialog.prototype.displayReward = function (e, t) {
    _.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new l.CollectableRenderClips(e.mc_icon).addIconMc(e.mc_icon).addTextfield(e.txt_text), t, new c.CollectableRenderOptions(c.CollectableRenderOptions.SET_DEFAULT, new g(95, 60)));
  };
  SeasonLeagueDailyRewardDialog.prototype.onClick = function (t) {
    if (p.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(SeasonLeagueDailyRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueDailyRewardDialog.NAME = "SeasonLeagueDailyReward_Alliance";
  return SeasonLeagueDailyRewardDialog;
}(h.CastleExternalDialog);
exports.SeasonLeagueDailyRewardDialog = C;
var _ = require("./25.js");
var m = require("./36.js");
o.classImplementsInterfaces(C, "ICollectableRendererList");