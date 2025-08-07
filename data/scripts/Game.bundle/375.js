Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./3.js");
var o = require("./6.js");
var a = require("./22.js");
var s = require("./887.js");
var r = require("./4.js");
var l = require("./2133.js");
var c = require("./2134.js");
var u = function () {
  function SamuraiDaimyoDataXml() {
    this._daimyoCastleAllianceContracts = new Map();
    this._daimyoTownshipAllianceContracts = new Map();
    this._daimyoEndRewards = new Map();
  }
  SamuraiDaimyoDataXml.prototype.parseXml = function (e) {
    this._daimyoCastleAllianceContracts = a.CastleXMLUtils.createDicFromXmlNode(e, SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE, l.XmlSamuraiDaimyoContractVO);
    this._daimyoTownshipAllianceContracts = a.CastleXMLUtils.createDicFromXmlNode(e, SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP, l.XmlSamuraiDaimyoContractVO);
    this._daimyoEndRewards = a.CastleXMLUtils.createDicFromXmlNode(e, "daimyoEndRewards", c.XmlSamuraiDaimyoRewardVO);
  };
  SamuraiDaimyoDataXml.prototype.getContractSeriesIndex = function (e, t) {
    for (var i = this.getContractSeries(e, t), n = 0; n < i.length; ++n) {
      if (i[n].id == t) {
        return n;
      }
    }
    return -1;
  };
  SamuraiDaimyoDataXml.prototype.getNumberOfContractsForSeries = function (e, t) {
    return o.int(this.getContractSeries(e, t).length);
  };
  SamuraiDaimyoDataXml.prototype.getContractSeries = function (e, t) {
    var i = this.getContractsList(e);
    var n = [];
    var a = o.int(i.get(t).rank);
    if (i != null) {
      for (var s = 0, r = Array.from(i.values()); s < r.length; s++) {
        var l = r[s];
        if (l !== undefined && l.rank == a) {
          n.push(l);
        }
      }
    }
    return n;
  };
  SamuraiDaimyoDataXml.prototype.getRewardOverviewItems = function (e) {
    var t = [];
    var i = 0;
    if (this.daimyoEndRewards != null) {
      for (var o = 0, a = Array.from(this.daimyoEndRewards.values()); o < a.length; o++) {
        var l = a[o];
        if (l !== undefined && l.rewardSetId == e) {
          var c = "";
          var u = l.minHighscoreRank;
          c = i + 1 != u ? n.Localize.text("rankingRange_multi", [i + 1, u]) : n.Localize.text("rankingRange_single", [u]);
          i = u;
          t.push(new s.SeasonLeagueRewardOverviewDialogItemVO(c, r.CastleModel.rewardData.getListByIdVector(l.rewardIds)));
        }
      }
    }
    return t;
  };
  SamuraiDaimyoDataXml.prototype.getEndReward = function (e, t) {
    var i;
    if (this.daimyoEndRewards != null) {
      for (var n = 0, o = Array.from(this.daimyoEndRewards.values()); n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.rewardSetId == e && t <= a.minHighscoreRank) {
          i = a;
          break;
        }
      }
    }
    return i;
  };
  SamuraiDaimyoDataXml.prototype.getContractsList = function (e) {
    switch (e) {
      case SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE:
        return this._daimyoCastleAllianceContracts;
      case SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP:
        return this._daimyoTownshipAllianceContracts;
      default:
        return null;
    }
  };
  Object.defineProperty(SamuraiDaimyoDataXml.prototype, "daimyoCastleAllianceContracts", {
    get: function () {
      return this._daimyoCastleAllianceContracts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataXml.prototype, "daimyoTownshipAllianceContracts", {
    get: function () {
      return this._daimyoTownshipAllianceContracts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoDataXml.prototype, "daimyoEndRewards", {
    get: function () {
      return this._daimyoEndRewards;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE = "daimyoCastleAllianceContracts";
  SamuraiDaimyoDataXml.CONTRACT_TYPE_TOWNSHIP = "daimyoTownshipAllianceContracts";
  return SamuraiDaimyoDataXml;
}();
exports.SamuraiDaimyoDataXml = u;