Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./57.js");
var c = require("./123.js");
var u = require("./40.js");
var d = require("./95.js");
var p = require("./47.js");
var h = require("./189.js");
var g = require("./8.js");
var C = require("./167.js");
var _ = require("./244.js");
var m = function (e) {
  function DecorationForgeSelectionList(t, i, n) {
    var o = this;
    o._itemVEs = [];
    o._itemVOs = [];
    o._numberOfItems = 1;
    o._onSelectionChanged = new l.Signal();
    CONSTRUCTOR_HACK;
    (o = e.call(this, t) || this)._veClass = i;
    o._numberOfItems = n;
    o.init();
    return o;
  }
  n.__extends(DecorationForgeSelectionList, e);
  DecorationForgeSelectionList.prototype.init = function () {
    this._scrollComponent = new d.SimpleScrollComponent(new p.SimpleScrollVO().initByParent(this.disp).addMouseWheelElements([this.disp]), new h.SimpleScrollStrategyHorizontal());
    this._itemVEs = [];
    for (var e = 0; e < this._numberOfItems; ++e) {
      this._itemVEs.push(new this._veClass(this.getItemMc(e)));
    }
  };
  DecorationForgeSelectionList.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    if (this._itemVEs != null) {
      for (var t = 0, i = this._itemVEs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onShow();
        }
      }
    }
    this._scrollComponent.show();
  };
  DecorationForgeSelectionList.prototype.onHide = function () {
    if (this._itemVEs != null) {
      for (var t = 0, i = this._itemVEs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onHide();
        }
      }
    }
    this._scrollComponent.hide();
    e.prototype.onHide.call(this);
  };
  DecorationForgeSelectionList.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    if (this._itemVEs != null) {
      for (var t = 0, i = this._itemVEs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onClicked.add(this.bindFunction(this.onItemClicked));
        }
      }
    }
  };
  DecorationForgeSelectionList.prototype.removeEventListener = function () {
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    if (this._itemVEs != null) {
      for (var t = 0, i = this._itemVEs; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onClicked.remove(this.bindFunction(this.onItemClicked));
        }
      }
    }
    e.prototype.removeEventListener.call(this);
  };
  DecorationForgeSelectionList.prototype.updateWithNewData = function (e) {
    this._itemVOs = e;
    var t = r.int(e ? a.MathBase.max(0, e.length - this._numberOfItems) : 0);
    this._scrollComponent.init(0, t);
    this.update();
    this.scrollToSelection();
  };
  DecorationForgeSelectionList.prototype.update = function () {
    for (var e = 0; e < this._numberOfItems; ++e) {
      var t = e + this._scrollComponent.currentValue;
      var i = this._itemVEs[e];
      if (this._itemVOs && t < this._itemVOs.length) {
        i.updateWithNewData(this._itemVOs[t]);
        if (E.instanceOfClass(i, "DecorationForgeSelectSourceAndCatalystDialogListItemSourceVE") && this.disp["btn_buy" + e]) {
          g.ButtonHelper.initBasicButton(this.disp["btn_buy" + e]);
          this.disp["btn_buy" + e].visible = i.showBuyButton;
        }
      } else {
        i.updateWithNewData(null);
        if (this.disp["btn_buy" + e]) {
          this.disp["btn_buy" + e].visible = false;
        }
      }
    }
  };
  DecorationForgeSelectionList.prototype.onClick = function (e) {
    if (e.target.name.indexOf("btn_buy") > -1) {
      var t = this._itemVEs[parseInt(e.target.name.replace("btn_buy", ""))].buyPackageVO;
      if (t) {
        var i = new _.MerchantScrollItemVO();
        i.eventPackageVO = t;
        i.specialEventVO = null;
        i.buyType = r.int(s.PackageConst.BUY_TYPE_FUSION);
        i.buyTypeId = r.int(c.ClientConstPackages.FUSION_SHOP_ID_HARD);
        var n = new C.CastleGenericBuyDialogProperties();
        n.parseDataFromScrollItem(i);
        f.CastleComponent.dialogHandler.registerDefaultDialogs(O.ModernPackageShopBuyDialog, n);
      }
    }
  };
  DecorationForgeSelectionList.prototype.scrollToSelection = function () {
    var e = this.getIndexOfSelectedItemVO();
    this._scrollComponent.scrollToValue(a.MathBase.max(0, e - this._numberOfItems + Math.ceil(this._numberOfItems / 2)));
  };
  DecorationForgeSelectionList.prototype.getItemMc = function (e) {
    return this.disp.getChildByName("mc_item" + e);
  };
  DecorationForgeSelectionList.prototype.getSelectedItemVO = function () {
    if (this._itemVOs != null) {
      for (var e = 0, t = this._itemVOs; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i.isSelected) {
          return i;
        }
      }
    }
    return null;
  };
  DecorationForgeSelectionList.prototype.getIndexOfSelectedItemVO = function () {
    var e = this.getSelectedItemVO();
    if (e) {
      for (var t = 0; t < this._itemVOs.length; ++t) {
        if (this.itemVOs[t] == e) {
          return t;
        }
      }
    }
    return -1;
  };
  DecorationForgeSelectionList.prototype.onScroll = function () {
    this.update();
  };
  DecorationForgeSelectionList.prototype.onItemClicked = function (e) {
    var t = e.itemVO.isSelected;
    if (this._itemVOs != null) {
      for (var i = 0, n = this._itemVOs; i < n.length; i++) {
        s = n[i];
        if (s !== undefined) {
          s.isSelected = false;
        }
      }
    }
    if (this._itemVEs != null) {
      for (var o = 0, a = this._itemVEs; o < a.length; o++) {
        var s;
        s = a[o];
        if (s !== undefined) {
          s.updateSelection();
        }
      }
    }
    e.itemVO.isSelected = !t;
    e.updateSelection();
    this._onSelectionChanged.dispatch();
  };
  Object.defineProperty(DecorationForgeSelectionList.prototype, "itemVEs", {
    get: function () {
      return this._itemVEs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectionList.prototype, "itemVOs", {
    get: function () {
      return this._itemVOs;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DecorationForgeSelectionList.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  return DecorationForgeSelectionList;
}(u.CastleItemRenderer);
exports.DecorationForgeSelectionList = m;
o.classImplementsInterfaces(m, "ICollectableRendererList");
var f = require("./14.js");
var O = require("./206.js");
var E = require("./1.js");