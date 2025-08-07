Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./542.js");
var s = require("./4.js");
var r = require("./3001.js");
var l = require("./177.js");
var c = function (e) {
  function ACraftingBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(ACraftingBuildingVE, e);
  ACraftingBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (this.buildingVO.buildingState.isFunctionally && !this.statusIcons.isUpgradeIconActive && this.crafingQueueVO) {
      this.statusIcons.addIcon(this.crafingQueueVO.isProducing() ? l.IsoStatusIconEnum.PRODUCTIVE : l.IsoStatusIconEnum.UNPRODUCTIVE);
    }
  };
  Object.defineProperty(ACraftingBuildingVE.prototype, "crafingQueueVO", {
    get: function () {
      return s.CastleModel.craftingData.getQueueVOByID(this.craftingBuildingVO.craftingQueueId);
    },
    enumerable: true,
    configurable: true
  });
  ACraftingBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    s.CastleModel.craftingData.addEventListener(a.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
  };
  ACraftingBuildingVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    s.CastleModel.craftingData.removeEventListener(a.CraftingEvent.CRAFTING_QUEUE_UPDATED, this.bindFunction(this.onCraftingQueueUpdated));
  };
  ACraftingBuildingVE.prototype.onCraftingQueueUpdated = function (e) {
    this.updateStatusIcon();
  };
  ACraftingBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new r.RingMenuButtonCrafting());
    return t;
  };
  Object.defineProperty(ACraftingBuildingVE.prototype, "craftingBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACraftingBuildingVE;
}(require("./62.js").ABasicBuildingVE);
exports.ACraftingBuildingVE = c;
o.classImplementsInterfaces(c, "ICollectableRendererList", "IIngameUICapable");