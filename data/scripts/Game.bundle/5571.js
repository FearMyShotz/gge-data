Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./3.js");
var r = require("./31.js");
var l = require("./19.js");
var c = require("./24.js");
var u = require("./41.js");
var d = require("./25.js");
var p = require("./4.js");
var h = require("./35.js");
var g = require("./1963.js");
var C = createjs.Point;
var _ = function (e) {
  function CraftingRecipeResearchVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(CraftingRecipeResearchVO, e);
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "descriptionTextId", {
    get: function () {
      return "research_recipe_copy";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "descriptionTextReplacements", {
    get: function () {
      return [this.unlockedRecipe.level];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "nameTextId", {
    get: function () {
      return "research_recipe_" + this.unlockedRecipe.type + "_title";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "fullNameText", {
    get: function () {
      var e = this.unlockedRecipe;
      var t = s.Localize.text(this.nameTextId, [s.Localize.text(e.output.list[0].getNameTextId(), e.output.list[0].getNameTextParams())]);
      return s.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [t, s.Localize.text("building_level", [this.level])]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeResearchVO.prototype, "unlockedRecipe", {
    get: function () {
      return p.CastleModel.craftingData.getRecipeByID(this.getEffectValueByType(h.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE).rawValues[0]);
    },
    enumerable: true,
    configurable: true
  });
  CraftingRecipeResearchVO.prototype.icon = function () {
    var e = new c.CastleGoodgameExternalClip(CraftingRecipeResearchVO.ICON_RESEARCH_RECIPE, a.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CraftingRecipeResearchVO.ICON_RESEARCH_RECIPE), null, 0, false);
    e.doWhenLoaded(this.bindFunction(this.renderRecipeIcon));
    return e;
  };
  CraftingRecipeResearchVO.prototype.renderRecipeIcon = function (e) {
    var t = this.unlockedRecipe;
    if (t) {
      e.gotoAndStop(t.getRecipeIconFrame());
      var i = t.output.list[0];
      var n = e.currentshownDisplayObject.iconHolder;
      d.CollectableRenderHelper.displaySingleItem(new r.CollectableRenderClips(n).addIconMc(n), i, new l.CollectableRenderOptions(l.CollectableRenderOptions.ICON, new C(40, 40)));
      u.CastleMovieClipHelper.updateParentCache(e);
    }
  };
  CraftingRecipeResearchVO.ICON_RESEARCH_RECIPE = "Icon_Research_Recipe";
  return CraftingRecipeResearchVO;
}(g.ResearchVO);
exports.CraftingRecipeResearchVO = _;