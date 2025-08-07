Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlSeasonEndRewardVO() {
    this._id = 0;
    this._rewardSetId = 0;
    this._minHighscoreRank = 0;
    this._rewardIds = [];
  }
  XmlSeasonEndRewardVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._rewardSetId = n.int(o.CastleXMLUtils.getIntAttribute("rewardSetID", e, -1));
    this._minHighscoreRank = n.int(o.CastleXMLUtils.getIntAttribute("minHighscoreRank", e, -1));
    this._rewardIds = o.CastleXMLUtils.createIntListFromAttribute("rewardIDs", e);
    this._leaguetypeID = o.CastleXMLUtils.getIntAttribute("leaguetypeID", e, 0);
  };
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "minHighscoreRank", {
    get: function () {
      return this._minHighscoreRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonEndRewardVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  XmlSeasonEndRewardVO.prototype.matchesLeagueType = function (e) {
    return this._leaguetypeID == 0 || this._leaguetypeID == e;
  };
  return XmlSeasonEndRewardVO;
}();
exports.XmlSeasonEndRewardVO = a;