Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./57.js");
var c = require("./13.js");
var u = require("./4.js");
var d = require("./40.js");
var p = require("./8.js");
var h = function (e) {
  function SeasonLeagueMainDialogRankType(t) {
    var i = this;
    i._currentIndex = 0;
    i._onTypeChanged = new l.Signal();
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    p.ButtonHelper.initButtons([t.btn_left, t.btn_right], C.ClickFeedbackButton);
    return i;
  }
  n.__extends(SeasonLeagueMainDialogRankType, e);
  SeasonLeagueMainDialogRankType.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this.setType(SeasonLeagueMainDialogRankType.TYPE_PLAYER);
    this.update();
  };
  SeasonLeagueMainDialogRankType.prototype.scroll = function (e) {
    var t = this._currentIndex + (e > 0 ? 1 : -1);
    if (t >= SeasonLeagueMainDialogRankType.TYPES.length) {
      this._currentIndex = 0;
    } else {
      this._currentIndex = t < 0 ? r.int(SeasonLeagueMainDialogRankType.TYPES.length - 1) : t;
    }
    this.update();
    this.onTypeChanged.dispatch();
  };
  SeasonLeagueMainDialogRankType.prototype.update = function () {
    var e = u.CastleModel.seasonLeagueData.isAllianceRankingEnabled();
    this.disp.btn_left.visible = e;
    this.disp.btn_right.visible = e;
    this.checkForValidState();
    g.CastleComponent.textFieldManager.registerTextField(this.disp.txt_text, new s.TextVO(c.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_divisionRanking_" + this.getCurrentType() + "Ranking_text"))).autoFitToBounds = true;
  };
  SeasonLeagueMainDialogRankType.prototype.checkForValidState = function () {
    if (this.getCurrentType() == SeasonLeagueMainDialogRankType.TYPE_ALLIANCE && !u.CastleModel.seasonLeagueData.isAllianceRankingEnabled()) {
      this.setType(SeasonLeagueMainDialogRankType.TYPE_PLAYER);
      this.onTypeChanged.dispatch();
    }
  };
  SeasonLeagueMainDialogRankType.prototype.setType = function (e) {
    this._currentIndex = r.int(o.MathBase.clamp(SeasonLeagueMainDialogRankType.TYPES.indexOf(e), 0, SeasonLeagueMainDialogRankType.TYPES.length - 1));
  };
  SeasonLeagueMainDialogRankType.prototype.getCurrentType = function () {
    return SeasonLeagueMainDialogRankType.TYPES[this.currentIndex];
  };
  SeasonLeagueMainDialogRankType.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.btn_left:
        this.scroll(-1);
        break;
      case this.disp.btn_right:
        this.scroll(1);
    }
  };
  Object.defineProperty(SeasonLeagueMainDialogRankType.prototype, "currentIndex", {
    get: function () {
      return this._currentIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueMainDialogRankType.prototype, "onTypeChanged", {
    get: function () {
      return this._onTypeChanged;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueMainDialogRankType.TYPE_PLAYER = "player";
  SeasonLeagueMainDialogRankType.TYPE_ALLIANCE = "alliance";
  SeasonLeagueMainDialogRankType.TYPES = [SeasonLeagueMainDialogRankType.TYPE_PLAYER, SeasonLeagueMainDialogRankType.TYPE_ALLIANCE];
  return SeasonLeagueMainDialogRankType;
}(d.CastleItemRenderer);
exports.SeasonLeagueMainDialogRankType = h;
a.classImplementsInterfaces(h, "ICollectableRendererList");
var g = require("./14.js");
var C = require("./36.js");