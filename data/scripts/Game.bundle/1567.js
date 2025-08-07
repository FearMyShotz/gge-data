Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./18.js");
var c = require("./58.js");
var u = require("./39.js");
var d = require("./2945.js");
var p = require("./621.js");
var h = require("./4.js");
var g = require("./197.js");
var C = require("./458.js");
var _ = require("./758.js");
var m = function (e) {
  function UnitBuildListComponent(t, i) {
    var n = this;
    n.previousLastUsedSlot = -1;
    n._preventNextDynamicPreselection = false;
    n._activeSlotIndex = 0;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t, i, 5) || this).category = l.ClientConstCastle.UNIT_CATEGORY_SOLDIERS;
    return n;
  }
  n.__extends(UnitBuildListComponent, e);
  UnitBuildListComponent.prototype.createBuildListItem = function () {
    return new E.UnitBuildListItem(new Library.CastleInterfaceElements.RecruitListItem());
  };
  UnitBuildListComponent.prototype.initBuildListItem = function (t) {
    e.prototype.initBuildListItem.call(this, t);
    t.initItem();
  };
  UnitBuildListComponent.prototype.setCategory = function (e) {
    this.category = e;
  };
  UnitBuildListComponent.prototype.getCategory = function () {
    return this.category;
  };
  UnitBuildListComponent.prototype.isCategorySoldier = function () {
    return this.category == l.ClientConstCastle.UNIT_CATEGORY_SOLDIERS || this.category == l.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES;
  };
  UnitBuildListComponent.prototype.setItemTooltip = function (e) {
    e.disp.toolTipText = null;
    if (e.slotVO.isLocked) {
      if (e.isAvailable) {
        e.disp.toolTipText = this.isCategorySoldier() ? "dialog_recuit_recruitSlot" : "dialog_recuit_productionSlot";
      } else {
        e.disp.toolTipText = u.ClientConstTextIds.NOT_AVAILABLE;
      }
    } else if (e.slotVO.isFree) {
      if (e.slotVO.isAlwaysUnlocked) {
        e.disp.toolTipText = "recruitSlot_available";
      } else {
        e.disp.toolTipText = "remaining_renttime_slot" + g.CastleToolTipManager.ID_PARAM_SEPERATOR + [o.TimeStringHelper.getTimeToString(e.slotVO.remainingUnlockTimeInSeconds, o.TimeStringHelper.TWO_TIME_FORMAT, s.Localize.text)].toString();
      }
    } else if (e.slotVO.isCurrentlyRecruiting) {
      var t = this.isCategorySoldier() ? "recruitSlot_occupied" : "productionSlot_occupied";
      e.disp.toolTipText = {
        t: t,
        p: [s.Localize.text(e.slotVO.unitVO.type + "_name")]
      };
    } else {
      var i = this.isCategorySoldier() ? "recruitSlot_occupied_queue" : "productionSlot_occupied_queue";
      e.disp.toolTipText = {
        t: i,
        p: [s.Localize.text(e.slotVO.unitVO.type + "_name")]
      };
    }
  };
  UnitBuildListComponent.prototype.onItemClick = function (t) {
    var i = t.target.bItem;
    if (!i.isLocked && !i.isFree) {
      this.selectedSlot = i.slotVO.pos;
      this._preventNextDynamicPreselection = false;
    }
    e.prototype.onItemClick.call(this, t);
  };
  UnitBuildListComponent.prototype.onItemMouseUp = function (t) {
    if (!!this._selectedDragItem && !this._selectedDragItem.isLocked && !this._selectedDragItem.isFree) {
      this.selectedSlot = this._selectedDragItem.slotVO.pos;
      this._preventNextDynamicPreselection = false;
    }
    e.prototype.onItemMouseUp.call(this, t);
  };
  UnitBuildListComponent.prototype.onItemLockedClick = function (e) {
    if (h.CastleModel.userData.hasLevelFor(c.ClientConstLevelRestrictions.MIN_LEVEL_UNLOCK_RECRUIT_SLOT)) {
      var t = r.int(a.UnitProductionConst.UNLOCK_DURATION);
      var i = o.TimeStringHelper.getTimeToString(t, o.TimeStringHelper.TWO_TIME_FORMAT, s.Localize.text);
      var n = this.isCategorySoldier() ? "dialog_buyslotUnit_copy" : "dialog_buyslotTool_copy";
      f.CastleDialogHandler.getInstance().registerDefaultDialogs(O.CastleBuySlotDialog, new _.CastleCostInfoDialogProperties(h.CastleModel.costsData.getFinalCostsC2(a.UnitProductionConst.UNLOCK_C2), this.bindFunction(this.buySlot), s.Localize.text(n), i, s.Localize.text("help_recuit_slot")));
    }
  };
  UnitBuildListComponent.prototype.buySlot = function (e = null) {
    h.CastleModel.smartfoxClient.sendCommandVO(new p.C2SUnlockPackageSlotVO(this.unitPackageList.listId));
  };
  Object.defineProperty(UnitBuildListComponent.prototype, "unitPackageList", {
    get: function () {
      return this._buildlist;
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListComponent.prototype.isUnitPackageListLoaded = function () {
    return !!this.unitPackageList;
  };
  Object.defineProperty(UnitBuildListComponent.prototype, "isItemDraggable", {
    get: function () {
      return Object.getOwnPropertyDescriptor(C.BasicBuildListComponent.prototype, "isItemDraggable").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.BasicBuildListComponent.prototype, "isItemDraggable").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListComponent.prototype.requestMoveFromServer = function (e) {
    h.CastleModel.smartfoxClient.sendCommandVO(new d.C2SMoveUnitPackageVO(this.unitPackageList.listId, e.oldPos, e.pos));
  };
  UnitBuildListComponent.prototype.onMouseOverItem = function (t) {
    this.setItemTooltip(t.target.bItem);
    e.prototype.onMouseOverItem.call(this, t);
  };
  UnitBuildListComponent.prototype.isCurrentBuildingUnit = function (e) {
    if (!this._items) {
      return false;
    }
    for (var t = 0; t < this._items.length; ++t) {
      if (this._items[t] && !this._items[t].isLocked && this._items[t].unitPackageSlotVO && this._items[t].unitPackageSlotVO.wodId == e && this._items[t].unitPackageSlotVO.remainingTimeInSeconds > 0) {
        return true;
      }
    }
    return false;
  };
  Object.defineProperty(UnitBuildListComponent.prototype, "lastUsedSlotIndex", {
    get: function () {
      return this._buildlist.slotsInUse - 1;
    },
    enumerable: true,
    configurable: true
  });
  UnitBuildListComponent.prototype.fillItems = function (t, i = 0) {
    e.prototype.fillItems.call(this, t, i);
    if (this.lastUsedSlotIndex > 0) {
      var n = this.lastUsedSlotIndex - this.previousLastUsedSlot;
      if (n > 0 || this.selectedSlot == -1) {
        this.selectedSlot = this.lastUsedSlotIndex;
      } else if (!this._preventNextDynamicPreselection) {
        this.selectedSlot = Math.max(this.selectedSlot + n, 0);
      }
    } else {
      this.selectedSlot = this.lastUsedSlotIndex;
    }
    this.previousLastUsedSlot = r.int(this._buildlist ? this.lastUsedSlotIndex : -1);
    this._preventNextDynamicPreselection = false;
  };
  UnitBuildListComponent.prototype.preventNextDynamicPreselection = function () {
    this._preventNextDynamicPreselection = true;
  };
  Object.defineProperty(UnitBuildListComponent.prototype, "activeSlotIndex", {
    set: function (e) {
      if (this._items) {
        this._activeSlotIndex = e;
        for (var t = 0; t < this._items.length; t++) {
          this._items[t].setIcons();
        }
        this.selectedSlot = this._activeSlotIndex;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitBuildListComponent.prototype, "freeSlots", {
    get: function () {
      return this.unitPackageList.numFreeSlots;
    },
    enumerable: true,
    configurable: true
  });
  return UnitBuildListComponent;
}(C.BasicBuildListComponent);
exports.UnitBuildListComponent = m;
var f = require("./9.js");
var O = require("./976.js");
var E = require("./1568.js");