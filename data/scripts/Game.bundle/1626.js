Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function ACollectableItemLootBoxVO(t = -1, i = 0) {
    var n = this;
    n._lootBoxID = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this)._lootBoxID = t;
    n._lootBoxVO = s.CastleModel.lootBoxData.xml.getLootBoxByID(n.lootBoxID);
    return n;
  }
  n.__extends(ACollectableItemLootBoxVO, e);
  ACollectableItemLootBoxVO.prototype.updateLootBoxVO = function (e = -1, t = 0) {
    this._lootBoxID = e;
    this.amount = t;
    this._lootBoxVO = s.CastleModel.lootBoxData.xml.getLootBoxByID(this.lootBoxID);
  };
  ACollectableItemLootBoxVO.prototype.parseServerObject = function (e) {
    if (o.instanceOfClass(e, "Array")) {
      this._lootBoxID = e[0];
      this.amount = e[1];
    } else {
      this._lootBoxID = e;
      this.amount = 1;
    }
    this._lootBoxVO = s.CastleModel.lootBoxData.xml.getLootBoxByID(this.lootBoxID);
  };
  ACollectableItemLootBoxVO.prototype.getTooltipTextId = function () {
    return "mysteryBox_boxName_" + this.lootBoxVO.name + "_" + this.lootBoxVO.rarity;
  };
  ACollectableItemLootBoxVO.prototype.getDescriptionTextId = function () {
    return "mysteryBox_package_info_desc";
  };
  ACollectableItemLootBoxVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    this.amount = a.int(t[1]);
    this._lootBoxID = a.int(t[0]);
    this._lootBoxVO = s.CastleModel.lootBoxData.xml.getLootBoxByID(this.lootBoxID);
  };
  Object.defineProperty(ACollectableItemLootBoxVO.prototype, "lootBoxID", {
    get: function () {
      return this._lootBoxID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemLootBoxVO.prototype, "lootBoxVO", {
    get: function () {
      return this._lootBoxVO;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemLootBoxVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t._lootBoxVO = this.lootBoxVO;
    return t;
  };
  ACollectableItemLootBoxVO.SERVER_KEY = "LB";
  ACollectableItemLootBoxVO.XML_KEY = ["lootBox"];
  return ACollectableItemLootBoxVO;
}(require("./96.js").ACollectableItemVO);
exports.ACollectableItemLootBoxVO = r;