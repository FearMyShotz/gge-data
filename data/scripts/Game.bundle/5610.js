Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ConstructionItemBlueprintVO(e) {
    this._id = 0;
    this._name = "";
    this._id = e;
    this._recipes = [];
  }
  ConstructionItemBlueprintVO.prototype.checkConstructionItem = function () {
    if (!this._constructionItem) {
      for (var e = 0; e < this._recipes.length; e++) {
        var t = this._recipes[e];
        if (t.constructionItem) {
          this._constructionItem = t.constructionItem;
          return;
        }
      }
      a.debug("No construction item found for recipe " + this._id);
    }
  };
  ConstructionItemBlueprintVO.prototype.addRecipe = function (e) {
    this._recipes.push(e);
    this._recipes.sort(function (e, t) {
      return e.id - t.id;
    });
    var t = 1;
    if (this._recipes != null) {
      for (var i = 0, n = this._recipes; i < n.length; i++) {
        var o = n[i];
        if (o !== undefined) {
          o.level = t++;
        }
      }
    }
  };
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "recipes", {
    get: function () {
      return this._recipes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "assetName", {
    get: function () {
      this.checkConstructionItem();
      var e = "Primary";
      if (this._constructionItem) {
        if (this._constructionItem.slotType == s.ConstructionItemConst.SECONDARY_SLOT_TYPE) {
          e = "Secondary";
        } else if (this._constructionItem.slotType == s.ConstructionItemConst.APPEARANCE_SLOT_TYPE) {
          e = "Appearance";
        }
      }
      return "Blueprint_" + e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "nameId", {
    get: function () {
      this.checkConstructionItem();
      var e = "";
      if (this._constructionItem && this._constructionItem.name) {
        e = this._constructionItem.name;
        if (this._constructionItem.isSecondaryItem) {
          e += "_secondary";
        }
        if (this._constructionItem.isPremium) {
          e += "_premium";
        }
      }
      return "ci_blueprint_" + e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "assetURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ConstructionItemBlueprints");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintVO.prototype, "constructionItem", {
    get: function () {
      this.checkConstructionItem();
      return this._constructionItem;
    },
    enumerable: true,
    configurable: true
  });
  return ConstructionItemBlueprintVO;
}();
exports.ConstructionItemBlueprintVO = n;
var o = require("./2.js");
var a = require("./2.js");
var s = require("./5.js");