Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleBuddyListData(e = null) {
    this.flashVarBuddyData = "";
    this.flashVarBuddyData = e;
    this._completeSocialBuddies = [];
    this.getSocialBuddyData();
  }
  CastleBuddyListData.prototype.getSocialBuddyData = function () {
    this._completeSocialBuddies = [];
    var e = [];
    if (this.flashVarBuddyData) {
      e = this.flashVarBuddyData.split(CastleBuddyListData.DELIMITER1);
    }
    if (this.flashVarBuddyData && this.flashVarBuddyData != "" && e[0] != "") {
      var t = e[0].split(CastleBuddyListData.DELIMITER2);
      if (t[0] != "") {
        var i = e[1].split(CastleBuddyListData.DELIMITER2);
        var n = e[2].split(CastleBuddyListData.DELIMITER2);
        for (var r = 0; r < t.length; r++) {
          var l = new s.BuddyVO();
          l.pln = String(t[r]);
          l.thumbUrl = i[r];
          l.playerName = n[r];
          this._completeSocialBuddies.push(l);
        }
        a.CastleBasicController.getInstance().dispatchEvent(new o.CastleBuddyListDataEvent(o.CastleBuddyListDataEvent.CHANGE_BUDDYDATA));
      }
    } else {
      a.CastleBasicController.getInstance().dispatchEvent(new o.CastleBuddyListDataEvent(o.CastleBuddyListDataEvent.CHANGE_BUDDYDATA));
    }
  };
  CastleBuddyListData.prototype.reset = function () {
    this._completeSocialBuddies = [];
  };
  Object.defineProperty(CastleBuddyListData.prototype, "socialBuddyList", {
    get: function () {
      return this._completeSocialBuddies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuddyListData.prototype, "amountSocialFriends", {
    get: function () {
      return this._completeSocialBuddies.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBuddyListData.prototype, "amountAllFriends", {
    get: function () {
      return this._completeSocialBuddies.length;
    },
    enumerable: true,
    configurable: true
  });
  CastleBuddyListData.__initialize_static_members = function () {
    CastleBuddyListData.DELIMITER1 = "|||";
    CastleBuddyListData.DELIMITER2 = "|";
    CastleBuddyListData.INGAMEBUDDIES = 0;
  };
  return CastleBuddyListData;
}();
exports.CastleBuddyListData = n;
var o = require("./1812.js");
var a = require("./15.js");
var s = require("./4253.js");
n.__initialize_static_members();