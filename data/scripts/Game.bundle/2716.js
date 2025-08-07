Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./4.js");
var c = require("./8.js");
var u = require("./11.js");
var d = createjs.Point;
var p = function (e) {
  function CastleResearchRecipeInfoDialog() {
    return e.call(this, CastleResearchRecipeInfoDialog.NAME) || this;
  }
  n.__extends(CastleResearchRecipeInfoDialog, e);
  CastleResearchRecipeInfoDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    c.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_left, this.dialogDisp.btn_right], g.ClickFeedbackButtonHover);
  };
  CastleResearchRecipeInfoDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this.setRecipe(this.dialogProperties.recipeVO);
  };
  CastleResearchRecipeInfoDialog.prototype.onClick = function (e) {
    if (c.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_left:
          this.changeLevel(-1);
          break;
        case this.dialogDisp.btn_right:
          this.changeLevel(1);
      }
    }
  };
  CastleResearchRecipeInfoDialog.prototype.changeLevel = function (e) {
    var t = this.currentRecipe;
    var i = this.currentRecipe;
    for (var n = 0; n < this.recipes.length; n++) {
      if (this.currentRecipe.level + e == this.recipes[n].level) {
        this.setRecipe(this.recipes[n]);
        return;
      }
      if (this.recipes[n].level < t.level) {
        t = this.recipes[n];
      }
      if (this.recipes[n].level > i.level) {
        i = this.recipes[n];
      }
    }
    if (e < 0) {
      this.setRecipe(i);
    } else {
      this.setRecipe(t);
    }
  };
  CastleResearchRecipeInfoDialog.prototype.setRecipe = function (e) {
    this.currentRecipe = e;
    C.CostHelper.initAsCosts(this.currentRecipe.input, this.dialogDisp, false, true, new _.CollectableRendererList());
    var t = this.dialogDisp.mc_duration;
    t.mouseChildren = false;
    t.toolTipText = "dialog_ci_craft_ciTime_tooltip";
    this.textFieldManager.registerTextField(t.txt_time, new r.TextVO(E.CastleTimeStringHelper.getEventTimeString(this.currentRecipe.craftingDuration)));
    var i = this.currentRecipe.output.list[0];
    m.CollectableRenderHelper.displaySingleItemAndAddToRenderList(new _.CollectableRendererList(), new f.CollectableRenderClips(this.dialogDisp.mc_icon).addItemMc(this.dialogDisp.mc_icon.mc_icon).addTextfield(this.dialogDisp.mc_icon.txt_amount), i, new O.CollectableRenderOptions(O.CollectableRenderOptions.SET_DEFAULT, new d(130, 130)));
    var n = a.Localize.text(this.currentRecipe.output.list[0].getNameTextId(), this.currentRecipe.output.list[0].getNameTextParams());
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.TextVO(h.TextHelper.toUpperCaseLocaSafeTextId("dialog_researchTower_craftingManual_header", [n])));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new s.LocalizedTextVO("building_level_fromTo", [this.currentRecipe.level, this.recipes.length]));
    this.dialogDisp.icon_recipe.gotoAndStop(this.currentRecipe.getRecipeIconFrame());
  };
  Object.defineProperty(CastleResearchRecipeInfoDialog.prototype, "recipes", {
    get: function () {
      return l.CastleModel.craftingData.getRecipeClustersByQueue(this.dialogProperties.recipeVO.queueID).get(this.dialogProperties.recipeVO.recipeGroupID).get(this.dialogProperties.recipeVO.type);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleResearchRecipeInfoDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleResearchRecipeInfoDialog.NAME = "CastleResearchRecipeInfo";
  return CastleResearchRecipeInfoDialog;
}(u.CastleExternalDialog);
exports.CastleResearchRecipeInfoDialog = p;
var h = require("./13.js");
var g = require("./20.js");
var C = require("./66.js");
var _ = require("./104.js");
var m = require("./25.js");
var f = require("./31.js");
var O = require("./19.js");
var E = require("./27.js");
o.classImplementsInterfaces(p, "ICollectableRendererList");