Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./4.js");
var c = require("./833.js");
var u = function (e) {
  function CastleAlienInvasionHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleAlienInvasionHighscoreDialog.ASSET_NAME) || this;
  }
  n.__extends(CastleAlienInvasionHighscoreDialog, e);
  CastleAlienInvasionHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.dialogDisp.mc_header.gotoAndStop(2);
    this.dialogDisp.mc_scoreIcon.gotoAndStop(3);
    this.dialogDisp.mc_scoreIcon.toolTipText = "dialog_alienInvasion_nobilityPoints";
  };
  CastleAlienInvasionHighscoreDialog.prototype.showLoaded = function (t = null) {
    if (!this.eventVO) {
      this.hide();
    }
    e.prototype.showLoaded.call(this, t);
  };
  Object.defineProperty(CastleAlienInvasionHighscoreDialog.prototype, "helpTextId", {
    get: function () {
      return "help_BeggingKnights_highscore";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleGenericHighscoreDialog.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAlienInvasionHighscoreDialog.prototype.onGetHighscoreData = function (t) {
    var i = r.int(this.eventVO.leagueLevels(t.leagueId)[0]);
    var n = r.int(this.eventVO.leagueLevels(t.leagueId)[1]);
    if (n > a.PlayerConst.LEVEL_CAP) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new s.LocalizedTextVO(i != n ? "dialog_ranking_legendFilter" : "legendaryLevel_placeholder", [Math.max(i - a.PlayerConst.LEVEL_CAP, 1), n - a.PlayerConst.LEVEL_CAP])).autoFitToBounds = true;
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_leagueRange, new s.LocalizedTextVO("levelrange_placeholder", [i, n])).autoFitToBounds = true;
    }
    e.prototype.onGetHighscoreData.call(this, t);
  };
  CastleAlienInvasionHighscoreDialog.prototype.onRemoveSpecialEvent = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
      this.destroy();
    }
  };
  Object.defineProperty(CastleAlienInvasionHighscoreDialog.prototype, "eventVO", {
    get: function () {
      return l.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
    },
    enumerable: true,
    configurable: true
  });
  CastleAlienInvasionHighscoreDialog.__initialize_static_members = function () {
    CastleAlienInvasionHighscoreDialog.NAME = "CastleAlienInvasionEventHighscore";
    CastleAlienInvasionHighscoreDialog.ASSET_NAME = "CastleGenericHighscore_D";
  };
  return CastleAlienInvasionHighscoreDialog;
}(c.CastleGenericHighscoreDialog);
exports.CastleAlienInvasionHighscoreDialog = u;
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();