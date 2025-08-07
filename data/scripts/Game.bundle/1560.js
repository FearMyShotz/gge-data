Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./262.js");
var s = require("./2924.js");
var r = require("./4.js");
var l = require("./177.js");
var c = require("./12.js");
var u = require("./15.js");
var d = require("./71.js");
var p = require("./1025.js");
var h = function (e) {
  function RelicBreweryBuildingVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RelicBreweryBuildingVE, e);
  Object.defineProperty(RelicBreweryBuildingVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements.Icon_Mead;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(a.AResourceProductionBuildingVE.prototype, "buildingGroundIconClass").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  RelicBreweryBuildingVE.prototype.getRingMenuButtons = function () {
    var t = e.prototype.getRingMenuButtons.call(this);
    t.push(new s.RingMenuButtonBrewery());
    return t;
  };
  RelicBreweryBuildingVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    u.CastleBasicController.getInstance().addEventListener(p.CastleBreweryData.ON_BREWERY_INFO, this.bindFunction(this.onSomethingUpdated));
    u.CastleBasicController.getInstance().addEventListener(d.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingUpdated));
  };
  RelicBreweryBuildingVE.prototype.removeEventListener = function () {
    e.prototype.removeEventListener.call(this);
    u.CastleBasicController.getInstance().removeEventListener(p.CastleBreweryData.ON_BREWERY_INFO, this.bindFunction(this.onSomethingUpdated));
    u.CastleBasicController.getInstance().removeEventListener(d.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onSomethingUpdated));
  };
  RelicBreweryBuildingVE.prototype.onSomethingUpdated = function (e = null) {
    this.updateStatusIcon();
  };
  RelicBreweryBuildingVE.prototype.createStatusIcons = function () {
    var t = this.breweryBuildingVO.isOverseerBoosted;
    if (this.breweryBuildingVO.buildingState.isFunctionally) {
      if (r.CastleModel.breweryData.isMeadProductionActive) {
        if (t) {
          this.statusIcons.addIcon(l.IsoStatusIconEnum.PRODUCTIVE_BOOSTED);
        } else {
          this.statusIcons.addIcon(l.IsoStatusIconEnum.PRODUCTIVE);
        }
      } else if (r.CastleModel.areaData.activeArea.storage.getItem(c.CollectableEnum.MEAD).amount >= r.CastleModel.areaData.activeArea.storage.getItem(c.CollectableEnum.MEAD).maxAmount) {
        if (t) {
          this.statusIcons.addIcon(l.IsoStatusIconEnum.BREWERY_MEAD_FULL_BOOSTED);
        } else {
          this.statusIcons.addIcon(l.IsoStatusIconEnum.BREWERY_MEAD_FULL);
        }
      } else if (r.CastleModel.areaData.activeArea.storage.getItem(c.CollectableEnum.FOOD).amount <= r.CastleModel.breweryData.stopAtFoodAmount) {
        if (t) {
          this.statusIcons.addIcon(l.IsoStatusIconEnum.BREWERY_OUT_OF_FOOD_BOOSTED);
        } else {
          this.statusIcons.addIcon(l.IsoStatusIconEnum.BREWERY_OUT_OF_FOOD);
        }
      } else if (r.CastleModel.areaData.activeArea.storage.getItem(c.CollectableEnum.HONEY).amount <= r.CastleModel.breweryData.stopAtHoneyAmount) {
        if (t) {
          this.statusIcons.addIcon(l.IsoStatusIconEnum.BREWERY_OUT_OF_HONEY_BOOSTED);
        } else {
          this.statusIcons.addIcon(l.IsoStatusIconEnum.BREWERY_OUT_OF_HONEY);
        }
      } else if (t) {
        this.statusIcons.addIcon(l.IsoStatusIconEnum.UNPRODUCTIVE_BOOSTED);
      } else {
        this.statusIcons.addIcon(l.IsoStatusIconEnum.UNPRODUCTIVE);
      }
    }
    e.prototype.createStatusIcons.call(this);
  };
  Object.defineProperty(RelicBreweryBuildingVE.prototype, "breweryBuildingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return RelicBreweryBuildingVE;
}(a.AResourceProductionBuildingVE);
exports.RelicBreweryBuildingVE = h;
o.classImplementsInterfaces(h, "ICollectableRendererList", "IIngameUICapable");