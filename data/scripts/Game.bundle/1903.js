Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./1.js");
var c = require("./1.js");
var u = require("./5.js");
var d = require("./5.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./3.js");
var C = require("./6.js");
var _ = require("./23.js");
var m = require("./23.js");
var f = require("./16.js");
var O = require("./4424.js");
var E = require("./516.js");
var y = require("./893.js");
var b = require("./119.js");
var D = require("./139.js");
var I = require("./26.js");
var T = require("./44.js");
var v = require("./4.js");
var S = require("./198.js");
var A = require("./127.js");
var L = require("./927.js");
var P = require("./68.js");
var M = require("./8.js");
var R = require("./41.js");
var V = require("./73.js");
var x = require("./4425.js");
var w = require("./923.js");
var B = createjs.Event;
var F = createjs.MouseEvent;
var N = function (e) {
  function CastleEquipmentEnchanterDialog() {
    var t = this;
    t.mouseIsPlaying = false;
    t._comesFromInventory = false;
    t.mouseOverPayC2 = false;
    t.mouseOverPayC1 = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleEquipmentEnchanterDialog.NAME) || this;
  }
  n.__extends(CastleEquipmentEnchanterDialog, e);
  CastleEquipmentEnchanterDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_payC1, this.dialogDisp.btn_payC2, this.dialogDisp.btn_general, this.dialogDisp.btn_baron, this.dialogDisp.btn_all, this.dialogDisp.mc_equipmentList.btn_up, this.dialogDisp.mc_equipmentList.btn_down, this.dialogDisp.btn_help]);
    for (var i = 0; i < CastleEquipmentEnchanterDialog.ITEMS_PER_PAGE; i++) {
      var n = this.dialogDisp.mc_equipmentList["item" + i];
      if (n) {
        M.ButtonHelper.initBasicButton(n);
      }
    }
    this.dialogDisp.btn_general.toolTipText = "dialog_equipmentEnchanterEvent_generalItems";
    this.dialogDisp.btn_baron.toolTipText = "dialog_equipmentEnchanterEvent_baronItems";
    this.dialogDisp.btn_all.toolTipText = "dialog_equipmentEnchanterEvent_inventoryItems";
    this.dialogDisp.btn_payC2.toolTipText = "dialog_equipmentEnchanterEvent_pay";
    this.dialogDisp.mc_animationFailed.visible = false;
    this.dialogDisp.mc_itemTarget.mouseChildren = false;
    this.dialogDisp.mc_text_Success.useFilters(P.BitmapFilterHelper.NO_FILTER);
    this.dialogDisp.mc_text_Failed.useFilters(P.BitmapFilterHelper.NO_FILTER);
    this.dialogDisp.mc_equipmentList.tickEnabled = this.dialogDisp.mc_equipmentList.tickChildren = false;
  };
  CastleEquipmentEnchanterDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new g.LocalizedTextVO("dialog_equipmentEnchanterEvent_title"));
    this.itxt_failMessage = this.textFieldManager.registerTextField(this.dialogDisp.mc_text_Failed.txt_value, new g.LocalizedTextVO("dialog_equipmentEnchanterEvent_miss"));
    this.itxt_successMessage = this.textFieldManager.registerTextField(this.dialogDisp.mc_text_Success.txt_value, new g.LocalizedTextVO("dialog_equipmentEnchanterEvent_success"));
    this.i_howMany_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_howMany.txt_value, new g.LocalizedTextVO(a.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    this.i_succRate_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_successRate.txt_value, new g.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [0]));
    this.i_costs_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new h.LocalizedNumberVO(0));
    this.i_eqList_txt_emptyEquipList = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipmentList.txt_emptyEquipList, new g.LocalizedTextVO("dialog_equipmentEnchanterEvent_noItemInList_all"));
    this.itxt_emptyBoniList = this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyBoniList, new g.LocalizedTextVO(""));
    this.currentLordFilter = CastleEquipmentEnchanterDialog.FILTER_GENERAL;
    this.initSlots();
    this.updateEffectList();
    this.getEquipmentInventory();
    v.CastleModel.specialEventData.addEventListener(I.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshEvent));
    v.CastleModel.specialEventData.addEventListener(I.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this.layoutManager.uiStage.addEventListener(F.MOUSE_MOVE, this.bindFunction(this.playMouse));
    this.controller.addEventListener(D.CastleArmyDataEvent.REMOVE_MOVEMENT, this.bindFunction(this.onMovementRemoved));
    this.controller.addEventListener(b.CastleEquipmentEvent.EQUIPMENT_ENCHANTED, this.bindFunction(this.onEquipmentEnchanted));
    this.controller.addEventListener(b.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED, this.bindFunction(this.onEquipmentEnchantingFailed));
    this.controller.addEventListener(b.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID, this.bindFunction(this.onEquipmentEnchantingInvalid));
    this.disp.addEventListener(F.MOUSE_OUT, this.bindFunction(this.onMouseOutCheck));
    this.dialogDisp.mc_itemTarget.mc_bg.gotoAndStop(1);
    this.dialogDisp.mc_itemTarget.toolTipText = CastleEquipmentEnchanterDialog.TARGET_TOOLTIP_ID;
    this.dialogDisp.mc_animationFailed.visible = false;
    this.dialogDisp.mc_animationFailed.gotoAndStop(1);
    this.dialogDisp.mc_text_Failed.visible = false;
    this.dialogDisp.mc_animationSuccess.visible = false;
    this.dialogDisp.mc_animationSuccess.gotoAndPlay(1);
    this.dialogDisp.mc_text_Success.visible = false;
    this.updatePrimeSaleInfo();
  };
  CastleEquipmentEnchanterDialog.prototype.updatePrimeSaleInfo = function () {
    this._primeSaleEventVO = v.CastleModel.specialEventData.getActiveEventByEventId(d.EventConst.EVENTTYPE_PRIME_SALES_TECHNICUS);
    if (this._primeSaleEventVO) {
      this.dialogDisp.mc_discount_stamp.visible = true;
      this.dialogDisp.mc_ruby_button_tooltip.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_discount_stamp.txt_discount, new h.LocalizedNumberVO(this._primeSaleEventVO.discount * -1));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_ruby_button_tooltip.txt_tooltip, new g.LocalizedTextVO("dialog_equipmentEnchanterEvent_primeSale_info"));
    } else {
      this.dialogDisp.mc_discount_stamp.visible = false;
      this.dialogDisp.mc_ruby_button_tooltip.visible = false;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onMouseOutCheck = function (e) {
    if ((e.stageX <= 0 || e.stageX >= this.disp.stage.stageWidth || e.stageY <= 0 || e.stageY >= this.disp.stage.stageHeight) && this._selectedDragEquipment) {
      if (this._comesFromInventory) {
        this.dropItemOnList();
      } else {
        this.dropItemOnEmtpySlot();
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onEquipmentEnchantingInvalid = function (e) {
    this.dialogDisp.mc_animationSuccess.visible = false;
    this.dialogDisp.mc_animationSuccess.gotoAndStop(1);
    this.dialogDisp.mc_animationFailed.visible = false;
    this.dialogDisp.mc_animationFailed.gotoAndStop(1);
    this.unLockDialog();
  };
  CastleEquipmentEnchanterDialog.prototype.onRefreshEvent = function (e) {
    this.updatePrimeSaleInfo();
    this.updateEffectList();
  };
  CastleEquipmentEnchanterDialog.prototype.onRemoveEvent = function (e) {
    if (c.instanceOfClass(e.specialEventVO, "EquipmentEnhancerEventVO")) {
      this.hide();
    } else if (c.instanceOfClass(e.specialEventVO, "EquipmentEnhancerPrimeSaleEventVO")) {
      this.updatePrimeSaleInfo();
      this.updateEffectList();
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onEquipmentEnchantingFailed = function (e) {
    this.dialogDisp.mc_animationSuccess.visible = false;
    this.dialogDisp.mc_animationSuccess.gotoAndStop(1);
    this.dialogDisp.mc_animationFailed.visible = true;
    this.dialogDisp.mc_animationFailed.gotoAndPlay(2);
    this.unLockDialog();
    this.dialogDisp.addEventListener(B.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    m.TweenMax.fromTo(this.dialogDisp.mc_text_Failed, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: _.Linear.easeIn,
      onComplete: this.bindFunction(this.onCompleteFadeInNowFadeOut),
      onCompleteParams: [this.dialogDisp.mc_text_Failed]
    });
    this.dialogDisp.mc_text_Failed.visible = true;
    this.dialogDisp.mc_text_Failed.updateCacheIfCached();
  };
  CastleEquipmentEnchanterDialog.prototype.onCompleteFadeInNowFadeOut = function (e) {
    m.TweenMax.fromTo(e, 1, {
      alpha: 1
    }, {
      alpha: 0,
      ease: _.Linear.easeIn,
      onComplete: this.onCompleteFadeOut,
      onCompleteParams: [e]
    });
  };
  CastleEquipmentEnchanterDialog.prototype.onCompleteFadeOut = function (e) {
    e.visible = false;
  };
  CastleEquipmentEnchanterDialog.prototype.lockDialog = function () {
    e.prototype.lockDialog.call(this);
    M.ButtonHelper.enableButton(this.dialogDisp.btn_payC1, false);
    M.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, false);
    this.dialogDisp.btn_payC1.toolTipText = null;
    this.dialogDisp.btn_payC2.toolTipText = null;
  };
  CastleEquipmentEnchanterDialog.prototype.unLockDialog = function () {
    e.prototype.unLockDialog.call(this);
    this.updateEffectList();
    if (this.mouseOverPayC1) {
      this.layoutManager.tooltipManager.show(this.dialogDisp.btn_payC1.toolTipText, this.dialogDisp.btn_payC1);
    }
    if (this.mouseOverPayC2) {
      if (this.dialogDisp.btn_payC2.enabled) {
        this.i_succRate_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
        this.i_succRate_txt_value.textContentVO.textReplacements = [100];
        this.i_succRate_txt_value.color = 34816;
      }
      this.layoutManager.tooltipManager.show(this.dialogDisp.btn_payC2.toolTipText, this.dialogDisp.btn_payC2);
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onEnterFrame = function (e) {
    if (this.dialogDisp.mc_animationFailed.currentFrame == 0 && this.dialogDisp.mc_animationSuccess.currentFrame == 0) {
      this.dialogDisp.mc_animationFailed.visible = false;
      this.dialogDisp.mc_animationSuccess.visible = false;
      this.dialogDisp.removeEventListener(B.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
      this.unLockDialog();
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onEquipmentEnchanted = function (e) {
    var t = this.getLordByItem(this.dialogDisp.mc_itemTarget.slotVO.equipmentVO);
    V.EquipmentIconHelper.addEquipmentIcon(e.equipmentInventory[0], this.dialogDisp.mc_itemTarget.mc_equipmentHolder, CastleEquipmentEnchanterDialog.MAX_WIDTH, CastleEquipmentEnchanterDialog.MAX_HEIGHT, null, true, false, false, true, true);
    this.dialogDisp.mc_itemTarget.slotVO.equipmentVO = e.equipmentInventory[0];
    if (t) {
      t.setEquipment(e.equipmentInventory[0]);
    }
    this.dialogDisp.mc_animationFailed.visible = false;
    this.dialogDisp.mc_animationFailed.gotoAndStop(1);
    this.dialogDisp.mc_animationSuccess.visible = true;
    this.dialogDisp.mc_animationSuccess.gotoAndPlay(2);
    this.unLockDialog();
    this.dialogDisp.addEventListener(B.ENTER_FRAME, this.bindFunction(this.onEnterFrame));
    m.TweenMax.fromTo(this.dialogDisp.mc_text_Success, 1, {
      alpha: 0
    }, {
      alpha: 1,
      ease: _.Linear.easeIn,
      onComplete: this.bindFunction(this.onCompleteFadeInNowFadeOut),
      onCompleteParams: [this.dialogDisp.mc_text_Success]
    });
    this.dialogDisp.mc_text_Success.visible = true;
    this.dialogDisp.mc_text_Success.updateCacheIfCached();
  };
  CastleEquipmentEnchanterDialog.prototype.playMouse = function (e) {
    if (this.mouseIsPlaying) {
      if (this.dialogDisp.mc_wheel.currentFrame == 0) {
        this.mouseIsPlaying = false;
      }
    } else {
      this.dialogDisp.mc_wheel.play();
      this.dialogDisp.mc_mouse.play();
      this.mouseIsPlaying = true;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onMovementRemoved = function (e) {
    this.updateFilteredInventory();
  };
  CastleEquipmentEnchanterDialog.prototype.getEquipmentInventory = function () {
    v.CastleModel.lordData.addEventListener(b.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onLordsUpdated));
    this.controller.addEventListener(b.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    v.CastleModel.smartfoxClient.sendCommandVO(new y.C2SGetLordsInfoVO());
    this.lockDialog();
  };
  CastleEquipmentEnchanterDialog.prototype.onLordsUpdated = function (e) {
    v.CastleModel.smartfoxClient.sendCommandVO(new E.C2SGetEquipmentInventory());
  };
  CastleEquipmentEnchanterDialog.prototype.onInventoryUpdated = function (e) {
    this.unLockDialog();
    var t = v.CastleModel.equipData.playerInventory;
    this._equipmentInventory = t.concat([]);
    this.updateFilteredInventory();
  };
  CastleEquipmentEnchanterDialog.prototype.initScrollList = function () {
    e.prototype.initScrollList.call(this);
    this.checkCraftingCategoryAndLockItems();
  };
  Object.defineProperty(CastleEquipmentEnchanterDialog.prototype, "favIconByEQRenderer", {
    get: function () {
      return true;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentEnchanterDialog.prototype.updateFilteredInventory = function () {
    this._filteredInventory = this.equipmentInventory;
    this.initScrollList();
    this.checkCraftingCategoryAndLockItems();
    this.i_eqList_txt_emptyEquipList = this.textFieldManager.registerTextField(this.dialogDisp.mc_equipmentList.txt_emptyEquipList, new g.LocalizedTextVO("dialog_equipmentEnchanterEvent_noItemInList_all"));
    this.i_eqList_txt_emptyEquipList.visible = true;
    if (this._filteredInventory.length == 0) {
      switch (this._currentLordFilter) {
        case CastleEquipmentEnchanterDialog.FILTER_ALL:
          this.i_eqList_txt_emptyEquipList.textContentVO.textId = "dialog_equipmentEnchanterEvent_noItemInList_all";
          break;
        case CastleEquipmentEnchanterDialog.FILTER_BARON:
          this.i_eqList_txt_emptyEquipList.textContentVO.textId = "dialog_equipmentEnchanterEvent_noItemInList_baron";
          break;
        case CastleEquipmentEnchanterDialog.FILTER_GENERAL:
          this.i_eqList_txt_emptyEquipList.textContentVO.textId = "dialog_equipmentEnchanterEvent_noItemInList_general";
      }
    } else {
      this.i_eqList_txt_emptyEquipList.visible = false;
      this.i_eqList_txt_emptyEquipList.clearText();
    }
  };
  Object.defineProperty(CastleEquipmentEnchanterDialog.prototype, "equipmentInventory", {
    get: function () {
      var e = [];
      if (this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_ALL) {
        e = [];
        if (this._equipmentInventory != null) {
          for (var t = 0, i = this._equipmentInventory; t < i.length; t++) {
            var n = i[t];
            if (n !== undefined) {
              if (!!n.isEnchantable && !(n instanceof U.RelicEquipmentVO)) {
                e.push(n);
              }
            }
          }
        }
        this._equipmentInventory = e;
      } else if (this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_BARON) {
        for (var o = 0, a = v.CastleModel.lordData.barons; o < a.length; o++) {
          var s = a[o];
          if (s !== undefined) {
            for (var r in s.equipmentSlots) {
              var l = s.equipmentSlots[r];
              if (l !== undefined) {
                if (!!l.equipmentVO && !!l.equipmentVO.isEnchantable && !(l.equipmentVO instanceof U.RelicEquipmentVO)) {
                  e.push(l.equipmentVO);
                }
              }
            }
          }
        }
      } else if (this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_GENERAL) {
        for (var c = 0, u = v.CastleModel.lordData.commanders; c < u.length; c++) {
          var d = u[c];
          if (d !== undefined) {
            for (var p in d.equipmentSlots) {
              var h = d.equipmentSlots[p];
              if (h !== undefined) {
                if (!!h.equipmentVO && !!h.equipmentVO.isEnchantable && !(h.equipmentVO instanceof U.RelicEquipmentVO)) {
                  e.push(h.equipmentVO);
                }
              }
            }
          }
        }
      }
      for (var g = 0; g < e.length; g++) {
        if (this.dialogDisp.mc_itemTarget.slotVO && this.dialogDisp.mc_itemTarget.slotVO.equipmentVO && this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.id == e[g].id) {
          e.splice(g, 1);
          break;
        }
      }
      e.sort(this.bindFunction(this.onSortEquipmentItems));
      return e;
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentEnchanterDialog.prototype.onSortEquipmentItems = function (e, t) {
    var i = e.enchantmentLevel >= u.EquipmentConst.getMaxEnchantmentLevel(e.visualRareID);
    var n = t.enchantmentLevel >= u.EquipmentConst.getMaxEnchantmentLevel(t.visualRareID);
    if (i != n) {
      if (i) {
        return 1;
      }
      if (n) {
        return -1;
      }
    }
    var o = this.getLordByItem(e);
    var a = this.getLordByItem(t);
    var s = !!o && !o.isAvailableForEquip;
    var r = !!a && !a.isAvailableForEquip;
    if (s != s) {
      if (s) {
        return 1;
      }
      if (r) {
        return -1;
      }
    }
    if (e.rareID != t.rareID) {
      if (e.rareID == 0) {
        return -1;
      }
      if (t.rareID == 0) {
        return 1;
      }
      if (e.rareID < t.rareID) {
        return 1;
      }
      if (e.rareID > t.rareID) {
        return -1;
      }
    }
    if (e.id < t.id) {
      return 1;
    } else if (e.id > t.id) {
      return -1;
    } else {
      return 0;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.getLordByItem = function (e) {
    for (var t = 0, i = v.CastleModel.lordData.barons; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined && (n.helmetSlotVO.equipmentVO && n.helmetSlotVO.equipmentVO.id == e.id || n.armorSlotVO.equipmentVO && n.armorSlotVO.equipmentVO.id == e.id || n.artifactSlotVO.equipmentVO && n.artifactSlotVO.equipmentVO.id == e.id || n.weaponSlotVO.equipmentVO && n.weaponSlotVO.equipmentVO.id == e.id)) {
        return n;
      }
    }
    for (var o = 0, a = v.CastleModel.lordData.commanders; o < a.length; o++) {
      var s = a[o];
      if (s !== undefined && (s.helmetSlotVO.equipmentVO && s.helmetSlotVO.equipmentVO.id == e.id || s.armorSlotVO.equipmentVO && s.armorSlotVO.equipmentVO.id == e.id || s.artifactSlotVO.equipmentVO && s.artifactSlotVO.equipmentVO.id == e.id || s.weaponSlotVO.equipmentVO && s.weaponSlotVO.equipmentVO.id == e.id)) {
        return s;
      }
    }
    return null;
  };
  CastleEquipmentEnchanterDialog.prototype.initSlots = function (e = true) {
    var t = this.dialogDisp.mc_itemTarget;
    if (e) {
      this.clearSlot();
    }
    t.slotVO = new L.CastleEquipmentSlotVO(A.BasicEquippableVO.SLOT_TYPE_ALL);
    t.mc_bg.mc_lock.visible = false;
    t.mc_deco.gotoAndStop(1);
  };
  CastleEquipmentEnchanterDialog.prototype.clearSlot = function () {
    r.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_itemTarget.mc_equipmentHolder);
    this.dialogDisp.mc_itemTarget.toolTipText = CastleEquipmentEnchanterDialog.TARGET_TOOLTIP_ID;
    this.dialogDisp.mc_itemTarget.actLikeButton = false;
  };
  CastleEquipmentEnchanterDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (!this.isLocked && M.ButtonHelper.isButtonEnabled(t.target) && !this._selectedDragEquipment) {
      switch (t.target) {
        case this.dialogDisp.btn_general:
          this.currentLordFilter = CastleEquipmentEnchanterDialog.FILTER_GENERAL;
          this._currentListPage = 0;
          this.initScrollList();
          break;
        case this.dialogDisp.btn_baron:
          this.currentLordFilter = CastleEquipmentEnchanterDialog.FILTER_BARON;
          this._currentListPage = 0;
          this.initScrollList();
          break;
        case this.dialogDisp.btn_all:
          this.currentLordFilter = CastleEquipmentEnchanterDialog.FILTER_ALL;
          this._currentListPage = 0;
          this.initScrollList();
          break;
        case this.dialogDisp.btn_payC1:
          this.lockDialog();
          v.CastleModel.smartfoxClient.sendCommandVO(new O.C2SEnchantEquipmentEvent(0, this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.id));
          break;
        case this.dialogDisp.btn_payC2:
          this.lockDialog();
          v.CastleModel.smartfoxClient.sendCommandVO(new O.C2SEnchantEquipmentEvent(1, this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.id));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.mc_equipmentList.btn_up:
        case this.dialogDisp.mc_equipmentList.btn_down:
          this.checkCraftingCategoryAndLockItems();
          break;
        case this.dialogDisp.btn_help:
          k.CastleDialogHandler.getInstance().showHelper("", p.Localize.text("help_enchanter"));
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.removeFromInventory = function (e) {
    for (var t = 0; t < this._filteredInventory.length; t++) {
      if (this._filteredInventory[t].id == e.id) {
        this._filteredInventory.splice(t, 1);
        return;
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onScrollItemClick = function (e) {
    if (!c.instanceOfClass(e.scrollItem, "EquipmentScrollItem") || !e.scrollItem.locked) {
      this._itemScrollList.setActiveItemVO(e.scrollItem.scrollItemVO.id, true);
      var t = e.scrollItem.equipmentScrollItemVO;
      if (this._selectedDragEquipment) {
        this.dropItemOnList();
      } else {
        this.addDragItem(t.equipmentVO, true);
        if (this._currentLordFilter == A.BasicEquippableVO.LORD_TYPE_BARON || this._currentLordFilter == A.BasicEquippableVO.LORD_TYPE_COMMANDER) {
          this.removeFromInventory(t.equipmentVO);
          this.initScrollList();
          this.checkCraftingCategoryAndLockItems();
        } else {
          this.removeFromInventory(t.equipmentVO);
          this.updateFilteredInventory();
        }
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.dropItemOnList = function () {
    if (!this.getLordByItem(this._selectedDragEquipment) && this._equipmentInventory.indexOf(this._selectedDragEquipment) == -1) {
      this._equipmentInventory.push(this._selectedDragEquipment);
    }
    this.updateFilteredInventory();
    this.removeDragItem();
  };
  CastleEquipmentEnchanterDialog.prototype.onScrollListScroll = function (e) {
    this.checkCraftingCategoryAndLockItems();
  };
  CastleEquipmentEnchanterDialog.prototype.checkCraftingCategoryAndLockItems = function () {
    for (var e = 0, t = this._itemScrollList.veList; e < t.length; e++) {
      var i = t[e];
      if (i !== undefined) {
        var n = i.equipmentScrollItemVO ? i.equipmentScrollItemVO.equipmentVO : null;
        if (n) {
          var o = this.getLordByItem(n);
          var a = o != null && !o.isAvailableForEquip;
          var s = n.enchantmentLevel >= u.EquipmentConst.getMaxEnchantmentLevel(n.visualRareID);
          i.lordAway = a;
          if (s) {
            i.locked = s;
          }
        }
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onMouseDown = function (e) {
    if (!this.isLocked) {
      var t;
      var i = R.CastleMovieClipHelper.getFirstMovieClipParent(e.target);
      if (i) {
        if (this._selectedDragEquipment) {
          if (this.targetIsEnchantSlot(i)) {
            if ((t = i.slotVO).equipmentVO) {
              if (t.equipmentVO) {
                r.MovieClipHelper.clearMovieClip(i.mc_equipmentHolder);
                this.fillSlotContainer(this._selectedDragEquipment, i);
                var n = t.equipmentVO;
                t.equipmentVO = this._selectedDragEquipment;
                this.removeDragItem();
                this.addDragItem(n, true);
                this.updateEffectList();
                this.highlightSlot(i);
              }
            } else {
              this.dropItemOnEmtpySlot();
              this.disableHighlightedSlot();
            }
          } else if (i == this.dialogDisp.mc_equipmentList) {
            var o = new w.EquipmentScrollItemVO();
            o.equipmentVO = this._selectedDragEquipment;
            if (!this.getLordByItem(o.equipmentVO)) {
              this._equipmentInventory.push(o.equipmentVO);
            }
            this.updateFilteredInventory();
            this.removeDragItem();
            this.updateEffectList();
          }
        } else if (this.targetIsItemSlot(i) && i.slotVO.equipmentVO) {
          t = i.slotVO;
          this.addDragItem(t.equipmentVO, false);
          t.equipmentVO = null;
          this.clearSlot();
          i.mc_bg.gotoAndStop(1);
          this.updateEffectList();
          this.highlightSlot(i);
        }
      }
    }
  };
  CastleEquipmentEnchanterDialog.prototype.targetIsEnchantSlot = function (e) {
    return e == this.dialogDisp.mc_itemTarget;
  };
  CastleEquipmentEnchanterDialog.prototype.targetIsItemSlot = function (e) {
    var t = e;
    var i = this.targetIsEnchantSlot(e);
    var n = !!t && !!t.slotVO && t.parent == this.dialogDisp.mc_equipmentList && t.name.indexOf("item") != -1;
    return i || n;
  };
  CastleEquipmentEnchanterDialog.prototype.dropItemOnEmtpySlot = function () {
    this.fillSlotContainer(this._selectedDragEquipment, this.dialogDisp.mc_itemTarget);
    this.dialogDisp.mc_itemTarget.slotVO.equipmentVO = this._selectedDragEquipment;
    this.removeDragItem();
    this.updateEffectList();
  };
  CastleEquipmentEnchanterDialog.prototype.fillSlotContainer = function (e, t) {
    t = this.dialogDisp.mc_itemTarget;
    if (e) {
      V.EquipmentIconHelper.addEquipmentIcon(e, t.mc_equipmentHolder, CastleEquipmentEnchanterDialog.MAX_WIDTH, CastleEquipmentEnchanterDialog.MAX_HEIGHT, null, true, false, false, true, true);
      var i = C.int(e.visualRareID);
      if (i == 0) {
        i = 5;
      }
      this.dialogDisp.mc_itemTarget.mc_bg.gotoAndStop(i);
      this.dialogDisp.mc_itemTarget.toolTipText = "";
      t.actLikeButton = true;
    } else {
      this.clearSlot();
      t.mc_bg.gotoAndStop(1);
    }
  };
  CastleEquipmentEnchanterDialog.prototype.addDragItem = function (e, t) {
    this._comesFromInventory = t;
    this._selectedDragEquipment = e;
    this._selectedItemMc = V.EquipmentIconHelper.addEquipmentIcon(this._selectedDragEquipment, null, CastleEquipmentEnchanterDialog.MAX_WIDTH, CastleEquipmentEnchanterDialog.MAX_HEIGHT, null, true, false, false, true, true);
    this.layoutManager.nativeCursor.startDrag(this._selectedItemMc);
  };
  CastleEquipmentEnchanterDialog.prototype.removeDragItem = function () {
    if (this._selectedItemMc) {
      this.layoutManager.nativeCursor.stopDrag(this._selectedItemMc);
      this._selectedItemMc = null;
      this._selectedDragEquipment = null;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.updateEffectList = function () {
    var e = this.dialogDisp.mc_itemTarget.slotVO.equipmentVO;
    this.itxt_emptyBoniList = this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyBoniList, new g.LocalizedTextVO(""));
    this.itxt_emptyBoniList.visible = false;
    for (var t = 0; t < 4; t++) {
      var i = this.dialogDisp["mc_statchange" + t];
      i.visible = e && t < e.boni.length && e && e.enchantmentLevel < u.EquipmentConst.getMaxEnchantmentLevel(e.visualRareID);
      if (i.visible) {
        var n = e.boni[t];
        var o = v.CastleModel.equipData.equipmentXml.getEnchantmentFactor(n.id, t == 0);
        var r = n.strength;
        if (u.EquipmentConst.isValidForEnchanting(e.rareID, e.enchantmentLevel)) {
          r += o;
        }
        r = s.MathBase.round(r, 1);
        var l = new h.LocalizedNumberVO(Math.abs(o), false, 1);
        var c = new h.LocalizedNumberVO(n.strength, false, 1);
        var d = new h.LocalizedNumberVO(r, false, 1);
        this.textFieldManager.registerTextField(i.txt_name, new g.LocalizedTextVO(T.SpecialServerHelper.checkTextIDForSkinText("equip_effect_description_short_" + n.effect.name), [l]));
        this.textFieldManager.registerTextField(i.mc_before.txt_value, new g.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [c])).autoFitToBounds = true;
        var p = this.textFieldManager.registerTextField(i.mc_after.txt_value, new g.LocalizedTextVO(a.GenericTextIds.VALUE_PERCENTAGE, [d]));
        p.color = f.ClientConstColor.GENERIC_GREEN;
        p.autoFitToBounds = true;
        i.mc_before.toolTipText = "before";
        i.mc_before.mouseChildren = false;
        i.mc_after.toolTipText = "after";
        i.mc_after.mouseChildren = false;
        i.mc_after.txt_value.textColor = 34816;
      }
    }
    if (e) {
      this.activateInfoMcs();
      if (this.i_costs_txt_value.textContentVO) {
        this.i_costs_txt_value.textContentVO.numberValue = v.CastleModel.costsData.getFinalCostsC1(u.EquipmentConst.getC1PriceForEnchanting(e.enchantmentLevel + 1));
        this.i_costs_txt_value.color = v.CastleModel.costsData.getFinalCostsC1(u.EquipmentConst.getC1PriceForEnchanting(e.enchantmentLevel + 1)) > v.CastleModel.currencyData.c1Amount ? f.ClientConstColor.FONT_INSUFFICIENT_COLOR : f.ClientConstColor.FONT_DEFAULT_COLOR;
      }
      if (this.i_howMany_txt_value.textContentVO) {
        this.i_howMany_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
        this.i_howMany_txt_value.textContentVO.textReplacements = [e.enchantmentLevel, u.EquipmentConst.getMaxEnchantmentLevel(e.visualRareID)];
      }
      if (this.i_succRate_txt_value.textContentVO) {
        this.i_succRate_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
        this.i_succRate_txt_value.textContentVO.textReplacements = [u.EquipmentConst.getEnchantingChance(e.enchantmentLevel + 1)];
      }
      this.dialogDisp.mc_howMany.toolTipText = {
        t: "dialog_equipmentEnchanterEvent_count",
        p: [e.enchantmentLevel, u.EquipmentConst.getMaxEnchantmentLevel(e.visualRareID)]
      };
      this.dialogDisp.btn_payC2.toolTipText = {
        t: "dialog_equipmentEnchanterEvent_pay",
        p: [C.int(v.CastleModel.costsData.getFinalCostsC2(u.EquipmentConst.getC2PriceForEnchanting(e.enchantmentLevel + 1)) * this.getPrimeSaleDiscount())]
      };
      M.ButtonHelper.enableButton(this.dialogDisp.btn_payC1, true);
      this.dialogDisp.btn_payC1.toolTipText = "dialog_equipmentEnchanterEvent_craft";
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_chance";
      this.dialogDisp.mc_costs.toolTipText = "dialog_equipmentEnchanterEvent_coins";
    } else {
      this.dialogDisp.mc_howMany.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.dialogDisp.mc_costs.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      M.ButtonHelper.enableButton(this.dialogDisp.btn_payC1, false);
      M.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, false);
      this.dialogDisp.btn_payC1.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.dialogDisp.btn_payC2.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.i_howMany_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this.i_howMany_txt_value.textContentVO.textReplacements = [0, 0];
      this.i_succRate_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [0];
      this.i_costs_txt_value.textContentVO.numberValue = 0;
      this.i_costs_txt_value.color = f.ClientConstColor.FONT_DEFAULT_COLOR;
      this.deactivateInfoMcs();
    }
    if (e && e.enchantmentLevel >= u.EquipmentConst.getMaxEnchantmentLevel(e.visualRareID)) {
      M.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, false);
      M.ButtonHelper.enableButton(this.dialogDisp.btn_payC1, false);
      this.dialogDisp.btn_payC1.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.dialogDisp.btn_payC2.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.dialogDisp.mc_howMany.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.dialogDisp.mc_costs.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
      this.i_costs_txt_value.textContentVO.numberValue = 0;
      this.i_succRate_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [0];
    } else if (e && e.enchantmentLevel == 0) {
      M.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, false);
      this.dialogDisp.btn_payC2.toolTipText = "dialog_equipmentEnchanterEvent_firstEnchanted_norubin";
    } else if (e) {
      M.ButtonHelper.enableButton(this.dialogDisp.btn_payC2, true);
      this.dialogDisp.btn_payC2.toolTipText = {
        t: "dialog_equipmentEnchanterEvent_pay",
        p: [C.int(v.CastleModel.costsData.getFinalCostsC2(u.EquipmentConst.getC2PriceForEnchanting(e.enchantmentLevel + 1)) * this.getPrimeSaleDiscount())]
      };
    }
    this.itxt_emptyBoniList.clearText();
    if (e) {
      if (e && e.enchantmentLevel >= u.EquipmentConst.getMaxEnchantmentLevel(e.visualRareID)) {
        this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyBoniList, new g.LocalizedTextVO("")).visible = true;
        this.itxt_emptyBoniList.textContentVO.textId = "dialog_equipmentEnchanterEvent_maxEnchanted";
      }
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_emptyBoniList, new g.LocalizedTextVO("")).visible = true;
      this.itxt_emptyBoniList.textContentVO.textId = "dialog_equipmentEnchanterEvent_noItemInSlot";
    }
  };
  CastleEquipmentEnchanterDialog.prototype.getPrimeSaleDiscount = function () {
    var e = 1;
    if (this._primeSaleEventVO) {
      e -= this._primeSaleEventVO.discount / 100;
    }
    return e;
  };
  CastleEquipmentEnchanterDialog.prototype.deactivateInfoMcs = function () {
    var e = new o.ColorMatrix();
    e.desaturate();
    this.dialogDisp.mc_howMany.useFilters([e.filter]);
    this.dialogDisp.mc_successRate.useFilters([e.filter]);
    this.dialogDisp.mc_costs.useFilters([e.filter]);
  };
  CastleEquipmentEnchanterDialog.prototype.activateInfoMcs = function () {
    this.dialogDisp.mc_howMany.useFilters([]);
    this.dialogDisp.mc_successRate.useFilters([]);
    this.dialogDisp.mc_costs.useFilters([]);
  };
  Object.defineProperty(CastleEquipmentEnchanterDialog.prototype, "currentLordFilter", {
    set: function (e) {
      this._currentLordFilter = e;
      this.dialogDisp.btn_general.gotoAndStop(this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_GENERAL ? 2 : 1);
      this.dialogDisp.btn_baron.gotoAndStop(this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_BARON ? 2 : 1);
      this.dialogDisp.btn_all.gotoAndStop(this._currentLordFilter == CastleEquipmentEnchanterDialog.FILTER_ALL ? 2 : 1);
      this.updateFilteredInventory();
    },
    enumerable: true,
    configurable: true
  });
  CastleEquipmentEnchanterDialog.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    var i = this.dialogDisp.mc_itemTarget.slotVO.equipmentVO;
    if (t.target == this.dialogDisp.btn_payC2 && t.target.enabled && i.enchantmentLevel < u.EquipmentConst.getMaxEnchantmentLevel(i.visualRareID)) {
      this.i_succRate_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [100];
      this.dialogDisp.mc_successRate.txt_value.textColor = 34816;
      this.mouseOverPayC2 = true;
    }
    if (t.target == this.dialogDisp.btn_payC1 && t.target.enabled) {
      this.mouseOverPayC1 = true;
    }
    if (t.target == this.dialogDisp.mc_itemTarget) {
      if (t.target.slotVO.equipmentVO) {
        V.EquipmentIconHelper.showToolTip(t.target, t.target.slotVO.equipmentVO);
      }
      if (this._selectedDragEquipment) {
        this.highlightSlot(this.dialogDisp.mc_itemTarget);
      }
    } else {
      this.disableHighlightedSlot();
    }
  };
  CastleEquipmentEnchanterDialog.prototype.disableHighlightedSlot = function () {
    if (this._highlightedSlot) {
      this._highlightedSlot.useFilters(P.BitmapFilterHelper.NO_FILTER);
      this._highlightedSlot = null;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.highlightSlot = function (e) {
    if (this._highlightedSlot) {
      this.disableHighlightedSlot();
    }
    if (!e.mc_bg.mc_lock.visible) {
      this._highlightedSlot = e;
      e.useFilters(P.BitmapFilterHelper.setColor(P.BitmapFilterHelper.FILTER_GLOW_EQUIPMENT_ENCHANTER_HIGHLIGHT_SLOT, this.getHighlightColorForRarity(this._selectedDragEquipment.rarity)), false, 1);
    }
  };
  CastleEquipmentEnchanterDialog.prototype.getHighlightColorForRarity = function (e) {
    switch (e) {
      case S.BasicEquipmentVO.RARITY_COMMON:
        return 13421772;
      case S.BasicEquipmentVO.RARITY_RARE:
        return 10151967;
      case S.BasicEquipmentVO.RARITY_EPIC:
        return 13010425;
      case S.BasicEquipmentVO.RARITY_LEGENDARY:
        return 15559700;
      case S.BasicEquipmentVO.RARITY_UNIQUE:
        return f.ClientConstColor.EQUIPMENT_COLOR_RARITY_UNIQUE;
      default:
        return 13421772;
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    this.i_succRate_txt_value.color &&= f.ClientConstColor.FONT_DEFAULT_COLOR;
    if (t.target == this.dialogDisp.btn_payC2) {
      this.mouseOverPayC2 = false;
    }
    if (t.target == this.dialogDisp.btn_payC1) {
      this.mouseOverPayC1 = false;
    }
    if (this.dialogDisp.mc_itemTarget.slotVO.equipmentVO && this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.enchantmentLevel >= u.EquipmentConst.getMaxEnchantmentLevel(this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.rareID)) {
      this.i_succRate_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [0];
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_maxEnchanted_toolTip";
    } else if (this.dialogDisp.mc_itemTarget.slotVO.equipmentVO) {
      this.i_succRate_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [u.EquipmentConst.getEnchantingChance(this.dialogDisp.mc_itemTarget.slotVO.equipmentVO.enchantmentLevel + 1)];
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_chance";
    } else {
      this.dialogDisp.mc_successRate.toolTipText = "dialog_equipmentEnchanterEvent_noItemInSlot_toolTip";
      this.i_succRate_txt_value.textContentVO.textId = a.GenericTextIds.VALUE_PERCENTAGE;
      this.i_succRate_txt_value.textContentVO.textReplacements = [0];
    }
  };
  CastleEquipmentEnchanterDialog.prototype.onScrollItemRollover = function (e) {
    var t = e.scrollItem.scrollItemVO;
    var i = this.getLordByItem(t.equipmentVO);
    if (!!t.equipmentVO && !this._selectedDragEquipment && (!i || !!i.isAvailableForEquip)) {
      V.EquipmentIconHelper.showToolTip(e.originTarget, t.equipmentVO);
    }
  };
  CastleEquipmentEnchanterDialog.prototype.hideLoaded = function (t = null) {
    this.controller.removeEventListener(b.CastleEquipmentEvent.EQUIPMENT_ENCHANTED, this.bindFunction(this.onEquipmentEnchanted));
    this.controller.removeEventListener(b.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_FAILED, this.bindFunction(this.onEquipmentEnchantingFailed));
    this.controller.removeEventListener(b.CastleEquipmentEvent.EQUIPMENT_ENCHANTING_INVALID, this.bindFunction(this.onEquipmentEnchantingInvalid));
    this.layoutManager.uiStage.removeEventListener(F.MOUSE_MOVE, this.bindFunction(this.playMouse));
    this.disp.removeEventListener(F.MOUSE_OUT, this.bindFunction(this.onMouseOutCheck));
    v.CastleModel.specialEventData.removeEventListener(I.CastleSpecialEventEvent.SERVER_DATA_PARSED, this.bindFunction(this.onRefreshEvent));
    v.CastleModel.specialEventData.removeEventListener(I.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    v.CastleModel.lordData.removeEventListener(b.CastleEquipmentEvent.LORDS_UPDATED, this.bindFunction(this.onLordsUpdated));
    this.controller.removeEventListener(b.CastleEquipmentEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.removeDragItem();
    e.prototype.hideLoaded.call(this, t);
  };
  CastleEquipmentEnchanterDialog.NAME = "CastleEquipmentEnchanter";
  CastleEquipmentEnchanterDialog.TARGET_TOOLTIP_ID = "dialog_equipmentEnchanterEvent_place";
  CastleEquipmentEnchanterDialog.MAX_WIDTH = 55;
  CastleEquipmentEnchanterDialog.MAX_HEIGHT = 55;
  CastleEquipmentEnchanterDialog.ITEMS_PER_PAGE = 14;
  CastleEquipmentEnchanterDialog.FILTER_BARON = "Baron";
  CastleEquipmentEnchanterDialog.FILTER_GENERAL = "General";
  CastleEquipmentEnchanterDialog.FILTER_ALL = "all";
  return CastleEquipmentEnchanterDialog;
}(x.ACastleBasicEquipmentDialog);
exports.CastleEquipmentEnchanterDialog = N;
var k = require("./9.js");
var U = require("./684.js");
l.classImplementsInterfaces(N, "ICollectableRendererList");