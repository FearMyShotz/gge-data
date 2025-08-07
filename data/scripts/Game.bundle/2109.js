Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = function (e) {
  function SimpleScrollItemList(t, i = null, n = 1) {
    var o = this;
    o._idCounter = 0;
    o._itemsVisibleAtOnce = 0;
    o._itemCount = 0;
    o._scrollStep = 0;
    o._currentStartIndex = 0;
    o.scrollInstanceName = "item";
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._scrollStep = n;
    o._idCounter = 0;
    o._componentDisp = t;
    if (i) {
      o._scrollComponent = i;
    } else {
      u.ButtonHelper.initButtons([o._componentDisp.btn_minus, o._componentDisp.btn_plus, o._componentDisp.btn_min, o._componentDisp.btn_max], g.ClickFeedbackButton, 1);
      u.ButtonHelper.initButtons([o._componentDisp.btn_slider], s.ClickFeedBackSliderButton, 1);
      var r = new p.DynamicSizeScrollStrategyVertical(true);
      o._scrollComponent = new a.SimpleScrollComponent(new d.SimpleScrollVO().initByParent(t).addMouseWheelElements([t]), r);
    }
    return o;
  }
  n.__extends(SimpleScrollItemList, e);
  Object.defineProperty(SimpleScrollItemList.prototype, "componentDisp", {
    get: function () {
      return this._componentDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "scrollItemClass", {
    set: function (e) {
      this._itemVEList ||= [];
      for (var t = 0; this._componentDisp[this.scrollInstanceName + t];) {
        this._itemVEList.push(new e(this._componentDisp[this.scrollInstanceName + t]));
        t++;
      }
      this._itemsVisibleAtOnce = this._itemVEList.length;
      if (h.instanceOf_IDynamicSizeScrollStrategy(this._scrollComponent.strategy)) {
        this._scrollComponent.strategy.visibleValue = this._itemsVisibleAtOnce;
      }
    },
    enumerable: true,
    configurable: true
  });
  SimpleScrollItemList.prototype.pushContent = function (e) {
    this._itemVOList ||= [];
    e.id = this._idCounter++;
    this._itemVOList.push(e);
    this._itemCount = this._itemVOList.length;
  };
  SimpleScrollItemList.prototype.removeContent = function (e) {
    if (this._itemVOList) {
      this._itemVOList.splice(this._itemVOList.indexOf(e), 1);
      this._itemCount = this._itemVOList.length;
    }
  };
  SimpleScrollItemList.prototype.initList = function (e = 0) {
    var t = c.int(r.MathBase.clamp(c.int(e / this._scrollStep), 0, this._itemCount));
    var i = Math.max(0, Math.ceil((this._itemCount - this._itemsVisibleAtOnce) / this._scrollStep));
    this._scrollComponent.init(0, i);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this._scrollComponent.scrollToValue(t);
    if (i > 0) {
      this._scrollComponent.setVisibility(true);
    } else {
      this._scrollComponent.setVisibility(false);
    }
  };
  SimpleScrollItemList.prototype.onScrollValueChange = function () {
    this.updateItemList(this._scrollComponent.currentValue * this._scrollStep);
    this.updateActiveStates();
    this.dispatchEvent(new l.ScrollItemEvent(l.ScrollItemEvent.ON_SCROLL, null, null));
  };
  SimpleScrollItemList.prototype.updateItemList = function (e = 0) {
    this._currentStartIndex = e;
    for (var t = 0; t < this._itemsVisibleAtOnce; t++) {
      var i = this._itemVEList[t];
      var n = t + e;
      if (n < this._itemCount) {
        i.fillWithContent(this._itemVOList[n]);
        i.show();
        i.addEventListener(l.ScrollItemEvent.CLICK, this.bindFunction(this.onMouseClickOnItem));
        i.addEventListener(l.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onMouseRollOverItem));
        i.addEventListener(l.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onMouseRollOutItem));
      } else {
        i.hide();
        i.removeEventListener(l.ScrollItemEvent.CLICK, this.bindFunction(this.onMouseClickOnItem));
        i.removeEventListener(l.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onMouseRollOverItem));
        i.removeEventListener(l.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onMouseRollOutItem));
      }
    }
  };
  SimpleScrollItemList.prototype.setActiveItemVO = function (e, t, i = false) {
    if (!(e > this._itemVOList.length)) {
      if (i) {
        this._itemVOList[e].active = t;
      } else {
        for (var n = 0; n < this._itemVOList.length; n++) {
          var o = this._itemVOList[n];
          o.active = e == o.id;
        }
      }
      this.updateActiveStates();
    }
  };
  SimpleScrollItemList.prototype.isItemActive = function (e) {
    return !!this._itemVOList[e] && this._itemVOList[e].active;
  };
  SimpleScrollItemList.prototype.updateActiveStates = function () {
    for (var e = 0; e < this._itemVEList.length; e++) {
      var t = this._itemVEList[e];
      if (t && t.scrollItemVO) {
        t.isActive = this._itemVEList[e].scrollItemVO.active;
      }
    }
  };
  SimpleScrollItemList.prototype.onMouseClickOnItem = function (e) {
    this.dispatchEvent(new l.ScrollItemEvent(l.ScrollItemEvent.CLICK, e.scrollItem, e.originTarget));
  };
  SimpleScrollItemList.prototype.onMouseRollOverItem = function (e) {
    this.dispatchEvent(new l.ScrollItemEvent(l.ScrollItemEvent.ROLL_OVER, e.scrollItem, e.originTarget));
  };
  SimpleScrollItemList.prototype.onMouseRollOutItem = function (e) {
    this.dispatchEvent(new l.ScrollItemEvent(l.ScrollItemEvent.ROLL_OUT, e.scrollItem, e.originTarget));
  };
  SimpleScrollItemList.prototype.remove = function () {
    for (var e = 0; e < this._itemsVisibleAtOnce; e++) {
      this._itemVEList[e].remove();
    }
    this._scrollComponent.hide();
  };
  SimpleScrollItemList.prototype.resetItems = function () {
    for (var e = 0; e < this._itemsVisibleAtOnce; e++) {
      this._itemVEList[e].reset();
    }
  };
  SimpleScrollItemList.prototype.clear = function () {
    this._itemVOList = [];
    this._itemCount = 0;
    this._idCounter = 0;
    for (var e = 0; e < this._itemsVisibleAtOnce; e++) {
      this._itemVEList[e].hide();
    }
  };
  Object.defineProperty(SimpleScrollItemList.prototype, "itemsVisibleAtOnce", {
    get: function () {
      return this._itemsVisibleAtOnce;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "currentStartIndex", {
    get: function () {
      return this._currentStartIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "voList", {
    get: function () {
      return this._itemVOList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "veList", {
    get: function () {
      return this._itemVEList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleScrollItemList.prototype, "scrollComponent", {
    get: function () {
      return this._scrollComponent;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleScrollItemList;
}(createjs.EventDispatcher);
exports.SimpleScrollItemList = o;
var a = require("./95.js");
var s = require("./413.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./6.js");
var u = require("./8.js");
var d = require("./47.js");
var p = require("./59.js");
var h = require("./2110.js");
var g = require("./36.js");