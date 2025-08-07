Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./4.js");
var s = require("./8.js");
var r = require("./1.js");
var l = require("./650.js");
var c = require("./36.js");
var u = require("./403.js");
var d = require("./548.js");
var p = require("./9.js");
var h = require("./2.js");
var g = require("./1064.js");
var C = function (e) {
  function SeasonLeagueBuyPassConfirmWithSeasonOptionDialog() {
    return e.call(this, SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.NAME) || this;
  }
  n.__extends(SeasonLeagueBuyPassConfirmWithSeasonOptionDialog, e);
  SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    s.ButtonHelper.initButtons([this.dialogDisp.btn_buySeason], c.ClickFeedbackButton);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_season, new o.LocalizedTextVO("dialog_seasonLeague_seasonPass_info_copy"));
  };
  SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    h.BasicModel.smartfoxClient.sendCommandVO(new g.C2SGetSeasonPassPriceInfoEventVO());
  };
  SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype.onClick = function (t) {
    if (s.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.dialogDisp.btn_buySeason:
          p.CastleDialogHandler.getInstance().registerDialogs(d.SeasonLeagueBuyPassConfirmDialog, new u.SeasonLeagueBuyPassConfirmDialogProperties(new l.CollectableItemSeasonLeagueSeasonPassVO(), a.CastleModel.seasonLeagueData.getCurrentSeasonPassCostWithSale(), this.seasonPassSale, a.CastleModel.seasonLeagueData.server.promotionId, this.activeEventID, this.dialogProps.instanceID));
          this.hide();
      }
    }
  };
  Object.defineProperty(SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype, "seasonPassSale", {
    get: function () {
      return Math.max(a.CastleModel.seasonLeagueData.server.seasonPassDiscount, a.CastleModel.seasonLeagueData.currentSetting.seasonPassFullDiscount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.prototype, "activeEventID", {
    get: function () {
      if (this.dialogProps.eventID > 0) {
        return this.dialogProps.eventID;
      } else if (a.CastleModel.seasonLeagueData.isAnySeasonEventActive()) {
        return a.CastleModel.seasonLeagueData.getActiveSeasonEventVO().eventId;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueBuyPassConfirmWithSeasonOptionDialog.NAME = "SeasonLeaguePassBuyConfirmWithSeasonOption";
  return SeasonLeagueBuyPassConfirmWithSeasonOptionDialog;
}(d.SeasonLeagueBuyPassConfirmDialog);
exports.SeasonLeagueBuyPassConfirmWithSeasonOptionDialog = C;
r.classImplementsInterfaces(C, "ICollectableRendererList");