Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./16.js");
var l = require("./118.js");
var c = require("./32.js");
var u = require("./4.js");
var d = require("./68.js");
var p = require("./380.js");
var h = require("./1275.js");
var g = require("./1280.js");
var C = require("./716.js");
var _ = createjs.Bitmap;
var m = require("./353.js");
var f = function (e) {
  function EquipmentEquipmentClickHandler(t) {
    return e.call(this, t) || this;
  }
  n.__extends(EquipmentEquipmentClickHandler, e);
  EquipmentEquipmentClickHandler.prototype.init = function () {
    e.prototype.init.call(this);
    if (h.EquipmentDialogClickHandler.targetSlot && h.EquipmentDialogClickHandler.targetSlot.slotVO.equipmentVO) {
      this.startDrag(new g.EquipmentDragMovement(h.EquipmentDialogClickHandler.targetSlot.slotVO.equipmentVO, new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_SLOT, this.equipmentScreen.currentLord.id), h.EquipmentDialogClickHandler.targetSlot));
      this.controller.addEventListener(l.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
      this.controller.addEventListener(l.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
      h.EquipmentDialogClickHandler.targetSlot.mc_anim.gotoAndStop(1);
      h.EquipmentDialogClickHandler.targetSlot = null;
    }
    this.setStorageWarning();
    this.setAddStorageBtn();
    this.equipmentScreen.dialogDisp.mc_equipmentList.mc_storageSpace.icon.gotoAndStop(1);
    this.controller.addEventListener(l.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
    this.equipmentScreen.gemFilterPanel.hide();
  };
  EquipmentEquipmentClickHandler.prototype.onInventorySpaceChanged = function (e) {
    this.setStorageWarning();
    this.setAddStorageBtn();
  };
  EquipmentEquipmentClickHandler.prototype.updateInventory = function () {
    this._inventory.update();
  };
  EquipmentEquipmentClickHandler.prototype.setStorageWarning = function () {
    this.dialogDisp.mc_storageWarning.toolTipText = "dialog_equipment_storageWarning";
    this.dialogDisp.mc_storageWarning.visible = u.CastleModel.equipData.isInventoryFull;
    this.equipmentScreen.itxt_storage.textContentVO.textReplacements = [u.CastleModel.equipData.filledInventorySpace, u.CastleModel.equipData.playerTotalInventorySpace];
    this.equipmentScreen.itxt_storage.color = u.CastleModel.equipData.isInventoryFull ? r.ClientConstColor.FONT_INSUFFICIENT_COLOR : r.ClientConstColor.FONT_DEFAULT_COLOR;
    this.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
  };
  EquipmentEquipmentClickHandler.prototype.handleInventoryEntryClick = function (e) {
    if (this._canDrag) {
      var t = e.scrollItem.scrollItemVO.equipmentVO;
      if (this.dragMovement) {
        if (e.scrollItem.scrollItemVO) {
          this.endDrag(new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_INVENTORY));
          this.startDrag(new g.EquipmentDragMovement(t, new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_INVENTORY)));
        } else {
          this.endDrag(new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_INVENTORY));
        }
      } else {
        this.startDrag(new g.EquipmentDragMovement(t, new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  EquipmentEquipmentClickHandler.prototype.handleInventoryEntryTouchDragStart = function (e) {
    var t = e.scrollItem.scrollItemVO && e.scrollItem.scrollItemVO.equipmentVO;
    if (t && !this.dragMovement) {
      this.startDrag(new g.EquipmentDragMovement(t, new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_INVENTORY)));
      this.checkForFittingSlots();
    }
  };
  EquipmentEquipmentClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (t) {
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
      this.endDrag(new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  EquipmentEquipmentClickHandler.prototype.handleInventoryClick = function (e) {
    if (this.dragMovement && e.target.parent == this.dialogDisp.mc_equipmentList && e.target instanceof _) {
      this.endDrag(new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  EquipmentEquipmentClickHandler.prototype.handleDialogClick = function (t) {
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
        this.endDrag(new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_INVENTORY));
    }
    if (!a.instanceOfClass(t.target, "EquipmentGemSocket") && this.hasMCParentOfSlot(t.target)) {
      this.handleSlotClick(this.hasMCParentOfSlot(t.target));
    }
  };
  EquipmentEquipmentClickHandler.prototype.hasMCParentOfSlot = function (e) {
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
  EquipmentEquipmentClickHandler.prototype.handleSlotClick = function (e) {
    if (this.equipmentScreen.currentLord.isAvailableForEquip && !u.CastleModel.equipData.isEquiqInProgress) {
      if (this._canDrag) {
        if (this.dragMovement) {
          if (this.dragMovement.draggedEquipmentVO.slotType == e.slotVO.slotType && this.isDragActionRelicAllowed) {
            if (this.isEmptySlot(e)) {
              this.endDrag(new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_SLOT, this.equipmentScreen.currentLord.id), e);
            } else {
              var t = new g.EquipmentDragMovement(e.slotVO.equipmentVO, new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_SLOT, -1));
              this.endDrag(new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_SLOT, this.equipmentScreen.currentLord.id), e);
              this.startDrag(t);
              this.controller.addEventListener(l.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
              this.controller.addEventListener(l.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
            }
          }
        } else if (e.slotVO.equipmentVO) {
          if (e.favoriteDisp) {
            e.favoriteDisp.disp.mc_star_small.visible = false;
          }
          this.startDrag(new g.EquipmentDragMovement(e.slotVO.equipmentVO, new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_SLOT, this.equipmentScreen.currentLord.id), e));
          this.controller.addEventListener(l.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
          this.controller.addEventListener(l.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
        }
      } else {
        this.markAsFavorite(e);
      }
    }
  };
  EquipmentEquipmentClickHandler.prototype.markAsFavorite = function (e) {
    if (e.slotVO.equipmentVO) {
      e.slotVO.equipmentVO.isFavorite = !e.slotVO.equipmentVO.isFavorite;
      e.favoriteDisp.disp.mc_star_active.visible = e.slotVO.equipmentVO.isFavorite;
      e.favoriteDisp.disp.mc_star_inactive.visible = !e.slotVO.equipmentVO.isFavorite;
      m.CastleEquipmentFavoritesMicroservice.Instance.equipmentItemUpdatedSignal.dispatch(e.slotVO.equipmentVO);
    }
  };
  EquipmentEquipmentClickHandler.prototype.startDrag = function (e) {
    this.dragMovement = e;
    this.dragMovement.startDrag();
    if (s.int(C.CastleEquipmentSublayer.FILTER_MAP.get(this.dragMovement.draggedEquipmentVO.slotType)) != this._inventory.currentFilterIndex) {
      this._inventory.currentFilterIndex = C.CastleEquipmentSublayer.FILTER_MAP.get(this.dragMovement.draggedEquipmentVO.slotType);
    }
    this.updateDialog();
    this.tabChangeAllowed = false;
  };
  EquipmentEquipmentClickHandler.prototype.endDrag = function (t, i = null) {
    if (this.dragMovement) {
      this.lastDragMovement = this.dragMovement;
    }
    e.prototype.endDrag.call(this, t, i);
  };
  EquipmentEquipmentClickHandler.prototype.onUnEquipSuccess = function (e) {
    this.checkForFittingSlots();
    this.equipmentScreen.updateCurrentLordPic();
    this.controller.removeEventListener(l.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
    this.controller.removeEventListener(l.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
  };
  EquipmentEquipmentClickHandler.prototype.onUnEquipFail = function (e) {
    if (this.dragMovement) {
      this.endDrag(this.dragMovement.sourceLocation, this.dragMovement.sourceSlotMC);
    }
    this.controller.removeEventListener(l.CastleEquipmentEvent.EQUIP_FAILED, this.bindFunction(this.onUnEquipFail));
    this.controller.removeEventListener(l.CastleEquipmentEvent.EQUIP_SUCCESSFUL, this.bindFunction(this.onUnEquipSuccess));
  };
  EquipmentEquipmentClickHandler.prototype.confirmSellCallback = function (e = false) {
    var t = this.dragMovement ? this.dragMovement : this.lastDragMovement;
    if (e) {
      u.CastleModel.gemData.extractGem(t.draggedEquipmentVO, -1);
    } else {
      u.CastleModel.equipData.sell(t.draggedEquipmentVO, -1, -1);
    }
    this.endDrag(new p.EquipableDragLocationVO(p.EquipableDragLocationVO.TYPE_SELL_SLOT));
  };
  EquipmentEquipmentClickHandler.prototype.updateDialog = function () {
    this.checkForFittingSlots();
    this.updateSlotBorder();
    this.updateSlotTooltip();
    this.updateSlotMouseChildren();
    this._inventory.update();
    this.equipmentScreen.lordEffectsComponent.update();
    this.setStorageWarning();
    this.equipmentScreen.updateCurrentLordPic();
  };
  Object.defineProperty(EquipmentEquipmentClickHandler.prototype, "dragMovement", {
    get: function () {
      return this._dragMovement;
    },
    set: function (e) {
      this._dragMovement = e;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentEquipmentClickHandler.prototype.dispose = function () {
    this.controller.removeEventListener(l.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
  };
  EquipmentEquipmentClickHandler.prototype.hideDialog = function () {
    if (this.dragMovement) {
      this.endDrag(new p.EquipableDragLocationVO(this.dragMovement.sourceLocation.locationType, this.dragMovement.sourceLocation.lordID));
    }
  };
  EquipmentEquipmentClickHandler.prototype.onCastleListUpdated = function (e) {
    this.equipmentScreen.setCastleIcon();
    this.controller.removeEventListener(c.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdated));
  };
  EquipmentEquipmentClickHandler.prototype.updateSlotBorder = function () {
    var e = this.equipmentScreen.allSlotsOnScreen;
    var t = 0;
    if (e != null) {
      for (var i in e) {
        var n = e[i];
        if (n !== undefined) {
          if (n.slotVO.equipmentVO) {
            if ((t = s.int(n.slotVO.equipmentVO.visualRareID)) == 0) {
              t = 5;
            }
            n.mc_bg.gotoAndStop(t);
          } else {
            o.MovieClipHelper.clearMovieClip(n.mc_itemHolder);
            n.mc_bg.gotoAndStop(7);
          }
        }
      }
    }
  };
  EquipmentEquipmentClickHandler.prototype.checkForFittingSlots = function () {
    if (!this.equipmentScreen.currentLord || this.equipmentScreen.currentLord.isAvailableForEquip) {
      for (var e in this.equipmentScreen.allSlotsOnScreen) {
        var t = this.equipmentScreen.allSlotsOnScreen[e];
        if (t !== undefined) {
          var i = t.slotVO;
          if (this.dragMovement && this.dragMovement.draggedEquipmentVO) {
            if (this.isDragActionRelicAllowed) {
              if (this.dragMovement.draggedEquipmentVO.slotType == i.slotType) {
                t.mc_lock.visible = false;
                t.mc_bgEmpty.allowFastGlow = false;
                t.mc_bgEmpty.useFilters(d.BitmapFilterHelper.FILTER_GLOW_ENABLED_EQUIPMENT_SLOT, false, 1);
              } else {
                t.mc_lock.visible = !i.equipmentVO;
                t.mc_bgEmpty.useFilters(d.BitmapFilterHelper.NO_FILTER);
              }
            } else {
              t.mc_lock.visible = true;
              t.mc_bgEmpty.filters = d.BitmapFilterHelper.NO_FILTER;
            }
          } else {
            t.mc_lock.visible = false;
            t.mc_bgEmpty.useFilters(d.BitmapFilterHelper.NO_FILTER);
          }
        }
      }
    } else {
      for (var e in this.equipmentScreen.allSlotsOnScreen) {
        var n = this.equipmentScreen.allSlotsOnScreen[e];
        if (n !== undefined) {
          n.mc_lock.visible = false;
          n.mc_bgEmpty.useFilters(d.BitmapFilterHelper.NO_FILTER);
        }
      }
    }
  };
  return EquipmentEquipmentClickHandler;
}(h.EquipmentDialogClickHandler);
exports.EquipmentEquipmentClickHandler = f;