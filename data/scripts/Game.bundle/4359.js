Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./8.js");
var r = require("./466.js");
var l = require("./330.js");
var c = require("./1892.js");
var u = function (e) {
  function CastleAllianceAlienInvasionEventDialogPlayer(t) {
    return e.call(this, t, false) || this;
  }
  n.__extends(CastleAllianceAlienInvasionEventDialogPlayer, e);
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.showHelp = function () {
    d.CastleDialogSubLayer.dialogHandler.showHelper("", a.Localize.text("help_" + this.sublayerProperties.textIDType + "Alliance_instructions"));
  };
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (!this._seasonLeague || this._seasonLeague.eventId != this.eventVO.eventId) {
      if (this._seasonLeague) {
        this._seasonLeague.destroy();
      }
      this._seasonLeague = new g.SeasonLeagueEventElementComponent(this.subLayerDisp.mc_seasonLeague, this.eventVO.eventId);
    }
    this._seasonLeague.onShow();
    this.subLayerDisp.btn_highscore.toolTipText = "dialog_" + this.sublayerProperties.textIDType + "_singleScore_tooltip";
    this.subLayerDisp.mc_seasonLeague.visible = false;
  };
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.hide = function () {
    this._seasonLeague.onHide();
    e.prototype.hide.call(this);
  };
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.onClick = function (e) {
    if (s.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.subLayerDisp.btn_highscore:
          d.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(p.CastleAlienInvasionHighscoreDialog, new r.CastleGenericHighscoreDialogProperties(this.sublayerProperties.highscorePlayer, this.sublayerLeagueTypeEventVO.numberOfLeagues, this.sublayerLeagueTypeEventVO.leagueID, this.sublayerLeagueTypeEventVO.ownRank, -1, this.sublayerProperties.eventId));
      }
    }
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "sublayerLeagueTypeEventVO", {
    get: function () {
      return this.eventVO.singleEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "sublayerLeagueTypeEventVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "rewards", {
    get: function () {
      return this.eventVO.singleEventVO.rewardLists;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "textIDType", {
    get: function () {
      return this.sublayerProperties.textIDType;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "textIDType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "scorebarAssetClassName", {
    get: function () {
      return "Scorebar_Player";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scorebarAssetClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogPlayer.prototype, "scoreIcon", {
    get: function () {
      var e = new Library.CastleInterfaceElements_Icons.Icon_Fame_Large();
      e.toolTipText = "dialog_allianceFame_yourPoints";
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scoreIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogPlayer.prototype.onClickRewardOverview = function () {
    d.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(this.sublayerProperties.rewardListDialogClassName, new l.GenericEventInfoListProperties(this.sublayerProperties.eventId, h.AllianceAndPlayerPointEventRewardListDialog.TAB_PLAYER));
  };
  return CastleAllianceAlienInvasionEventDialogPlayer;
}(c.CastleAllianceAlienInvasionEventDialogSublayer);
exports.CastleAllianceAlienInvasionEventDialogPlayer = u;
var d = require("./35.js");
var p = require("./4360.js");
var h = require("./332.js");
var g = require("./656.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "ISublayer");