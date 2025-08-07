Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleRubyWishingWellVO() {
    this._id = 0;
    this._wodId = 0;
    this._entryCosts = 0;
    this._costStone = 0;
    this._costWood = 0;
    this._neededWishingWellCoins = 0;
    this._waitingTime = 0;
    this._upgradeWodID = 0;
    this._downgradeWodID = 0;
  }
  CastleRubyWishingWellVO.prototype.parseXML = function (e) {
    this._id = parseInt(e.level || "");
    this._wodId = parseInt(e.wodID || "");
    this._entryCosts = parseInt(e.entryCosts || "");
    this._costStone = parseInt(e.costStone || "");
    this._costWood = parseInt(e.costWood || "");
    this._neededWishingWellCoins = parseInt(e.costWishingWellCoin || "");
    this._waitingTime = parseInt(e.waitingTime || "");
    this._upgradeWodID = parseInt(a.CastleXMLUtils.getValueOrDefault("upgradeWodID", e, "-1"));
    this._downgradeWodID = parseInt(a.CastleXMLUtils.getValueOrDefault("downgradeWodID", e, "-1"));
  };
  CastleRubyWishingWellVO.prototype.getId = function () {
    return this._id;
  };
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "wodId", {
    get: function () {
      return this._wodId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "entryCosts", {
    get: function () {
      return this._entryCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "costStone", {
    get: function () {
      return this._costStone;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "costWood", {
    get: function () {
      return this._costWood;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "neededWishingWellCoins", {
    get: function () {
      return this._neededWishingWellCoins;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "waitingTime", {
    get: function () {
      return this._waitingTime;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "upgradeWodID", {
    get: function () {
      return this._upgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRubyWishingWellVO.prototype, "downgradeWodID", {
    get: function () {
      return this._downgradeWodID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRubyWishingWellVO;
}();
exports.CastleRubyWishingWellVO = n;
var o = require("./1.js");
var a = require("./22.js");
o.classImplementsInterfaces(n, "ICastleXmlNode");