Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./6.js");
var s = require("./23.js");
var r = require("./23.js");
var l = require("./23.js");
var c = require("./794.js");
var u = require("./15.js");
var d = require("./72.js");
var p = require("./4.js");
var h = createjs.MouseEvent;
var g = function (e) {
  function BasicBuildListComponent(t, i, n) {
    var o = this;
    o._alignment = 0;
    o._selectedSlot = -1;
    o._showProgressbar = true;
    o._slotsDraggable = true;
    o.currentIndex = 0;
    o.maxShowableItems = 0;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._componentMC = t;
    o._itemMC = o._componentMC.mc_items;
    o._alignment = i;
    o.maxShowableItems = n;
    return o;
  }
  n.__extends(BasicBuildListComponent, e);
  Object.defineProperty(BasicBuildListComponent.prototype, "selectedSlot", {
    get: function () {
      return this._selectedSlot;
    },
    set: function (e) {
      if (this.selectedItem) {
        this.selectedItem.isSelected = false;
      }
      this._selectedSlot = e;
      if (this._selectedSlot >= 0 && this._selectedSlot < this._items.length) {
        this._items[this._selectedSlot].isSelected = true;
      }
      this.dispatchEvent(new c.BasicBuildListEvent(c.BasicBuildListEvent.SELECTED_ITEM));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListComponent.prototype, "selectedItem", {
    get: function () {
      if (this._selectedSlot >= 0 && this._selectedSlot < this._items.length) {
        return this._items[this._selectedSlot];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.fillItems = function (e, t = 0) {
    this.clearItems();
    if (this._buildlist != e) {
      this.selectedSlot = 0;
    }
    this._buildlist = e;
    if (this._buildlist) {
      for (var i = this.listLength, n = 0; n < i; n++) {
        var o = this.createBuildListItem();
        o.slotVO = e.getSlotByArrayPos(n);
        o.pos = n;
        o.showProgressbar = this.showProgressbar;
        if (o.pos == this._selectedSlot) {
          if (o.isFree || o.isLocked) {
            this._selectedSlot = -1;
          } else {
            o.isSelected = true;
          }
        }
        this.initBuildListItem(o);
        this._itemMC.addChild(o.disp);
        this._items.push(o);
      }
      this.updateAllPositions();
    }
  };
  Object.defineProperty(BasicBuildListComponent.prototype, "listLength", {
    get: function () {
      return this._buildlist.numOfSlots;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.createBuildListItem = function () {
    return null;
  };
  BasicBuildListComponent.prototype.initBuildListItem = function (e) {
    e.disp.addEventListener(h.CLICK, this.bindFunction(this.onItemClick));
    e.disp.addEventListener(h.MOUSE_OVER, this.bindFunction(this.onMouseOverItem));
    if (!e.slotVO.isFree && !e.slotVO.isLocked) {
      e.disp.addEventListener(h.MOUSE_DOWN, this.bindFunction(this.onItemMouseDown));
    }
    switch (this._alignment) {
      case BasicBuildListComponent.ALIGN_HORIZONTAL:
        e.disp.x = (e.pos - this.currentIndex) * e.itemSlotSize;
        break;
      case BasicBuildListComponent.ALIGN_VERTICAL:
        e.disp.y = (e.pos - this.currentIndex) * e.itemSlotSize;
    }
    e.setIcons();
  };
  BasicBuildListComponent.prototype.onItemClick = function (e) {
    var t = e.target.bItem;
    if (t.isLocked) {
      this.onItemLockedClick(t);
    }
  };
  BasicBuildListComponent.prototype.onItemLockedClick = function (e) {};
  BasicBuildListComponent.prototype.onItemMouseUp = function (e) {
    this.updateAllPositions();
    if (this._selectedDragItem) {
      var t = this._selectedDragItem;
      if (this._selectedDragItem.disp.stage) {
        this._selectedDragItem.disp.stage.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
        this._selectedDragItem.disp.stage.removeEventListener(h.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
      }
      l.TweenMax.to(t.disp, 0.1, {
        alpha: 1,
        ease: s.Linear.easeIn
      });
      l.TweenMax.to(t.disp, 0.1, {
        scaleY: 1,
        scaleX: 1,
        ease: s.Linear.easeIn
      });
      switch (this._alignment) {
        case BasicBuildListComponent.ALIGN_HORIZONTAL:
          t.disp.x = Math.round(t.disp.x / t.itemSlotSize) * t.itemSlotSize;
          break;
        case BasicBuildListComponent.ALIGN_VERTICAL:
          t.disp.y = Math.round(t.disp.y / t.itemSlotSize) * t.itemSlotSize;
      }
      if (this._selectedDragItem.pos != this._selectedDragItem.oldPos) {
        this.selectedSlot = this._selectedDragItem.pos;
        this.requestMoveFromServer(this._selectedDragItem);
      }
      this._selectedDragItem = null;
    }
  };
  BasicBuildListComponent.prototype.updateAllPositions = function () {
    if (this._selectedDragItem) {
      l.TweenMax.killTweensOf(this._selectedDragItem);
    }
    var e = 0;
    for (var t = 0; t < this._itemMC.numChildren; t++) {
      var i = this._itemMC.getChildAt(t).bItem;
      i.disp.alpha = 1;
      i.disp.scaleY = 1;
      var n = i.pos >= this.currentIndex && i.pos < this.currentIndex + this.maxShowableItems;
      i.setVisible(n);
      if (n && i.pos < p.CastleModel.areaData.activeConstructionList.numConstructionSlots) {
        e++;
      }
      switch (this._alignment) {
        case BasicBuildListComponent.ALIGN_HORIZONTAL:
          i.disp.x = (i.pos - this.currentIndex) * i.itemSlotSize;
          break;
        case BasicBuildListComponent.ALIGN_VERTICAL:
          i.disp.y = (i.pos - this.currentIndex) * i.itemSlotSize;
      }
    }
    if (this._componentMC.mc_OneConstructingSlots) {
      this._componentMC.mc_OneConstructingSlots.visible = e == 1;
    }
    if (this._componentMC.mc_TwoConstructingSlots) {
      this._componentMC.mc_TwoConstructingSlots.visible = e == 2;
    }
  };
  BasicBuildListComponent.prototype.requestMoveFromServer = function (e) {};
  BasicBuildListComponent.prototype.onItemMouseDown = function (e) {
    if (this.isItemDraggable) {
      var t = e.target.bItem;
      this._itemMC.setChildIndex(t.disp, this._buildlist.useableSlots - 1);
      l.TweenMax.to(t.disp, 0.1, {
        alpha: 0.6,
        ease: s.Linear.easeIn
      });
      l.TweenMax.to(t.disp, 0.1, {
        scaleY: 1.1,
        scaleX: 1.1,
        ease: s.Linear.easeIn
      });
      this._selectedDragItem = t;
      this._selectedDragItem.oldPos = this._selectedDragItem.pos;
      this._selectedDragItem.disp.stage.addEventListener(h.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
      this._selectedDragItem.disp.stage.addEventListener(h.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
    }
  };
  Object.defineProperty(BasicBuildListComponent.prototype, "isItemDraggable", {
    get: function () {
      return !!this.slotsDraggable;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.onMouseOverItem = function (e) {
    if (!this.isItemDraggable) {
      this.updateAllPositions();
    }
    var t = e.target.bItem;
    t ||= e.target.parent.bItem;
    if (t.isLocked) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_CLICK);
    } else if (t.isFree) {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_ARROW);
    } else {
      this.layoutManager.customCursor.setCursorType(o.BasicCustomCursor.CURSOR_HAND);
    }
  };
  BasicBuildListComponent.prototype.onItemMouseMove = function (e) {
    var t = (this.maxShowableItems - 1) * this._selectedDragItem.itemSlotSize;
    var i = 0;
    var n = 0;
    var o = this._componentMC.getBounds(null);
    switch (this._alignment) {
      case BasicBuildListComponent.ALIGN_HORIZONTAL:
        i = a.int(this._componentMC.mouseX + o.x - (this._selectedDragItem.itemSlotSize + this._selectedDragItem.itemSpace) / 2);
        this._selectedDragItem.disp.x = Math.max(Math.min(i, t), 0);
        n = Math.round(this._selectedDragItem.disp.x / this._selectedDragItem.itemSlotSize) + this.currentIndex;
        break;
      case BasicBuildListComponent.ALIGN_VERTICAL:
        i = a.int(this._componentMC.mouseY + o.y - (this._selectedDragItem.itemSlotSize + this._selectedDragItem.itemSpace) / 2);
        this._selectedDragItem.disp.y = Math.max(Math.min(i, t), 0);
        n = Math.round(this._selectedDragItem.disp.y / this._selectedDragItem.itemSlotSize) + this.currentIndex;
    }
    if (this._selectedDragItem.pos != n) {
      this.switchItemPos(this._selectedDragItem, n);
    }
  };
  BasicBuildListComponent.prototype.getConstructionItemVOByPos = function (e) {
    for (var t = 0; t < this._itemMC.numChildren; t++) {
      var i = this._itemMC.getChildAt(t).bItem;
      if (i.slotVO.pos == e) {
        return i.slotVO;
      }
    }
  };
  BasicBuildListComponent.prototype.switchItemPos = function (e, t) {
    if (!this.getConstructionItemVOByPos(t).isLockedProductionSlot && !this.getConstructionItemVOByPos(t).isLocked && !this.additionalBlockForSwitchItemPos(e, t)) {
      var i;
      for (var n = 0; n < this._itemMC.numChildren; n++) {
        if (!(i = this._itemMC.getChildAt(n).bItem).isVisibleLocked && i.pos == t) {
          i.pos = e.pos;
          break;
        }
      }
      if (i) {
        switch (this._alignment) {
          case BasicBuildListComponent.ALIGN_HORIZONTAL:
            l.TweenMax.to(i.disp, 0.25, {
              x: (i.pos - this.currentIndex) * i.itemSlotSize,
              ease: r.Sine.easeInOut
            });
            break;
          case BasicBuildListComponent.ALIGN_VERTICAL:
            l.TweenMax.to(i.disp, 0.25, {
              y: (i.pos - this.currentIndex) * i.itemSlotSize,
              ease: r.Sine.easeInOut
            });
        }
        this._buildlist.switchSlots(e.pos, t);
        e.pos = t;
        i.setIcons();
        e.setIcons();
      }
    }
  };
  BasicBuildListComponent.prototype.additionalBlockForSwitchItemPos = function (e, t) {
    return false;
  };
  Object.defineProperty(BasicBuildListComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.clearItems = function () {
    if (this._selectedDragItem) {
      this._selectedDragItem.disp.stage.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
      this._selectedDragItem.disp.stage.removeEventListener(h.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
    }
    this._selectedDragItem = null;
    if (this._items != null) {
      for (var e = 0, t = this._items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.disp.stage.removeEventListener(h.MOUSE_UP, this.bindFunction(this.onItemMouseUp));
          i.disp.stage.removeEventListener(h.MOUSE_MOVE, this.bindFunction(this.onItemMouseMove));
          i.disp.removeEventListener(h.CLICK, this.bindFunction(this.onItemClick));
          i.disp.removeEventListener(h.MOUSE_DOWN, this.bindFunction(this.onItemMouseDown));
          i.disp.removeEventListener(h.MOUSE_OVER, this.bindFunction(this.onMouseOverItem));
          i.remove();
          this._itemMC.removeChild(i.disp);
        }
      }
    }
    this._items = [];
  };
  Object.defineProperty(BasicBuildListComponent.prototype, "controller", {
    get: function () {
      return u.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListComponent.prototype, "layoutManager", {
    get: function () {
      return C.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListComponent.prototype, "slotsDraggable", {
    get: function () {
      return this._slotsDraggable;
    },
    set: function (e) {
      this._slotsDraggable = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicBuildListComponent.prototype, "showProgressbar", {
    get: function () {
      return this._showProgressbar;
    },
    set: function (e) {
      this._showProgressbar = e;
      if (this._items != null) {
        for (var t = 0, i = this._items; t < i.length; t++) {
          var n = i[t];
          if (n !== undefined) {
            n.showProgressbar = e;
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicBuildListComponent.prototype.setCurrentIndex = function (e) {
    this.currentIndex += e;
    this.currentIndex = Math.max(0, Math.min(this.currentIndex, p.CastleModel.areaData.activeConstructionList.numOfSlots - this.maxShowableItems));
    this.updateAllPositions();
  };
  BasicBuildListComponent.__initialize_static_members = function () {
    BasicBuildListComponent.ALIGN_HORIZONTAL = 0;
    BasicBuildListComponent.ALIGN_VERTICAL = 1;
  };
  return BasicBuildListComponent;
}(d.CastleEventDispatcher);
exports.BasicBuildListComponent = g;
var C = require("./17.js");
g.__initialize_static_members();