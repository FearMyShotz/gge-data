Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./5.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./23.js");
var l = require("./23.js");
var c = require("./16.js");
var u = require("./1339.js");
var d = require("./15.js");
var p = require("./937.js");
var h = require("./1344.js");
var g = function () {
  function LetterLimiter(e, t) {
    this.messageTextRestrictor = new p.CastleJSONTextFieldRestrictor();
    this.mc_letterLimit = e;
    e.visible = true;
    this._itxt_letterLimit = this.textFieldManager.registerTextField(e.txt_letterLimit, new a.LocalizedTextVO("dialog_messageLimit_charactersLeft", [o.MessageConst.MAX_LENGTH_TEXT]));
    this.messageTextRestrictor.init(t, o.MessageConst.MAX_LENGTH_TEXT);
    this._itxt_letterLimit.color = c.ClientConstColor.GENERIC_BLACK;
    e.toolTipText = {
      t: "dialog_messageLimit_textLength_Tooltip",
      p: [o.MessageConst.MAX_LENGTH_TEXT]
    };
    e.mouseChildren = false;
  }
  Object.defineProperty(LetterLimiter.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  LetterLimiter.prototype.addEventListeners = function () {
    this.messageTextRestrictor.addEventListener(u.CastleJSONTextFieldRestrictorEvent.TEXT_CHANGED, this.bindFunction(this.onTextChange));
    this.messageTextRestrictor.addEventListener(u.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_REACHED, this.bindFunction(this.onTextLimitReached));
    this.messageTextRestrictor.addEventListener(u.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_EXCEEDED, this.bindFunction(this.onTextLimitExceeded));
  };
  LetterLimiter.prototype.removeEventListeners = function () {
    this.messageTextRestrictor.removeEventListener(u.CastleJSONTextFieldRestrictorEvent.TEXT_CHANGED, this.bindFunction(this.onTextChange));
    this.messageTextRestrictor.removeEventListener(u.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_REACHED, this.bindFunction(this.onTextLimitReached));
    this.messageTextRestrictor.removeEventListener(u.CastleJSONTextFieldRestrictorEvent.TEXT_LIMIT_EXCEEDED, this.bindFunction(this.onTextLimitExceeded));
  };
  LetterLimiter.prototype.onTextLimitReached = function (e) {
    this.updateRemainingLettersText(true, e.newTextLength);
    d.CastleBasicController.getInstance().dispatchEvent(new h.LetterLimiterEvent(h.LetterLimiterEvent.TEXT_LIMIT_REACHED));
  };
  LetterLimiter.prototype.onTextChange = function (e) {
    this.updateRemainingLettersText(false, e.newTextLength);
    d.CastleBasicController.getInstance().dispatchEvent(new h.LetterLimiterEvent(h.LetterLimiterEvent.TEXT_CHANGED));
  };
  LetterLimiter.prototype.updateRemainingLettersText = function (e, t) {
    if (e) {
      this._itxt_letterLimit.color = c.ClientConstColor.FONT_INSUFFICIENT_COLOR;
      this.mc_letterLimit.toolTipText = {
        t: "dialog_messageLimit_maxTextlength_Tooltip",
        p: [o.MessageConst.MAX_LENGTH_TEXT]
      };
    } else {
      this._itxt_letterLimit.color = LetterLimiter.DEFAULT_TEXT_LIMIT_COLOR;
      this.mc_letterLimit.toolTipText = {
        t: "dialog_messageLimit_textLength_Tooltip",
        p: [o.MessageConst.MAX_LENGTH_TEXT]
      };
    }
    this._itxt_letterLimit.textContentVO.textReplacements = [o.MessageConst.MAX_LENGTH_TEXT - t];
    d.CastleBasicController.getInstance().dispatchEvent(new h.LetterLimiterEvent(h.LetterLimiterEvent.UPDATE_REMAINING_LETTERS));
  };
  LetterLimiter.prototype.onTextLimitExceeded = function (e) {
    this.onTextLimitReached(e);
    if (e.newTextLength < o.MessageConst.MAX_LENGTH_TEXT) {
      l.TweenMax.to(this.mc_letterLimit.txt_letterLimit, 1.5, {
        hexColors: {
          textColor: LetterLimiter.DEFAULT_TEXT_LIMIT_COLOR
        },
        ease: r.Power4.easeIn
      });
      this.mc_letterLimit.toolTipText = {
        t: "dialog_messageLimit_textLength_Tooltip",
        p: [o.MessageConst.MAX_LENGTH_TEXT]
      };
    }
    d.CastleBasicController.getInstance().dispatchEvent(new h.LetterLimiterEvent(h.LetterLimiterEvent.TEXT_LIMIT_EXCEEDED));
  };
  LetterLimiter.__initialize_static_members = function () {
    LetterLimiter.DEFAULT_TEXT_LIMIT_COLOR = s.int(c.ClientConstColor.GENERIC_BLACK);
  };
  return LetterLimiter;
}();
exports.LetterLimiter = g;
g.__initialize_static_members();