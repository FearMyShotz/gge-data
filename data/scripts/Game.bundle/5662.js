Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./28.js");
var l = require("./1662.js");
var c = require("./5663.js");
var u = require("./5664.js");
var d = require("./5665.js");
var p = require("./30.js");
var h = require("./15.js");
var g = require("./4.js");
var C = require("./467.js");
var _ = require("./174.js");
var m = function () {
  function SeasonLeagueServer() {
    this._divisionId = 0;
    this._divisionSize = 0;
    this._passSeasonActive = false;
    this._passEventActive = false;
    this._passPromotionBought = [];
    this._promotionId = 0;
    this._medalPoints = 0;
    this._nextMedalPayoutTimestamp = 0;
    this._seasonEventStartDialogSeen = false;
    this._seasonStartDialogSeen = false;
    this._playerSeasonEventRank = 0;
    this._playerSeasonRank = 0;
    this.seasonPassPrice = 0;
    this.seasonPassDiscount = 0;
    this.resetMedals();
  }
  SeasonLeagueServer.prototype.reset = function () {
    this._divisionId = 0;
    this._divisionSize = 0;
    this._passSeasonActive = false;
    this._passEventActive = false;
    this._passPromotionBought = [];
    this._promotionId = 0;
    this._medalPoints = 0;
    this._nextMedalPayoutTimestamp = 0;
    this._seasonEventStartDialogSeen = false;
    this._seasonStartDialogSeen = false;
    this.resetMedals();
  };
  SeasonLeagueServer.prototype.resetMedals = function () {
    this._playerMedals = new O.CollectableList();
    for (var e = 0, t = C.ClientConstSeasonLeague.MEDAL_IDS; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        this._playerMedals.addItem(new y.CollectableItemSeasonLeagueMedalVO(i, 0));
      }
    }
    this._allianceMedals = new O.CollectableList();
    for (var n = 0, o = C.ClientConstSeasonLeague.MEDAL_IDS; n < o.length; n++) {
      i = o[n];
      this._allianceMedals.addItem(new y.CollectableItemSeasonLeagueMedalVO(i, 0));
    }
  };
  SeasonLeagueServer.prototype.requestKLI = function () {
    g.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetSeasonInfoEventVO());
  };
  SeasonLeagueServer.prototype.parseKLI = function (e) {
    this.parseDivisionInfo(e.KLD);
    this.parseMedalInfo(this._playerMedals, e.KLM);
    this.parseMedalInfo(this._allianceMedals, e.KLAM);
    this.parsePassInfo(e.KLSP);
    this.parseRankInfo(e.KLR);
    this.parseRemainingTimeInfo(e.RD);
    this.parseDialogInfo(e);
    h.CastleBasicController.getInstance().dispatchEvent(new _.SeasonLeagueEvent(_.SeasonLeagueEvent.ON_INFO_UPDATED));
  };
  SeasonLeagueServer.prototype.parseSPP = function (e) {
    this.seasonPassPrice = e[a.CommKeys.COST_C2];
    this.seasonPassDiscount = e[a.CommKeys.DISCOUNT];
    h.CastleBasicController.getInstance().dispatchEvent(new _.SeasonLeagueEvent(_.SeasonLeagueEvent.ON_PASS_PRICES_UPDATED));
  };
  SeasonLeagueServer.prototype.parseDivisionInfo = function (e) {
    if (e) {
      this._divisionId = s.int(e.KLDID);
      this._divisionSize = s.int(e.KLDS);
    }
  };
  SeasonLeagueServer.prototype.parseMedalInfo = function (e, t) {
    if (t && t != null) {
      for (var i = 0, a = t; i < a.length; i++) {
        var r = a[i];
        if (r !== undefined) {
          var l = s.int(r[0]);
          var c = s.int(r[1]);
          var u = o.castAs(e.getItemByTypeVO(new E.CollectableTypeVO(f.CollectableEnum.SEASON_LEAGUE_MEDALS, l)), "CollectableItemSeasonLeagueMedalVO");
          if (u) {
            u.amount = c;
          } else {
            n.error("SeasonLeagueServer.parseMedalInfo(): Id '" + l + "' is unknown.");
          }
        }
      }
    }
  };
  SeasonLeagueServer.prototype.parsePassInfo = function (e) {
    if (e) {
      this._passSeasonActive = e[a.CommKeys.SEASON_PASS_ENABLED] == 1;
      this._passEventActive = e[a.CommKeys.SEASON_EVENT_PASS_ENABLED] == 1;
      this._passPromotionBought = e[a.CommKeys.SEASON_PROMOTION_PASSES] ? e[a.CommKeys.SEASON_PROMOTION_PASSES] : [];
    }
  };
  SeasonLeagueServer.prototype.boughtPromoPassForPromoID = function (e) {
    return this._passPromotionBought.indexOf(e) > -1;
  };
  Object.defineProperty(SeasonLeagueServer.prototype, "amountOfBoughtPromoPasses", {
    get: function () {
      return this._passPromotionBought.length;
    },
    enumerable: true,
    configurable: true
  });
  SeasonLeagueServer.prototype.parseRankInfo = function (e) {
    if (e) {
      this._promotionId = s.int(e.KLRID);
      this._medalPoints = s.int(e.KLMP);
    }
  };
  SeasonLeagueServer.prototype.parseRemainingTimeInfo = function (e) {
    if (e) {
      var t = s.int(e);
      this._nextMedalPayoutTimestamp = p.CachedTimer.getCachedTimer() + t * r.ClientConstTime.SEC_2_MILLISEC;
    }
  };
  SeasonLeagueServer.prototype.parseDialogInfo = function (e) {
    if (e) {
      if (e.hasOwnProperty("KLSE")) {
        this._seasonEventStartDialogSeen = e.KLSE == 1;
      }
      if (e.hasOwnProperty("KLS")) {
        this._seasonStartDialogSeen = e.KLS == 1;
      }
    }
  };
  SeasonLeagueServer.prototype.requestKLH = function () {
    g.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetSeasonLeagueHighscoreEventVO());
  };
  SeasonLeagueServer.prototype.parseKLH = function (e) {
    if (e) {
      if (e != null) {
        for (var t = 0, i = e; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            var o = s.int(n[0]);
            var r = s.int(n[1]);
            switch (o) {
              case a.HighscoreConst.KINGDOMS_LEAGUE_SEASON:
                this._playerSeasonRank = r;
                break;
              case a.HighscoreConst.KINGDOMS_LEAGUE_SEASON_EVENT:
                this._playerSeasonEventRank = r;
            }
          }
        }
      }
      h.CastleBasicController.getInstance().dispatchEvent(new _.SeasonLeagueEvent(_.SeasonLeagueEvent.ON_OWN_RANKS_UPDATED));
    }
  };
  SeasonLeagueServer.prototype.requestKSS = function (e, t) {
    this._seasonEventStartDialogSeen = e;
    this._seasonStartDialogSeen = t;
    g.CastleModel.smartfoxClient.sendCommandVO(new d.C2SSetSeasonEventStartSeenEventVO(e, t));
  };
  SeasonLeagueServer.prototype.requestKBP = function () {
    g.CastleModel.smartfoxClient.sendCommandVO(new l.C2SBuySeasonPassEventVO());
  };
  SeasonLeagueServer.prototype.getPlayerMedalAmount = function (e) {
    var t = this._playerMedals.getItemByTypeVO(new E.CollectableTypeVO(f.CollectableEnum.SEASON_LEAGUE_MEDALS, e));
    return s.int(t ? t.amount : 0);
  };
  SeasonLeagueServer.prototype.getAllianceMedalAmount = function (e) {
    var t = this._allianceMedals.getItemByTypeVO(new E.CollectableTypeVO(f.CollectableEnum.SEASON_LEAGUE_MEDALS, e));
    return s.int(t ? t.amount : 0);
  };
  SeasonLeagueServer.prototype.getNextPayoutTimeInSec = function () {
    return s.int(Math.max(0, (this.nextMedalPayoutTimestamp - p.CachedTimer.getCachedTimer()) * r.ClientConstTime.MILLISEC_2_SEC));
  };
  SeasonLeagueServer.prototype.hasAnyPlayerMedals = function () {
    for (var e = 0, t = this._playerMedals.list; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined && i && i.amount > 0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(SeasonLeagueServer.prototype, "divisionId", {
    get: function () {
      return this._divisionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "divisionSize", {
    get: function () {
      return this._divisionSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "playerMedals", {
    get: function () {
      return this._playerMedals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "passSeasonActive", {
    get: function () {
      return this._passSeasonActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "passEventActive", {
    get: function () {
      return this._passEventActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "promotionId", {
    get: function () {
      return this._promotionId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "medalPoints", {
    get: function () {
      return this._medalPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "seasonEventStartDialogSeen", {
    get: function () {
      return this._seasonEventStartDialogSeen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "nextMedalPayoutTimestamp", {
    get: function () {
      return this._nextMedalPayoutTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "playerSeasonEventRank", {
    get: function () {
      return this._playerSeasonEventRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "playerSeasonRank", {
    get: function () {
      return this._playerSeasonRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "seasonStartDialogSeen", {
    get: function () {
      return this._seasonStartDialogSeen;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueServer.prototype, "allianceMedals", {
    get: function () {
      return this._allianceMedals;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueServer;
}();
exports.SeasonLeagueServer = m;
var f = require("./12.js");
var O = require("./48.js");
var E = require("./74.js");
var y = require("./1625.js");