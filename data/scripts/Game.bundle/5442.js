Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./5443.js");
var r = require("./83.js");
var l = require("./99.js");
var c = require("./5444.js");
var u = require("./5445.js");
var d = require("./5446.js");
var p = require("./5447.js");
var h = require("./5448.js");
var g = function (e) {
  function MessageEilandTitleVO() {
    var t = this;
    t._subtype = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(MessageEilandTitleVO, e);
  MessageEilandTitleVO.prototype.parseMessageHeader = function (e) {
    var t = e.split(o.MessageConst.SUBTYPE_META_DATA_SPLITTER);
    this._subtype = parseInt(t[0]);
    if (t.length > 1) {
      this._titleID = parseInt(t[1]);
      this._isWinningAlliance = parseInt(t[2]) > 0;
    }
  };
  MessageEilandTitleVO.prototype.parseSubject = function () {
    if (this._subtype == o.MessageConst.SUBTYPE_TITLE_ASSIGNED) {
      return a.Localize.text("dialog_eiland_titleMessage_gainedGoodTitle_header");
    } else if (this._subtype == o.MessageConst.SUBTYPE_TITLE_LOST) {
      return a.Localize.text("dialog_eiland_titleMessage_lostTitle_header");
    } else if (this._subtype == o.MessageConst.SUBTYPE_NEW_KING) {
      return a.Localize.text("dialog_eiland_titleMessage_newLeft");
    } else if (this._subtype == o.MessageConst.SUBTYPE_LOST_TITLE_ON_RESET) {
      return a.Localize.text("dialog_island_stormTitle_titleLost_header");
    } else {
      return "";
    }
  };
  MessageEilandTitleVO.prototype.parseSender = function () {
    return a.Localize.text("system");
  };
  Object.defineProperty(MessageEilandTitleVO.prototype, "dialogInfo", {
    get: function () {
      switch (this.subtype) {
        case o.MessageConst.SUBTYPE_TITLE_ASSIGNED:
          return new r.DialogInfoVO(c.CastleEilandTitleAssignedMessageDialog, new s.CastleEilandTitleMessageDialogProperties(this));
        case o.MessageConst.SUBTYPE_TITLE_LOST:
          return new r.DialogInfoVO(u.CastleEilandTitleLostMessageDialog, new s.CastleEilandTitleMessageDialogProperties(this));
        case o.MessageConst.SUBTYPE_NEW_KING:
          return new r.DialogInfoVO(d.CastleEilandTitleNewKingMessageDialog, new s.CastleEilandTitleMessageDialogProperties(this));
        case o.MessageConst.SUBTYPE_LOST_TITLE_ON_RESET:
          return new r.DialogInfoVO(p.CastleStormIslandsTitleLostDialog, new h.CastleStormIslandsTitleLostDialogProperties(this));
      }
      return null;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandTitleVO.prototype, "additionalIconName", {
    get: function () {
      return "CastleMessageIconsEiland";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandTitleVO.prototype, "subtype", {
    get: function () {
      return this._subtype;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandTitleVO.prototype, "titleID", {
    get: function () {
      return this._titleID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageEilandTitleVO.prototype, "isWinningAlliance", {
    get: function () {
      return this._isWinningAlliance;
    },
    enumerable: true,
    configurable: true
  });
  return MessageEilandTitleVO;
}(l.AMessageVO);
exports.MessageEilandTitleVO = g;