Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./1.js");
var o = createjs.MouseEvent;
var a = createjs.Point;
var s = function () {
  function SimpleScrollComponent(e, t) {
    this._currentPercentFactor = 0;
    this._currentValue = 0;
    this._minValue = 0;
    this._maxValue = 1;
    this._deltaStepsButtons = 1;
    this._deltaStepsMouseWheel = 1;
    this._isVisible = true;
    this._isEnabled = true;
    this._isDragging = false;
    this._triggerSignalOnlyOnValueChanged = false;
    this._triggerChangedSignalOnInitFlag = false;
    this._onScrollSignal = new h.Signal();
    this._disturbingElements = [];
    this._sliderClickOffset = 0;
    this._scrollVO = e;
    this._strategy = t;
    if (!e) {
      d.error("No ScrollVO given.");
    }
    if (!t) {
      d.error("No strategy assigned. The component needs a strategy to work.");
    }
    this.initButtons();
    t.assignScrollComponent(this);
    this._touchScrollHelper = new _.TouchScrollHelper();
  }
  SimpleScrollComponent.prototype.destroy = function () {
    if (this.scrollVO) {
      this.enableComponent(true);
      this.removeEventListener();
      this.removeAllDisturbingElements();
      this.strategy.destroy();
      this._scrollVO = null;
    }
  };
  SimpleScrollComponent.prototype.init = function (e, t, i = 1, n = 1, o = true) {
    this._minValue = p.int(e);
    this._maxValue = p.int(t);
    this._deltaStepsButtons = p.int(i);
    this._deltaStepsMouseWheel = p.int(n);
    this._currentPercentFactor = 0;
    this._currentValue = this._minValue;
    this._triggerChangedSignalOnInitFlag = o;
    this.strategy.init();
  };
  SimpleScrollComponent.prototype.initButtons = function () {
    c.ButtonHelper.initBasicButtons([this.scrollVO.minusButton, this.scrollVO.plusButton, this.scrollVO.minButton, this.scrollVO.maxButton, this.scrollVO.sliderButton]);
  };
  SimpleScrollComponent.prototype.show = function () {
    this.removeEventListener();
    this.addEventListener();
    this.strategy.apply();
  };
  SimpleScrollComponent.prototype.hide = function () {
    this.removeEventListener();
  };
  SimpleScrollComponent.prototype.scrollToValue = function (e, t = true) {
    var i = p.int(u.MathBase.clamp(e, this.minValue, this.maxValue));
    var n = i != this._currentValue;
    var o = (i - this.minValue) / (this.maxValue - this.minValue);
    if (isNaN(o)) {
      o = 0;
    }
    this._currentPercentFactor = o;
    this._currentValue = i;
    this.strategy.apply();
    if (t) {
      this.executeValueChangedCallback(n);
    }
  };
  SimpleScrollComponent.prototype.scrollToPercent = function (e, t = true) {
    var i = u.MathBase.clamp(e, 0, 1);
    var n = Math.round(this.minValue + (this.maxValue - this.minValue) * i);
    var o = n != this._currentValue;
    this._currentValue = n;
    this._currentPercentFactor = (n - this.minValue) / (this.maxValue - this.minValue);
    if (isNaN(this._currentPercentFactor)) {
      this._currentPercentFactor = 0;
    }
    this.strategy.apply();
    if (t) {
      this.executeValueChangedCallback(o);
    }
  };
  SimpleScrollComponent.prototype.executeValueChangedCallback = function (e) {
    if (!this._triggerSignalOnlyOnValueChanged || this._triggerSignalOnlyOnValueChanged && e || this._triggerChangedSignalOnInitFlag) {
      this._triggerChangedSignalOnInitFlag = false;
      this.onScrollSignal.dispatch();
    }
  };
  SimpleScrollComponent.prototype.addEventListener = function () {
    if (this.scrollVO.minusButton) {
      this.scrollVO.minusButton.addEventListener(o.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.plusButton) {
      this.scrollVO.plusButton.addEventListener(o.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.minButton) {
      this.scrollVO.minButton.addEventListener(o.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.maxButton) {
      this.scrollVO.maxButton.addEventListener(o.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.hasSlider) {
      this.scrollVO.sliderLine.addEventListener(o.CLICK, this.bindFunction(this.onSliderLineClick));
      this.scrollVO.sliderButton.addEventListener(o.MOUSE_DOWN, this.bindFunction(this.onSliderButtonDown));
    }
    if (this.scrollVO.stage) {
      this.scrollVO.stage.addEventListener(o.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      this.scrollVO.stage.addEventListener(o.MOUSE_UP, this.bindFunction(this.onSliderButtonUp));
      this._touchScrollHelper.setup(this.scrollVO.stage);
    }
    if (this.scrollVO.mouseWheelElements) {
      for (var e = 0; e < this.scrollVO.mouseWheelElements.length; ++e) {
        if (this.scrollVO.mouseWheelElements[e]) {
          this.scrollVO.mouseWheelElements[e].addEventListener(o.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
        }
        if (this.scrollVO.mouseWheelElements[e]) {
          this.scrollVO.mouseWheelElements[e].addEventListener(o.PRESS_MOVE, this.bindFunction(this.onPressMove));
        }
      }
    }
  };
  SimpleScrollComponent.prototype.removeEventListener = function () {
    if (this.scrollVO.minusButton) {
      this.scrollVO.minusButton.removeEventListener(o.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.plusButton) {
      this.scrollVO.plusButton.removeEventListener(o.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.minButton) {
      this.scrollVO.minButton.removeEventListener(o.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.maxButton) {
      this.scrollVO.maxButton.removeEventListener(o.CLICK, this.bindFunction(this.onButtonClick));
    }
    if (this.scrollVO.hasSlider) {
      this.scrollVO.sliderLine.removeEventListener(o.CLICK, this.bindFunction(this.onSliderLineClick));
      this.scrollVO.sliderButton.removeEventListener(o.MOUSE_DOWN, this.bindFunction(this.onSliderButtonDown));
    }
    if (this.scrollVO.stage) {
      this.scrollVO.stage.removeEventListener(o.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      this.scrollVO.stage.removeEventListener(o.MOUSE_UP, this.bindFunction(this.onSliderButtonUp));
      this._touchScrollHelper.dispose();
    }
    if (this.scrollVO.mouseWheelElements) {
      for (var e = 0; e < this.scrollVO.mouseWheelElements.length; ++e) {
        var t = this.scrollVO.mouseWheelElements[e];
        if (t) {
          t.removeEventListener(o.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
        }
        if (t) {
          t.removeEventListener(o.PRESS_MOVE, this.bindFunction(this.onPressMove));
        }
      }
    }
  };
  SimpleScrollComponent.prototype.setStatus = function (e) {
    if (e) {
      e.visible = this.isVisible;
    }
  };
  SimpleScrollComponent.prototype.setVisibility = function (e) {
    this._isVisible = e;
    if (this.scrollVO) {
      this.setStatus(this.scrollVO.minusButton);
      this.setStatus(this.scrollVO.plusButton);
      this.setStatus(this.scrollVO.minButton);
      this.setStatus(this.scrollVO.maxButton);
      this.setStatus(this.scrollVO.sliderButton);
      this.setStatus(this.scrollVO.sliderLine);
      this.setStatus(this.scrollVO.sliderBackground);
      if (this.scrollVO.visualElements) {
        for (var t = 0, i = this.scrollVO.visualElements; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            this.setStatus(n);
          }
        }
      }
      if (this.isVisible) {
        this.strategy.apply();
      }
    }
  };
  SimpleScrollComponent.prototype.enableComponent = function (e) {
    this._isEnabled = e;
    if (this.isDragging) {
      this.onSliderButtonUp();
    }
    if (this.scrollVO) {
      if (this.scrollVO.minusButton) {
        c.ButtonHelper.enableButton(this.scrollVO.minusButton, this.isEnabled);
      }
      if (this.scrollVO.plusButton) {
        c.ButtonHelper.enableButton(this.scrollVO.plusButton, this.isEnabled);
      }
      if (this.scrollVO.minButton) {
        c.ButtonHelper.enableButton(this.scrollVO.minButton, this.isEnabled);
      }
      if (this.scrollVO.maxButton) {
        c.ButtonHelper.enableButton(this.scrollVO.maxButton, this.isEnabled);
      }
      if (this.scrollVO.sliderButton) {
        c.ButtonHelper.enableButton(this.scrollVO.sliderButton, this.isEnabled);
      }
      if (this.isEnabled) {
        this.strategy.apply();
      }
    }
  };
  SimpleScrollComponent.prototype.addDisturbingElement = function (e) {
    if (e) {
      var t = new C.SimpleScrollDisturbingElement(e);
      t.addEventListener();
      this._disturbingElements.push(t);
    }
  };
  SimpleScrollComponent.prototype.removeAllDisturbingElements = function () {
    for (var e = 0; e < this._disturbingElements.length; ++e) {
      this._disturbingElements[e].destroy();
    }
    this._disturbingElements = [];
  };
  Object.defineProperty(SimpleScrollComponent.prototype, "isAnyDisturbingElementHovered", {
    get: function () {
      for (var e = 0; e < this._disturbingElements.length; ++e) {
        if (this._disturbingElements[e].isHovered) {
          return true;
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollComponent.prototype.onButtonClick = function (e) {
    function isButtonClicked(t) {
      return t && e.target == t;
    }
    if (this.isEnabled && c.ButtonHelper.isButtonEnabled(e.target)) {
      if (isButtonClicked(this.scrollVO.minusButton)) {
        this.scrollToValue(this.currentValue - this.deltaStepsButtons);
      } else if (isButtonClicked(this.scrollVO.plusButton)) {
        this.scrollToValue(this.currentValue + this.deltaStepsButtons);
      } else if (isButtonClicked(this.scrollVO.minButton)) {
        this.scrollToPercent(0);
      } else if (isButtonClicked(this.scrollVO.maxButton)) {
        this.scrollToPercent(1);
      }
    }
  };
  SimpleScrollComponent.prototype.onSliderLineClick = function (e) {
    if (this.isEnabled) {
      this.scrollToPercent(this.strategy.getPercentFactorOfMousePos());
    }
  };
  SimpleScrollComponent.prototype.onSliderButtonDown = function (e) {
    if (this.isEnabled) {
      this._isDragging = true;
      this._sliderClickOffset = this.strategy.isVertical ? e.localY : e.localX;
      l.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
    }
  };
  SimpleScrollComponent.prototype.onSliderButtonUp = function (e = null) {
    if (this.isDragging) {
      this.scrollToPercent(this.currentPercentFactor);
    }
    this._isDragging = false;
    this._sliderClickOffset = 0;
    l.CastleLayoutManager.getInstance().stage.enableMouseOver(r.CastleGame.STAGE_MOUSEOVER_TIME);
  };
  SimpleScrollComponent.prototype.onMouseMove = function (e) {
    if (this.isDragging) {
      this.scrollToPercent(this.strategy.getPercentFactorOfMousePos(this._sliderClickOffset));
    }
  };
  SimpleScrollComponent.prototype.onMouseWheel = function (e) {
    if (this.isEnabled) {
      if (!this.isAnyDisturbingElementHovered) {
        if (e.delta < 0) {
          this.scrollToValue(this.currentValue - this.deltaStepsMouseWheel);
        } else if (e.delta > 0) {
          this.scrollToValue(this.currentValue + this.deltaStepsMouseWheel);
        }
        g.TooltipManagerFacade.hideAllTooltips();
      }
    }
  };
  SimpleScrollComponent.prototype.onPressMove = function (e) {
    if (n.currentBrowserInfo.isTouchEvent(e) && this.isEnabled) {
      if (!this.isDragging && !this.isAnyDisturbingElementHovered) {
        if (this._touchScrollHelper.valid) {
          this.scrollToValue(this.currentValue - this.strategy.getScorllDiffValueFromContentTouchMove(this._touchScrollHelper.touchStageRefPoint, new a(e.stageX, e.stageY), e.target, this._deltaStepsMouseWheel));
        }
      }
    }
  };
  Object.defineProperty(SimpleScrollComponent.prototype, "scrollVO", {
    get: function () {
      return this._scrollVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "currentPercentFactor", {
    get: function () {
      return this._currentPercentFactor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "currentValue", {
    get: function () {
      return this._currentValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "minValue", {
    get: function () {
      return this._minValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "maxValue", {
    get: function () {
      return this._maxValue;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "deltaStepsMouseWheel", {
    get: function () {
      return this._deltaStepsMouseWheel;
    },
    set: function (e) {
      this._deltaStepsMouseWheel = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "strategy", {
    get: function () {
      return this._strategy;
    },
    set: function (e) {
      this._strategy = e;
      this.strategy.assignScrollComponent(this);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "isEnabled", {
    get: function () {
      return this._isEnabled;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "isDragging", {
    get: function () {
      return this._isDragging;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "onScrollSignal", {
    get: function () {
      return this._onScrollSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "isVisible", {
    get: function () {
      return this._isVisible;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "deltaStepsButtons", {
    get: function () {
      return this._deltaStepsButtons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollComponent.prototype, "triggerSignalOnlyOnValueChanged", {
    get: function () {
      return this._triggerSignalOnlyOnValueChanged;
    },
    set: function (e) {
      this._triggerSignalOnlyOnValueChanged = e;
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollComponent.prototype.setScrollBounds = function (e, t) {
    this._minValue = e;
    this._maxValue = t;
    this.scrollToValue(this.currentValue);
  };
  return SimpleScrollComponent;
}();
exports.SimpleScrollComponent = s;
var r = require("./365.js");
var l = require("./17.js");
var c = require("./8.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./6.js");
var h = require("./57.js");
var g = require("./200.js");
var C = require("./2079.js");
var _ = require("./698.js");