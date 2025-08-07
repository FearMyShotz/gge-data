Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./1463.js");
var l = require("./4.js");
var c = function (e) {
  function ConstructionItemsInteractionData() {
    var t = e.call(this) || this;
    t.ITEM_FILTERS = [u.ConstructionItemData.ALL_SLOTS, a.ConstructionItemConst.PRIMARY_SLOT_TYPE, a.ConstructionItemConst.APPEARANCE_SLOT_TYPE, a.ConstructionItemConst.SECONDARY_SLOT_TYPE];
    t._currentItemFilter = 0;
    t._filterBuildingGroundType = "";
    t._filterConstructionItemEffectAmount = 0;
    t._filterConstructionItemRarity = -1;
    t._draggedItemGroupEffectAmount = 0;
    t._draggedItem = null;
    t._selectedSlot = null;
    t._currentItemFilter = s.int(u.ConstructionItemData.ALL_SLOTS);
    return t;
  }
  n.__extends(ConstructionItemsInteractionData, e);
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "draggedItem", {
    get: function () {
      return this._draggedItem;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.setDraggedItem = function (e, t = true) {
    this._draggedItem = e;
    if (this.draggedItem) {
      this._selectedSlot = null;
      if (this.selectedBuilding && this.selectedBuilding.constructionItemGroupIds.indexOf(this.draggedItem.constructionItemVO.groupId) == -1) {
        this._selectedBuilding = null;
      }
      this._draggedItemGroupEffectAmount = s.int(l.CastleModel.areaData.activeConstructionItems.getConstructionItemGroupEffectAmount(this.draggedItem.constructionItemVO.effectGroupId));
      this._draggedItemUpgradeRecipe = this.draggedItem.constructionItemVO.upgradeRecipe;
    } else {
      this._draggedItemGroupEffectAmount = 0;
      this._draggedItemUpgradeRecipe = null;
    }
    if (t) {
      this.dispatchUpdate();
    }
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "selectedBuilding", {
    get: function () {
      return this._selectedBuilding;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.setSelectedBuilding = function (e, t = true) {
    this._selectedBuilding = this._selectedBuilding != e ? e : null;
    this._selectedSlot = null;
    if (t) {
      this.dispatchUpdate();
    }
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "selectedSlot", {
    get: function () {
      return this._selectedSlot;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.setSelectedSlot = function (e, t = true) {
    this._selectedSlot = this._selectedSlot && e && this._selectedSlot.equals(e) ? null : e;
    this._currentItemFilter = s.int(this._selectedSlot ? this.selectedSlot.slotType : this._currentItemFilter);
    if (t) {
      this.dispatchUpdate();
    }
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "currentItemFilter", {
    get: function () {
      return this._currentItemFilter;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.setCurrentItemFilter = function (e, t = true) {
    this._currentItemFilter = e;
    if (t) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.isSlotLockedForDrop = function (e, t) {
    return !!this.draggedItem && this.draggedItem.constructionItemVO.slotType != e.slotType || this.isSlotLockedByAreaLimit(e, t);
  };
  ConstructionItemsInteractionData.prototype.isSlotLockedByAreaLimit = function (e, t) {
    return !!this.draggedItem && (!t || !!t && t.effectGroupId != this.draggedItem.constructionItemVO.effectGroupId) && this.isEffectGroupAreaLimitReached;
  };
  ConstructionItemsInteractionData.prototype.triggerUpdate = function () {
    this.dispatchUpdate();
  };
  ConstructionItemsInteractionData.prototype.setFilterBuildingGroundType = function (e, t = true) {
    if (e && this.selectedBuilding && this.selectedBuilding.buildingGroundType != e) {
      this.setSelectedBuilding(null, false);
    }
    this._filterBuildingGroundType = e;
    if (this.filterBuildingType && this.filterBuildingGroundType && this.filterBuildingType.buildingGroundType != this.filterBuildingGroundType) {
      this.setFilterBuildingType(null, false);
    }
    if (t) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.setFilterBuildingType = function (e, t = true) {
    if (e && this.selectedBuilding && this.selectedBuilding.name != e.name) {
      this.setSelectedBuilding(null, false);
    }
    this._filterBuildingType = e;
    if (t) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.setFilterExpiredOnly = function (e, t = true) {
    if (e && this.selectedBuilding && !this.hasBuildingExpired(this.selectedBuilding.objectId)) {
      this.setSelectedBuilding(null, false);
    }
    this._filterExpiredOnly = e;
    if (t) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.setFilterConstructionItemEffectAmount = function (e, t = true) {
    this._filterConstructionItemEffectAmount = e;
    if (t) {
      this.dispatchUpdate();
    }
  };
  ConstructionItemsInteractionData.prototype.setFilterConstructionItemRarity = function (e, t = true) {
    this._filterConstructionItemRarity = e;
    if (t) {
      this.dispatchUpdate();
    }
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterBuildingGroundType", {
    get: function () {
      return this._filterBuildingGroundType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterBuildingType", {
    get: function () {
      return this._filterBuildingType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterExpiredOnly", {
    get: function () {
      return this._filterExpiredOnly;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterConstructionItemEffectAmount", {
    get: function () {
      return this._filterConstructionItemEffectAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "filterConstructionItemRarity", {
    get: function () {
      return this._filterConstructionItemRarity;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "draggedItemGroupEffectAmount", {
    get: function () {
      return this._draggedItemGroupEffectAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "isEffectGroupAreaLimitReached", {
    get: function () {
      return !!this.draggedItem && this.draggedItem.constructionItemVO.areaLimit <= this.draggedItemGroupEffectAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "draggedItemUpgradeRecipe", {
    get: function () {
      return this._draggedItemUpgradeRecipe;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemsInteractionData.prototype.hasBuildingExpired = function (e) {
    return !!this.expiredAreaVO && this.expiredAreaVO.hasBuildingExpired(e);
  };
  Object.defineProperty(ConstructionItemsInteractionData.prototype, "expiredAreaVO", {
    get: function () {
      return l.CastleModel.constructionItemData.getExpiredAreaVO(l.CastleModel.areaData.activeAreaInfo);
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemsInteractionData;
}(r.AModel);
exports.ConstructionItemsInteractionData = c;
var u = require("./623.js");
o.classImplementsInterfaces(c, "IModel");