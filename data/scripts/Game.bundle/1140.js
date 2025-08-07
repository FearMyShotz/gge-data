Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleInvasionCampNodeVO() {
    this._countVictory = 0;
    this._coolDown = 0;
    this._skipCost = 0;
    this._wallBonus = 0;
    this._gateBonus = 0;
    this._campSize = 0;
    this._factionID = 0;
  }
  CastleInvasionCampNodeVO.prototype.parseXML = function (e) {
    this._countVictory = parseInt(a.CastleXMLUtils.getValueOrDefault("countVictory", e, "0"));
    this._coolDown = parseInt(a.CastleXMLUtils.getValueOrDefault("coolDown", e, "0"));
    this._skipCost = parseInt(a.CastleXMLUtils.getValueOrDefault("skipCosts", e, "0"));
    this._wallBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("wallBonus", e, "0"));
    this._gateBonus = parseInt(a.CastleXMLUtils.getValueOrDefault("gateBonus", e, "0"));
    this._campSize = parseInt(a.CastleXMLUtils.getValueOrDefault("campSize", e, "0"));
    this._factionID = parseInt(a.CastleXMLUtils.getValueOrDefault("factionID", e, "0"));
  };
  CastleInvasionCampNodeVO.prototype.getId = function () {
    return this._countVictory;
  };
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "countVictory", {
    get: function () {
      return this._countVictory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "coolDown", {
    get: function () {
      return this._coolDown;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "skipCost", {
    get: function () {
      return this._skipCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "wallBonus", {
    get: function () {
      return this._wallBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "gateBonus", {
    get: function () {
      return this._gateBonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "campSize", {
    get: function () {
      return this._campSize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInvasionCampNodeVO.prototype, "factionID", {
    get: function () {
      return this._factionID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleInvasionCampNodeVO;
}();
exports.CastleInvasionCampNodeVO = n;
var o = require("./1.js");
var a = require("./22.js");
o.classImplementsInterfaces(n, "ICastleXmlNode");