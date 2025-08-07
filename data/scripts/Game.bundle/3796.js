Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./57.js");
var c = require("./4.js");
var u = require("./8.js");
var d = require("./40.js");
var p = require("./20.js");
var h = function (e) {
  function GlobalLeaderBoardLeagueComponent(t, i) {
    var n = e.call(this, t) || this;
    n.leagueChangeSignal = new l.Signal();
    n._eventID = i;
    n._itxt_league = o.GoodgameTextFieldManager.getInstance().registerTextField(n._disp.txt_league, new s.LocalizedTextVO(""));
    n._itxt_league.autoFitToBounds = true;
    n._leagueTypeId = n.eventVO.leagueID;
    u.ButtonHelper.initButtons([n._disp.btn_prevLeague, n._disp.btn_nextLeague], p.ClickFeedbackButtonHover);
    n.updateText();
    return n;
  }
  n.__extends(GlobalLeaderBoardLeagueComponent, e);
  GlobalLeaderBoardLeagueComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this._disp.btn_prevLeague:
        this.showPrevLeague();
        break;
      case this._disp.btn_nextLeague:
        this.showNextLeague();
    }
  };
  GlobalLeaderBoardLeagueComponent.prototype.showPrevLeague = function () {
    this.changeLeague(this._leagueTypeId - 1 < 1 ? this.eventVO.numberOfLeagues : this._leagueTypeId - 1);
    this.leagueChangeSignal.dispatch();
  };
  GlobalLeaderBoardLeagueComponent.prototype.showNextLeague = function () {
    this.changeLeague(this._leagueTypeId + 1 > this.eventVO.numberOfLeagues ? 1 : this._leagueTypeId + 1);
    this.leagueChangeSignal.dispatch();
  };
  GlobalLeaderBoardLeagueComponent.prototype.updateText = function () {
    var e = r.int(this.eventVO.leagueLevels(this._leagueTypeId)[0]);
    var t = r.int(this.eventVO.leagueLevels(this._leagueTypeId)[1]);
    if (t > a.PlayerConst.LEVEL_CAP) {
      this._itxt_league.textContentVO.textId = e != t ? "dialog_ranking_legendFilter" : "legendaryLevel_placeholder";
      this._itxt_league.textContentVO.textReplacements = [Math.max(e - a.PlayerConst.LEVEL_CAP, 1), t - a.PlayerConst.LEVEL_CAP];
    } else {
      this._itxt_league.textContentVO.textId = "levelrange_placeholder";
      this._itxt_league.textContentVO.textReplacements = [e, t];
    }
  };
  GlobalLeaderBoardLeagueComponent.prototype.changeLeague = function (e, t = false) {
    this._leagueTypeId = e;
    this.updateText();
    if (t) {
      this.leagueChangeSignal.dispatch();
    }
  };
  GlobalLeaderBoardLeagueComponent.prototype.changeToMyLeague = function () {
    this.changeLeague(this.eventVO.leagueID, true);
  };
  Object.defineProperty(GlobalLeaderBoardLeagueComponent.prototype, "leagueTypeId", {
    get: function () {
      return this._leagueTypeId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GlobalLeaderBoardLeagueComponent.prototype, "eventVO", {
    get: function () {
      return c.CastleModel.specialEventData.getActiveEventByEventId(this._eventID);
    },
    enumerable: true,
    configurable: true
  });
  return GlobalLeaderBoardLeagueComponent;
}(d.CastleItemRenderer);
exports.GlobalLeaderBoardLeagueComponent = h;