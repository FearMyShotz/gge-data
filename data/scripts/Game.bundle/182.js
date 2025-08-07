Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = createjs.Point;
var a = function () {
  function CastleTextScrollComponent(e) {
    this._scrollSteps = 2;
    this._isDraggingSliderButton = false;
    this._enabled = true;
    this._invisibleOnFit = false;
    this._hideArrowsOnScrollToEdges = false;
    this.isTouchInChatContent = false;
    this._scrollVO = e;
    if (e) {
      if (e.txt_content) {
        this._itxt_content = this.textFieldManager.registerTextField(e.txt_content, new d.TextVO(""));
      }
      if (e) {
        g.ButtonHelper.initBasicButton(e.btn_slider);
        g.ButtonHelper.initBasicButton(e.btn_scrollUp);
        g.ButtonHelper.initBasicButton(e.btn_scrollDown);
      }
      this.enableComponent(this._enabled);
      this._touchHelper = new C.TouchScrollHelper();
    }
  }
  CastleTextScrollComponent.prototype.onShow = function () {
    if (this.scrollVO) {
      this.removeEventListeners();
      this.addEventListeners();
      this.updateItems();
    }
  };
  CastleTextScrollComponent.prototype.onHide = function () {
    if (this.scrollVO) {
      this.removeEventListeners();
    }
  };
  CastleTextScrollComponent.prototype.addEventListeners = function () {
    if (this.scrollVO.btn_scrollDown) {
      this.scrollVO.btn_scrollDown.addEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.btn_scrollUp) {
      this.scrollVO.btn_scrollUp.addEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.mc_sliderLine) {
      this.scrollVO.mc_sliderLine.addEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.btn_slider && this.scrollVO.stage) {
      this.scrollVO.stage.addEventListener(n.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
      this.scrollVO.btn_slider.addEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.scrollVO.stage.addEventListener(n.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
    this._scrollVO.txt_content.parent.addEventListener(n.MOUSE_WHEEL, this.bindFunction(this.handleScroll));
    this._itxt_content.change.add(this.bindFunction(this.onTextChanged));
    this._touchHelper.setup(this._scrollVO.txt_content.parent, this.bindFunction(this.varifyTouchInChatContent), this.bindFunction(this.inValidateTouchInChatContent));
    this._scrollVO.txt_content.parent.addEventListener(n.PRESS_MOVE, this.bindFunction(this.handleTouchScroll));
  };
  CastleTextScrollComponent.prototype.handleScroll = function (e) {
    var t = this._scrollVO.txt_content.getBounds(this._scrollVO.txt_content.stage);
    if (t && e.nativeEvent.clientX > t.x && e.nativeEvent.clientX < t.x + t.width && e.nativeEvent.clientY > t.y && e.nativeEvent.clientY < t.y + t.height) {
      if (e.delta > 0) {
        this.scrollDown();
      } else {
        this.scrollUp();
      }
    }
  };
  CastleTextScrollComponent.prototype.varifyTouchInChatContent = function () {
    var e = this._scrollVO.txt_content.getBounds(this._scrollVO.txt_content.stage);
    this.isTouchInChatContent = false;
    if (e && this._touchHelper.valid && this._touchHelper.touchStageRefPoint.x > e.x && this._touchHelper.touchStageRefPoint.x < e.x + e.width && this._touchHelper.touchStageRefPoint.y > e.y && this._touchHelper.touchStageRefPoint.y < e.y + e.height) {
      this.isTouchInChatContent = true;
    }
  };
  CastleTextScrollComponent.prototype.inValidateTouchInChatContent = function () {
    this.isTouchInChatContent = false;
  };
  CastleTextScrollComponent.prototype.handleTouchScroll = function (e) {
    if (this.isTouchInChatContent) {
      var t = e.stageY - this._touchHelper.touchStageRefPoint.y;
      var i = this._itxt_content.scrollV - t;
      if (i > this._itxt_content.maxScrollV) {
        this._itxt_content.scrollV = this._itxt_content.maxScrollV;
      } else {
        this._itxt_content.scrollV = i < 0 ? 0 : i;
      }
      this.updateItems();
    }
  };
  CastleTextScrollComponent.prototype.removeEventListeners = function () {
    if (this.scrollVO.btn_scrollDown) {
      this.scrollVO.btn_scrollDown.removeEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.btn_scrollUp) {
      this.scrollVO.btn_scrollUp.removeEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.mc_sliderLine) {
      this.scrollVO.mc_sliderLine.removeEventListener(n.CLICK, this.bindFunction(this.onMouseClick));
    }
    if (this.scrollVO.btn_slider) {
      this._scrollVO.btn_slider.removeEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      if (this._scrollVO.stage) {
        this._scrollVO.stage.removeEventListener(n.MOUSE_MOVE, this.bindFunction(this.onMouseMove));
        this._scrollVO.stage.removeEventListener(n.MOUSE_UP, this.bindFunction(this.onMouseUp));
      }
    }
    if (this._scrollVO.txt_content.parent) {
      this._scrollVO.txt_content.parent.removeEventListener(n.MOUSE_WHEEL, this.bindFunction(this.handleScroll));
      this._scrollVO.txt_content.parent.removeEventListener(n.PRESS_MOVE, this.bindFunction(this.handleTouchScroll));
      this._touchHelper.dispose();
    }
    try {
      this._itxt_content.change.remove(this.bindFunction(this.onTextChanged));
    } catch (e) {
      u.debug(e.stack);
    }
  };
  CastleTextScrollComponent.prototype.invalidateScrollState = function () {
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.updateItems = function () {
    this.updateSliderButtonPos();
    this.updateItemVisibility();
  };
  CastleTextScrollComponent.prototype.updateSliderButtonPos = function () {
    g.ButtonHelper.enableButton(this.scrollVO.btn_scrollUp, this._itxt_content.scrollV > 1);
    g.ButtonHelper.enableButton(this.scrollVO.btn_scrollDown, this._itxt_content.scrollV != this._itxt_content.maxScrollV);
    if (this.scrollVO.btn_slider) {
      var e = this._itxt_content.scrollV / this._itxt_content.maxScrollV;
      if (this._itxt_content.scrollV <= 1) {
        e = 0;
      }
      e = h.CastleMathHelper.clamp(e, 0, 1);
      this.scrollVO.btn_slider.y = this.scrollVO.mc_sliderLine.y + this.scrollVO.mc_sliderLine.height * e;
    }
  };
  Object.defineProperty(CastleTextScrollComponent.prototype, "deltaScroll", {
    get: function () {
      var e = this._scrollSteps;
      if (l.ClientConstUtils.isTlfMode) {
        e = p.int(this._itxt_content.size * 1.3);
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleTextScrollComponent.prototype.scrollUp = function () {
    if (this._itxt_content.scrollV - this.deltaScroll < 0) {
      this._itxt_content.scrollV = 0;
    } else {
      this._itxt_content.scrollV -= this.deltaScroll;
    }
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.scrollDown = function () {
    if (this._itxt_content.scrollV + this.deltaScroll > this._itxt_content.maxScrollV) {
      this._itxt_content.scrollV = this._itxt_content.maxScrollV;
    } else {
      this._itxt_content.scrollV += this.deltaScroll;
    }
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.scrollToStart = function () {
    this._itxt_content.scrollV = 0;
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.scrollToEnd = function () {
    this._itxt_content.scrollV = this._itxt_content.maxScrollV;
    this.updateItems();
  };
  CastleTextScrollComponent.prototype.enableComponent = function (e) {
    g.ButtonHelper.enableButton(this.scrollVO.btn_scrollUp, e);
    g.ButtonHelper.enableButton(this.scrollVO.btn_scrollDown, e);
    g.ButtonHelper.enableButton(this.scrollVO.btn_slider, e);
    this._enabled = e;
  };
  CastleTextScrollComponent.prototype.updateItemVisibility = function () {
    if (this.invisibleOnFit || this.hideArrowsOnScrollToEdges) {
      for (var e = this.getIofItems(), t = !this.invisibleOnFit || this._itxt_content.maxScrollV > 1, i = 0; i < e.length; ++i) {
        e[i].visible = t;
      }
      if (this.hideArrowsOnScrollToEdges && t && this.scrollVO.btn_scrollUp && this.scrollVO.btn_scrollDown) {
        this.scrollVO.btn_scrollUp.visible = this._itxt_content.scrollV > 1;
        this.scrollVO.btn_scrollDown.visible = this._itxt_content.scrollV < this._itxt_content.maxScrollV;
      }
    }
  };
  CastleTextScrollComponent.prototype.getIofItems = function () {
    var e = [];
    this.addIofItemToList(e, this.scrollVO.btn_scrollDown);
    this.addIofItemToList(e, this.scrollVO.btn_scrollUp);
    this.addIofItemToList(e, this.scrollVO.btn_slider);
    this.addIofItemToList(e, this.scrollVO.mc_sliderLine);
    if (this.scrollVO.visibilityItems) {
      for (var t = 0; t < this.scrollVO.visibilityItems.length; t++) {
        e.push(this.scrollVO.visibilityItems[t]);
      }
    }
    return e;
  };
  CastleTextScrollComponent.prototype.addIofItemToList = function (e, t) {
    if (t) {
      e.push(t);
    }
  };
  CastleTextScrollComponent.prototype.onMouseClick = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      if (this.scrollVO.btn_scrollUp && e.target == this.scrollVO.btn_scrollUp) {
        this.scrollUp();
      } else if (this.scrollVO.btn_scrollDown && e.target == this.scrollVO.btn_scrollDown) {
        this.scrollDown();
      } else if (this.scrollVO.mc_sliderLine && e.target == this.scrollVO.mc_sliderLine && this.scrollVO.btn_slider) {
        if (e.stageY < this.scrollVO.btn_slider.parent.localToGlobal(new o(this.scrollVO.btn_slider.x, this.scrollVO.btn_slider.y)).y) {
          this.scrollUp();
        } else if (e.stageY > this.scrollVO.btn_slider.parent.localToGlobal(new o(this.scrollVO.btn_slider.x, this.scrollVO.btn_slider.y)).y) {
          this.scrollDown();
        }
      }
    }
  };
  CastleTextScrollComponent.prototype.onMouseDown = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      this._isDraggingSliderButton = true;
      r.CastleLayoutManager.getInstance().stage.enableMouseOver(0);
    }
  };
  CastleTextScrollComponent.prototype.onMouseUp = function (e) {
    if (this._isDraggingSliderButton) {
      this.updateItems();
    }
    this._isDraggingSliderButton = false;
    r.CastleLayoutManager.getInstance().stage.enableMouseOver(s.CastleGame.STAGE_MOUSEOVER_TIME);
  };
  CastleTextScrollComponent.prototype.onMouseMove = function (e) {
    if (this._isDraggingSliderButton) {
      this.scrollVO.btn_slider.y = h.CastleMathHelper.clamp(this.scrollVO.mc_sliderLine.mouseY + this.scrollVO.mc_sliderLine.y, this.scrollVO.mc_sliderLine.y, this.scrollVO.mc_sliderLine.y + this.scrollVO.mc_sliderLine.height);
      var t = p.int(this.scrollVO.btn_slider.y - this.scrollVO.mc_sliderLine.y) / p.int(this.scrollVO.mc_sliderLine.height);
      t = h.CastleMathHelper.clamp(t, 0, 1);
      this._itxt_content.scrollV = this._itxt_content.maxScrollV * t;
    }
  };
  CastleTextScrollComponent.prototype.onScrollInnerText = function (e = null) {
    if (this._enabled) {
      if (!this._isDraggingSliderButton) {
        this.updateItems();
      }
    } else {
      this.scrollToEnd();
    }
  };
  CastleTextScrollComponent.prototype.onTextChanged = function (e) {
    this.updateItems();
  };
  Object.defineProperty(CastleTextScrollComponent.prototype, "textFieldManager", {
    get: function () {
      return c.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTextScrollComponent.prototype, "scrollSteps", {
    get: function () {
      return this._scrollSteps;
    },
    set: function (e) {
      this._scrollSteps = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTextScrollComponent.prototype, "invisibleOnFit", {
    get: function () {
      return this._invisibleOnFit;
    },
    set: function (e) {
      this._invisibleOnFit = e;
      this.updateItemVisibility();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleTextScrollComponent.prototype, "hideArrowsOnScrollToEdges", {
    get: function () {
      return this._hideArrowsOnScrollToEdges;
    },
    set: function (e) {
      this._hideArrowsOnScrollToEdges = e;
      this.updateItemVisibility();
    },
    enumerable: true,
    configurable: true
  });
  CastleTextScrollComponent.prototype.isScrolledToEnd = function () {
    return !!this._itxt_content && this._itxt_content.scrollV == this._itxt_content.maxScrollV;
  };
  Object.defineProperty(CastleTextScrollComponent.prototype, "scrollVO", {
    get: function () {
      return this._scrollVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleTextScrollComponent;
}();
exports.CastleTextScrollComponent = a;
var s = require("./365.js");
var r = require("./17.js");
var l = require("./55.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./3.js");
var p = require("./6.js");
var h = require("./213.js");
var g = require("./8.js");
var C = require("./698.js");