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
var u = require("./1091.js");
var d = function (e) {
  function CastleAllianceSamuraiInvasionHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceSamuraiInvasionHighscoreDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleAllianceSamuraiInvasionHighscoreDialog, e);
  CastleAllianceSamuraiInvasionHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_header.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.gotoAndStop(5);
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_samuraiInvasion_nobilityPoints";
  };
  CastleAllianceSamuraiInvasionHighscoreDialog.prototype.showLoaded = function (t = null) {
    this.updateEventVO();
    if (!this._eventVO) {
      this.hide();
    }
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_alliance_highscore";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleGenericAllianceHighscoreDialog.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionHighscoreDialog.prototype.onGetHighscoreData = function (t) {
    this.updateEventVO();
    var i = l.int(this._eventVO.leagueLevels(t.leagueId)[0]);
    var n = l.int(this._eventVO.leagueLevels(t.leagueId)[1]);
    if (this.dialogProperties.highscoreType == s.HighscoreConst.SAMURAI_ALLIANCE) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO("dialog_highscore_searchAlliance", [i])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO("levelrange_placeholder", [i, n])).autoFitToBounds = true;
    }
    e.prototype.onGetHighscoreData.call(this, t);
  };
  CastleAllianceSamuraiInvasionHighscoreDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
      this.destroy();
    }
  };
  CastleAllianceSamuraiInvasionHighscoreDialog.prototype.updateEventVO = function () {
    if (c.CastleModel.specialEventData.isEventActive(a.EventConst.EVENTTYPE_SAMURAI_INVASION)) {
      this._eventVO = c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_SAMURAI_INVASION);
    }
  };
  CastleAllianceSamuraiInvasionHighscoreDialog.__initialize_static_members = function () {
    CastleAllianceSamuraiInvasionHighscoreDialog.NAME = "CastleAllianceSamuraiInvasionEventHighscore";
    CastleAllianceSamuraiInvasionHighscoreDialog.ASSET_NAME = "CastleGenericAllianceHighscore";
  };
  return CastleAllianceSamuraiInvasionHighscoreDialog;
}(u.CastleGenericAllianceHighscoreDialog);
exports.CastleAllianceSamuraiInvasionHighscoreDialog = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();