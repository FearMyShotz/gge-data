Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function LootBoxTypeVO() {
    this._lootBoxTypeID = 0;
    this._lootBoxKeyPayoutThreshold = 0;
    this._lootBoxKeyProgress = 0;
    this._lootBoxTheme = "";
  }
  Object.defineProperty(LootBoxTypeVO.prototype, "lootBoxTypeID", {
    get: function () {
      return this._lootBoxTypeID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTypeVO.prototype, "lootBoxKeyPayoutThreshold", {
    get: function () {
      return this._lootBoxKeyPayoutThreshold;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTypeVO.prototype, "lootBoxTheme", {
    get: function () {
      return this._lootBoxTheme;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTypeVO.prototype, "keyProgress", {
    get: function () {
      return this._lootBoxKeyProgress;
    },
    set: function (e) {
      this._lootBoxKeyProgress = e;
    },
    enumerable: true,
    configurable: true
  });
  LootBoxTypeVO.prototype.parseXML = function (e) {
    this._lootBoxKeyPayoutThreshold = parseInt(n.CastleXMLUtils.getValueOrDefault("lootBoxKeyPayoutThreshold", e, "0", true));
    this._lootBoxTheme = n.CastleXMLUtils.getValueOrDefault("lootBoxTheme", e, "0", true);
    this._lootBoxTypeID = parseInt(n.CastleXMLUtils.getValueOrDefault("lootBoxTypeID", e, "0"));
  };
  LootBoxTypeVO.LOOT_BOX_TYPE_MYSTERY_BOX = 1;
  LootBoxTypeVO.LOOT_BOX_TYPE_GENERAL_BOX = 2;
  return LootBoxTypeVO;
}();
exports.LootBoxTypeVO = o;