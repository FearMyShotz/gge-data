Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = function (e) {
  function LongtermPointEventGlobalLeaderBoardDialog() {
    return e.call(this, LongtermPointEventGlobalLeaderBoardDialog.NAME) || this;
  }
  n.__extends(LongtermPointEventGlobalLeaderBoardDialog, e);
  LongtermPointEventGlobalLeaderBoardDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_longPointsEvent_pointRanking_tooltip"));
    this.dialogDisp.icon_ownPoints.toolTipText = "dialog_longPointsEvent_seasonalPoints";
  };
  Object.defineProperty(LongtermPointEventGlobalLeaderBoardDialog.prototype, "helpTextId", {
    get: function () {
      return "help_highscore_longPointsEvent";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongtermPointEventGlobalLeaderBoardDialog.prototype, "rewardDialogTextID", {
    get: function () {
      return "ranking_description_LTPE";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongtermPointEventGlobalLeaderBoardDialog.prototype, "eventID", {
    get: function () {
      return s.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LongtermPointEventGlobalLeaderBoardDialog.prototype, "listType", {
    get: function () {
      return a.HighscoreConst.LONG_TERM_POINT_EVENT;
    },
    enumerable: true,
    configurable: true
  });
  LongtermPointEventGlobalLeaderBoardDialog.NAME = "LongTermPointEventLeaderboard";
  return LongtermPointEventGlobalLeaderBoardDialog;
}(require("./3788.js").ScoreEventGlobalLeaderBoardDialog);
exports.LongtermPointEventGlobalLeaderBoardDialog = l;
o.classImplementsInterfaces(l, "ICollectableRendererList");