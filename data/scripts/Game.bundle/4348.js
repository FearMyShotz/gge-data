Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./50.js");
var a = require("./4.js");
var s = function () {
  function GachaXmlVO() {
    this._maxPulls = Number.MAX_VALUE;
  }
  GachaXmlVO.prototype.init = function (e) {
    this._gachaID = parseInt(e.gachaID || "0");
    this._eventID = parseInt(e.eventID || "0");
    this._rewardSetID = parseInt(e.rewardSetID || "0");
    this._tombolaSpinsAmount = parseInt(e.tombolaSpinsAmount || "0");
    this._gachaLevel = parseInt(e.gachaLevel || "0");
    this._minPulls = parseInt(e.minPulls || "0");
    this._maxPulls = parseInt(e.maxPulls || "0") || Number.MAX_VALUE;
    this._lootboxTombolaID = parseInt(e.lootBoxTombolaID || "0");
    this._multiPullMax = parseInt(e.multiPullMax || "0");
    this._leagueTypeIDs = n.CastleXMLUtils.createIntListFromAttribute("leagueTypeIDs", e);
    this._costs = o.CollectableManager.parser.x2cEventPackages.createCostList(e);
    this._skinID = e.skinID || "";
  };
  Object.defineProperty(GachaXmlVO.prototype, "gachaID", {
    get: function () {
      return this._gachaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "eventID", {
    get: function () {
      return this._eventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "rewardSetID", {
    get: function () {
      return this._rewardSetID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "tombolaSpinsAmount", {
    get: function () {
      return this._tombolaSpinsAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "gachaLevel", {
    get: function () {
      return this._gachaLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "minPulls", {
    get: function () {
      return this._minPulls;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "maxPulls", {
    get: function () {
      return this._maxPulls;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "lootboxTombolaID", {
    get: function () {
      return this._lootboxTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "multiPullMax", {
    get: function () {
      return this._multiPullMax;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "costs", {
    get: function () {
      return this._costs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "leagueTypeIDs", {
    get: function () {
      return this._leagueTypeIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GachaXmlVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  GachaXmlVO.prototype.getLootBoxTombolas = function () {
    return a.CastleModel.lootBoxData.xml.getLootBoxTombolasByTombolaID(this.lootboxTombolaID);
  };
  Object.defineProperty(GachaXmlVO.prototype, "isMaxLevel", {
    get: function () {
      return this.maxPulls == Number.MAX_VALUE;
    },
    enumerable: true,
    configurable: true
  });
  return GachaXmlVO;
}();
exports.GachaXmlVO = s;