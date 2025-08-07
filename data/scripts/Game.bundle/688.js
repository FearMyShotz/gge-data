Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./18.js");
var r = require("./71.js");
var l = require("./87.js");
var c = require("./15.js");
var u = require("./54.js");
var d = require("./64.js");
var p = require("./4.js");
var h = createjs.Event;
var g = function (e) {
  function CastleHunterData() {
    var t = this;
    t._foodBoost = 0;
    t._woodStoneReduction = 0;
    CONSTRUCTOR_HACK;
    (t = e.call(this) || this)._foodBoost = 0;
    t._woodStoneReduction = 0;
    t._hunterBuildingVO = p.CastleModel.wodData.voSubList(C.CastleWodData.TYPE_BUILDING).get(s.ClientConstCastle.HUNTER_BUILDING_WOD);
    return t;
  }
  n.__extends(CastleHunterData, e);
  CastleHunterData.prototype.parse_HIN = function (e) {
    this._foodBoost = e.FB;
    this._woodStoneReduction = e.WSR;
    c.CastleBasicController.getInstance().dispatchEvent(new h(CastleHunterData.ON_HUNTER_INFO, false, false));
  };
  CastleHunterData.prototype.setHunterBuildingData = function (e) {
    if (this._hunterBuildingVO) {
      this._hunterBuildingVO.removeEventListener(d.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onHunterVOChanged));
    }
    if (e) {
      this._hunterBuildingVO = e;
    } else if (p.CastleModel.kingdomData.activeKingdomID == a.WorldClassic.KINGDOM_ID) {
      this._hunterBuildingVO = p.CastleModel.wodData.voSubList(C.CastleWodData.TYPE_BUILDING).get(s.ClientConstCastle.HUNTER_BUILDING_WOD);
    } else {
      this._hunterBuildingVO = p.CastleModel.wodData.voSubList(C.CastleWodData.TYPE_BUILDING).get(s.ClientConstCastle.KINGDOMHUNTER_BUILDING_WOD);
    }
    c.CastleBasicController.getInstance().dispatchEvent(new r.AreaDataEvent(r.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET));
    this._hunterBuildingVO.addEventListener(d.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onHunterVOChanged));
  };
  CastleHunterData.prototype.onHunterVOChanged = function (e) {
    c.CastleBasicController.getInstance().dispatchEvent(new r.AreaDataEvent(r.AreaDataEvent.ON_HUNTER_BUILDING_DATA_SET));
  };
  Object.defineProperty(CastleHunterData.prototype, "isBoosted", {
    get: function () {
      return this._foodBoost > 0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "isHunterBuildingBuilt", {
    get: function () {
      return this.hunterBuildingVO.buildingState.isFunctionally;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "hunterBuildingVO", {
    get: function () {
      return this._hunterBuildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "isHunterBuildingUnderConstruction", {
    get: function () {
      return this.hunterBuildingVO.buildingState == l.IsoBuildingStateEnum.BUILD_IN_PROGRESS || this.hunterBuildingVO.buildingState == l.IsoBuildingStateEnum.BUILD_STOPPED;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "isAllowedToBuild", {
    get: function () {
      return this.hunterBuildingVO.isAvailableByLevelAndEffect;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "foodBoost", {
    get: function () {
      return this._foodBoost;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleHunterData.prototype, "woodStoneReduction", {
    get: function () {
      return this._woodStoneReduction;
    },
    enumerable: true,
    configurable: true
  });
  CastleHunterData.prototype.reset = function () {
    this._hunterBuildingVO.removeEventListener(d.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onHunterVOChanged));
  };
  CastleHunterData.ON_HUNTER_INFO = "EVENT_HUNTER_INFO";
  CastleHunterData.RATIO_FACTOR = 100;
  return CastleHunterData;
}(u.CastleBasicData);
exports.CastleHunterData = g;
var C = require("./56.js");
o.classImplementsInterfaces(g, "IUpdatable");