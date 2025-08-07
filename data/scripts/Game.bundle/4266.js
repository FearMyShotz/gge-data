Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./3.js");
var a = require("./22.js");
var s = require("./50.js");
var r = require("./4.js");
var l = require("./797.js");
var c = function () {
  function CraftingRecipeVO(e = null) {
    this._learned = false;
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  CraftingRecipeVO.prototype.fillFromParamXml = function (e) {
    this._id = parseInt(e.craftingRecipeId || "0");
    this._queueID = parseInt(e.queueTypeId || "0");
    this._recipeGroupID = parseInt(e.recipeGroupID || "0");
    this._researchGroupID = parseInt(e.researchGroupID || "0");
    this._level = parseInt(e.level || "0");
    this._type = e.type.toLowerCase();
    this._craftingDuration = parseInt(e.craftingDuration || "0");
    this._skipCostC2 = parseInt(e.skipCostC2 || "0");
    this._input = s.CollectableManager.parser.x2cEventPackages.createCostList(e);
    var t = a.CastleXMLUtils.getIntArrayFromString(e.rewardIDs || "", ",");
    this._output = r.CastleModel.rewardData.getListByIdArray(t);
    var i = a.CastleXMLUtils.getIntArrayFromString(e.requiredCraftingBuildings || "", ",");
    this._requiredCraftingBuildings = i.map(function (e) {
      return r.CastleModel.wodData.getBuildingVOById(e);
    });
  };
  Object.defineProperty(CraftingRecipeVO.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "queueID", {
    get: function () {
      return this._queueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "recipeGroupID", {
    get: function () {
      return this._recipeGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "researchGroupID", {
    get: function () {
      return this._researchGroupID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "level", {
    get: function () {
      return this._level;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "type", {
    get: function () {
      return this._type;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "craftingDuration", {
    get: function () {
      return this._craftingDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "skipCostC2", {
    get: function () {
      return this._skipCostC2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "input", {
    get: function () {
      return this._input;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "output", {
    get: function () {
      return this._output;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingRecipeVO.prototype, "learned", {
    get: function () {
      return this._learned;
    },
    set: function (e) {
      this._learned = e;
    },
    enumerable: true,
    configurable: true
  });
  CraftingRecipeVO.prototype.getNameString = function (e = true) {
    var t = o.Localize.text(this.output.list[0].getNameTextId(), this.output.list[0].getNameTextParams());
    var i = "crafting_recipe_" + this._type + "_placeholder_01";
    if (e) {
      return o.Localize.text(n.GenericTextIds.VALUE_SIMPLE_COMP, [o.Localize.text(i, [t]), this.level]);
    } else {
      return o.Localize.text(i, [t]);
    }
  };
  CraftingRecipeVO.prototype.getManualName = function () {
    var e = "crafting_recipe_" + this._type + "_placeholder_01";
    return o.Localize.text(e, [this.level]);
  };
  CraftingRecipeVO.prototype.getSortOrderByType = function () {
    switch (this._type) {
      case CraftingRecipeVO.TYPE_SHORT:
        return 1;
      case CraftingRecipeVO.TYPE_LONG:
        return 2;
      case CraftingRecipeVO.TYPE_RUBY:
        return 3;
    }
  };
  CraftingRecipeVO.prototype.getRecipeIconFrame = function () {
    var e = 0;
    switch (this.queueID) {
      case l.CraftingQueueVO.QUEUE_TOOLSMITH:
        e = 3;
        break;
      case l.CraftingQueueVO.QUEUE_DRAGONHOARD:
        e = 6;
        break;
      case l.CraftingQueueVO.QUEUE_DRAGONBREATH:
        e = 8;
    }
    return this.getSortOrderByType() + e;
  };
  CraftingRecipeVO.prototype.getResearchRequired = function () {
    return r.CastleModel.researchData.getGroupById(this._researchGroupID).activeResearch;
  };
  Object.defineProperty(CraftingRecipeVO.prototype, "requiredCraftingBuildings", {
    get: function () {
      return this._requiredCraftingBuildings;
    },
    enumerable: true,
    configurable: true
  });
  CraftingRecipeVO.TYPE_SHORT = "short";
  CraftingRecipeVO.TYPE_LONG = "long";
  CraftingRecipeVO.TYPE_RUBY = "ruby";
  return CraftingRecipeVO;
}();
exports.CraftingRecipeVO = c;