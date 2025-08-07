Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./6.js");
var a = require("./3.js");
var s = require("./22.js");
var r = require("./887.js");
var l = require("./4.js");
var c = require("./467.js");
var u = require("./5665.js");
var d = require("./5666.js");
var p = require("./5667.js");
var h = require("./5668.js");
var g = require("./5669.js");
var C = function () {
  function SeasonLeagueXml() {
    this._seasonMedals = new Map();
    this._seasonPromotions = new Map();
    this._seasonPromotionRewards = new Map();
    this._seasonEventRewards = new Map();
    this._seasonEndRewards = new Map();
    this._seasonSettings = new Map();
  }
  SeasonLeagueXml.prototype.parseXml = function (e) {
    this._seasonMedals = s.CastleXMLUtils.createDicFromXmlNode(e, "seasonMedals", p.XmlSeasonMedalVO);
    this._seasonPromotions = s.CastleXMLUtils.createDicFromXmlNode(e, "seasonRanks", g.XmlSeasonPromotionVO);
    this._seasonPromotionRewards = s.CastleXMLUtils.createDicFromXmlNode(e, "seasonPromotionRewards", h.XmlSeasonPromotionRewardVO);
    this._seasonEventRewards = s.CastleXMLUtils.createDicFromXmlNode(e, "seasonEventRewards", d.XmlSeasonEventRewardVO);
    this._seasonEndRewards = s.CastleXMLUtils.createDicFromXmlNode(e, "seasonEndRewards", u.XmlSeasonEndRewardVO);
    this._seasonSettings = s.CastleXMLUtils.createDicFromXmlNode(e, "seasonSettings", O.XmlSeasonSettingVO, "settingID");
  };
  SeasonLeagueXml.prototype.getSeasonEndRewards = function (e, t) {
    var i = [];
    if (this._seasonEndRewards != null) {
      for (var n = 0, o = Array.from(this._seasonEndRewards.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && e == a.rewardSetId && a.matchesLeagueType(t)) {
          i.push(a);
        }
      }
    }
    return i;
  };
  SeasonLeagueXml.prototype.getSeasonEndRewardForRank = function (e, t, i) {
    var a;
    for (var s = n.DictionaryUtil.getKeys(this._seasonEndRewards), r = 0; r < s.length; r++) {
      var l = this._seasonEndRewards.get(s[r]);
      var c = this._seasonEndRewards.get(s[r + 1]);
      if (e == l.rewardSetId && l.matchesLeagueType(i)) {
        a = l;
      }
      if (!c) {
        return a;
      }
      var u = o.int(c.rewardSetId == e && c.matchesLeagueType(i) ? c.minHighscoreRank - 1 : Number.MAX_VALUE);
      if (e == l.rewardSetId && l.matchesLeagueType(i) && t >= l.minHighscoreRank && t <= u) {
        return l;
      }
    }
    return null;
  };
  SeasonLeagueXml.prototype.getSeasonEndRewardsAsOverviewItems = function (e, t) {
    var i;
    var n = this.getSeasonEndRewards(e, t);
    var o = [];
    n.reverse();
    for (var s = 0; s < n.length; ++s) {
      var c = n[s];
      var u = "";
      u = s == 0 ? a.Localize.text("rankingRange_plus", [c.minHighscoreRank]) : i && i.minHighscoreRank - 1 != c.minHighscoreRank ? a.Localize.text("rankingRange_multi", [c.minHighscoreRank, i.minHighscoreRank - 1]) : a.Localize.text("rankingRange_single", [c.minHighscoreRank]);
      o.push(new r.SeasonLeagueRewardOverviewDialogItemVO(u, l.CastleModel.rewardData.getListByIdVector(c.rewardIds)));
      i = c;
    }
    o.reverse();
    return o;
  };
  SeasonLeagueXml.prototype.getSeasonEventRewardsAsOverviewItems = function () {
    var e;
    var t = [];
    var i = [];
    if (this.seasonMedals != null) {
      for (var n = 0, o = Array.from(this.seasonMedals.values()); n < o.length; n++) {
        var s = o[n];
        i.push(s);
      }
    }
    i = i.reverse();
    for (var l = 0; l < i.length; ++l) {
      s = i[l];
      var c = "";
      c = l == 0 ? a.Localize.text("rankingRange_plus", [s.minHighscoreRank]) : e && e.minHighscoreRank - 1 != s.minHighscoreRank ? a.Localize.text("rankingRange_multi", [s.minHighscoreRank, e.minHighscoreRank - 1]) : a.Localize.text("rankingRange_single", [s.minHighscoreRank]);
      t.push(new r.SeasonLeagueRewardOverviewDialogItemVO(c, new f.CollectableList().addItem(m.CollectableHelper.createVO(_.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, s.id))));
      e = s;
    }
    return t = t.reverse();
  };
  SeasonLeagueXml.prototype.getSeasonMedalForRank = function (e) {
    if (this.seasonMedals != null) {
      for (var t = 0, i = Array.from(this.seasonMedals.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e <= n.minHighscoreRank) {
          return n;
        }
      }
    }
    return this.seasonMedals.get(c.ClientConstSeasonLeague.MEDAL_ID_WOOD);
  };
  SeasonLeagueXml.prototype.getSeasonMedalRewardForRank = function (e) {
    return m.CollectableHelper.createVO(_.CollectableEnum.SEASON_LEAGUE_MEDALS, 1, this.getSeasonMedalForRank(e).id);
  };
  SeasonLeagueXml.prototype.getSeasonEventRewards = function (e, t, i, n) {
    var o = new f.CollectableList();
    if (this.seasonEventRewards != null) {
      for (var a = 0, s = Array.from(this.seasonEventRewards.values()); a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && r.rewardSetId == e && r.eventIDs.indexOf(t) >= 0 && r.rankId == i && r.needsSeasonPass == n) {
          o.addList(l.CastleModel.rewardData.getListByIdVector(r.rewardIds));
        }
      }
    }
    return o;
  };
  SeasonLeagueXml.prototype.getPromotion = function (e) {
    return this.seasonPromotions.get(e);
  };
  SeasonLeagueXml.prototype.getSetting = function (e) {
    return this._seasonSettings.get(e);
  };
  SeasonLeagueXml.prototype.getHighestPromotion = function () {
    var e = 0;
    if (this.seasonPromotions != null) {
      for (var t = 0, i = Array.from(this.seasonPromotions.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.id >= e) {
          e = n.id;
        }
      }
    }
    return this.getPromotion(e);
  };
  SeasonLeagueXml.prototype.getNumberOfPromotions = function () {
    var e = 0;
    if (this.seasonPromotions != null) {
      for (var t = 0, i = Array.from(this.seasonPromotions.values()); t < i.length; t++) {
        i[t];
        e++;
      }
    }
    return e;
  };
  SeasonLeagueXml.prototype.getPromotionRewards = function (e, t, i, n) {
    if (this.seasonPromotionRewards != null) {
      for (var o = 0, a = Array.from(this.seasonPromotionRewards.values()); o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && e == s.rewardSetId && s.matchesLeagueType(n) && t == s.rankId && i == s.needsSeasonPass) {
          return l.CastleModel.rewardData.getListByIdVector(s.rewardIds);
        }
      }
    }
    return new f.CollectableList();
  };
  SeasonLeagueXml.prototype.getSeasonPassGainedPromotionRewards = function (e, t, i) {
    var n = new f.CollectableList();
    if (this.seasonPromotionRewards != null) {
      for (var o = 0, a = Array.from(this.seasonPromotionRewards.values()); o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && s.rankId <= e && s.needsSeasonPass && s.rewardSetId == t && s.matchesLeagueType(i)) {
          n.addList(l.CastleModel.rewardData.getListByIdVector(s.rewardIds));
        }
      }
    }
    n.combineDuplicatedItems();
    return n;
  };
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonMedals", {
    get: function () {
      return this._seasonMedals;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonPromotions", {
    get: function () {
      return this._seasonPromotions;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonPromotionRewards", {
    get: function () {
      return this._seasonPromotionRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonEventRewards", {
    get: function () {
      return this._seasonEventRewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SeasonLeagueXml.prototype, "seasonEndRewards", {
    get: function () {
      return this._seasonEndRewards;
    },
    enumerable: true,
    configurable: true
  });
  return SeasonLeagueXml;
}();
exports.SeasonLeagueXml = C;
var _ = require("./12.js");
var m = require("./45.js");
var f = require("./48.js");
var O = require("./5670.js");