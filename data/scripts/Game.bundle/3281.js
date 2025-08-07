Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1621.js");
var a = function (e) {
  function CollectableItemAllianceGiftVO(t = null) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this, 1) || this)._giftType = t || o.AllianceGiftTypeEnum.TYPE_UNKNOWN;
    return i;
  }
  n.__extends(CollectableItemAllianceGiftVO, e);
  CollectableItemAllianceGiftVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this._giftType = t.T ? o.AllianceGiftTypeEnum.getTypeByName(t.T) : o.AllianceGiftTypeEnum.TYPE_UNKNOWN;
  };
  CollectableItemAllianceGiftVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    this.giftType = o.AllianceGiftTypeEnum.getTypeByName(t[0]);
  };
  CollectableItemAllianceGiftVO.prototype.getTooltipTextId = function () {
    return "gift_name";
  };
  CollectableItemAllianceGiftVO.prototype.getDescriptionTextId = function () {
    return "gift_short_info";
  };
  CollectableItemAllianceGiftVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.giftType = this.giftType;
    return t;
  };
  CollectableItemAllianceGiftVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  Object.defineProperty(CollectableItemAllianceGiftVO.prototype, "giftType", {
    get: function () {
      return this._giftType;
    },
    set: function (e) {
      this._giftType = e;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemAllianceGiftVO.__initialize_static_members = function () {
    CollectableItemAllianceGiftVO.SERVER_KEY = "AG";
    CollectableItemAllianceGiftVO.XML_KEY = "allianceGift";
  };
  return CollectableItemAllianceGiftVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemAllianceGiftVO = a;
a.__initialize_static_members();