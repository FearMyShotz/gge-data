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
var d = require("./896.js");
var p = require("./4.js");
var h = require("./8.js");
var g = require("./14.js");
var C = require("./1242.js");
var _ = require("./1243.js");
var m = require("./1244.js");
var f = function (e) {
  function CastleAdvancedTroopSelectionComponent(t) {
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
    i._unitScrollList = new b.CastleAdvancedTroopSelectionItemScrollList(i._disp.mc_itemContainerUnits, i._disp);
    i._toolScrollList = new b.CastleAdvancedTroopSelectionItemScrollList(i._disp.mc_itemContainerTools, i._disp);
    i._unitScrollList.scrollItemClass = i.unitScrollItemClass;
    i._toolScrollList.scrollItemClass = i.toolScrollItemClass;
    i._unitScrollList.componentDisp.visible = false;
    i._toolScrollList.componentDisp.visible = false;
    i._disp.visible = false;
    h.ButtonHelper.initBasicButton(i._disp.btn_ok);
    return i;
  }
  n.__extends(CastleAdvancedTroopSelectionComponent, e);
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "unitScrollItemClass", {
    get: function () {
      return I.CastleAdvancedUnitSelectionScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "toolScrollItemClass", {
    get: function () {
      return y.CastleAdvancedToolsSelectionScrollItem;
    },
    enumerable: true,
    configurable: true
  });
  CastleAdvancedTroopSelectionComponent.prototype.showToolList = function (e, t, i, n, o = c.int(u.ClientConstCastle.FLANK_MIDDLE), a = null) {
    this.show(e, t, i, u.ClientConstCastle.UNIT_CATEGORY_TOOLS, n, o, a);
  };
  CastleAdvancedTroopSelectionComponent.prototype.showUnitList = function (e, t, i, n, o = c.int(u.ClientConstCastle.FLANK_MIDDLE), a = null) {
    this.show(e, t, null, u.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, n, o, a);
  };
  CastleAdvancedTroopSelectionComponent.prototype.show = function (e, t, i, n, o, a = c.int(u.ClientConstCastle.FLANK_MIDDLE), s = null) {
    var r = c.int(this.disp.visible && this.currentList ? this.currentList.currentStartIndex : 0);
    this._disp.visible = true;
    this._originalInventory = e;
    this._fightItemContainer = t;
    this._sourceArea = i;
    this._currentUnitCategory = n;
    this._parentFightDialog = o;
    this._currentFightDialogType = this.getFightDialogType();
    this._currentFlank = a;
    this._selectionStrategy = this.getCurrentStrategy();
    this.showGlow();
    this.resetLists();
    this.updateMergedInventory();
    this.sortInventory();
    if (s && s.unitVO) {
      r = this._mergedInventory.findIndex(function (e) {
        return e.wodId == s.unitVO.wodId;
      });
    }
    this.showCurrentList(r);
    this.adjustListHeight();
  };
  CastleAdvancedTroopSelectionComponent.prototype.getFightDialogType = function () {
    if (s.instanceOfClass(this._parentFightDialog, "CastleAttackDialog")) {
      return CastleAdvancedTroopSelectionComponent.TYPE_ATTACK;
    } else if (s.instanceOfClass(this._parentFightDialog, "CastleDefenceDialog")) {
      return CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE;
    } else if (s.instanceOfClass(this._parentFightDialog, "CastleTroopSupportDialog")) {
      return CastleAdvancedTroopSelectionComponent.TYPE_STATION;
    } else if (s.instanceOfClass(this._parentFightDialog, "CastleSupportDefenceDialog")) {
      return CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT;
    } else {
      return 0;
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.showGlow = function () {
    var e = 3;
    if (this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
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
    } else if (this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
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
  CastleAdvancedTroopSelectionComponent.prototype.updateMergedInventory = function () {
    this._mergedInventory = [];
    for (var e = 0; e < this._originalInventory.length; e++) {
      var t = this._originalInventory[e];
      var i = p.CastleModel.wodData.createVObyWOD(t.wodId, E.CastleWodData.TYPE_UNIT);
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
  CastleAdvancedTroopSelectionComponent.prototype.addUnit = function (e, t) {
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
      var s = p.CastleModel.wodData.createVObyWOD(e, E.CastleWodData.TYPE_UNIT);
      s.inventoryAmount = t;
      this._mergedInventory.push(s);
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.addToMergedInventory = function (e, t) {
    this.addUnit(e, t);
    this.resetLists();
    this.showCurrentList(this.currentList.currentStartIndex);
  };
  CastleAdvancedTroopSelectionComponent.prototype.sortInventory = function () {
    if (this._mergedInventory.length != 0) {
      if (this._currentUnitCategory == u.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
        this._mergedInventory.sort(O.ClientConstSort.sortByUnitSortOrder);
      } else {
        switch (this._currentFightDialogType) {
          case CastleAdvancedTroopSelectionComponent.TYPE_ATTACK:
            this._mergedInventory.sort(O.ClientConstSort.sortByUnitAttackPower);
            break;
          case CastleAdvancedTroopSelectionComponent.TYPE_STATION:
            this._mergedInventory.sort(O.ClientConstSort.sortByUnitPower);
            break;
          case CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT:
            this._mergedInventory.sort(O.ClientConstSort.sortByUnitDefencePower);
        }
      }
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.resetLists = function () {
    this._unitScrollList.componentDisp.visible = false;
    this._toolScrollList.componentDisp.visible = false;
    this._unitScrollList.clear();
    this._toolScrollList.clear();
    this._unitScrollList.removeEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._toolScrollList.removeEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this._unitScrollList.removeEventListener(d.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
    this._toolScrollList.removeEventListener(d.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  CastleAdvancedTroopSelectionComponent.prototype.showCurrentList = function (e = 0) {
    g.CastleComponent.textFieldManager.registerTextField(this._disp.txt_title, new l.LocalizedTextVO(this.currentHeader));
    this.currentList.componentDisp.visible = true;
    var t = 0;
    if (this._mergedInventory != null) {
      for (var i = 0, n = this._mergedInventory; i < n.length; i++) {
        var a = n[i];
        if (a !== undefined) {
          t = c.int(this._fightItemContainer.getTotalAmountOfUntit(a));
          var s = this.getPossibleSlots(a);
          var r = c.int(Math.min(this.getMaximumSpace(a), this._fightItemContainer.freeItems, this.getFreeSpaceFromPossibleSlots(a, s)));
          this.currentList.pushContent(new D.CastleAdvancedTroopSelectionScrollItemVO(a, t, this._sourceArea, this._currentFightDialogType, s, r));
        }
      }
    }
    this.currentList.initList(e);
    this.currentList.addEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.currentList.addEventListener(d.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  CastleAdvancedTroopSelectionComponent.prototype.getPossibleSlots = function (e) {
    var t = this.currentCapPerSlot;
    var i = [];
    var n = [];
    var o = this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE && (this._fightItemContainer.getTotalAmountOfUntit(e) > 0 || this._fightItemContainer.hasFreeSlotsForUnit(e));
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
  CastleAdvancedTroopSelectionComponent.prototype.getMaximumSpace = function (e) {
    var t = c.int(Number.MAX_VALUE);
    if (s.instanceOfClass(e, "ToolUnitVO")) {
      var i = e;
      if (i.hasLimitedAmountPerWave && this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_ATTACK) {
        t = c.int(this._parentFightDialog.isMaxAmountPerWaveReached(i) ? 0 : i.amountPerWave);
      }
    }
    return Math.min(this._fightItemContainer.freeItems, t);
  };
  CastleAdvancedTroopSelectionComponent.prototype.getFreeSpaceFromPossibleSlots = function (e, t) {
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
            if (!s.isFree() && this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
              break;
            }
          }
        }
      }
    }
    return i;
  };
  CastleAdvancedTroopSelectionComponent.prototype.adjustListHeight = function () {
    if (this.isScaleAble()) {
      var e = c.int(Math.max(0, this.currentList.itemsVisibleAtOnce - Math.max(this.currentList.voList.length, CastleAdvancedTroopSelectionComponent.MIN_LISTITEMS)));
      this._disp.y = this.originalY + e * this.offsetPerItem;
      this._disp.bg.height = this.originalHeight - e * this.offsetPerItem;
      if (a.MobileHelper.isScreenTooSmall()) {
        this._disp.scaleX = this._disp.scaleY = 1.7;
        this._disp.y += 40;
      }
    }
  };
  CastleAdvancedTroopSelectionComponent.prototype.onScrollItemClick = function (e) {
    if (h.ButtonHelper.isButtonEnabled(e.target)) {
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
  CastleAdvancedTroopSelectionComponent.prototype.onUnitSelectionChanged = function (e) {
    var t = e.scrollItem.troopSelectionScrollItemVO;
    this._selectionStrategy.changeAmount(t.unitVO, t.selectedAmount, this._fightItemContainer, t.possibleSlots, this._parentFightDialog.bindFunction(this._parentFightDialog.changeItemAmount));
    this.updateLimits();
  };
  CastleAdvancedTroopSelectionComponent.prototype.updateLimits = function () {
    for (var e = 0, t = this.currentList.voList; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        i.possibleSlots = this.getPossibleSlots(i.unitVO);
        var n = c.int(Math.min(this.getMaximumSpace(i.unitVO), this.getFreeSpaceFromPossibleSlots(i.unitVO, i.possibleSlots)));
        i.freeUnitSpace = n;
      }
    }
    this.currentList.removeEventListener(d.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
    this.currentList.updateLimits();
    this.currentList.addEventListener(d.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  CastleAdvancedTroopSelectionComponent.prototype.hide = function () {
    this._disp.visible = false;
    this.currentList.removeEventListener(o.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
    this.currentList.removeEventListener(d.CastleAdvancedTroopSelectionEvent.UNIT_SELECTION_CHANGED, this.bindFunction(this.onUnitSelectionChanged));
  };
  CastleAdvancedTroopSelectionComponent.prototype.getCurrentStrategy = function () {
    if (this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
      return new _.AdvancedTroopSelectionDefenceStrategy();
    } else if (this._currentUnitCategory == u.ClientConstCastle.UNIT_CATEGORY_TOOLS) {
      return new m.AdvancedTroopSelectionToolStrategy();
    } else {
      return new C.AdvancedTroopSelectionDefaultStrategy();
    }
  };
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "currentList", {
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
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "currentHeader", {
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
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "currentCapPerSlot", {
    get: function () {
      if (this._currentFightDialogType == CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE) {
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
  CastleAdvancedTroopSelectionComponent.prototype.isScaleAble = function () {
    return true;
  };
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAdvancedTroopSelectionComponent.prototype, "currentUnitCategory", {
    get: function () {
      return this._currentUnitCategory;
    },
    enumerable: true,
    configurable: true
  });
  CastleAdvancedTroopSelectionComponent.prototype.isListEmpty = function () {
    return !!this.currentList && this.currentList.voList.length == 0;
  };
  CastleAdvancedTroopSelectionComponent.TYPE_ATTACK = 0;
  CastleAdvancedTroopSelectionComponent.TYPE_DEFENCE = 1;
  CastleAdvancedTroopSelectionComponent.TYPE_STATION = 2;
  CastleAdvancedTroopSelectionComponent.TYPE_SUPPORT = 3;
  CastleAdvancedTroopSelectionComponent.MIN_LISTITEMS = 3;
  return CastleAdvancedTroopSelectionComponent;
}(g.CastleComponent);
exports.CastleAdvancedTroopSelectionComponent = f;
var O = require("./75.js");
var E = require("./56.js");
var y = require("./898.js");
var b = require("./2178.js");
var D = require("./1248.js");
var I = require("./900.js");
a.classImplementsInterfaces(f, "ICollectableRendererList");