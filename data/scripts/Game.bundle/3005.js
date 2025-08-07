Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./4.js");
var r = require("./142.js");
var l = require("./35.js");
var c = require("./111.js");
var u = function (e) {
  function CastleRefineryToolsmithRecipeScrollItemVO(t) {
    var i = e.call(this) || this;
    i.currentRecipeIndex = 0;
    i.recipes = t;
    return i;
  }
  n.__extends(CastleRefineryToolsmithRecipeScrollItemVO, e);
  CastleRefineryToolsmithRecipeScrollItemVO.prototype.changeCurrentRecipe = function (e) {
    this.currentRecipeIndex = o.MathBase.clamp(this.currentRecipeIndex + e, 0, this.recipes.length - 1);
  };
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItemVO.prototype, "currentRecipeVO", {
    get: function () {
      return this.recipes[this.currentRecipeIndex];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItemVO.prototype, "allRecipesLocked", {
    get: function () {
      return this.recipes.every(function (e) {
        return !e.learned;
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRefineryToolsmithRecipeScrollItemVO.prototype, "groupLocked", {
    get: function () {
      var e = this.currentRecipeVO;
      var t = s.CastleModel.craftingData.getQueueVOByID(e.queueID) ? [s.CastleModel.craftingData.getQueueVOByID(e.queueID).craftingEffects] : null;
      return !c.CastleEffectsHelper.getAccumulatedEffectValueForType(l.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE_GROUPS, null, new r.CastleEffectConditionVO(), t).hasID(e.recipeGroupID);
    },
    enumerable: true,
    configurable: true
  });
  return CastleRefineryToolsmithRecipeScrollItemVO;
}(a.ScrollItemVO);
exports.CastleRefineryToolsmithRecipeScrollItemVO = u;