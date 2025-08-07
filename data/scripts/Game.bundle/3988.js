Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./842.js");
var r = require("./312.js");
var l = require("./32.js");
var c = require("./4.js");
var u = require("./3989.js");
var d = function (e) {
  function StatusIconAllianceAction(t = a.int(g.ACastleStatusIcon.PRIORITY_LOW)) {
    var i = e.call(this, "Icon_AllianceHelpRequest", "mc_count.txt_label", new o.LocalizedNumberVO(0), t) || this;
    i.setTooltip("dialog_allianceActivity_answerRequests_tooltip");
    return i;
  }
  n.__extends(StatusIconAllianceAction, e);
  StatusIconAllianceAction.prototype.addEventListenerForVisibility = function () {
    e.prototype.addEventListenerForVisibility.call(this);
    this.controller.addEventListener(l.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    c.CastleModel.allianceHelpRequestData.addEventListener(r.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestDataUpdata));
    c.CastleModel.allianceGiftData.addEventListener(s.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onRequestDataUpdata));
  };
  StatusIconAllianceAction.prototype.removeEventListenerForVisibility = function () {
    this.controller.removeEventListener(l.CastleUserDataEvent.ALLIANCE_STATUS_CHANGED, this.bindFunction(this.onAllianceStatusChanged));
    c.CastleModel.allianceHelpRequestData.removeEventListener(r.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onRequestDataUpdata));
    c.CastleModel.allianceGiftData.removeEventListener(s.CastleAllianceGiftEvent.DATA_UPDATED, this.bindFunction(this.onRequestDataUpdata));
    e.prototype.removeEventListenerForVisibility.call(this);
  };
  StatusIconAllianceAction.prototype.setVisibilityLoaded = function () {
    if (c.CastleModel.userData.isInAlliance && c.CastleModel.allianceHelpRequestData.visibleRequests.length > 0 || c.CastleModel.allianceGiftData.hasGifts(c.CastleModel.userData.level)) {
      this.show();
    } else {
      this.hide();
    }
  };
  StatusIconAllianceAction.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    if (c.CastleModel.allianceHelpRequestData.clickAbleRequestCount > 0 || c.CastleModel.allianceGiftData.hasGifts(c.CastleModel.userData.level)) {
      this.iconDisp.mc_count.visible = true;
      var i = a.int(c.CastleModel.allianceHelpRequestData.clickAbleRequestCount);
      var n = a.int(c.CastleModel.allianceGiftData.giftCount);
      this.itxt_label.textContentVO.numberValue = i + n;
      this.itxt_label.autoFitToBounds = true;
    } else {
      this.iconDisp.mc_count.visible = false;
    }
  };
  StatusIconAllianceAction.prototype.onClick = function () {
    e.prototype.onClick.call(this);
    var t = new u.CastleAllianceActionOverviewDialogProperties(h.CastleAllianceActionOverviewDialog.SUBLAYER_HELP_REQUEST);
    if (c.CastleModel.allianceGiftData.hasGifts(c.CastleModel.userData.level)) {
      t.layerToOpen = h.CastleAllianceActionOverviewDialog.SUBLAYER_GIFT;
    }
    p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleAllianceActionOverviewDialog, t);
  };
  StatusIconAllianceAction.prototype.onRequestDataUpdata = function (e) {
    this.setVisibility();
  };
  StatusIconAllianceAction.prototype.onAllianceStatusChanged = function (e) {
    this.setVisibility();
  };
  return StatusIconAllianceAction;
}(require("./305.js").ACastleLabeledStatusIcon);
exports.StatusIconAllianceAction = d;
var p = require("./9.js");
var h = require("./3990.js");
var g = require("./109.js");