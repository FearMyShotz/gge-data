Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./24.js");
var l = require("./41.js");
var c = require("./4.js");
var u = require("./1965.js");
var d = function (e) {
  function BlueprintResearchVO() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(BlueprintResearchVO, e);
  Object.defineProperty(BlueprintResearchVO.prototype, "effectText", {
    get: function () {
      return a.Localize.text(this.descriptionTextId, this.descriptionTextReplacements);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "effectText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "descriptionTextId", {
    get: function () {
      return "research_ciBlueprints_copy";
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "descriptionTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "descriptionTextReplacements", {
    get: function () {
      return [this.highestRecipe.level];
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "descriptionTextReplacements").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "nameTextId", {
    get: function () {
      return this.blueprintVO.nameId;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "nameTextId").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "fullNameText", {
    get: function () {
      return a.Localize.text(o.GenericTextIds.VALUE_SIMPLE_COMP, [a.Localize.text(this.nameTextId), a.Localize.text("building_level", [this.level])]);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AResearchVO.prototype, "fullNameText").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BlueprintResearchVO.prototype.icon = function () {
    var e = new r.CastleGoodgameExternalClip(this.blueprintVO.assetName, this.blueprintVO.assetURL, null, 0, false);
    e.doWhenLoaded(this.bindFunction(function (t) {
      t.scaleX = e.scaleY = 1.2;
      p.ConstructionItemRenderer.renderBlueprint(this.blueprintVO, t, function (t) {
        l.CastleMovieClipHelper.updateParentCache(e);
      });
    }));
    return e;
  };
  Object.defineProperty(BlueprintResearchVO.prototype, "highestRecipe", {
    get: function () {
      for (var e, t = this.totalEffectiveBonus.rawValues, i = s.int(t.length - 1); i >= 0 && !(e = c.CastleModel.constructionItemBlueprintData.recipes.get(t[i])); i--) {
        console.warn("Research " + this.researchID + " unlocks recipeID " + t[i] + " which does not exist");
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BlueprintResearchVO.prototype, "blueprintVO", {
    get: function () {
      return c.CastleModel.constructionItemBlueprintData.blueprints.get(this.highestRecipe.blueprintId);
    },
    enumerable: true,
    configurable: true
  });
  BlueprintResearchVO.prototype.onMouseOverResearchIcon = function (e) {
    h.ConstructionItemTooltipHelper.showBlueprintToolTip(e, this.blueprintVO);
  };
  BlueprintResearchVO.prototype.onMouseOutResearchIcon = function () {
    h.ConstructionItemTooltipHelper.hideToolTip();
  };
  return BlueprintResearchVO;
}(u.AResearchVO);
exports.BlueprintResearchVO = d;
var p = require("./530.js");
var h = require("./356.js");