Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./6.js");
var o = require("./22.js");
var a = function () {
  function XmlSamuraiDaimyoRewardVO() {
    this._id = 0;
    this._rewardSetId = 0;
    this._minHighscoreRank = 0;
    this._rewardIds = [];
  }
  XmlSamuraiDaimyoRewardVO.prototype.parseXml = function (e) {
    this._id = n.int(o.CastleXMLUtils.getIntAttribute("id", e, -1));
    this._rewardSetId = n.int(o.CastleXMLUtils.getIntAttribute("rewardSetID", e, -1));
    this._minHighscoreRank = n.int(o.CastleXMLUtils.getIntAttribute("minHighscoreRank", e, -1));
    this._rewardIds = o.CastleXMLUtils.createIntListFromAttribute("rewardIDs", e);
  };
  Object.defineProperty(XmlSamuraiDaimyoRewardVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoRewardVO.prototype, "rewardSetId", {
    get: function () {
      return this._rewardSetId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoRewardVO.prototype, "minHighscoreRank", {
    get: function () {
      return this._minHighscoreRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(XmlSamuraiDaimyoRewardVO.prototype, "rewardIds", {
    get: function () {
      return this._rewardIds;
    },
    enumerable: true,
    configurable: true
  });
  return XmlSamuraiDaimyoRewardVO;
}();
exports.XmlSamuraiDaimyoRewardVO = a;