Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./57.js");
var l = require("./8.js");
var c = require("./276.js");
var u = require("./40.js");
var d = require("./95.js");
var p = require("./59.js");
var h = createjs.Rectangle;
var g = function (e) {
  function ScrollableComboboxComponent(t, i, n) {
    var o = e.call(this, t) || this;
    o._items = [];
    o._startY = 0;
    o._isOpen = false;
    var l = new p.DynamicSizeScrollStrategyVertical(false, o.disp.mc_content.mask.height, true);
    o._scrollComponent = new d.SimpleScrollComponent(i, l);
    o._layoutStrategy = n;
    o._startY = o.disp.mc_content.y;
    o._itxt_selected = a.GoodgameTextFieldManager.getInstance().registerTextField(o.disp.txt_selected, new s.TextVO(""));
    o._onSelectSignal = new r.Signal();
    o.close();
    return o;
  }
  n.__extends(ScrollableComboboxComponent, e);
  ScrollableComboboxComponent.prototype.addItem = function (e) {
    this._items.push(e);
    this.disp.mc_content.addChild(e.disp);
    if (e.isSelected) {
      this.onSelect(e);
    }
  };
  ScrollableComboboxComponent.prototype.onShow = function () {
    var t = this;
    e.prototype.onShow.call(this);
    this._items.forEach(function (e) {
      return e.show();
    });
    this._items.forEach(function (e) {
      return e.onSelectSignal.add(t.bindFunction(t.onSelect));
    });
    this._layoutStrategy.apply(this._items, new h(0, 0, 0, 0));
    var i = this.disp.mc_content.height;
    var n = this._items[0].height;
    var o = Math.max(0, i - this.disp.mc_content.mask.height);
    this._scrollComponent.init(0, o, n, n);
    this._scrollComponent.show();
    this._scrollComponent.scrollToValue(this.opensUp ? o : 0);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ScrollableComboboxComponent.prototype.onHide = function () {
    var t = this;
    e.prototype.onHide.call(this);
    this._items.forEach(function (e) {
      return e.hide();
    });
    this._items.forEach(function (e) {
      return e.onSelectSignal.remove(t.bindFunction(t.onSelect));
    });
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this.disp.mc_content.y = this._startY;
  };
  ScrollableComboboxComponent.prototype.onScroll = function () {
    if (this.opensUp) {
      this.disp.mc_content.y = this._startY + this._scrollComponent.maxValue - this._scrollComponent.currentValue;
    } else {
      this.disp.mc_content.y = this._startY - this._scrollComponent.currentValue;
    }
  };
  ScrollableComboboxComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this.isEnabled && l.ButtonHelper.isButtonEnabled(t.target)) {
      var i = this._scrollComponent.scrollVO.allElements.some(function (e) {
        return t.target == e;
      });
      var n = o.MovieClipHelper.isChildrenOf(t.target, this.disp.mc_content);
      if (!i && !n) {
        if (this._isOpen) {
          this.close();
        } else {
          this.open();
        }
      }
    }
  };
  ScrollableComboboxComponent.prototype.open = function () {
    this._scrollComponent.setVisibility(true);
    this.disp.mc_content.visible = true;
    this._isOpen = true;
    if (this.disp.btn_arrow) {
      this.disp.btn_arrow.gotoAndStop(2);
    }
  };
  ScrollableComboboxComponent.prototype.close = function () {
    this._scrollComponent.setVisibility(false);
    this.disp.mc_content.visible = false;
    this._isOpen = false;
    if (this.disp.btn_arrow) {
      this.disp.btn_arrow.gotoAndStop(1);
    }
  };
  ScrollableComboboxComponent.prototype.clear = function () {
    var e = this;
    o.MovieClipHelper.clearMovieClip(this.disp.mc_content);
    this._items.forEach(function (e) {
      return e.hide();
    });
    this._items.forEach(function (t) {
      return t.onSelectSignal.remove(e.bindFunction(e.onSelect));
    });
    this._items = [];
  };
  Object.defineProperty(ScrollableComboboxComponent.prototype, "opensUp", {
    get: function () {
      return this._layoutStrategy.alignment == c.SimpleLayoutStrategyVertical.ALIGNMENT_BOTTOM;
    },
    enumerable: true,
    configurable: true
  });
  ScrollableComboboxComponent.prototype.onSelect = function (e) {
    this.selectItem(e);
    this.close();
  };
  ScrollableComboboxComponent.prototype.selectItem = function (e, t = false) {
    if (e != this._selectedItem || t) {
      this._items.forEach(function (t) {
        return t.setSelected(t == e);
      });
      this._selectedItem = e;
      this._itxt_selected.textContentVO.stringValue = this._selectedItem.label;
      this.onSelectSignal.dispatch(this._selectedItem);
    }
  };
  Object.defineProperty(ScrollableComboboxComponent.prototype, "selectedItem", {
    get: function () {
      return this._selectedItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollableComboboxComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ScrollableComboboxComponent.prototype, "onSelectSignal", {
    get: function () {
      return this._onSelectSignal;
    },
    enumerable: true,
    configurable: true
  });
  return ScrollableComboboxComponent;
}(u.CastleItemRenderer);
exports.ScrollableComboboxComponent = g;