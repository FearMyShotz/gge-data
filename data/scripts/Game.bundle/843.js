Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./6.js");
var d = require("./69.js");
var p = require("./140.js");
var h = require("./4.js");
var g = require("./8.js");
var C = require("./34.js");
var _ = require("./391.js");
var m = createjs.MouseEvent;
var f = function (e) {
  function ACastleBaseInboxMessageList(t, i = null, n = 0) {
    var o = this;
    o._currentPage = 0;
    o._maxPage = 0;
    o._currentCategory = 0;
    o._maxMessages = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this, t) || this)._messageCountDisplay = i;
    o._maxMessages = n;
    if (!g.ButtonHelper.hasBasicButton(o.dialogDisp.btn_arrow_up) && !g.ButtonHelper.hasBasicButton(o.dialogDisp.btn_arrow_down)) {
      g.ButtonHelper.initSmallButtons([o.dialogDisp.btn_arrow_up, o.dialogDisp.btn_arrow_down]);
    }
    return o;
  }
  n.__extends(ACastleBaseInboxMessageList, e);
  ACastleBaseInboxMessageList.prototype.show = function (t) {
    e.prototype.show.call(this, t);
    if (this._messageCountDisplay == null) {
      this.dialogDisp.mc_statusbar.visible = false;
    }
    this._currentCategory = u.int(t[0]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_date, new c.LocalizedTextVO("dialog_inbox_date"), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_topic, new c.LocalizedTextVO("dialog_inbox_topic"), new o.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_sender, new c.LocalizedTextVO("dialog_inbox_sender"), new o.InternalGGSTextFieldConfigVO(true));
    if (!g.ButtonHelper.hasBasicButton(this.dialogDisp.btn_new_message)) {
      g.ButtonHelper.initBasicButton(this.dialogDisp.btn_new_message);
    }
    this.updateRestrictions();
    this.controller.addEventListener(p.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.showMessageHeaders));
    this.dialogDisp.btn_arrow_up.visible = false;
    this.dialogDisp.btn_arrow_down.visible = false;
    this.showMessageHeaders();
    this.dialogDisp.parent.addEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
  };
  ACastleBaseInboxMessageList.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.removeMessageItems();
    this.controller.removeEventListener(p.CastleMessageDataEvent.UPDATE_MESSAGELIST, this.bindFunction(this.showMessageHeaders));
    this.dialogDisp.parent.removeEventListener(m.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel_0));
  };
  ACastleBaseInboxMessageList.prototype.updateRestrictions = function () {
    var e = h.CastleModel.messageData.getMessageRestrictionVOByMessageType(s.MessageConst.MESSAGE_TYPE_USER_OUT);
    var t = !!e && e.currentPlayerAmount >= e.dailyLimit;
    var i = !h.CastleModel.tutorialData.isTutorialFinished();
    var n = h.CastleModel.userData.userLevel < h.CastleModel.messageData.minLevelForSendingP2PMessages;
    g.ButtonHelper.enableButton(this.dialogDisp.btn_new_message, !t && !i && !n);
    this.dialogDisp.btn_new_message.toolTipText = n ? "dialog_inbox_writeNewMessage_blocked_lowLevel_tooltip" : t ? "dialog_inbox_writeNewMessage_blocked_dailyLimit_tooltip" : "dialog_inbox_writeNewMessage";
  };
  ACastleBaseInboxMessageList.prototype.showMessageHeaders = function (e = null) {
    this.removeMessageItems();
    var t = this.getMessageCount();
    this.updatePageArrows(t);
    this._currentMails = this.getMessages(this._currentPage, this._currentCategory);
    this.updateMessageCountDisplay(t);
    if (this._currentMails) {
      for (var i = 0; i < this._currentMails.length; i++) {
        var n = this._currentMails[i];
        var o = this.createMessageItem(i);
        o.setItem(n, i);
        this.dialogDisp.addChild(o.disp);
      }
    }
  };
  ACastleBaseInboxMessageList.prototype.updateMessageCountDisplay = function (e = -1) {
    if (this._messageCountDisplay) {
      if (e < 0) {
        e = this.getMessageCount();
      }
      this._messageCountDisplay.update(e, this._maxMessages);
    }
  };
  ACastleBaseInboxMessageList.prototype.updateTabMessageCounter = function (e, t, i = -1, n = false) {
    e.visible = i > 0 || n;
    this.textFieldManager.registerTextField(t, new l.LocalizedNumberVO(i));
  };
  ACastleBaseInboxMessageList.prototype.updatePageArrows = function (e) {
    this._maxPage = u.int((e - 1) / s.MessageConst.MESSAGES_PER_PAGE);
    this.checkForEmptyPage();
    this.dialogDisp.btn_arrow_down.visible = this._maxPage > 0 && this._currentPage < this._maxPage;
    this.dialogDisp.btn_arrow_up.visible = this._maxPage > 0 && this._currentPage > 0;
  };
  ACastleBaseInboxMessageList.prototype.checkForEmptyPage = function () {
    if (this._currentPage > this._maxPage) {
      var e = this._currentPage;
      this._currentPage = u.int(Math.max(0, this._currentPage - 1));
      if (e != this._currentPage) {
        this.showMessageHeaders();
      }
    }
  };
  ACastleBaseInboxMessageList.prototype.onMouseUp = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_arrow_up:
        case this.dialogDisp.btn_arrow_down:
          this.onClickArrow(e);
          break;
        case this.dialogDisp.btn_new_message:
          if (h.CastleModel.tutorialData.isTutorialFinished()) {
            O.CastleDialogHandler.getInstance().registerDefaultDialogs(y.CastleNewMessageDialog, new _.CastleNewMessageDialogProperties());
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          O.CastleDialogHandler.getInstance().showHelper("", r.Localize.text("help_messages"));
      }
    }
  };
  ACastleBaseInboxMessageList.prototype.createMessageItem = function (e) {
    if (this._messageItems.length > e) {
      return this._messageItems[e];
    }
    var t = new E.CastleHeaderMessageItem();
    this._messageItems.push(t);
    return t;
  };
  ACastleBaseInboxMessageList.prototype.removeMessageItems = function () {
    if (this._messageItems && this._messageItems.length > 0) {
      for (var e = 0; e < this._messageItems.length; e++) {
        this._messageItems[e].remove();
        if (this.dialogDisp.contains(this._messageItems[e].disp)) {
          this.dialogDisp.removeChild(this._messageItems[e].disp);
        }
      }
    } else {
      this._messageItems = [];
    }
  };
  ACastleBaseInboxMessageList.prototype.onClickArrow = function (e) {
    var t = this._currentPage;
    if (e.target == this.dialogDisp.btn_arrow_up) {
      this._currentPage = u.int(Math.max(0, this._currentPage - 1));
    } else {
      this._currentPage = u.int(Math.min(this._maxPage, this._currentPage + 1));
    }
    if (t != this._currentPage) {
      this.showMessageHeaders();
    }
  };
  ACastleBaseInboxMessageList.prototype.onMouseWheel_0 = function (e) {
    var t = this._currentPage;
    if (e.delta < 0) {
      this._currentPage = u.int(Math.max(0, this._currentPage - 1));
    } else if (e.delta > 0) {
      this._currentPage = u.int(Math.min(this._maxPage, this._currentPage + 1));
    }
    if (t != this._currentPage) {
      this.showMessageHeaders();
    }
  };
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "deleteButtonVisible", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "deleteButtonOverviewVisible", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "deleteButtonToolTipText", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  ACastleBaseInboxMessageList.prototype.getMessages = function (e, t) {
    throw new d.AbstractMethodError();
  };
  ACastleBaseInboxMessageList.prototype.getMessageCount = function () {
    throw new d.AbstractMethodError();
  };
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "allMessageIDs", {
    get: function () {
      var e = [];
      for (var t = 0; t < this.getMessageCount(); t++) {
        e.push(this.getMessages(-1, this._currentCategory)[t].messageID);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ACastleBaseInboxMessageList.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  ACastleBaseInboxMessageList.prototype.getLatestBattleLog = function () {
    if (this._messageItems != null) {
      for (var e = 0, t = this._messageItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.isBattleLog()) {
          return i;
        }
      }
    }
    return null;
  };
  return ACastleBaseInboxMessageList;
}(C.CastleDialogSubLayer);
exports.ACastleBaseInboxMessageList = f;
var O = require("./9.js");
var E = require("./4068.js");
var y = require("./392.js");
a.classImplementsInterfaces(f, "ICollectableRendererList", "ISublayer");