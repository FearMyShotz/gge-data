Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./57.js");
var c = require("./517.js");
var u = require("./601.js");
var d = require("./118.js");
var p = require("./233.js");
var h = require("./4.js");
var g = require("./127.js");
var C = require("./40.js");
var _ = require("./82.js");
var m = require("./47.js");
var f = require("./59.js");
var O = require("./42.js");
var E = createjs.Point;
var y = function (e) {
  function RelicUpgradeDialogSelector(t) {
    var i = this;
    i._allItems = [];
    i._shownItems = [];
    i._onSelectionChanged = new l.Signal();
    i._receivedEquipableResponses = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this, t) || this).init();
    return i;
  }
  n.__extends(RelicUpgradeDialogSelector, e);
  RelicUpgradeDialogSelector.prototype.init = function () {
    this._searchField = new v.SearchFieldComponent(this.disp.mc_search);
    this._filters = [];
    for (var e = 0; e < RelicUpgradeDialogSelector.NUMBER_OF_FILTERS; ++e) {
      this._filters.push(new S.RelicUpgradeDialogSelectorCheckbox(this.disp.getChildByName("mc_filter" + e), S.RelicUpgradeDialogSelectorCheckbox.ORDER[e]));
    }
    this._scrollComponent = new _.ModernSliderScrollComponent(new m.SimpleScrollVO().initByParent(this.disp.mc_slider).addMouseWheelElements([this.disp]).addVisualElements([this.disp.mc_slider]), new f.DynamicSizeScrollStrategyVertical(true));
  };
  RelicUpgradeDialogSelector.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._searchField.onShow();
    this._scrollComponent.show();
    if (this._filters != null) {
      for (var t = 0, i = this._filters; t < i.length; t++) {
        a = i[t];
        if (a !== undefined) {
          a.onShow();
        }
      }
    }
    if (this._shownItems != null) {
      for (var n = 0, o = this._shownItems; n < o.length; n++) {
        var a;
        var s = a = o[n];
        if (s !== undefined) {
          s.onShow();
          s.onSelected.add(this.bindFunction(this.onItemSelected));
        }
      }
    }
    D.CastleComponent.controller.addEventListener(d.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onEquipmentInventoryUpdated));
    h.CastleModel.gemData.addEventListener(p.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onGemInventoryUpdated));
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    P.CastleEquipmentFavoritesMicroservice.Instance.favoriteListDataArrivedSignal.add(this.bindFunction(this.onFavList));
    this.clearAllItems();
    this.resetShownItems();
    this._searchField.clearSearchField();
    h.CastleModel.smartfoxClient.sendCommandVO(new u.C2SGetGemInventory());
    h.CastleModel.smartfoxClient.sendCommandVO(new c.C2SGetEquipmentInventory());
  };
  RelicUpgradeDialogSelector.prototype.onHide = function () {
    this._searchField.onHide();
    this._scrollComponent.hide();
    if (this._filters != null) {
      for (var t = 0, i = this._filters; t < i.length; t++) {
        a = i[t];
        if (a !== undefined) {
          a.onHide();
        }
      }
    }
    if (this._shownItems != null) {
      for (var n = 0, o = this._shownItems; n < o.length; n++) {
        var a;
        var s = a = o[n];
        if (s !== undefined) {
          s.onHide();
          s.onSelected.remove(this.bindFunction(this.onItemSelected));
        }
      }
    }
    D.CastleComponent.controller.removeEventListener(d.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onEquipmentInventoryUpdated));
    h.CastleModel.gemData.removeEventListener(p.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onGemInventoryUpdated));
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScroll));
    P.CastleEquipmentFavoritesMicroservice.Instance.favoriteListDataArrivedSignal.remove(this.bindFunction(this.onFavList));
    e.prototype.onHide.call(this);
  };
  RelicUpgradeDialogSelector.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    T.EquipmentIconHelper.onShow.add(this.bindFunction(this.onEqShow));
    this._searchField.onSearchValueChanged.add(this.bindFunction(this.onSearchValueChanged));
    if (this._filters != null) {
      for (var t = 0, i = this._filters; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onStateChanged.add(this.bindFunction(this.onFilterStateChanged));
        }
      }
    }
  };
  RelicUpgradeDialogSelector.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    T.EquipmentIconHelper.onShow.remove(this.bindFunction(this.onEqShow));
    this._searchField.onSearchValueChanged.remove(this.bindFunction(this.onSearchValueChanged));
    if (this._filters != null) {
      for (var t = 0, i = this._filters; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onStateChanged.remove(this.bindFunction(this.onFilterStateChanged));
        }
      }
    }
  };
  RelicUpgradeDialogSelector.prototype.onEqShow = function () {
    I.CastleTextFieldHelper.removeInputFocus();
  };
  RelicUpgradeDialogSelector.prototype.checkAndUpdateItems = function () {
    this._receivedEquipableResponses++;
    if (this._receivedEquipableResponses >= 2) {
      this._receivedEquipableResponses = 0;
      this.updateAllItemsList();
      this.updateShownItems();
    }
  };
  RelicUpgradeDialogSelector.prototype.clearAllItems = function () {
    if (this._allItems != null) {
      for (var e = 0, t = this._allItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.destroy();
        }
      }
    }
    this._allItems = [];
    this._relicsAssignedToLord = new Map();
    a.MovieClipHelper.clearMovieClip(this.disp.mc_items.mc_transform);
  };
  RelicUpgradeDialogSelector.prototype.updateAllItemsList = function () {
    this.clearAllItems();
    this._allItems = [];
    this._relicsAssignedToLord = new Map();
    this._allItems = this.parseEquipmentListToItems(this.getAllRelevantRelicsFromLordList(h.CastleModel.lordData.commanders), S.RelicUpgradeDialogSelectorCheckbox.TYPE_LORDS);
    this._allItems = this._allItems.concat(this.parseEquipmentListToItems(this.getAllRelevantRelicsFromLordList(h.CastleModel.lordData.barons), S.RelicUpgradeDialogSelectorCheckbox.TYPE_BARONS));
    var e = this.getAllRelevantRelicsFromEquipList(h.CastleModel.equipData.playerInventory);
    e = e.concat(this.getAllRelevantRelicsFromEquipList(h.CastleModel.gemData.relicGemsInventory));
    this._allItems = this._allItems.concat(this.parseEquipmentListToItems(e, S.RelicUpgradeDialogSelectorCheckbox.TYPE_INVENTORY));
    this._allItems.sort(RelicUpgradeDialogSelector.sortInventoryEquipment);
    if (this._allItems != null) {
      for (var t = 0, i = this._allItems; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this.disp.mc_items.mc_transform.addChild(n.disp);
        }
      }
    }
  };
  RelicUpgradeDialogSelector.prototype.resetShownItems = function () {
    if (this._allItems != null) {
      for (var e = 0, t = this._allItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.disp.x = RelicUpgradeDialogSelector.ITEM_DIMENSION.x * 0.5;
          i.disp.y = RelicUpgradeDialogSelector.ITEM_DIMENSION.y * 0.5;
          i.disp.visible = false;
        }
      }
    }
    this._shownItems = [];
    this._selectedItem = null;
    this._onSelectionChanged.dispatch();
  };
  RelicUpgradeDialogSelector.prototype.updateShownItems = function () {
    this.resetShownItems();
    if (this._allItems != null) {
      for (var e = 0, t = this._allItems; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && this.fulfillsFilterCriteria(i)) {
          this.addShownItem(i);
        }
      }
    }
    this.updateScrollValues();
    this.updateInfoField();
  };
  RelicUpgradeDialogSelector.prototype.addShownItem = function (e) {
    e.onShow();
    e.onSelected.add(this.bindFunction(this.onItemSelected));
    e.disp.visible = true;
    e.update();
    this._shownItems.push(e);
    var t = r.int(this._shownItems.length - 1);
    var i = t % 4;
    var n = r.int(t / 4);
    e.disp.x = RelicUpgradeDialogSelector.ITEM_DIMENSION.x * i + i * RelicUpgradeDialogSelector.ITEM_DISTANCE.x + RelicUpgradeDialogSelector.ITEM_DIMENSION.x * 0.5;
    e.disp.y = RelicUpgradeDialogSelector.ITEM_DIMENSION.y * n + n * RelicUpgradeDialogSelector.ITEM_DISTANCE.y + RelicUpgradeDialogSelector.ITEM_DIMENSION.y * 0.5;
  };
  RelicUpgradeDialogSelector.prototype.updateItemInfo = function (e, t) {
    if (this._shownItems != null) {
      for (var i = 0, n = this._shownItems; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && e.type == o.relicVO.type && e.getId() == o.relicVO.getId()) {
          if (L.instanceOfClass(o.relicVO.vo, "RelicGemVO")) {
            o.relicVO.vo.parseServerObject(t);
          } else if (L.instanceOfClass(o.relicVO.vo, "RelicEquipmentVO")) {
            o.relicVO.vo.parseEquipFromArray(t);
          }
          o.update();
        }
      }
    }
    this._onSelectionChanged.dispatch();
  };
  RelicUpgradeDialogSelector.prototype.updateInfoField = function () {
    var e = "";
    if (this._allItems.length <= 0) {
      e = "dialog_relicEnchanter_relicInventory_empty";
    } else if (this._shownItems.length <= 0) {
      e = "equipmentFilter_empty";
    }
    if (e != "") {
      D.CastleComponent.textFieldManager.registerTextField(this.disp.txt_info, new s.LocalizedTextVO(e)).verticalAlign = O.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    }
    this.disp.txt_info.visible = e != "";
  };
  RelicUpgradeDialogSelector.prototype.updateScrollValues = function () {
    var e = Math.max(0, this.disp.mc_items.mc_transform.height - this.disp.mc_mask.height);
    var t = RelicUpgradeDialogSelector.ITEM_DIMENSION.y + RelicUpgradeDialogSelector.ITEM_DISTANCE.y;
    this._scrollComponent.init(0, e, t, t);
    this._scrollComponent.setVisibility(e > 0);
    this._scrollComponent.scrollToPercent(0);
  };
  RelicUpgradeDialogSelector.prototype.fulfillsFilterCriteria = function (e) {
    var t = this._searchField.currentSearchValue.toLowerCase();
    if (this.isFilterChecked(e.filterType)) {
      if (e.relicVO.vo.nameString.toLowerCase().indexOf(t) > -1) {
        return true;
      }
      if (e.relicVO.vo.extraText.toLowerCase().indexOf(t) > -1) {
        return true;
      }
      if (e.relicVO.vo.typeDescriptionText.toLowerCase().indexOf(t) > -1) {
        return true;
      }
      if (e.relicVO.vo.bonusDescriptionText.toLowerCase().indexOf(t) > -1) {
        return true;
      }
      if (e.relicVO.type == b.CollectableItemRelicVO.TYPE_EQUIPMENT) {
        var i = e.relicVO.vo;
        if (i && i.gemVO) {
          if (i.gemVO.nameString.toLowerCase().indexOf(t) > -1) {
            return true;
          }
          if (i.gemVO.extraText.toLowerCase().indexOf(t) > -1) {
            return true;
          }
          if (i.gemVO.typeDescriptionText.toLowerCase().indexOf(t) > -1) {
            return true;
          }
          if (i.gemVO.bonusDescriptionText.toLowerCase().indexOf(t) > -1) {
            return true;
          }
        }
      }
    }
    return false;
  };
  RelicUpgradeDialogSelector.prototype.isFilterChecked = function (e) {
    if (this._filters != null) {
      for (var t = 0, i = this._filters; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.filterType == e) {
          return n.currentState == S.RelicUpgradeDialogSelectorCheckbox.STATE_CHECKED;
        }
      }
    }
    return false;
  };
  RelicUpgradeDialogSelector.prototype.parseEquipmentListToItems = function (e, t) {
    var i = [];
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = new b.CollectableItemRelicVO();
          s.vo = a;
          var r = this._relicsAssignedToLord.get(a.id);
          var l = new A.RelicUpgradeDialogSelectorItem(s, r);
          l.filterType = t;
          i.push(l);
        }
      }
    }
    return i;
  };
  RelicUpgradeDialogSelector.prototype.getAllRelevantRelicsFromLordList = function (e) {
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && RelicUpgradeDialogSelector.ITEM_LORD_EQUIPMENT_SLOT_ORDER != null) {
          for (var a = 0, s = RelicUpgradeDialogSelector.ITEM_LORD_EQUIPMENT_SLOT_ORDER; a < s.length; a++) {
            var r = s[a];
            if (r !== undefined) {
              var l = o.equipmentSlots[r];
              if (l && l.equipmentVO && L.instanceOfClass(l.equipmentVO, "RelicEquipmentVO")) {
                t.push(l.equipmentVO);
                this._relicsAssignedToLord.set(l.equipmentVO.id, o ? o.id : -1);
              }
            }
          }
        }
      }
    }
    return t;
  };
  RelicUpgradeDialogSelector.prototype.getAllRelevantRelicsFromEquipList = function (e) {
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o && (L.instanceOfClass(o, "RelicEquipmentVO") || L.instanceOfClass(o, "RelicGemVO"))) {
          t.push(o);
        }
      }
    }
    return t;
  };
  RelicUpgradeDialogSelector.prototype.getSelectedItem = function () {
    return this._selectedItem;
  };
  RelicUpgradeDialogSelector.sortInventoryEquipment = function (e, t) {
    var i = 0;
    if ((i = r.int(S.RelicUpgradeDialogSelectorCheckbox.ORDER.indexOf(e.filterType) - S.RelicUpgradeDialogSelectorCheckbox.ORDER.indexOf(t.filterType))) == 0 && (i = r.int(t.relicVO.vo.lordTypeId - e.relicVO.vo.lordTypeId)) == 0 && (i = r.int(e.relicVO.vo.nameString.localeCompare(t.relicVO.vo.nameString))) == 0 && (i = r.int(RelicUpgradeDialogSelector.getEnchantmentLevelFromEquip(t.relicVO.vo) - RelicUpgradeDialogSelector.getEnchantmentLevelFromEquip(e.relicVO.vo))) == 0) {
      return RelicUpgradeDialogSelector.getRelicInfoFromEquip(t.relicVO.vo).mightValue - RelicUpgradeDialogSelector.getRelicInfoFromEquip(e.relicVO.vo).mightValue;
    } else {
      return i;
    }
  };
  RelicUpgradeDialogSelector.getEnchantmentLevelFromEquip = function (e) {
    if (L.instanceOfClass(e, "BasicEquipmentVO")) {
      return r.int(e.enchantmentLevel);
    } else if (L.instanceOfClass(e, "RelicGemVO")) {
      return r.int(e.enchantmentLevel);
    } else {
      return 0;
    }
  };
  RelicUpgradeDialogSelector.getRelicInfoFromEquip = function (e) {
    if (L.instanceOfClass(e, "RelicEquipmentVO")) {
      return e.relicInfoVO;
    } else if (L.instanceOfClass(e, "RelicGemVO")) {
      return e.relicInfoVO;
    } else {
      return null;
    }
  };
  RelicUpgradeDialogSelector.prototype.onSearchValueChanged = function () {
    this.updateShownItems();
  };
  RelicUpgradeDialogSelector.prototype.onFilterStateChanged = function () {
    this.updateShownItems();
  };
  RelicUpgradeDialogSelector.prototype.onGemInventoryUpdated = function (e) {
    this.checkAndUpdateItems();
  };
  RelicUpgradeDialogSelector.prototype.onEquipmentInventoryUpdated = function (e) {
    this.checkAndUpdateItems();
  };
  RelicUpgradeDialogSelector.prototype.onFavList = function () {
    this.updateShownItems();
  };
  RelicUpgradeDialogSelector.prototype.onScroll = function () {
    this.disp.mc_items.mc_transform.y = -this._scrollComponent.currentValue;
  };
  RelicUpgradeDialogSelector.prototype.onItemSelected = function (e = null) {
    var t = !!e && e.isSelected();
    if (this._shownItems != null) {
      for (var i = 0, n = this._shownItems; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.setSelection(false);
        }
      }
    }
    if (e && !t) {
      e.setSelection(true);
    }
    this._selectedItem = t ? null : e;
    this._onSelectionChanged.dispatch();
  };
  Object.defineProperty(RelicUpgradeDialogSelector.prototype, "onSelectionChanged", {
    get: function () {
      return this._onSelectionChanged;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogSelector.__initialize_static_members = function () {
    RelicUpgradeDialogSelector.ITEM_DISTANCE = new E(6, 6);
    RelicUpgradeDialogSelector.ITEM_DIMENSION = new E(86, 86);
  };
  RelicUpgradeDialogSelector.NUMBER_OF_FILTERS = 3;
  RelicUpgradeDialogSelector.ITEM_LORD_EQUIPMENT_SLOT_ORDER = [g.BasicEquippableVO.SLOT_TYPE_HERO, g.BasicEquippableVO.SLOT_TYPE_HELMET, g.BasicEquippableVO.SLOT_TYPE_WEAPON, g.BasicEquippableVO.SLOT_TYPE_ARMOR, g.BasicEquippableVO.SLOT_TYPE_ARTIFACT, g.BasicEquippableVO.SLOT_TYPE_SKIN];
  return RelicUpgradeDialogSelector;
}(C.CastleItemRenderer);
exports.RelicUpgradeDialogSelector = y;
o.classImplementsInterfaces(y, "ICollectableRendererList");
var b = require("./289.js");
var D = require("./14.js");
var I = require("./141.js");
var T = require("./73.js");
var v = require("./987.js");
var S = require("./3099.js");
var A = require("./3100.js");
y.__initialize_static_members();
var L = require("./1.js");
var P = require("./353.js");