Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./57.js");
var s = require("./40.js");
var r = require("./47.js");
var l = require("./414.js");
var c = require("./8.js");
var u = function (e) {
  function AutoRecruitmentCopyListComponent(t, i) {
    var n = this;
    n._itemClass = p.AAutoRecruitmentCopyListItemVE;
    n._items = [];
    n._listData = [];
    n._onSelectionChanged = new a.Signal();
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this)._itemClass = i;
    n._selectAllButton = t.getChildByName("btn_selectAll");
    c.ButtonHelper.initBasicButton(n._selectAllButton);
    n._scrollComponent = new d.SimpleScrollComponent(new r.SimpleScrollVO(t.mc_scroller.btn_up, t.mc_scroller.btn_down, t.mc_scroller.btn_top, null, t.mc_scroller.mc_sliderLine, t.mc_scroller.btn_slider, [t.mc_scroller], [t.parent]), new l.SimpleScrollStrategyVertical());
    for (var o = 0; o < AutoRecruitmentCopyListComponent.ITEM_COUNT; ++o) {
      n.items.push(new i(t.getChildByName("mc_item" + o)));
    }
    return n;
  }
  n.__extends(AutoRecruitmentCopyListComponent, e);
  AutoRecruitmentCopyListComponent.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._scrollComponent.show();
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this.updateList();
  };
  AutoRecruitmentCopyListComponent.prototype.onHide = function () {
    this._scrollComponent.hide();
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    e.prototype.onHide.call(this);
  };
  AutoRecruitmentCopyListComponent.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onSelectionChanged.add(this.bindFunction(this.onItemSelectionChanged));
        }
      }
    }
  };
  AutoRecruitmentCopyListComponent.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    if (this.items != null) {
      for (var t = 0, i = this.items; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onSelectionChanged.remove(this.bindFunction(this.onItemSelectionChanged));
        }
      }
    }
  };
  AutoRecruitmentCopyListComponent.prototype.destroy = function () {
    this._scrollComponent.destroy();
    this._scrollComponent = null;
    if (this.items != null) {
      for (var e = 0, t = this.items; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._items = [];
  };
  AutoRecruitmentCopyListComponent.prototype.initWithNewData = function (e) {
    this.changeVisualSelectAllButton(false);
    this._listData = [];
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._listData.push(new h.AutoRecruitmentCopyListItemVO(n));
        }
      }
    }
    this._scrollComponent.init(0, Math.max(0, e.length - AutoRecruitmentCopyListComponent.ITEM_COUNT));
    this._scrollComponent.scrollToValue(0, false);
    this._scrollComponent.setVisibility(this._scrollComponent.maxValue > 0);
  };
  AutoRecruitmentCopyListComponent.prototype.updateList = function () {
    for (var e = 0; e < AutoRecruitmentCopyListComponent.ITEM_COUNT; ++e) {
      var t = e < this.items.length ? this.items[e] : null;
      var i = this._scrollComponent.currentValue + e;
      var n = this.listData && i < this.listData.length ? this.listData[i] : null;
      if (t) {
        t.setVisibility(n != null);
        if (n) {
          t.assignNewData(n);
        }
      }
    }
  };
  AutoRecruitmentCopyListComponent.prototype.setSelectAll = function (e) {
    this.changeVisualSelectAllButton(e);
    if (this.listData != null) {
      for (var t = 0, i = this.listData; t < i.length; t++) {
        var n = s = i[t];
        if (n !== undefined) {
          if (!n.hasError) {
            n.isSelected = e;
          }
        }
      }
    }
    if (this.items != null) {
      for (var o = 0, a = this.items; o < a.length; o++) {
        var s;
        s = a[o];
        if (s !== undefined) {
          s.updateSelectButton(true);
        }
      }
    }
    this.onSelectionChanged.dispatch();
  };
  AutoRecruitmentCopyListComponent.prototype.changeVisualSelectAllButton = function (e) {
    this._selectAllButton.gotoAndStop(Object(e ? 2 : 1));
    this._selectAllButton.toolTipText = e ? "dialog_copyQueue_deselectAll" : "dialog_copyQueue_selectAll";
  };
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "areAllItemsSelected", {
    get: function () {
      return this._selectAllButton.currentFrame == 1;
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyListComponent.prototype.getSelectedCastlesCount = function () {
    var e = 0;
    if (this.listData != null) {
      for (var t = 0, i = this.listData; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && !n.hasError && n.isSelected) {
          e++;
        }
      }
    }
    return e;
  };
  AutoRecruitmentCopyListComponent.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this._selectAllButton:
          this.setSelectAll(!this.areAllItemsSelected);
      }
    }
  };
  AutoRecruitmentCopyListComponent.prototype.onItemSelectionChanged = function () {
    var e = true;
    if (this.listData != null) {
      for (var t = 0, i = this.listData; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && !n.isSelected) {
          e = false;
          break;
        }
      }
    }
    this.changeVisualSelectAllButton(e);
    this.onSelectionChanged.dispatch();
  };
  AutoRecruitmentCopyListComponent.prototype.onScrollValueChanged = function () {
    this.updateList();
  };
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "itemClass", {
    get: function () {
      return this._itemClass;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AutoRecruitmentCopyListComponent.prototype, "listData", {
    get: function () {
      return this._listData;
    },
    enumerable: true,
    configurable: true
  });
  AutoRecruitmentCopyListComponent.__initialize_static_members = function () {
    AutoRecruitmentCopyListComponent.ITEM_COUNT = 8;
  };
  return AutoRecruitmentCopyListComponent;
}(s.CastleItemRenderer);
exports.AutoRecruitmentCopyListComponent = u;
var d = require("./95.js");
var p = require("./1027.js");
var h = require("./2960.js");
o.classImplementsInterfaces(u, "ICollectableRendererList");
u.__initialize_static_members();