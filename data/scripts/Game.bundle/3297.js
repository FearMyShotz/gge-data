Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./6.js");
var a = require("./1623.js");
var s = function (e) {
  function CollectableItemGiftPackageVO(t = -1, i = 0) {
    var n = this;
    n._id = -1;
    CONSTRUCTOR_HACK;
    (n = e.call(this, i) || this).id = t;
    return n;
  }
  n.__extends(CollectableItemGiftPackageVO, e);
  CollectableItemGiftPackageVO.prototype.parseServerObject = function (t) {
    e.prototype.parseServerObject.call(this, t);
    this.amount = t[1];
    this.id = o.int(t[0]);
  };
  CollectableItemGiftPackageVO.prototype.parseXmlObject = function (e) {
    var t = e.split("+");
    this.amount = o.int(t[1]);
    this.id = o.int(t[0]);
  };
  CollectableItemGiftPackageVO.prototype.updateGiftVO = function () {
    if (this.id > 0) {
      this._playerGiftVO = new a.PlayerGiftVO();
      this._playerGiftVO.parseFromArray([this.id, this.amount]);
    }
  };
  CollectableItemGiftPackageVO.prototype.getTooltipTextId = function () {
    return "gift_name";
  };
  CollectableItemGiftPackageVO.prototype.getDescriptionTextId = function () {
    return "gift_short_info";
  };
  CollectableItemGiftPackageVO.prototype.clone = function () {
    var t = e.prototype.clone.call(this);
    t.playerGiftVO = this.playerGiftVO;
    return t;
  };
  CollectableItemGiftPackageVO.prototype.isCombineAbleWith = function (e) {
    return false;
  };
  CollectableItemGiftPackageVO.prototype.getRewardItem = function () {
    if (this.playerGiftVO) {
      return this.playerGiftVO.eventPackageVO.reward;
    } else {
      return this;
    }
  };
  Object.defineProperty(CollectableItemGiftPackageVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    set: function (e) {
      this._id = e;
      this.updateGiftVO();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectableItemGiftPackageVO.prototype, "playerGiftVO", {
    get: function () {
      return this._playerGiftVO;
    },
    set: function (e) {
      this._playerGiftVO = e;
      this._id = o.int(this.playerGiftVO ? this.playerGiftVO.packageID : -1);
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemGiftPackageVO.__initialize_static_members = function () {
    CollectableItemGiftPackageVO.SERVER_KEY = "GT";
    CollectableItemGiftPackageVO.XML_KEY = "giftPackageIDs";
  };
  return CollectableItemGiftPackageVO;
}(require("./96.js").ACollectableItemVO);
exports.CollectableItemGiftPackageVO = s;
s.__initialize_static_members();