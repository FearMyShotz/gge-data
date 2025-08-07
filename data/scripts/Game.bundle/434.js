Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function CastleInviteFriendsData(t) {
    var i = e.call(this) || this;
    i._receivedRewardsCount = 0;
    i._maxPossibleRewardsCount = 0;
    i._invitedFriendCount = 0;
    i._invitedFriendsWithPaymentCount = 0;
    i._referralLink = "";
    i.parseInviteRewardData(t);
    return i;
  }
  n.__extends(CastleInviteFriendsData, e);
  CastleInviteFriendsData.prototype.reset = function () {
    this._referralLink = "";
  };
  CastleInviteFriendsData.prototype.parse_FII = function (e) {
    if (e.RR) {
      var t = e.RR;
      this._inviteRewardsReceived = [];
      for (var i = 0; i < t.length; i++) {
        var n = p.int(t[i][t[i].length - 1]);
        var o = this.getRewardVOsForPrivateOfferID(t[i][0]);
        if (o != null) {
          for (var a = 0, r = o; a < r.length; a++) {
            var l = r[a];
            if (l !== undefined && l.friendCount <= n) {
              this._inviteRewardsReceived.push(l.id);
            }
          }
        }
      }
    }
    this._receivedRewardsCount = p.int(this._inviteRewardsReceived.length);
    if (CastleInviteFriendsData.UNCHECKED_REWARDS != null) {
      for (var c = 0, u = CastleInviteFriendsData.UNCHECKED_REWARDS; c < u.length; c++) {
        var d = u[c];
        if (d !== undefined && this._inviteRewardsReceived.indexOf(d) > -1) {
          this._receivedRewardsCount--;
        }
      }
    }
    this._invitedFriendsWithPaymentCount = p.int(e.PF ? e.PF : 0);
    this._invitedFriendCount = p.int(e.FC ? e.FC : 0);
    this.castleController.dispatchEvent(new s.CastleUserDataEvent(s.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED));
  };
  CastleInviteFriendsData.prototype.parseInviteRewardData = function (e) {
    this._inviteRewardList = [];
    this._maxPossibleRewardsCount = 0;
    var t = e.inviterewardsteps;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          var a = new C.InviteRewardVO();
          a.fillFromParamXml(o);
          this._inviteRewardList.push(a);
          if (CastleInviteFriendsData.UNCHECKED_REWARDS.indexOf(a.id) == -1) {
            this._maxPossibleRewardsCount++;
          }
        }
      }
    }
  };
  CastleInviteFriendsData.prototype.getFriendInviteLink = function () {
    if (this._referralLink == "") {
      r.BasicController.getInstance().addEventListener(u.GenerateInviteCodeEvent.INVITE_CODE_GENERATED, this.bindFunction(this.handleGeneratedInviteCode));
      g.CastleModel.smartfoxClient.sendCommandVO(new l.CoreC2SGenerateInviteCodeVO(CastleInviteFriendsData.REFERRAL_CODE_TYPE_LINK, c.GGSCountryController.instance.currentCountry.ggsCountryCode));
    }
  };
  CastleInviteFriendsData.prototype.handleGeneratedInviteCode = function (e) {
    this._referralLink = e.inviteCodeOrLink;
    d.debug("referral link is " + this._referralLink);
    r.BasicController.getInstance().removeEventListener(u.GenerateInviteCodeEvent.INVITE_CODE_GENERATED, this.bindFunction(this.handleGeneratedInviteCode));
    this.castleController.dispatchEvent(new s.CastleUserDataEvent(s.CastleUserDataEvent.FRIEND_INVITE_INFO_UPDATED));
  };
  CastleInviteFriendsData.prototype.getNextUnreachedReward = function () {
    var e = p.int(this._inviteRewardsReceived && this._inviteRewardsReceived.length > 0 ? this._inviteRewardsReceived.sort()[this._inviteRewardsReceived.length - 1] : -1);
    if (e > 0) {
      return this.getRewardVOByID(e + 1);
    } else {
      return this.getRewardVOByID(1);
    }
  };
  CastleInviteFriendsData.prototype.getRewardVOsForFriendLevel = function (e) {
    var t = [];
    if (this._inviteRewardList != null) {
      for (var i = 0, n = this._inviteRewardList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.friendLevel == e) {
          t.push(o);
        }
      }
    }
    return t.sort(a.ClientConstSort.sortInviteRewardsByLevel);
  };
  CastleInviteFriendsData.prototype.getRewardVOsForFriendCount = function (e) {
    var t = [];
    if (this._inviteRewardList != null) {
      for (var i = 0, n = this._inviteRewardList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.friendCount == e) {
          t.push(o);
        }
      }
    }
    return t.sort(a.ClientConstSort.sortInviteRewardsByLevel);
  };
  CastleInviteFriendsData.prototype.getRewardVOsForPrivateOfferID = function (e) {
    var t = [];
    if (this._inviteRewardList != null) {
      for (var i = 0, n = this._inviteRewardList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.relatedPrivateOfferID == e) {
          t.push(o);
        }
      }
    }
    return t.sort(a.ClientConstSort.sortInviteRewardsByLevel);
  };
  CastleInviteFriendsData.prototype.getRewardVOByID = function (e) {
    var t;
    if (this._inviteRewardList != null) {
      for (var i = 0, n = this._inviteRewardList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.id == e) {
          t = o;
          break;
        }
      }
    }
    return t;
  };
  CastleInviteFriendsData.prototype.getRewardVOsByType = function (e) {
    var t = [];
    if (this._inviteRewardList != null) {
      for (var i = 0, n = this._inviteRewardList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.type == e) {
          t.push(o);
        }
      }
    }
    return t;
  };
  CastleInviteFriendsData.prototype.getRewardVOByTypeAndFriendCount = function (e, t) {
    if (this._inviteRewardList != null) {
      for (var i = 0, n = this._inviteRewardList; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.type == e && o.friendCount == t) {
          return o;
        }
      }
    }
    return null;
  };
  Object.defineProperty(CastleInviteFriendsData.prototype, "invitedFriendCount", {
    get: function () {
      return this._invitedFriendCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInviteFriendsData.prototype, "invitedFriendsWithPaymentCount", {
    get: function () {
      return this._invitedFriendsWithPaymentCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInviteFriendsData.prototype, "receivedRewardsCount", {
    get: function () {
      return this._receivedRewardsCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInviteFriendsData.prototype, "maxPossibleRewardsCount", {
    get: function () {
      return this._maxPossibleRewardsCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInviteFriendsData.prototype, "referralLink", {
    get: function () {
      return this._referralLink;
    },
    enumerable: true,
    configurable: true
  });
  CastleInviteFriendsData.prototype.hasRewardBeenReceived = function (e, t = false) {
    if (t) {
      return CastleInviteFriendsData.UNCHECKED_REWARDS.indexOf(e) == -1 && this._inviteRewardsReceived.indexOf(e) != -1;
    } else {
      return this._inviteRewardsReceived.indexOf(e) != -1;
    }
  };
  Object.defineProperty(CastleInviteFriendsData.prototype, "castleController", {
    get: function () {
      return h.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleInviteFriendsData.__initialize_static_members = function () {
    CastleInviteFriendsData.UNCHECKED_REWARDS = [33, 34];
    CastleInviteFriendsData.REFERRAL_CODE_TYPE_LINK = "link";
    CastleInviteFriendsData.REFERRAL_CODE_TYPE_FACEBOOK = "facebook";
    CastleInviteFriendsData.SUFFIX_REFER_METHOD = "&refer_method=";
    CastleInviteFriendsData.SUFFIX_REFER_METHOD_LINK = CastleInviteFriendsData.SUFFIX_REFER_METHOD + CastleInviteFriendsData.REFERRAL_CODE_TYPE_LINK;
    CastleInviteFriendsData.SUFFIX_REFER_METHOD_FACEBOOK = CastleInviteFriendsData.SUFFIX_REFER_METHOD + CastleInviteFriendsData.REFERRAL_CODE_TYPE_FACEBOOK;
    CastleInviteFriendsData.TYPE_PAYMENT = "payment";
    CastleInviteFriendsData.TYPE_LEVEL = "level";
  };
  return CastleInviteFriendsData;
}(require("./54.js").CastleBasicData);
exports.CastleInviteFriendsData = o;
var a = require("./75.js");
var s = require("./32.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./6.js");
var h = require("./15.js");
var g = require("./4.js");
var C = require("./2288.js");
o.__initialize_static_members();
exports.getFacebookReferralLink = function () {
  return g.CastleModel.inviteFriendsData.referralLink + o.SUFFIX_REFER_METHOD_FACEBOOK;
};