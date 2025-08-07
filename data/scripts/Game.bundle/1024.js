Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./18.js");
var s = require("./71.js");
var r = require("./87.js");
var l = require("./15.js");
var c = require("./54.js");
var u = require("./64.js");
var d = require("./4.js");
var p = createjs.Event;
var h = function (e) {
  function CastleBreweryData() {
    var t = this;
    t._percentForMead = 0;
    t._stopAtFoodAmount = 0;
    t._stopAtHoneyAmount = 0;
    t.waitForExternalCommand = false;
    t.server_production_freeze = false;
    t._meadPrioSet = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleBreweryData, e);
  CastleBreweryData.prototype.parse_ABPI = function (e, t = false) {
    this.ex_percentForMead = 0;
    this.ex_stopAtFoodAmount = 0;
    this.ex_stopAtHoneyAmount = 0;
    this.server_production_freeze = false;
    this.meadPrioSet = !!e && !!e.bfl && e.bfl.PPOT == 1;
    if (this.waitForExternalCommand && !t) {
      this.parse_ABPI_extern(e);
    } else {
      this.parse_ABPI_intern(e);
    }
    this.waitForExternalCommand = false;
  };
  CastleBreweryData.prototype.parse_ABPI_intern = function (e) {
    this._percentForMead = 0;
    this._stopAtFoodAmount = 0;
    this._stopAtHoneyAmount = 0;
    this.server_production_freeze = false;
    if (e !== undefined) {
      this._percentForMead = e.PA.MEAD;
      this._stopAtFoodAmount = e.MS.F;
      this._stopAtHoneyAmount = e.MS.HONEY;
      this.server_production_freeze = e.SRPF;
      l.CastleBasicController.getInstance().dispatchEvent(new p(CastleBreweryData.ON_BREWERY_INFO, false, false));
    }
  };
  CastleBreweryData.prototype.parse_ABPI_extern = function (e) {
    if (e !== undefined) {
      this.ex_percentForMead = e.PA.MEAD;
      this.ex_stopAtFoodAmount = e.MS.F;
      this.ex_stopAtHoneyAmount = e.MS.HONEY;
      this.server_production_freeze = e.SRPF;
      l.CastleBasicController.getInstance().dispatchEvent(new p(CastleBreweryData.ON_BREWERY_INFO_EXTERN, false, false));
    }
  };
  CastleBreweryData.prototype.setBreweryBuildingData = function (e) {
    if (this._breweryBuildingVO) {
      this._breweryBuildingVO.removeEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onBreweryVOChanged));
    }
    this._breweryBuildingVO = e;
    l.CastleBasicController.getInstance().dispatchEvent(new s.AreaDataEvent(s.AreaDataEvent.ON_BREWERY_BUILDING_DATA_SET));
    if (this._breweryBuildingVO) {
      this._breweryBuildingVO.addEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onBreweryVOChanged));
    }
  };
  CastleBreweryData.prototype.onBreweryVOChanged = function (e) {
    l.CastleBasicController.getInstance().dispatchEvent(new s.AreaDataEvent(s.AreaDataEvent.ON_BREWERY_BUILDING_DATA_SET));
  };
  Object.defineProperty(CastleBreweryData.prototype, "isMeadProductionActive", {
    get: function () {
      return !(d.CastleModel.areaData.activeArea.storage.getItem(C.CollectableEnum.MEAD).amount >= d.CastleModel.areaData.activeArea.storage.getItem(C.CollectableEnum.MEAD).maxAmount) && !(d.CastleModel.areaData.activeArea.storage.getItem(C.CollectableEnum.FOOD).amount <= d.CastleModel.breweryData.stopAtFoodAmount) && !(d.CastleModel.areaData.activeArea.storage.getItem(C.CollectableEnum.FOOD).amount <= 10) && !(d.CastleModel.areaData.activeArea.storage.getItem(C.CollectableEnum.HONEY).amount <= d.CastleModel.breweryData.stopAtHoneyAmount) && !(d.CastleModel.areaData.activeArea.storage.getItem(C.CollectableEnum.HONEY).amount <= 10) && this._percentForMead > 0 && !this.server_production_freeze;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "meatProductionRate", {
    get: function () {
      return this.breweryBuildingVO.meadProduction * (this._percentForMead / 100);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "isBreweryBuildingBuilt", {
    get: function () {
      return this.breweryBuildingVO.buildingState.isFunctionally;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "breweryBuildingVO", {
    get: function () {
      if (this._breweryBuildingVO) {
        return this._breweryBuildingVO;
      } else {
        return d.CastleModel.wodData.voSubList(g.CastleWodData.TYPE_BUILDING).get(a.ClientConstCastle.BREWERY_BUILDING_WOD);
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "isBreweryBuildingUnderConstruction", {
    get: function () {
      return this.breweryBuildingVO.buildingState == r.IsoBuildingStateEnum.BUILD_IN_PROGRESS || this.breweryBuildingVO.buildingState == r.IsoBuildingStateEnum.BUILD_STOPPED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "isAllowedToBuild", {
    get: function () {
      return this.breweryBuildingVO.isAvailableByLevelAndEffect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "percentForMead", {
    get: function () {
      return this._percentForMead;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "stopAtFoodAmount", {
    get: function () {
      return this._stopAtFoodAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "stopAtHoneyAmount", {
    get: function () {
      return this._stopAtHoneyAmount;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBreweryData.prototype, "meadPrioSet", {
    get: function () {
      return this._meadPrioSet;
    },
    set: function (e) {
      this._meadPrioSet = e;
    },
    enumerable: true,
    configurable: true
  });
  CastleBreweryData.prototype.reset = function () {
    this.breweryBuildingVO.removeEventListener(u.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onBreweryVOChanged));
  };
  CastleBreweryData.ON_BREWERY_INFO = "ON_BREWERY_INFO";
  CastleBreweryData.ON_BREWERY_INFO_EXTERN = "ON_BREWERY_INFO_EXTERN";
  CastleBreweryData.RATIO_FACTOR = 100;
  return CastleBreweryData;
}(c.CastleBasicData);
exports.CastleBreweryData = h;
var g = require("./56.js");
var C = require("./12.js");
o.classImplementsInterfaces(h, "IUpdatable");