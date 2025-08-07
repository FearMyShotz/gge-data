Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./548.js");
var r = function (e) {
  function CastleGenericRewardDialogProperties(t, i, n = false) {
    var o = e.call(this) || this;
    o._isFirstPrize = false;
    o._isTopX = false;
    o._points = 0;
    o._topXCount = 0;
    o._ownRank = 0;
    o._grantType = 0;
    o._optionID = 0;
    o._isFirstPrize = t;
    o._isTopX = n;
    o._points = a.int(i.OP ? i.OP : -1);
    o._ownRank = a.int(i.OR ? i.OR : -1);
    o._topXCount = a.int(i.TX ? i.TX : -1);
    o._optionID = a.int(i.EOID ? i.EOID : -1);
    o._rewardList = l.CastlePopUpHelper.createRewardList(i);
    o._grantType = i.GT ? parseInt(i.GT) : -1;
    o.getSkinBySkinId(i.SID);
    return o;
  }
  n.__extends(CastleGenericRewardDialogProperties, e);
  CastleGenericRewardDialogProperties.prototype.getSkinBySkinId = function (e) {
    this._skin = e ? s.LongTermPointEventSkin.getTypeById(e) : s.LongTermPointEventSkin.DEFAULT;
  };
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "isFirstPrize", {
    get: function () {
      return this._isFirstPrize;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "rewardList", {
    get: function () {
      return this._rewardList;
    },
    set: function (e) {
      this._rewardList = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "points", {
    get: function () {
      return this._points;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "ownRank", {
    get: function () {
      return this._ownRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "isTopX", {
    get: function () {
      return this._isTopX;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "topXCount", {
    get: function () {
      return this._topXCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "skin", {
    get: function () {
      return this._skin;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "grantType", {
    get: function () {
      return this._grantType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialogProperties.prototype, "optionID", {
    get: function () {
      return this._optionID;
    },
    enumerable: true,
    configurable: true
  });
  return CastleGenericRewardDialogProperties;
}(o.BasicProperties);
exports.CastleGenericRewardDialogProperties = r;
var l = require("./405.js");