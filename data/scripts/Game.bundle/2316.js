Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./16.js");
var a = require("./233.js");
var s = require("./4.js");
var r = require("./127.js");
var l = require("./68.js");
var c = require("./1276.js");
var u = require("./380.js");
var d = require("./1275.js");
var p = require("./9.js");
var h = require("./1278.js");
var g = require("./1279.js");
var C = require("./1302.js");
var _ = require("./1.js");
var m = require("./714.js");
var f = require("./353.js");
var O = function (e) {
  function EquipmentGemClickHandler(t) {
    return e.call(this, t) || this;
  }
  n.__extends(EquipmentGemClickHandler, e);
  EquipmentGemClickHandler.prototype.init = function () {
    e.prototype.init.call(this);
    this.setStorageWarning();
    this.setAddStorageBtn();
    this.equipmentScreen.dialogDisp.mc_equipmentList.mc_storageSpace.icon.gotoAndStop(2);
    this.controller.addEventListener(a.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
    this.equipmentScreen.eqFilterPanel.hide();
  };
  EquipmentGemClickHandler.prototype.onInventorySpaceChanged = function (e) {
    this.setStorageWarning();
    this.setAddStorageBtn();
  };
  EquipmentGemClickHandler.prototype.setStorageWarning = function () {
    this.dialogDisp.mc_storageWarning.toolTipText = "allyforge_tooltip_inventoryFull_gems";
    this.dialogDisp.mc_storageWarning.visible = s.CastleModel.gemData.isInventoryFull;
    this.equipmentScreen.itxt_storage.textContentVO.textReplacements = [s.CastleModel.gemData.filledInventorySpace, s.CastleModel.gemData.playerTotalInventorySpace];
    this.equipmentScreen.itxt_storage.color = s.CastleModel.gemData.isInventoryFull ? o.ClientConstColor.FONT_INSUFFICIENT_COLOR : o.ClientConstColor.FONT_DEFAULT_COLOR;
    this.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_gemSpace_tooltip";
  };
  EquipmentGemClickHandler.prototype.dispose = function () {
    this.controller.removeEventListener(a.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
  };
  EquipmentGemClickHandler.prototype.updateInventory = function () {
    this._inventory.update();
  };
  EquipmentGemClickHandler.prototype.handleInventoryEntryClick = function (e) {
    if (this._canDrag) {
      var t = e.scrollItem.scrollItemVO.gemVO;
      if (this.dragMovement) {
        if (e.scrollItem.scrollItemVO) {
          this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY));
          this.startGemDrag(new C.GemDragMovement(t, new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY)));
        } else {
          this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY));
        }
      } else {
        this.startGemDrag(new C.GemDragMovement(t, new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  EquipmentGemClickHandler.prototype.handleInventoryEntryTouchDragStart = function (e) {
    var t = e.scrollItem.scrollItemVO && e.scrollItem.scrollItemVO.gemVO;
    if (t && !this.dragMovement) {
      this.startGemDrag(new C.GemDragMovement(t, new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY)));
      this.checkForFittingSlots();
    }
  };
  EquipmentGemClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (t) {
    if (this.dragMovement) {
      if (t.originEvent) {
        var i = t.originEvent.target.stage.getObjectUnderPoint(t.originEvent.rawX, t.originEvent.rawY, 0);
        if (i.parent === this.dialogDisp.saleSlot) {
          t.originEvent.target = i.parent;
          e.prototype.handleDialogClick.call(this, t.originEvent);
          return;
        }
        var n = i.parent && i.parent.parent;
        if (n) {
          switch (n) {
            case this.dialogDisp.slot0:
            case this.dialogDisp.slot1:
            case this.dialogDisp.slot2:
            case this.dialogDisp.slot3:
            case this.dialogDisp.slot4:
            case this.dialogDisp.slot5:
              this.handleSlotClick(n);
          }
        }
      }
      this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  EquipmentGemClickHandler.prototype.handleInventoryClick = function (e) {
    if (this.dragMovement && e.target.parent == this.dialogDisp.mc_equipmentList && instanceOf(e.target, "Bitmap")) {
      this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  EquipmentGemClickHandler.prototype.handleDialogClick = function (t) {
    e.prototype.handleDialogClick.call(this, t);
    if (this.dragMovement) {
      this.checkForFittingSlots();
    }
    switch (t.target) {
      case this.dialogDisp.mc_equipmentList.tab0:
      case this.dialogDisp.mc_equipmentList.tab1:
      case this.dialogDisp.mc_equipmentList.tab2:
      case this.dialogDisp.mc_equipmentList.tab3:
      case this.dialogDisp.mc_equipmentList.tab4:
      case this.dialogDisp.mc_equipmentList.tab5:
      case this.dialogDisp.mc_equipmentList.tab6:
        this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY));
    }
    if (!_.instanceOfClass(t.target, "EquipmentGemSocket") && this.hasMCParentOfSlot(t.target)) {
      this.handleSlotClick(this.hasMCParentOfSlot(t.target));
    }
  };
  EquipmentGemClickHandler.prototype.hasMCParentOfSlot = function (e) {
    if (!e || !e.parent) {
      return null;
    }
    for (var t = 0; t < 6; t++) {
      if ((e.parent == this.dialogDisp["slot" + t] || e["slot" + t]) && e != this.dialogDisp) {
        return this.dialogDisp["slot" + t];
      }
    }
    return this.hasMCParentOfSlot(e.parent);
  };
  EquipmentGemClickHandler.prototype.handleSlotClick = function (e) {
    if (this.equipmentScreen.currentLord.isAvailableForEquip) {
      if (this._canDrag) {
        if (!this.isEmptySlot(e)) {
          if (this.dragMovement && this.isDragActionRelicAllowed) {
            if (e.slotVO.slotType != r.BasicEquippableVO.SLOT_TYPE_HERO && !!e.slotVO.equipmentVO.canSlotGem && (this.dragMovement.draggedGemVO.slotType == r.BasicEquippableVO.SLOT_TYPE_ALL || this.dragMovement.draggedGemVO.slotType == e.slotVO.slotType) && (!_.instanceOfClass(this.dragMovement.draggedEquipableVO, "RelicGemVO") || !e.slotVO.equipmentVO || !!_.instanceOfClass(e.slotVO.equipmentVO, "RelicEquipmentVO"))) {
              this.lastAddedGemSlot = e;
              this.addGemToEquipment(this.dragMovement.draggedGemVO, e.slotVO, this.equipmentScreen.currentLord);
            }
          } else if (!this.dragMovement) {
            d.EquipmentDialogClickHandler.targetSlot = e;
            this._inventory.currentFilterIndex = m.CastleEquipmentSublayer.FILTER_MAP.get(e.slotVO.equipmentVO.slotType);
          }
        }
      } else {
        this.markAsFavorite(e);
      }
    }
  };
  EquipmentGemClickHandler.prototype.markAsFavorite = function (e) {
    if (e.slotVO.equipmentVO) {
      e.slotVO.equipmentVO.isFavorite = !e.slotVO.equipmentVO.isFavorite;
      e.favoriteDisp.disp.mc_star_active.visible = e.slotVO.equipmentVO.isFavorite;
      e.favoriteDisp.disp.mc_star_inactive.visible = !e.slotVO.equipmentVO.isFavorite;
      f.CastleEquipmentFavoritesMicroservice.Instance.gemItemUpdatedSignal.dispatch(e.slotVO.equipmentVO);
    }
  };
  EquipmentGemClickHandler.prototype.startGemDrag = function (e) {
    this.dragMovement = e;
    this.dragMovement.startDrag();
    this.updateDialog();
    this.tabChangeAllowed = false;
  };
  EquipmentGemClickHandler.prototype.endDrag = function (t, i = null) {
    if (this.dragMovement) {
      this.lastDragMovement = this.dragMovement;
    }
    e.prototype.endDrag.call(this, t, i);
  };
  EquipmentGemClickHandler.prototype.addGemToEquipment = function (e, t, i) {
    this.clearDrag();
    if (t.equipmentVO.gemVO) {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(g.CastleReplaceSocketDialog, new c.CastleSocketDialogProperties(e, t.equipmentVO.gemVO, t.equipmentVO, i.id, this.bindFunction(this.onInsertGemSuccess), this.bindFunction(this.onInsertGemAbort)));
    } else {
      p.CastleDialogHandler.getInstance().registerDefaultDialogs(h.CastleNewSocketDialog, new c.CastleSocketDialogProperties(e, null, t.equipmentVO, i.id, this.bindFunction(this.onInsertGemSuccess), this.bindFunction(this.onInsertGemAbort)));
    }
  };
  EquipmentGemClickHandler.prototype.updateDialog = function () {
    this._inventory.update();
    this.checkForFittingSlots();
    this.updateSlotTooltip();
    this.updateSlotMouseChildren();
    this.setStorageWarning();
  };
  EquipmentGemClickHandler.prototype.checkForFittingSlots = function () {
    if (this.equipmentScreen.currentLord.isAvailableForEquip) {
      for (var e in this.equipmentScreen.allSlotsOnScreen) {
        var t = this.equipmentScreen.allSlotsOnScreen[e];
        if (t !== undefined) {
          var i = t.slotVO;
          if (this.dragMovement && this.dragMovement.draggedGemVO) {
            if (this.isDragActionRelicAllowed) {
              if (this._dragMovement && _.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicGemVO") && i.equipmentVO && !_.instanceOfClass(i.equipmentVO, "RelicEquipmentVO")) {
                t.mc_lock.visible = true;
                t.mc_bgEmpty.filters = l.BitmapFilterHelper.NO_FILTER;
              } else if (i.equipmentVO && i.slotType != r.BasicEquippableVO.SLOT_TYPE_HERO && i.equipmentVO.canSlotGem && (this.dragMovement.draggedGemVO.slotType == r.BasicEquippableVO.SLOT_TYPE_ALL || this.dragMovement.draggedGemVO.slotType == i.slotType)) {
                t.mc_lock.visible = false;
                t.mc_bg.allowFastGlow = false;
                t.mc_bg.useFilters(l.BitmapFilterHelper.FILTER_GLOW_ENABLED_GEM_SLOT, false, 1);
              } else {
                t.mc_lock.visible = i.isFree || !i.isFree && i.slotType == r.BasicEquippableVO.SLOT_TYPE_HERO || !i.equipmentVO.canSlotGem;
                t.mc_bg.useFilters(l.BitmapFilterHelper.NO_FILTER);
              }
            } else {
              t.mc_lock.visible = true;
              t.mc_bgEmpty.filters = l.BitmapFilterHelper.NO_FILTER;
            }
          } else {
            t.mc_lock.visible = false;
            t.mc_bg.useFilters(l.BitmapFilterHelper.NO_FILTER);
          }
        }
      }
    }
  };
  EquipmentGemClickHandler.prototype.hideDialog = function () {
    this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY));
  };
  EquipmentGemClickHandler.prototype.onInsertGemAbort = function () {
    this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_INVENTORY));
  };
  EquipmentGemClickHandler.prototype.onInsertGemSuccess = function () {
    this.lastAddedGemSlot.mc_anim.gotoAndPlay(2);
    this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_SLOT));
    s.CastleModel.equipData.handleGemInserted(this.lastDragMovement.draggedGemVO);
  };
  EquipmentGemClickHandler.prototype.confirmSellCallback = function (e = false) {
    if (this.dragMovement) {
      s.CastleModel.gemData.sell(this.dragMovement.draggedGemVO);
    } else {
      s.CastleModel.gemData.sell(this.lastDragMovement.draggedGemVO);
    }
    this.endDrag(new u.EquipableDragLocationVO(u.EquipableDragLocationVO.TYPE_SELL_SLOT));
  };
  Object.defineProperty(EquipmentGemClickHandler.prototype, "dragMovement", {
    get: function () {
      return this._dragMovement;
    },
    set: function (e) {
      this._dragMovement = e;
    },
    enumerable: true,
    configurable: true
  });
  return EquipmentGemClickHandler;
}(d.EquipmentDialogClickHandler);
exports.EquipmentGemClickHandler = O;