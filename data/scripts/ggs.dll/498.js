Object.defineProperty(exports, "__esModule", {
  value: true
});
var i = require("./0.js");
var a = require("./129.js");
var s = createjs.EventDispatcher;
var r = createjs.MouseEvent;
var o = function (e) {
  function ItemList(t) {
    var n = e.call(this) || this;
    n._itemsVisibleAtOnce = 0;
    n._itemCount = 0;
    n._currentStartIndex = 0;
    n.scrollInstanceName = "item";
    n._idCounter = 0;
    n._componentDisp = t;
    n._idCounter = 0;
    n._componentDisp.addEventListener(r.CLICK, n.bindFunction(n.onClick));
    return n;
  }
  i.__extends(ItemList, e);
  Object.defineProperty(ItemList.prototype, "componentDisp", {
    get: function () {
      return this._componentDisp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemList.prototype, "scrollItemClass", {
    set: function (e) {
      this._itemVEList ||= [];
      for (var t = 0; this._componentDisp[this.scrollInstanceName + t];) {
        var n = new e(this._componentDisp[this.scrollInstanceName + t]);
        n.addEventListener(a.ScrollItemEvent.TOUCH_DOWN, this.bindFunction(this.onTouchItem));
        n.addEventListener(a.ScrollItemEvent.TOUCH_UP, this.bindFunction(this.onTouchItem));
        n.addEventListener(a.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onTouchItem));
        n.addEventListener(a.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onTouchItem));
        this._itemVEList.push(n);
        t++;
      }
      this._itemsVisibleAtOnce = this._itemVEList.length;
    },
    enumerable: true,
    configurable: true
  });
  ItemList.prototype.pushContent = function (e) {
    this._itemVOList ||= [];
    e.id = this._idCounter++;
    this._itemVOList.push(e);
    this._itemCount = this._itemVOList.length;
  };
  ItemList.prototype.removeContent = function (e) {
    if (this._itemVOList) {
      this._itemVOList.splice(this._itemVOList.indexOf(e), 1);
      this._itemCount = this._itemVOList.length;
    }
  };
  ItemList.prototype.initList = function (e = 0, t = false) {
    this.updateItemList();
    this.updateActiveStates();
  };
  ItemList.prototype.updateItemList = function (e = 0) {
    this._currentStartIndex = e;
    for (var t = 0; t < this._itemsVisibleAtOnce; t++) {
      var n = this._itemVEList[t];
      var i = t + e;
      if (i < this._itemCount) {
        n.fillWithContent(this._itemVOList[i]);
        n.show();
        n.addEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onMouseClickOnItem));
        n.addEventListener(a.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onMouseRollOverItem));
        n.addEventListener(a.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onMouseRollOutItem));
      } else {
        n.hide();
        n.removeEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onMouseClickOnItem));
        n.removeEventListener(a.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onMouseRollOverItem));
        n.removeEventListener(a.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onMouseRollOutItem));
      }
    }
  };
  ItemList.prototype.onMouseClickOnItem = function (e) {
    this.dispatchEvent(e.clone());
  };
  ItemList.prototype.onMouseRollOverItem = function (e) {
    this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.ROLL_OVER, e.scrollItem, e.originTarget));
  };
  ItemList.prototype.onMouseRollOutItem = function (e) {
    this.dispatchEvent(new a.ScrollItemEvent(a.ScrollItemEvent.ROLL_OUT, e.scrollItem, e.originTarget));
  };
  ItemList.prototype.onTouchItem = function (e) {
    this.dispatchEvent(e.clone());
  };
  ItemList.prototype.setActiveItemVO = function (e, t, n = false) {
    if (!(e > this._itemVOList.length)) {
      if (n) {
        this._itemVOList[e].active = t;
      } else {
        for (var i = 0; i < this._itemVOList.length; i++) {
          var a = this._itemVOList[i];
          a.active = e == a.id;
        }
      }
      this.updateActiveStates();
    }
  };
  ItemList.prototype.isItemActive = function (e) {
    return this._itemVOList[e] && this._itemVOList[e].active;
  };
  ItemList.prototype.updateActiveStates = function () {
    for (var e = 0; e < this._itemVEList.length; e++) {
      var t = this._itemVEList[e];
      if (t && t.scrollItemVO) {
        t.isActive = this._itemVEList[e].scrollItemVO.active;
      }
    }
  };
  ItemList.prototype.onClick = function (e) {
    switch (e.target) {
      case this._componentDisp.btn_up:
        this.naviUp();
        break;
      case this._componentDisp.btn_down:
        this.naviDown();
    }
  };
  ItemList.prototype.remove = function () {
    for (var e = 0; e < this._itemsVisibleAtOnce; e++) {
      var t = this._itemVEList[e];
      t.removeEventListener(a.ScrollItemEvent.TOUCH_DOWN, this.bindFunction(this.onTouchItem));
      t.removeEventListener(a.ScrollItemEvent.TOUCH_UP, this.bindFunction(this.onTouchItem));
      t.removeEventListener(a.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onTouchItem));
      t.removeEventListener(a.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onTouchItem));
      t.remove();
    }
    this._componentDisp.removeEventListener(r.CLICK, this.bindFunction(this.onClick));
  };
  ItemList.prototype.resetItems = function () {
    for (var e = 0; e < this._itemsVisibleAtOnce; e++) {
      this._itemVEList[e].reset();
    }
  };
  ItemList.prototype.clear = function () {
    this._itemVOList = [];
    this._itemCount = 0;
    this._idCounter = 0;
    for (var e = 0; e < this._itemsVisibleAtOnce; e++) {
      this._itemVEList[e].hide();
    }
  };
  Object.defineProperty(ItemList.prototype, "itemsVisibleAtOnce", {
    get: function () {
      return this._itemsVisibleAtOnce;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemList.prototype, "currentStartIndex", {
    get: function () {
      return this._currentStartIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemList.prototype, "voList", {
    get: function () {
      return this._itemVOList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ItemList.prototype, "veList", {
    get: function () {
      return this._itemVEList;
    },
    enumerable: true,
    configurable: true
  });
  ItemList.prototype.updateNavi = function () {};
  ItemList.prototype.naviUp = function () {};
  ItemList.prototype.naviDown = function () {};
  return ItemList;
}(s);
exports.ItemList = o;