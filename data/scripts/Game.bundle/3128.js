Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./129.js");
var s = require("./4.js");
var r = require("./62.js");
var l = function (e) {
  function StrongholdBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StrongholdBuildingVE, e);
  StrongholdBuildingVE.prototype.addEventListener = function () {
    c.CastleComponent.controller.addEventListener(a.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    e.prototype.addEventListener.call(this);
  };
  StrongholdBuildingVE.prototype.removeEventListener = function () {
    c.CastleComponent.controller.removeEventListener(a.CastleMilitaryDataEvent.INVENTORY_UPDATED, this.bindFunction(this.onInventoryUpdated));
    e.prototype.removeEventListener.call(this);
  };
  StrongholdBuildingVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    if (s.CastleModel.militaryData.strongholdUnitCount > 0 && !this.statusIcons.isUpgradeIconActive) {
      this.statusIcons.addIcon(d.IsoStatusIconEnum.STRONGHOLD);
    }
  };
  Object.defineProperty(StrongholdBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Stronghold_Big;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.ABasicBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StrongholdBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new u.RingMenuButtonStronghold());
    return t;
  };
  StrongholdBuildingVE.prototype.onInventoryUpdated = function (e) {
    this.updateStatusIcon();
  };
  return StrongholdBuildingVE;
}(r.ABasicBuildingVE);
exports.StrongholdBuildingVE = l;
var c = require("./14.js");
var u = require("./3129.js");
var d = require("./177.js");
o.classImplementsInterfaces(l, "ICollectableRendererList", "IIngameUICapable");