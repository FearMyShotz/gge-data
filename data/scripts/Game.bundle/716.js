Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./100.js");
var l = require("./3.js");
var c = require("./57.js");
var u = require("./179.js");
var d = require("./4.js");
var p = require("./24.js");
var h = require("./40.js");
var g = require("./95.js");
var C = require("./47.js");
var _ = require("./59.js");
var m = require("./8.js");
var f = require("./340.js");
var O = require("./247.js");
var E = function (e) {
  function GeneralSelection(t, i) {
    var n = e.call(this, t) || this;
    n._items = [];
    n._selectedGeneral = null;
    n._canPlaceDivider = false;
    n._dividerClips = [];
    n._properties = i;
    m.ButtonHelper.initButtons([n.disp.btn_slider], f.ClickFeedBackHoverSliderButton, 1);
    var o = new C.SimpleScrollVO().initByParent(n.disp).addMouseWheelElements([n.disp]);
    var a = new _.DynamicSizeScrollStrategyVertical(false, n.disp.mc_content.mask.height, true);
    n._scrollComponent = new g.SimpleScrollComponent(o, a);
    n._scrollY = n.disp.mc_content.y;
    n._onSelectSignal = new c.Signal();
    return n;
  }
  n.__extends(GeneralSelection, e);
  GeneralSelection.prototype.init = function (e) {
    var t = this;
    s.MovieClipHelper.clearMovieClip(this.disp.mc_content);
    this._items.forEach(function (e) {
      return e.onHide();
    });
    this._items.forEach(function (e) {
      return e.onClickSignal.add(t.bindFunction(t.onClickGeneral));
    });
    this._items = [];
    for (var i = 0, n = e; i < n.length; i++) {
      var o = n[i];
      var a = new O.GeneralSelectionItem(o, this.disp.mc_content);
      this._items.push(a);
    }
    this.updateItemPositions();
    if (this._properties.disableMovingGenerals) {
      this._items.forEach(function (e) {
        return e.disableIfNotAvailable();
      });
    }
  };
  GeneralSelection.prototype.updateItemPositions = function () {
    var e = this;
    this._items = this._items.sort(GeneralSelection.sortGenerals);
    var t = this._items.filter(function (e) {
      return e.generalVO && e.generalVO.isImplemented && e.generalVO.isUnlocked;
    });
    var i = this._items.filter(function (e) {
      return e.generalVO && e.generalVO.isImplemented && !e.generalVO.isUnlocked;
    });
    var n = this._items.filter(function (e) {
      return e.generalVO && !e.generalVO.isImplemented;
    });
    var o = this._items.filter(function (e) {
      return !e.generalVO;
    });
    this._items = t.concat(i).concat(o);
    if (this._properties.showPreviewGenerals) {
      this._items = this._items.concat(n);
    } else {
      n.forEach(function (e) {
        return e.disp.visible = false;
      });
    }
    this._dividerClips.forEach(function (t) {
      return e.disp.mc_content.removeChild(t);
    });
    this._canPlaceDivider = false;
    this._dividerClips = [];
    var a = this._properties.padding;
    a = this.positionItems(t, a);
    a = this.positionDivider(i, a);
    a = this.positionItems(i, a);
    if (this._properties.showPreviewGenerals) {
      a = this.positionDividerLabel(n, a, "dialog_generals_overview_selectGeneral_comingSoon");
      a = this.positionItems(n, a);
    }
    a = this.positionDividerLabel(o, a, "dialog_generals_overview_selectGeneral_assignNobody");
    return (a = this.positionItems(o, a)) + this._properties.padding;
  };
  GeneralSelection.prototype.positionItems = function (e, t) {
    if (e.length == 0) {
      return t;
    }
    var i;
    this._canPlaceDivider = true;
    for (var n = 0; n < e.length; n++) {
      i = e[n];
      if (n != 0 && n % this._properties.itemsPerRow == 0) {
        t += this._properties.itemYOffset;
      }
      i.disp.y = t;
      i.disp.x = this._properties.itemXStart + n % this._properties.itemsPerRow * this._properties.itemXOffset;
    }
    return t + this._properties.itemYOffset;
  };
  GeneralSelection.prototype.positionDivider = function (e, t) {
    if (e.length > 0 && this._canPlaceDivider) {
      var i = new p.CastleGoodgameExternalClip(GeneralSelection.DIVIDER_CLASS_NAME, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(O.GeneralSelectionItem.CONTAINER_ASSET_NAME), null, 0, false);
      this.disp.mc_content.addChild(i);
      t = (t = i.y = t + this._properties.padding) + 2 + this._properties.padding;
      this._dividerClips.push(i);
    }
    return t;
  };
  GeneralSelection.prototype.positionDividerLabel = function (e, t, i) {
    var n = this;
    if (e.length > 0 && this._canPlaceDivider) {
      var s = new p.CastleGoodgameExternalClip(GeneralSelection.DIVIDER_LABEL_CLASS__NAME, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(O.GeneralSelectionItem.CONTAINER_ASSET_NAME), null, 0, false);
      this.disp.mc_content.addChild(s);
      t = (t = s.y = t + this._properties.padding) + 30 + this._properties.padding;
      s.doWhenLoaded(function (e) {
        var t = s.currentshownDisplayObject.txt_label;
        t.defaultCacheScale = 2;
        o.GoodgameTextFieldManager.getInstance().registerTextField(t, new l.LocalizedTextVO(i), new r.InternalGGSTextFieldConfigVO(true)).color = n._properties.textColor;
      });
      this._dividerClips.push(s);
    }
    return t;
  };
  GeneralSelection.prototype.onShow = function () {
    var t = this;
    e.prototype.onShow.call(this);
    var i = this.updateItemPositions();
    i = i * this.disp.mc_content.scaleY + this._properties.padding;
    this._items.forEach(function (e) {
      return e.onShow();
    });
    this._items.forEach(function (e) {
      return e.onClickSignal.add(t.bindFunction(t.onClickGeneral));
    });
    var n = Math.max(0, i - this.disp.mc_content.mask.height);
    this._scrollComponent.init(0, n, this._properties.itemYOffset, this._properties.itemYOffset);
    this._scrollComponent.scrollToValue(0);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    d.CastleModel.generalsData.addEventListener(u.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
  };
  GeneralSelection.prototype.onHide = function () {
    var t = this;
    e.prototype.onHide.call(this);
    this._items.forEach(function (e) {
      return e.onHide();
    });
    this._items.forEach(function (e) {
      return e.onClickSignal.add(t.bindFunction(t.onClickGeneral));
    });
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    d.CastleModel.generalsData.removeEventListener(u.GeneralsEvent.GENERALS_UPDATED, this.bindFunction(this.onGeneralsUpdated));
  };
  GeneralSelection.prototype.onGeneralsUpdated = function () {
    var e = this.updateItemPositions();
    e = e * this.disp.mc_content.scaleY + this._properties.padding;
    this.updateItemPositions();
    var t = Math.max(0, e - this.disp.mc_content.mask.height);
    var i = Math.min(this._scrollComponent.currentValue, t);
    this._scrollComponent.init(0, t, this._properties.itemYOffset, this._properties.itemYOffset);
    this._scrollComponent.scrollToValue(i);
  };
  GeneralSelection.prototype.onScroll = function () {
    this.disp.mc_content.y = this._scrollY - this._scrollComponent.currentValue;
  };
  GeneralSelection.prototype.onClickGeneral = function (e, t = true) {
    var i = this._selectedGeneral == e && this._properties.canDeselect ? null : e;
    if (this._selectedGeneral) {
      this._selectedGeneral.setSelected(false);
    }
    this._selectedGeneral = i;
    if (this._selectedGeneral) {
      this._selectedGeneral.setSelected(true);
    }
    if (t) {
      this._onSelectSignal.dispatch(this._selectedGeneral ? this._selectedGeneral.generalVO : null);
    }
  };
  Object.defineProperty(GeneralSelection.prototype, "selectedGeneralVO", {
    get: function () {
      if (this._selectedGeneral) {
        return this._selectedGeneral.generalVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralSelection.prototype, "onSelectSignal", {
    get: function () {
      return this._onSelectSignal;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSelection.prototype.selectGeneralVO = function (e, t = false) {
    var i = this._items.find(function (t) {
      return t.generalVO == e;
    });
    this.onClickGeneral(i, t);
  };
  GeneralSelection.prototype.selectIndex = function (e, t = false) {
    this.onClickGeneral(this._items[e], t);
  };
  GeneralSelection.sortGenerals = function (e, t) {
    if (e.generalVO) {
      if (t.generalVO) {
        if (t.generalVO.generalRarityID - e.generalVO.generalRarityID != 0) {
          return t.generalVO.generalRarityID - e.generalVO.generalRarityID;
        } else if (t.generalVO.currentLevel - e.generalVO.currentLevel != 0) {
          return t.generalVO.generalRarityID - e.generalVO.generalRarityID;
        } else {
          return e.generalVO.nameTextShort.localeCompare(t.generalVO.nameTextShort);
        }
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  };
  Object.defineProperty(GeneralSelection.prototype, "items", {
    get: function () {
      return this._items;
    },
    enumerable: true,
    configurable: true
  });
  GeneralSelection.DIVIDER_CLASS_NAME = "GeneralSelectionDivider";
  GeneralSelection.DIVIDER_LABEL_CLASS__NAME = "GeneralSelectionDividerLabel";
  return GeneralSelection;
}(h.CastleItemRenderer);
exports.GeneralSelection = E;