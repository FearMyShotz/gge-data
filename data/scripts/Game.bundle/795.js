Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./4.js");
var o = require("./459.js");
var a = function () {
  function CraftingQueueVO(e, t, i, a, s, r) {
    this._buildingState = null;
    this._craftingQueueXML = n.CastleModel.craftingData.getQueueXMLByID(a);
    this._kingdomID = e;
    this._areaID = t;
    this._objectID = i;
    this._buildingState = s;
    this._craftingEffects = r;
    this._productionSlots = [];
    this._queueSlots = [];
    for (var l = 0; l < this.permanentProductionSlots; l++) {
      this._productionSlots.push(new o.CraftingSlotVO(this.queueID, o.CraftingSlotVO.SLOT_TYPE_PRODUCTION, this._productionSlots.length, false));
    }
    for (l = 0; l < this.temporaryProductionSlots; l++) {
      this._productionSlots.push(new o.CraftingSlotVO(this.queueID, o.CraftingSlotVO.SLOT_TYPE_PRODUCTION, this._productionSlots.length, true));
    }
    for (l = 0; l < this.permanentQueueSlots; l++) {
      this._queueSlots.push(new o.CraftingSlotVO(this.queueID, o.CraftingSlotVO.SLOT_TYPE_QUEUE, l, false));
    }
    for (l = 0; l < this.temporaryQueueSlots; l++) {
      this._queueSlots.push(new o.CraftingSlotVO(this.queueID, o.CraftingSlotVO.SLOT_TYPE_QUEUE, this.permanentQueueSlots + l, true));
    }
  }
  CraftingQueueVO.prototype.parseServerData = function (e, t) {
    this.getSlotsByType(e).forEach(function (e) {
      e.reset();
      if (t.CRID && t.CRID.length > 0) {
        e.recipeID = t.CRID.shift();
      }
      if (t.RCT && t.RCT.length > 0) {
        e.setRemainingProductionTime(t.RCT.shift());
      }
      if (t.RUT && t.RUT.length > 0 && e.isTemporarySlot) {
        e.setRemainingUnlockTime(t.RUT.shift());
      }
      if (t.BV && t.BV.length > 0) {
        e.boosterValue = t.BV.shift();
      } else {
        e.boosterValue = 0;
      }
    });
  };
  Object.defineProperty(CraftingQueueVO.prototype, "kingdomID", {
    get: function () {
      return this._kingdomID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "areaID", {
    get: function () {
      return this._areaID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "objectID", {
    get: function () {
      return this._objectID;
    },
    set: function (e) {
      this._objectID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "id", {
    get: function () {
      return this._craftingQueueXML.id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "queueID", {
    get: function () {
      return this._craftingQueueXML.queueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "buildingState", {
    get: function () {
      return this._buildingState;
    },
    set: function (e) {
      this._buildingState = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "craftingEffects", {
    get: function () {
      return this._craftingEffects;
    },
    set: function (e) {
      this._craftingEffects = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "permanentProductionSlots", {
    get: function () {
      return this._craftingQueueXML.permanentProductionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "temporaryProductionSlots", {
    get: function () {
      return this._craftingQueueXML.temporaryProductionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "productionSlotUnlockCostC1", {
    get: function () {
      return this._craftingQueueXML.productionSlotUnlockCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "productionSlotUnlockDuration", {
    get: function () {
      return this._craftingQueueXML.productionSlotUnlockDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "permanentQueueSlots", {
    get: function () {
      return this._craftingQueueXML.permanentQueueSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "temporaryQueueSlots", {
    get: function () {
      return this._craftingQueueXML.temporaryQueueSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "queueSlotUnlockCostC1", {
    get: function () {
      return this._craftingQueueXML.queueSlotUnlockCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "queueSlotUnlockDuration", {
    get: function () {
      return this._craftingQueueXML.queueSlotUnlockDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "productionSlots", {
    get: function () {
      return this._productionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "hasFreeUnlockedSlots", {
    get: function () {
      return this.productionSlots.concat(this.queueSlots).some(function (e) {
        return !e.isFilled() && !e.isLocked();
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "hasFreeLockedSlots", {
    get: function () {
      return this.productionSlots.concat(this.queueSlots).some(function (e) {
        return e.isTemporarySlot && e.isLocked() && !e.isFilled();
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "nextFreeLockedSlot", {
    get: function () {
      return this.productionSlots.concat(this.queueSlots).find(function (e) {
        return e.isTemporarySlot && e.isLocked() && !e.isFilled();
      });
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueVO.prototype, "queueSlots", {
    get: function () {
      return this._queueSlots;
    },
    enumerable: true,
    configurable: true
  });
  CraftingQueueVO.prototype.getSlotsByType = function (e) {
    if (e == o.CraftingSlotVO.SLOT_TYPE_PRODUCTION) {
      return this.productionSlots;
    } else {
      return this.queueSlots;
    }
  };
  CraftingQueueVO.prototype.isProducing = function () {
    return this.productionSlots.some(function (e) {
      return e.isFilled();
    });
  };
  CraftingQueueVO.QUEUE_REFINERY = 1;
  CraftingQueueVO.QUEUE_TOOLSMITH = 2;
  CraftingQueueVO.QUEUE_DRAGONHOARD = 3;
  CraftingQueueVO.QUEUE_DRAGONBREATH = 4;
  return CraftingQueueVO;
}();
exports.CraftingQueueVO = a;