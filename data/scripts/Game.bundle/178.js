Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.MouseEvent;
var o = createjs.Point;
var a = function () {
  function ComboboxComponent(e, t = "", i = ComboboxComponent.OPEN_DOWN, a = 1, s = -1, r = -1, l = 0, u = null, d = 5, C = false, _ = false, m = 15, f = "", O = 3, E = true, y = 0, b = 0, D = 0, I = 0) {
    this._numMaxItems = 0;
    this._itemDir = 0;
    this._closedHeight = 0;
    this._enabled = true;
    this._itemHeight = 0;
    this._itemWidth = 0;
    this._itemMarginX = 0;
    this.userClickItemSignal = new c.BooleanSignal();
    this.selectionChanged = false;
    this._selectedItem = 0;
    this._textVOClass = p.TextVO;
    this._scaleOpen = 0;
    this._heightOpen = 0;
    this._isOpen = false;
    this._additionalOpenHeight = 0;
    this._isScrollable = false;
    this._currentFirstIndex = 0;
    this._useSemiAutomaticDirection = false;
    this.replaceItemHolder = true;
    this._itemSpace = 0;
    this._previousSelectedItem = 0;
    this.scrollButtonDownOffsetY = 0;
    this.scrollButtonUpOffsetY = 0;
    this.scrollButtonsOffsetX = 0;
    this.additionScrollButtonHeight = 0;
    this._disp = e;
    this._realParent = this._disp.parent;
    this._originalPosition = new o(this._disp.x, this._disp.y);
    this._stagePosition = this._disp.parent.localToGlobal(this._originalPosition);
    this._itemMarginX = m;
    this._itemRenderer = u == null ? new ComboboxComponent.DEFAULT_ITEM_RENDERER_CLASS() : u;
    this._numMaxItems = l;
    this._defaultString = t;
    this._itemDir = i;
    this._closedHeight = a;
    if (this._disp.bg) {
      this._disp.bg.height = this._closedHeight;
    }
    this._isScrollable = C;
    this._useSemiAutomaticDirection = _;
    this._topElementName = f;
    this._itemSpace = O;
    this.replaceItemHolder = E;
    this.scrollButtonDownOffsetY = y;
    this.scrollButtonUpOffsetY = b;
    this.scrollButtonsOffsetX = D;
    this.additionScrollButtonHeight = I;
    this._itemHeight = s != -1 ? s : this._disp.bg ? h.int(this._disp.bg.height) : this._disp.height;
    this._itemWidth = r != -1 ? r : this._disp.bg ? h.int(this._disp.bg.width) : this._disp.width;
    if (this._disp.bg) {
      this._disp.bg.width = this._itemWidth;
    }
    if (this._disp.mc_hover) {
      this._disp.mc_hover.visible = false;
      this._disp.mc_hover.mouseEnabled = false;
    }
    if (this._disp.mc_down) {
      this._disp.mc_down.visible = false;
      this._disp.mc_down.mouseEnabled = false;
    }
    if (this._disp.mc_bg_open) {
      this._disp.mc_bg_open.visible = false;
      this._disp.mc_bg_open.mouseEnabled = false;
    }
    if (this._disp.bg_default) {
      this._disp.bg_default.visible = true;
      this._disp.bg_default.mouseChildren = false;
      this._disp.bg_default.mouseEnabled = false;
    }
    this._disp.item_Holder.x = (this._disp.bg ? this._disp.bg.x : this._disp.x) + this._itemMarginX;
    this._itemWidth -= h.int(this._itemMarginX * 2);
    this._disp.txt_selected.getTextFormat();
    this._additionalOpenHeight = d;
    this._disp.addEventListener(n.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.addEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.addEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.addEventListener(n.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.addEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
    g.ButtonHelper.initBasicButton(this._disp.btn_arrow);
    this._disp.mouseChildren = true;
    this._selectedItem = -1;
    this._itemData = [];
    this._disp.item_Holder.visible = false;
    this._disp.btn_arrow.gotoAndStop(2);
    this._disp.txt_selected.defaultCacheScale = 2;
    this.selected_text = this.textFieldManager.registerTextField(this._disp.txt_selected, new this._textVOClass(this._disp.txt_selected.text));
    if (this._disp.bg) {
      this._disp.bg.gotoAndStop(1);
      this._disp.bg.scaleY = 1;
      this._disp.bg.mouseChildren = false;
      this._disp.bg.actLikeButton = true;
    }
    this.selected_text.mouseEnabled = false;
    if (this._defaultString != "") {
      this.selected_text.textContentVO = new this._textVOClass(this._defaultString);
    }
  }
  Object.defineProperty(ComboboxComponent.prototype, "btn_down", {
    get: function () {
      return this._disp.item_Holder.getChildByName("btn_down");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "btn_up", {
    get: function () {
      return this._disp.item_Holder.getChildByName("btn_up");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "numPositionsInclusiveArrows", {
    get: function () {
      if (this._isScrollable) {
        if (this._itemData.length <= this._numMaxItems) {
          return this._itemData.length;
        } else {
          return this._numMaxItems - 1;
        }
      } else {
        return this._itemData.length;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "isButtonUpVisible", {
    get: function () {
      return !!this._isScrollable && this._currentFirstIndex > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "isButtonDownVisible", {
    get: function () {
      return !!this._isScrollable && this._itemData.length > this._numMaxItems && this._currentFirstIndex < this.itemData.length - this.numShowItems;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "numShowItems", {
    get: function () {
      if (this._isScrollable) {
        var e = this._numMaxItems;
        if (this._itemData.length > this._numMaxItems) {
          e -= 2;
        }
        return Math.min(e, this._itemData.length);
      }
      return this._itemData.length;
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.prototype.initArrowGrayOut = function (e) {
    g.ButtonHelper.enableButton(this._disp.btn_arrow, e);
  };
  ComboboxComponent.prototype.fillItems = function () {
    this.removeChilds();
    var e = this.getFinalItemDirection();
    var t = this._isScrollable && this._itemData.length > this._numMaxItems;
    if (t) {
      var i = e == ComboboxComponent.OPEN_DOWN ? new Library.CastleInterfaceElements.Btn_CastleUp() : new Library.CastleInterfaceElements.Btn_CastleDown();
      i.name = "btn_up";
      i.x = (this._disp.bg ? this._disp.bg : this._disp).width / 2 - ComboboxComponent.SCROLL_BTN_X_OFFSET + this.scrollButtonsOffsetX;
      i.y = i.height / 2 + this.scrollButtonUpOffsetY;
      this._disp.item_Holder.addChild(i);
      i.actLikeButton = true;
      g.ButtonHelper.enableButton(i, this.isButtonUpVisible);
    }
    var n = 0;
    var o = 0;
    if (t) {
      o = i.height + this.additionScrollButtonHeight;
    }
    if (this._itemData.length > 0) {
      var a;
      for (var s = this._currentFirstIndex; s < this.numShowItems + this._currentFirstIndex; s++) {
        a = this._itemRenderer.renderItem(this._itemData[s], s, this._itemWidth, this._itemHeight, this._textVOClass);
        this._disp.item_Holder.addChild(a);
        a.y = h.int((n * (this._itemHeight + this._itemSpace) + o) * e);
        n++;
      }
    }
    var r = this._closedHeight + this.numShowItems * (this._itemHeight + this._itemSpace) + this._additionalOpenHeight + o;
    if (t) {
      var l = e == ComboboxComponent.OPEN_DOWN ? new Library.CastleInterfaceElements.Btn_CastleDown() : new Library.CastleInterfaceElements.Btn_CastleUp();
      l.name = "btn_down";
      l.x = (this._disp.bg ? this._disp.bg : this._disp).width / 2 - ComboboxComponent.SCROLL_BTN_X_OFFSET + this.scrollButtonsOffsetX;
      l.y = (n * (this._itemHeight + this._itemSpace) + i.height / 2) * e + (e == ComboboxComponent.OPEN_DOWN ? o : 0) + this.scrollButtonDownOffsetY;
      this._disp.item_Holder.addChild(l);
      l.actLikeButton = true;
      g.ButtonHelper.enableButton(l, this.isButtonDownVisible);
      r += l.height + this.additionScrollButtonHeight;
    }
    this._scaleOpen = r / this._closedHeight;
    this._heightOpen = r;
  };
  ComboboxComponent.prototype.getFinalItemDirection = function () {
    if (!this._useSemiAutomaticDirection) {
      return this._itemDir;
    }
    var e = new o(this._disp.x, this._disp.y);
    var t = this._disp.parent.localToGlobal(e);
    var i = false;
    if (this.numPositionsInclusiveArrows * (this._itemHeight + this._itemSpace) * ComboboxComponent.OPEN_DOWN + t.y <= this._disp.stage.stageHeight && (i = true, this._itemDir == ComboboxComponent.OPEN_DOWN)) {
      return this._itemDir;
    } else if (this.numPositionsInclusiveArrows * (this._itemHeight + this._itemSpace) * ComboboxComponent.OPEN_UP + t.y >= 0 && (true, this._itemDir == ComboboxComponent.OPEN_UP)) {
      return this._itemDir;
    } else {
      return h.int(i ? ComboboxComponent.OPEN_DOWN : ComboboxComponent.OPEN_UP);
    }
  };
  ComboboxComponent.prototype.addItem = function (e) {
    this._itemData.push(e);
  };
  ComboboxComponent.prototype.removeChilds = function () {
    while (this._disp.item_Holder.numChildren > 0) {
      this._disp.item_Holder.removeChildAt(0);
    }
  };
  ComboboxComponent.prototype.selectItemIndex = function (e) {
    var t = this;
    if (!(this._itemData.length < 1)) {
      this.selectionChanged = this._selectedItem != e;
      this.checkTextFieldRegistratation();
      if (e >= this._itemData.length || e < 0) {
        this._selectedItem = -1;
        this.selected_text.textContentVO = new this._textVOClass(this._defaultString);
      } else {
        this._selectedItem = e;
        this.selected_text.textContentVO = new this._textVOClass(this._itemData[this._selectedItem].itemLabel);
      }
      this._itemData.forEach(function (e) {
        return e.selected = e == t._itemData[t._selectedItem];
      });
      this._disp.dispatchEvent(new l.BasicComboboxEvent(l.BasicComboboxEvent.COMBOBOXCHANGE));
      if (this._disp.cacheCanvas) {
        this._disp.updateCache();
      }
    }
  };
  ComboboxComponent.prototype.showItems = function () {
    this._disp.btn_arrow.gotoAndStop(1);
    this._currentFirstIndex = 0;
    this.fillItems();
    if (this._disp.bg) {
      this._disp.bg.height = this._heightOpen;
    }
    if (this._disp.mc_bg_open) {
      this._disp.mc_bg_open.visible = true;
    }
    if (this.getFinalItemDirection() == ComboboxComponent.OPEN_UP) {
      if (this._disp.bg) {
        this._disp.bg.y = -this._disp.bg.height + this._closedHeight;
      }
      if (this._topElementName != "") {
        this._disp.getChildByName(this._topElementName).y = this._disp.bg.y;
      }
      if (this.replaceItemHolder) {
        this._disp.item_Holder.y = -(this._itemHeight + this._itemSpace);
      }
    } else if (this.replaceItemHolder) {
      this._disp.item_Holder.y = this._closedHeight + this._itemSpace;
    }
    this._isOpen = true;
    this._disp.item_Holder.visible = true;
    if (this.disp && this.disp.parent) {
      this.disp.parent.setChildIndex(this.disp, this.disp.parent.numChildren - 1);
    }
    s.CastleLayoutManager.getInstance().uiStage.addEventListener(n.CLICK, this.bindFunction(this.onClick));
    this._disp.dispatchEvent(new l.BasicComboboxEvent(l.BasicComboboxEvent.COMBOBOXSELECT, 1));
    C.CastleMovieClipHelper.uncacheSafe(this._disp);
  };
  ComboboxComponent.prototype.onClick = function (e) {
    if (!this.enabled || !d.instanceOfClass(e.target, "Btn_CastleDown") && !d.instanceOfClass(e.target, "Btn_CastleUp") && e.target != this.disp && e.target.parent != this.disp && !!this.isOpen) {
      this.hideItems();
    }
  };
  ComboboxComponent.prototype.checkTextFieldRegistratation = function () {
    if (!this.textFieldManager.isTextFieldRegistered(this._disp.txt_selected)) {
      this.selected_text = this.textFieldManager.registerTextField(this._disp.txt_selected, new this._textVOClass(""));
    }
  };
  Object.defineProperty(ComboboxComponent.prototype, "isOpen", {
    get: function () {
      return this._isOpen;
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.prototype.hideItems = function () {
    this._isOpen = false;
    this._disp.btn_arrow.gotoAndStop(2);
    if (this._disp.bg) {
      this._disp.bg.height = this._closedHeight;
      this._disp.bg.y = 0;
      if (this._topElementName != "") {
        this._disp.getChildByName(this._topElementName).y = this._disp.bg.y;
      }
    }
    if (this._disp.mc_bg_open) {
      this._disp.mc_bg_open.visible = false;
    }
    this._disp.item_Holder.visible = false;
    this._disp.dispatchEvent(new l.BasicComboboxEvent(l.BasicComboboxEvent.COMBOBOXSELECT, 0));
    s.CastleLayoutManager.getInstance().uiStage.removeEventListener(n.CLICK, this.bindFunction(this.onClick));
  };
  ComboboxComponent.prototype.onMouseUp = function (e) {
    switch (e.target) {
      case this._disp.bg:
      case this._disp.btn_arrow:
        if (!this._disp.btn_arrow.enabled) {
          return;
        }
        this.onClickArrow();
        break;
      case this.btn_up:
        if (!g.ButtonHelper.isButtonEnabled(e.target)) {
          return;
        }
        this._currentFirstIndex = this._currentFirstIndex - 1;
        this.fillItems();
        return;
      case this.btn_down:
        if (!g.ButtonHelper.isButtonEnabled(e.target)) {
          return;
        }
        this._currentFirstIndex = this._currentFirstIndex + 1;
        this.fillItems();
        return;
    }
    if (e.target instanceof this._itemRenderer.itemMCClass) {
      if (this.isItemEnabled(e.target)) {
        this._previousSelectedItem = this._selectedItem;
        this.selectItemIndex(e.target.id);
        this.dispatchUserClickItem();
        this.hideItems();
      }
    } else {
      if (this._disp.mc_down) {
        this._disp.mc_down.visible = false;
      }
      if (e.target != this._disp.bg && e.target != this._disp.btn_arrow) {
        this.onClickArrow();
      }
    }
  };
  ComboboxComponent.prototype.onMouseDown = function (e) {
    if (!(e.target instanceof this._itemRenderer.itemMCClass)) {
      if (this._disp.mc_down) {
        this._disp.mc_down.visible = true;
      }
    }
  };
  ComboboxComponent.prototype.dispatchUserClickItem = function () {
    this.userClickItemSignal.signal(this.selectionChanged);
  };
  ComboboxComponent.prototype.onMouseOut = function (e) {
    if (e.target instanceof this._itemRenderer.itemMCClass) {
      if (this.isItemEnabled(e.target) && e.target.bg && this._disp.bg) {
        e.target.bg.gotoAndStop(1);
      }
    } else {
      if (this._disp.mc_hover) {
        this._disp.mc_hover.visible = false;
      }
      if (this._disp.mc_down) {
        this._disp.mc_down.visible = false;
      }
    }
  };
  ComboboxComponent.prototype.onMouseOver = function (e) {
    if (e.target instanceof this._itemRenderer.itemMCClass) {
      if (this.isItemEnabled(e.target) && e.target.bg && this._disp.bg) {
        e.target.bg.gotoAndStop(2);
      }
    } else if (this._disp.mc_hover) {
      this._disp.mc_hover.visible = true;
    }
  };
  ComboboxComponent.prototype.isItemEnabled = function (e) {
    var t = h.int(e.id);
    return this._itemData[t].enabled;
  };
  ComboboxComponent.prototype.clearItems = function () {
    this.hideItems();
    if (this._defaultString != "") {
      this.selected_text.textContentVO = new this._textVOClass(this._defaultString);
    }
    this._itemData = [];
    this._selectedItem = -1;
    this.fillItems();
  };
  ComboboxComponent.prototype.dispose = function () {
    if (this._disp) {
      this._disp.removeEventListener(n.MOUSE_UP, this.bindFunction(this.onMouseUp));
      this._disp.removeEventListener(n.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this._disp.removeEventListener(n.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this._disp.removeEventListener(n.MOUSE_WHEEL, this.bindFunction(this.onMouseWheel));
      this._disp.removeEventListener(n.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    }
    this.removeChilds();
    this.textFieldManager.unregisterTextFieldByReference(this.selected_text);
  };
  ComboboxComponent.prototype.onClickArrow = function () {
    if (this.enabled) {
      if (this._isOpen) {
        this.hideItems();
      } else {
        this.showItems();
      }
    }
  };
  Object.defineProperty(ComboboxComponent.prototype, "selectedId", {
    get: function () {
      return this._selectedItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "selectedData", {
    get: function () {
      if (this._selectedItem == -1) {
        return null;
      } else {
        return this._itemData[this._selectedItem].data;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "selectedLabel", {
    get: function () {
      if (this._selectedItem == -1) {
        return "";
      } else {
        return this._itemData[this._selectedItem].itemLabel;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "numItems", {
    get: function () {
      return this._itemData.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "itemData", {
    get: function () {
      return this._itemData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ComboboxComponent.prototype, "enabled", {
    get: function () {
      return this._enabled;
    },
    set: function (e) {
      this._enabled = e;
      if (this.enabled) {
        this._disp.useFilters(r.BitmapFilterHelper.NO_FILTER);
      } else {
        this._disp.useFilters(r.BitmapFilterHelper.FILTER_COLOR_MATRIX);
      }
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.prototype.onMouseWheel = function (e) {
    var t = e.delta * this.getFinalItemDirection();
    if (t < 0 && this.isButtonUpVisible) {
      this._currentFirstIndex = this._currentFirstIndex - 1;
      this.fillItems();
    } else if (t > 0 && this.isButtonDownVisible) {
      this._currentFirstIndex = this._currentFirstIndex + 1;
      this.fillItems();
    }
    s.CastleLayoutManager.getInstance().forceHitTest();
  };
  ComboboxComponent.prototype.setTextfieldAutoFit = function (e) {
    this.selected_text.autoFitToBounds = e;
  };
  Object.defineProperty(ComboboxComponent.prototype, "textFieldManager", {
    get: function () {
      return u.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.prototype.changeItemAtIndex = function (e, t) {
    if (!(t >= this._itemData.length)) {
      this.itemData[t] = e;
    }
  };
  ComboboxComponent.prototype.manualShowItems = function () {
    this.showItems();
  };
  ComboboxComponent.prototype.selectIndexWithoutEvent = function (e) {
    if (!(this._itemData.length < 1)) {
      if (e > this._itemData.length || e < 0) {
        this._selectedItem = -1;
        if (this.selected_text.textContentVO) {
          this.selected_text.textContentVO.stringValue = this._defaultString;
        }
      } else {
        this._selectedItem = e;
        if (this.selected_text.textContentVO) {
          this.selected_text.textContentVO.stringValue = this._itemData[this._selectedItem].itemLabel;
        }
      }
      if (this._disp.cacheCanvas) {
        this._disp.updateCache();
      }
    }
  };
  Object.defineProperty(ComboboxComponent.prototype, "previousSelectedItem", {
    get: function () {
      return this._previousSelectedItem;
    },
    set: function (e) {
      this._previousSelectedItem = e;
    },
    enumerable: true,
    configurable: true
  });
  ComboboxComponent.__initialize_static_members = function () {
    ComboboxComponent.DEFAULT_ITEM_RENDERER_CLASS = _.ComboboxItemRenderer;
  };
  ComboboxComponent.SCROLL_BTN_X_OFFSET = 8;
  ComboboxComponent.OPEN_UP = -1;
  ComboboxComponent.OPEN_DOWN = 1;
  return ComboboxComponent;
}();
exports.ComboboxComponent = a;
var s = require("./17.js");
var r = require("./68.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./1.js");
var p = require("./3.js");
var h = require("./6.js");
var g = require("./8.js");
var C = require("./41.js");
var _ = require("./191.js");
a.__initialize_static_members();