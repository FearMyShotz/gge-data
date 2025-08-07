Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./55.js");
var l = require("./605.js");
var c = require("./72.js");
var u = require("./4.js");
var d = function (e) {
  function CastleAllianceForumData() {
    var t = this;
    t._topicCount = 0;
    t._unreadTopicsCount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleAllianceForumData, e);
  CastleAllianceForumData.prototype.parseGAT = function (e) {
    this._topicCount = s.int(e.TC);
    this._topics = [];
    for (var t = 0; t < e.T.length; ++t) {
      var i = new h.CastleForumTopicVO();
      i.parseGAT(e.T[t]);
      this._topics.push(i);
    }
    this._topics.sort(this.bindFunction(this.sortTopicList));
    this.dispatchEvent(new l.CastleAllianceForumEvent(l.CastleAllianceForumEvent.UPDATE_TOPIC_OVERVIEW));
  };
  CastleAllianceForumData.prototype.sortTopicList = function (e, t) {
    if (e.lastPostTimestamp < t.lastPostTimestamp) {
      return 1;
    } else if (e.lastPostTimestamp > t.lastPostTimestamp) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleAllianceForumData.prototype.parseGTR = function (e) {
    this._topicDetail = new p.CastleForumTopicDetailVO();
    this._topicDetail.parseGTR(e);
    this.dispatchEvent(new l.CastleAllianceForumEvent(l.CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL));
  };
  CastleAllianceForumData.prototype.onDetailTopicWasNotFound = function () {
    this.dispatchEvent(new l.CastleAllianceForumEvent(l.CastleAllianceForumEvent.UPDATE_TOPIC_DETAIL, [true]));
  };
  CastleAllianceForumData.prototype.parseUTC = function (e) {
    this._unreadTopicsCount = s.int(e.UTC);
    this.dispatchEvent(new l.CastleAllianceForumEvent(l.CastleAllianceForumEvent.ON_UNREAD_TOPICS_COUNT_UPDATED));
  };
  Object.defineProperty(CastleAllianceForumData.prototype, "topicDetail", {
    get: function () {
      return this._topicDetail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceForumData.prototype, "topics", {
    get: function () {
      return this._topics;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceForumData.prototype, "topicCount", {
    get: function () {
      return this._topicCount;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceForumData.hasTopicRightsToDeleteOrAnswerOrChangeVisibility = function (e, t) {
    if (!t || !e) {
      return false;
    }
    if (u.CastleModel.userData.userName == e) {
      return true;
    }
    for (var i = 0; i < t.length; ++i) {
      if (a.AllianceConst.hasAdminRightsForTopicAndAnswers(u.CastleModel.userData.allianceRank, t[i])) {
        return true;
      }
    }
    return false;
  };
  CastleAllianceForumData.canDeletePost = function (e) {
    return a.AllianceConst.hasAdminRightsForTopicAndAnswers(u.CastleModel.userData.allianceRank, e.allianceRank) || e.author == u.CastleModel.userData.userName;
  };
  CastleAllianceForumData.getVisibilityToolTip = function (e) {
    return "dialog_alliance_communication_selectRanks_rank" + e + "_tooltip";
  };
  CastleAllianceForumData.getPreselectedTopicVisibility = function () {
    for (var e = s.int(a.AllianceConst.getRankingGroupFromRank(u.CastleModel.userData.allianceRank)), t = [], i = 0; i <= e; ++i) {
      t.push(i);
    }
    return t;
  };
  CastleAllianceForumData.isTopicFull = function (e) {
    return !!e && !!e.posts && e.posts.length >= a.AllianceConst.MAX_REPLIES_TO_TOPIC;
  };
  CastleAllianceForumData.getForumValidText = function (e) {
    return o.TextValide.getValideSmartFoxJSONTextMessage(r.ClientConstUtils.getTrimmedText(e));
  };
  CastleAllianceForumData.hasValidPostText = function (e) {
    var t = CastleAllianceForumData.getForumValidText(e);
    return t.length >= a.AllianceConst.MIN_FORUM_TEXT_LENGTH && t.length <= a.AllianceConst.MAX_REPLY_TEXT;
  };
  CastleAllianceForumData.hasValidTopicName = function (e) {
    var t = CastleAllianceForumData.getForumValidText(e);
    return t.length >= a.AllianceConst.MIN_FORUM_TEXT_LENGTH && t.length <= a.AllianceConst.MAX_TOPIC_TEXT;
  };
  Object.defineProperty(CastleAllianceForumData.prototype, "unreadTopicsCount", {
    get: function () {
      return this._unreadTopicsCount;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceForumData.__initialize_static_members = function () {
    CastleAllianceForumData.TEXTCOLOR_FULL = 13369344;
    CastleAllianceForumData.TEXTCOLOR_NONFULL = 4601387;
  };
  CastleAllianceForumData.LAST_SEARCHED_LANGUAGE = "";
  return CastleAllianceForumData;
}(c.CastleEventDispatcher);
exports.CastleAllianceForumData = d;
var p = require("./2380.js");
var h = require("./2382.js");
d.__initialize_static_members();