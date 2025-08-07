Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = require("./4.js");
var a = function () {
  function LootBoxVO() {
    this._lootBoxID = 0;
    this._lootBoxTypeID = 0;
    this._lootBoxTombolaID = 0;
    this._lootBoxKeyTombolaID = 0;
    this._name = "";
    this._rarity = 0;
    this._draws = 0;
    this._sortOrder = 0;
  }
  Object.defineProperty(LootBoxVO.prototype, "lootBoxID", {
    get: function () {
      return this._lootBoxID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "sortOrder", {
    get: function () {
      return this._sortOrder;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "lootBoxTypeID", {
    get: function () {
      return this._lootBoxTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "lootBoxType", {
    get: function () {
      return o.CastleModel.lootBoxData.xml.getLootBoxTypeByID(this.lootBoxTypeID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "lootBoxTombolaID", {
    get: function () {
      return this._lootBoxTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "lootBoxKeyTombolaID", {
    get: function () {
      return this._lootBoxKeyTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "name", {
    get: function () {
      return this._name;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "rarity", {
    get: function () {
      return this._rarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxVO.prototype, "draws", {
    get: function () {
      return this._draws;
    },
    enumerable: true,
    configurable: true
  });
  LootBoxVO.prototype.parseXML = function (e) {
    this._lootBoxID = parseInt(n.CastleXMLUtils.getValueOrDefault("lootBoxID", e, "0", true));
    this._name = n.CastleXMLUtils.getValueOrDefault("name", e, "0", true);
    this._lootBoxTypeID = parseInt(n.CastleXMLUtils.getValueOrDefault("lootBoxTypeID", e, "0"));
    this._lootBoxTombolaID = parseInt(n.CastleXMLUtils.getValueOrDefault("lootBoxTombolaID", e, "0"));
    this._lootBoxKeyTombolaID = parseInt(n.CastleXMLUtils.getValueOrDefault("lootBoxKeyTombolaID", e, "0"));
    this._rarity = parseInt(n.CastleXMLUtils.getValueOrDefault("rarity", e, "0"));
    this._draws = parseInt(n.CastleXMLUtils.getValueOrDefault("draws", e, "0"));
    this._sortOrder = parseInt(n.CastleXMLUtils.getValueOrDefault("sortOrder", e, "0"));
  };
  return LootBoxVO;
}();
exports.LootBoxVO = a;