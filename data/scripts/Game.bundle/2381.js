Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleForumTopicVO() {
    this._topicId = -1;
    this._authorRank = -1;
    this._answerCount = -1;
    this._wasRead = false;
  }
  CastleForumTopicVO.prototype.parseGAT = function (e) {
    this._topicId = s.int(e.TID);
    this._topicName = a.TextValide.parseChatJSONMessage(e.N);
    this._author = e.CN;
    this._creationTimestamp = new Date(e.CT * 1000);
    this._authorRank = s.int(e.CR);
    this._visibleRankingGroups = e.RG;
    this._answerCount = s.int(e.RC);
    this._lastPosterName = e.LRN;
    this._lastPostTimestamp = new Date(e.LRT * 1000);
    this._wasRead = !!e.R;
  };
  CastleForumTopicVO.prototype.hasRightsToDeleteTopicOrAnswer = function () {
    return o.CastleAllianceForumData.hasTopicRightsToDeleteOrAnswerOrChangeVisibility(this.author, this.visibleRankingGroups);
  };
  Object.defineProperty(CastleForumTopicVO.prototype, "author", {
    get: function () {
      return this._author;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "topicName", {
    get: function () {
      return this._topicName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "creationTimestamp", {
    get: function () {
      return this._creationTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "visibleRankingGroups", {
    get: function () {
      return this._visibleRankingGroups;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "topicId", {
    get: function () {
      return this._topicId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "answerCount", {
    get: function () {
      return this._answerCount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "lastPosterName", {
    get: function () {
      return this._lastPosterName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "lastPostTimestamp", {
    get: function () {
      return this._lastPostTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "wasRead", {
    get: function () {
      return this._wasRead;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumTopicVO.prototype, "authorRank", {
    get: function () {
      return this._authorRank;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumTopicVO;
}();
exports.CastleForumTopicVO = n;
var o = require("./223.js");
var a = require("./2.js");
var s = require("./6.js");