Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./1.js");
var l = require("./127.js");
var c = require("./11.js");
var u = require("./1304.js");
var d = require("./924.js");
var p = require("./5.js");
var h = function (e) {
  function ACastleBasicEquipmentDialog(t) {
    var i = this;
    i._currentListPage = 0;
    i._itemListLocked = false;
    CONSTRUCTOR_HACK;
    return i = e.call(this, t) || this;
  }
  n.__extends(ACastleBasicEquipmentDialog, e);
  ACastleBasicEquipmentDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this._currentListPage = 0;
  };
  ACastleBasicEquipmentDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._currentListPage = 0;
  };
  ACastleBasicEquipmentDialog.prototype.initScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.remove();
      for (var e = 0, t = this._itemScrollList.voList; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          this._itemScrollList.removeContent(i);
        }
      }
      this.removeItemListListener();
    }
    this._itemScrollList = new o.ItemScrollList(this.dialogDisp.mc_equipmentList);
    this._itemScrollList.clear();
    this._itemScrollList.scrollItemClass = u.EquipmentScrollItem;
    for (var n = 0; n < this._filteredInventory.length; n++) {
      var a = new d.EquipmentScrollItemVO();
      a.equipmentVO = this._filteredInventory[n];
      a.locked = a.equipmentVO.enchantmentLevel >= p.EquipmentConst.getMaxEnchantmentLevel(a.equipmentVO.visualRareID);
      a.favIconByEQRenderer = this.favIconByEQRenderer;
      this._itemScrollList.pushContent(a);
    }
    if (this._itemScrollList.voList && this._currentListPage * this._itemScrollList.itemsVisibleAtOnce >= this._itemScrollList.voList.length) {
      if (this._currentListPage > 0 && this._currentListPage * this._itemScrollList.itemsVisibleAtOnce % this._itemScrollList.voList.length == 0) {
        this._currentListPage--;
      } else {
        this._currentListPage = 0;
      }
    }
    this._itemScrollList.initList(this._currentListPage * this._itemScrollList.itemsVisibleAtOnce, true);
    this._itemScrollList.scrollStep = this._itemScrollList.itemsVisibleAtOnce;
    if (this._itemListLocked) {
      this._itemScrollList.lockList();
    } else {
      this._itemScrollList.unlockList();
    }
    this.addItemListListener();
  };
  Object.defineProperty(ACastleBasicEquipmentDialog.prototype, "favIconByEQRenderer", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  ACastleBasicEquipmentDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.mc_equipmentList.btn_up:
        this._currentListPage--;
        break;
      case this.dialogDisp.mc_equipmentList.btn_down:
        this._currentListPage++;
    }
  };
  ACastleBasicEquipmentDialog.prototype.addItemListListener = function () {
    if (this._itemScrollList) {
      this._itemScrollList.addEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this._itemScrollList.addEventListener(a.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onScrollItemRollover));
      this._itemScrollList.addEventListener(a.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onScrollItemRollout));
      this._itemScrollList.addEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListScroll));
    }
  };
  ACastleBasicEquipmentDialog.prototype.removeItemListListener = function () {
    if (this._itemScrollList) {
      this._itemScrollList.removeEventListener(a.ScrollItemEvent.CLICK, this.bindFunction(this.onScrollItemClick));
      this._itemScrollList.removeEventListener(a.ScrollItemEvent.ROLL_OVER, this.bindFunction(this.onScrollItemRollover));
      this._itemScrollList.removeEventListener(a.ScrollItemEvent.ROLL_OUT, this.bindFunction(this.onScrollItemRollout));
      this._itemScrollList.addEventListener(a.ScrollItemEvent.ON_SCROLL, this.bindFunction(this.onScrollListScroll));
    }
  };
  ACastleBasicEquipmentDialog.prototype.onScrollListScroll = function (e) {};
  ACastleBasicEquipmentDialog.prototype.onScrollItemClick = function (e) {};
  ACastleBasicEquipmentDialog.prototype.onScrollItemRollover = function (e) {};
  ACastleBasicEquipmentDialog.prototype.onScrollItemRollout = function (e) {};
  ACastleBasicEquipmentDialog.prototype.getFilteredInventory = function (e, t) {
    this._currentSlotFilter = e;
    this._currentLordFilter = t;
    var i = [];
    for (var n = 0; n < this._equipmentInventory.length; n++) {
      var o = this._equipmentInventory[n];
      if (e == l.BasicEquippableVO.SLOT_TYPE_ALL && t == l.BasicEquippableVO.LORD_TYPE_ALL) {
        i.push(o);
      } else if (e == l.BasicEquippableVO.SLOT_TYPE_ALL && o.lordType == t) {
        i.push(o);
      } else if (o.slotType == e && t == l.BasicEquippableVO.LORD_TYPE_ALL) {
        i.push(o);
      } else if (o.slotType == e && o.lordType == t) {
        i.push(o);
      }
    }
    s.VectorSortHelper.sort(i, this.bindFunction(this.sortFunction));
    return i;
  };
  ACastleBasicEquipmentDialog.prototype.sortFunction = function (e, t) {
    if (e.rareID == 0) {
      return -1;
    } else if (t.rareID == 0) {
      return 1;
    } else if (e.rareID > t.rareID) {
      return -1;
    } else if (e.rareID < t.rareID) {
      return 1;
    } else if (e.enchantmentLevel > t.enchantmentLevel) {
      return -1;
    } else if (e.enchantmentLevel < t.enchantmentLevel) {
      return 1;
    } else {
      return 0;
    }
  };
  ACastleBasicEquipmentDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this.removeItemListListener();
  };
  Object.defineProperty(ACastleBasicEquipmentDialog.prototype, "equipmentInventory", {
    get: function () {
      return this._equipmentInventory;
    },
    set: function (e) {
      this._equipmentInventory = e;
    },
    enumerable: true,
    configurable: true
  });
  return ACastleBasicEquipmentDialog;
}(c.CastleExternalDialog);
exports.ACastleBasicEquipmentDialog = h;
r.classImplementsInterfaces(h, "ICollectableRendererList");