Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./1430.js");
var s = require("./4260.js");
var r = require("./4261.js");
var l = require("./4262.js");
var c = require("./4263.js");
var u = require("./4264.js");
var d = require("./542.js");
var p = require("./87.js");
var h = require("./72.js");
var g = require("./66.js");
var C = require("./4.js");
var _ = require("./110.js");
var m = require("./797.js");
var f = require("./4265.js");
var O = require("./4266.js");
var E = require("./459.js");
var y = require("./142.js");
var b = require("./33.js");
var D = require("./1104.js");
var I = function (e) {
  function CastleCraftingData(t) {
    var i = e.call(this) || this;
    i._craftingQueueVOs = [];
    i._craftingQueueXMLs = new Map();
    i._craftingRecipeVOs = new Map();
    i._craftingRecipeClusters = new Map();
    var n = t.craftingQueues;
    var o = t.craftingRecipes;
    if (o != null) {
      for (var a = 0, s = o; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined) {
          var l = new O.CraftingRecipeVO(r);
          if (l && l.output.length > 0) {
            i.addRecipe(l);
          }
        }
      }
    }
    if (n != null) {
      for (var c = 0, u = n; c < u.length; c++) {
        var d = u[c];
        if (d !== undefined) {
          var p = new f.CraftingQueueXML(d);
          i._craftingQueueXMLs.add(p.queueID, p);
        }
      }
    }
    return i;
  }
  n.__extends(CastleCraftingData, e);
  CastleCraftingData.prototype.addRecipe = function (e) {
    this._craftingRecipeVOs.add(e.id, e);
    if (!this._craftingRecipeClusters.has(e.queueID)) {
      this._craftingRecipeClusters.add(e.queueID, new Map());
    }
    if (!this._craftingRecipeClusters.get(e.queueID).has(e.recipeGroupID)) {
      this._craftingRecipeClusters.get(e.queueID).add(e.recipeGroupID, new Map());
    }
    if (!this._craftingRecipeClusters.get(e.queueID).get(e.recipeGroupID).has(e.type)) {
      this._craftingRecipeClusters.get(e.queueID).get(e.recipeGroupID).add(e.type, []);
    }
    this._craftingRecipeClusters.get(e.queueID).get(e.recipeGroupID).get(e.type).push(e);
    this._craftingRecipeClusters.get(e.queueID).get(e.recipeGroupID).get(e.type).sort(function (e, t) {
      return e.level - t.level;
    });
  };
  CastleCraftingData.prototype.parseAllQueueData = function (e) {
    var t = this;
    (Array.isArray(e[o.CommKeys.CRAFTING_AREA_INFO]) ? e[o.CommKeys.CRAFTING_AREA_INFO] : [e[o.CommKeys.CRAFTING_AREA_INFO]]).forEach(function (e) {
      t.parseAreaQueueData(e);
    });
    this.dispatchEvent(new d.CraftingEvent(d.CraftingEvent.CRAFTING_QUEUE_UPDATED, -1));
  };
  CastleCraftingData.prototype.parseAreaQueueData = function (e) {
    var t = this;
    if (e) {
      var i = new D.SimpleEffectSource();
      i.parseEffects(e[o.CommKeys.CRAFTING_EFFECTS] || []);
      (e[o.CommKeys.CRAFTING_BUILDINGS_INFO] || []).forEach(function (e) {
        t.parseBuildingQueueData(e, i, false);
      });
    }
  };
  CastleCraftingData.prototype.parseBuildingQueueData = function (e, t = null, i = true) {
    var n = e[o.CommKeys.KINGDOM_ID];
    var a = e[o.CommKeys.AREA_ID];
    var s = p.IsoBuildingStateEnum.getTypeById(e[o.CommKeys.STATE]);
    var r = e[o.CommKeys.CRAFTING_QUEUE_ID];
    var l = e[o.CommKeys.OBJECT_ID];
    var c = this._craftingQueueVOs.find(function (e) {
      return e.queueID === r && e.kingdomID === n && e.areaID === a;
    });
    if (!c) {
      c = new m.CraftingQueueVO(n, a, l, r, s, t);
      this._craftingQueueVOs.push(c);
    }
    c.objectID = l;
    c.buildingState = s;
    c.craftingEffects = t || c.craftingEffects || new D.SimpleEffectSource();
    c.parseServerData(E.CraftingSlotVO.SLOT_TYPE_PRODUCTION, e[o.CommKeys.PRODUCTION_SLOT] || {});
    c.parseServerData(E.CraftingSlotVO.SLOT_TYPE_QUEUE, e[o.CommKeys.QUEUE_SLOTS] || {});
    if (i) {
      this.dispatchEvent(new d.CraftingEvent(d.CraftingEvent.CRAFTING_QUEUE_UPDATED, r, n));
    }
  };
  CastleCraftingData.prototype.checkForLearnedRecipes = function () {
    var e = this;
    Array.from(this._craftingRecipeVOs.values()).forEach(function (t) {
      var i = e.getQueueVOByID(t.queueID) ? [e.getQueueVOByID(t.queueID).craftingEffects] : null;
      t.learned = _.CastleEffectsHelper.getAccumulatedEffectValueForType(b.EffectTypeEnum.EFFECT_TYPE_ENABLE_CRAFTINGRECIPE, null, new y.CastleEffectConditionVO(), i).hasID(t.id);
      var n = e._craftingRecipeClusters.get(t.queueID).get(t.recipeGroupID).get(t.type).find(function (e) {
        return e.level === t.level + 1;
      });
      if (n && !t.learned) {
        t.learned = n.learned;
      }
    });
  };
  CastleCraftingData.prototype.reset = function () {
    this._craftingQueueVOs = [];
  };
  CastleCraftingData.prototype.getCraftingInfo = function () {
    C.CastleModel.smartfoxClient.sendCommandVO(new c.C2SCraftingInfoVO());
  };
  CastleCraftingData.prototype.startCrafting = function (e) {
    var t = this.currentCastleVO.kingdomID;
    var i = this.currentCastleVO.objectId;
    var n = this.getQueueVOByID(e.queueID).objectID;
    if (this.getQueueVOByID(e.queueID).buildingState.isFunctionally) {
      g.CostHelper.validateCostBuyCommand(e.input, new a.C2CraftingStartVO(t, i, n, false, e.id));
    }
  };
  CastleCraftingData.prototype.cancelCrafting = function (e) {
    var t = this.currentCastleVO.kingdomID;
    var i = this.currentCastleVO.objectId;
    var n = this.getQueueVOByID(e.queueID).objectID;
    if (this.getQueueVOByID(e.queueID).buildingState.isFunctionally) {
      C.CastleModel.smartfoxClient.sendCommandVO(new l.C2SCraftingCancelVO(t, i, n, e.slotIndex, e.slotType));
    }
  };
  CastleCraftingData.prototype.skipCrafting = function (e) {
    var t = this.currentCastleVO.kingdomID;
    var i = this.currentCastleVO.objectId;
    var n = this.getQueueVOByID(e.queueID).objectID;
    if (this.getQueueVOByID(e.queueID).buildingState.isFunctionally) {
      C.CastleModel.smartfoxClient.sendCommandVO(new s.C2SCraftingSkipVO(t, i, n, e.slotIndex, e.slotType, e.getAdjustedSkipCostC2()));
    }
  };
  CastleCraftingData.prototype.buySlot = function (e) {
    var t = this.currentCastleVO.kingdomID;
    var i = this.currentCastleVO.objectId;
    var n = this.getQueueVOByID(e.queueID).objectID;
    if (this.getQueueVOByID(e.queueID).buildingState.isFunctionally) {
      var o = [e.slotIndex];
      for (var a = e.previousSlot(); a && a.isLocked();) {
        o.unshift(a.slotIndex);
        a = a.previousSlot();
      }
      C.CastleModel.smartfoxClient.sendCommandVO(new r.C2SCraftingUnlockVO(t, i, n, o, e.slotType));
    }
  };
  CastleCraftingData.prototype.moveQueueSlot = function (e, t) {
    var i = this.currentCastleVO.kingdomID;
    var n = this.currentCastleVO.objectId;
    var o = this.getQueueVOByID(e.queueID).objectID;
    if (this.getQueueVOByID(e.queueID).buildingState.isFunctionally) {
      C.CastleModel.smartfoxClient.sendCommandVO(new u.C2SCraftingQueueMoveVO(i, n, o, e.slotIndex, t));
    }
  };
  CastleCraftingData.prototype.getQueueXMLByID = function (e) {
    return this._craftingQueueXMLs.get(e);
  };
  CastleCraftingData.prototype.getQueueVOByID = function (e) {
    var t = this;
    return this._craftingQueueVOs.find(function (i) {
      return i.queueID === e && i.kingdomID === t.currentCastleVO.kingdomID && i.areaID === t.currentCastleVO.objectId;
    });
  };
  CastleCraftingData.prototype.getRecipeByID = function (e) {
    return this._craftingRecipeVOs.get(e);
  };
  CastleCraftingData.prototype.getRecipeClustersByQueue = function (e) {
    return this._craftingRecipeClusters.get(e);
  };
  CastleCraftingData.prototype.getAvailableCastleList = function (e) {
    var t = this;
    return C.CastleModel.userData.castleList.getMainCastlesInKingdoms().filter(function (i) {
      return t._craftingQueueVOs.some(function (t) {
        return t.queueID == e && t.kingdomID === i.kingdomID && t.areaID === i.objectId && t.buildingState.isFunctionally;
      });
    });
  };
  Object.defineProperty(CastleCraftingData.prototype, "currentCastleVO", {
    get: function () {
      this._currentCastleVO ||= C.CastleModel.userData.castleList.getHomeCastle();
      return this._currentCastleVO;
    },
    set: function (e) {
      this._currentCastleVO = e;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCraftingData;
}(h.CastleEventDispatcher);
exports.CastleCraftingData = I;