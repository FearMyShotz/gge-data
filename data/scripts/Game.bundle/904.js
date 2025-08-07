Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./4.js");
var a = function () {
  function GeneralXmlVO(e = null) {
    this._isNPCGeneral = false;
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  GeneralXmlVO.prototype.fillFromParamXml = function (e) {
    this._generalID = parseInt(e.generalID || "0");
    this._maxLevel = parseInt(e.maxLevel || "0");
    this._maxStarLevel = parseInt(e.maxStarLevel || "0");
    this._upgradeCurrencyIDs = n.CastleXMLUtils.getIntArrayFromString(e.upgradeCurrencyIDs || "0", ",");
    this._attackSlots = n.CastleXMLUtils.getIntArrayFromString(e.attackSlots || "", ",");
    this._defenseSlots = n.CastleXMLUtils.getIntArrayFromString(e.defenseSlots || "", ",");
    this._generalRarityID = parseInt(e.generalRarityID || "2");
    this._unlockCurrencyID = parseInt(e.unlockCurrencyID || "0");
    this._isImplemented = parseInt(e.isPreview || "0") == 0;
    this._isNPCGeneral = parseInt(e.isNPCGeneral || "0") == 1;
  };
  Object.defineProperty(GeneralXmlVO.prototype, "generalID", {
    get: function () {
      return this._generalID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "nameTextID", {
    get: function () {
      return "generals_characters_" + this._generalID + "_name";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "attackSlots", {
    get: function () {
      return this._attackSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "defenseSlots", {
    get: function () {
      return this._defenseSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "maxLevel", {
    get: function () {
      return this._maxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "maxStarLevel", {
    get: function () {
      return this._maxStarLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "upgradeCurrencyIDs", {
    get: function () {
      return this._upgradeCurrencyIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "generalRarityID", {
    get: function () {
      return this._generalRarityID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "unlockCurrencyID", {
    get: function () {
      return this._unlockCurrencyID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "rarityString", {
    get: function () {
      return this.rarity.name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "rarity", {
    get: function () {
      return o.CastleModel.generalsData.getGeneralRarityByID(this.generalRarityID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "isImplemented", {
    get: function () {
      return this._isImplemented;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "isNPCGeneral", {
    get: function () {
      return this._isNPCGeneral;
    },
    enumerable: true,
    configurable: true
  });
  GeneralXmlVO.prototype.initAsPreview = function (e) {
    this._generalID = e;
    this._isImplemented = false;
  };
  GeneralXmlVO.prototype.initAsNPC = function (e, t = true) {
    this._generalID = e;
    this._isImplemented = t;
    this._isNPCGeneral = true;
    this._generalRarityID = 4;
  };
  Object.defineProperty(GeneralXmlVO.prototype, "attackSlotXMLVOs", {
    get: function () {
      return o.CastleModel.generalsData.getGeneralSlotsByIDs(this._attackSlots);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralXmlVO.prototype, "defenceSlotXMLVOs", {
    get: function () {
      return o.CastleModel.generalsData.getGeneralSlotsByIDs(this._defenseSlots);
    },
    enumerable: true,
    configurable: true
  });
  return GeneralXmlVO;
}();
exports.GeneralXmlVO = a;