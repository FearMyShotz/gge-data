Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./57.js");
var o = createjs.MouseEvent;
var a = function () {
  function CastleEquipableListComponent(e, t) {
    this._currentFilterIndex = CastleEquipableListComponent.INVALID_FILTER;
    this._currentScrollIndex = 0;
    this._disp = e;
    this.filters = t;
    if (this.filters != null) {
      for (var i = 0, o = this.filters; i < o.length; i++) {
        var a = o[i];
        if (a !== undefined) {
          a.clickHandler.inventory = this;
        }
      }
    }
    this._listUpdatedSignal = new n.Signal();
    this.initTabs();
  }
  Object.defineProperty(CastleEquipableListComponent.prototype, "listUpdatedSignal", {
    get: function () {
      return this._listUpdatedSignal;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipableListComponent.prototype.initTabs = function () {
    for (var e = 0; e < this.filters.length; e++) {
      var t = this.filters[e];
      var i = this.getTab(e);
      i.toolTipText = t.tabToolTip;
      h.ButtonHelper.enableButton(i, t.isTabActive);
    }
  };
  CastleEquipableListComponent.prototype.show = function () {
    this.initScrollList();
    this.currentFilterIndex = this._currentFilterIndex;
  };
  CastleEquipableListComponent.prototype.initScrollList = function () {
    this.disposeScrollList();
    this._itemScrollList = new s.ItemScrollList(this._disp);
    this._itemScrollList.scrollStep = CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE;
    this.addEventListener();
  };
  CastleEquipableListComponent.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this.removeEventListener();
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  CastleEquipableListComponent.prototype.addEventListener = function () {
    if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
      this.currentFilter.addListeners();
    }
    if (this.filters != null) {
      for (var e = 0, t = this.filters; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.listChanged = this.bindFunction(this.onFilterListChanged);
        }
      }
    }
    this._itemScrollList.addEventListener(r.ScrollItemEvent.CLICK, this.bindFunction(this.onItemClicked));
    this._itemScrollList.addEventListener(r.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
    this._itemScrollList.addEventListener(r.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onItemTouchDragStart));
    this._itemScrollList.addEventListener(r.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onItemTouchDragEnd));
    this._disp.addEventListener(o.CLICK, this.bindFunction(this.onClick));
    p.CastleBasicController.getInstance().addEventListener(u.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserLevelUp));
    p.CastleBasicController.getInstance().addEventListener(d.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onUserLevelUp));
  };
  CastleEquipableListComponent.prototype.onUserLevelUp = function (e) {
    this.initTabs();
  };
  CastleEquipableListComponent.prototype.onScroll = function (e) {
    var t = c.int(this._itemScrollList.currentStartIndex);
    this._currentScrollIndex = this.calcNewStartIndex(t);
  };
  CastleEquipableListComponent.prototype.calcNewStartIndex = function (e) {
    return e - e % CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE;
  };
  CastleEquipableListComponent.prototype.onClick = function (e) {
    if (!(e.target instanceof this.currentFilter.slotClass) && e.target != this._itemScrollList.componentDisp.btn_up && e.target != this._itemScrollList.componentDisp.btn_down) {
      this.currentClickHandler.handleInventoryClick(e);
    }
  };
  CastleEquipableListComponent.prototype.getTab = function (e) {
    return this._disp[CastleEquipableListComponent.BASE_TAB_NAME + e];
  };
  CastleEquipableListComponent.prototype.onItemClicked = function (e) {
    if (!e.originEvent || !l.currentBrowserInfo.isTouchEvent(e.originEvent)) {
      this.currentClickHandler.handleInventoryEntryClick(e);
    }
  };
  CastleEquipableListComponent.prototype.onItemTouchDragStart = function (e) {
    this.currentClickHandler.handleInventoryEntryTouchDragStart(e);
  };
  CastleEquipableListComponent.prototype.onItemTouchDragEnd = function (e) {
    this.currentClickHandler.handleInventoryEntryTouchDragEnd(e);
  };
  CastleEquipableListComponent.prototype.onFilterListChanged = function (e) {
    if (e == this.currentFilter) {
      this.updateScrollList();
      this.initTabs();
    }
  };
  CastleEquipableListComponent.prototype.updateScrollList = function () {
    this.initScrollList();
    this.currentFilter.fillScrollListData(this._itemScrollList);
    this.gotoCurrentScrollItem();
    for (var e = 0, t = this._itemScrollList.veList; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        h.ButtonHelper.initBasicButton(i.disp);
      }
    }
    this._listUpdatedSignal.dispatch();
  };
  Object.defineProperty(CastleEquipableListComponent.prototype, "currentFilterIndex", {
    get: function () {
      return this._currentFilterIndex;
    },
    set: function (e) {
      if (this._currentFilterIndex != e) {
        if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
          this.deactivateFilterAndTab(this._currentFilterIndex);
        }
        this._currentFilterIndex = e;
        if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
          this.activateFilterAndTab(this._currentFilterIndex);
          if (this._tabChangedCallback) {
            this._tabChangedCallback(this._currentFilterIndex);
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipableListComponent.prototype.activateFilterAndTab = function (e) {
    var t = this.filters[e];
    this.getTab(e).gotoAndStop(CastleEquipableListComponent.TAB_FRAME_ACTIVE);
    this._currentScrollIndex = 0;
    this.updateScrollList();
    t.addListeners();
    t.triggerLightUpdate();
  };
  CastleEquipableListComponent.prototype.deactivateFilterAndTab = function (e) {
    this.filters[e].removeListeners();
    var t = this.getTab(e);
    t.gotoAndStop(CastleEquipableListComponent.TAB_FRAME_INACTIVE);
    if (t.mc_icon) {
      t.mc_icon.stop();
    }
  };
  CastleEquipableListComponent.prototype.hide = function () {
    if (this.currentClickHandler) {
      this.currentClickHandler.hideDialog();
      this.currentClickHandler.dispose();
    }
    this.removeEventListener();
    if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
      this.deactivateFilterAndTab(this._currentFilterIndex);
    }
    this.disposeScrollList();
    this._currentFilterIndex = CastleEquipableListComponent.INVALID_FILTER;
  };
  CastleEquipableListComponent.prototype.removeEventListener = function () {
    if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
      this.currentFilter.removeListeners();
    }
    if (this.filters != null) {
      for (var e = 0, t = this.filters; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.listChanged = null;
        }
      }
    }
    if (this._itemScrollList) {
      this._itemScrollList.removeEventListener(r.ScrollItemEvent.CLICK, this.bindFunction(this.onItemClicked));
      this._itemScrollList.removeEventListener(r.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScroll));
      this._itemScrollList.removeEventListener(r.ScrollItemEvent.TOUCH_DRAG_START, this.bindFunction(this.onItemTouchDragStart));
      this._itemScrollList.removeEventListener(r.ScrollItemEvent.TOUCH_DRAG_END, this.bindFunction(this.onItemTouchDragEnd));
    }
    this._disp.removeEventListener(o.CLICK, this.bindFunction(this.onClick));
    p.CastleBasicController.getInstance().removeEventListener(u.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onUserLevelUp));
    p.CastleBasicController.getInstance().removeEventListener(d.CastleXPChangedEvent.CHANGE_USER_XP, this.bindFunction(this.onUserLevelUp));
  };
  Object.defineProperty(CastleEquipableListComponent.prototype, "currentFilter", {
    get: function () {
      if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
        return this.filters[this._currentFilterIndex];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipableListComponent.prototype, "currentClickHandler", {
    get: function () {
      if (this._currentFilterIndex != CastleEquipableListComponent.INVALID_FILTER) {
        return this.filters[this._currentFilterIndex].clickHandler;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipableListComponent.prototype, "tabChangedCallback", {
    set: function (e) {
      this._tabChangedCallback = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipableListComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipableListComponent.prototype.lockList = function () {
    this._itemScrollList.lockList();
    for (var e = 0; e < this.filters.length; e++) {
      var t = this.getTab(e);
      h.ButtonHelper.enableButton(t, false);
    }
    h.ButtonHelper.enableButton(this._itemScrollList.componentDisp.btn_up, false);
    h.ButtonHelper.enableButton(this._itemScrollList.componentDisp.btn_down, false);
  };
  CastleEquipableListComponent.prototype.unlockList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.unlockList();
      h.ButtonHelper.enableButton(this._itemScrollList.componentDisp.btn_up, true);
      h.ButtonHelper.enableButton(this._itemScrollList.componentDisp.btn_down, true);
    }
    this.initTabs();
  };
  CastleEquipableListComponent.prototype.forEachItemVO = function (e) {
    var t = e;
    if (this._itemScrollList && this._itemScrollList.voList) {
      this._itemScrollList.voList.forEach(t);
    }
  };
  CastleEquipableListComponent.prototype.forEachItemVE = function (e) {
    var t = e;
    if (this._itemScrollList && this._itemScrollList.voList) {
      this._itemScrollList.veList.forEach(t);
    }
  };
  CastleEquipableListComponent.prototype.forEachFilter = function (e) {
    var t = e;
    this.filters.forEach(t);
  };
  CastleEquipableListComponent.prototype.redraw = function () {
    this.gotoCurrentScrollItem();
  };
  CastleEquipableListComponent.prototype.gotoCurrentScrollItem = function () {
    if (this._itemScrollList.voList && this._currentScrollIndex >= this._itemScrollList.voList.length) {
      if (this._currentScrollIndex > 0 && this._itemScrollList.voList.length % CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE == 0) {
        this._currentScrollIndex -= CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE;
      } else {
        this._currentScrollIndex = 0;
      }
    }
    if (this._itemScrollList.veList) {
      this._itemScrollList.initList(this._currentScrollIndex, true);
    }
  };
  CastleEquipableListComponent.prototype.scrollToItem = function (e) {
    if (!this._itemScrollList || !this._itemScrollList.voList) {
      return null;
    }
    var t = -1;
    for (var i = 0; i < this._itemScrollList.voList.length; i++) {
      var n = this._itemScrollList.voList[i];
      if (this.currentFilter.matches(n, e)) {
        t = i;
        break;
      }
    }
    if (t > -1) {
      this._currentScrollIndex = this.calcNewStartIndex(t);
      this._itemScrollList.initList(this._currentScrollIndex);
      for (var o = 0, a = this._itemScrollList.veList; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined && this.currentFilter.matches(s.scrollItemVO, e)) {
          return s.disp;
        }
      }
    }
    return null;
  };
  CastleEquipableListComponent.prototype.update = function () {
    if (this.currentFilter) {
      this.currentFilter.triggerLightUpdate();
      this._listUpdatedSignal.dispatch();
    }
  };
  CastleEquipableListComponent.BASE_TAB_NAME = "tab";
  CastleEquipableListComponent.INVALID_FILTER = -1;
  CastleEquipableListComponent.ITEMS_VISIBLE_AT_ONCE = 14;
  CastleEquipableListComponent.TAB_FRAME_INACTIVE = 1;
  CastleEquipableListComponent.TAB_FRAME_ACTIVE = 2;
  return CastleEquipableListComponent;
}();
exports.CastleEquipableListComponent = a;
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./6.js");
var u = require("./32.js");
var d = require("./161.js");
var p = require("./15.js");
var h = require("./8.js");