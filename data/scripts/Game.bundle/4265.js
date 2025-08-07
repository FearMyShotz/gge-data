Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./22.js");
var o = function () {
  function CraftingQueueXML(e = null) {
    if (e) {
      this.fillFromParamXml(e);
    }
  }
  CraftingQueueXML.prototype.fillFromParamXml = function (e) {
    this._id = parseInt(e.craftingQueueId || "0");
    this._queueID = parseInt(e.queueTypeId || "0");
    this._permanentProductionSlots = parseInt(e.permanentProductionSlots || "0");
    this._productionSlotUnlockCostC1 = n.CastleXMLUtils.getIntArrayFromString(e.productionSlotUnlockCostC1 || "", ",");
    this._temporaryProductionSlots = this._productionSlotUnlockCostC1.length;
    this._productionSlotUnlockDuration = parseInt(e.productionSlotUnlockDuration || "0");
    this._permanentQueueSlots = parseInt(e.permanentQueueSlots || "0");
    this._queueSlotUnlockCostC1 = n.CastleXMLUtils.getIntArrayFromString(e.queueSlotUnlockCostC1 || "", ",");
    this._temporaryQueueSlots = this._queueSlotUnlockCostC1.length;
    this._queueSlotUnlockDuration = parseInt(e.queueSlotUnlockDuration || "0");
  };
  Object.defineProperty(CraftingQueueXML.prototype, "id", {
    get: function () {
      return this._id;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "queueID", {
    get: function () {
      return this._queueID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "permanentProductionSlots", {
    get: function () {
      return this._permanentProductionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "temporaryProductionSlots", {
    get: function () {
      return this._temporaryProductionSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "productionSlotUnlockCostC1", {
    get: function () {
      return this._productionSlotUnlockCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "productionSlotUnlockDuration", {
    get: function () {
      return this._productionSlotUnlockDuration;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "permanentQueueSlots", {
    get: function () {
      return this._permanentQueueSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "temporaryQueueSlots", {
    get: function () {
      return this._temporaryQueueSlots;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "queueSlotUnlockCostC1", {
    get: function () {
      return this._queueSlotUnlockCostC1;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CraftingQueueXML.prototype, "queueSlotUnlockDuration", {
    get: function () {
      return this._queueSlotUnlockDuration;
    },
    enumerable: true,
    configurable: true
  });
  return CraftingQueueXML;
}();
exports.CraftingQueueXML = o;