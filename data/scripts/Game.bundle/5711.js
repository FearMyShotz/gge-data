Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./6.js");
var a = require("./436.js");
var s = require("./4.js");
var r = require("./165.js");
var l = function () {
  function PrivateResourceVillageInfoVO() {
    this._villageID = 0;
    this._type = 0;
    this._villageLevel = 0;
    this._kingdomID = 0;
    this._tokenCost = 0;
    this._tokenCostTotal = 0;
  }
  PrivateResourceVillageInfoVO.prototype.fillFromParamXML = function (e) {
    this._villageID = parseInt(e.villageID || "");
    this._typeString = e.type || "";
    this._villageLevel = parseInt(e.villageLevel || "");
    this._kingdomID = parseInt(e.kID || "");
    this._tokenCost = parseInt(e.costResourceVillageTokenLevel || "");
    this._tokenCostTotal = parseInt(e.costResourceVillageToken || "");
    this._type = o.int(n.WorldConst["VILLAGE_TYPE_" + this._typeString.toUpperCase()]);
    var t = (e.effects || "").split("&");
    var i = s.CastleModel.effectsData.getEffectByID(parseInt(t[0]));
    this._bonus = new r.BonusVO().parseFromValueString(i, t[1]);
  };
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "villageID", {
    get: function () {
      return this._villageID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "typeString", {
    get: function () {
      if (this._type == n.WorldConst.VILLAGE_TYPE_OIL) {
        return "oliveoil";
      } else {
        return a.ClientConstKingdom.getVillageTypeName(this._type);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "villageLevel", {
    get: function () {
      return this._villageLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "bonus", {
    get: function () {
      return this._bonus;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "tokenCost", {
    get: function () {
      return this._tokenCost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PrivateResourceVillageInfoVO.prototype, "tokenCostTotal", {
    get: function () {
      return this._tokenCostTotal;
    },
    enumerable: true,
    configurable: true
  });
  return PrivateResourceVillageInfoVO;
}();
exports.PrivateResourceVillageInfoVO = l;