Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./100.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./49.js");
var c = require("./3.js");
var u = require("./57.js");
var d = require("./14.js");
var p = require("./40.js");
var h = require("./95.js");
var g = require("./47.js");
var C = require("./59.js");
var _ = require("./285.js");
var m = require("./413.js");
var f = require("./8.js");
var O = function (e) {
  function ModernStartscreenDropdownComponent(t, i = false) {
    var n = e.call(this, t) || this;
    n._showSelectedOnTop = i;
    f.ButtonHelper.initButtons([n.disp.mc_selection], l.BasicButton, 1);
    f.ButtonHelper.initButtons([n.disp.mc_dropdown.mc_slider.btn_slider], m.ClickFeedBackSliderButton, 1);
    n._itxt_selected = d.CastleComponent.textFieldManager.registerTextField(n.disp.mc_selection.txt_selected, new c.TextVO(""));
    n._itxt_search = d.CastleComponent.textFieldManager.registerTextField(n.disp.mc_dropdown.mc_search.txt_search, new c.TextVO(""));
    n._itxt_selected.autoFitToBounds = true;
    n._inputBehaviour = new _.HighlightAndClearInputTextBehaviour(n.disp.mc_dropdown.mc_search, n._itxt_search, false);
    n._scrollComponent = new h.SimpleScrollComponent(new g.SimpleScrollVO().initByParent(n.disp.mc_dropdown.mc_slider).addMouseWheelElements([n.disp.mc_dropdown]), new C.DynamicSizeScrollStrategyVertical(false, n.disp.mc_dropdown.mc_list.mask.height, true));
    n._onSelectSignal = new u.Signal();
    n._onOpenSignal = new u.Signal();
    n._itemMCClass = r.getDefinitionByName("ModernStartscreenComboboxItem");
    n._listStartY = n.disp.mc_dropdown.mc_list.y;
    n.disp.mc_dropdown.visible = false;
    return n;
  }
  n.__extends(ModernStartscreenDropdownComponent, e);
  ModernStartscreenDropdownComponent.prototype.init = function (e, t = -1) {
    this._itemVOs = e;
    this._separatorPosition = t;
  };
  ModernStartscreenDropdownComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._inputBehaviour.onShow();
    this._itxt_search.change.add(this.bindFunction(this.onSearch));
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
  };
  ModernStartscreenDropdownComponent.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._inputBehaviour.onHide();
    this._itxt_search.change.remove(this.bindFunction(this.onSearch));
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    this._onOpenSignal.removeAll();
    this._onSelectSignal.removeAll();
  };
  ModernStartscreenDropdownComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.disp.mc_selection:
        this.toggleDropdown();
    }
    if (t.target instanceof this._itemMCClass) {
      this.selectedItem = t.target.data;
    }
  };
  ModernStartscreenDropdownComponent.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (t.target == this.disp.mc_selection) {
      this.disp.mc_selection.gotoAndStop(2);
    }
    if (t.target instanceof this._itemMCClass) {
      t.target.bg.visible = true;
    }
  };
  ModernStartscreenDropdownComponent.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (t.target == this.disp.mc_selection) {
      this.disp.mc_selection.gotoAndStop(this.isOpen ? 2 : 1);
    }
    if (t.target instanceof this._itemMCClass) {
      t.target.bg.visible = false;
    }
  };
  ModernStartscreenDropdownComponent.prototype.onSearch = function (e = null) {
    this.updateList();
  };
  ModernStartscreenDropdownComponent.prototype.onScroll = function () {
    this.disp.mc_dropdown.mc_list.y = this._listStartY - this._scrollComponent.currentValue;
  };
  ModernStartscreenDropdownComponent.prototype.toggleDropdown = function () {
    if (this.disp.mc_dropdown.visible = !this.disp.mc_dropdown.visible) {
      this.updateList();
      this._onOpenSignal.dispatch(true);
    } else {
      this._itxt_search.clearText();
      this._onOpenSignal.dispatch(false);
    }
  };
  ModernStartscreenDropdownComponent.prototype.updateList = function () {
    o.MovieClipHelper.clearMovieClip(this.disp.mc_dropdown.mc_list.mc_contentHolder);
    var e = this._itxt_search.text;
    var t = this._itemVOs.filter(function (t) {
      return e == "" || t.displayName.toLowerCase().indexOf(e.toLowerCase()) > -1;
    });
    if (this._showSelectedOnTop && !e && t.indexOf(this.selectedItem) > -1) {
      t.splice(t.indexOf(this.selectedItem), 1);
      t.unshift(this.selectedItem);
    }
    var i = 0;
    var n = 0;
    for (var s = 0, r = t; s < r.length; s++) {
      var l = r[s];
      var u = new this._itemMCClass();
      d.CastleComponent.textFieldManager.registerTextField(u.txt_name, new c.TextVO(l.displayName), new a.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
      u.mouseChildren = false;
      u.bg.visible = false;
      u.actLikeButton = true;
      u.data = l;
      u.y = i;
      i += u.height;
      this.disp.mc_dropdown.mc_list.mc_contentHolder.addChild(u);
      if (!e && n == this._separatorPosition) {
        this.disp.mc_dropdown.mc_list.mc_separatorLine.y = i;
      }
      n++;
    }
    var p = Math.max(0, i - this.disp.mc_dropdown.mc_list.mask.height);
    this._scrollComponent.init(0, p, 42, 42);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.setVisibility(p > 0);
    this.disp.mc_dropdown.mc_list.mc_separatorLine.visible = !e && this._separatorPosition > -1;
  };
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "selectedItem", {
    get: function () {
      return this._selectedItem;
    },
    set: function (e) {
      this._selectedItem = e;
      this._itxt_selected.textContentVO.stringValue = e.displayName;
      this.closeDropdown();
      this.onSelectSignal.dispatch(this.selectedItem);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "itemVOs", {
    get: function () {
      return this._itemVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "onSelectSignal", {
    get: function () {
      return this._onSelectSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "onOpenSignal", {
    get: function () {
      return this._onOpenSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenDropdownComponent.prototype, "isOpen", {
    get: function () {
      return this.disp.mc_dropdown.visible;
    },
    enumerable: true,
    configurable: true
  });
  ModernStartscreenDropdownComponent.prototype.closeDropdown = function () {
    if (this.isOpen) {
      this.toggleDropdown();
    }
    this.disp.mc_selection.gotoAndStop(1);
  };
  return ModernStartscreenDropdownComponent;
}(p.CastleItemRenderer);
exports.ModernStartscreenDropdownComponent = O;
s.classImplementsInterfaces(O, "ICollectableRendererList");