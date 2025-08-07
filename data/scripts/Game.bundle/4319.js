Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./735.js");
var r = require("./54.js");
var l = require("./4320.js");
var c = function (e) {
  function CastleFriendListData() {
    var t = this;
    t._friendList = [];
    t._initialised = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleFriendListData, e);
  CastleFriendListData.prototype.parse_GFC = function (e) {
    this._friendList = [];
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = new l.FriendInfoVO();
          o.parseParamObject(n);
          this._friendList.push(o);
        }
      }
    }
    this._initialised = true;
    this.dispatchEvent(new s.CastleFriendListEvent(s.CastleFriendListEvent.FRIEND_LIST_UPDATED));
  };
  Object.defineProperty(CastleFriendListData.prototype, "friendList", {
    get: function () {
      return this._friendList;
    },
    enumerable: true,
    configurable: true
  });
  CastleFriendListData.prototype.isInitialised = function () {
    return this._initialised;
  };
  CastleFriendListData.prototype.isFriendAleady = function (e) {
    if (this._friendList != null) {
      for (var t = 0, i = this._friendList; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.playerID == e) {
          return true;
        }
      }
    }
    return false;
  };
  CastleFriendListData.prototype.isFriendListFull = function () {
    return this._friendList.length >= a.PlayerConst.PLAYER_MAX_FRIEND_CONNECTIONS;
  };
  return CastleFriendListData;
}(r.CastleBasicData);
exports.CastleFriendListData = c;
o.classImplementsInterfaces(c, "IUpdatable");