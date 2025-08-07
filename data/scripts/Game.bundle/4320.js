Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./4.js");
var s = function (e) {
  function FriendInfoVO() {
    var t = this;
    t._playerID = 0;
    t._level = 0;
    t._allianceID = 0;
    t._isOnline = false;
    t._distance = 0;
    t._mightPoints = 0;
    t._viaReferAFriend = false;
    t._isInvited = false;
    t._highlight = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(FriendInfoVO, e);
  FriendInfoVO.prototype.parseParamObject = function (e) {
    this._playerID = parseInt(e.PID);
    this._playerName = e.PN;
    this._level = parseInt(e.LVL);
    this._allianceID = parseInt(e.AID);
    this._allianceName = e.AN;
    this._isOnline = !!parseInt(e.ION);
    this._distance = parseInt(e.D);
    this._mightPoints = parseInt(e.MP);
    this._viaReferAFriend = !!parseInt(e.IRF);
    this._isInvited = !!parseInt(e.IIN);
  };
  Object.defineProperty(FriendInfoVO.prototype, "playerID", {
    get: function () {
      return this._playerID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "playerName", {
    get: function () {
      return this._playerName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "allianceID", {
    get: function () {
      return this._allianceID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "allianceName", {
    get: function () {
      return this._allianceName;
    },
    enumerable: true,
    configurable: true
  });
  FriendInfoVO.prototype.getAllianceName = function () {
    if (this._allianceName) {
      return this._allianceName;
    }
    var e = a.CastleModel.allianceData.getAllianceInfoVOByID(this._allianceID);
    if (e) {
      this._allianceName = e.allianceName;
      return e.allianceName;
    } else {
      return "-";
    }
  };
  Object.defineProperty(FriendInfoVO.prototype, "isOnline", {
    get: function () {
      return this._isOnline;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "distance", {
    get: function () {
      return this._distance;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "mightPoints", {
    get: function () {
      return this._mightPoints;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "viaReferAFriend", {
    get: function () {
      return this._viaReferAFriend;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "isInvited", {
    get: function () {
      return this._isInvited;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FriendInfoVO.prototype, "highlight", {
    get: function () {
      return this._highlight;
    },
    set: function (e) {
      this._highlight = e;
    },
    enumerable: true,
    configurable: true
  });
  return FriendInfoVO;
}(o.ScrollItemVO);
exports.FriendInfoVO = s;