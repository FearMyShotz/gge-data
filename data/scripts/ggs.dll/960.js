Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./498.js");
var s = require("./129.js");
var r = createjs.MouseEvent;
var o = function (e) {
  function ItemScrollList(t, n = null) {
    var i = e.call(this, t) || this;
    i._hideButtons = true;
    i._locked = false;
    i._scrollStep = 1;
    i._scrollLayer = n;
    if (i._scrollLayer) {
      i._scrollLayer.addEventListener(r.MOUSE_WHEEL, i.bindFunction(i.onMouseWheel));
    } else {
      i._componentDisp.addEventListener(r.MOUSE_WHEEL, i.bindFunction(i.onMouseWheel));
    }
    return i;
  }
  i.__extends(ItemScrollList, e);
  ItemScrollList.prototype.initList = function (e = 0, t = false) {
    if (t) {
      this.updateItemList(Math.max(e, 0));
    } else {
      this.updateItemList(Math.min(e, Math.max(this._itemCount - this._itemsVisibleAtOnce, 0)));
    }
    this.updateActiveStates();
  };
  ItemScrollList.prototype.updateItemList = function (t = 0) {
    e.prototype.updateItemList.call(this, t);
    if (this._hideButtons) {
      this.btn_up.visible = this._currentStartIndex > 0;
      this.btn_down.visible = this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce;
    } else {
      if (this.btn_up.basicButton) {
        this.btn_up.basicButton.enableButton = this._currentStartIndex > 0;
        this.btn_down.basicButton.enableButton = this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce;
      } else {
        this.btn_up.enableButton = this._currentStartIndex > 0;
        this.btn_down.enableButton = this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce;
      }
      this.btn_up.visible = true;
      this.btn_down.visible = true;
    }
    if (this._componentDisp.txt_index) {
      var n = this._itemCount > 0 ? 1 : 0;
      this._componentDisp.txt_index.text = Math.max(n, Math.ceil(this._currentStartIndex / this._scrollStep)) + " / " + Math.ceil(this._itemCount / this._scrollStep);
    }
  };
  ItemScrollList.prototype.onMouseWheel = function (e) {
    if (e.delta < 0) {
      this.naviUp();
    } else if (e.delta > 0) {
      this.naviDown();
    }
  };
  ItemScrollList.prototype.naviUp = function () {
    if (!this._locked) {
      if (this._currentStartIndex > 0) {
        this.updateItemList(Math.max(0, this._currentStartIndex - this._scrollStep));
      }
      this.updateActiveStates();
      this.dispatchEvent(new s.ScrollItemEvent(s.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  ItemScrollList.prototype.naviDown = function () {
    if (!this._locked) {
      if (this._currentStartIndex < this._itemCount - this._itemsVisibleAtOnce) {
        this.updateItemList(this._currentStartIndex + this._scrollStep);
      }
      this.updateActiveStates();
      this.dispatchEvent(new s.ScrollItemEvent(s.ScrollItemEvent.ON_SCROLL, null, null));
    }
  };
  Object.defineProperty(ItemScrollList.prototype, "scrollStep", {
    set: function (e) {
      this._scrollStep = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemScrollList.prototype, "hideButtons", {
    get: function () {
      return this._hideButtons;
    },
    set: function (e) {
      this._hideButtons = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemScrollList.prototype, "btn_up", {
    get: function () {
      return this._componentDisp.btn_up;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemScrollList.prototype, "btn_down", {
    get: function () {
      return this._componentDisp.btn_down;
    },
    enumerable: true,
    configurable: true
  });
  ItemScrollList.prototype.remove = function () {
    if (this._scrollLayer) {
      this._scrollLayer.removeEventListener(r.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    } else {
      this._componentDisp.removeEventListener(r.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    }
    e.prototype.remove.call(this);
  };
  ItemScrollList.prototype.lockList = function () {
    this._locked = true;
  };
  ItemScrollList.prototype.unlockList = function () {
    this._locked = false;
  };
  Object.defineProperty(ItemScrollList.prototype, "locked", {
    get: function () {
      return this._locked;
    },
    enumerable: true,
    configurable: true
  });
  return ItemScrollList;
}(a.ItemList);
exports.ItemScrollList = o;