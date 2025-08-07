Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./100.js");
var r = require("./6.js");
var l = require("./1.js");
var c = require("./3.js");
var u = require("./23.js");
var d = require("./23.js");
var p = require("./23.js");
var h = require("./532.js");
var g = require("./218.js");
var C = require("./21.js");
var _ = require("./542.js");
var m = require("./219.js");
var f = require("./32.js");
var O = require("./71.js");
var E = require("./86.js");
var y = require("./12.js");
var b = require("./45.js");
var D = require("./254.js");
var I = require("./155.js");
var T = require("./31.js");
var v = require("./19.js");
var S = require("./565.js");
var A = require("./13.js");
var L = require("./29.js");
var P = require("./4.js");
var M = require("./797.js");
var R = require("./459.js");
var V = require("./52.js");
var x = require("./27.js");
var w = require("./9.js");
var B = require("./36.js");
var F = require("./20.js");
var N = require("./878.js");
var k = require("./497.js");
var U = require("./419.js");
var G = require("./420.js");
var H = require("./95.js");
var j = require("./47.js");
var W = require("./414.js");
var Y = require("./8.js");
var K = require("./25.js");
var z = require("./11.js");
var q = require("./3002.js");
var X = require("./3003.js");
var Q = require("./3004.js");
var J = require("./3005.js");
var Z = require("./3006.js");
var $ = require("./3007.js");
var ee = require("./3008.js");
var te = createjs.Point;
var ie = createjs.MouseEvent;
var ne = function (e) {
  function CastleRefineryToolsmithDialog() {
    return e.call(this, CastleRefineryToolsmithDialog.NAME) || this;
  }
  n.__extends(CastleRefineryToolsmithDialog, e);
  CastleRefineryToolsmithDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this._itxt_title = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new c.TextVO(""));
    this._itxt_productionTime = this.textFieldManager.registerTextField(this.dialogDisp.mc_queue.mc_selectedProduction.mc_progress.txt_time, new c.TextVO(""));
    this.dialogDisp.mc_queue.mc_selectedProduction.btn_skip.toolTipText = "dialog_crafting_instantComplete_tooltip";
    this.dialogDisp.mc_queue.mc_selectedProduction.btn_cancel.toolTipText = "dialog_crafting_cancel_tooltip";
    Y.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.tab_1, this.dialogDisp.tab_2, this.dialogDisp.tab_3, this.dialogDisp.tab_4, this.dialogDisp.mc_recipes.btn_up, this.dialogDisp.mc_recipes.btn_down, this.dialogDisp.mc_resourceStorage.btn_left, this.dialogDisp.mc_resourceStorage.btn_right, this.dialogDisp.mc_resourceStorage.btn_expand, this.dialogDisp.mc_fullList.btn_collapse, this.dialogDisp.mc_queue.mc_selectedProduction.btn_skip, this.dialogDisp.mc_queue.mc_selectedProduction.btn_cancel], F.ClickFeedbackButtonHover);
    Y.ButtonHelper.initButtons([this.dialogDisp.mc_castleSelection.mc_selector], F.ClickFeedbackButtonHover, 1);
    this._recipeList = new N.CastleItemScrollList(this.dialogDisp.mc_recipes);
    this._recipeList.scrollItemClass = J.CastleRefineryToolsmithRecipeScrollItem;
    this._recipeList.scrollStep = 2;
    this._storageList = new H.SimpleScrollComponent(new j.SimpleScrollVO(this.dialogDisp.mc_resourceStorage.btn_left, this.dialogDisp.mc_resourceStorage.btn_right).addMouseWheelElements([this.dialogDisp.mc_resourceStorage]), new W.SimpleScrollStrategyVertical(true, true));
    this._craftingSlots = [];
    this._craftingSlots.push(new Q.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_production_0, R.CraftingSlotVO.SLOT_TYPE_PRODUCTION, 0, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new Q.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_production_1, R.CraftingSlotVO.SLOT_TYPE_PRODUCTION, 1, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new Q.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_queue_0, R.CraftingSlotVO.SLOT_TYPE_QUEUE, 0, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new Q.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_queue_1, R.CraftingSlotVO.SLOT_TYPE_QUEUE, 1, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new Q.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_queue_2, R.CraftingSlotVO.SLOT_TYPE_QUEUE, 2, this.bindFunction(this.onSlotMouseDown)));
    this._craftingSlots.push(new Q.CastleRefineryToolsmithCraftingSlot(this.dialogDisp.mc_queue.slot_queue_3, R.CraftingSlotVO.SLOT_TYPE_QUEUE, 3, this.bindFunction(this.onSlotMouseDown)));
    this._castleSelector = new U.SimpleComboboxComponent(this.dialogDisp.mc_castleSelection, new G.SimpleComboboxComponentConfig(-2, 1));
    this._itxt_castle = this.textFieldManager.registerTextField(this.dialogDisp.mc_castleSelection.mc_selector.txt_text, new c.TextVO(""));
  };
  CastleRefineryToolsmithDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    P.CastleModel.craftingData.checkForLearnedRecipes();
    this.dialogDisp.mc_fullList.visible = false;
    this.dialogDisp.mc_castleSelection.visible = false;
    P.CastleModel.craftingData.currentCastleVO = P.CastleModel.areaData.activeAreaInfo;
    P.CastleModel.craftingData.getCraftingInfo();
    if (P.CastleModel.craftingData.getQueueVOByID(this.dialogProperties.queueID)) {
      this.onShow();
    } else {
      P.CastleModel.craftingData.addEventListener(_.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
      this._waitingForServer = true;
    }
  };
  CastleRefineryToolsmithDialog.prototype.onShow = function () {
    P.CastleModel.smartfoxClient.sendCommandVO(new g.C2SGetDetailedCastleListVO());
    this._waitingDetailedListForServer = true;
    P.CastleModel.craftingData.checkForLearnedRecipes();
    this.showProductionQueue(this.dialogProperties.queueID);
    this._craftingSlots.forEach(function (e) {
      return e.onShow();
    });
    this._recipeList.veList.forEach(function (e) {
      return e.addListeners();
    });
    this._storageList.onScrollSignal.add(this.bindFunction(this.onScrollStorage));
    this.controller.addEventListener(O.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onStorageChange));
    this.controller.addEventListener(f.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onStorageChange));
    P.CastleModel.timerData.addEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    P.CastleModel.craftingData.addEventListener(_.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
    this.controller.addEventListener(m.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
  };
  CastleRefineryToolsmithDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    if (this._storageList) {
      this._storageList.onScrollSignal.add(this.bindFunction(this.onScrollStorage));
      this._storageList.hide();
      this.dialogDisp.mc_resourceStorage.x = 0;
    }
    this._craftingSlots.forEach(function (e) {
      return e.onHide();
    });
    this._recipeList.veList.forEach(function (e) {
      return e.removeListeners();
    });
    this.cancelDrag();
    this.controller.removeEventListener(O.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onStorageChange));
    this.controller.removeEventListener(f.CastleUserDataEvent.ON_SPECIAL_CURRENCIES_UPDATED, this.bindFunction(this.onStorageChange));
    P.CastleModel.timerData.removeEventListener(C.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimerUpdate));
    P.CastleModel.craftingData.removeEventListener(_.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
    this.controller.removeEventListener(m.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    if (this._castleSelector) {
      this._castleSelector.onHide();
      this._castleSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
    }
    this._waitingForServer = false;
  };
  CastleRefineryToolsmithDialog.prototype.onDetailedCastleListArrived = function () {
    if (this._waitingDetailedListForServer) {
      this._waitingDetailedListForServer = false;
      this.updateStorage(true);
    }
  };
  CastleRefineryToolsmithDialog.prototype.updateCastleList = function () {
    var e = this;
    a.MovieClipHelper.clearMovieClip(this._castleSelector.disp.mc_list);
    var t;
    var i = [];
    P.CastleModel.craftingData.getAvailableCastleList(this.dialogProperties.queueID).forEach(function (n) {
      var o = new k.ModernComboboxComponentItem("RefineryToolsmith_CastleSelector_Item", CastleRefineryToolsmithDialog.NAME, e.bindFunction(e.fillCastleItem), n);
      i.push(o);
      if (n.kingdomID == P.CastleModel.kingdomData.activeKingdomID && n.objectId == P.CastleModel.areaData.activeAreaInfo.objectId) {
        t = o;
      }
    });
    this._castleSelector.updateWithNewValues(i);
    this._castleSelector.onShow();
    if (i.length > 1) {
      this._castleSelector.onSelectionChanged.remove(this.bindFunction(this.onComboboxChange));
      this._castleSelector.selectItem(t);
      this._castleSelector.onSelectionChanged.add(this.bindFunction(this.onComboboxChange));
    }
    this.dialogDisp.mc_castleSelection.visible = i.length > 1;
    this.updateCastleName();
  };
  CastleRefineryToolsmithDialog.prototype.fillCastleItem = function (e) {
    e.disp.basicButton = null;
    Y.ButtonHelper.initButton(e.getItemMc(), 1, B.ClickFeedbackButton);
    var t = e.data;
    this.textFieldManager.registerTextField(e.getItemMc().txt_text, new c.TextVO(t.areaNameString), new s.InternalGGSTextFieldConfigVO(true));
    this.textFieldManager.registerTextField(e.getItemMc().mc_hover.txt_text, new c.TextVO(t.areaNameString), new s.InternalGGSTextFieldConfigVO(true));
    e.getItemMc().mc_kingdom.gotoAndStop(Math.min(t.kingdomID + 1, 6));
  };
  CastleRefineryToolsmithDialog.prototype.showProductionQueue = function (e) {
    var t = this;
    this.dialogProperties.queueID = e;
    P.CastleModel.craftingData.checkForLearnedRecipes();
    this.dialogDisp.tab_1.mc_selected.visible = e == M.CraftingQueueVO.QUEUE_REFINERY;
    this.dialogDisp.tab_2.mc_selected.visible = e == M.CraftingQueueVO.QUEUE_TOOLSMITH;
    this.dialogDisp.tab_3.mc_selected.visible = e == M.CraftingQueueVO.QUEUE_DRAGONHOARD;
    this.dialogDisp.tab_4.mc_selected.visible = e == M.CraftingQueueVO.QUEUE_DRAGONBREATH;
    var i = P.CastleModel.craftingData.getRecipeClustersByQueue(e);
    this._recipeList.clear();
    i.forEach(function (e) {
      return t._recipeList.pushContent(new Z.CastleRefineryToolsmithRecipeScrollItemVO(t.getShownRecipes(e)));
    });
    this._recipeList.initList(0);
    this.dialogDisp.mc_fullList.visible = false;
    if (!this._waitingDetailedListForServer) {
      this.updateStorage(true);
    }
    this.updateSlots();
    this.selectSlot(this._craftingSlots[0].slotVO);
    this.updateCastleList();
    this.updateTabs();
    this._itxt_title.textContentVO.stringValue = A.TextHelper.toUpperCaseLocaSafe(c.Localize.text(this.dialogDisp["tab_" + e].toolTipText));
  };
  CastleRefineryToolsmithDialog.prototype.updateTabs = function () {
    var e = !!P.CastleModel.craftingData.getQueueVOByID(M.CraftingQueueVO.QUEUE_REFINERY) && P.CastleModel.craftingData.getQueueVOByID(M.CraftingQueueVO.QUEUE_REFINERY).buildingState.isFunctionally;
    Y.ButtonHelper.enableButton(this.dialogDisp.tab_1, e);
    this.dialogDisp.tab_1.toolTipText = e ? "dialog_crafting_refinery_header" : "dialog_crafting_refineryNotConstructed_tooltip";
    var t = !!P.CastleModel.craftingData.getQueueVOByID(M.CraftingQueueVO.QUEUE_TOOLSMITH) && P.CastleModel.craftingData.getQueueVOByID(M.CraftingQueueVO.QUEUE_TOOLSMITH).buildingState.isFunctionally;
    Y.ButtonHelper.enableButton(this.dialogDisp.tab_2, t);
    this.dialogDisp.tab_2.toolTipText = t ? "dialog_crafting_toolsmith_header" : "dialog_crafting_toolsmithNotConstructed_tooltip";
    var i = !!P.CastleModel.craftingData.getQueueVOByID(M.CraftingQueueVO.QUEUE_DRAGONHOARD) && P.CastleModel.craftingData.getQueueVOByID(M.CraftingQueueVO.QUEUE_DRAGONHOARD).buildingState.isFunctionally;
    Y.ButtonHelper.enableButton(this.dialogDisp.tab_3, i);
    this.dialogDisp.tab_3.toolTipText = "dialog_dragonhoard_header";
    this.dialogDisp.tab_3.visible = i && !!P.CastleModel.craftingData.getRecipeClustersByQueue(M.CraftingQueueVO.QUEUE_DRAGONHOARD) && P.CastleModel.craftingData.getRecipeClustersByQueue(M.CraftingQueueVO.QUEUE_DRAGONHOARD).size > 0;
    var n = !!P.CastleModel.craftingData.getQueueVOByID(M.CraftingQueueVO.QUEUE_DRAGONBREATH) && P.CastleModel.craftingData.getQueueVOByID(M.CraftingQueueVO.QUEUE_DRAGONBREATH).buildingState.isFunctionally;
    Y.ButtonHelper.enableButton(this.dialogDisp.tab_4, n);
    this.dialogDisp.tab_4.toolTipText = "dialog_dragonbreathforge_header";
    this.dialogDisp.tab_4.visible = n && !!P.CastleModel.craftingData.getRecipeClustersByQueue(M.CraftingQueueVO.QUEUE_DRAGONBREATH) && P.CastleModel.craftingData.getRecipeClustersByQueue(M.CraftingQueueVO.QUEUE_DRAGONBREATH).size > 0;
  };
  CastleRefineryToolsmithDialog.prototype.getShownRecipes = function (e) {
    var t = [];
    e.forEach(function (e) {
      var i = e.reduce(function (e, t) {
        if (t.learned) {
          return t;
        } else {
          return e;
        }
      });
      var n = e.reduceRight(function (e, t) {
        if (t.learned) {
          return e;
        } else {
          return t;
        }
      });
      if (i) {
        t.push(i);
      }
      if (n && n != i) {
        t.push(n);
      }
    });
    t.sort(this.sortByLearnedAndType);
    return t;
  };
  CastleRefineryToolsmithDialog.prototype.sortByLearnedAndType = function (e, t) {
    if (e.learned && !t.learned) {
      return -1;
    } else if (!e.learned && t.learned) {
      return 1;
    } else {
      return e.getSortOrderByType() - t.getSortOrderByType();
    }
  };
  CastleRefineryToolsmithDialog.prototype.updateStorage = function (e) {
    var t = this;
    if (e === undefined) {
      e = false;
    }
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_resourceStorage.mc_list);
    a.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_fullList.mc_items);
    this.getShownStorageItems().forEach(function (e, i) {
      var n = new (l.getDefinitionByName("CastleRefineryToolsmithStorageItem"))();
      n.x = i * (n.width + CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP);
      t.dialogDisp.mc_resourceStorage.mc_list.addChild(n);
      var o = new (l.getDefinitionByName("CastleRefineryToolsmithStorageItem2"))();
      o.x = i % CastleRefineryToolsmithDialog.FULL_LIST_ITEMS_PER_ROW * (o.width + CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP);
      o.y = Math.floor(i / CastleRefineryToolsmithDialog.FULL_LIST_ITEMS_PER_ROW) * (o.height + CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP);
      t.dialogDisp.mc_fullList.mc_items.addChild(o);
      t.dialogDisp.mc_fullList.bg.height = o.y + o.height + CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP;
      var a = new v.CollectableRenderOptions(v.CollectableRenderOptions.SET_STORAGE, new te(25, 25));
      a.tooltip.useAmount = false;
      a.textfield.useKiloAbbreviationForAmount = true;
      if (E.ClientConstCollectable.GROUP_LIST_RESOURCES.indexOf(e.itemType) > -1) {
        a.storage.fixedStorageMaximum = P.CastleModel.userCastleListDetailed.getVObyCastleID(t.currentCastleVO.objectId, t.currentCastleVO.kingdomID).getMaxStorageSpace(e.itemType);
      }
      K.CollectableRenderHelper.displaySingleItem(new T.CollectableRenderClips(n), e, a);
      K.CollectableRenderHelper.displaySingleItem(new T.CollectableRenderClips(o), e, a);
      if (e instanceof I.CollectableItemGenericCurrencyVO) {
        var s = c.Localize.text(e.getNameTextId());
        n.toolTipText = {
          t: "dialog_crafting_currencyInventory_tooltip",
          p: [s]
        };
        o.toolTipText = {
          t: "dialog_crafting_currencyInventory_tooltip",
          p: [s]
        };
      } else if (e instanceof D.ACollectableItemResourceVO) {
        s = c.Localize.text(e.getNameTextId());
        n.toolTipText = {
          t: "dialog_crafting_resourceInventory_tooltip",
          p: [s]
        };
        o.toolTipText = {
          t: "dialog_crafting_resourceInventory_tooltip",
          p: [s]
        };
      }
    });
    var i = e ? 0 : this._storageList.currentValue;
    var n = Math.max(0, this.dialogDisp.mc_resourceStorage.mc_list.width - this.dialogDisp.mc_resourceStorage.mc_list.mask.width);
    this._storageList.init(0, n, 52, 52);
    this._storageList.show();
    this._storageList.scrollToPercent(i);
    this.dialogDisp.mc_resourceStorage.x = this.dialogDisp.mc_resourceStorage.btn_left.visible ? 0 : -37;
    this.dialogDisp.mc_resourceStorage.btn_expand.visible = n > 0;
  };
  CastleRefineryToolsmithDialog.prototype.updateSlots = function () {
    var e = this;
    this._craftingSlots.forEach(function (t) {
      return t.queueID = e.dialogProperties.queueID;
    });
  };
  CastleRefineryToolsmithDialog.prototype.selectSlot = function (e) {
    var t = this;
    this._selectedSlotVO = e && e.isFilled() ? e : null;
    this._craftingSlots.forEach(function (e) {
      return e.setSelected(t._selectedSlotVO == e.slotVO);
    });
    this.updateProductionControls();
  };
  CastleRefineryToolsmithDialog.prototype.updateProductionControls = function () {
    this.dialogDisp.mc_queue.mc_selectedProduction.visible = !!this._selectedSlotVO;
    if (this._selectedSlotVO) {
      this.dialogDisp.mc_queue.mc_selectedProduction.mc_progress.progressBar.scaleX = this._selectedSlotVO.getRemainingProductionTimeRatio();
      this._itxt_productionTime.textContentVO.stringValue = x.CastleTimeStringHelper.getShortTimeString(this._selectedSlotVO.getRemainingProductionTime());
    }
  };
  CastleRefineryToolsmithDialog.prototype.onComboboxChange = function (e = null) {
    P.CastleModel.craftingData.currentCastleVO = this._castleSelector.getSelectedItem().data;
    if (this.currentCastleVO.kingdomID != P.CastleModel.kingdomData.activeKingdomID || this.currentCastleVO.objectId != P.CastleModel.areaData.activeAreaInfo.objectId) {
      P.CastleModel.smartfoxClient.sendCommandVO(new h.C2SGetCastleResourcesVO(this.currentCastleVO.objectId, this.currentCastleVO.kingdomID));
    }
    this.showProductionQueue(this._craftingSlots[0].slotVO.queueID);
    if (P.CastleModel.craftingData.currentCastleVO.kingdomID != P.CastleModel.areaData.activeAreaInfo.kingdomID) {
      o.CommandController.instance.executeCommand(L.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, P.CastleModel.craftingData.currentCastleVO);
      this.layoutManager.dialogCastleSwitch = true;
    }
  };
  CastleRefineryToolsmithDialog.prototype.updateCastleName = function () {
    this.dialogDisp.mc_castleSelection.mc_selector.mc_kingdom.gotoAndStop(Math.min(this.currentCastleVO.kingdomID + 1, 6));
    this._itxt_castle.textContentVO.stringValue = this.currentCastleVO.areaNameString;
  };
  CastleRefineryToolsmithDialog.prototype.onSlotMouseDown = function (e) {
    this.selectSlot(e.slotVO);
    if (!e.slotVO.isProductionSlot) {
      this._draggedQueueSlot = e;
      this._draggedQueueSlotToIndex = e.slotVO.slotIndex;
      this._draggableQueueSlots = this._craftingSlots.filter(function (e) {
        return !e.slotVO.isProductionSlot && e.slotVO.isFilled();
      });
      this.layoutManager.customCursor.setCursorType(a.BasicCustomCursor.CURSOR_HAND);
      p.TweenMax.to(e.disp, 0.1, {
        alpha: 0.6,
        ease: u.Linear.easeIn
      });
      p.TweenMax.to(e.disp, 0.1, {
        scaleY: 1.1,
        scaleX: 1.1,
        ease: u.Linear.easeIn
      });
      this.dialogDisp.stage.addEventListener(ie.MOUSE_MOVE, this.bindFunction(this.onDragMouseMove));
      this.dialogDisp.stage.addEventListener(ie.MOUSE_UP, this.bindFunction(this.onDragMouseUp));
    }
  };
  CastleRefineryToolsmithDialog.prototype.onDragMouseMove = function (e) {
    var t = this;
    if (this._draggedQueueSlot) {
      var i = this._draggableQueueSlots.map(function (e) {
        return e.originalX;
      }).sort(S.numericSort);
      var n = r.int(this.dialogDisp.mc_queue.mouseX + this.dialogDisp.mc_queue.getBounds(null).x);
      n = a.MathBase.clamp(n, i[0], i[i.length - 1]);
      var o = this._draggedQueueSlot.disp.width / (this._draggedQueueSlot.disp.scaleX * 2);
      var s = i.findIndex(function (e) {
        return Math.abs(n - e) < o;
      });
      this._draggedQueueSlot.disp.x = n;
      if (this._draggedQueueSlotToIndex != s && s != -1) {
        this._draggedQueueSlotToIndex = s;
        S.CastleArrayHelper.moveIndex(this._draggableQueueSlots, this._draggableQueueSlots.indexOf(this._draggedQueueSlot), s);
        this._draggableQueueSlots.filter(function (e) {
          return e != t._draggedQueueSlot;
        }).forEach(function (e) {
          p.TweenMax.to(e.disp, 0.25, {
            x: i[t._draggableQueueSlots.indexOf(e)],
            ease: d.Sine.easeInOut
          });
        });
      }
    }
  };
  CastleRefineryToolsmithDialog.prototype.onDragMouseUp = function (e) {
    if (this._draggedQueueSlot) {
      var t = this._draggableQueueSlots.map(function (e) {
        return e.originalX;
      }).sort(S.numericSort);
      this._draggedQueueSlot.disp.x = t[this._draggedQueueSlotToIndex];
      if (this._draggedQueueSlotToIndex != this._draggedQueueSlot.slotVO.slotIndex) {
        P.CastleModel.craftingData.moveQueueSlot(this._draggedQueueSlot.slotVO, this._draggedQueueSlotToIndex);
        this._switchToMovedSlotOnUpdate = true;
      }
    }
    this.cancelDrag();
  };
  CastleRefineryToolsmithDialog.prototype.cancelDrag = function () {
    if (this._draggedQueueSlot) {
      p.TweenMax.killTweensOf(this._draggedQueueSlot.disp);
      this._draggedQueueSlot.disp.alpha = 1;
      this._draggedQueueSlot.disp.scaleX = this._draggedQueueSlot.disp.scaleY = 1;
      this._draggedQueueSlot = null;
      if (this.dialogDisp && this.dialogDisp.stage) {
        this.dialogDisp.stage.removeEventListener(ie.MOUSE_UP, this.bindFunction(this.onDragMouseUp));
        this.dialogDisp.stage.removeEventListener(ie.MOUSE_MOVE, this.bindFunction(this.onDragMouseMove));
      }
    }
  };
  CastleRefineryToolsmithDialog.prototype.onStorageChange = function (e) {
    if (!this._waitingDetailedListForServer) {
      this.updateStorage();
    }
    this._recipeList.initList(this._recipeList.currentStartIndex);
  };
  CastleRefineryToolsmithDialog.prototype.onScrollStorage = function () {
    this.dialogDisp.mc_resourceStorage.mc_list.x = CastleRefineryToolsmithDialog.STORAGE_LIST_STARTX - this._storageList.currentValue;
  };
  CastleRefineryToolsmithDialog.prototype.onSelectSlot = function (e) {
    this.selectSlot(e);
  };
  CastleRefineryToolsmithDialog.prototype.onTimerUpdate = function (e) {
    if (this._selectedSlotVO && this._selectedSlotVO.getRemainingProductionTime() < 0) {
      this.selectSlot(null);
    }
    this.updateProductionControls();
    this._craftingSlots.forEach(function (e) {
      return e.onTimerUpdate();
    });
  };
  CastleRefineryToolsmithDialog.prototype.onCraftingQueueUpdated = function (e) {
    var t = this;
    if (this._waitingForServer) {
      this._waitingForServer = false;
      this.onShow();
    }
    this.cancelDrag();
    if (e.queueID == -1 || e.queueID == this.dialogProperties.queueID && e.kingdomID == this.currentCastleVO.kingdomID) {
      this._recipeList.initList(this._recipeList.currentStartIndex);
      this.updateSlots();
      if (this._selectedSlotVO && this._selectedSlotVO.isFilled()) {
        this.updateProductionControls();
      } else {
        this.selectSlot(this._craftingSlots[0].slotVO);
      }
    }
    if (e.queueID == -1) {
      this.updateCastleList();
    }
    if (this._switchToMovedSlotOnUpdate) {
      var i = this._craftingSlots.find(function (e) {
        return !e.slotVO.isProductionSlot && e.slotVO.slotIndex == t._draggedQueueSlotToIndex;
      });
      this.selectSlot(i.slotVO);
      this._switchToMovedSlotOnUpdate = false;
      this._draggedQueueSlotToIndex = -1;
    }
  };
  CastleRefineryToolsmithDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (Y.ButtonHelper.isButtonEnabled(t.target)) {
      if (t.target.name && t.target.name.startsWith("tab_")) {
        var i = parseInt(t.target.name.split("_")[1]);
        this.showProductionQueue(i);
      }
      switch (t.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          switch (this.dialogProperties.queueID) {
            case CastleRefineryToolsmithDialog.REFINERY:
              z.CastleExternalDialog.dialogHandler.showHelper("", c.Localize.text("help_crafting_refinery"));
              break;
            case CastleRefineryToolsmithDialog.TOOLSMITH:
              z.CastleExternalDialog.dialogHandler.showHelper("", c.Localize.text("help_crafting_toolsmith"));
              break;
            case CastleRefineryToolsmithDialog.DRAGONHOARD:
              z.CastleExternalDialog.dialogHandler.showHelper("", c.Localize.text("help_dragonhoard"));
              break;
            case CastleRefineryToolsmithDialog.DRAGONBREATHFORGE:
              z.CastleExternalDialog.dialogHandler.showHelper("", c.Localize.text("help_dragonbreathforge"));
          }
          break;
        case this.dialogDisp.mc_queue.mc_selectedProduction.btn_skip:
          w.CastleDialogHandler.getInstance().registerDialogs($.CastleSkipCraftingDialog, new ee.CastleSkipCraftingDialogProperties(this._selectedSlotVO));
          break;
        case this.dialogDisp.mc_queue.mc_selectedProduction.btn_cancel:
          w.CastleDialogHandler.getInstance().registerDialogs(q.CastleCancelCraftingDialog, new X.CastleCancelCraftingDialogProperties(this._selectedSlotVO));
          break;
        case this.dialogDisp.mc_fullList.btn_collapse:
          this.dialogDisp.mc_fullList.visible = false;
          break;
        case this.dialogDisp.mc_resourceStorage.btn_expand:
          this.dialogDisp.mc_fullList.visible = true;
      }
    }
  };
  CastleRefineryToolsmithDialog.prototype.getShownStorageItems = function () {
    var e = P.CastleModel.userCastleListDetailed.getVObyCastleID(this.currentCastleVO.objectId, this.currentCastleVO.kingdomID);
    switch (this.dialogProperties.queueID) {
      case CastleRefineryToolsmithDialog.REFINERY:
        return [b.CollectableHelper.createVO(y.CollectableEnum.WOOD, e.getResource(y.CollectableEnum.WOOD)), b.CollectableHelper.createVO(y.CollectableEnum.STONE, e.getResource(y.CollectableEnum.STONE)), b.CollectableHelper.createVO(y.CollectableEnum.IRON, e.getResource(y.CollectableEnum.IRON)), b.CollectableHelper.createVO(y.CollectableEnum.GLASS, e.getResource(y.CollectableEnum.GLASS)), P.CastleModel.currencyData.c1, P.CastleModel.currencyData.c2, b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_REFINED_LUMBER), V.ClientConstCurrency.ID_REFINED_LUMBER), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_REFINED_STONE), V.ClientConstCurrency.ID_REFINED_STONE), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_STEEL), V.ClientConstCurrency.ID_STEEL), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_GLASS), V.ClientConstCurrency.ID_DRAGON_GLASS)];
      case CastleRefineryToolsmithDialog.TOOLSMITH:
        return [b.CollectableHelper.createVO(y.CollectableEnum.IRON, e.getResource(y.CollectableEnum.IRON)), b.CollectableHelper.createVO(y.CollectableEnum.COAL, e.getResource(y.CollectableEnum.COAL)), b.CollectableHelper.createVO(y.CollectableEnum.OIL, e.getResource(y.CollectableEnum.OIL)), b.CollectableHelper.createVO(y.CollectableEnum.GLASS, e.getResource(y.CollectableEnum.GLASS)), P.CastleModel.currencyData.c1, P.CastleModel.currencyData.c2, b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_REFINED_LUMBER), V.ClientConstCurrency.ID_REFINED_LUMBER), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_REFINED_STONE), V.ClientConstCurrency.ID_REFINED_STONE), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_COMPONENT1), V.ClientConstCurrency.ID_COMPONENT1), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_COMPONENT2), V.ClientConstCurrency.ID_COMPONENT2), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_COMPONENT3), V.ClientConstCurrency.ID_COMPONENT3), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_COMPONENT4), V.ClientConstCurrency.ID_COMPONENT4), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_COMPONENT5), V.ClientConstCurrency.ID_COMPONENT5), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_COMPONENT6), V.ClientConstCurrency.ID_COMPONENT6), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_COMPONENT7), V.ClientConstCurrency.ID_COMPONENT7), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_COMPONENT8), V.ClientConstCurrency.ID_COMPONENT8)];
      case CastleRefineryToolsmithDialog.DRAGONHOARD:
        return [b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_LEGENDARY_MATERIAL), V.ClientConstCurrency.ID_LEGENDARY_MATERIAL), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_LEGENDARY_TOKEN), V.ClientConstCurrency.ID_LEGENDARY_TOKEN), P.CastleModel.currencyData.c1, b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_KHAN_TABLET), V.ClientConstCurrency.ID_KHAN_TABLET), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_SCEAT_TOKEN), V.ClientConstCurrency.ID_SCEAT_TOKEN), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_SCALE_TILE), V.ClientConstCurrency.ID_DRAGON_SCALE_TILE), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_CHARM), V.ClientConstCurrency.ID_DRAGON_CHARM)];
      case CastleRefineryToolsmithDialog.DRAGONBREATHFORGE:
        return [b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_STEEL), V.ClientConstCurrency.ID_STEEL), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_GLASS), V.ClientConstCurrency.ID_DRAGON_GLASS), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_CHARM), V.ClientConstCurrency.ID_DRAGON_CHARM), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_SPLINTERS), V.ClientConstCurrency.ID_DRAGON_SPLINTERS), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_TWIN_FLAME_AXES), V.ClientConstCurrency.ID_TWIN_FLAME_AXES), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_GLASS_ARROWS), V.ClientConstCurrency.ID_DRAGON_GLASS_ARROWS), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_SCALE_ARMOR), V.ClientConstCurrency.ID_DRAGON_SCALE_ARMOR), b.CollectableHelper.createVO(y.CollectableEnum.GENERIC_CURRENCY, P.CastleModel.currencyData.getAmountById(V.ClientConstCurrency.ID_DRAGON_SCALE_ARROWS), V.ClientConstCurrency.ID_DRAGON_SCALE_ARROWS)];
    }
    return [];
  };
  Object.defineProperty(CastleRefineryToolsmithDialog.prototype, "currentCastleVO", {
    get: function () {
      return P.CastleModel.craftingData.currentCastleVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRefineryToolsmithDialog.NAME = "CastleRefineryToolsmith_May24";
  CastleRefineryToolsmithDialog.REFINERY = 1;
  CastleRefineryToolsmithDialog.TOOLSMITH = 2;
  CastleRefineryToolsmithDialog.DRAGONHOARD = 3;
  CastleRefineryToolsmithDialog.DRAGONBREATHFORGE = 4;
  CastleRefineryToolsmithDialog.STORAGE_ITEM_GAP = 4;
  CastleRefineryToolsmithDialog.STORAGE_LIST_STARTX = -297;
  CastleRefineryToolsmithDialog.FULL_LIST_ITEMS_PER_ROW = 7;
  return CastleRefineryToolsmithDialog;
}(z.CastleExternalDialog);
exports.CastleRefineryToolsmithDialog = ne;
l.classImplementsInterfaces(ne, "ICollectableRendererList");