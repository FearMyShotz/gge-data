Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./21.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./27.js");
var p = require("./815.js");
var h = require("./4381.js");
var g = createjs.Point;
var C = function (e) {
  function CastleArtifactEventDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleArtifactEventDialog.NAME) || this;
  }
  n.__extends(CastleArtifactEventDialog, e);
  CastleArtifactEventDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward, new s.LocalizedTextVO(o.GenericTextIds.VALUE_COLON, ["reward"]));
    this.itxt_speechBubble = this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new s.LocalizedTextVO(""));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new s.LocalizedTextVO(""));
    this.itxt_tip = this.textFieldManager.registerTextField(this.dialogDisp.txt_tip, new s.LocalizedTextVO(""));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new r.TextVO(""));
    this.itxt_speechBubble.autoFitToBounds = true;
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_buyPiece]);
    var i = new g(35, 55);
    this.centeredRewardComponent = new _.CastleCenteredRewardRendererListComponent(this.dialogDisp.mc_rewards, i);
    this.artifact = new f.ArtifactComponent(this.dialogDisp.mc_artifact);
  };
  CastleArtifactEventDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.updateRewards();
    this.updateArtifact();
    this.setTime();
    u.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastleArtifactEventDialog.prototype.onUpdateSpecialEvent = function (e) {
    this.setTime();
  };
  CastleArtifactEventDialog.prototype.onRemoveEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.hide();
    }
  };
  CastleArtifactEventDialog.prototype.onRefreshSpecialevent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventVO.eventId) {
      this.dialogProperties.eventVO = e.specialEventVO;
      this.updateArtifact();
      this.updateRewards();
    }
  };
  CastleArtifactEventDialog.prototype.updateArtifact = function () {
    this.dialogDisp.btn_buyPiece.visible = !this.dialogProperties.eventVO.hasAllParts;
    this.itxt_time.visible = !this.dialogProperties.eventVO.hasAllParts;
    this.dialogDisp.mc_time.toolTipText = null;
    if (this.dialogProperties.eventVO.hasAllParts) {
      this.itxt_speechBubble.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_bubble_done";
      this.itxt_desc.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_desc1_done";
      this.itxt_tip.textContentVO.textId = "";
    } else {
      this.itxt_speechBubble.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_bubble";
      this.itxt_desc.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_desc1";
      this.itxt_tip.textContentVO.textId = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_desc2";
    }
    this.dialogDisp.btn_buyPiece.toolTipText = "dialog_artifact_" + this.dialogProperties.eventVO.skinID + "_main_buyTooltip";
    this.itxt_tip.y = this.itxt_desc.y + this.itxt_desc.textHeight + 10;
    this.artifact.init(this.dialogProperties.eventVO);
  };
  CastleArtifactEventDialog.prototype.updateRewards = function () {
    var e = this.dialogProperties.eventVO.artifactReward;
    this.centeredRewardComponent.showRewards(e);
    for (var t = 0; t < CastleArtifactEventDialog.MAX_REWARD_UNITTYPES; t++) {
      this.dialogDisp.mc_rewards["item" + t].mc_received.visible = this.dialogProperties.eventVO.hasAllParts;
    }
  };
  CastleArtifactEventDialog.prototype.setTime = function () {
    if (!this.dialogProperties.eventVO.hasAllParts) {
      d.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_time.txt_time, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
      d.CastleTimeStringHelper.setEventTimeToolTip(this.dialogDisp.mc_time, this.dialogProperties.eventVO.remainingEventTimeInSeconds);
    }
  };
  CastleArtifactEventDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_buyPiece:
        m.CastleExternalDialog.dialogHandler.registerDefaultDialogs(O.CastleArtifactBuyPieceDialog, new h.CastleArtifactBuyPieceDialogProperties(this.dialogProperties.eventVO));
        break;
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleArtifactEventDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    u.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateSpecialEvent));
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onRefreshSpecialevent));
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.artifact.onHide();
  };
  Object.defineProperty(CastleArtifactEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleArtifactEventDialog.__initialize_static_members = function () {
    CastleArtifactEventDialog.NAME = "CastleArtifactEvent";
    CastleArtifactEventDialog.MAX_REWARD_UNITTYPES = 5;
  };
  return CastleArtifactEventDialog;
}(p.SkinnableDialog);
exports.CastleArtifactEventDialog = C;
var _ = require("./400.js");
var m = require("./11.js");
var f = require("./1749.js");
var O = require("./4382.js");
a.classImplementsInterfaces(C, "ICollectableRendererList");
C.__initialize_static_members();