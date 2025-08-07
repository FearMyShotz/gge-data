Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./233.js");
var l = require("./4.js");
var c = require("./2317.js");
var u = require("./1306.js");
var d = function (e) {
  function GemFilterView(t, i, n = null) {
    var o = e.call(this, "", t, i) || this;
    o._gemFilterPanel = n;
    o._filteredInventory = o.getFilteredInventory();
    return o;
  }
  n.__extends(GemFilterView, e);
  Object.defineProperty(GemFilterView.prototype, "tabToolTip", {
    get: function () {
      if (l.CastleModel.userData.userLevel < s.GemConst.MIN_PLAYER_LEVEL_FOR_GEM_DROP) {
        return {
          t: "dialog_gemsLocked_tooltip",
          p: [s.GemConst.MIN_PLAYER_LEVEL_FOR_GEM_DROP]
        };
      } else {
        return "dialog_gems_tooltip";
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AEquipableFilterView.prototype, "tabToolTip").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GemFilterView.prototype.fillScrollListData = function (e) {
    e.scrollItemClass = h.GemScrollItem;
    this.populateScrollList(e);
  };
  GemFilterView.prototype.triggerLightUpdate = function () {
    this._filteredInventory = this.getFilteredInventory();
    this.informAboutChange();
  };
  GemFilterView.prototype.populateScrollList = function (e) {
    for (var t = 0; t < this._filteredInventory.length; t++) {
      var i = new c.GemScrollItemVO();
      i.gemVO = this._filteredInventory[t];
      if (e) {
        e.pushContent(i);
      }
    }
  };
  GemFilterView.prototype.getFilteredInventory = function () {
    var e = l.CastleModel.gemData.playerInventory.filter(this.bindFunction(this.filter)).concat(l.CastleModel.gemData.relicGemsInventory);
    this.sortInventory(e);
    if (this._gemFilterPanel) {
      return this._gemFilterPanel.filter(e);
    } else {
      return e;
    }
  };
  GemFilterView.prototype.sortInventory = function (e) {
    o.VectorSortHelper.sort(e, p.ClientConstSort.sortGemsForCrafting);
  };
  GemFilterView.prototype.addListeners = function () {
    e.prototype.addListeners.call(this);
    l.CastleModel.gemData.addEventListener(r.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventoryUpdated));
    if (this._gemFilterPanel) {
      this._gemFilterPanel.changed.add(this.bindFunction(this.onGemFilterChanged));
      this._gemFilterPanel.changed.dispatch();
    }
  };
  GemFilterView.prototype.removeListeners = function () {
    e.prototype.removeListeners.call(this);
    l.CastleModel.gemData.removeEventListener(r.CastleGemEvent.GEM_INVENTORY_UPDATE, this.bindFunction(this.onInventoryUpdated));
    if (this._gemFilterPanel) {
      this._gemFilterPanel.changed.remove(this.bindFunction(this.onGemFilterChanged));
    }
  };
  GemFilterView.prototype.onInventoryUpdated = function (e) {
    this._filteredInventory = this.getFilteredInventory();
    this.informAboutChange();
  };
  Object.defineProperty(GemFilterView.prototype, "slotClass", {
    get: function () {
      return a.getDefinitionByName("CastleEquipment_Item_Z");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AEquipableFilterView.prototype, "slotClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  GemFilterView.prototype.matches = function (e, t) {
    return e.gemVO == t;
  };
  Object.defineProperty(GemFilterView.prototype, "isTabActive", {
    get: function () {
      return l.CastleModel.userData.userLevel >= s.GemConst.MIN_PLAYER_LEVEL_FOR_GEM_DROP;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AEquipableFilterView.prototype, "isTabActive").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GemFilterView.prototype, "filteredInventory", {
    get: function () {
      return this._filteredInventory;
    },
    enumerable: true,
    configurable: true
  });
  GemFilterView.prototype.onGemFilterChanged = function () {
    if (this._gemFilterPanel) {
      if (l.CastleModel.gemData.playerInventory.concat(l.CastleModel.gemData.relicGemsInventory).filter(this.bindFunction(this.filter)).length > 0 && this.getFilteredInventory().length == 0) {
        this._gemFilterPanel.showEmptyFilterMC();
      } else {
        this._gemFilterPanel.hideEmptyFilterMC();
      }
    }
  };
  return GemFilterView;
}(u.AEquipableFilterView);
exports.GemFilterView = d;
var p = require("./75.js");
var h = require("./2318.js");