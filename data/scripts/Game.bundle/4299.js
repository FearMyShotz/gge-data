Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function LootBoxKeyTombolaVO() {
    this._ID = 0;
    this._lootBoxKeyTombolaID = 0;
    this._addRareMysteryBoxKey = 0;
    this._addEpicMysteryBoxKey = 0;
    this._addLegendaryMysteryBoxKey = 0;
    this._shares = 0;
  }
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "ID", {
    get: function () {
      return this._ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "lootBoxKeyTombolaID", {
    get: function () {
      return this._lootBoxKeyTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "addRareMysteryBoxKey", {
    get: function () {
      return this._addRareMysteryBoxKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "addEpicMysteryBoxKey", {
    get: function () {
      return this._addEpicMysteryBoxKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "addLegendaryMysteryBoxKey", {
    get: function () {
      return this._addLegendaryMysteryBoxKey;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxKeyTombolaVO.prototype, "shares", {
    get: function () {
      return this._shares;
    },
    enumerable: true,
    configurable: true
  });
  LootBoxKeyTombolaVO.prototype.parseXML = function (e) {
    this._ID = parseInt(n.CastleXMLUtils.getValueOrDefault("entryID", e, "0", true));
    this._lootBoxKeyTombolaID = parseInt(n.CastleXMLUtils.getValueOrDefault("tombolaID", e, "0"));
    this._addRareMysteryBoxKey = parseInt(n.CastleXMLUtils.getValueOrDefault("addRareMysteryBoxKey", e, "0"));
    this._addEpicMysteryBoxKey = parseInt(n.CastleXMLUtils.getValueOrDefault("addEpicMysteryBoxKey", e, "0"));
    this._addLegendaryMysteryBoxKey = parseInt(n.CastleXMLUtils.getValueOrDefault("addLegendaryMysteryBoxKey", e, "0"));
    this._shares = parseInt(n.CastleXMLUtils.getValueOrDefault("shares", e, "0"));
  };
  return LootBoxKeyTombolaVO;
}();
exports.LootBoxKeyTombolaVO = o;