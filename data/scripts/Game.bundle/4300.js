Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function LootBoxTombolaVO() {
    this._ID = 0;
    this._lootBoxTombolaID = 0;
    this._rewardCategory = "";
    this._rewardIDs = [];
    this._shares = 0;
  }
  Object.defineProperty(LootBoxTombolaVO.prototype, "ID", {
    get: function () {
      return this._ID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTombolaVO.prototype, "lootBoxTombolaID", {
    get: function () {
      return this._lootBoxTombolaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTombolaVO.prototype, "rewardCategory", {
    get: function () {
      return this._rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTombolaVO.prototype, "rewardIDs", {
    get: function () {
      return this._rewardIDs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LootBoxTombolaVO.prototype, "shares", {
    get: function () {
      return this._shares;
    },
    enumerable: true,
    configurable: true
  });
  LootBoxTombolaVO.prototype.parseXML = function (e) {
    this._ID = parseInt(n.CastleXMLUtils.getValueOrDefault("entryID", e, "0", true));
    var t = n.CastleXMLUtils.getIntAttribute("rewardCategory", e, 0);
    if (t > 0) {
      switch (t) {
        case 1:
          this._rewardCategory = "Common";
          break;
        case 2:
          this._rewardCategory = "Rare";
          break;
        case 3:
          this._rewardCategory = "Epic";
          break;
        case 4:
          this._rewardCategory = "Legendary";
      }
    } else {
      this._rewardCategory = n.CastleXMLUtils.getValueOrDefault("rewardCategory", e, "0", true);
    }
    this._lootBoxTombolaID = parseInt(n.CastleXMLUtils.getValueOrDefault("tombolaID", e, "0"));
    this._rewardIDs = n.CastleXMLUtils.createIntListFromAttribute("rewardIDs", e);
    this._shares = parseInt(n.CastleXMLUtils.getValueOrDefault("shares", e, "0"));
  };
  return LootBoxTombolaVO;
}();
exports.LootBoxTombolaVO = o;