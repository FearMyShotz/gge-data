Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./3.js");
var d = require("./678.js");
var p = require("./15.js");
var h = require("./54.js");
var g = require("./4.js");
var C = function (e) {
  function SeasonLeagueData(t) {
    var i = this;
    i._xml = new I.SeasonLeagueXml();
    i._server = new D.SeasonLeagueServer();
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._xml.parseXml(t);
    p.CastleBasicController.getInstance().addEventListener(d.CastleLoginEvent.ON_GBD_ARRIVED, i.bindFunction(i.onGbdArrived));
    return i;
  }
  n.__extends(SeasonLeagueData, e);
  SeasonLeagueData.prototype.destroy = function () {
    p.CastleBasicController.getInstance().removeEventListener(d.CastleLoginEvent.ON_GBD_ARRIVED, this.bindFunction(this.onGbdArrived));
  };
  SeasonLeagueData.prototype.reset = function () {
    e.prototype.reset.call(this);
    this._server.reset();
  };
  SeasonLeagueData.prototype.openEventDialog = function () {
    if (!this.isSeasonLeagueActive()) {
      f.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(u.Localize.text("generic_alert_information"), u.Localize.text("alert_eventendet")));
    }
    if (this.server.seasonStartDialogSeen) {
      if (!this.server.seasonEventStartDialogSeen && this.isAnySeasonEventActive()) {
        f.CastleDialogHandler.getInstance().registerDefaultDialogs(y.SeasonLeagueMatchmakingDialog);
        this.server.requestKSS(true, true);
      } else {
        f.CastleDialogHandler.getInstance().registerDefaultDialogs(E.SeasonLeagueMainDialog);
      }
    } else {
      var e = this.getSeasonStartMessageVO();
      if (e) {
        a.CommandController.instance.executeCommand(m.IngameClientCommands.OPEN_MESSAGE_DIALOG_COMMAND, e);
      } else {
        f.CastleDialogHandler.getInstance().registerDefaultDialogs(b.SeasonLeagueStartDialog);
        this.server.requestKSS(true, true);
      }
    }
  };
  SeasonLeagueData.prototype.isSeasonLeagueActive = function () {
    return this.getActiveSeasonLeagueEventVO() != null;
  };
  SeasonLeagueData.prototype.getActiveSeasonLeagueEventVO = function () {
    return g.CastleModel.specialEventData.getActiveEventByEventId(l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE);
  };
  SeasonLeagueData.prototype.isAnySeasonEventActive = function () {
    return this.getActiveSeasonEventVO() != null;
  };
  SeasonLeagueData.prototype.getActiveSeasonEventVO = function () {
    for (var e = 0, t = Array.from(g.CastleModel.specialEventData.activeEvents.values()); e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && i.seasonLeague.isModeEnabled) {
        return i;
      }
    }
    return null;
  };
  SeasonLeagueData.prototype.getCurrentPlayerPromotion = function () {
    return this.xml.getPromotion(this.server.promotionId);
  };
  SeasonLeagueData.prototype.hasReachedHighestPromotion = function () {
    var e = this.xml.getHighestPromotion();
    return !!e && this.server.promotionId >= e.id;
  };
  SeasonLeagueData.prototype.getSeasonStartMessageVO = function () {
    for (var e = 0, t = g.CastleModel.messageData.incomingMails; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && r.instanceOfClass(i, "MessageSpecialEventVO")) {
        var n = i;
        if (n && n.subtypeEvent == c.MessageConst.SPECIAL_ID_SPECIAL_EVENT_START && n.additionalInformation[0] == l.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
          return n;
        }
      }
    }
    return null;
  };
  SeasonLeagueData.prototype.getCurrentSeasonPassCost = function () {
    return this.server.seasonPassPrice;
  };
  SeasonLeagueData.prototype.getCurrentSeasonPassCostWithSale = function () {
    return _.int(this.getCurrentSeasonPassCost());
  };
  SeasonLeagueData.prototype.getActiveSeasonEventNameId = function () {
    var e = this.getActiveSeasonEventVO();
    if (e) {
      return e.eventBuildingNameId;
    } else {
      return "-";
    }
  };
  SeasonLeagueData.prototype.isAllianceRankingEnabled = function () {
    var e = this.getActiveSeasonLeagueEventVO();
    return !!e && e.hasAllianceRanking;
  };
  Object.defineProperty(SeasonLeagueData.prototype, "currentSetting", {
    get: function () {
      return this.xml.getSetting(1);
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueData.prototype.onGbdArrived = function (e) {
    if (this.isSeasonLeagueActive()) {
      this.server.requestKLI();
    }
  };
  Object.defineProperty(SeasonLeagueData.prototype, "xml", {
    get: function () {
      return this._xml;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueData.prototype, "server", {
    get: function () {
      return this._server;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueData;
}(h.CastleBasicData);
exports.SeasonLeagueData = C;
var _ = require("./6.js");
var m = require("./29.js");
var f = require("./9.js");
var O = require("./38.js");
var E = require("./806.js");
var y = require("./5659.js");
var b = require("./1956.js");
var D = require("./5660.js");
var I = require("./5664.js");
s.classImplementsInterfaces(C, "IUpdatable");