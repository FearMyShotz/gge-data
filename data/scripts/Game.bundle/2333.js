Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./5.js");
var s = require("./6.js");
var r = require("./16.js");
var l = require("./601.js");
var c = require("./118.js");
var u = require("./4.js");
var d = require("./33.js");
var p = require("./127.js");
var h = require("./68.js");
var g = require("./8.js");
var C = require("./2334.js");
var _ = require("./380.js");
var m = require("./1313.js");
var f = require("./198.js");
var O = require("./9.js");
var E = require("./17.js");
var y = require("./73.js");
var b = require("./2335.js");
var D = require("./2336.js");
var I = require("./1280.js");
var T = require("./1.js");
var v = require("./926.js");
var S = function (e) {
  function CraftingEquipmentClickHandler(t, i) {
    var n = this;
    n._chosenCraftingClassCategory = CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this).sublayer = i;
    n.autofillStrategy = CraftingEquipmentClickHandler.FILL_STRATEGY;
    return n;
  }
  n.__extends(CraftingEquipmentClickHandler, e);
  CraftingEquipmentClickHandler.prototype.init = function () {
    e.prototype.init.call(this);
    this.controller.addEventListener(c.CastleEquipmentEvent.EQUIPMENT_CRAFTED, this.bindFunction(this.onEquipmentCrafted));
    this.controller.addEventListener(c.CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED, this.bindFunction(this.onCraftingFailed));
    this.controller.addEventListener(c.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
    this.setStorageWarning();
    this.craftingDialog.dialogDisp.mc_equipmentList.mc_storageSpace.icon.gotoAndStop(1);
    this.craftingDialog.gemFilterPanel.hide();
  };
  CraftingEquipmentClickHandler.prototype.dispose = function () {
    this.controller.removeEventListener(c.CastleEquipmentEvent.EQUIPMENT_CRAFTED, this.bindFunction(this.onEquipmentCrafted));
    this.controller.removeEventListener(c.CastleEquipmentEvent.EQUIPMENT_CRAFTED_FAILED, this.bindFunction(this.onCraftingFailed));
    this.controller.removeEventListener(c.CastleEquipmentEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
  };
  CraftingEquipmentClickHandler.prototype.onInventorySpaceChanged = function (e) {
    this.setStorageWarning();
  };
  CraftingEquipmentClickHandler.prototype.setStorageWarning = function () {
    this.craftingDialog.itxt_storage.textContentVO.textReplacements = [u.CastleModel.equipData.filledInventorySpace, u.CastleModel.equipData.playerTotalInventorySpace];
    this.craftingDialog.itxt_storage.color = u.CastleModel.equipData.isInventoryFull ? r.ClientConstColor.FONT_INSUFFICIENT_COLOR : r.ClientConstColor.FONT_DEFAULT_COLOR;
    this.craftingDialog.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_equipmentSpace_tooltip";
  };
  CraftingEquipmentClickHandler.prototype.handleInventoryEntryClick = function (e) {
    if (!this._isLocked && !e.scrollItem.scrollItemVO.locked) {
      var t = e.scrollItem.scrollItemVO.equipmentVO;
      if (this.dragMovement) {
        if (e.scrollItem.scrollItemVO) {
          this.endDrag(new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY));
          this.startEquipDrag(new I.EquipmentDragMovement(t, new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY)));
        } else {
          this.endDrag(new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY));
        }
      } else {
        this.startEquipDrag(new I.EquipmentDragMovement(t, new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.handleInventoryEntryTouchDragStart = function (e) {
    if (!this._isLocked && g.ButtonHelper.isButtonEnabled(e.originEvent.target)) {
      var t = e.scrollItem.scrollItemVO && e.scrollItem.scrollItemVO.equipmentVO;
      if (t && !this.dragMovement) {
        this.startEquipDrag(new I.EquipmentDragMovement(t, new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (e) {
    if (this.dragMovement) {
      if (e.originEvent) {
        var t = e.originEvent.target.stage.getObjectUnderPoint(e.originEvent.rawX, e.originEvent.rawY, 0);
        var i = t.parent && t.parent.parent;
        if (i) {
          switch (i) {
            case this.sublayerDisp.slot0:
            case this.sublayerDisp.slot1:
            case this.sublayerDisp.slot2:
            case this.sublayerDisp.slot3:
            case this.sublayerDisp.slot4:
            case this.sublayerDisp.slot5:
              this.handleSlotClick(i);
          }
        }
      }
      this.endDrag(new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  CraftingEquipmentClickHandler.prototype.handleInventoryClick = function (t) {
    if (!this._isLocked && g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.handleInventoryClick.call(this, t);
      if (this.dragMovement && t.target.parent == this.craftingDisp.mc_equipmentList && instanceOf(t.target, "Bitmap")) {
        this.endDrag(new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY));
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.handleDialogClick = function (t) {
    if (!this._isLocked && g.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.handleDialogClick.call(this, t);
      switch (t.target) {
        case this.inventoryDisp.tab0:
        case this.inventoryDisp.tab1:
        case this.inventoryDisp.tab2:
        case this.inventoryDisp.tab3:
          this.greyOutNonUsableEquipments();
          break;
        case this.sublayerDisp.slot0:
        case this.sublayerDisp.slot1:
        case this.sublayerDisp.slot2:
        case this.sublayerDisp.slot3:
        case this.sublayerDisp.slot4:
        case this.sublayerDisp.slot5:
          this.handleSlotClick(t.target);
          break;
        case this.sublayerDisp.btn_craft:
          if (this.equipmentHasGems()) {
            this.extractGems();
          } else {
            this.craftEquipment(false);
          }
          break;
        case this.craftingDisp.btn_autofill:
          if (this.dragMovement) {
            this.endDrag(new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY));
          }
          this.autofillStrategy.fillCraftingSlots(this.sublayer.allSlotsOnScreen, this.sublayer.resultSlot, this._inventory.currentFilter);
          this.updateDialog();
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.extractGems = function () {
    O.CastleDialogHandler.getInstance().registerDefaultDialogs(b.CastleExtractGemsDialog, new C.CastleExtractGemsDialogProperties(this.getEmbeddedGems(), this.getFinalCostC1(), this.bindFunction(this.craftEquipment)));
  };
  CraftingEquipmentClickHandler.prototype.equipmentHasGems = function () {
    var e = u.CastleModel.equipData.craftingInventory;
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n.gemVO) {
          return true;
        }
      }
    }
    return false;
  };
  CraftingEquipmentClickHandler.prototype.getEmbeddedGems = function () {
    var e = u.CastleModel.equipData.craftingInventory;
    var t = [];
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.gemVO) {
          t.push(o.gemVO);
        }
      }
    }
    return t;
  };
  CraftingEquipmentClickHandler.prototype.handleSlotClick = function (e) {
    if (!e.mc_lock.visible) {
      if (this.dragMovement) {
        if (this.isEmptySlot(e)) {
          this.endDrag(new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_CRAFTING), e);
        } else {
          var t = new I.EquipmentDragMovement(e.slotVO.equipmentVO, new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_CRAFTING));
          this.endDrag(new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_CRAFTING), e);
          this.startEquipDrag(t);
          this.highlightSlot(e);
        }
      } else if (!this.isEmptySlot(e)) {
        this.startEquipDrag(new I.EquipmentDragMovement(e.slotVO.equipmentVO, new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_CRAFTING), e));
        this.highlightSlot(e);
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.handleDialogMouseOver = function (e) {
    if (e.target != this.sublayerDisp.slot6) {
      switch (e.target) {
        case this.sublayerDisp.slot0:
        case this.sublayerDisp.slot1:
        case this.sublayerDisp.slot2:
        case this.sublayerDisp.slot3:
        case this.sublayerDisp.slot4:
        case this.sublayerDisp.slot5:
          this.showSlotToolTip(e);
          if (this.dragMovement) {
            this.highlightSlot(e.target);
          }
          break;
        default:
          if (this.dragMovement) {
            this.disableHighlightedSlot();
          }
      }
    } else {
      this.disableHighlightedSlot();
    }
  };
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "dragMovementIsRelic", {
    get: function () {
      return !!this.dragMovement && T.instanceOfClass(this.dragMovement.draggedEquipmentVO, "RelicEquipmentVO");
    },
    enumerable: true,
    configurable: true
  });
  CraftingEquipmentClickHandler.prototype.disableHighlightedSlot = function () {
    if (this._highlightedSlot) {
      this._highlightedSlot.useFilters(h.BitmapFilterHelper.NO_FILTER);
      this._highlightedSlot = null;
    }
  };
  CraftingEquipmentClickHandler.prototype.highlightSlot = function (e) {
    if (this._highlightedSlot) {
      this.disableHighlightedSlot();
    }
    if (!e.mc_lock.visible) {
      this._highlightedSlot = e;
      e.useFilters(h.BitmapFilterHelper.setColor(h.BitmapFilterHelper.FILTER_GLOW_CRAFT_EQUIPMENT_HIGHLIGHT_SLOT, this.getHighlightColorForRarity(this.dragMovement.draggedEquipmentVO.rarity)), false, 1);
    }
  };
  CraftingEquipmentClickHandler.prototype.getHighlightColorForRarity = function (e) {
    switch (e) {
      case f.BasicEquipmentVO.RARITY_COMMON:
        return 13421772;
      case f.BasicEquipmentVO.RARITY_RARE:
        return 10151967;
      case f.BasicEquipmentVO.RARITY_EPIC:
        return 13010425;
      case f.BasicEquipmentVO.RARITY_LEGENDARY:
        return 15559700;
      default:
        return 13421772;
    }
  };
  CraftingEquipmentClickHandler.prototype.showSlotToolTip = function (e) {
    var t = e.target.slotVO.equipmentVO;
    if (t && !this._isLocked) {
      y.EquipmentIconHelper.showToolTip(e.target, t);
    }
    if (this.dragMovementIsRelic) {
      E.CastleLayoutManager.getInstance().tooltipManager.show("dialog_equipment_forge_relicItem_forgeBlocked_tooltip", e.target);
    }
  };
  CraftingEquipmentClickHandler.prototype.startEquipDrag = function (e) {
    this.dragMovement = e;
    this.dragMovement.startDrag();
    this.updateDialog();
    this.tabChangeAllowed = false;
  };
  CraftingEquipmentClickHandler.prototype.endDrag = function (e, t = null) {
    if (this.dragMovement) {
      if (t) {
        t.slotVO.equipmentVO = this.dragMovement.draggedEquipmentVO;
      }
      this.dragMovement.stopDrag(e, t);
      this.dragMovement = null;
      this.updateDialog();
      this.disableHighlightedSlot();
      this.tabChangeAllowed = true;
    }
  };
  CraftingEquipmentClickHandler.prototype.updateDialog = function () {
    this._chosenCraftingClassCategory = this.getCraftingClassCategory();
    this._inventory.update();
    this.updateCraftButton();
    this.updateResultSlot();
    this.updateSlotLocks();
    this.updateSlotBorder();
    this.greyOutNonUsableEquipments();
    this.updateCenterSlotTooltip();
    this.updateAutofillButton();
    this.sublayer.clearCenterSlot();
  };
  CraftingEquipmentClickHandler.prototype.updateAutofillButton = function () {
    if (this.equipmentsToBeCrafted.length == 6 || this.equipmentsToBeCrafted.length == 3 && this._chosenCraftingClassCategory == f.BasicEquipmentVO.RARITY_LEGENDARY) {
      g.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, false);
      this.craftingDisp.btn_autofill.toolTipText = "dialog_equipment_craftingSmithy_slotFull_tt";
    } else {
      g.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, true);
      this.craftingDisp.btn_autofill.toolTipText = null;
    }
  };
  CraftingEquipmentClickHandler.prototype.updateCenterSlotTooltip = function () {
    var e = "dialog_equipment_craftEquipment_middleSlot";
    if (this.dragMovement && T.instanceOfClass(this.dragMovement.draggedEquipmentVO, "RelicEquipmentVO")) {
      e = "dialog_equipment_forge_relicItem_forgeBlocked_tooltip";
    } else if (this._chosenCraftingClassCategory == CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN || this.equipmentsToBeCrafted.length != 3 && this.equipmentsToBeCrafted.length != 6) {
      e += "Empty_tooltip";
    } else if (this.equipmentsToBeCrafted.length == 3) {
      e += this._chosenCraftingClassCategory + "_tooltip";
    } else {
      e += this.getUpgradedCraftingClass() + "_tooltip";
    }
    this.sublayer.resultSlot.toolTipText = e;
  };
  CraftingEquipmentClickHandler.prototype.getUpgradedCraftingClass = function () {
    switch (this._chosenCraftingClassCategory) {
      case f.BasicEquipmentVO.RARITY_COMMON:
        return f.BasicEquipmentVO.RARITY_RARE;
      case f.BasicEquipmentVO.RARITY_RARE:
        return f.BasicEquipmentVO.RARITY_EPIC;
      case f.BasicEquipmentVO.RARITY_EPIC:
        return f.BasicEquipmentVO.RARITY_LEGENDARY;
      default:
        return this._chosenCraftingClassCategory;
    }
  };
  CraftingEquipmentClickHandler.prototype.updateCraftButton = function () {
    if (!this._isLocked) {
      var e = 0;
      if (this.isWaitingForServerMessage || this.equipmentsToBeCrafted.length != 3 && this.equipmentsToBeCrafted.length != 6) {
        this.sublayerDisp.btn_craft.toolTipText = "dialog_equipmentCrafting_cantCraft";
        this.craftButtonEnabled = false;
        e = 0;
      } else {
        this.sublayerDisp.btn_craft.toolTipText = "dialog_equipmentCrafting_craft";
        this.craftButtonEnabled = true;
        e = this.getFinalCostC1();
      }
      this.sublayer.price = e;
    }
  };
  CraftingEquipmentClickHandler.prototype.getFinalCostC1 = function () {
    return s.int(u.CastleModel.costsData.getFinalCostsC1(a.EquipmentConst.getPriceForCrafting(this.equipmentsToBeCrafted.length, this.getCraftingClassID(), 1 + u.CastleModel.researchData.getResearchEffectValue(d.EffectTypeEnum.EFFECT_TYPE_FORGE_COST_BOOST).strength / 100)));
  };
  CraftingEquipmentClickHandler.prototype.getCraftingClassID = function () {
    if (this.equipmentsToBeCrafted.length > 0) {
      return this.equipmentsToBeCrafted[0].rareID;
    } else {
      return -1;
    }
  };
  CraftingEquipmentClickHandler.prototype.getCurrentSlotBorderFrame = function () {
    return s.int(this.equipmentsToBeCrafted.length > 0 ? this.equipmentsToBeCrafted[0].visualRareID : 1);
  };
  CraftingEquipmentClickHandler.prototype.isEmptySlot = function (e) {
    return e.slotVO.equipmentVO == null;
  };
  CraftingEquipmentClickHandler.prototype.updateResultSlot = function () {
    if (this.equipmentsToBeCrafted.length < 3) {
      this.sublayerDisp.slot6.mc_bg.gotoAndStop(1);
    } else if (this.equipmentsToBeCrafted.length == 6) {
      this.sublayerDisp.slot6.mc_bg.gotoAndStop(this.equipmentsToBeCrafted[0].visualRareID + 1);
    } else if (this.equipmentsToBeCrafted.length >= 3) {
      this.sublayerDisp.slot6.mc_bg.gotoAndStop(this.equipmentsToBeCrafted[0].visualRareID);
    }
  };
  CraftingEquipmentClickHandler.prototype.greyOutNonUsableEquipments = function () {
    if (this._chosenCraftingClassCategory != CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN) {
      this._inventory.forEachItemVO(this.bindFunction(this.greyOut));
      this._inventory.redraw();
    }
  };
  CraftingEquipmentClickHandler.prototype.greyOut = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    if (e.equipmentVO.rarity != this._chosenCraftingClassCategory) {
      e.locked = true;
    }
  };
  CraftingEquipmentClickHandler.prototype.updateSlotLocks = function () {
    var e = this.sublayer.allSlotsOnScreen;
    var t = false;
    var i = false;
    this.sublayer.resultSlot.mc_lock.visible = this.dragMovement;
    if (this.equipmentsToBeCrafted.length > 0) {
      t = this.equipmentsToBeCrafted[0].isUseableForTripleCraft;
      i = this.equipmentsToBeCrafted[0].isUseableForSextupleCraft;
    } else if (this.dragMovement) {
      t = this.dragMovement.draggedEquipmentVO.isUseableForTripleCraft;
      i = this.dragMovement.draggedEquipmentVO.isUseableForSextupleCraft;
    } else {
      t = true;
      i = true;
    }
    e[0].mc_lock.visible = !t;
    e[1].mc_lock.visible = !t;
    e[2].mc_lock.visible = !t;
    e[3].mc_lock.visible = !i;
    e[4].mc_lock.visible = !i;
    e[5].mc_lock.visible = !i;
    if (e != null) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          a.toolTipText = a.mc_lock.visible || a.slotVO.equipmentVO ? null : "dialog_equipment_craftEquipment_insertEquipment_tooltip";
        }
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.updateSlotBorder = function () {
    var e = this.getCurrentSlotBorderFrame();
    var t = this.sublayer.allSlotsOnScreen;
    if (t != null) {
      for (var i = 0, n = t; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.mc_bg.gotoAndStop(e);
        }
      }
    }
  };
  CraftingEquipmentClickHandler.prototype.hideDialog = function () {
    this.resetCrafting();
    e.prototype.hideDialog.call(this);
  };
  CraftingEquipmentClickHandler.prototype.craftEquipment = function (e) {
    this.lockDialog();
    this.isWaitingForServerMessage = true;
    this.craftButtonEnabled = false;
    this._craftingStarted = true;
    u.CastleModel.equipData.craftEquipment(e);
  };
  CraftingEquipmentClickHandler.prototype.resetCrafting = function () {
    this.endDrag(new _.EquipableDragLocationVO(_.EquipableDragLocationVO.TYPE_INVENTORY));
    u.CastleModel.equipData.returnCraftingToInventory();
    this.clearCraftingSlots();
    this.unLockDialog();
    this._inventory.update();
  };
  CraftingEquipmentClickHandler.prototype.clearCraftingSlots = function () {
    for (var e = 0, t = this.sublayer.allSlotsOnScreen; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        i.equipmentVO = null;
        o.MovieClipHelper.clearMovieClip(i.mc_equipmentHolder);
      }
    }
    this._chosenCraftingClassCategory = CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN;
    this.updateSlotBorder();
    this.greyOutNonUsableEquipments();
  };
  CraftingEquipmentClickHandler.prototype.onCraftingFailed = function (e) {
    this._isLocked = false;
    this._craftingStarted = false;
    this.isWaitingForServerMessage = false;
    o.BasicDialogHandler.getInstance().blockDialogs = false;
    this.unLockItemList();
    this.updateCraftButton();
    this.craftButtonEnabled = true;
    this.backToEquipButtonEnabled = true;
    g.ButtonHelper.enableButton(this.craftingDisp.btn_help, true);
    g.ButtonHelper.enableButton(this.craftingDisp.btn_close, true);
  };
  CraftingEquipmentClickHandler.prototype.onEquipmentCrafted = function (e) {
    this.isWaitingForServerMessage = false;
    this._craftingStarted = false;
    this._newEquipmentVO = e.equipmentInventory[0];
    u.CastleModel.smartfoxClient.sendCommandVO(new l.C2SGetGemInventory());
    this.sublayer.startCraftAnimation(this.bindFunction(this.onAnimationFinished), this._newEquipmentVO, null);
  };
  CraftingEquipmentClickHandler.prototype.onAnimationFinished = function () {
    this.backToEquipButtonEnabled = true;
    this.sublayer.resetVEs();
    this.switchToNewEquipmentTab();
    var e = this._newEquipmentVO;
    this._inventory.update();
    var t = this.scrollToNewEquipment(e);
    this.clearResultSlot();
    if (t) {
      this.sublayer.startNewItemAnimation(this.bindFunction(this.unLockDialog), t);
    }
  };
  CraftingEquipmentClickHandler.prototype.clearResultSlot = function () {
    o.MovieClipHelper.clearMovieClip(this.sublayerDisp.mc_animation);
  };
  CraftingEquipmentClickHandler.prototype.unLockDialog = function () {
    this._isLocked = false;
    o.BasicDialogHandler.getInstance().blockDialogs = false;
    this.unLockItemList();
    this.clearCraftingSlots();
    this.updateCraftButton();
    g.ButtonHelper.enableButton(this.craftingDisp.btn_backToEquip, true);
    g.ButtonHelper.enableButton(this.craftingDisp.btn_help, true);
    g.ButtonHelper.enableButton(this.craftingDisp.btn_close, true);
    this.updateAutofillButton();
  };
  CraftingEquipmentClickHandler.prototype.lockDialog = function () {
    o.BasicDialogHandler.getInstance().blockDialogs = true;
    this._isLocked = true;
    this.lockItemList();
    g.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, false);
  };
  CraftingEquipmentClickHandler.prototype.getCraftingClassCategory = function () {
    if (this.equipmentsToBeCrafted.length > 0) {
      return this.equipmentsToBeCrafted[0].rarity;
    } else {
      return CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN;
    }
  };
  CraftingEquipmentClickHandler.prototype.scrollToNewEquipment = function (e) {
    return this._inventory.scrollToItem(e);
  };
  CraftingEquipmentClickHandler.prototype.switchToNewEquipmentTab = function () {
    var e = s.int(this._inventory.currentFilterIndex);
    if (e == v.CastleCraftingSublayer.FILTER_GENERAL && this._newEquipmentVO.lordType == p.BasicEquippableVO.LORD_TYPE_BARON) {
      this._inventory.currentFilterIndex = v.CastleCraftingSublayer.FILTER_BARON;
    } else if (e == v.CastleCraftingSublayer.FILTER_BARON && this._newEquipmentVO.lordType == p.BasicEquippableVO.LORD_TYPE_COMMANDER) {
      this._inventory.currentFilterIndex = v.CastleCraftingSublayer.FILTER_GENERAL;
    }
  };
  CraftingEquipmentClickHandler.prototype.lockItemList = function () {
    this._inventory.lockList();
  };
  CraftingEquipmentClickHandler.prototype.unLockItemList = function () {
    this._inventory.unlockList();
  };
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "sublayerDisp", {
    get: function () {
      return this.sublayer.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "craftButtonEnabled", {
    set: function (e) {
      g.ButtonHelper.enableButton(this.sublayerDisp.btn_craft, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "backToEquipButtonEnabled", {
    set: function (e) {
      g.ButtonHelper.enableButton(this.craftingDisp.btn_backToEquip, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "helpTextId", {
    get: function () {
      return "help_equipmentCrafting";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(m.CraftingDialogClickHandler.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "equipmentsToBeCrafted", {
    get: function () {
      return u.CastleModel.equipData.craftingInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingEquipmentClickHandler.prototype, "dragMovement", {
    get: function () {
      return this._dragMovement;
    },
    set: function (e) {
      this._dragMovement = e;
    },
    enumerable: true,
    configurable: true
  });
  CraftingEquipmentClickHandler.__initialize_static_members = function () {
    CraftingEquipmentClickHandler.FILL_STRATEGY = new D.FillCraftingEquipmentStrategy();
  };
  CraftingEquipmentClickHandler.NO_CRAFTING_CATEGORY_CHOSEN = "";
  return CraftingEquipmentClickHandler;
}(m.CraftingDialogClickHandler);
exports.CraftingEquipmentClickHandler = S;
S.__initialize_static_members();