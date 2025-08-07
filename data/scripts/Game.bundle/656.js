Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./26.js");
var u = require("./13.js");
var d = require("./4.js");
var p = require("./174.js");
var h = require("./40.js");
var g = require("./8.js");
var C = function (e) {
  function SeasonLeagueEventElementComponent(t, i) {
    var n = this;
    n._eventId = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._eventId = i;
    n.init();
    return n;
  }
  n.__extends(SeasonLeagueEventElementComponent, e);
  SeasonLeagueEventElementComponent.prototype.init = function () {
    g.ButtonHelper.initButton(this.disp.btn_showMe, -1, f.ClickFeedbackButtonBackground);
    _.CastleComponent.textFieldManager.registerTextField(this.disp.btn_showMe.txt_text, new a.TextVO(u.TextHelper.toUpperCaseLocaSafeTextId("dialog_seasonLeague_eventInterface_showMe_text"))).autoFitToBounds = true;
    this.disp.btn_showMe.toolTipText = "dialog_seasonLeague_eventInterface_showMe_text";
    if (this.disp.txt_title) {
      _.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new s.LocalizedTextVO("dialog_faction_seasonLeague_header")).autoFitToBounds = true;
    }
    this.disp.mc_rank.mouseChildren = false;
  };
  SeasonLeagueEventElementComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (d.CastleModel.seasonLeagueData.isSeasonLeagueActive() && d.CastleModel.seasonLeagueData.isAnySeasonEventActive()) {
      d.CastleModel.seasonLeagueData.server.requestKLH();
    }
    this.update();
  };
  SeasonLeagueEventElementComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    _.CastleComponent.controller.addEventListener(p.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    d.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
  };
  SeasonLeagueEventElementComponent.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    _.CastleComponent.controller.removeEventListener(p.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED, this.bindFunction(this.onPlayerRankUpdated));
    d.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshSpecialEvent));
  };
  SeasonLeagueEventElementComponent.prototype.update = function () {
    var e = d.CastleModel.seasonLeagueData.getActiveSeasonEventVO();
    this.disp.visible = e && e.eventId == this.eventId;
    g.ButtonHelper.enableButton(this.disp.btn_showMe, d.CastleModel.seasonLeagueData.getActiveSeasonLeagueEventVO() != null);
    var t = l.int(d.CastleModel.seasonLeagueData.server.playerSeasonEventRank);
    _.CastleComponent.textFieldManager.registerTextField(this.disp.mc_rank.txt_text, t > 0 ? new r.LocalizedNumberVO(t) : new a.TextVO("-")).autoFitToBounds = true;
    this.disp.mc_rank.toolTipText = t > 0 ? "dialog_seasonLeague_divisionRanking_tooltip" : "dialog_seasonLeague_divisionRankingNoMatch_tooltip";
  };
  SeasonLeagueEventElementComponent.prototype.onClick = function (t) {
    if (g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.btn_showMe:
          _.CastleComponent.dialogHandler.registerDefaultDialogs(m.SeasonLeagueMainDialog);
      }
    }
  };
  SeasonLeagueEventElementComponent.prototype.onPlayerRankUpdated = function (e) {
    this.update();
  };
  SeasonLeagueEventElementComponent.prototype.onRefreshSpecialEvent = function (e) {
    this.update();
  };
  Object.defineProperty(SeasonLeagueEventElementComponent.prototype, "eventId", {
    get: function () {
      return this._eventId;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueEventElementComponent;
}(h.CastleItemRenderer);
exports.SeasonLeagueEventElementComponent = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");
var _ = require("./14.js");
var m = require("./808.js");
var f = require("./121.js");