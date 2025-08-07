Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./8.js");
var l = require("./823.js");
var c = require("./330.js");
var u = require("./1892.js");
var d = function (e) {
  function CastleAllianceAlienInvasionEventDialogAlliance(t) {
    return e.call(this, t, true) || this;
  }
  n.__extends(CastleAllianceAlienInvasionEventDialogAlliance, e);
  CastleAllianceAlienInvasionEventDialogAlliance.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    this.subLayerDisp.btn_highscore.toolTipText = "dialog_" + this.sublayerProperties.textIDType + "_allianceScore_tooltip";
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "descriptions", {
    get: function () {
      var e = [];
      for (var t = this.eventVO.allianceEventVO.rewardLists, i = 0; i < t.length; i++) {
        if (t[i].grantType == a.RewardConst.ALLIANCE) {
          e.push("dialog_" + this.sublayerProperties.textIDType + "Alliance_Treasury_tooltip");
        } else if (t[i].grantType == a.RewardConst.ALLIANCE_MEMBER) {
          e.push("dialog_" + this.sublayerProperties.textIDType + "Alliance_Members_tooltip");
        } else {
          e.push("forAllianceFundsAndMembers");
        }
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "descriptions").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogAlliance.prototype.showHelp = function () {
    p.CastleDialogSubLayer.dialogHandler.showHelper("", s.Localize.text("help_" + this.sublayerProperties.textIDType + "Alliance_instructions"));
  };
  CastleAllianceAlienInvasionEventDialogAlliance.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (r.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.subLayerDisp.btn_highscore:
          p.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(h.CastleAllianceAlienInvasionHighscoreDialog, new l.CastleGenericAllianceHighscoreDialogProperties(this.sublayerProperties.highscoreAlliance, this.sublayerLeagueTypeEventVO.numberOfLeagues, this.sublayerLeagueTypeEventVO.leagueID, this.sublayerLeagueTypeEventVO.ownRank, this.sublayerProperties.eventId));
      }
    }
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "sublayerLeagueTypeEventVO", {
    get: function () {
      return this.eventVO.allianceEventVO;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "sublayerLeagueTypeEventVO").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "rewards", {
    get: function () {
      return this.eventVO.allianceEventVO.rewardLists;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "textIDType", {
    get: function () {
      return this.sublayerProperties.textIDType + "Alliance";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "textIDType").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "scorebarAssetClassName", {
    get: function () {
      return "Scorebar_Alliance_V";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scorebarAssetClassName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogAlliance.prototype, "scoreIcon", {
    get: function () {
      var e = new Library.CastleInterfaceElements_Icons.Icon_Fame_Large();
      e.toolTipText = "dialog_allianceFame_needPoints";
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scoreIcon").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogAlliance.prototype.onClickRewardOverview = function () {
    p.CastleDialogSubLayer.dialogHandler.registerDefaultDialogs(this.sublayerProperties.rewardListDialogClassName, new c.GenericEventInfoListProperties(this.sublayerProperties.eventId, g.AllianceAndPlayerPointEventRewardListDialog.TAB_ALLIANCE));
  };
  return CastleAllianceAlienInvasionEventDialogAlliance;
}(u.CastleAllianceAlienInvasionEventDialogSublayer);
exports.CastleAllianceAlienInvasionEventDialogAlliance = d;
var p = require("./35.js");
var h = require("./4358.js");
var g = require("./332.js");
o.classImplementsInterfaces(d, "ICollectableRendererList", "ISublayer");