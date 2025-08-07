Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./16.js");
var d = require("./146.js");
var p = require("./21.js");
var h = require("./12.js");
var g = require("./45.js");
var C = require("./74.js");
var _ = require("./31.js");
var m = require("./19.js");
var f = require("./4.js");
var O = require("./27.js");
var E = require("./24.js");
var y = require("./163.js");
var b = require("./901.js");
var D = require("./20.js");
var I = require("./349.js");
var T = require("./419.js");
var v = require("./420.js");
var S = require("./82.js");
var A = require("./47.js");
var L = require("./59.js");
var P = require("./285.js");
var M = require("./8.js");
var R = require("./25.js");
var V = require("./66.js");
var x = require("./764.js");
var w = require("./3799.js");
var B = require("./3802.js");
var F = createjs.Point;
var N = require("./108.js");
var k = function (e) {
  function AModernFilterablePackageShopDialogSublayer(t, i) {
    var n = e.call(this, t) || this;
    n._currentActiveRelationFilters = [];
    n._filterItems = [];
    n._filterPanelVisible = false;
    n._assetName = i;
    n.init();
    return n;
  }
  n.__extends(AModernFilterablePackageShopDialogSublayer, e);
  AModernFilterablePackageShopDialogSublayer.prototype.init = function () {
    if (this._assetName) {
      this._listComponent = new w.InfiniteScrollPackageShopList(this.dialogDisp.mc_itemList, this._assetName);
      this.subLayerDisp.mc_empty.visible = false;
      this.subLayerDisp.mc_filterMenu.visible = false;
      this.subLayerDisp.mc_timeCurrency.mc_time.mouseChildren = false;
      this.subLayerDisp.mc_timeCurrency.mc_c2.btn_add.toolTipText = "add_Gold";
      this.subLayerDisp.btn_filter_active.visible = false;
      this.subLayerDisp.btn_filter.toolTipText = "filters";
      this.subLayerDisp.btn_filter_active.toolTipText = "filters";
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_empty.txt_empty, new r.LocalizedTextVO("merchants_filter_empty"));
      this.textFieldManager.registerTextField(this.subLayerDisp.mc_filterMenu.btn_reset.txt_label, new r.LocalizedTextVO("equipmentFilter_reset"));
      M.ButtonHelper.initButtons([this.subLayerDisp.mc_timeCurrency.mc_c2.btn_add, this.subLayerDisp.btn_filter, this.subLayerDisp.btn_filter_active, this.subLayerDisp.mc_filterMenu.btn_reset], D.ClickFeedbackButtonHover);
      this._castleSelector = new T.SimpleComboboxComponent(this.subLayerDisp.castleSelector, new v.SimpleComboboxComponentConfig(-2, 1.025));
      this._castleSelector.disp.visible = false;
      this._itxt_search = this.textFieldManager.registerTextField(this.dialogDisp.txt_search, new l.TextVO("search"));
      this._itxt_search.selectable = true;
      this._inputBehaviourSearch = new P.HighlightAndClearInputTextBehaviour(this.dialogDisp.mc_search, this._itxt_search, true);
      this.subLayerDisp.mc_filterMenu.addChild(this.subLayerDisp.mc_filterMenu.mc_slider);
      this._filterList = new S.ModernSliderScrollComponent(new A.SimpleScrollVO().initByParent(this.subLayerDisp.mc_filterMenu.mc_slider).addMouseWheelElements([this.subLayerDisp.mc_filterMenu]), new L.DynamicSizeScrollStrategyVertical(true, this.subLayerDisp.mc_filterMenu.mc_list.mask.height));
      this._filterStartPosY = this.subLayerDisp.mc_filterMenu.mc_list.y;
      this._relationFilterByCurrency = new Map();
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.initTimeAndCurrency = function () {
    this.subLayerDisp.mc_timeCurrency.mc_time.visible = this.getRemainingTime() > -1;
    this.subLayerDisp.mc_timeCurrency.mc_currency.visible = this.getCurrencyType() && this.getCurrencyType().type != h.CollectableEnum.C2;
    this.subLayerDisp.mc_timeCurrency.mc_c2.visible = this.displayC2() || this.getCurrencyType() && this.getCurrencyType().type == h.CollectableEnum.C2;
    var e = new y.LayoutMargin(0, 0, 5, 5);
    var t = [];
    if (this.subLayerDisp.mc_timeCurrency.deco_left) {
      t.push(new I.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.deco_left, e));
    }
    if (this.subLayerDisp.mc_timeCurrency.mc_time.visible) {
      t.push(new I.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.mc_time, e));
    }
    if (this.subLayerDisp.mc_timeCurrency.mc_currency.visible) {
      t.push(new I.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.mc_currency, e));
    }
    if (this.subLayerDisp.mc_timeCurrency.mc_c2.visible) {
      t.push(new I.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.mc_c2, e));
    }
    if (this.subLayerDisp.mc_timeCurrency.deco_right) {
      t.push(new I.MovieClipLayoutable(this.subLayerDisp.mc_timeCurrency.deco_right, e));
    }
    new b.SimpleLayoutStrategyHorizontal(b.SimpleLayoutStrategyHorizontal.ALIGNMENT_CENTER).apply(t, this.subLayerDisp.mc_timeCurrency.getBounds());
  };
  AModernFilterablePackageShopDialogSublayer.prototype.show = function (t) {
    this._currencyType = t[0];
    this._currentActiveRelationFilters = this._relationFilterByCurrency.get(this._currencyType) || [];
    e.prototype.show.call(this, t);
    if (this.getRemainingTime() > -1) {
      f.CastleModel.timerData.addEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    }
    this.updateCastleSelector();
    this.initTimeAndCurrency();
    this.updateFilterPanelVisibility();
    this.subLayerDisp.btn_filter_active.visible = this._currentActiveRelationFilters.length > 0;
    this._castleSelector.onShow();
    this._castleSelector.onSelectionChanged.add(this.bindFunction(this.onCastleSelected));
    this._inputBehaviourSearch.onShow();
    this._itxt_search.keyUp.add(this.bindFunction(this.onSearchFieldKeyDown));
    this._itxt_search.change.add(this.bindFunction(this.onSearchFieldChange));
    this._filterList.show();
    this._filterList.onScrollSignal.add(this.bindFunction(this.onScrollFilters));
  };
  AModernFilterablePackageShopDialogSublayer.prototype.hide = function () {
    e.prototype.hide.call(this);
    f.CastleModel.timerData.removeEventListener(p.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTickEvent));
    if (this._castleSelector) {
      this._castleSelector.onHide();
      this._castleSelector.onSelectionChanged.remove(this.bindFunction(this.onCastleSelected));
    }
    if (this._inputBehaviourSearch) {
      this._inputBehaviourSearch.onHide();
    }
    this._itxt_search.keyUp.removeAll();
    this._itxt_search.change.removeAll();
    this._filterList.scrollToValue(0);
    this._filterList.hide();
    this._filterList.onScrollSignal.remove(this.bindFunction(this.onScrollFilters));
    this._filterItems.forEach(function (e) {
      return e.onHide();
    });
    this._filterItems = [];
    a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_filterMenu.mc_list);
    this.subLayerDisp.mc_filterMenu.visible = false;
    this._relationFilterByCurrency.set(this.currencyType, this._currentActiveRelationFilters);
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateCurrency = function () {
    var e = this.getCurrencyType();
    if (e && e.type != h.CollectableEnum.C2) {
      R.CollectableRenderHelper.displaySingleItemComplete(this, new _.CollectableRenderClips(this.dialogDisp.mc_timeCurrency.mc_currency), g.CollectableHelper.createVO(e.type, V.CostHelper.getAvailableGoods(e), e.id), new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_STORAGE, new F(30, 30)));
      var t = f.CastleModel.currencyData.getXmlCurrencyById(e.id).softCap;
      if (t > 0) {
        var i = this.textFieldManager.registerTextField(this.dialogDisp.mc_timeCurrency.mc_currency.txt_text, new r.LocalizedTextVO("numbersXY", [V.CostHelper.getAvailableGoods(e), t]));
        i.color = V.CostHelper.getAvailableGoods(e) < t ? u.ClientConstColor.MODERN_DEFAULT : u.ClientConstColor.GENERIC_RED;
        i.autoFitToBounds = true;
      } else {
        this.textFieldManager.getTextField(this.dialogDisp.mc_timeCurrency.mc_currency.txt_text).color = u.ClientConstColor.MODERN_DEFAULT;
      }
    }
    if (this.displayC2() || e && e.type == h.CollectableEnum.C2) {
      var n = new C.CollectableTypeVO(h.CollectableEnum.C2);
      R.CollectableRenderHelper.displaySingleItemComplete(this, new _.CollectableRenderClips(this.dialogDisp.mc_timeCurrency.mc_c2.mc_currency), g.CollectableHelper.createVO(n.type, V.CostHelper.getAvailableGoods(n), n.id), new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_DEFAULT, new F(28, 20)));
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.toggleFilterPanel = function () {
    this._filterPanelVisible = !this._filterPanelVisible;
    this.updateFilterPanelVisibility();
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateFilterPanelVisibility = function () {
    if (this._filterPanelVisible) {
      this.updateFilters();
      this._filterList.show();
      this.subLayerDisp.mc_filterMenu.visible = true;
    } else {
      this.subLayerDisp.mc_filterMenu.visible = false;
      this._filterList.hide();
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateFilters = function () {
    var e = this;
    var t = this.getEventPackages();
    if (!this._inputBehaviourSearch.isEmpty()) {
      t = t.filter(function (t) {
        return t.getSearchString().includes(e._itxt_search.text.toLowerCase());
      });
    }
    var i = [];
    var n = [];
    for (var o = 0, s = t; o < s.length; o++) {
      for (var r = 0, l = s[o].filterRelationVOs; r < l.length; r++) {
        var c = l[r];
        if (n.indexOf(c) == -1) {
          n.push(c);
        }
        if (this._currentActiveRelationFilters.indexOf(c) > -1 && i.indexOf(c) == -1) {
          i.push(c);
        }
      }
    }
    this._currentActiveRelationFilters = i;
    if (this._filterPanelVisible) {
      this._filterItems.forEach(function (e) {
        return e.onHide();
      });
      this._filterItems = [];
      a.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_filterMenu.mc_list);
      for (var u = 0, d = n; u < d.length; u++) {
        if ((c = d[u]).filterID != -1) {
          var p = this.getFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY, c);
          if (p) {
            p.addRelationVO(c);
          } else {
            this.createFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY, c);
          }
          if (C = this.getFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_FILTER, c)) {
            C.addRelationVO(c);
          } else {
            this.createFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_FILTER, c);
          }
          if (c.subFilterID > -1) {
            if (!this.getFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER, c)) {
              this.createFilterItem(AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER, c);
            }
          }
        }
      }
      this._filterItems.sort(this.sortByFilterRelation);
      this._filterItems.forEach(function (t) {
        return t.updateCheckbox(e._currentActiveRelationFilters);
      });
      var h = -2;
      for (var g = 0; g < this._filterItems.length; g++) {
        var C;
        (C = this._filterItems[g]).disp.y = h;
        h += C.disp.height;
      }
      var _ = Math.max(0, this.subLayerDisp.mc_filterMenu.mc_list.height - this.subLayerDisp.mc_filterMenu.mc_list.mask.height);
      this._filterList.init(0, _, 50, 100);
      this._filterList.scrollToValue(0);
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.getFilterItem = function (e, t) {
    switch (e) {
      case AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY:
        return this._filterItems.find(function (i) {
          return i.type == e && i.relationVOs[0].categoryID == t.categoryID;
        });
      case AModernFilterablePackageShopDialogSublayer.FILTER_FILTER:
        return this._filterItems.find(function (i) {
          return i.type == e && i.relationVOs[0].categoryID == t.categoryID && i.relationVOs[0].filterID == t.filterID;
        });
      case AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER:
        return this._filterItems.find(function (i) {
          return i.type == e && i.relationVOs[0].categoryID == t.categoryID && i.relationVOs[0].filterID == t.filterID && i.relationVOs[0].subFilterID == t.subFilterID;
        });
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.createFilterItem = function (e, t) {
    var i = new E.CastleGoodgameExternalClip(e[0], o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(this.filterItemAssetName), null, 0, false);
    var n = new B.ModernPackageShopFilterItem(i.currentshownDisplayObject, e, this.bindFunction(this.onFilterSelect));
    n.addRelationVO(t);
    this._filterItems.push(n);
    this.subLayerDisp.mc_filterMenu.mc_list.addChild(i);
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updatePackageList = function () {
    var e = this;
    this.subLayerDisp.btn_filter_active.visible = this._currentActiveRelationFilters.length > 0;
    this._filterItems.forEach(function (t) {
      return t.updateCheckbox(e._currentActiveRelationFilters);
    });
    this._listComponent.updateWithNewData(this.getFilteredPackages(), this.getEventVO(), this.getBuyType(), this.getBuyTypeId());
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    this._castleSelector.onOutOfBoundsClickCheck(t.target);
    switch (t.target) {
      case this.dialogDisp.mc_timeCurrency.mc_c2.btn_add:
        this.onClickC2Button(c.int(d.CastleOpenShopExecutor.SOURCE_UNKNOWN), N.CXFSourceTrackingConstants.SOURCE_MERCHANT_DIALOG);
        break;
      case this.dialogDisp.btn_filter:
      case this.dialogDisp.btn_filter_active:
        this.toggleFilterPanel();
        break;
      case this.subLayerDisp.mc_filterMenu.btn_reset:
        this._currentActiveRelationFilters = [];
        this.updatePackageList();
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onClickC2Button = function (e = c.int(d.CastleOpenShopExecutor.SOURCE_UNKNOWN), t = N.CXFSourceTrackingConstants.SOURCE_UNKNOWN, i = c.int(d.CastleOpenShopExecutor.SHOP_TAB_DEFAULT)) {
    if (M.ButtonHelper.isButtonEnabled(this.dialogDisp.mc_timeCurrency.mc_c2.btn_add)) {
      d.CastleOpenShopExecutor.open(e, t, i);
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onTickEvent = function (e) {
    this.updateRemainingEventTime();
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onSearchFieldKeyDown = function (e) {
    if (e.key == s.Keyboard.ENTER) {
      document.activeElement.blur();
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onSearchFieldChange = function (e) {
    this.updatePackageList();
    this.updateFilters();
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onFilterSelect = function (e, t) {
    var i = this;
    if (t) {
      e.forEach(function (e) {
        if (i._currentActiveRelationFilters.indexOf(e) == -1) {
          i._currentActiveRelationFilters.push(e);
        }
      });
    } else {
      e.forEach(function (e) {
        var t = i._currentActiveRelationFilters.indexOf(e);
        if (t > -1) {
          i._currentActiveRelationFilters.splice(t, 1);
        }
      });
    }
    this.updatePackageList();
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onScrollFilters = function () {
    this.subLayerDisp.mc_filterMenu.mc_list.y = this._filterStartPosY - this._filterList.currentValue;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateCastleSelector = function () {
    this._castleSelector.updateWithNewValues([]);
    this._castleSelector.selectIndex(0);
    this._castleSelector.disp.visible = false;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.fillTypeItemContent = function (e) {
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, new l.TextVO("")).autoFitToBounds = true;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.onCastleSelected = function () {
    this._castleSelector.getSelectedItem();
    this.textFieldManager.registerTextField(this._castleSelector.getSelectorMc().txt_text, new l.TextVO("")).autoFitToBounds = true;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.updateRemainingEventTime = function () {
    var e = this.getRemainingTime();
    O.CastleTimeStringHelper.setEventTime(this.dialogDisp.mc_timeCurrency.mc_time.txt_time, e);
    this.dialogDisp.mc_timeCurrency.mc_time.toolTipText = O.CastleTimeStringHelper.getEventToolTipString(e);
  };
  AModernFilterablePackageShopDialogSublayer.prototype.getRemainingTime = function () {
    var e = this.getEventVO();
    if (e) {
      return e.remainingEventTimeInSeconds;
    } else {
      return -1;
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.getFilteredPackages = function () {
    var e = this;
    var t = this.getEventPackages();
    if (!this._inputBehaviourSearch.isEmpty()) {
      t = t.filter(function (t) {
        return t.getSearchString().includes(e._itxt_search.text.toLowerCase());
      });
    }
    if (this._currentActiveRelationFilters.length > 0) {
      var i = this.createFilterValidationMap();
      t = t.filter(function (t) {
        return e.isPackageFiltered(t, i);
      });
    }
    this.subLayerDisp.mc_empty.visible = t.length == 0;
    return t;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.createFilterValidationMap = function () {
    var e = new Map();
    for (var t = 0, i = this._currentActiveRelationFilters; t < i.length; t++) {
      var n = i[t];
      if (!e.has(n.categoryID)) {
        e.set(n.categoryID, new Map());
      }
      if (!e.get(n.categoryID).has(n.filterID)) {
        e.get(n.categoryID).set(n.filterID, []);
      }
      e.get(n.categoryID).get(n.filterID).push(n);
    }
    return e;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.isPackageFiltered = function (e, t) {
    return Array.from(t.values()).some(function (t) {
      return Array.from(t.values()).every(function (t) {
        return e.filterRelationVOs.some(function (e) {
          return t.indexOf(e) > -1;
        });
      });
    });
  };
  AModernFilterablePackageShopDialogSublayer.prototype.displayC2 = function () {
    return false;
  };
  AModernFilterablePackageShopDialogSublayer.prototype.sortByFilterRelation = function (e, t) {
    var i = e.relationVOs[0];
    var n = t.relationVOs[0];
    if (i.categoryID == n.categoryID) {
      if (i.filterID == n.filterID) {
        if (i.subFilterID == n.subFilterID) {
          return e.type[1] - t.type[1];
        } else {
          return i.subFilterID - n.subFilterID;
        }
      } else {
        return i.filterID - n.filterID;
      }
    } else {
      return i.categoryID - n.categoryID;
    }
  };
  AModernFilterablePackageShopDialogSublayer.prototype.resetFilters = function () {
    this._relationFilterByCurrency = new Map();
    this._currentActiveRelationFilters = [];
  };
  AModernFilterablePackageShopDialogSublayer.prototype.getCurrencyType = function () {
    return this._currencyType;
  };
  Object.defineProperty(AModernFilterablePackageShopDialogSublayer.prototype, "filterItemAssetName", {
    get: function () {
      return this._assetName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AModernFilterablePackageShopDialogSublayer.prototype, "currencyType", {
    get: function () {
      return this._currencyType;
    },
    enumerable: true,
    configurable: true
  });
  AModernFilterablePackageShopDialogSublayer.FILTER_CATEGORY = ["Filter_Category", 1];
  AModernFilterablePackageShopDialogSublayer.FILTER_FILTER = ["Filter_Filter", 2];
  AModernFilterablePackageShopDialogSublayer.FILTER_SUBFILTER = ["Filter_Subfilter", 3];
  return AModernFilterablePackageShopDialogSublayer;
}(x.AModernPackageShopDialogSublayer);
exports.AModernFilterablePackageShopDialogSublayer = k;