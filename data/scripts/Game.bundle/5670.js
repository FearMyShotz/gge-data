Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlSeasonPromotionRewardVO() {
    this._id = 0;
    this._rewardSetId = 0;
    this._rankId = 0;
    this._rewardIds = [];
    this._needsSeasonPass = false;
  }
  XmlSeasonPromotionRewardVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._rewardSetId = n.int(o.CastleXMLUtils.getIntAttribute("rewardSetID", e, -1));
    this._rankId = n.int(o.CastleXMLUtils.getIntAttribute("rankID", e, -1));
    this._rewardIds = o.CastleXMLUtils.createIntListFromAttribute("rewardIDs", e);
    this._needsSeasonPass = o.CastleXMLUtils.getBooleanAttribute("needsSeasonPass", e);
    this._leaguetypeID = o.CastleXMLUtils.getIntAttribute("leaguetypeID", e, 0);
  };
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "rankId", {
    get: function () {
      return this._rankId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "needsSeasonPass", {
    get: function () {
      return this._needsSeasonPass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSeasonPromotionRewardVO.prototype, "leaguetypeID", {
    get: function () {
      return this._leaguetypeID;
    },
    enumerable: true,
    configurable: true
  });
  XmlSeasonPromotionRewardVO.prototype.matchesLeagueType = function (e) {
    return this._leaguetypeID == 0 || this._leaguetypeID == e;
  };
  return XmlSeasonPromotionRewardVO;
}();
exports.XmlSeasonPromotionRewardVO = a;