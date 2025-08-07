Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./3.js");
var l = require("./18.js");
var c = require("./16.js");
var u = require("./159.js");
var d = require("./37.js");
var p = require("./541.js");
var h = require("./48.js");
var g = require("./234.js");
var C = require("./31.js");
var _ = require("./104.js");
var m = require("./19.js");
var f = require("./80.js");
var O = require("./33.js");
var E = require("./13.js");
var y = require("./15.js");
var b = require("./4.js");
var D = require("./142.js");
var I = require("./35.js");
var T = require("./27.js");
var v = require("./43.js");
var S = require("./9.js");
var A = require("./17.js");
var L = require("./20.js");
var P = require("./8.js");
var M = require("./25.js");
var R = require("./66.js");
var V = require("./260.js");
var x = require("./38.js");
var w = require("./1585.js");
var B = require("./1586.js");
var F = require("./450.js");
var N = require("./769.js");
var k = require("./796.js");
var U = createjs.Point;
var G = function (e) {
  function CastleRefineryToolsmithRecipeScrollItem(t) {
    var i = e.call(this, t) || this;
    i.renderList = new _.CollectableRendererList();
    o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.mc_locked.btn_learn.txt_label, new r.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_crafting_learnRecipe")));
    o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.mc_noRecipe.btn_learn.txt_label, new r.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_crafting_learnRecipe")));
    o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.mc_noRecipe.txt_locked, new r.LocalizedTextVO("dialog_crafting_recipeRequired"));
    o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.btn_start.txt_label, new r.TextVO(E.TextHelper.toUpperCaseLocaSafeTextId("dialog_craft")));
    i.itxt_amount = o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.mc_item.txt_amount, new r.LocalizedTextVO("generic_amount_reward", [0, ""]));
    i.itxt_name = o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.mc_item.txt_text, new r.LocalizedTextVO(""));
    i.itxt_time = o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.txt_time, new r.TextVO(""));
    i.itxt_recipe = o.GoodgameTextFieldManager.getInstance().registerTextField(i.disp.txt_recipe, new r.TextVO(""));
    i.itxt_recipe.autoFitToBounds = true;
    i.itxt_name.autoFitToBounds = true;
    i.disp.mc_locked.toolTipText = "dialog_crafting_recipeRequired";
    i.disp.icon_duration.toolTipText = "dialog_ci_craft_ciTime_tooltip";
    P.ButtonHelper.initButtons([i.disp.btn_right, i.disp.btn_left, i.disp.btn_start, i.disp.mc_locked.btn_learn, i.disp.mc_noRecipe.btn_learn], L.ClickFeedbackButtonHover);
    return i;
  }
  n.__extends(CastleRefineryToolsmithRecipeScrollItem, e);
  CastleRefineryToolsmithRecipeScrollItem.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.renderList.destroyCollectableRenderList();
    if (this.recipeScrollItemVO.allRecipesLocked || this.recipeScrollItemVO.groupLocked) {
      this.disp.mc_noRecipe.visible = true;
      this.disp.mc_noRecipe.btn_learn.toolTipText = null;
      P.ButtonHelper.enableButton(this.disp.mc_noRecipe.btn_learn, true);
      if (this.recipeScrollItemVO.groupLocked) {
        P.ButtonHelper.enableButton(this.disp.mc_noRecipe.btn_learn, false);
        var t = this.recipeScrollItemVO.recipes[0];
        var i = t.requiredCraftingBuildings.find(function (e) {
          return e.onlyInKingdomIds.some(function (e) {
            return e == b.CastleModel.craftingData.getQueueVOByID(t.queueID).kingdomID;
          });
        });
        if (i) {
          var n = r.Localize.text("upgrade_buildingLevel", [i.getNameString(), i.level]);
          var a = r.Localize.text("dialog_crafting_recipe_buildingRequired", [n]);
          this.disp.mc_noRecipe.btn_learn.toolTipText = a;
        }
      }
      M.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this.renderList, new C.CollectableRenderClips(this.disp.mc_noRecipe.mc_icon).addIconMc(this.disp.mc_noRecipe.mc_icon).addInfoBtn(this.disp.mc_noRecipe.btn_info), this.recipeScrollItemVO.recipes[0].output.getItemByIndex(0), new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_BASIC, new U(100, 100)));
    } else {
      this.disp.mc_noRecipe.visible = false;
      this.disp.mc_locked.visible = !this.recipeScrollItemVO.currentRecipeVO.learned;
      this.disp.icon_recipe.visible = this.recipeScrollItemVO.currentRecipeVO.learned;
      if (this.disp.icon_recipe.visible) {
        this.disp.icon_recipe.gotoAndStop(this.recipeScrollItemVO.currentRecipeVO.getRecipeIconFrame());
      }
      R.CostHelper.initAsCosts(this.recipeScrollItemVO.currentRecipeVO.input, this.disp.mc_costs, false, true, this.renderList);
      o.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_noRecipe.txt_locked, new r.LocalizedTextVO("dialog_crafting_recipeRequired"));
      var s = this.recipeScrollItemVO.currentRecipeVO.output.list[0].clone();
      var l = 0;
      if (b.CastleModel.areaData.activeArea) {
        l = this.queueVO.queueID == k.CastleRefineryToolsmithDialog.TOOLSMITH ? this.queueVO.craftingEffects.getEffectValue(I.EffectTypeEnum.EFFECT_TYPE_COMPONENT_PRODUCTION_BOOST, new D.CastleEffectConditionVO()).strength : this.queueVO.craftingEffects.getEffectValue(I.EffectTypeEnum.EFFECT_TYPE_REFINED_RESOURCE_PRODUCTION_BOOST, new D.CastleEffectConditionVO()).strength;
      }
      var u = this.recipeScrollItemVO.currentRecipeVO.queueID;
      l += this.queueVO.craftingEffects.getEffectValue(I.EffectTypeEnum.CRAFTING_QUEUE_PRODUCTION_BOOST, new D.CastleEffectConditionVO(-1, -1, u)).getValueforId(u);
      s.amount = Math.round(s.amount * (1 + l / 100));
      M.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this.renderList, new C.CollectableRenderClips(this.disp.mc_item).addInfoBtn(this.disp.btn_info), s, new m.CollectableRenderOptions(m.CollectableRenderOptions.SET_BASIC, new U(100, 100)));
      this.itxt_amount.textContentVO.textReplacements = [s.amount, ""];
      this.itxt_amount.color = l > 0 ? c.ClientConstColor.GENERIC_GREEN : c.ClientConstColor.FONT_DEFAULT_COLOR;
      this.itxt_name.textContentVO.textId = s.getNameTextId();
      this.itxt_name.textContentVO.textReplacements = s.getNameTextParams();
      this.itxt_recipe.textContentVO.stringValue = this.recipeScrollItemVO.currentRecipeVO.getManualName();
      this.disp.btn_left.visible = this.recipeScrollItemVO.recipes.length > 1;
      this.disp.btn_right.visible = this.recipeScrollItemVO.recipes.length > 1;
      P.ButtonHelper.enableButton(this.disp.btn_left, this.recipeScrollItemVO.currentRecipeIndex > 0);
      P.ButtonHelper.enableButton(this.disp.btn_right, this.recipeScrollItemVO.currentRecipeIndex < this.recipeCount - 1);
      this.itxt_time.textContentVO.stringValue = T.CastleTimeStringHelper.getShortTimeString(this.recipeScrollItemVO.currentRecipeVO.craftingDuration);
      var d = b.CastleModel.craftingData.getQueueVOByID(this.recipeScrollItemVO.currentRecipeVO.queueID);
      var p = d.hasFreeUnlockedSlots || d.hasFreeLockedSlots;
      if (!p || p && !P.ButtonHelper.isEnablingDelayed(this.disp.btn_start)) {
        P.ButtonHelper.enableButton(this.disp.btn_start, p);
      }
      this.disp.btn_start.toolTipText = p ? null : "dialog_crafting_allSlotsOccupied";
    }
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.changeCurrentRecipe = function (e) {
    this.recipeScrollItemVO.changeCurrentRecipe(e);
    this.customFillItem();
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.hide = function () {
    e.prototype.hide.call(this);
    this.renderList.destroyCollectableRenderList();
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.addListeners = function () {
    y.CastleBasicController.getInstance().addEventListener(p.CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON, this.bindFunction(this.onSLotBuyClosed));
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.removeListeners = function () {
    y.CastleBasicController.getInstance().removeEventListener(p.CraftingEvent.BRIEFLY_DISABLE_CRAFT_BUTTON, this.bindFunction(this.onSLotBuyClosed));
    P.ButtonHelper.enableButton(this.disp.btn_start, true);
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.onSLotBuyClosed = function (e) {
    if (P.ButtonHelper.isButtonEnabled(this.disp.btn_start)) {
      P.ButtonHelper.delayEnableButton(this.disp.btn_start, true);
    }
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.onMouseClick = function (t) {
    var i = this;
    e.prototype.onMouseClick.call(this, t);
    if (P.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.disp.btn_left:
          this.changeCurrentRecipe(-1);
          break;
        case this.disp.btn_right:
          this.changeCurrentRecipe(1);
          break;
        case this.disp.btn_start:
          if (this.queueVO.hasFreeUnlockedSlots) {
            b.CastleModel.craftingData.startCrafting(this.recipeScrollItemVO.currentRecipeVO);
          } else if (this.queueVO.hasFreeLockedSlots) {
            var n = this.queueVO.nextFreeLockedSlot;
            S.CastleDialogHandler.getInstance().registerDialogsWithType(w.CastleBuyTempProductionSlotDialog, new B.CastleBuyTempProductionSlotDialogProperties(n, function () {
              var e = new h.CollectableList().addItem(new g.CollectableItemC1VO(n.getUnlockCostC1()));
              if (R.CostHelper.validateCostBuyCommand(e)) {
                n.buy();
                b.CastleModel.craftingData.startCrafting(i.recipeScrollItemVO.currentRecipeVO);
              }
            }), false, v.CastleDialogConsts.PRIORITY_HIGH, 0, v.CastleDialogConsts.DIALOG_TYPE_SINGLE);
          }
          break;
        case this.disp.mc_locked.btn_learn:
        case this.disp.mc_noRecipe.btn_learn:
          this.requiredResearch = this.recipeScrollItemVO.currentRecipeVO.getResearchRequired();
          this.onLearnClicked();
      }
    }
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.onLearnClicked = function () {
    if (A.CastleLayoutManager.getInstance().isInMyCastle && b.CastleModel.areaData.activeArea.isMyMainCastle && b.CastleModel.kingdomData.activeKingdomID == s.WorldClassic.KINGDOM_ID) {
      this.onJoinMainCastle(null);
    } else {
      y.CastleBasicController.getInstance().addEventListener(d.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
      b.CastleModel.smartfoxClient.sendCommandVO(new u.C2SJoinCastleVO(b.CastleModel.userData.castleList.getHomeCastle().objectId, s.WorldClassic.KINGDOM_ID));
    }
  };
  CastleRefineryToolsmithRecipeScrollItem.prototype.onJoinMainCastle = function (e) {
    y.CastleBasicController.getInstance().removeEventListener(d.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJoinMainCastle));
    var t = a.castAs(O.Iso.renderer.objects.provider.getObjectByType(f.IsoObjectEnum.RESEARCH_TOWER), "ABasicBuildingVE");
    if (t) {
      O.Iso.renderer.camera.scrollToGridPos(t.vo.pos);
      O.Iso.renderer.mouse.changeSelectedTarget(t);
      S.CastleDialogHandler.getInstance().registerDialogs(F.CastleResearchDialog, new N.CastleResearchDialogProperties(this.requiredResearch, null));
    } else {
      O.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
      var i = A.CastleLayoutManager.getInstance().getPanel(V.CastleDecoShopPanel);
      var n = b.CastleModel.wodData.getBuildingVOById(l.ClientConstCastle.RESEARCH_BUILDING_WOD_LEVEL1);
      if (!i.centerAndHighlightBuildingInShop(n)) {
        S.CastleDialogHandler.getInstance().registerDefaultDialogs(x.CastleStandardOkDialog, new o.BasicStandardOkDialogProperties(r.Localize.text("dialog_primeday_primesale_warningTitle"), r.Localize.text("dialog_primeday_primesale_warning")));
      }
    }
  };
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItem.prototype, "recipeCount", {
    get: function () {
      return this.recipeScrollItemVO.recipes.length;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItem.prototype, "queueVO", {
    get: function () {
      return b.CastleModel.craftingData.getQueueVOByID(this.recipeScrollItemVO.currentRecipeVO.queueID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItem.prototype, "recipeScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleRefineryToolsmithRecipeScrollItem;
}(o.ScrollItem);
exports.CastleRefineryToolsmithRecipeScrollItem = G;