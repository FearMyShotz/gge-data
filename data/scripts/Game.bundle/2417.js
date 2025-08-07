Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = function () {
  function CastleForumAnswerRenderer(e, t, i, n) {
    this._contentText = "";
    this._isDraggingSliderButton = false;
    this._parentLayer = e;
    this._disp = t;
    this._answerButtonMc = i;
    this._topicDetailVO = n;
    this.textFieldManager.registerTextField(i.txt_value, new c.LocalizedTextVO("dialog_alliance_communication_sendAnswer_button"));
    this._scrollComponent = new a.CastleTextScrollComponent(new d.CastleTextScrollVO(this._disp.txt_text, null, null, this._disp.btn_slider, this._disp.mc_slider));
  }
  CastleForumAnswerRenderer.prototype.onShow = function () {
    this.resetComponent();
    this._scrollComponent.onShow();
    this.removeEventListener();
    this.addEventListener();
  };
  CastleForumAnswerRenderer.prototype.onHide = function () {
    this._scrollComponent.onHide();
    this.removeEventListener();
  };
  CastleForumAnswerRenderer.prototype.addEventListener = function () {
    this.disp.addEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    this.answerButtonMc.addEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    this._itxt_text.change.add(this.bindFunction(this.onTextChanged));
  };
  CastleForumAnswerRenderer.prototype.removeEventListener = function () {
    this.disp.removeEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    this.answerButtonMc.removeEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    this._itxt_text.change.remove(this.bindFunction(this.onTextChanged));
  };
  CastleForumAnswerRenderer.prototype.onMouseClick = function (e) {
    if (p.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.answerButtonMc:
          if (s.CastleAllianceForumData.hasValidPostText(this._itxt_text.text)) {
            this.parentLayer.onSendingAnswer();
          }
      }
    }
  };
  CastleForumAnswerRenderer.prototype.focusTextfield = function () {
    if (this._itxt_text && this.disp) {
      this._itxt_text.setFocus();
    }
  };
  CastleForumAnswerRenderer.prototype.getAnswerText = function () {
    return this._itxt_text.text;
  };
  CastleForumAnswerRenderer.prototype.onTextChanged = function (e) {
    if (s.CastleAllianceForumData.getForumValidText(this._itxt_text.text).length > l.AllianceConst.MAX_REPLY_TEXT) {
      this._itxt_text.textContentVO.stringValue = this._contentText;
    } else {
      this._contentText = this._itxt_text.text;
    }
    this.updateAnswerButton();
  };
  CastleForumAnswerRenderer.prototype.resetComponent = function () {
    if (this._itxt_text) {
      this._itxt_text.clearText();
    } else {
      this._itxt_text = this.textFieldManager.registerTextField(this.disp.txt_text, new u.TextVO(""));
      this._itxt_text.maxChars = l.AllianceConst.MAX_REPLY_TEXT;
    }
    this.updateAnswerButton();
  };
  CastleForumAnswerRenderer.prototype.updateAnswerButton = function () {
    var e = s.CastleAllianceForumData.isTopicFull(this._topicDetailVO);
    var t = s.CastleAllianceForumData.hasValidPostText(this._itxt_text.text);
    p.ButtonHelper.enableButton(this.answerButtonMc, t && !e);
    this.answerButtonMc.toolTipText = e ? "dialog_alliance_communication_topicAnswersFull_tooltip" : t ? null : this._itxt_text && this._itxt_text.text && this._itxt_text.text.length > 0 ? "alert_textTooShort" : "dialog_alliance_communication_NoText_tooltip";
  };
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "answerButtonMc", {
    get: function () {
      return this._answerButtonMc;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "parentLayer", {
    get: function () {
      return this._parentLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleForumAnswerRenderer.prototype, "topicDetailVO", {
    set: function (e) {
      this._topicDetailVO = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumAnswerRenderer.__initialize_static_members = function () {
    CastleForumAnswerRenderer.STEP = 1;
  };
  return CastleForumAnswerRenderer;
}();
exports.CastleForumAnswerRenderer = o;
var a = require("./182.js");
var s = require("./224.js");
var r = require("./2.js");
var l = require("./5.js");
var c = require("./3.js");
var u = require("./3.js");
var d = require("./180.js");
var p = require("./8.js");
o.__initialize_static_members();