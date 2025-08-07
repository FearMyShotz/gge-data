Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./279.js");
var r = require("./26.js");
var l = require("./4.js");
var c = require("./8.js");
var u = require("./11.js");
var d = require("./466.js");
var p = function (e) {
  function CastleFactionInvasionEventHighscoreDialog() {
    CONSTRUCTOR_HACK;
    return e.call(this, CastleFactionInvasionEventHighscoreDialog.NAME) || this;
  }
  n.__extends(CastleFactionInvasionEventHighscoreDialog, e);
  CastleFactionInvasionEventHighscoreDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_ok]);
    this.dialogDisp.tab_red.toolTipText = "dialog_berimondInvasion_rankings_red_header";
    this.dialogDisp.tab_blue.toolTipText = "dialog_berimondInvasion_rankings_blue_header";
    this.dialogDisp.tab_alliance.toolTipText = "dialog_berimondInvasion_rankings_alliance_header";
    this.dialogDisp.sublayer_blue.mc_scoreIcon.toolTipText = "dialog_berimondInvasion_reputation_blue";
    this.dialogDisp.sublayer_red.mc_scoreIcon.toolTipText = "dialog_berimondInvasion_reputation_red";
    this.sublayerSwitcher = new s.SublayerSwitcher(this.bindFunction(this.createProperties));
    this.sublayerSwitcher.add(CastleFactionInvasionEventHighscoreDialog.TAB_BLUE, this.dialogDisp.tab_blue, new C.CastleFactionInvasionEventHighscoreFactionSublayer(this.dialogDisp.sublayer_blue, "dialog_berimondInvasion_rankings_blue_header", this.createProperties(CastleFactionInvasionEventHighscoreDialog.TAB_BLUE), true));
    this.sublayerSwitcher.add(CastleFactionInvasionEventHighscoreDialog.TAB_RED, this.dialogDisp.tab_red, new C.CastleFactionInvasionEventHighscoreFactionSublayer(this.dialogDisp.sublayer_red, "dialog_berimondInvasion_rankings_red_header", this.createProperties(CastleFactionInvasionEventHighscoreDialog.TAB_RED), false));
    this.sublayerSwitcher.add(CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE, this.dialogDisp.tab_alliance, new g.CastleFactionInvasionEventHighscoreAllianceSublayer(this.dialogDisp.sublayer_alliance, "dialog_berimondInvasion_rankings_alliance_header", this.createProperties(CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE)));
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.sublayerSwitcher.switchTo(this.dialogProperties.tabID);
    this.sublayerSwitcher.show();
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.sublayerSwitcher.hide();
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.addEventListenerOnShow = function () {
    l.CastleModel.specialEventData.addEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.onEventRemoved = function (e) {
    if (e.specialEventVO.eventId == this.dialogProperties.eventID) {
      this.hide();
    }
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.removeEventListenerOnHide = function () {
    l.CastleModel.specialEventData.removeEventListener(r.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (c.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          this.showHelp();
      }
    }
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.showHelp = function () {
    h.CastleDialogHandler.getInstance().showHelper("", a.Localize.text("help_highscore_berimondInvasion"));
  };
  CastleFactionInvasionEventHighscoreDialog.prototype.createProperties = function (e) {
    var t;
    var i;
    switch (e) {
      case CastleFactionInvasionEventHighscoreDialog.TAB_BLUE:
        i = this.dialogProperties.eventVO.blueEventVO;
        t = new d.CastleGenericHighscoreDialogProperties(54, i.numberOfLeagues, i.leagueID, i.ownRank);
        break;
      case CastleFactionInvasionEventHighscoreDialog.TAB_RED:
        i = this.dialogProperties.eventVO.redEventVO;
        t = new d.CastleGenericHighscoreDialogProperties(55, i.numberOfLeagues, i.leagueID, i.ownRank);
        break;
      case CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE:
        i = this.dialogProperties.eventVO.allianceEventVO;
        t = new d.CastleGenericHighscoreDialogProperties(56, i.numberOfLeagues, i.leagueID, i.ownRank);
    }
    return t;
  };
  Object.defineProperty(CastleFactionInvasionEventHighscoreDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleFactionInvasionEventHighscoreDialog.__initialize_static_members = function () {
    CastleFactionInvasionEventHighscoreDialog.NAME = "CastleFactionInvasionEventHighscore";
    CastleFactionInvasionEventHighscoreDialog.TAB_RED = 1;
    CastleFactionInvasionEventHighscoreDialog.TAB_BLUE = 2;
    CastleFactionInvasionEventHighscoreDialog.TAB_ALLIANCE = 3;
  };
  return CastleFactionInvasionEventHighscoreDialog;
}(u.CastleExternalDialog);
exports.CastleFactionInvasionEventHighscoreDialog = p;
var h = require("./9.js");
var g = require("./3408.js");
var C = require("./3411.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");
p.__initialize_static_members();