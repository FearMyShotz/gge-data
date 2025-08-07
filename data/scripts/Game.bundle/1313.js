Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./3.js");
var a = require("./69.js");
var s = require("./8.js");
var r = require("./380.js");
var l = function (e) {
  function CraftingDialogClickHandler(t) {
    var i = this;
    i._isLocked = false;
    i.isWaitingForServerMessage = false;
    i._craftingStarted = false;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).craftingDialog = t;
    return i;
  }
  n.__extends(CraftingDialogClickHandler, e);
  CraftingDialogClickHandler.prototype.handleDialogClick = function (e) {
    if (this.tabChangeAllowed) {
      switch (e.target) {
        case this.craftingDisp.btn_backToEquip:
          this.craftingDialog.hide();
          c.CastleDialogHandler.getInstance().registerDefaultDialogs(u.CastleEquipmentDialog);
          break;
        case this.craftingDisp.btn_help:
          c.CastleDialogHandler.getInstance().showHelper("", o.Localize.text(this.helpTextId));
          break;
        case this.craftingDisp.btn_close:
          this.craftingDialog.hide();
          break;
        case this.craftingDisp.mc_equipmentList.tab0:
        case this.craftingDisp.mc_equipmentList.tab1:
        case this.craftingDisp.mc_equipmentList.tab2:
        case this.craftingDisp.mc_equipmentList.tab3:
          var t = e.target.name;
          var i = parseInt(t.charAt(t.length - 1));
          this._inventory.currentFilterIndex = i;
          this.craftingDialog.lastFilter = this._inventory.currentFilterIndex;
      }
    }
  };
  Object.defineProperty(CraftingDialogClickHandler.prototype, "helpTextId", {
    get: function () {
      throw new a.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  CraftingDialogClickHandler.prototype.handleInventoryClick = function (e) {
    if (s.ButtonHelper.isButtonEnabled(e.target) && this.tabChangeAllowed) {
      switch (e.target) {
        case this.inventoryDisp.tab0:
          if (this._inventory.currentFilterIndex == d.CastleCraftingSublayer.FILTER_GEM) {
            this._inventory.currentClickHandler.resetCrafting();
          }
          this._inventory.currentFilterIndex = d.CastleCraftingSublayer.FILTER_ALL;
          break;
        case this.inventoryDisp.tab1:
          if (this._inventory.currentFilterIndex == d.CastleCraftingSublayer.FILTER_GEM) {
            this._inventory.currentClickHandler.resetCrafting();
          }
          this._inventory.currentFilterIndex = d.CastleCraftingSublayer.FILTER_GENERAL;
          break;
        case this.inventoryDisp.tab2:
          if (this._inventory.currentFilterIndex == d.CastleCraftingSublayer.FILTER_GEM) {
            this._inventory.currentClickHandler.resetCrafting();
          }
          this._inventory.currentFilterIndex = d.CastleCraftingSublayer.FILTER_BARON;
          break;
        case this.inventoryDisp.tab3:
          if (this._inventory.currentFilterIndex != d.CastleCraftingSublayer.FILTER_GEM) {
            this._inventory.currentClickHandler.resetCrafting();
          }
          this._inventory.currentFilterIndex = d.CastleCraftingSublayer.FILTER_GEM;
      }
    }
  };
  CraftingDialogClickHandler.prototype.cancelDragMovement = function () {
    if (this._dragMovement && this._dragMovement.sourceSlotMC && this.isEmptySlot(this._dragMovement.sourceSlotMC)) {
      this.endDrag(new r.EquipableDragLocationVO(this._dragMovement.sourceLocation.locationType, this._dragMovement.sourceLocation.lordID), this._dragMovement.sourceSlotMC);
    } else {
      this.endDrag(new r.EquipableDragLocationVO(r.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  CraftingDialogClickHandler.prototype.endDrag = function (e, t = null) {
    throw new a.AbstractMethodError();
  };
  CraftingDialogClickHandler.prototype.isEmptySlot = function (e) {
    throw new a.AbstractMethodError();
  };
  Object.defineProperty(CraftingDialogClickHandler.prototype, "craftingDisp", {
    get: function () {
      return this.craftingDialog.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CraftingDialogClickHandler;
}(require("./1277.js").AEquipableClickHandler);
exports.CraftingDialogClickHandler = l;
var c = require("./9.js");
var u = require("./246.js");
var d = require("./925.js");