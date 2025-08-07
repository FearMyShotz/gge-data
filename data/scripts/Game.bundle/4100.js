Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./28.js");
var c = createjs.MouseEvent;
var u = createjs.TimerEvent;
var d = function () {
  function CastleSpeechBubbleComponent(e, t) {
    this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_HIDDEN;
    this._currentBubbleState = CastleSpeechBubbleComponent.BUBBLESTATE_ONETIME;
    this._showTime = 0;
    this._comeBackTime = 0;
    this._startDelayTime = 0;
    this._fadeTime = 0;
    this._disp = e;
    this._disp.visible = false;
    this._disp.addEventListener(c.CLICK, this.bindFunction(this.onClickBubble));
    this.itxt_bubble = this.textFieldManager.registerTextField(t, new a.TextVO(""));
  }
  CastleSpeechBubbleComponent.prototype.initComponent = function (e = "", t = -1, i = -1, n = 0, a = 1, s = null) {
    this.bubbleText = e.replace("\n", "");
    this._showTime = t;
    this._comeBackTime = i;
    this._startDelayTime = n;
    this._fadeTime = a;
    this._onClickFunction = s;
    if (n > 0) {
      this._startDelayTimer = new o.Timer(this._startDelayTime * l.ClientConstTime.SEC_2_MILLISEC, 1);
      this._startDelayTimer.addEventListener(u.TIMER, this.bindFunction(this.fadeInMessageBubble));
    }
    if (this._showTime >= 0) {
      this._fadeOutTimer = new o.Timer(this._showTime * l.ClientConstTime.SEC_2_MILLISEC, 1);
      this._fadeOutTimer.addEventListener(u.TIMER, this.bindFunction(this.fadeOutMessageBubble));
    }
    if (this._comeBackTime >= 0) {
      this._comeBackTimer = new o.Timer(this._comeBackTime * l.ClientConstTime.SEC_2_MILLISEC, 1);
      this._comeBackTimer.addEventListener(u.TIMER, this.bindFunction(this.fadeInMessageBubble));
    }
  };
  CastleSpeechBubbleComponent.prototype.show = function () {
    if (this._startDelayTimer) {
      this._startDelayTimer.start();
    } else {
      this.fadeInMessageBubble();
    }
  };
  CastleSpeechBubbleComponent.prototype.hide = function () {
    this.fadeOutMessageBubble();
    if (this._fadeOutTimer) {
      this._fadeOutTimer.reset();
    }
  };
  CastleSpeechBubbleComponent.prototype.changeBubbleState = function (e) {
    if (this._currentBubbleState != e) {
      switch (e) {
        case CastleSpeechBubbleComponent.BUBBLESTATE_ONETIME:
          this._currentBubbleState = CastleSpeechBubbleComponent.BUBBLESTATE_ONETIME;
          break;
        case CastleSpeechBubbleComponent.BUBBLESTATE_COMEBACK:
          this._currentBubbleState = CastleSpeechBubbleComponent.BUBBLESTATE_COMEBACK;
          this._comeBackTimer.reset();
          this._comeBackTimer.start();
      }
    }
  };
  CastleSpeechBubbleComponent.prototype.onClickBubble = function (e) {
    if (this._onClickFunction != null) {
      this._onClickFunction();
    }
  };
  CastleSpeechBubbleComponent.prototype.fadeInMessageBubble = function (e = null) {
    if (this._startDelayTimer) {
      this._startDelayTimer.reset();
    }
    if (this._comeBackTimer) {
      this._comeBackTimer.reset();
    }
    if (this._currentDisplayState != CastleSpeechBubbleComponent.DISPLAYSTATE_SHOWN && this._currentDisplayState != CastleSpeechBubbleComponent.DISPLAYSTATE_FADEIN) {
      this._disp.visible = true;
      this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_FADEIN;
      r.TweenMax.fromTo(this._disp, this._fadeTime, {
        alpha: 0
      }, {
        alpha: 1,
        ease: s.Linear.easeIn,
        onComplete: this.bindFunction(this.onFadedIn)
      });
    }
  };
  CastleSpeechBubbleComponent.prototype.onFadedIn = function () {
    if (this._fadeOutTimer) {
      this._fadeOutTimer.start();
    }
    this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_SHOWN;
  };
  CastleSpeechBubbleComponent.prototype.fadeOutMessageBubble = function (e = null) {
    if (this._currentDisplayState == CastleSpeechBubbleComponent.DISPLAYSTATE_SHOWN) {
      r.TweenMax.fromTo(this._disp, this._fadeTime, {
        alpha: 1
      }, {
        alpha: 0,
        ease: s.Linear.easeIn,
        onComplete: this.bindFunction(this.hideMessageBubble)
      });
      this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_FADEOUT;
    }
  };
  CastleSpeechBubbleComponent.prototype.hideMessageBubble = function () {
    this._disp.visible = false;
    this._currentDisplayState = CastleSpeechBubbleComponent.DISPLAYSTATE_HIDDEN;
    if (this._comeBackTimer) {
      this._comeBackTimer.reset();
      if (this._currentBubbleState == CastleSpeechBubbleComponent.BUBBLESTATE_COMEBACK) {
        this._comeBackTimer.start();
      }
    }
  };
  CastleSpeechBubbleComponent.prototype.destroy = function () {
    this._disp.removeEventListener(c.CLICK, this.bindFunction(this.onClickBubble));
    if (this._startDelayTimer) {
      this._startDelayTimer.reset();
      this._startDelayTimer.removeEventListener(u.TIMER, this.bindFunction(this.fadeInMessageBubble));
    }
    if (this._fadeOutTimer) {
      this._fadeOutTimer.reset();
      this._fadeOutTimer.removeEventListener(u.TIMER, this.bindFunction(this.fadeOutMessageBubble));
    }
    if (this._comeBackTimer) {
      this._comeBackTimer.reset();
      this._comeBackTimer.removeEventListener(u.TIMER, this.bindFunction(this.fadeInMessageBubble));
    }
  };
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "bubbleText", {
    get: function () {
      return this.itxt_bubble.text;
    },
    set: function (e) {
      this.itxt_bubble.textContentVO.stringValue = e;
      this.itxt_bubble.autoFitToBounds = true;
      this.itxt_bubble.y = -this.itxt_bubble.textHeight * CastleSpeechBubbleComponent.CENTER_OFFSET_Y;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "onClickFunction", {
    get: function () {
      return this._onClickFunction;
    },
    set: function (e) {
      this._onClickFunction = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "currentState", {
    get: function () {
      return this._currentDisplayState;
    },
    set: function (e) {
      this._currentDisplayState = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "textFieldManager", {
    get: function () {
      return n.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSpeechBubbleComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSpeechBubbleComponent.__initialize_static_members = function () {
    CastleSpeechBubbleComponent.DISPLAYSTATE_HIDDEN = "hidden";
    CastleSpeechBubbleComponent.DISPLAYSTATE_SHOWN = "shown";
    CastleSpeechBubbleComponent.DISPLAYSTATE_FADEIN = "fadein";
    CastleSpeechBubbleComponent.DISPLAYSTATE_FADEOUT = "fadeout";
    CastleSpeechBubbleComponent.BUBBLESTATE_ONETIME = "onetime";
    CastleSpeechBubbleComponent.BUBBLESTATE_COMEBACK = "comeback";
    CastleSpeechBubbleComponent.CENTER_OFFSET_Y = 0.6;
  };
  return CastleSpeechBubbleComponent;
}();
exports.CastleSpeechBubbleComponent = d;
d.__initialize_static_members();