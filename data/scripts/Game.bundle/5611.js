Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = function () {
  function ConstructionItemRecipeVO(e) {
    this._id = 0;
    this._blueprintId = 0;
    this._constructionItemId = 0;
    this._neededConstructionItemId = 0;
    this._unlockedByDefault = false;
    this._durationInSeconds = 0;
    this._level = 0;
    this.parseFromXml(e);
  }
  ConstructionItemRecipeVO.prototype.parseFromXml = function (e) {
    this._id = parseInt(s.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.RECIPE_ID, e, "0"));
    this._blueprintId = parseInt(s.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.BLUEPRINT_ID, e, "0"));
    this._constructionItemId = parseInt(s.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.CONSTRUCTION_ITEM_ID, e, "0"));
    this._neededConstructionItemId = parseInt(s.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.NEEDED_CONSTRUCTION_ITEM, e, "-1"));
    this._unlockedByDefault = parseInt(s.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.UNLOCKED_BY_DEFAULT, e, "0")) == 1;
    this._durationInSeconds = parseInt(s.CastleXMLUtils.getValueOrDefault(ConstructionItemRecipeVO.CRAFTING_DURATION, e, "0"));
    this._materialsNeeded = a.CollectableManager.parser.x2cList.createList(e, o.ClientConstCollectable.XML_PREFIX_COST);
  };
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "blueprintId", {
    get: function () {
      return this._blueprintId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "constructionItemId", {
    get: function () {
      return this._constructionItemId;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "materialsNeeded", {
    get: function () {
      return this._materialsNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "unlockedByDefault", {
    get: function () {
      return this._unlockedByDefault;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "durationInSeconds", {
    get: function () {
      return this._durationInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    set: function (e) {
      this._level = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "constructionItemNeeded", {
    get: function () {
      if (!this._constructionItemNeeded && this._neededConstructionItemId > -1 && (this._constructionItemNeeded = r.CastleModel.constructionItemData.getConstructionItemVO(this._neededConstructionItemId), !this._constructionItemNeeded)) {
        throw new Error("Recipe " + this._id + " has invalid neededConstructionItem " + this._neededConstructionItemId);
      }
      return this._constructionItemNeeded;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemRecipeVO.prototype, "constructionItem", {
    get: function () {
      this._constructionItem = this._constructionItem || r.CastleModel.constructionItemData.getConstructionItemVO(this._constructionItemId);
      return this._constructionItem;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemRecipeVO.__initialize_static_members = function () {
    ConstructionItemRecipeVO.RECIPE_ID = "constructionItemRecipeID";
    ConstructionItemRecipeVO.BLUEPRINT_ID = "blueprintID";
    ConstructionItemRecipeVO.CONSTRUCTION_ITEM_ID = "constructionItemID";
    ConstructionItemRecipeVO.UNLOCKED_BY_DEFAULT = "defaultUnlocked";
    ConstructionItemRecipeVO.CRAFTING_DURATION = "craftingDuration";
    ConstructionItemRecipeVO.NEEDED_CONSTRUCTION_ITEM = "neededConstructionItemID";
  };
  return ConstructionItemRecipeVO;
}();
exports.ConstructionItemRecipeVO = n;
var o = require("./86.js");
var a = require("./50.js");
var s = require("./22.js");
var r = require("./4.js");
n.__initialize_static_members();