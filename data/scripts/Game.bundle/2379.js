Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleForumTopicDetailVO() {
    this._topicName = "";
  }
  CastleForumTopicDetailVO.prototype.parseGTR = function (e) {
    this._topicName = s.TextValide.parseChatJSONMessage(e.TN);
    this._visibleRankingGroups = e.RG;
    this._author = e.CN;
    this._posts = [];
    if (e.R) {
      for (var t = 0; t < e.R.length; ++t) {
        var i = new a.CastleForumPostVO();
        i.parseGTRItem(e.R[t]);
        this._posts.push(i);
      }
    }
  };
  CastleForumTopicDetailVO.prototype.hasRightsToChangeVisibility = function () {
    return o.CastleAllianceForumData.hasTopicRightsToDeleteOrAnswerOrChangeVisibility(this.author, this.visibleRankingGroups);
  };
  Object.defineProperty(CastleForumTopicDetailVO.prototype, "posts", {
    get: function () {
      return this._posts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicDetailVO.prototype, "topicName", {
    get: function () {
      return this._topicName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicDetailVO.prototype, "visibleRankingGroups", {
    get: function () {
      return this._visibleRankingGroups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicDetailVO.prototype, "author", {
    get: function () {
      return this._author;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumTopicDetailVO;
}();
exports.CastleForumTopicDetailVO = n;
var o = require("./223.js");
var a = require("./2380.js");
var s = require("./2.js");