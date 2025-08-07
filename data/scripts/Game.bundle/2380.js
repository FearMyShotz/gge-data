Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function CastleForumPostVO() {
    this._postId = -1;
    this._content = "";
    this._author = "";
    this._allianceRank = -1;
  }
  CastleForumPostVO.prototype.parseGTRItem = function (e) {
    this._postId = a.int(e.RID);
    this._content = o.TextValide.parseChatJSONMessage(e.RT);
    this._author = e.PN;
    this._allianceRank = a.int(e.AR);
    this._creationTimestamp = new Date(e.T * 1000);
  };
  Object.defineProperty(CastleForumPostVO.prototype, "postId", {
    get: function () {
      return this._postId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostVO.prototype, "content", {
    get: function () {
      return this._content;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostVO.prototype, "author", {
    get: function () {
      return this._author;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostVO.prototype, "allianceRank", {
    get: function () {
      return this._allianceRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumPostVO.prototype, "creationTimestamp", {
    get: function () {
      return this._creationTimestamp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleForumPostVO;
}();
exports.CastleForumPostVO = n;
var o = require("./2.js");
var a = require("./6.js");