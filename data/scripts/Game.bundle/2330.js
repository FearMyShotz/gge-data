Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./16.js");
var c = require("./233.js");
var u = require("./4.js");
var d = require("./1312.js");
var p = require("./68.js");
var h = require("./8.js");
var g = require("./380.js");
var C = require("./1313.js");
var _ = function (e) {
  function CraftingGemClickHandler(t, i) {
    var n = this;
    n._minGemLevelForOuterSlots = CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN;
    n._maxGemLevelForCenterSlot = r.int(s.GemConst.MAX_GEM_LEVEL);
    n._resultIsDisplayed = false;
    CONSTRUCTOR_HACK;
    (n = e.call(this, t) || this).sublayer = i;
    n.autofillStrategy = new O.FillCraftingGemStrategy();
    n.updateCraftInfos();
    n.updateSlotBordersAndBars();
    return n;
  }
  n.__extends(CraftingGemClickHandler, e);
  CraftingGemClickHandler.prototype.init = function () {
    e.prototype.init.call(this);
    u.CastleModel.gemData.addEventListener(c.CastleGemEvent.GEM_CRAFTING_SUCCESS, this.bindFunction(this.onGemCraftingSuccess));
    u.CastleModel.gemData.addEventListener(c.CastleGemEvent.GEM_CRAFTING_FAILURE, this.bindFunction(this.onGemCraftingFailure));
    u.CastleModel.gemData.addEventListener(c.CastleGemEvent.GEM_CRAFTING_SERVER_ERROR, this.bindFunction(this.onGemCraftingServerError));
    this.controller.addEventListener(c.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
    this.setStorageWarning();
    this.craftingDialog.dialogDisp.mc_equipmentList.mc_storageSpace.icon.gotoAndStop(2);
    this.craftingDialog.eqFilterPanel.hide();
  };
  CraftingGemClickHandler.prototype.dispose = function () {
    u.CastleModel.gemData.removeEventListener(c.CastleGemEvent.GEM_CRAFTING_SUCCESS, this.bindFunction(this.onGemCraftingSuccess));
    u.CastleModel.gemData.removeEventListener(c.CastleGemEvent.GEM_CRAFTING_FAILURE, this.bindFunction(this.onGemCraftingFailure));
    u.CastleModel.gemData.removeEventListener(c.CastleGemEvent.GEM_CRAFTING_SERVER_ERROR, this.bindFunction(this.onGemCraftingServerError));
    this.controller.removeEventListener(c.CastleGemEvent.INVENTORY_SPACE_LEFT, this.bindFunction(this.onInventorySpaceChanged));
  };
  CraftingGemClickHandler.prototype.onInventorySpaceChanged = function (e) {
    this.setStorageWarning();
  };
  CraftingGemClickHandler.prototype.setStorageWarning = function () {
    this.craftingDialog.itxt_storage.textContentVO.textReplacements = [u.CastleModel.gemData.filledInventorySpace, u.CastleModel.gemData.playerTotalInventorySpace];
    this.craftingDialog.itxt_storage.color = u.CastleModel.gemData.isInventoryFull ? l.ClientConstColor.FONT_INSUFFICIENT_COLOR : l.ClientConstColor.FONT_DEFAULT_COLOR;
    this.craftingDialog.dialogDisp.mc_equipmentList.mc_storageSpace.toolTipText = "dialog_gemSpace_tooltip";
  };
  CraftingGemClickHandler.prototype.handleInventoryClick = function (t) {
    if (!this._isLocked && h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.handleInventoryClick.call(this, t);
      if (this.dragMovement && t.target.parent == this.craftingDisp.mc_equipmentList && instanceOf(t.target, "Bitmap")) {
        this.endDrag(new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY));
      }
    }
  };
  CraftingGemClickHandler.prototype.handleInventoryEntryClick = function (e) {
    if (!this._isLocked && !e.scrollItem.scrollItemVO.locked) {
      var t = e.scrollItem.scrollItemVO.gemVO;
      if (this.dragMovement) {
        if (e.scrollItem.scrollItemVO) {
          this.endDrag(new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY));
          this.startGemDrag(new E.GemDragMovement(t, new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY)));
        } else {
          this.endDrag(new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY));
        }
      } else {
        this.startGemDrag(new E.GemDragMovement(t, new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  CraftingGemClickHandler.prototype.handleInventoryEntryTouchDragStart = function (e) {
    if (!this._isLocked && !e.scrollItem.scrollItemVO.locked) {
      var t = e.scrollItem.scrollItemVO && e.scrollItem.scrollItemVO.gemVO;
      if (t && !this.dragMovement) {
        this.startGemDrag(new E.GemDragMovement(t, new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY)));
      }
    }
  };
  CraftingGemClickHandler.prototype.handleInventoryEntryTouchDragEnd = function (e) {
    if (this.dragMovement) {
      if (e.originEvent) {
        var t = e.originEvent.target.stage.getObjectUnderPoint(e.originEvent.rawX, e.originEvent.rawY, 0).parent;
        if (t) {
          switch (t) {
            case this.sublayerDisp.slot0:
            case this.sublayerDisp.slot1:
            case this.sublayerDisp.slot2:
            case this.sublayerDisp.slot3:
            case this.sublayerDisp.slot4:
            case this.sublayerDisp.slot5:
              this.handleSlotClick(t);
          }
        }
      }
      this.endDrag(new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY));
    }
  };
  CraftingGemClickHandler.prototype.handleDialogClick = function (t) {
    if (!this._isLocked && h.ButtonHelper.isButtonEnabled(t.target)) {
      e.prototype.handleDialogClick.call(this, t);
      switch (t.target) {
        case this.sublayerDisp.slot0:
        case this.sublayerDisp.slot1:
        case this.sublayerDisp.slot2:
        case this.sublayerDisp.slot3:
        case this.sublayerDisp.slot4:
        case this.sublayerDisp.slot5:
        case this.sublayerDisp.slot6:
          this.handleSlotClick(t.target);
          break;
        case this.sublayerDisp.btn_craft:
          this.craftGem(false);
          break;
        case this.sublayerDisp.btn_craftRubies:
          this.craftGem(true);
          break;
        case this.craftingDisp.btn_autofill:
          if (this.dragMovement) {
            this.endDrag(new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY));
          }
          this.autofillStrategy.fillCraftingSlots(this.sublayer.allSlotsOnScreen, this.sublayer.resultSlot, this._inventory.currentFilter);
          this.updateDialog();
          break;
        case this.inventoryDisp.tab0:
        case this.inventoryDisp.tab1:
        case this.inventoryDisp.tab2:
        case this.inventoryDisp.tab3:
          this.endDrag(new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY));
      }
    }
  };
  CraftingGemClickHandler.prototype.handleSlotClick = function (e) {
    if (!e.mc_lock.visible) {
      var t = e == this.sublayer.resultSlot ? g.EquipableDragLocationVO.TYPE_CRAFTING_CENTER : g.EquipableDragLocationVO.TYPE_CRAFTING;
      if (this.dragMovement) {
        if (this.isEmptySlot(e)) {
          this.endDrag(new g.EquipableDragLocationVO(t), e);
        } else {
          var i = new E.GemDragMovement(e.gemVO, new g.EquipableDragLocationVO(t));
          this.endDrag(new g.EquipableDragLocationVO(t), e);
          this.startGemDrag(i);
          this.highlightSlot(e);
        }
      } else if (!this.isEmptySlot(e)) {
        this.startGemDrag(new E.GemDragMovement(e.gemVO, new g.EquipableDragLocationVO(t), e));
        this.highlightSlot(e);
      }
    }
  };
  CraftingGemClickHandler.prototype.handleDialogMouseOver = function (e) {
    var t = e.target;
    switch (t) {
      case this.sublayerDisp.slot0:
      case this.sublayerDisp.slot1:
      case this.sublayerDisp.slot2:
      case this.sublayerDisp.slot3:
      case this.sublayerDisp.slot4:
      case this.sublayerDisp.slot5:
      case this.sublayerDisp.slot6:
        this.showGemTooltip(t);
        if (this.dragMovement) {
          this.highlightSlot(t);
        }
        break;
      case this.sublayerDisp.btn_craftRubies:
        this.mouseOverRubyCraft(t);
        break;
      default:
        this.mouseOverRubyCraft();
        if (this.dragMovement) {
          this.disableHighlightedSlot();
        }
    }
  };
  CraftingGemClickHandler.prototype.disableHighlightedSlot = function () {
    if (this._highlightedSlot) {
      this._highlightedSlot.useFilters(p.BitmapFilterHelper.NO_FILTER);
      this._highlightedSlot = null;
    }
  };
  CraftingGemClickHandler.prototype.highlightSlot = function (e) {
    if (this._highlightedSlot) {
      this.disableHighlightedSlot();
    }
    if (!e.mc_lock.visible) {
      this._highlightedSlot = e;
      e.useFilters(p.BitmapFilterHelper.FILTER_GLOW_CRAFTING_DRAGGED_MOUSE_OVER, false, 1);
    }
  };
  CraftingGemClickHandler.prototype.mouseOverRubyCraft = function (e = null) {
    if (e) {
      if (this.craftingInventory.length == s.GemConst.NUM_GEMS_NEEDED_FOR_UPGRADE) {
        this.sublayer.setUpgradeChance(100, l.ClientConstColor.GENERIC_GREEN);
      }
    } else {
      var t = this.centerGemLevelInfos;
      var i = r.int(t ? t.craftSuccessChance : 0);
      this.sublayer.setUpgradeChance(i, l.ClientConstColor.FONT_DEFAULT_COLOR);
    }
  };
  CraftingGemClickHandler.prototype.showGemTooltip = function (e) {
    if (e.gemVO) {
      f.EquipmentIconHelper.showToolTip(e, e.gemVO);
    }
  };
  CraftingGemClickHandler.prototype.startGemDrag = function (e) {
    this.dragMovement = e;
    this.dragMovement.startDrag();
    this.updateDialog();
    this.tabChangeAllowed = false;
  };
  CraftingGemClickHandler.prototype.endDrag = function (e, t = null) {
    if (this.dragMovement) {
      this.dragMovement.stopDrag(e, t);
      this.dragMovement = null;
      this.updateDialog();
      this.disableHighlightedSlot();
      this.tabChangeAllowed = true;
    }
  };
  CraftingGemClickHandler.prototype.updateDialog = function () {
    this._inventory.update();
    this.updateGemLevelsRestraints();
    this.updateCraftInfos();
    this.updateSlotBordersAndBars();
    this.updateSlotLocks();
    this.updateInventoryGreyOuts();
  };
  CraftingGemClickHandler.prototype.updateGemLevelsRestraints = function () {
    this._minGemLevelForOuterSlots = r.int(this.centerGem ? this.centerGem.level : CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN);
    this._maxGemLevelForCenterSlot = CraftingGemClickHandler.DEFAULT_MAX_LEVEL_CENTER;
    if (this.craftingInventory != null) {
      for (var e = 0, t = this.craftingInventory; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          var n = i;
          if (n && n instanceof m.CastleGemVO && n.level < this._maxGemLevelForCenterSlot) {
            this._maxGemLevelForCenterSlot = n.level;
          }
        }
      }
    }
  };
  CraftingGemClickHandler.prototype.updateCraftInfos = function () {
    this.sublayer.resetCostsAndChance(!this._resultIsDisplayed);
    var e;
    var t = this.centerGem != null;
    var i = r.int(this.craftingInventory.length);
    if (i < s.GemConst.NUM_GEMS_NEEDED_FOR_UPGRADE) {
      this.sublayer.setCraftButton(false, "dialog_gems_craftGems_gemSlotsMissing_tooltip");
      this.sublayer.setCraftRubyButton(false, "dialog_gems_craftGems_gemSlotsMissing_tooltip");
      h.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, true);
      this.craftingDisp.btn_autofill.toolTipText = null;
      if (t) {
        e = this.centerGemLevelInfos;
        this.sublayer.setUpgradeChance(e.craftSuccessChance, l.ClientConstColor.FONT_DEFAULT_COLOR);
        this.sublayer.upgradePrice = e.craftCostC1;
      }
    } else if (t || i != s.GemConst.NUM_GEMS_NEEDED_FOR_UPGRADE) {
      if (t && i == s.GemConst.NUM_GEMS_NEEDED_FOR_UPGRADE) {
        e = this.centerGemLevelInfos;
        this.sublayer.setCraftButton(true, "dialog_gems_craftGems_readyUpgrade_tooltip");
        if (this.centerGem.levelInfos.craftSuccessChance == d.CastleGemLevelInfoVO.NO_CRAFT_FAIL_CHANCE) {
          this.sublayer.setCraftRubyButton(false, "dialog_gems_craftGems_firstEnchanted_norubin");
        } else {
          this.sublayer.setCraftRubyButton(true, {
            t: "dialog_gems_craftGems_premiumUpgrade_tooltip",
            p: [this.getCraftRubyCosts(e)]
          });
        }
        this.sublayer.setUpgradeChance(e.craftSuccessChance, l.ClientConstColor.FONT_DEFAULT_COLOR);
        this.sublayer.upgradePrice = e.craftCostC1;
        h.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, false);
        this.craftingDisp.btn_autofill.toolTipText = "dialog_equipment_craftingSmithy_slotFull_tt";
      }
    } else {
      this.sublayer.setCraftButton(false, "dialog_gems_craftGems_gemCentralSlot_tooltip");
      this.sublayer.setCraftRubyButton(false, "dialog_gems_craftGems_gemCentralSlot_tooltip");
      h.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, true);
      this.craftingDisp.btn_autofill.toolTipText = null;
    }
  };
  CraftingGemClickHandler.prototype.getCraftRubyCosts = function (e) {
    return r.int(u.CastleModel.costsData.getFinalCostsC2(e.craftCostC2));
  };
  Object.defineProperty(CraftingGemClickHandler.prototype, "centerGemLevelInfos", {
    get: function () {
      if (this.centerGem && y.instanceOfClass(this.centerGem, "CastleGemVO")) {
        return this.centerGem.levelInfos;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CraftingGemClickHandler.prototype.updateSlotLocks = function () {
    var e = this.sublayer.allSlotsOnScreen;
    var t = this.sublayer.resultSlot;
    if (e != null) {
      for (var i = 0, n = e; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          if (this.dragMovement && (y.instanceOfClass(this.dragMovement.draggedGemVO, "CastleGemVO") && this.dragMovement.draggedGemVO.isUnique || y.instanceOfClass(this.dragMovement.draggedGemVO, "RelicGemVO"))) {
            this.lockSlot(o);
          } else {
            this.unlockSlot(o);
          }
        }
      }
    }
    if (this.dragMovement && (y.instanceOfClass(this.dragMovement.draggedGemVO, "CastleGemVO") && (this.dragMovement.draggedGemVO.upgradeId < 0 || this._maxGemLevelForCenterSlot < this.dragMovement.draggedGemVO.level) || y.instanceOfClass(this.dragMovement.draggedGemVO, "RelicGemVO"))) {
      this.lockSlot(t);
    } else {
      this.unlockSlot(t);
    }
    this.updateSlotToolTips(e, t);
  };
  CraftingGemClickHandler.prototype.unlockSlot = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.mc_lock.visible = false;
  };
  CraftingGemClickHandler.prototype.lockSlot = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.mc_lock.visible = true;
  };
  CraftingGemClickHandler.prototype.updateSlotToolTips = function (e, t) {
    var i;
    var n;
    if (this.dragMovement && y.instanceOfClass(this.dragMovement.draggedGemVO, "RelicGemVO")) {
      i = "dialog_equipment_forge_relicItem_forgeBlocked_tooltip";
      n = "dialog_equipment_forge_relicItem_forgeBlocked_tooltip";
    } else if (this._minGemLevelForOuterSlots != CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN) {
      i = "";
      n = {
        t: "dialog_gems_craftGems_insertLevelXGem_tooltip",
        p: [this._minGemLevelForOuterSlots]
      };
    } else if (this.dragMovement && y.instanceOfClass(this.dragMovement.draggedGemVO, "CastleGemVO") && this.dragMovement.draggedGemVO.level >= this.dragMovement.draggedGemVO.maxLevel) {
      i = {
        t: "dialog_gems_craftGems_insertLevelTenGem_tooltip",
        p: [Math.min(this._maxGemLevelForCenterSlot, s.GemConst.MAX_GEM_LEVEL - 1)]
      };
      n = "dialog_gems_craftGems_insertGem_destroy_tooltip";
    } else {
      i = this.dragMovement && y.instanceOfClass(this.dragMovement.draggedGemVO, "CastleGemVO") && this.dragMovement.draggedGemVO.upgradeId < 0 ? "dialog_gems_craftGems_insertLevelTenGem_tooltip" : "dialog_gems_craftGems_insertGem_tooltip";
      n = "dialog_gems_craftGems_insertGem_destroy_tooltip";
    }
    if (e != null) {
      for (var o = 0, a = e; o < a.length; o++) {
        var r = a[o];
        if (r !== undefined) {
          if (r.gemVO) {
            r.toolTipText = "";
          } else {
            r.toolTipText = n;
          }
        }
      }
    }
    if (t.gemVO) {
      t.toolTipText = "";
    } else {
      t.toolTipText = i;
    }
  };
  CraftingGemClickHandler.prototype.updateInventoryGreyOuts = function () {
    if (this._minGemLevelForOuterSlots != CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN) {
      this.greyOutNonCraftablesByCenterSlot();
    } else {
      this.disableGreyOut();
    }
  };
  CraftingGemClickHandler.prototype.greyOutNonCraftablesByCenterSlot = function () {
    if (this._minGemLevelForOuterSlots != CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN) {
      this._inventory.forEachItemVO(this.bindFunction(this.greyOutByCenterSlot));
      this._inventory.redraw();
    }
  };
  CraftingGemClickHandler.prototype.greyOutByCenterSlot = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    var n = e.gemVO;
    if (n && n instanceof m.CastleGemVO && n.level < this._minGemLevelForOuterSlots) {
      e.locked = true;
    } else if (y.instanceOfClass(e.gemVO, "RelicGemVO")) {
      e.locked = true;
    }
  };
  CraftingGemClickHandler.prototype.disableGreyOut = function () {
    if (this._minGemLevelForOuterSlots != CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN) {
      this._inventory.forEachItemVO(this.bindFunction(this.enableScrollItem));
      this._inventory.redraw();
    }
  };
  CraftingGemClickHandler.prototype.enableScrollItem = function (e) {
    var t = [];
    for (var i = 1; i < arguments.length; i++) {
      t[i - 1] = arguments[i];
    }
    e.locked = false;
  };
  CraftingGemClickHandler.prototype.updateSlotBordersAndBars = function () {
    var e = h.ButtonHelper.isButtonEnabled(this.sublayerDisp.btn_craft);
    var t = this.sublayer.allSlotsOnScreen;
    for (var i = this.sublayer.allConnectionBarMCs, n = 0; n < i.length; n++) {
      var o = i[n];
      var a = t[n];
      this.setColor(e, a, o);
    }
    this.setColor(e, this.sublayer.resultSlot);
  };
  CraftingGemClickHandler.prototype.setColor = function (e, t, i = null) {
    var n = 0;
    n = e ? CraftingGemClickHandler.FRAME_CRAFTING_READY : t.gemVO ? CraftingGemClickHandler.FRAME_SLOTTED_SLOT : CraftingGemClickHandler.FRAME_EMPTY_SLOT;
    t.mc_bg.gotoAndStop(n);
    if (i) {
      i.gotoAndStop(n);
    }
  };
  CraftingGemClickHandler.prototype.craftGem = function (e) {
    this.lockDialog();
    this.isWaitingForServerMessage = true;
    a.BasicDialogHandler.getInstance().blockDialogs = true;
    u.CastleModel.gemData.craftGem(e);
  };
  CraftingGemClickHandler.prototype.onGemCraftingServerError = function (e) {
    this.unlockDialog();
    this._inventory.update();
  };
  CraftingGemClickHandler.prototype.onGemCraftingFailure = function (e) {
    this.sublayer.playFailAnimation(this.bindFunction(this.onFailAnimationFinished));
    this.setResultText("dialog_gems_craftGems_fail", l.ClientConstColor.FONT_INSUFFICIENT_COLOR);
  };
  CraftingGemClickHandler.prototype.onGemCraftingSuccess = function (e) {
    this._newGem = e.gemInventory[0];
    this.sublayer.playSuccessAnimation(this.bindFunction(this.onSuccessAnimationFinished));
    this.setResultText("dialog_gems_craftGems_sucess", l.ClientConstColor.GENERIC_GREEN);
  };
  CraftingGemClickHandler.prototype.setResultText = function (e, t) {
    this.sublayer.setUpgradeResult(e, t);
    this._resultIsDisplayed = true;
    window.setTimeout(this.bindFunction(this.removeResultText), 3000);
  };
  CraftingGemClickHandler.prototype.removeResultText = function () {
    this.sublayer.setUpgradeResult("", l.ClientConstColor.FONT_DEFAULT_COLOR);
    this._resultIsDisplayed = false;
  };
  CraftingGemClickHandler.prototype.onFailAnimationFinished = function () {
    this.clearCraftingSlots(false);
    this.unlockDialog();
  };
  CraftingGemClickHandler.prototype.onSuccessAnimationFinished = function () {
    this.clearCraftingSlots(true);
    var e = this._inventory.scrollToItem(this._newGem);
    this.sublayer.startNewItemAnimation(this.bindFunction(this.unlockDialog), e);
    this._newGem = null;
  };
  CraftingGemClickHandler.prototype.lockDialog = function () {
    this._isLocked = true;
    this._inventory.lockList();
    this.sublayer.setCraftButton(false, "");
    this.sublayer.setCraftRubyButton(false, "");
    h.ButtonHelper.enableButton(this.craftingDisp.btn_backToEquip, false);
    h.ButtonHelper.enableButton(this.craftingDisp.btn_help, false);
    h.ButtonHelper.enableButton(this.craftingDisp.btn_close, false);
    h.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, false);
  };
  CraftingGemClickHandler.prototype.unlockDialog = function () {
    this._isLocked = false;
    this._inventory.unlockList();
    this.updateCraftInfos();
    h.ButtonHelper.enableButton(this.craftingDisp.btn_backToEquip, true);
    h.ButtonHelper.enableButton(this.craftingDisp.btn_help, true);
    h.ButtonHelper.enableButton(this.craftingDisp.btn_close, true);
    h.ButtonHelper.enableButton(this.craftingDisp.btn_autofill, true);
    a.BasicDialogHandler.getInstance().blockDialogs = false;
  };
  CraftingGemClickHandler.prototype.isEmptySlot = function (e) {
    return e.gemVO == null;
  };
  Object.defineProperty(CraftingGemClickHandler.prototype, "helpTextId", {
    get: function () {
      return "help_craftGems";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(C.CraftingDialogClickHandler.prototype, "helpTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  CraftingGemClickHandler.prototype.hideDialog = function () {
    this.resetCrafting();
    e.prototype.hideDialog.call(this);
  };
  CraftingGemClickHandler.prototype.resetCrafting = function () {
    this.endDrag(new g.EquipableDragLocationVO(g.EquipableDragLocationVO.TYPE_INVENTORY));
    u.CastleModel.gemData.returnCraftingToInventory();
    this.clearCraftingSlots(true);
    this.sublayer.clearAnimationFinishedCallbacks();
    this.unlockDialog();
  };
  CraftingGemClickHandler.prototype.clearCraftingSlots = function (e) {
    var t = this.sublayer.resultSlot;
    for (var i = 0, n = this.sublayer.allSlotsOnScreen; i < n.length; i++) {
      var a = n[i];
      if (a !== undefined && (a != t || e)) {
        a.gemVO = null;
        o.MovieClipHelper.clearMovieClip(a.mc_itemHolder);
      }
    }
    this._maxGemLevelForCenterSlot = CraftingGemClickHandler.DEFAULT_MAX_LEVEL_CENTER;
    this.updateDialog();
  };
  Object.defineProperty(CraftingGemClickHandler.prototype, "sublayerDisp", {
    get: function () {
      return this.sublayer.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingGemClickHandler.prototype, "centerGem", {
    get: function () {
      return u.CastleModel.gemData.centerGem;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingGemClickHandler.prototype, "craftingInventory", {
    get: function () {
      return u.CastleModel.gemData.craftingInventory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingGemClickHandler.prototype, "dragMovement", {
    get: function () {
      return this._dragMovement;
    },
    set: function (e) {
      this._dragMovement = e;
    },
    enumerable: true,
    configurable: true
  });
  CraftingGemClickHandler.__initialize_static_members = function () {
    CraftingGemClickHandler.DEFAULT_MAX_LEVEL_CENTER = r.int(s.GemConst.MAX_GEM_LEVEL - 1);
  };
  CraftingGemClickHandler.NO_MIN_GEM_CRAFTING_CHOSEN = 0;
  CraftingGemClickHandler.FRAME_EMPTY_SLOT = 1;
  CraftingGemClickHandler.FRAME_SLOTTED_SLOT = 2;
  CraftingGemClickHandler.FRAME_CRAFTING_READY = 3;
  return CraftingGemClickHandler;
}(C.CraftingDialogClickHandler);
exports.CraftingGemClickHandler = _;
var m = require("./728.js");
var f = require("./73.js");
var O = require("./2331.js");
_.__initialize_static_members();
var E = require("./1302.js");
var y = require("./1.js");