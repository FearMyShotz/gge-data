Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./6.js");
var c = require("./57.js");
var u = require("./8.js");
var d = function (e) {
  function SimpleComboboxComponent(t, i) {
    var n = this;
    n._isInitializing = false;
    n._currentIndex = 0;
    n._isComboboxOpen = true;
    n._items = [];
    n._onSelectionChanged = new c.Signal();
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._config = i;
    n.init();
    return n;
  }
  n.__extends(SimpleComboboxComponent, e);
  SimpleComboboxComponent.prototype.init = function () {
    u.ButtonHelper.initBasicButton(this.disp.mc_selector, 1);
  };
  SimpleComboboxComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this.switchComboboxState(false);
    this.selectIndex(0, false);
  };
  SimpleComboboxComponent.prototype.onHide = function () {
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    this.switchComboboxState(false);
    e.prototype.onHide.call(this);
  };
  SimpleComboboxComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.handleEventListenerOnItem(n, true);
        }
      }
    }
  };
  SimpleComboboxComponent.prototype.removeEventListener = function () {
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.handleEventListenerOnItem(n, false);
        }
      }
    }
    e.prototype.removeEventListener.call(this);
  };
  SimpleComboboxComponent.prototype.updateWithNewValues = function (e) {
    this._items = e;
    this._currentIndex = 0;
    o.MovieClipHelper.clearMovieClip(this.disp.mc_items);
    this.update();
  };
  SimpleComboboxComponent.prototype.update = function () {
    this._isInitializing = true;
    for (var e = 0; e < this._items.length; ++e) {
      var t = this._items[e];
      this.disp.mc_items.addChild(t.disp);
      this.handleEventListenerOnItem(t, true);
      t.updateDisp();
      if (this.isShown) {
        t.onShow();
      }
    }
    this._isInitializing = false;
    this.updateItemAlignment();
  };
  SimpleComboboxComponent.prototype.updateItemAlignment = function () {
    if (!this._isInitializing) {
      var e = 0;
      if (this._items != null) {
        for (var t = 0, i = this._items; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            n.disp.y = e;
            e += l.int(n.disp.height + this.config.paddingY);
          }
        }
      }
    }
  };
  SimpleComboboxComponent.prototype.switchComboboxState = function (e) {
    this._isComboboxOpen = e;
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.setVisibility(this._isComboboxOpen);
        }
      }
    }
    if (this.disp.mc_selector.mc_background) {
      this.disp.mc_selector.mc_background.gotoAndStop(this._isComboboxOpen ? 2 : 1);
    }
    if (this.disp.mc_selector.mc_arrow) {
      this.disp.mc_selector.mc_arrow.gotoAndStop(this._isComboboxOpen ? 2 : 1);
    }
    this.disp.mc_selector.scaleX = this.disp.mc_selector.scaleY = 1;
  };
  SimpleComboboxComponent.prototype.selectIndex = function (e, t = true) {
    this._currentIndex = l.int(a.MathBase.clamp(e, 0, Math.max(0, this._items.length - 1)));
    this.switchComboboxState(false);
    if (t) {
      this._onSelectionChanged.dispatch();
    }
  };
  SimpleComboboxComponent.prototype.selectItem = function (e, t = true) {
    this.selectIndex(this.getItemIndex(e), t);
  };
  SimpleComboboxComponent.prototype.setSelectorHoverState = function (e) {
    var t = this.disp.mc_selector;
    t.scaleX = t.scaleY = e ? this.config.selectorHoverScale : 1;
  };
  SimpleComboboxComponent.prototype.handleEventListenerOnItem = function (e, t) {
    if (t) {
      e.onFillContentCompleted.add(this.bindFunction(this.onItemItemFillCompleted));
      e.onItemClicked.add(this.bindFunction(this.onItemClicked));
    } else {
      e.onFillContentCompleted.remove(this.bindFunction(this.onItemItemFillCompleted));
      e.onItemClicked.remove(this.bindFunction(this.onItemClicked));
    }
  };
  SimpleComboboxComponent.prototype.getSelectedItem = function () {
    if (this._currentIndex < this._items.length) {
      return this._items[this._currentIndex];
    } else {
      return null;
    }
  };
  SimpleComboboxComponent.prototype.getItemByCompareFunc = function (e) {
    if (this._items != null) {
      for (var t = 0, i = this._items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && e(n)) {
          return n;
        }
      }
    }
    return null;
  };
  SimpleComboboxComponent.prototype.getItemIndex = function (e) {
    for (var t = 0; t < this._items.length; ++t) {
      if (this._items[t] == e) {
        return t;
      }
    }
    return -1;
  };
  SimpleComboboxComponent.prototype.getSelectorMc = function () {
    return this.disp.mc_selector;
  };
  SimpleComboboxComponent.prototype.onClick = function (t) {
    if (u.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.onClick.call(this, t);
      switch (t.target) {
        case this.disp.mc_selector:
          this.switchComboboxState(!this._isComboboxOpen);
          if (!this._isComboboxOpen) {
            this.setSelectorHoverState(true);
          }
      }
    }
  };
  SimpleComboboxComponent.prototype.onOutOfBoundsClickCheck = function (e) {
    if (e != this.disp && e != this.disp.mc_selector && e != this.disp.mc_items) {
      this.switchComboboxState(false);
    }
  };
  SimpleComboboxComponent.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.disp.mc_selector:
        if (!this._isComboboxOpen) {
          this.setSelectorHoverState(true);
        }
    }
  };
  SimpleComboboxComponent.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this.disp.mc_selector:
        this.setSelectorHoverState(false);
    }
  };
  SimpleComboboxComponent.prototype.onItemItemFillCompleted = function (e) {
    e.onFillContentCompleted.remove(this.bindFunction(this.onItemItemFillCompleted));
    this.updateItemAlignment();
  };
  SimpleComboboxComponent.prototype.onItemClicked = function (e) {
    var t = l.int(this.getItemIndex(e));
    if (t >= 0) {
      this.selectIndex(t);
    } else {
      s.warn("SimpleComboboxComponent.onItemClicked(): Item is not part if this combobox.");
    }
  };
  Object.defineProperty(SimpleComboboxComponent.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleComboboxComponent.prototype, "config", {
    get: function () {
      return this._config;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SimpleComboboxComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  return SimpleComboboxComponent;
}(require("./40.js").CastleItemRenderer);
exports.SimpleComboboxComponent = d;
r.classImplementsInterfaces(d, "ICollectableRendererList");