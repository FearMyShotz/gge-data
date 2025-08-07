Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./69.js");
var l = require("./210.js");
var c = require("./15.js");
var u = require("./4.js");
var d = require("./251.js");
var p = function (e) {
  function CastleAllianceAlienInvasionEventDialogSublayer(t, i) {
    var n = e.call(this, t) || this;
    n.initBasicButtons([n.subLayerDisp.btn_highscore]);
    n._isAlliance = i;
    return n;
  }
  n.__extends(CastleAllianceAlienInvasionEventDialogSublayer, e);
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    var i = new h.RewardsDialogScoreBarProperties(this.rewards, this.textIDType, this.toolTipValues, this.levelLabels, this.descriptions);
    var n = new (a.getDefinitionByName(this.sublayerProperties.scorbarBackgroundClassName))();
    this.scoreBar = new g.RewardsDialogScoreBarComponentExternal();
    this.scoreBar.load(this.subLayerDisp.mc_scoreBarContainer, this.bindFunction(this.onScorebarAssetLoaded), this.scorebarAssetClassName, this.scoreIcon, n, this.bindFunction(this.onClickRewardOverview), i);
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scorebarAssetClassName", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.onScorebarAssetLoaded = function () {
    this.onUpdatePoints();
    c.CastleBasicController.getInstance().addEventListener(l.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "scoreIcon", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.onClickRewardOverview = function () {
    throw new r.AbstractMethodError();
  };
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    if (this.scoreBar) {
      this.scoreBar.destroy();
    }
    c.CastleBasicController.getInstance().removeEventListener(l.CastleScoreEventEvent.UPDATE_POINTS, this.bindFunction(this.onUpdatePoints));
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "eventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(this.sublayerProperties.eventId);
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.onUpdatePoints = function (e = null) {
    this.updateProgressBars();
  };
  CastleAllianceAlienInvasionEventDialogSublayer.prototype.updateProgressBars = function () {
    var e = new d.CastleScoreBarProgressVO(this.sublayerLeagueTypeEventVO.ownPoints, this.sublayerLeagueTypeEventVO.ownRank, this.sublayerLeagueTypeEventVO.pointThresholds, this.sublayerLeagueTypeEventVO.topX, this.sublayerLeagueTypeEventVO.rewardsReceived, this.eventVO.isPlayerQualifiedForAllianceRewards(), this.eventVO.allianceRewardThresholdPoints());
    e.isAlliance = this._isAlliance;
    this.scoreBar.update(e);
  };
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "toolTipValues", {
    get: function () {
      return this.sublayerLeagueTypeEventVO.pointThresholds.concat(this.sublayerLeagueTypeEventVO.topX);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "levelLabels", {
    get: function () {
      var e = [];
      var t = 0;
      for (t = 0; t < this.sublayerLeagueTypeEventVO.pointThresholds.length; t++) {
        e.push(this.sublayerLeagueTypeEventVO.pointThresholds[t]);
      }
      for (t = 0; t < this.sublayerLeagueTypeEventVO.topX.length; t++) {
        e.push(s.Localize.text("Ranking_TopX", [this.sublayerLeagueTypeEventVO.topX[t]]));
      }
      e.push(s.Localize.text("Ranking_Winner"));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "descriptions", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "sublayerLeagueTypeEventVO", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "rewards", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "textIDType", {
    get: function () {
      throw new r.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceAlienInvasionEventDialogSublayer.prototype, "sublayerProperties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceAlienInvasionEventDialogSublayer;
}(require("./35.js").CastleDialogSubLayer);
exports.CastleAllianceAlienInvasionEventDialogSublayer = p;
var h = require("./464.js");
var g = require("./465.js");
o.classImplementsInterfaces(p, "ICollectableRendererList", "ISublayer");