Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleChatComponent(e, t = null) {
    this._maxShownMessages = 50;
    this._enabled = true;
    this._chatVisible = true;
    this._parentPanel = t;
    this._chatItems = e;
    if (this._chatItems) {
      O.ButtonHelper.initBasicButton(this._chatItems.btn_submit);
    }
    this._itxt_chat = this.textFieldManager.registerTextField(this._chatItems.txt_chat, new p.HTMLTextCustomVO());
    this._itxt_chat.multiline = true;
    this._itxt_chat.wordwrap = true;
    this._itxt_chat.selectable = true;
    this._itxt_chat.clearText();
    if (this._chatItems.txt_inputField) {
      this._itxt_input = this.textFieldManager.registerTextField(this._chatItems.txt_inputField, new g.TextVO(""));
      this._itxt_input.keyUp.add(this.bindFunction(this.onSubmitInput));
      this._itxt_input.maxChars = d.MessageConst.MAX_LENGTH_TEXT;
      this._itxt_input.multiline = false;
      this._itxt_input.wordwrap = false;
    }
    this._scrollComponent = new s.CastleTextScrollComponent(this._chatItems.getScrollVO());
    if (this._chatItems.mc_inputBlocker) {
      this.fullScreenInputBlocker = new E.CastleFullScreenInputBlocker(this._chatItems.mc_inputBlocker);
    }
    this.enableComponent(this._enabled);
    this.setChatVisibility(this._chatVisible);
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
    this._scrollComponent.invisibleOnFit = true;
  }
  CastleChatComponent.prototype.onShow = function () {
    this._scrollComponent.onShow();
    this.removeEventListeners();
    this.addEventListeners();
    this.updateChat();
  };
  CastleChatComponent.prototype.onHide = function () {
    this._scrollComponent.onHide();
    this.removeEventListeners();
  };
  CastleChatComponent.prototype.addEventListeners = function () {
    if (this._chatItems.btn_submit) {
      this._chatItems.btn_submit.addEventListener(n.CLICK, this.bindFunction(this.onSubmitButtonClick));
    }
    this._itxt_chat.mouseOver.add(this.bindFunction(this.onMouseOverChat));
    this._itxt_chat.mouseOut.add(this.bindFunction(this.onMouseOutChat));
    if (this._itxt_input) {
      this._itxt_input.change.add(this.bindFunction(this.onInputTextChanged));
    }
    f.CastleModel.chatData.addEventListener(m.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
  };
  CastleChatComponent.prototype.removeEventListeners = function () {
    if (this._chatItems.btn_submit) {
      this._chatItems.btn_submit.removeEventListener(n.CLICK, this.bindFunction(this.onSubmitButtonClick));
    }
    this._itxt_chat.mouseOver.remove(this.bindFunction(this.onMouseOverChat));
    this._itxt_chat.mouseOut.remove(this.bindFunction(this.onMouseOutChat));
    if (this._itxt_input) {
      this._itxt_input.change.remove(this.bindFunction(this.onInputTextChanged));
    }
    f.CastleModel.chatData.removeEventListener(m.CastleChatEvent.NEW_CHAT_MESSAGE_ARRIVED, this.bindFunction(this.onNewMessageArrived));
    if (this.fullScreenInputBlocker) {
      this.fullScreenInputBlocker.removeListeners();
    }
  };
  CastleChatComponent.prototype.updateChat = function () {
    var e = this._scrollComponent.isScrolledToEnd();
    var t = f.CastleModel.chatData.allianceMessages;
    var i = C.int(t.length);
    var n = C.int(Math.max(0, i - this._maxShownMessages - 1));
    var o = C.int(Math.min(n + this._maxShownMessages, t.length - 1));
    var a = new p.HTMLTextCustomVO();
    a.maxChilds = this._maxShownMessages;
    if (this._chatVisible) {
      for (var s = n; s <= o; ++s) {
        var r = t[s];
        a.addLocalizedTextVO(new h.LocalizedTextVO("label_chatmessage_with_short_date_colored", this.composeMessageReplacements(r), true));
      }
    }
    this._itxt_chat.textContentVO = a;
    if (e) {
      this._scrollComponent.scrollToEnd();
    }
  };
  CastleChatComponent.prototype.composeMessageReplacements = function (e) {
    var t = (e.bornDate.getHours() < 10 ? "0" : "") + e.bornDate.getHours();
    var i = (e.bornDate.getMinutes() < 10 ? "0" : "") + e.bornDate.getMinutes();
    return {
      color: "#0066CC",
      0: new g.TextVO(e.playerName),
      1: new g.TextVO(t),
      2: new g.TextVO(i),
      3: new g.TextVO(e.messageText)
    };
  };
  CastleChatComponent.prototype.sendInputMessage = function () {
    if (this._itxt_input) {
      var e = r.ClientConstUtils.getTrimmedText(r.ClientConstUtils.filterBBCodesFromText(c.TextValide.getCleanChatText(c.TextValide.getValideSmartFoxJSONTextMessage(this._itxt_input.text))));
      if (e != "") {
        f.CastleModel.smartfoxClient.sendCommandVO(new _.C2SAllianceChatVO(e));
        this._itxt_input.clearText();
      }
    }
  };
  CastleChatComponent.prototype.enableComponent = function (e) {
    this._enabled = e;
    this._scrollComponent.enableComponent(this._enabled);
    O.ButtonHelper.enableButton(this._chatItems.btn_submit, this._enabled);
    if (this._itxt_input) {
      this._itxt_input.tabEnabled = this._enabled;
    }
  };
  CastleChatComponent.prototype.setChatVisibility = function (e) {
    this._chatVisible = e;
    this.updateChat();
  };
  CastleChatComponent.prototype.focusInput = function () {
    if (this._itxt_input) {
      this._itxt_input.setFocus();
    }
  };
  CastleChatComponent.prototype.onSubmitButtonClick = function (e) {
    if (O.ButtonHelper.isButtonEnabled(e.target)) {
      this.sendInputMessage();
    }
  };
  CastleChatComponent.prototype.onSubmitInput = function (e) {
    if (this._enabled) {
      e.stopPropagation();
      if (e.key == u.Keyboard.ENTER) {
        this.sendInputMessage();
      }
    }
  };
  CastleChatComponent.prototype.onInputTextChanged = function (e) {
    if (!this._enabled && this._itxt_input) {
      this._itxt_input.textContentVO.stringValue = "";
    }
  };
  CastleChatComponent.prototype.clearInputText = function () {
    this._itxt_input.textContentVO.stringValue = "";
  };
  CastleChatComponent.prototype.onNewMessageArrived = function (e) {
    this.updateChat();
    if (this._parentPanel) {
      this._parentPanel.updateCache();
    }
  };
  CastleChatComponent.prototype.onMouseOverChat = function (e) {
    if (!r.ClientConstUtils.isTlfMode) {
      a.CastleLayoutManager.getInstance().customCursor.hideCustomCursor();
    }
  };
  CastleChatComponent.prototype.onMouseOutChat = function (e) {
    if (!r.ClientConstUtils.isTlfMode) {
      a.CastleLayoutManager.getInstance().customCursor.showCustomCursor();
    }
  };
  Object.defineProperty(CastleChatComponent.prototype, "textFieldManager", {
    get: function () {
      return l.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleChatComponent.prototype, "maxShownMessages", {
    get: function () {
      return this._maxShownMessages;
    },
    set: function (e) {
      this._maxShownMessages = C.int(Math.max(e, 1));
    },
    enumerable: true,
    configurable: true
  });
  return CastleChatComponent;
}();
exports.CastleChatComponent = o;
var a = require("./17.js");
var s = require("./182.js");
var r = require("./55.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./2154.js");
var m = require("./586.js");
var f = require("./4.js");
var O = require("./8.js");
var E = require("./379.js");