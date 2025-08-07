Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./55.js");
var s = function (e) {
  function IsoCommandPackageMovementSpawnDefault(t, i, n = false) {
    var o = this;
    o._spawnOnRandomPathNode = false;
    CONSTRUCTOR_HACK;
    (o = e.call(this) || this)._isoData = t;
    o._movementType = i;
    o._spawnOnRandomPathNode = n;
    return o;
  }
  n.__extends(IsoCommandPackageMovementSpawnDefault, e);
  IsoCommandPackageMovementSpawnDefault.prototype.createCommandList = function () {
    var e = this.createRandomMovement();
    if (!e) {
      return null;
    }
    var t = [];
    t.push(new u.IsoCommandObjectAddModel(e.isoData, e), new d.IsoCommandObjectAddView(e), new p.IsoCommandZSortObject(e));
    return t;
  };
  IsoCommandPackageMovementSpawnDefault.prototype.createRandomMovement = function () {
    var e;
    var t = new c.IsoGeneratorMovements(this.isoData);
    if (!(e = this.willSpawnAsOuterMovement() ? t.createOuterMovementVO(this.movementType) : t.createInnerMovementVO(this.movementType))) {
      return null;
    }
    if (this.spawnOnRandomPathNode && o.instanceOfClass(e.currentAction, "IsoMovementActionWalk")) {
      var i = e.currentAction;
      i.setPathNodeProgress(a.ClientConstUtils.getRandomInt(0, i.currentPath.length - 1));
    }
    t.addResourceItemToMovement(e);
    return e;
  };
  IsoCommandPackageMovementSpawnDefault.prototype.willSpawnAsOuterMovement = function () {
    switch (this.movementType) {
      case l.IsoObjectEnum.MOVEMENT_WOOD_CUTTER:
      case l.IsoObjectEnum.MOVEMENT_STONE_CUTTER:
      case l.IsoObjectEnum.MOVEMENT_FARMER:
        break;
      default:
        return false;
    }
    return !this.isoData.areaData.isSeasonCamp && !!this.isoData.objects.movements.workPlaces.hasFreeSlot(this.movementType) && a.ClientConstUtils.getRandomInt(0, 100) <= r.IsoConst.MOVEMENTS_OUTER_PROBABILITY;
  };
  Object.defineProperty(IsoCommandPackageMovementSpawnDefault.prototype, "spawnOnRandomPathNode", {
    get: function () {
      return this._spawnOnRandomPathNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageMovementSpawnDefault.prototype, "movementType", {
    get: function () {
      return this._movementType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoCommandPackageMovementSpawnDefault.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandPackageMovementSpawnDefault;
}(require("./485.js").AIsoCommandPackage);
exports.IsoCommandPackageMovementSpawnDefault = s;
var r = require("./144.js");
var l = require("./80.js");
var c = require("./1185.js");
var u = require("./691.js");
var d = require("./692.js");
var p = require("./486.js");