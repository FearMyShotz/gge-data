Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./4297.js");
var r = require("./810.js");
var l = require("./1626.js");
var c = require("./54.js");
var u = require("./4298.js");
var d = require("./1888.js");
var p = function (e) {
  function CastleLootboxData(t) {
    var i = e.call(this) || this;
    i._inventory = [];
    i.xml = new u.CastleLootBoxDataXML(t);
    return i;
  }
  n.__extends(CastleLootboxData, e);
  CastleLootboxData.prototype.reset = function () {
    this._inventory = [];
    this.xml.resetLootBoxTypeKeyProgress();
  };
  CastleLootboxData.prototype.parse_GLS = function (e) {
    if (e) {
      this._inventory = [];
      for (var t = 0, i = e.ALL; t < i.length; t++) {
        var n = i[t];
        this._inventory.push(new l.ACollectableItemLootBoxVO(n.ID, n.AMT));
      }
      for (var o = 0, a = e.KEY; o < a.length; o++) {
        var s = a[o];
        this.setKeyProgress(s.ID, s.AMT);
      }
      this._inventory.sort(this.sortLootBoxesBySortOrder);
      this.dispatchEvent(new r.CastleLootBoxDataEvent(r.CastleLootBoxDataEvent.INVENTORY_UPDATED));
    }
  };
  CastleLootboxData.prototype.setKeyProgress = function (e, t) {
    this.xml.getLootBoxTypeByID(e).keyProgress = t;
  };
  CastleLootboxData.prototype.sortLootBoxesBySortOrder = function (e, t) {
    return e.lootBoxVO.sortOrder - t.lootBoxVO.sortOrder;
  };
  CastleLootboxData.prototype.openLootBox = function (e, t, i) {
    o.BasicModel.smartfoxClient.sendCommandVO(new s.C2SOpenLootBoxVO(e, t, i));
  };
  CastleLootboxData.prototype.parse_DUMMY = function (e) {
    this._inventory.push(new l.ACollectableItemLootBoxVO(1, 20));
    this._inventory.push(new l.ACollectableItemLootBoxVO(5, 21));
    this._inventory.push(new l.ACollectableItemLootBoxVO(9, 22));
    this._inventory.push(new l.ACollectableItemLootBoxVO(13, 23));
    this._inventory.push(new l.ACollectableItemLootBoxVO(14, 24));
    this._inventory.push(new l.ACollectableItemLootBoxVO(15, 25));
    this._inventory.push(new l.ACollectableItemLootBoxVO(16, 27));
    this._inventory.sort(this.sortLootBoxesBySortOrder);
    var t = "";
    for (var i = 0; i < this._inventory.length; i++) {
      t += this._inventory[i].lootBoxVO.sortOrder + ", ";
    }
    console.log(t);
    this.dispatchEvent(new r.CastleLootBoxDataEvent(r.CastleLootBoxDataEvent.INVENTORY_UPDATED));
  };
  CastleLootboxData.prototype.allLootBoxes = function () {
    return this._inventory;
  };
  CastleLootboxData.prototype.allLootBoxAmount = function () {
    var e = 0;
    for (var t = 0; t < this._inventory.length; t++) {
      e += this._inventory[t].amount;
    }
    return e;
  };
  CastleLootboxData.prototype.getLootBoxesForCurrentType = function (e, t) {
    var i;
    var n = [];
    for (var o = 0; o < this._inventory.length; o++) {
      if ((i = this._inventory[o]).lootBoxVO.name == e && i.lootBoxVO.rarity == t) {
        n.push(i);
      }
    }
    return n;
  };
  CastleLootboxData.prototype.getMysteryKeyProgress = function () {
    return this.xml.getLootBoxTypeByID(d.LootBoxTypeVO.LOOT_BOX_TYPE_MYSTERY_BOX).keyProgress;
  };
  CastleLootboxData.prototype.getMysteryKeyProgressMax = function () {
    return this.xml.getLootBoxTypeByID(d.LootBoxTypeVO.LOOT_BOX_TYPE_MYSTERY_BOX).lootBoxKeyPayoutThreshold;
  };
  return CastleLootboxData;
}(c.CastleBasicData);
exports.CastleLootboxData = p;
a.classImplementsInterfaces(p, "IUpdatable", "ICastleBasicData");