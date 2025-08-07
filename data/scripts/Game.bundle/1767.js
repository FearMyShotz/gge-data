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
var u = require("./1092.js");
var d = function (e) {
  function CastleAllianceNomadInvasionHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAllianceNomadInvasionHighscoreDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleAllianceNomadInvasionHighscoreDialog, e);
  CastleAllianceNomadInvasionHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_header.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.gotoAndStop(4);
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_nomadInvasion_nomadPoints";
  };
  CastleAllianceNomadInvasionHighscoreDialog.prototype.showLoaded = function (t = null) {
    if (!CastleAllianceNomadInvasionHighscoreDialog.eventVO) {
      this.hide();
    }
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(CastleAllianceNomadInvasionHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_nomadInvasionAlliance_allianceScore";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleGenericAllianceHighscoreDialog.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionHighscoreDialog.prototype.onGetHighscoreData = function (t) {
    var i = l.int(CastleAllianceNomadInvasionHighscoreDialog.eventVO.leagueLevels(t.leagueId)[0]);
    var n = l.int(CastleAllianceNomadInvasionHighscoreDialog.eventVO.leagueLevels(t.leagueId)[1]);
    if (this.dialogProperties.highscoreType == s.HighscoreConst.ALLIANCE_NOMADINVASION_ALLIANCE) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO("dialog_highscore_searchAlliance", [i])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new r.LocalizedTextVO("levelrange_placeholder", [i, n])).autoFitToBounds = true;
    }
    e.prototype.onGetHighscoreData.call(this, t);
  };
  CastleAllianceNomadInvasionHighscoreDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
      this.hide();
      this.destroy();
    }
  };
  Object.defineProperty(CastleAllianceNomadInvasionHighscoreDialog, "eventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionHighscoreDialog.__initialize_static_members = function () {
    CastleAllianceNomadInvasionHighscoreDialog.NAME = "CastleAllianceNomadInvasionEventHighscore";
    CastleAllianceNomadInvasionHighscoreDialog.ASSET_NAME = "CastleGenericAllianceHighscore_D";
  };
  return CastleAllianceNomadInvasionHighscoreDialog;
}(u.CastleGenericAllianceHighscoreDialog);
exports.CastleAllianceNomadInvasionHighscoreDialog = d;
o.classImplementsInterfaces(d, "ICollectableRendererList");
d.__initialize_static_members();