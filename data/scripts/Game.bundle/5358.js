Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./5.js");
var r = require("./6.js");
var l = function (e) {
  function CastleConquerInfoVO() {
    var t = this;
    t._availableBarons = 0;
    t._maxBarons = 0;
    t.isCapital = false;
    t.isMetropol = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(CastleConquerInfoVO, e);
  CastleConquerInfoVO.prototype.fillFromParamObject = function (t) {
    e.prototype.fillFromParamObject.call(this, t);
    if (t.gaa.AI) {
      this._targetArea = p.WorldmapObjectFactory.parseWorldMapArea(t.gaa.AI);
    } else {
      this._targetArea = this.isCapital ? new c.CapitalMapobjectVO() : this.isMetropol ? new u.MetropolMapobjectVO() : new d.OutpostMapobjectVO();
      this._targetArea.parseAreaInfo(t.gaa.AI);
    }
    this._targetArea.keepLevel = Math.max(1, this._targetArea.keepLevel);
    this._targetArea.gateLevel = Math.max(1, this._targetArea.gateLevel);
    this._targetArea.wallLevel = Math.max(1, this._targetArea.wallLevel);
    this._targetArea.towerLevel = Math.max(1, this._targetArea.towerLevel);
    this._targetOwner = this._targetArea.controllerWorldMapOwnerInfoVO;
    if (!this.isCapital && !this.isMetropol) {
      this.parseBarons(t);
    }
    this._army.init(this.targetOwnerLevel, true, this._targetArea.areaType == s.WorldConst.AREA_TYPE_FACTION_TOWER || this._targetArea.areaType == s.WorldConst.AREA_TYPE_FACTION_CAPITAL, this._targetArea);
  };
  CastleConquerInfoVO.prototype.addAdditionalWave = function () {
    this._army.addAdditionalWave(this.targetOwnerLevel, true, this._targetArea);
  };
  CastleConquerInfoVO.prototype.deductLastWave = function () {
    this.unitInventory.addAll(this._army.getUnitVectorFromCompleteWave(this.army.getWaveCount() - 1));
    this._army.deductLastWave();
  };
  CastleConquerInfoVO.prototype.parseBarons = function (e) {
    this._availableBarons = r.int(e.AB);
    this._maxBarons = r.int(e.MB);
  };
  CastleConquerInfoVO.prototype.getLowestTravelSpeed = function (t = false, i = null) {
    var n = 0;
    n = this.isCapital ? a.TravelConst.CAPITAL_CONQUER_SPEED : this.isMetropol ? a.TravelConst.METROPOL_CONQUER_SPEED : a.TravelConst.BARON_SPEED;
    return r.int(Math.min(n, e.prototype.getLowestTravelSpeed.call(this, t, i)));
  };
  return CastleConquerInfoVO;
}(require("./828.js").CastleAttackInfoVO);
exports.CastleConquerInfoVO = l;
var c = require("./499.js");
var u = require("./577.js");
var d = require("./500.js");
var p = require("./147.js");
o.classImplementsInterfaces(l, "IFightScreenVO");