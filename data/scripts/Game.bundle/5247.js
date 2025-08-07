Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./4.js");
var r = function (e) {
  function IsoUpdaterMovement(t) {
    var i = this;
    i._lastMovementSpawn = 0;
    CONSTRUCTOR_HACK;
    (i = e.call(this) || this)._isoData = t;
    return i;
  }
  n.__extends(IsoUpdaterMovement, e);
  IsoUpdaterMovement.prototype.update = function (e) {
    if (e >= this._lastMovementSpawn + l.IsoConst.MOVEMENTS_SPAWN_INTERVAL && l.IsoConst.MOVEMENTS_ACTIVATED) {
      this.spawnRandomMovement();
      this._lastMovementSpawn = e;
    }
  };
  IsoUpdaterMovement.prototype.spawnMovement = function (e, t = false) {
    if (this.canGenerallySpawnMovement) {
      d.Iso.controller.processor.executePackage(new p.IsoCommandPackageMovementSpawnDefault(this.isoData, e, t));
    }
  };
  IsoUpdaterMovement.prototype.spawnRandomMovement = function (e) {
    var t;
    if (e === undefined) {
      e = false;
    }
    if (this.canGenerallySpawnMovement) {
      if (s.CastleModel.resourcePoolData.resourceItem && !s.CastleModel.resourcePoolData.ownerMovementVO) {
        t = s.CastleModel.resourcePoolData.getRelevantMovementTypeByResourceType(s.CastleModel.resourcePoolData.resourceItem.itemType);
      } else if (u.IsoHelper.view.areAnimationsActive) {
        t = this.getRandomMovementType();
      }
      if (t) {
        this.spawnMovement(t, e);
      }
    }
  };
  IsoUpdaterMovement.prototype.spawnMaxMovements = function (e = false) {
    if (this.canGenerallySpawnMovement && u.IsoHelper.view.areAnimationsActive) {
      for (var t = a.int(this.isoData.objects.movements.list.length), i = this.movementData.getPossibleMaxMovementAmount(); t < i; ++t) {
        var n = this.getRandomMovementType();
        if (!n) {
          return;
        }
        d.Iso.controller.processor.addPackageToQueue(new p.IsoCommandPackageMovementSpawnDefault(this.isoData, n, e));
      }
      d.Iso.controller.processor.executeQueue();
    }
  };
  IsoUpdaterMovement.prototype.despawnAllMovements = function () {
    this.isoData.updater.initObjects(c.IsoObjectGroupEnum.MOVEMENTS);
  };
  IsoUpdaterMovement.prototype.getRandomMovementType = function () {
    var e = Math.random();
    for (var t = 0, i = Array.from(this.movementData.spawnProbability.keys()); t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        if (this.movementData.spawnProbability.get(n).isInInterval(e)) {
          return n;
        }
      }
    }
    return null;
  };
  Object.defineProperty(IsoUpdaterMovement.prototype, "canGenerallySpawnMovement", {
    get: function () {
      return l.IsoConst.MOVEMENTS_ACTIVATED && this.isoData == d.Iso.data && d.Iso.renderer.isReady && this.isoData.areaData.areaInfo.isOwnMapobject && this.currentMovementAmount < this.movementData.getPossibleMaxMovementAmount() && d.Iso.renderer.strategies.currentStrategy.isInNormalMode && !d.Iso.renderer.mouse.isWorldDragging;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterMovement.prototype, "isoData", {
    get: function () {
      return this._isoData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterMovement.prototype, "movementData", {
    get: function () {
      return this.isoData.objects.movements;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoUpdaterMovement.prototype, "currentMovementAmount", {
    get: function () {
      return this.movementData.list.length;
    },
    enumerable: true,
    configurable: true
  });
  return IsoUpdaterMovement;
}(require("./14.js").CastleComponent);
exports.IsoUpdaterMovement = r;
var l = require("./144.js");
var c = require("./143.js");
var u = require("./46.js");
var d = require("./34.js");
var p = require("./5248.js");
o.classImplementsInterfaces(r, "ICollectableRendererList");