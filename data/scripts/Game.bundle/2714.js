Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./3.js");
var l = require("./3.js");
var c = require("./3.js");
var u = require("./18.js");
var d = require("./16.js");
var p = require("./37.js");
var h = require("./531.js");
var g = require("./31.js");
var C = require("./19.js");
var _ = require("./15.js");
var m = require("./4.js");
var f = require("./42.js");
var O = require("./8.js");
var E = require("./771.js");
var y = createjs.Point;
var b = function () {
  function CastleConstructionItemsCraftingSublayerIngredients(e, t) {
    this.constructionItemRequired = false;
    this.materialsRequired = false;
    this.researchRequired = false;
    this.ingredientInfo = e;
    this.sublayer = t;
    O.ButtonHelper.initBasicButtons([e.researchRequired.button, e.btn_plus, e.btn_minus, e.btn_slider]);
    CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(e.title, new l.LocalizedTextVO("dialog_ci_craft_neededMaterials"));
    CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(e.blueprintUnlocked.text, new l.LocalizedTextVO("dialog_ci_craft_blueprintUnlocked")).verticalAlign = f.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this._researchText = CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(e.researchRequired.text, new l.LocalizedTextVO("dialog_ci_craft_researchRequired"));
    this._researchText.autoFitToBounds = true;
    e.researchRequired.button.toolTipText = "showMe_simple";
    e.blueprintUnlocked.visible = !(e.researchRequired.visible = true);
    e.timeHover.toolTipText = "dialog_ci_craft_ciTime_tooltip";
  }
  CastleConstructionItemsCraftingSublayerIngredients.prototype.addEventListeners = function () {
    m.CastleModel.researchData.addEventListener(h.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchUpdate));
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.removeEventListeners = function () {
    m.CastleModel.researchData.removeEventListener(h.CastleResearchEvent.RESEARCH_INFO_UPDATE, this.bindFunction(this.onResearchUpdate));
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.onResearchUpdate = function (e) {
    this.update();
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.updateResearch = function () {
    var e = R.ConstructionItemsHelper.isRecipeUnlocked(this.sublayer.recipeShown);
    this.ingredientInfo.researchRequired.button.visible = true;
    this.ingredientInfo.researchRequired.visible = !(this.ingredientInfo.blueprintUnlocked.visible = e);
    if (e) {
      if (this.constructionItemRequired || this.materialsRequired) {
        this.ingredientInfo.researchRequired.visible = !(this.ingredientInfo.blueprintUnlocked.visible = false);
        if (this.constructionItemRequired) {
          this._researchText = CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.researchRequired.text, new l.LocalizedTextVO("dialog_ci_craft_itemRequired"));
          this._researchText.width = CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_WITH_BTN;
        } else {
          this.ingredientInfo.researchRequired.button.visible = false;
          this._researchText = CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.researchRequired.text, new l.LocalizedTextVO("dialog_ci_craft_materialsRequired"));
          this._researchText.width = CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_NO_BTN;
        }
      }
    } else {
      this.researchRequired = true;
      this.sublayer.progressComponent.disableButton("dialog_ci_crafting_noResearch_tooltip");
      var t = R.ConstructionItemsHelper.findResearchForRecipe(this.sublayer.recipeShown);
      this._researchText = CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.researchRequired.text, new l.LocalizedTextVO("dialog_ci_craft_researchRequired"));
      this._researchText.width = CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_WITH_BTN;
      if (t) {
        this._researchText.textContentVO.textReplacements = [t.fullNameText];
      } else {
        console.warn("Research missing for recipeID " + this.sublayer.recipeShown.id);
        this._researchText.textContentVO.textReplacements = [""];
      }
    }
    this._researchText.verticalAlign = f.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayerIngredients, "textFieldManager", {
    get: function () {
      return o.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsCraftingSublayerIngredients.prototype.update = function () {
    if (this.renderedConstructionItem) {
      this.renderedConstructionItem.destroy();
    }
    this.ingredientInfo.checkmark.mouseEnabled = false;
    this.ingredientInfo.checkmark.visible = false;
    this.sublayer.progressComponent.disableButton(null);
    this.constructionItemRequired = false;
    this.materialsRequired = false;
    this.researchRequired = false;
    if (this.sublayer.recipeShown) {
      CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.time, new c.TextVO(s.TimeStringHelper.getShortTimeStringBySeconds(this.sublayer.recipeShown.durationInSeconds)));
      var e = false;
      var t = true;
      if (this.costScrollList) {
        this.costScrollList.onUpdated.remove(this.bindFunction(this.updateCheckMarks));
        this.costScrollList.destroy();
      }
      this.costScrollList = R.ConstructionItemsHelper.fillMaterialCosts(this.ingredientInfo.mc_costs, this.sublayer.recipeShown);
      this.costScrollList.onUpdated.add(this.bindFunction(this.updateCheckMarks));
      if (this.sublayer.recipeShown.constructionItemNeeded) {
        this.renderedConstructionItem = new I.CollectableRenderer(new g.CollectableRenderClips(this.ingredientInfo.mc_constructionItem), new C.CollectableRenderOptions(C.CollectableRenderOptions.SET_ICON, CastleConstructionItemsCraftingSublayerIngredients.CONSTRUCTION_ITEM_SIZE));
        var i = d.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        if (m.CastleModel.constructionItemData.hasConstructionItem(this.sublayer.recipeShown.constructionItemNeeded.id)) {
          this.ingredientInfo.checkmark.visible = true;
          e = true;
          i = d.ClientConstColor.FONT_DEFAULT_COLOR;
        } else {
          this.constructionItemRequired = true;
        }
        CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.mc_constructionItem.amount, new r.LocalizedNumberVO(1)).color = i;
        this.renderedConstructionItem.changeItemVO(new D.CollectableItemConstructionItemVO(this.sublayer.recipeShown.constructionItemNeeded.id));
        this.renderedConstructionItem.update();
        this.sublayer.collectableRenderList.push(this.renderedConstructionItem);
      } else {
        CastleConstructionItemsCraftingSublayerIngredients.textFieldManager.registerTextField(this.ingredientInfo.mc_constructionItem.amount, new c.TextVO("-"));
        a.MovieClipHelper.clearMovieClip(this.ingredientInfo.mc_constructionItem.mc_icon);
        this.ingredientInfo.mc_constructionItem.toolTipText = "dialog_ci_craft_ciSlot_tooltip";
      }
      if (m.CastleModel.constructionItemData.isInventoryFull) {
        this.sublayer.progressComponent.disableButton("alert_ci_inventoryFull_copy");
        t = false;
      } else if (!e && this.sublayer.recipeShown.constructionItemNeeded) {
        this.sublayer.progressComponent.disableButton("dialog_ci_crafting_noItem_tooltip");
        t = false;
      } else {
        for (var n = 0, o = this.sublayer.recipeShown.materialsNeeded.list; n < o.length; n++) {
          var l = o[n];
          if (l !== undefined && m.CastleModel.currencyData.getAmountById(l.id) < l.amount) {
            this.sublayer.progressComponent.disableButton("dialog_ci_crafting_noMaterials_tooltip");
            this.materialsRequired = true;
            t = false;
            break;
          }
        }
      }
      if (t) {
        this.sublayer.progressComponent.enableButton();
      }
      this.updateResearch();
      this.updateCheckMarks();
    } else {
      a.MovieClipHelper.clearMovieClip(this.ingredientInfo.mc_costs);
    }
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.updateCheckMarks = function () {
    var e;
    var t = this.ingredientInfo.mc_costs;
    for (var i = 0; i < this.sublayer.recipeShown.materialsNeeded.list.length; ++i) {
      var n = V.castAs(t.getChildByName("i" + i), "MovieClip");
      if (n) {
        e = this.sublayer.recipeShown.materialsNeeded.list[i];
        var o = m.CastleModel.currencyData.getAmountById(e.id) >= e.amount;
        n.checkmark.visible = o;
        L.CostHelper.setCostColor(n.txt_loot, !o);
      }
    }
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.onClick = function (e) {
    switch (e) {
      case this.ingredientInfo.researchRequired.button:
        if (this.researchRequired) {
          CastleConstructionItemsCraftingSublayerIngredients.layoutManager.hideAllDialogsExcept([]);
          if (m.CastleModel.researchData.isResearchTowerBuilt) {
            var t = R.ConstructionItemsHelper.findResearchForRecipe(this.sublayer.recipeShown);
            if (t) {
              S.CastleDialogHandler.getInstance().registerDialogs(M.CastleResearchDialog, new E.CastleResearchDialogProperties(t, null));
            } else {
              S.CastleDialogHandler.getInstance().registerDialogs(M.CastleResearchDialog);
            }
          } else if (CastleConstructionItemsCraftingSublayerIngredients.layoutManager.isInMyCastle && m.CastleModel.areaData.activeArea.isMyHomeCastle) {
            this.showResearchTowerInBuildMode();
          } else {
            CastleConstructionItemsCraftingSublayerIngredients.controller.addEventListener(p.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAAArrived));
            n.CommandController.instance.executeCommand(v.IngameClientCommands.JOIN_MAIN_CASTLE_COMMAND);
          }
        } else if (this.constructionItemRequired && this.sublayer.recipeShown.constructionItemNeeded) {
          var i = m.CastleModel.constructionItemBlueprintData.findRecipeFor(this.sublayer.recipeShown.constructionItemNeeded);
          if (i) {
            this.sublayer.selectRecipe(i, true);
          }
        }
    }
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.onJAAArrived = function (e) {
    CastleConstructionItemsCraftingSublayerIngredients.controller.removeEventListener(p.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onJAAArrived));
    this.showResearchTowerInBuildMode();
  };
  CastleConstructionItemsCraftingSublayerIngredients.prototype.showResearchTowerInBuildMode = function () {
    T.Iso.controller.viewUpdater.switchBuildModeInOwnCastle(true);
    var e = m.CastleModel.wodData.getBuildingVOById(u.ClientConstCastle.WID_RESEARCH_TOWER);
    CastleConstructionItemsCraftingSublayerIngredients.layoutManager.getPanel(P.CastleDecoShopPanel).centerAndHighlightBuildingInShop(e);
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayerIngredients, "layoutManager", {
    get: function () {
      return A.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionItemsCraftingSublayerIngredients, "controller", {
    get: function () {
      return _.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionItemsCraftingSublayerIngredients.__initialize_static_members = function () {
    CastleConstructionItemsCraftingSublayerIngredients.CONSTRUCTION_ITEM_SIZE = new y(54, 54);
  };
  CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_WITH_BTN = 254;
  CastleConstructionItemsCraftingSublayerIngredients.RESEARCH_TEXT_WIDTH_NO_BTN = 290;
  return CastleConstructionItemsCraftingSublayerIngredients;
}();
exports.CastleConstructionItemsCraftingSublayerIngredients = b;
var D = require("./337.js");
var I = require("./186.js");
var T = require("./34.js");
var v = require("./29.js");
var S = require("./9.js");
var A = require("./17.js");
var L = require("./66.js");
var P = require("./260.js");
var M = require("./450.js");
var R = require("./239.js");
var V = require("./1.js");
b.__initialize_static_members();