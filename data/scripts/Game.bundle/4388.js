Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./4.js");
var u = require("./835.js");
var d = function (e) {
  function CastleBeggingKnightsHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleBeggingKnightsHighscoreDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleBeggingKnightsHighscoreDialog, e);
  CastleBeggingKnightsHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_header.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_BeggingKnights_nobilityPoints";
  };
  CastleBeggingKnightsHighscoreDialog.prototype.showLoaded = function (t = null) {
    this.updateEventVO();
    if (!this._eventVO) {
      this.hide();
    }
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(CastleBeggingKnightsHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_BeggingKnights_highscore";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleGenericHighscoreDialog.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleBeggingKnightsHighscoreDialog.prototype.onGetHighscoreData = function (t) {
    this.updateEventVO();
    var i = l.int(this._eventVO.leagueLevels(t.leagueId)[0]);
    var n = l.int(this._eventVO.leagueLevels(t.leagueId)[1]);
    if (n > s.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO("level_placeholder", [i])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO("levelrange_placeholder", [i, n])).autoFitToBounds = true;
    }
    e.prototype.onGetHighscoreData.call(this, t);
  };
  CastleBeggingKnightsHighscoreDialog.prototype.updateEventVO = function () {
    this._eventVO = c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
  };
  CastleBeggingKnightsHighscoreDialog.__initialize_static_members = function () {
    CastleBeggingKnightsHighscoreDialog.NAME = "CastleBeggingKnightsHighscore";
    CastleBeggingKnightsHighscoreDialog.ASSET_NAME = "CastleGenericHighscore_D";
  };
  return CastleBeggingKnightsHighscoreDialog;
}(u.CastleGenericHighscoreDialog);
exports.CastleBeggingKnightsHighscoreDialog = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();