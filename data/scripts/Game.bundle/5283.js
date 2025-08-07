Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./231.js");
var r = require("./841.js");
var l = function (e) {
  function CastleAllianceGiftData() {
    var t = e.call(this) || this;
    t._gifts = [];
    return t;
  }
  n.__extends(CastleAllianceGiftData, e);
  CastleAllianceGiftData.prototype.parse_AGC = function (e) {
    if (!e) {
      return null;
    }
    var t = a.int(e.ID);
    this.removeGift(t);
    this.propagateChange();
    return u.CollectableManager.parser.s2cParamList.createList(e.R);
  };
  CastleAllianceGiftData.prototype.removeGift = function (e) {
    var t = this._gifts.filter(this.byGiftID(e));
    if (t.length > 0) {
      var i = t[0];
      var n = a.int(this._gifts.indexOf(i));
      if (n > -1) {
        this._gifts.splice(n, 1);
      }
    }
  };
  CastleAllianceGiftData.prototype.byGiftID = function (e) {
    return function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return t.id == e;
    };
  };
  CastleAllianceGiftData.prototype.parse_AGR = function (e) {
    if (e && e.G) {
      var t = new d.AllianceGiftVO();
      t.parseArray(e.G);
      this._gifts.push(t);
      this._gifts.sort(c.ClientConstSort.sortByExpireTime);
      this.propagateChange();
    }
  };
  CastleAllianceGiftData.prototype.propagateChange = function () {
    this._dataUpdateEvent ||= new r.CastleAllianceGiftEvent(r.CastleAllianceGiftEvent.DATA_UPDATED);
    this.dispatchEvent(this._dataUpdateEvent);
  };
  CastleAllianceGiftData.prototype.executeUpdate = function (e) {
    var t = a.int(this._gifts.length);
    var i = this._gifts.filter(this.createNonExpiredGiftsFilter(e));
    if (t != i.length) {
      this._gifts = i;
      this.propagateChange();
    }
  };
  CastleAllianceGiftData.prototype.createNonExpiredGiftsFilter = function (e) {
    return function (t) {
      var i = [];
      for (var n = 1; n < arguments.length; n++) {
        i[n - 1] = arguments[n];
      }
      return t.expiredTimeStamp > e;
    };
  };
  CastleAllianceGiftData.prototype.hasGifts = function (e) {
    return this._gifts.length > 0 && e >= s.ClientConstAlliance.MIN_LEVEL_ALLIANCE_GIFTS;
  };
  Object.defineProperty(CastleAllianceGiftData.prototype, "giftCount", {
    get: function () {
      return this._gifts.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceGiftData.prototype, "gifts", {
    get: function () {
      return this._gifts;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceGiftData;
}(require("./54.js").CastleBasicData);
exports.CastleAllianceGiftData = l;
var c = require("./75.js");
var u = require("./50.js");
var d = require("./5284.js");
o.classImplementsInterfaces(l, "IUpdatable");