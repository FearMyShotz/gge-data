Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./18.js");
var l = require("./69.js");
var c = require("./4.js");
var u = require("./127.js");
var d = require("./8.js");
var p = require("./722.js");
var h = require("./2243.js");
var g = require("./1276.js");
var C = require("./380.js");
var _ = require("./1277.js");
var m = require("./1.js");
var f = require("./80.js");
var O = require("./29.js");
var E = require("./9.js");
var y = require("./17.js");
var b = require("./73.js");
var D = require("./594.js");
var I = require("./2245.js");
var T = require("./2246.js");
var v = require("./908.js");
var S = function (e) {
  function EquipmentDialogClickHandler(t) {
    var i = this;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this).equipmentScreen = t;
    i.tabChangeAllowed = true;
    i._canDrag = true;
    return i;
  }
  n.__extends(EquipmentDialogClickHandler, e);
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "canDrag", {
    set: function (e) {
      this._canDrag = e;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentDialogClickHandler.prototype.handleDialogClick = function (e) {
    if (d.ButtonHelper.isButtonEnabled(e.target) && !this.dialogDisp.mc_listContainer.contains(e.target)) {
      if (this.tabChangeAllowed) {
        switch (e.target) {
          case this.dialogDisp.mc_lordName.btn_rename:
            E.CastleDialogHandler.getInstance().registerDefaultDialogs(T.CastleRenameLordDialog, new h.CastleRenameLordDialogProperties(this.equipmentScreen.currentLord));
            break;
          case this.inventoryDisp.tab0:
          case this.inventoryDisp.tab1:
          case this.inventoryDisp.tab2:
          case this.inventoryDisp.tab3:
          case this.inventoryDisp.tab4:
          case this.inventoryDisp.tab5:
          case this.inventoryDisp.tab6:
            var t = e.target.name;
            var i = parseInt(t.charAt(t.length - 1));
            this._inventory.currentFilterIndex = i;
            this.equipmentScreen.lastFilter = this._inventory.currentFilterIndex;
            if (this.equipmentScreen.isFavoriteMode) {
              this._inventory.forEachItemVE(this.bindFunction(this.enableInventoryFavoriteIcons));
            }
            break;
          case this.inventoryDisp.btn_addStorage:
            this.gotoIsoBuildArmory();
        }
      }
      if (e.target == this.dialogDisp.saleSlot && this._dragMovement && !this.dialogDisp.saleSlot.itemInvalidSymbol.visible == 1) {
        this.sellItem();
      }
      if (m.instanceOfClass(e.target, "EquipmentGemSocket")) {
        this.extractItem(e.target);
      }
    }
  };
  EquipmentDialogClickHandler.prototype.enableInventoryFavoriteIcons = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.toggleOpenMarkAsFavorite(this.equipmentScreen.isFavoriteMode);
  };
  EquipmentDialogClickHandler.prototype.gotoIsoBuildArmory = function () {
    y.CastleLayoutManager.getInstance().hideAllDialogs();
    o.CommandController.instance.executeCommand(O.IngameClientCommands.GOTO_MAIN_CASTLE_UNIQUE_BUILDING, [f.IsoObjectEnum.ARMORY]);
  };
  EquipmentDialogClickHandler.prototype.extractItem = function (e) {
    if (this.equipmentScreen.currentLord.isAvailableForEquip) {
      E.CastleDialogHandler.getInstance().registerDefaultDialogs(I.CastleExtractSocketDialog, new g.CastleSocketDialogProperties(e.equipmentVO.gemVO, null, e.equipmentVO, this.equipmentScreen.currentLord.id, null, null));
    }
  };
  EquipmentDialogClickHandler.prototype.sellItem = function () {
    this.clearDrag();
    var e = D.CastleEquipmentSellDialog;
    if (m.instanceOfClass(this._dragMovement.draggedEquipableVO, "BasicEquipmentVO") && this._dragMovement.draggedEquipableVO.gemVO) {
      e = v.CastleSellEmbeddedEquipmentDialog;
    }
    E.CastleDialogHandler.getInstance().registerDefaultDialogs(e, new p.CastleEquipmentSellDialogProperties(this._dragMovement.draggedEquipableVO, this.bindFunction(this.confirmSellCallback), this.bindFunction(this.cancelDragMovement)));
  };
  EquipmentDialogClickHandler.prototype.clearDrag = function () {
    this.layoutManager.nativeCursor.stopAllDrag();
  };
  EquipmentDialogClickHandler.prototype.confirmSellCallback = function (e = false) {};
  EquipmentDialogClickHandler.prototype.handleInventoryClick = function (e) {};
  EquipmentDialogClickHandler.prototype.changeSaleSlotAppearance = function () {
    if (c.CastleModel.tutorialData.isTutorialActive) {
      this.dialogDisp.saleSlot.toolTipText = "dialog_equipmentSale_desc";
      this.dialogDisp.saleSlot.itemInvalidSymbol.visible = true;
    } else {
      this._dragMovement;
      this.dialogDisp.saleSlot.toolTipText = "dialog_equipmentSale_desc";
      this.dialogDisp.saleSlot.itemInvalidSymbol.visible = false;
    }
  };
  EquipmentDialogClickHandler.prototype.handleDialogMouseOver = function (e) {
    switch (e.target.parent) {
      case this.dialogDisp.slot0:
      case this.dialogDisp.slot1:
      case this.dialogDisp.slot2:
      case this.dialogDisp.slot3:
      case this.dialogDisp.slot4:
      case this.dialogDisp.slot5:
        this.handleSlotMouseOver(e);
    }
    this.dialogDisp.saleSlot.mc_highlight.visible = e.target == this.dialogDisp.saleSlot && this._dragMovement;
  };
  EquipmentDialogClickHandler.prototype.handleSlotMouseOver = function (e) {
    var t = e.target.parent.slotVO.equipmentVO;
    var i = this._dragMovement ? this._dragMovement.draggedEquipableVO : null;
    if (i) {
      if (this.isDragActionRelicAllowed && this.gemInsertAllowed(t)) {
        if (m.instanceOfClass(i, "CastleGemVO") && t && t.slotType == u.BasicEquippableVO.SLOT_TYPE_HERO) {
          this.showTextTooltip("dialog_gems_noGemInsert_hero_tooltip", e.target.parent.mc_bg);
        } else if (m.instanceOfClass(i, "CastleGemVO") && t && t.slotType != u.BasicEquippableVO.SLOT_TYPE_SKIN && !t.isPermanent) {
          this.showTextTooltip("dialog_gems_noGemInsert_tempEquipment_tooltip", e.target.parent.mc_bg);
        } else if (m.instanceOfClass(i, "CastleGemVO") && t && t.slotType == u.BasicEquippableVO.SLOT_TYPE_SKIN && !t.canSlotGem) {
          this.showTextTooltip("dialog_gems_noGemInsert_look_tooltip", e.target.parent.mc_bg);
        }
      } else {
        var n = this.equipmentScreen.currentLord.isBaron ? "baron" : "general";
        var o = this.lordUsesRelics;
        var a = this.movementIsRelic;
        var s = m.instanceOfClass(i, "CastleGemVO") || m.instanceOfClass(i, "RelicGemVO");
        if (m.instanceOfClass(i, "BasicEquipmentVO") && i.slotType == u.BasicEquippableVO.SLOT_TYPE_SKIN) {
          this.showTextTooltip("dialog_equipment_appearanceItem_nonRelicGem_mixingBlocked_" + n + "_tooltip", e.target.parent.mc_bg);
        } else if (t) {
          if (s) {
            if (t.slotType == u.BasicEquippableVO.SLOT_TYPE_SKIN) {
              if (a) {
                this.showTextTooltip("dialog_equipment_relicGem_nonRelicItem_insertBlocked_tooltip", e.target.parent.mc_bg);
              } else {
                this.showTextTooltip("dialog_equipment_nonRelicGem_appearanceItemAndRelicMix_blocked", e.target.parent.mc_bg);
              }
            } else if (o && !a) {
              this.showTextTooltip("dialog_equipment_nonRelicGem_relicItem_insertBlocked_tooltip", e.target.parent.mc_bg);
            } else if (!o && a) {
              this.showTextTooltip("dialog_equipment_relicGem_nonRelicItem_insertBlocked_tooltip", e.target.parent.mc_bg);
            }
          } else if (o && !a || !o && a) {
            this.showTextTooltip("dialog_equipment_relicItem_nonRelicItem_mixingBlocked_" + n + "_tooltip", e.target.parent.mc_bg);
          }
        } else {
          this.showTextTooltip("dialog_equipment_relicItem_nonRelicItem_mixingBlocked_" + n + "_tooltip", e.target.parent.mc_bg);
        }
      }
    } else if (t) {
      b.EquipmentIconHelper.showToolTip(e.target, t, this.equipmentScreen.currentLord);
    }
  };
  EquipmentDialogClickHandler.prototype.gemInsertAllowed = function (e) {
    if (this._dragMovement && m.instanceOfClass(e, "BasicEquipmentVO") && e.slotType == u.BasicEquippableVO.SLOT_TYPE_SKIN) {
      if (m.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicGemVO") && !m.instanceOfClass(e, "RelicEquipmentVO")) {
        return false;
      }
      if (!m.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicGemVO") && m.instanceOfClass(e, "RelicEquipmentVO")) {
        return false;
      }
    }
    return true;
  };
  EquipmentDialogClickHandler.prototype.showTextTooltip = function (e, t) {
    y.CastleLayoutManager.getInstance().tooltipManager.show(e, t);
  };
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isDragActionRelicAllowed", {
    get: function () {
      if (!this._dragMovement) {
        return true;
      }
      if (this.isDragItemASkinItem) {
        if (!this._dragMovement.draggedEquipableVO.gemVO) {
          return true;
        }
        if (this.lordUsesRelics) {
          return false;
        }
      }
      return !!this.isDragItemAnEquipmentButNoSkin && !!this.isLordEquippedOnlySkinItemWithoutGem || !this.lordHasEquipment || this.lordUsesRelics && this.movementIsRelic || !this.lordUsesRelics && !this.movementIsRelic;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isDragItemAnEquipmentButNoSkin", {
    get: function () {
      return this.isDragItemAnEquipmentItem && this._dragMovement.draggedEquipableVO.slotType != u.BasicEquippableVO.SLOT_TYPE_SKIN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isDragItemASkinItem", {
    get: function () {
      return this.isDragItemAnEquipmentItem && this._dragMovement.draggedEquipableVO.slotType == u.BasicEquippableVO.SLOT_TYPE_SKIN;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isDragItemAnEquipmentItem", {
    get: function () {
      return !!this._dragMovement.draggedEquipableVO && m.instanceOfClass(this._dragMovement.draggedEquipableVO, "BasicEquipmentVO");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "isLordEquippedOnlySkinItemWithoutGem", {
    get: function () {
      var e = false;
      var t = false;
      for (var i in this.equipmentScreen.allSlotsOnScreen) {
        var n = this.equipmentScreen.allSlotsOnScreen[i];
        if (n !== undefined) {
          var o = n.slotVO;
          if (o.equipmentVO && o.slotType != u.BasicEquippableVO.SLOT_TYPE_SKIN) {
            t = true;
          }
          if (o.equipmentVO && o.slotType == u.BasicEquippableVO.SLOT_TYPE_SKIN && !o.equipmentVO.gemVO) {
            e = true;
          }
        }
      }
      return !t && e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "movementIsRelic", {
    get: function () {
      return !!this._dragMovement.draggedEquipableVO && (m.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicEquipmentVO") || m.instanceOfClass(this._dragMovement.draggedEquipableVO, "RelicGemVO"));
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "lordUsesRelics", {
    get: function () {
      for (var e in this.equipmentScreen.allSlotsOnScreen) {
        var t = this.equipmentScreen.allSlotsOnScreen[e];
        if (t !== undefined) {
          var i = t.slotVO;
          if (i.equipmentVO && m.instanceOfClass(i.equipmentVO, "RelicEquipmentVO")) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "lordHasEquipment", {
    get: function () {
      for (var e in this.equipmentScreen.allSlotsOnScreen) {
        var t = this.equipmentScreen.allSlotsOnScreen[e];
        if (t !== undefined) {
          if (t.slotVO.equipmentVO) {
            return true;
          }
        }
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  EquipmentDialogClickHandler.prototype.handleDialogMouseOut = function (e) {
    switch (e.target.parent) {
      case this.dialogDisp.slot0:
      case this.dialogDisp.slot1:
      case this.dialogDisp.slot2:
      case this.dialogDisp.slot3:
      case this.dialogDisp.slot4:
      case this.dialogDisp.slot5:
        this.handleSlotMouseOut(e);
        return;
    }
  };
  EquipmentDialogClickHandler.prototype.handleSlotMouseOut = function (e) {};
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "dialogDisp", {
    get: function () {
      return this.equipmentScreen.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EquipmentDialogClickHandler.prototype, "tabChangeAllowed", {
    get: function () {
      return Object.getOwnPropertyDescriptor(_.AEquipableClickHandler.prototype, "tabChangeAllowed").get.call(this);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(_.AEquipableClickHandler.prototype, "tabChangeAllowed").set.call(this, e);
      if (this.dialogDisp.mc_lordStatsEffects.effectList.mc_lordStats.mc_decoStats.currentFrame == 1) {
        this.dialogDisp.mc_lordStatsEffects.effectList.mc_lordStats.mc_decoStats.mc_CastleHolder.mouseChildren = e;
      }
    },
    enumerable: true,
    configurable: true
  });
  EquipmentDialogClickHandler.prototype.updateSlotTooltip = function () {
    this.dialogDisp.slot0.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot0) ? "equipment_slotType_helmet" : "";
    this.dialogDisp.slot1.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot1) ? "equipment_slotType_armor" : "";
    this.dialogDisp.slot2.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot2) ? "equipment_slotType_weapon" : "";
    this.dialogDisp.slot3.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot3) ? "equipment_slotType_artifact" : "";
    this.dialogDisp.slot4.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot4) ? "equipment_slotType_skin" : "";
    this.dialogDisp.slot5.mc_bgEmpty.toolTipText = this.isEmptySlot(this.dialogDisp.slot5) ? "equipment_slotType_hero" : "";
  };
  EquipmentDialogClickHandler.prototype.updateSlotMouseChildren = function () {
    for (var e in this.equipmentScreen.allSlotsOnScreen) {
      var t = this.equipmentScreen.allSlotsOnScreen[e];
      if (t !== undefined) {
        t.mc_itemHolder.mouseEnabled = !this._dragMovement;
      }
    }
  };
  EquipmentDialogClickHandler.prototype.isEmptySlot = function (e) {
    return e.slotVO.equipmentVO == null;
  };
  EquipmentDialogClickHandler.prototype.endDrag = function (e, t = null) {
    if (this._dragMovement) {
      this._dragMovement.stopDrag(e, t);
      this._dragMovement = null;
      this.updateDialog();
      this.tabChangeAllowed = true;
    }
  };
  EquipmentDialogClickHandler.prototype.cancelDragMovement = function () {
    if (this._dragMovement) {
      if (this._dragMovement.sourceSlotMC && this._dragMovement.sourceLocation.lordID != -1) {
        var e = this._dragMovement.sourceLocation.lordID == this.equipmentScreen.currentLord.id ? this._dragMovement.sourceSlotMC : null;
        this.endDrag(new C.EquipableDragLocationVO(this._dragMovement.sourceLocation.locationType, this._dragMovement.sourceLocation.lordID), e);
      } else {
        this.endDrag(new C.EquipableDragLocationVO(C.EquipableDragLocationVO.TYPE_INVENTORY));
      }
    }
  };
  EquipmentDialogClickHandler.prototype.updateDialog = function () {
    throw new l.AbstractMethodError();
  };
  EquipmentDialogClickHandler.prototype.setAddStorageBtn = function () {
    var e = s.int(c.CastleModel.wodData.getBuildingVOById(r.ClientConstCastle.ARMORY_BUILDING_WOD_LEVEL1).requiredLevel);
    var t = c.CastleModel.userData.level >= e;
    this.dialogDisp.mc_equipmentList.btn_addStorage.visible = t;
    if (t) {
      var i = s.int(c.CastleModel.wodData.getHighestUpgradeForBuilding(r.ClientConstCastle.ARMORY_BUILDING_WOD_LEVEL1).addEquipmentStorageCapacity);
      var n = c.CastleModel.equipData.playerTotalInventorySpace == a.EquipmentConst.EQUIPMENT_SIZE_NORMAL + i;
      d.ButtonHelper.enableButton(this.dialogDisp.mc_equipmentList.btn_addStorage, !n);
      this.dialogDisp.mc_equipmentList.btn_addStorage.toolTipText = n ? "addEquipmentStorageCapacity_maxReached_tt" : "addEquipmentStorageCapacity_tt";
    }
  };
  return EquipmentDialogClickHandler;
}(_.AEquipableClickHandler);
exports.EquipmentDialogClickHandler = S;