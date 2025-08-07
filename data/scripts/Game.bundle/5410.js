Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./15.js");
var r = require("./522.js");
var l = require("./83.js");
var c = require("./99.js");
var u = function (e) {
  function MessageAllianceBookmarkVO() {
    var t = this;
    t._subtype = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageAllianceBookmarkVO, e);
  MessageAllianceBookmarkVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER)[0].split("+");
    this._subtype = parseInt(t[0]);
  };
  MessageAllianceBookmarkVO.prototype.parseSubject = function () {
    if (this._subtype == o.MessageConst.SUBTYPE_BOOKMARK_ADDED) {
      return a.Localize.text("dialog_alliance_bookmarks_attackMessage_header");
    } else {
      return a.Localize.text("dialog_alliance_bookmarks_attackCanceled_header");
    }
  };
  MessageAllianceBookmarkVO.prototype.parseSender = function () {
    return this._senderName;
  };
  Object.defineProperty(MessageAllianceBookmarkVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsAllianceBookmark";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceBookmarkVO.prototype, "dialogInfo", {
    get: function () {
      if (this._subtype == o.MessageConst.SUBTYPE_BOOKMARK_ADDED) {
        return new l.DialogInfoVO(null, null, d.IngameClientCommands.OPEN_ATTACK_ORDER, {
          mid: this.messageID
        });
      } else if (this._subtype == o.MessageConst.SUBTYPE_BOOKMARK_DELETED) {
        return new l.DialogInfoVO(p.CastleAttackOrderCanceledDialog, new r.CastleBookmarkPasserProperties(null, null, this.messageID));
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageAllianceBookmarkVO.prototype, "controller", {
    get: function () {
      return s.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return MessageAllianceBookmarkVO;
}(c.AMessageVO);
exports.MessageAllianceBookmarkVO = u;
var d = require("./29.js");
var p = require("./1649.js");