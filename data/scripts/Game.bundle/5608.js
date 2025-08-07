Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ConstructionItemBlueprintData(e) {
    this._newBlueprints = [];
    this.parseFromXml(e);
  }
  ConstructionItemBlueprintData.prototype.parseFromXml = function (e) {
    this._recipes = new Map();
    this._blueprints = new Map();
    this._newBlueprints = [];
    for (var t = 0, i = e.constructionItemRecipes; t < i.length; t++) {
      var n = i[t];
      if (n != null) {
        try {
          var s = new o.ConstructionItemRecipeVO(n);
          this._recipes.set(s.id, s);
          this.addOrUpdateBlueprint(s);
          0;
        } catch (e) {
          a.debug(e.stack);
        }
      }
    }
  };
  ConstructionItemBlueprintData.prototype.addOrUpdateBlueprint = function (e) {
    if (!this._blueprints.has(e.blueprintId)) {
      this._blueprints.set(e.blueprintId, new s.ConstructionItemBlueprintVO(e.blueprintId));
    }
    this._blueprints.get(e.blueprintId).addRecipe(e);
  };
  Object.defineProperty(ConstructionItemBlueprintData.prototype, "blueprints", {
    get: function () {
      return this._blueprints;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemBlueprintData.prototype.findRecipeFor = function (e, t = false) {
    if (this._blueprints != null) {
      for (var i = 0, n = Array.from(this._blueprints.values()); i < n.length; i++) {
        var o = n[i];
        if (o !== undefined && o.recipes[0].constructionItem.name == e.name) {
          for (var a = 0, s = o.recipes; a < s.length; a++) {
            var r = s[a];
            if (r !== undefined && r.constructionItemId == e.id && (!t || r.constructionItemNeeded)) {
              return r;
            }
          }
        }
      }
    }
    return null;
  };
  Object.defineProperty(ConstructionItemBlueprintData.prototype, "recipes", {
    get: function () {
      return this._recipes;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemBlueprintData.prototype, "newBlueprints", {
    get: function () {
      return this._newBlueprints;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemBlueprintData.prototype.addNewBlueprints = function (e) {
    this._newBlueprints = this._newBlueprints.concat(e);
  };
  return ConstructionItemBlueprintData;
}();
exports.ConstructionItemBlueprintData = n;
var o = require("./5609.js");
var a = require("./2.js");
var s = require("./5610.js");