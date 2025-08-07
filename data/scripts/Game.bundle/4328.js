Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function GeneralRarityXmlVO(e = null) {
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  GeneralRarityXmlVO.prototype.fillFromParamXml = function (e) {
    this._generalRarityID = parseInt(e.generalRarityID || "0");
    this._name = e.name;
    this._maxStarLevel = parseInt(e.maxStarLevel || "0");
    this._universalShardsPerHundred = parseInt(e.universalShardsPerHundred || "0");
    this._unlockCosts = parseInt(e.unlockCosts || "0");
    this._upgradeCosts = n.CastleXMLUtils.getIntArrayFromString(n.CastleXMLUtils.getValueOrDefault("upgradeCosts", e, ""), ",");
    this._xpRequirements = n.CastleXMLUtils.getIntArrayFromString(n.CastleXMLUtils.getValueOrDefault("xpRequirements", e, ""), ",");
  };
  Object.defineProperty(GeneralRarityXmlVO.prototype, "generalRarityID", {
    get: function () {
      return this._generalRarityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "maxStarLevel", {
    get: function () {
      return this._maxStarLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "unlockCosts", {
    get: function () {
      return this._unlockCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "upgradeCosts", {
    get: function () {
      return this._upgradeCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "xpRequirements", {
    get: function () {
      return this._xpRequirements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "universalShardsPerHundred", {
    get: function () {
      return this._universalShardsPerHundred;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralRarityXmlVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  GeneralRarityXmlVO.prototype.getCurrentXPOfLevel = function (e) {
    return e - this._xpRequirements[this.getLevelForXP(e) - 1];
  };
  GeneralRarityXmlVO.prototype.getCurrentMaxXPOfLevel = function (e) {
    var t = this.getLevelForXP(e);
    if (t >= this._xpRequirements.length) {
      return -1;
    } else {
      return this._xpRequirements[t] - this._xpRequirements[t - 1];
    }
  };
  GeneralRarityXmlVO.prototype.nextXpNeededForCap = function (e) {
    var t = this.getLevelForXP(e);
    var i = (Math.floor(t / 10) + 1) * 10;
    return this.xpRequirements[i - 1] - e;
  };
  GeneralRarityXmlVO.prototype.getLevelForXP = function (e) {
    for (var t = 0; t < this._xpRequirements.length - 1; t++) {
      if (e >= this._xpRequirements[t] && e < this._xpRequirements[t + 1]) {
        return t + 1;
      }
    }
    return t + 1;
  };
  GeneralRarityXmlVO.prototype.getRequiredShards = function (e) {
    if (e < this._upgradeCosts.length) {
      return this._upgradeCosts[e];
    } else {
      return 0;
    }
  };
  return GeneralRarityXmlVO;
}();
exports.GeneralRarityXmlVO = o;