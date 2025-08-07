Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./23.js");
var l = require("./57.js");
var c = require("./55.js");
var u = require("./91.js");
var d = require("./161.js");
var p = require("./15.js");
var h = require("./40.js");
var g = require("./8.js");
var C = createjs.MouseEvent;
var _ = createjs.Point;
var m = function (e) {
  function APanelButton() {
    var t = this;
    t._subButtons = [];
    t._isSubButton = false;
    t._onVisibilityChanged = new l.Signal();
    t._isMouseDown = false;
    t._isSubMenuExpanded = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, null) || this;
  }
  n.__extends(APanelButton, e);
  APanelButton.prototype.init = function (e, t) {
    this._buttonClass = e;
    this._isSubButton = t;
    this.disp = this.createButtonMc();
    g.ButtonHelper.initBasicButton(this.buttonMc, 1);
    this.setElementsToDefault();
    this.updateSubArrow();
    this.expandSubMenu(false, false);
    this.setMouseDownVisuals(false);
    this.setMouseOverVisuals(false);
  };
  Object.defineProperty(APanelButton.prototype, "buttonClassName", {
    get: function () {
      return this.iconClass.__fname;
    },
    enumerable: true,
    configurable: true
  });
  APanelButton.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._subButtons != null) {
      for (var t = 0, i = this._subButtons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this.update();
  };
  APanelButton.prototype.onHide = function () {
    if (this._subButtons != null) {
      for (var t = 0, i = this._subButtons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.onHide.call(this);
  };
  APanelButton.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.disp.addEventListener(C.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(C.MOUSE_UP, this.bindFunction(this.onMouseUp));
    if (this._subButtons != null) {
      for (var t = 0, i = this._subButtons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onVisibilityChanged.add(this.bindFunction(this.onSubButtonVisibilityChanged));
        }
      }
    }
  };
  APanelButton.prototype.removeEventListener = function () {
    p.CastleBasicController.getInstance().removeEventListener(d.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
    if (this.disp) {
      this.disp.removeEventListener(C.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.disp.removeEventListener(C.MOUSE_UP, this.bindFunction(this.onMouseUp));
    }
    if (this._subButtons != null) {
      for (var t = 0, i = this._subButtons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onVisibilityChanged.remove(this.bindFunction(this.onSubButtonVisibilityChanged));
        }
      }
    }
    e.prototype.removeEventListener.call(this);
  };
  APanelButton.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    for (var t = 0, i = this._subButtons; t < i.length; t++) {
      i[t].destroy();
    }
  };
  APanelButton.prototype.update = function () {
    this.setVisibility(this.isButtonVisible());
    if (this.isVisible) {
      this.setElementsToDefault();
      g.ButtonHelper.enableButton(this.buttonMc, this.isButtonEnabled());
      this.updateOnVisible();
      this.updateTooltipText();
    }
  };
  APanelButton.prototype.updateTooltipText = function () {
    this.buttonMc.toolTipText = this.isSubButton || this.getNumberOfVisibleSubButtons() <= 0 ? this.getButtonTooltip() : null;
  };
  APanelButton.prototype.updateOnVisible = function () {};
  APanelButton.prototype.updateSubArrow = function () {
    this.buttonMc.mc_arrow.visible = this.getNumberOfVisibleSubButtons() > 0;
  };
  APanelButton.prototype.defineSubButtons = function (e) {
    if (this._subButtons != null) {
      for (var t = 0, i = this._subButtons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.destroy();
        }
      }
    }
    this._subButtons = e;
    for (var o = 0, a = this._subButtons; o < a.length; o++) {
      (n = a[o]).init(this.buttonClass, true);
      if (this.isShown) {
        n.onVisibilityChanged.add(this.bindFunction(this.onSubButtonVisibilityChanged));
        n.onShow();
      }
      this.disp.mc_subButtons.addChild(n.disp);
    }
    this.expandSubMenu(false, false);
    this.alignSubButtons();
    this.updateSubArrow();
    this.updateTooltipText();
  };
  APanelButton.prototype.alignSubButtons = function () {
    var e = 0;
    for (var t = 0; t < this._subButtons.length; ++t) {
      var i = this._subButtons[t];
      if (i.isVisible) {
        var n = i.disp;
        var o = n.getBounds(null);
        n.x = 0;
        n.y = -e - o.bottom;
        e += o.height;
      }
    }
  };
  APanelButton.prototype.setElementsToDefault = function () {
    this.buttonMc.mc_background.gotoAndStop(this.isSubButton ? 2 : 1);
    this.setHighlight(APanelButton.HIGHLIGHT_TYPE_RED, false);
    this.setHighlight(APanelButton.HIGHLIGHT_TYPE_YELLOW, false);
    this.setMark(false);
    this.setAmount(false);
    this.buttonMc.mc_highlightYellow.visible = false;
    this.buttonMc.mc_highlightRed.visible = false;
    this.buttonMc.mc_mark.visible = false;
    this.buttonMc.mc_amount.visible = false;
  };
  APanelButton.prototype.setVisibility = function (t) {
    var i = this.isVisible != t;
    e.prototype.setVisibility.call(this, t);
    if (i) {
      this._onVisibilityChanged.dispatch();
    }
  };
  APanelButton.prototype.setMark = function (e) {
    this.buttonMc.mc_mark.visible = e;
  };
  APanelButton.prototype.setAmount = function (e, t = 0) {
    this.buttonMc.mc_amount.visible = e;
    if (e) {
      f.CastleComponent.textFieldManager.registerTextField(this.buttonMc.mc_amount.txt_text, new s.LocalizedNumberVO(t <= 99 ? t : 99));
    }
  };
  APanelButton.prototype.setHighlight = function (e, t) {
    var i;
    switch (e) {
      case APanelButton.HIGHLIGHT_TYPE_YELLOW:
        i = this.buttonMc.mc_highlightYellow;
        break;
      case APanelButton.HIGHLIGHT_TYPE_RED:
        i = this.buttonMc.mc_highlightRed;
    }
    i.visible = t;
  };
  APanelButton.prototype.setMouseDownVisuals = function (e) {
    if (!!this.isButtonEnabled() || !e) {
      this.buttonMc.mc_mouseDown.visible = e;
      this._isMouseDown = e;
    }
  };
  APanelButton.prototype.setMouseOverVisuals = function (e) {
    if ((!this._isMouseDown || !e) && (!!this.isButtonEnabled() || !e)) {
      this.buttonMc.mc_mouseOver.visible = e;
    }
  };
  APanelButton.prototype.expandSubMenu = function (e, t = true) {
    if (!(this.getNumberOfVisibleSubButtons() <= 0)) {
      var i = this.disp.mc_subButtons;
      if (t) {
        if (e && !this._isSubMenuExpanded) {
          i.visible = true;
          r.TweenMax.killTweensOf(this.disp);
          r.TweenMax.fromTo(i, APanelButton.SUB_MENU_EXPAND_DURATION, {
            alpha: 0,
            y: APanelButton.SUB_MENU_INITIAL_POS_Y + APanelButton.SUB_MENU_EXPAND_OFFSET_Y
          }, {
            alpha: 1,
            y: APanelButton.SUB_MENU_INITIAL_POS_Y,
            onComplete: this.bindFunction(this.onExpandAnimationCompleted)
          });
        } else if (!e && this._isSubMenuExpanded) {
          i.visible = true;
          r.TweenMax.killTweensOf(this.disp);
          r.TweenMax.fromTo(i, APanelButton.SUB_MENU_EXPAND_DURATION, {
            alpha: 1,
            y: APanelButton.SUB_MENU_INITIAL_POS_Y
          }, {
            alpha: 0,
            y: APanelButton.SUB_MENU_INITIAL_POS_Y + APanelButton.SUB_MENU_EXPAND_OFFSET_Y,
            onUpdate: this.bindFunction(this.onExpandAnimation),
            onComplete: this.bindFunction(this.onExpandAnimationCompleted)
          });
        }
      } else {
        i.alpha = e ? 1 : 0;
        i.y = 0;
        i.visible = e;
      }
      this._isSubMenuExpanded = e;
    }
  };
  APanelButton.prototype.createButtonMc = function () {
    var e = new this.buttonClass();
    e.name = c.ClientConstUtils.getNameFromClass(this.buttonClass);
    var t = new this.iconClass();
    t.name = "mc_content";
    a.MovieClipHelper.clearMovieClip(e.mc_button.mc_icon);
    e.mc_button.mc_icon.addChild(t);
    t.stop();
    t.x = 0;
    t.y = 0;
    t.scaleX = t.scaleY = c.ClientConstUtils.getScaleFactorForFitInBounds(new _(t.width, t.height), this.iconDimension);
    return e;
  };
  Object.defineProperty(APanelButton.prototype, "iconClass", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  APanelButton.prototype.getButtonTooltip = function () {
    return null;
  };
  APanelButton.prototype.isButtonEnabled = function () {
    return true;
  };
  APanelButton.prototype.isButtonVisible = function () {
    return true;
  };
  Object.defineProperty(APanelButton.prototype, "iconDimension", {
    get: function () {
      return APanelButton.DEFAULT_ICON_DIMENSION;
    },
    enumerable: true,
    configurable: true
  });
  APanelButton.prototype.getNumberOfVisibleSubButtons = function () {
    var e = 0;
    if (this.subButtons != null) {
      for (var t = 0, i = this.subButtons; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.isVisible) {
          e++;
        }
      }
    }
    return e;
  };
  APanelButton.prototype.onClick = function (t) {
    if (o.currentBrowserInfo.isTouchEvent(t) && this.getNumberOfVisibleSubButtons() > 0) {
      var i = this._isSubMenuExpanded;
      this.expandSubMenu(!i);
      if (!i) {
        return;
      }
    }
    e.prototype.onClick.call(this, t);
    if (this.isButtonEnabled() && t.target == this.buttonMc) {
      this.onButtonClicked();
    }
  };
  APanelButton.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.buttonMc) {
      this.setMouseOverVisuals(true);
    }
  };
  APanelButton.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.buttonMc) {
      this.setMouseOverVisuals(false);
      this.setMouseDownVisuals(false);
    }
  };
  APanelButton.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    if (t.target == this.disp) {
      this.expandSubMenu(true);
    }
  };
  APanelButton.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    if (t.target == this.disp) {
      this.expandSubMenu(false);
    }
  };
  APanelButton.prototype.onMouseDown = function (e) {
    if (e.target == this.buttonMc) {
      this.setMouseOverVisuals(false);
      this.setMouseDownVisuals(true);
    }
  };
  APanelButton.prototype.onMouseUp = function (e) {
    if (e.target == this.buttonMc) {
      this.setMouseDownVisuals(false);
    }
  };
  APanelButton.prototype.onButtonClicked = function () {};
  APanelButton.prototype.onSubButtonVisibilityChanged = function () {
    this.alignSubButtons();
    this.updateSubArrow();
    this.onVisibilityChanged.dispatch();
  };
  APanelButton.prototype.onExpandAnimation = function () {
    O.CastleMovieClipHelper.updateParentCache(this.disp);
  };
  APanelButton.prototype.onExpandAnimationCompleted = function () {
    this.disp.mc_subButtons.visible = this._isSubMenuExpanded;
    if (!this.isSubButton && this.getNumberOfVisibleSubButtons() > 0) {
      this.buttonMc.toolTipText = this._isSubMenuExpanded ? this.getButtonTooltip() : null;
    }
    if (this._isSubMenuExpanded) {
      f.CastleComponent.controller.dispatchEvent(new u.CastleLayoutManagerEvent(u.CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL, [this.buttonClassName]));
    } else {
      f.CastleComponent.controller.dispatchEvent(new u.CastleLayoutManagerEvent(u.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, [this.buttonClassName]));
    }
    O.CastleMovieClipHelper.updateParentCache(this.disp);
  };
  APanelButton.prototype.listenOnXPChanged = function () {
    p.CastleBasicController.getInstance().addEventListener(d.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onXPChanged));
  };
  APanelButton.prototype.onXPChanged = function (e) {
    this.update();
  };
  Object.defineProperty(APanelButton.prototype, "subButtons", {
    get: function () {
      return this._subButtons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "isSubButton", {
    get: function () {
      return this._isSubButton;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "onVisibilityChanged", {
    get: function () {
      return this._onVisibilityChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "buttonMc", {
    get: function () {
      return this.disp.mc_button;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "iconMc", {
    get: function () {
      return this.disp.mc_button.mc_icon.getChildAt(0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "buttonClass", {
    get: function () {
      return this._buttonClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(APanelButton.prototype, "isSubMenuExpanded", {
    get: function () {
      return this._isSubMenuExpanded;
    },
    enumerable: true,
    configurable: true
  });
  APanelButton.__initialize_static_members = function () {
    APanelButton.DEFAULT_ICON_DIMENSION = new _(35, 35);
  };
  APanelButton.SUB_MENU_EXPAND_DURATION = 0.2;
  APanelButton.SUB_MENU_EXPAND_OFFSET_Y = 5;
  APanelButton.SUB_MENU_INITIAL_POS_Y = -23.5;
  APanelButton.HIGHLIGHT_TYPE_RED = "red";
  APanelButton.HIGHLIGHT_TYPE_YELLOW = "yellow";
  return APanelButton;
}(h.CastleItemRenderer);
exports.APanelButton = m;
o.classImplementsInterfaces(m, "ICollectableRendererList");
var f = require("./14.js");
var O = require("./41.js");
m.__initialize_static_members();