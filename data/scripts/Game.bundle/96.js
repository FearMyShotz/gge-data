Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./5.js");
var o = require("./3.js");
var a = require("./6.js");
var s = require("./55.js");
var r = function () {
  function ACollectableItemVO(e) {
    this._itemType = l.CollectableEnum.UNKNOWN;
    this._grantType = a.int(n.RewardConst.PLAYER);
    this._amount = 0;
    this._isSubscriptionBuffed = false;
    this._useSubscriptionStar = false;
    if (this._itemType == l.CollectableEnum.UNKNOWN) {
      this._itemType = l.CollectableEnum.getTypeByDataClass(s.ClientConstUtils.getClassFromObject(this));
    }
    this._amount = e;
  }
  ACollectableItemVO.prototype.parseServerObject = function (e) {};
  ACollectableItemVO.prototype.parseXmlObject = function (e) {
    this.amount = a.int(e);
  };
  ACollectableItemVO.prototype.combineWith = function (e) {
    this.amount += e.amount;
  };
  ACollectableItemVO.prototype.getTooltipTextId = function () {
    return "";
  };
  ACollectableItemVO.prototype.getDescriptionTextId = function () {
    return "";
  };
  ACollectableItemVO.prototype.getDescriptionTextParams = function () {
    if (this.amount > 0) {
      return [this.amount];
    } else {
      return null;
    }
  };
  ACollectableItemVO.prototype.getNameTextId = function () {
    return this.getTooltipTextId();
  };
  ACollectableItemVO.prototype.getNameTextParams = function () {
    return null;
  };
  ACollectableItemVO.prototype.getTextfieldText = function () {
    return "";
  };
  ACollectableItemVO.prototype.equals = function (e) {
    return !!e && this.itemType == e.itemType && this.grantType == e.grantType;
  };
  ACollectableItemVO.prototype.isSameAs = function (e) {
    return this.equals(e) && this.amount == e.amount;
  };
  ACollectableItemVO.prototype.clone = function () {
    var e = new (s.ClientConstUtils.getClassFromObject(this))();
    e.amount = this.amount;
    e.grantType = this.grantType;
    return e;
  };
  ACollectableItemVO.prototype.isCombineAbleWith = function (e) {
    return !!e && this.grantType == e.grantType && this.itemType == e.itemType;
  };
  Object.defineProperty(ACollectableItemVO.prototype, "itemType", {
    get: function () {
      return this._itemType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "grantType", {
    get: function () {
      return this._grantType;
    },
    set: function (e) {
      this._grantType = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "amount", {
    get: function () {
      return Math.floor(this._amount);
    },
    set: function (e) {
      this._amount = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "isSubscriptionBuffed", {
    get: function () {
      return this._isSubscriptionBuffed;
    },
    set: function (e) {
      this._isSubscriptionBuffed = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "useSubscriptionStar", {
    get: function () {
      return this._useSubscriptionStar;
    },
    set: function (e) {
      this._useSubscriptionStar = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "isGuaranteed", {
    get: function () {
      return this._isGuaranteed;
    },
    set: function (e) {
      this._isGuaranteed = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "isPurchased", {
    get: function () {
      return this._isPurchased;
    },
    set: function (e) {
      this._isPurchased = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACollectableItemVO.prototype, "isLocked", {
    get: function () {
      return this._isLocked;
    },
    set: function (e) {
      this._isLocked = e;
    },
    enumerable: true,
    configurable: true
  });
  ACollectableItemVO.prototype.getSearchString = function () {
    return o.Localize.text(this.getNameTextId(), this.getNameTextParams());
  };
  return ACollectableItemVO;
}();
exports.ACollectableItemVO = r;
var l = require("./12.js");