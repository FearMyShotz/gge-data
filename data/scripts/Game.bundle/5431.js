Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./83.js");
var s = require("./99.js");
var r = function (e) {
  function MessageChangelistVO() {
    var t = this;
    t._teaserId = 0;
    t._patchNoteId = 0;
    t._collected = false;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._collected = false;
    return t;
  }
  n.__extends(MessageChangelistVO, e);
  MessageChangelistVO.prototype.parseMessageHeader = function (e) {
    var t = e.split("+");
    this._teaserId = parseInt(t[0]);
    this._patchNoteId = parseInt(t[1]);
    this._collected = parseInt(t[2]) == 1;
    if (this._patchNoteId > MessageChangelistVO.currentPatchNoteID) {
      MessageChangelistVO.currentPatchNoteID = this._patchNoteId;
    }
  };
  MessageChangelistVO.prototype.parseSubject = function () {
    return o.Localize.text("dialog_changelist_mailHeader");
  };
  MessageChangelistVO.prototype.parseSender = function () {
    return o.Localize.text("system");
  };
  Object.defineProperty(MessageChangelistVO.prototype, "additionalIconName", {
    get: function () {
      if (!this.collected && this.isCurrentChangelist()) {
        return "CastleMessageIconsChangelist";
      } else {
        return "";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMessageVO.prototype, "additionalIconName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageChangelistVO.prototype, "dialogInfo", {
    get: function () {
      return new a.DialogInfoVO(l.CastleChangelistDialog, new c.CastleChangelistDialogProperties(this));
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.AMessageVO.prototype, "dialogInfo").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MessageChangelistVO.prototype.isCurrentChangelist = function () {
    return MessageChangelistVO.currentPatchNoteID == this._patchNoteId;
  };
  MessageChangelistVO.prototype.canBeDeleted = function () {
    return this.collected || !this.isCurrentChangelist();
  };
  Object.defineProperty(MessageChangelistVO.prototype, "teaserId", {
    get: function () {
      return this._teaserId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageChangelistVO.prototype, "patchNoteId", {
    get: function () {
      return this._patchNoteId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MessageChangelistVO.prototype, "collected", {
    get: function () {
      return this._collected;
    },
    set: function (e) {
      this._collected = e;
    },
    enumerable: true,
    configurable: true
  });
  MessageChangelistVO.prototype.canBeArchived = function () {
    return false;
  };
  MessageChangelistVO.__initialize_static_members = function () {
    MessageChangelistVO.currentPatchNoteID = 0;
  };
  return MessageChangelistVO;
}(s.AMessageVO);
exports.MessageChangelistVO = r;
var l = require("./5432.js");
var c = require("./5435.js");
r.__initialize_static_members();