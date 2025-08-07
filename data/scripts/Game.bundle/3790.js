Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./26.js");
var r = require("./4.js");
var l = require("./9.js");
var c = require("./20.js");
var u = require("./1778.js");
var d = require("./1779.js");
var p = require("./3796.js");
var h = require("./8.js");
var g = require("./11.js");
var C = require("./1780.js");
var _ = require("./1781.js");
var m = function (e) {
  function AGlobalLeaderBoardDialog(t) {
    return e.call(this, t) || this;
  }
  n.__extends(AGlobalLeaderBoardDialog, e);
  AGlobalLeaderBoardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    h.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_rewards], c.ClickFeedbackButtonHover);
    this._globalLeaderBoardComponent = new d.GlobalLeaderBoardComponent(this.dialogDisp, this.getListItemClass(), this.getDefaultSearchString());
  };
  AGlobalLeaderBoardDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._globalLeaderBoardComponent.init(this.listType, new p.GlobalLeaderBoardLeagueComponent(this.dialogDisp, this.eventID));
    this._globalLeaderBoardComponent.onShow();
    this._globalLeaderBoardComponent.openRewardDialogSignal.add(this.bindFunction(this.showRewards));
    r.CastleModel.specialEventData.addEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  };
  AGlobalLeaderBoardDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._globalLeaderBoardComponent) {
      this._globalLeaderBoardComponent.onHide();
      this._globalLeaderBoardComponent.openRewardDialogSignal.removeAll();
    }
    r.CastleModel.specialEventData.removeEventListener(s.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
  };
  AGlobalLeaderBoardDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.eventID) {
      this.hide();
    }
  };
  AGlobalLeaderBoardDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this.showHelp();
    }
  };
  AGlobalLeaderBoardDialog.prototype.showHelp = function () {
    l.CastleDialogHandler.getInstance().showHelper("", a.Localize.text(this.helpTextId));
  };
  AGlobalLeaderBoardDialog.prototype.showRewards = function (e = -1) {
    l.CastleDialogHandler.getInstance().registerDefaultDialogs(_.GlobalLeaderboardRankingRankingRewardsDialog, new C.DonationRankingRewardsDialogProperties(this.rewardDialogTextID, this.getGlobalLeaderBoardRewards(e)));
  };
  AGlobalLeaderBoardDialog.prototype.getListItemClass = function () {
    return u.DefaultGlobalLeaderBoardItem;
  };
  AGlobalLeaderBoardDialog.prototype.getDefaultSearchString = function () {
    return "dialog_highscore_name_alliance_search";
  };
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "rewardDialogTextID", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  AGlobalLeaderBoardDialog.prototype.getGlobalLeaderBoardRewards = function (e = -1) {
    return [];
  };
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "eventID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "listType", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AGlobalLeaderBoardDialog.prototype, "leagueTypeID", {
    get: function () {
      return -1;
    },
    enumerable: true,
    configurable: true
  });
  return AGlobalLeaderBoardDialog;
}(g.CastleExternalDialog);
exports.AGlobalLeaderBoardDialog = m;
o.classImplementsInterfaces(m, "ICollectableRendererList");