Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function FactionInvasionEventTopXScorebars(e, t) {
    this.NUM_THRESHOLD_REWARDS = 0;
    this.NUM_TOPX_REWARDS = 3;
    this._eventVO = t;
    this._scorebars = e;
  }
  FactionInvasionEventTopXScorebars.prototype.update = function () {
    var e = this.redFactionEventVO;
    var t = this.blueFactionEventVO;
    this.scoreBarRed.update(new r.CastleScoreBarProgressVO(e.ownPoints, e.ownRank, e.pointThresholds, e.topX));
    this.scoreBarBlue.update(new r.CastleScoreBarProgressVO(t.ownPoints, t.ownRank, t.pointThresholds, t.topX));
  };
  FactionInvasionEventTopXScorebars.prototype.tooltipValues = function (e) {
    return e.topX;
  };
  FactionInvasionEventTopXScorebars.prototype.levelLabels = function (e) {
    var t = [];
    for (var i = 0; i < e.topX.length; i++) {
      t.push(s.Localize.text("Ranking_TopX", [e.topX[i]]));
    }
    t.push(s.Localize.text("Ranking_Winner"));
    return t;
  };
  Object.defineProperty(FactionInvasionEventTopXScorebars.prototype, "redFactionEventVO", {
    get: function () {
      return this._eventVO.singleEventVO(false);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FactionInvasionEventTopXScorebars.prototype, "blueFactionEventVO", {
    get: function () {
      return this._eventVO.singleEventVO(true);
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionEventTopXScorebars.prototype.show = function () {
    var e = this.redFactionEventVO;
    var t = this.blueFactionEventVO;
    var i = new o.CastleFactionInvasionEventTopXScoreBarProperties(e.rewardLists, "berimondInvasion_sp_red", this.tooltipValues(e), this.levelLabels(e), null, this.NUM_THRESHOLD_REWARDS, this.NUM_TOPX_REWARDS);
    var n = new o.CastleFactionInvasionEventTopXScoreBarProperties(t.rewardLists, "berimondInvasion_sp_blue", this.tooltipValues(t), this.levelLabels(t), null, this.NUM_THRESHOLD_REWARDS, this.NUM_TOPX_REWARDS);
    this.scoreBarRed = new a.CastleScoreBarComponent(this._scorebars.scorebar_red, i);
    this.scoreBarBlue = new a.CastleScoreBarComponent(this._scorebars.scorebar_blue, n);
  };
  FactionInvasionEventTopXScorebars.prototype.hide = function () {
    this.scoreBarRed.destroy();
    this.scoreBarBlue.destroy();
  };
  return FactionInvasionEventTopXScorebars;
}();
exports.FactionInvasionEventTopXScorebars = n;
var o = require("./3547.js");
var a = require("./331.js");
var s = require("./3.js");
var r = require("./251.js");