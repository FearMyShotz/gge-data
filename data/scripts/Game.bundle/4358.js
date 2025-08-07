Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./1092.js");
var u = function (e) {
  function CastleAllianceAlienInvasionHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceAlienInvasionHighscoreDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleAllianceAlienInvasionHighscoreDialog, e);
  CastleAllianceAlienInvasionHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_header.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.gotoAndStop(3);
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_alienInvasion_nobilityPoints";
  };
  CastleAllianceAlienInvasionHighscoreDialog.prototype.showLoaded = function (t = null) {
    if (!this.eventVO) {
      this.hide();
    }
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceAlienInvasionHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_alliance_highscore";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleGenericAllianceHighscoreDialog.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionHighscoreDialog.prototype.onGetHighscoreData = function (t) {
    var i = r.int(this.eventVO.leagueLevels(t.leagueId)[0]);
    var n = r.int(this.eventVO.leagueLevels(t.leagueId)[1]);
    if (this.dialogProperties.highscoreType == a.HighscoreConst.ALLIANCE_ALIEN_INVASION_ALLIANCE || this.dialogProperties.highscoreType == a.HighscoreConst.ALLIANCE_RED_ALIEN_INVASION_ALLIANCE) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new s.LocalizedTextVO("dialog_highscore_searchAlliance", [i])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new s.LocalizedTextVO("levelrange_placeholder", [i, n])).autoFitToBounds = true;
    }
    e.prototype.onGetHighscoreData.call(this, t);
  };
  CastleAllianceAlienInvasionHighscoreDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
      this.destroy();
    }
  };
  Object.defineProperty(CastleAllianceAlienInvasionHighscoreDialog.prototype, "eventVO", {
    get: function () {
      return l.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionHighscoreDialog.NAME = "CastleAllianceAlienInvasionEventHighscore";
  CastleAllianceAlienInvasionHighscoreDialog.ASSET_NAME = "CastleGenericAllianceHighscore";
  return CastleAllianceAlienInvasionHighscoreDialog;
}(c.CastleGenericAllianceHighscoreDialog);
exports.CastleAllianceAlienInvasionHighscoreDialog = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");