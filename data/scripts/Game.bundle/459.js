Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./28.js");
var a = require("./30.js");
var s = require("./4.js");
var r = function () {
  function CraftingSlotVO(e, t, i, n) {
    this._recipeID = -1;
    this._productionTimeStamp = -1;
    this._unlockTimeStamp = -1;
    this._boosterValue = 0;
    this._queueID = e;
    this._slotType = t;
    this._slotIndex = i;
    this._isTemporarySlot = n;
  }
  Object.defineProperty(CraftingSlotVO.prototype, "queueID", {
    get: function () {
      return this._queueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "slotType", {
    get: function () {
      return this._slotType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "slotIndex", {
    get: function () {
      return this._slotIndex;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "isTemporarySlot", {
    get: function () {
      return this._isTemporarySlot;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "isProductionSlot", {
    get: function () {
      return this._slotType == CraftingSlotVO.SLOT_TYPE_PRODUCTION;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "recipeID", {
    get: function () {
      return this._recipeID;
    },
    set: function (e) {
      this._recipeID = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "boosterValue", {
    get: function () {
      return this._boosterValue;
    },
    set: function (e) {
      this._boosterValue = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingSlotVO.prototype, "recipeVO", {
    get: function () {
      return s.CastleModel.craftingData.getRecipeByID(this.recipeID);
    },
    enumerable: true,
    configurable: true
  });
  CraftingSlotVO.prototype.setRemainingProductionTime = function (e) {
    this._productionTimeStamp = a.CachedTimer.getCachedTimer() + e * o.ClientConstTime.SEC_2_MILLISEC;
  };
  CraftingSlotVO.prototype.setRemainingUnlockTime = function (e) {
    this._unlockTimeStamp = a.CachedTimer.getCachedTimer() + e * o.ClientConstTime.SEC_2_MILLISEC;
  };
  CraftingSlotVO.prototype.getRemainingProductionTime = function () {
    if (this._productionTimeStamp > 0) {
      return (this._productionTimeStamp - a.CachedTimer.getCachedTimer()) * o.ClientConstTime.MILLISEC_2_SEC;
    } else if (this.recipeVO) {
      return this.recipeVO.craftingDuration;
    } else {
      return 0;
    }
  };
  CraftingSlotVO.prototype.getRemainingUnlockTime = function () {
    return (this._unlockTimeStamp - a.CachedTimer.getCachedTimer()) * o.ClientConstTime.MILLISEC_2_SEC;
  };
  CraftingSlotVO.prototype.getRemainingProductionTimeRatio = function () {
    var e = this.recipeVO.craftingDuration;
    var t = this.getRemainingProductionTime();
    return n.MathBase.clamp((e - t) / e, 0, 1);
  };
  CraftingSlotVO.prototype.isFilled = function () {
    return this._recipeID > 0 && this.getRemainingProductionTime() > 0;
  };
  CraftingSlotVO.prototype.isLocked = function () {
    return this._isTemporarySlot && this.getRemainingUnlockTime() <= 0;
  };
  CraftingSlotVO.prototype.getUnlockDuration = function () {
    var e = s.CastleModel.craftingData.getQueueVOByID(this._queueID);
    if (this.isProductionSlot) {
      return e.productionSlotUnlockDuration;
    } else {
      return e.queueSlotUnlockDuration;
    }
  };
  CraftingSlotVO.prototype.getUnlockCostC1 = function () {
    var e = 0;
    if (this.previousSlot() && this.previousSlot().isLocked()) {
      e += this.previousSlot().getUnlockCostC1();
    }
    var t = s.CastleModel.craftingData.getQueueVOByID(this._queueID);
    return e += this.isProductionSlot ? t.productionSlotUnlockCostC1[this._slotIndex - t.permanentProductionSlots] : t.queueSlotUnlockCostC1[this._slotIndex - t.permanentQueueSlots];
  };
  CraftingSlotVO.prototype.getAdjustedSkipCostC2 = function () {
    return Math.ceil((1 - this.getRemainingProductionTimeRatio()) * this.recipeVO.skipCostC2);
  };
  CraftingSlotVO.prototype.reset = function () {
    this._recipeID = -1;
    this._productionTimeStamp = -1;
    this._unlockTimeStamp = -1;
  };
  Object.defineProperty(CraftingSlotVO.prototype, "queueVO", {
    get: function () {
      return s.CastleModel.craftingData.getQueueVOByID(this._queueID);
    },
    enumerable: true,
    configurable: true
  });
  CraftingSlotVO.prototype.nextSlot = function () {
    var e = this;
    return this.queueVO.getSlotsByType(this._slotType).find(function (t) {
      return t._slotIndex == e._slotIndex + 1;
    });
  };
  CraftingSlotVO.prototype.previousSlot = function () {
    var e = this;
    return this.queueVO.getSlotsByType(this._slotType).find(function (t) {
      return t._slotIndex == e._slotIndex - 1;
    });
  };
  CraftingSlotVO.prototype.buy = function () {
    s.CastleModel.craftingData.buySlot(this);
  };
  CraftingSlotVO.prototype.cancel = function () {
    s.CastleModel.craftingData.cancelCrafting(this);
  };
  CraftingSlotVO.prototype.rubySkip = function () {
    s.CastleModel.craftingData.skipCrafting(this);
  };
  CraftingSlotVO.SLOT_TYPE_PRODUCTION = 1;
  CraftingSlotVO.SLOT_TYPE_QUEUE = 2;
  return CraftingSlotVO;
}();
exports.CraftingSlotVO = r;