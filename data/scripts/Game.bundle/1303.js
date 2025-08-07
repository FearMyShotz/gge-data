Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./119.js");
var r = require("./32.js");
var l = require("./15.js");
var c = require("./4.js");
var u = require("./73.js");
var d = require("./1304.js");
var p = require("./923.js");
var h = require("./1306.js");
var g = function (e) {
  function EquipmentFilterView(t, i, n, o = null, a = null) {
    var s = e.call(this, t, i, n) || this;
    s._eqFilterPanel = o;
    s._filteredInventory = s.getFilteredInventory();
    s._getCurrentLordCallback = a;
    return s;
  }
  n.__extends(EquipmentFilterView, e);
  EquipmentFilterView.prototype.fillScrollListData = function (e) {
    e.scrollItemClass = d.EquipmentScrollItem;
    this.populateScrollList(e);
  };
  EquipmentFilterView.prototype.triggerLightUpdate = function () {
    this._filteredInventory = this.getFilteredInventory();
    this.informAboutChange();
  };
  EquipmentFilterView.prototype.populateScrollList = function (e) {
    for (var t = 0; t < this._filteredInventory.length; t++) {
      var i = new p.EquipmentScrollItemVO();
      i.equipmentVO = this._filteredInventory[t];
      i.getCurrentLordCallback = this._getCurrentLordCallback;
      if (e) {
        e.pushContent(i);
      }
    }
  };
  EquipmentFilterView.prototype.getFilteredInventory = function () {
    var e = c.CastleModel.equipData.playerInventory.filter(this.bindFunction(this.applyFilterAndExcludeHidden));
    this.sortInventory(e);
    if (this._eqFilterPanel) {
      return this._eqFilterPanel.filter(e);
    } else {
      return e;
    }
  };
  EquipmentFilterView.prototype.applyFilterAndExcludeHidden = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    return !!this.filter(e);
  };
  EquipmentFilterView.prototype.sortInventory = function (e) {
    o.VectorSortHelper.sort(e, C.ClientConstSort.sortByRarityAndEnchantment);
  };
  EquipmentFilterView.prototype.addListeners = function () {
    e.prototype.addListeners.call(this);
    l.CastleBasicController.getInstance().addEventListener(s.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    if (this._eqFilterPanel) {
      this._eqFilterPanel.changed.add(this.bindFunction(this.onEQFilterChanged));
      this._eqFilterPanel.changed.dispatch();
    }
  };
  EquipmentFilterView.prototype.removeListeners = function () {
    e.prototype.removeListeners.call(this);
    l.CastleBasicController.getInstance().removeEventListener(s.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    if (this._eqFilterPanel) {
      this._eqFilterPanel.changed.remove(this.bindFunction(this.onEQFilterChanged));
    }
  };
  EquipmentFilterView.prototype.onInventoryUpdated = function (e) {
    this._filteredInventory = this.getFilteredInventory();
    this.informAboutChange();
  };
  EquipmentFilterView.prototype.onCastleListUpdated = function (e) {
    l.CastleBasicController.getInstance().removeEventListener(r.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdated));
  };
  EquipmentFilterView.prototype.showToolTip = function (e, t) {
    u.EquipmentIconHelper.showToolTip(e, t.equipmentVO);
  };
  Object.defineProperty(EquipmentFilterView.prototype, "slotClass", {
    get: function () {
      return a.getDefinitionByName("CastleEquipment_Item_Z");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.AEquipableFilterView.prototype, "slotClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EquipmentFilterView.prototype.matches = function (e, t) {
    return e.equipmentVO.id == t.id;
  };
  Object.defineProperty(EquipmentFilterView.prototype, "filteredInventory", {
    get: function () {
      return this._filteredInventory;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentFilterView.prototype.onEQFilterChanged = function () {
    if (this._eqFilterPanel) {
      if (c.CastleModel.equipData.playerInventory.filter(this.bindFunction(this.applyFilterAndExcludeHidden)).length > 0 && this.getFilteredInventory().length == 0) {
        this._eqFilterPanel.showEmptyFilterMC();
      } else {
        this._eqFilterPanel.hideEmptyFilterMC();
      }
    }
  };
  return EquipmentFilterView;
}(h.AEquipableFilterView);
exports.EquipmentFilterView = g;
var C = require("./75.js");