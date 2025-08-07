Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./1341.js");
var r = require("./72.js");
var l = require("./4.js");
var c = require("./1623.js");
var u = function (e) {
  function PlayerGiftData() {
    var t = this;
    t._receivingPlayerID = 0;
    t._sendablePackageAmount = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._playerGifts = [];
    return t;
  }
  n.__extends(PlayerGiftData, e);
  PlayerGiftData.prototype.parse_PGL = function (e, t) {
    if (e) {
      var i;
      this._sendablePackageAmount = t;
      this._playerGifts = [];
      for (var n = 0; n < e.length; n++) {
        (i = new c.PlayerGiftVO()).parseFromArray(e[n]);
        this._playerGifts.push(i);
      }
      o.VectorSortHelper.sort(this._playerGifts, PlayerGiftData.sortOnSortOrder);
      this.dispatchEvent(new s.PlayerGiftEvent(s.PlayerGiftEvent.PLAYER_GIFT_LIST_RECEIVED));
    }
  };
  PlayerGiftData.sortOnSortOrder = function (e, t) {
    return e.eventPackageVO.sortOrder - t.eventPackageVO.sortOrder;
  };
  Object.defineProperty(PlayerGiftData.prototype, "playerGifts", {
    get: function () {
      return this._playerGifts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "giftEventPackageVOs", {
    get: function () {
      var e = [];
      if (this.playerGifts != null) {
        for (var t = 0, i = this.playerGifts; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e.push(n.eventPackageVO);
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  PlayerGiftData.prototype.getGiftVOByEventPackageVO = function (e) {
    if (this.playerGifts != null) {
      for (var t = 0, i = this.playerGifts; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.eventPackageVO == e) {
          return n;
        }
      }
    }
    return null;
  };
  PlayerGiftData.prototype.getPackageAmountByPackageID = function (e) {
    if (this.playerGifts != null) {
      for (var t = 0, i = this.playerGifts; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.eventPackageVO.packageID == e) {
          return n.amount;
        }
      }
    }
    return 0;
  };
  PlayerGiftData.prototype.getPackageVOByID = function (e) {
    if (this.playerGifts != null) {
      for (var t = 0, i = this.playerGifts; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.eventPackageVO.packageID == e) {
          return n.eventPackageVO;
        }
      }
    }
    return null;
  };
  Object.defineProperty(PlayerGiftData.prototype, "receivingPlayerID", {
    get: function () {
      return this._receivingPlayerID;
    },
    set: function (e) {
      this._receivingPlayerID = e;
      this._playerName = l.CastleModel.otherPlayerData.getOwnerInfoVO(l.CastleModel.playerGiftData.receivingPlayerID).playerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "giftPackagesInInventoryAmount", {
    get: function () {
      var e = 0;
      if (this._playerGifts != null) {
        for (var t = 0, i = this._playerGifts; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            e += n.amount;
          }
        }
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "sendablePackageAmount", {
    get: function () {
      return this._sendablePackageAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "maxBuyablePackageAmount", {
    get: function () {
      return Math.max(0, a.PackageConst.MAX_PLAYER_GIFT_STORAGE - this.giftPackagesInInventoryAmount);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(PlayerGiftData.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  return PlayerGiftData;
}(r.CastleEventDispatcher);
exports.PlayerGiftData = u;