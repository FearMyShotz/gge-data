Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./1.js");
var r = require("./5.js");
var l = require("./3.js");
var c = require("./6.js");
var u = require("./18.js");
var d = require("./75.js");
var p = require("./4.js");
var h = require("./56.js");
var g = require("./14.js");
var C = require("./1242.js");
var _ = require("./1243.js");
var m = require("./1244.js");
var f = require("./898.js");
var O = require("./348.js");
var E = require("./1248.js");
var y = require("./900.js");
var b = require("./76.js");
var D = require("./77.js");
var I = require("./8.js");
var T = require("./211.js");
var v = require("./3864.js");
var S = require("./3865.js");
var A = require("./1107.js");
var L = require("./3866.js");
var P = function (e) {
  function AAdvancedTroopSelectionComponent(t) {
    var i = e.call(this) || this;
    i._currentFightDialogType = 0;
    i._currentFlank = 0;
    i.originalY = 0;
    i.originalHeight = 0;
    i.offsetPerItem = 26.5;
    i._disp = t;
    i.originalY = t.y;
    i.originalHeight = t.bg.height;
    i._mergedInventory = [];
    var n = new D.InfiniteScrollListOptions(v.AttackDialogWaveHandlerSoldierPickInfiniteItem, "Attack_list_item_selection_unit", T.AttackDialog.NAME);
    n.itemPaddingY = -2;
    n.useSmoothScroll = true;
    i._unitScrollList = new L.CastleAdvancedTroopSelectionItemInfiniteScrollList(new b.InfiniteScrollListClips(i._disp.mc_itemContainerUnits).addMaskMc(i._disp.mc_itemContainerUnits.mc_mask).addItemContainerMc(i._disp.mc_itemContainerUnits.mc_items).addSliderMc(i._disp.mc_itemContainerUnits.mc_slider), n);
    var o = new D.InfiniteScrollListOptions(S.AttackDialogWaveHandlerToolPickInfiniteItem, "Attack_list_item_selection_tool", T.AttackDialog.NAME);
    o.itemPaddingY = -2;
    o.useSmoothScroll = true;
    i._toolScrollList = new L.CastleAdvancedTroopSelectionItemInfiniteScrollList(new b.InfiniteScrollListClips(i._disp.mc_itemContainerTools).addMaskMc(i._disp.mc_itemContainerTools.mc_mask).addItemContainerMc(i._disp.mc_itemContainerTools.mc_items).addSliderMc(i._disp.mc_itemContainerTools.mc_slider), o);
    i._disp.visible = false;
    I.ButtonHelper.initBasicButton(i._disp.btn_ok);
    return i;
  }
  n.__extends(AAdvancedTroopSelectionComponent, e);
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "unitScrollItemClass", {
    get: function () {
      return y.CastleAdvancedUnitSelectionScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "toolScrollItemClass", {
    get: function () {
      return f.CastleAdvancedToolsSelectionScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  AAdvancedTroopSelectionComponent.prototype.showToolList = function (e, t, i, n, o = c.int(u.ClientConstCastle.FLANK_MIDDLE), a = null) {
    this.show(e, t, i, u.ClientConstCastle.UNIT_CATEGORY_TOOLS, n, o, a);
  };
  AAdvancedTroopSelectionComponent.prototype.showUnitList = function (e, t, i, n, o = c.int(u.ClientConstCastle.FLANK_MIDDLE), a = null) {
    this.show(e, t, null, u.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, n, o, a);
  };
  AAdvancedTroopSelectionComponent.prototype.show = function (e, t, i, n, o, a = c.int(u.ClientConstCastle.FLANK_MIDDLE), s = null) {
    this._disp.visible = true;
    this._originalInventory = e;
    this._fightItemContainer = t;
    this._sourceArea = i;
    this._currentUnitCategory = n;
    this._parentFightDialog = o;
    this._currentFightDialogType = this.getFightDialogType();
    this._currentFlank = a;
    this._selectionStrategy = this.getCurrentStrategy();
    var r = this.getStartScrollValue();
    this.showGlow();
    this.resetLists();
    this.updateMergedInventory();
    this.sortInventory();
    var l = 0;
    if (s && s.unitVO) {
      l = this._mergedInventory.findIndex(function (e) {
        return e.wodId == s.unitVO.wodId;
      });
    }
    this.showCurrentList(l, r);
  };
  AAdvancedTroopSelectionComponent.prototype.getStartScrollValue = function () {
    return c.int(this.disp.visible && this.currentList ? this.currentList.scrollComponent.currentValue : -1);
  };
  AAdvancedTroopSelectionComponent.prototype.getFightDialogType = function () {
    if (s.instanceOfClass(this._parentFightDialog, "CastleAttackDialog")) {
      return O.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK;
    } else if (s.instanceOfClass(this._parentFightDialog, "CastleDefenceDialog")) {
      return O.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE;
    } else if (s.instanceOfClass(this._parentFightDialog, "CastleTroopSupportDialog")) {
      return O.CastleAdvancedTroopSelectionComponent.TYPE_STATION;
    } else if (s.instanceOfClass(this._parentFightDialog, "CastleSupportDefenceDialog")) {
      return O.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT;
    } else {
      return 0;
    }
  };
  AAdvancedTroopSelectionComponent.prototype.showGlow = function () {
    var e = 3;
    if (this._currentFightDialogType == O.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
      switch (this._currentFlank) {
        case u.ClientConstCastle.FLANK_LEFT:
          e = 3;
          break;
        case u.ClientConstCastle.FLANK_MIDDLE:
          e = 2;
          break;
        case u.ClientConstCastle.FLANK_RIGHT:
          e = 1;
      }
    } else if (this._currentFightDialogType == O.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
      switch (this._currentFlank) {
        case u.ClientConstCastle.FLANK_LEFT:
          e = 1;
          break;
        case u.ClientConstCastle.FLANK_MIDDLE:
          e = 2;
          break;
        case u.ClientConstCastle.FLANK_RIGHT:
          e = 1;
      }
    }
    this._disp.bg.gotoAndStop(e);
  };
  AAdvancedTroopSelectionComponent.prototype.updateMergedInventory = function () {
    this._mergedInventory = [];
    for (var e = 0; e < this._originalInventory.length; e++) {
      var t = this._originalInventory[e];
      var i = p.CastleModel.wodData.createVObyWOD(t.wodId, h.CastleWodData.TYPE_UNIT);
      i.inventoryAmount = t.inventoryAmount;
      this._mergedInventory.push(i);
    }
    for (var n = 0, o = this._fightItemContainer.items; n < o.length; n++) {
      var a = o[n];
      if (a !== undefined && a.unitVO) {
        this.addUnit(a.getWodId(), a.getAmount());
      }
    }
  };
  AAdvancedTroopSelectionComponent.prototype.addUnit = function (e, t) {
    var i = true;
    if (this._mergedInventory != null) {
      for (var n = 0, o = this._mergedInventory; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined && a.wodId == e) {
          a.inventoryAmount += t;
          i = false;
          break;
        }
      }
    }
    if (i) {
      var s = p.CastleModel.wodData.createVObyWOD(e, h.CastleWodData.TYPE_UNIT);
      s.inventoryAmount = t;
      this._mergedInventory.push(s);
    }
  };
  AAdvancedTroopSelectionComponent.prototype.addToMergedInventory = function (e, t) {
    this.addUnit(e, t);
    this.resetLists();
    this.showCurrentList(-1, this.currentList.scrollComponent.currentValue);
  };
  AAdvancedTroopSelectionComponent.prototype.sortInventory = function () {
    if (this._mergedInventory.length != 0) {
      if (this._currentUnitCategory == u.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        this._mergedInventory.sort(d.ClientConstSort.sortByUnitSortOrder);
      } else {
        switch (this._currentFightDialogType) {
          case O.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK:
            this._mergedInventory.sort(d.ClientConstSort.sortByUnitAttackPower);
            break;
          case O.CastleAdvancedTroopSelectionComponent.TYPE_STATION:
            this._mergedInventory.sort(d.ClientConstSort.sortByUnitPower);
            break;
          case O.CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT:
            this._mergedInventory.sort(d.ClientConstSort.sortByUnitDefencePower);
        }
      }
    }
  };
  AAdvancedTroopSelectionComponent.prototype.resetLists = function () {
    this._unitScrollList.setVisibility(false);
    this._toolScrollList.setVisibility(false);
    this._unitScrollList.onHide();
    this._toolScrollList.onHide();
    this._unitScrollList.dispatcher.removeEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._toolScrollList.dispatcher.removeEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._unitScrollList.dispatcher.removeEventListener(A.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
    this._toolScrollList.dispatcher.removeEventListener(A.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  AAdvancedTroopSelectionComponent.prototype.showCurrentList = function (e = 0, t = -1) {
    g.CastleComponent.textFieldManager.registerTextField(this._disp.txt_title, new l.LocalizedTextVO(this.currentHeader));
    this.currentList.setVisibility(true);
    var i = 0;
    var n = [];
    if (this._mergedInventory != null) {
      for (var a = 0, s = this._mergedInventory; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          i = c.int(this._fightItemContainer.getTotalAmountOfUntit(r));
          var u = this.getPossibleSlots(r);
          var d = c.int(Math.min(this.getMaximumSpace(r), this._fightItemContainer.freeItems, this.getFreeSpaceFromPossibleSlots(r, u)));
          n.push(new E.CastleAdvancedTroopSelectionScrollItemVO(r, i, this._sourceArea, this._currentFightDialogType, u, d));
        }
      }
    }
    this.currentList.onHide();
    this.currentList.onShow();
    this.currentList.updateWithNewData(n, e == 0 && t == -1);
    if (e > 0) {
      this.currentList.instantTweenFlag = true;
      this.currentList.scrollToData(e);
    } else if (t > -1) {
      this.currentList.instantTweenFlag = true;
      this.currentList.scrollComponent.scrollToValue(t);
    }
    this.currentList.dispatcher.addEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.currentList.dispatcher.addEventListener(A.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  AAdvancedTroopSelectionComponent.prototype.getPossibleSlots = function (e) {
    var t = this.currentCapPerSlot;
    var i = [];
    var n = [];
    var o = this._currentFightDialogType == O.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE && (this._fightItemContainer.getTotalAmountOfUntit(e) > 0 || this._fightItemContainer.hasFreeSlotsForUnit(e));
    for (var a = 0; a < this._fightItemContainer.items.length; a++) {
      var s = this._fightItemContainer.items[a];
      if (e.isToolForSlotType(s.slotType) && s.isUnlocked()) {
        if (s.isFree() || s.getWodId() == e.wodId) {
          n.push(s);
        } else if (!o) {
          var r = false;
          var l = c.int(this._fightItemContainer.getTotalAmountOfUntit(s.unitVO));
          var u = 0;
          for (var d = 0; d < i.length; d++) {
            var p = i[d];
            if (s.getWodId() == p.getWodId() && l <= ++u * t) {
              r = true;
              u = 0;
              break;
            }
          }
          if (r) {
            n.push(s);
          }
          i.push(s);
        }
      }
    }
    return n;
  };
  AAdvancedTroopSelectionComponent.prototype.getMaximumSpace = function (e) {
    var t = c.int(Number.MAX_VALUE);
    if (s.instanceOfClass(e, "ToolUnitVO")) {
      var i = e;
      if (i.hasLimitedAmountPerWave && this._currentFightDialogType == O.CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
        t = c.int(this._parentFightDialog.isMaxAmountPerWaveReached(i) ? 0 : i.amountPerWave);
      }
    }
    return Math.min(this._fightItemContainer.freeItems, t);
  };
  AAdvancedTroopSelectionComponent.prototype.getFreeSpaceFromPossibleSlots = function (e, t) {
    var i = 0;
    var n = this.currentCapPerSlot;
    if (n == Number.MAX_VALUE) {
      return c.int(Number.MAX_VALUE);
    }
    if (t != null) {
      for (var o = 0, a = t; o < a.length; o++) {
        var s = a[o];
        if (s !== undefined) {
          if (s.getWodId() == e.wodId) {
            i += n - s.getAmount();
          } else {
            i += n;
            if (!s.isFree() && this._currentFightDialogType == O.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
              break;
            }
          }
        }
      }
    }
    return i;
  };
  AAdvancedTroopSelectionComponent.prototype.onScrollItemClick = function (e) {
    if (I.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.originTarget) {
        case e.scrollItem.disp.mc_selection.btn_remove:
          var t = e.scrollItem.troopSelectionScrollItemVO;
          this._selectionStrategy.changeAmount(t.unitVO, 0, this._fightItemContainer, t.possibleSlots, this._parentFightDialog.bindFunction(this._parentFightDialog.changeItemAmount));
          this.updateLimits();
          break;
        case e.scrollItem.disp.btn_instantBuy:
          this._parentFightDialog.showInstantBuyDialog(e.scrollItem.troopSelectionScrollItemVO.unitVO);
      }
    }
  };
  AAdvancedTroopSelectionComponent.prototype.onUnitSelectionChanged = function (e) {
    var t = e.scrollItem.troopSelectionScrollItemVO;
    this._selectionStrategy.changeAmount(t.unitVO, t.selectedAmount, this._fightItemContainer, t.possibleSlots, this._parentFightDialog.bindFunction(this._parentFightDialog.changeItemAmount));
    this.updateLimits();
  };
  AAdvancedTroopSelectionComponent.prototype.updateLimits = function () {
    for (var e = 0, t = this.currentList.dataList; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        i.possibleSlots = this.getPossibleSlots(i.unitVO);
        var n = c.int(Math.min(this.getMaximumSpace(i.unitVO), this.getFreeSpaceFromPossibleSlots(i.unitVO, i.possibleSlots)));
        i.freeUnitSpace = n;
      }
    }
    this.currentList.dispatcher.removeEventListener(A.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
    this.currentList.updateLimits();
    this.currentList.dispatcher.addEventListener(A.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  AAdvancedTroopSelectionComponent.prototype.hide = function () {
    this._disp.visible = false;
    this.currentList.dispatcher.removeEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.currentList.dispatcher.removeEventListener(A.CastleAdvancedTroopSelectionInfiniteEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  AAdvancedTroopSelectionComponent.prototype.getCurrentStrategy = function () {
    if (this._currentFightDialogType == O.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
      return new _.AdvancedTroopSelectionDefenceStrategy();
    } else if (this._currentUnitCategory == u.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      return new m.AdvancedTroopSelectionToolStrategy();
    } else {
      return new C.AdvancedTroopSelectionDefaultStrategy();
    }
  };
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "currentList", {
    get: function () {
      if (this._currentUnitCategory == u.ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
        return this._unitScrollList;
      } else {
        return this._toolScrollList;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "currentHeader", {
    get: function () {
      if (this._currentUnitCategory == u.ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
        return "dialog_attack_placeUnits";
      } else {
        return "dialog_attack_placeTools";
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "currentCapPerSlot", {
    get: function () {
      if (this._currentFightDialogType == O.CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
        return r.DefenseConst.MAX_SLOTSIZE;
      } else if (this._currentUnitCategory == u.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        return r.TravelConst.MAX_TOOLS_PER_SLOT;
      } else {
        return Number.MAX_VALUE;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AAdvancedTroopSelectionComponent.prototype, "currentUnitCategory", {
    get: function () {
      return this._currentUnitCategory;
    },
    enumerable: true,
    configurable: true
  });
  AAdvancedTroopSelectionComponent.prototype.isListEmpty = function () {
    return !!this.currentList && this.currentList.dataList.length == 0;
  };
  AAdvancedTroopSelectionComponent.TYPE_ATTACK = 0;
  AAdvancedTroopSelectionComponent.TYPE_DEFENCE = 1;
  AAdvancedTroopSelectionComponent.TYPE_STATION = 2;
  AAdvancedTroopSelectionComponent.TYPE_SUPPORT = 3;
  return AAdvancedTroopSelectionComponent;
}(g.CastleComponent);
exports.AAdvancedTroopSelectionComponent = P;
a.classImplementsInterfaces(P, "ICollectableRendererList");