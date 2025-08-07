Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./166.js");
var u = require("./71.js");
var d = require("./194.js");
var p = createjs.Container;
var h = createjs.Point;
var g = function (e) {
  function SlumSurroundingsVE() {
    var t = this;
    t._slumParts = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(SlumSurroundingsVE, e);
  SlumSurroundingsVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this.dispComponent.cacheDisp = false;
  };
  SlumSurroundingsVE.prototype.addGlow = function () {
    if (this.slumParts != null) {
      for (var e = 0, t = this.slumParts; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.addGlow();
        }
      }
    }
  };
  SlumSurroundingsVE.prototype.getLocalDispPosTopCenter = function () {
    return new h(-1500, this.dispLayerBounds.top);
  };
  SlumSurroundingsVE.prototype.removeGlow = function () {
    if (this.slumParts != null) {
      for (var e = 0, t = this.slumParts; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.removeGlow();
        }
      }
    }
  };
  SlumSurroundingsVE.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    C.CastleComponent.controller.addEventListener(u.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onSlumLevelChanged));
  };
  SlumSurroundingsVE.prototype.removeEventListener = function () {
    C.CastleComponent.controller.removeEventListener(u.AreaDataEvent.ON_SLUM_LEVEL_CHANGED, this.bindFunction(this.onSlumLevelChanged));
    e.prototype.removeEventListener.call(this);
  };
  SlumSurroundingsVE.prototype.createDisp = function () {
    var e = new p();
    for (var t = 0, i = this.slumVO.slumParts; t < i.length; t++) {
      var n = i[t];
      if (n !== undefined) {
        var o;
        if (a.instanceOfClass(n, "SlumBuildingPartBuildingVO")) {
          o = new y.SlumBuildingPartBuildingVE();
        } else {
          if (!a.instanceOfClass(n, "SlumBuildingPartCharacterVO")) {
            continue;
          }
          o = new b.SlumBuildingPartCharacterVE();
        }
        o.init(n);
        o.parentVE = this;
        o.updateDisp();
        e.addChild(o.elementContainer);
        this.slumParts.push(o);
      }
    }
    E.IsoHelper.zSort.sortObjects(this.slumParts, e);
    this.dispComponent.addDisp(e);
  };
  SlumSurroundingsVE.prototype.destroyDisp = function () {
    if (this.slumParts != null) {
      for (var t = 0, i = this.slumParts; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.destroy();
        }
      }
    }
    this._slumParts.length = 0;
    e.prototype.destroyDisp.call(this);
  };
  SlumSurroundingsVE.prototype.onMouseClick = function () {
    if (this.slumVO.slumLevel == 0) {
      C.CastleComponent.dialogHandler.registerDefaultDialogs(_.CastleSlumDonateCharacterDialog);
    } else {
      switch (this.slumVO.kingdomId) {
        case s.WorldDessert.KINGDOM_ID:
          C.CastleComponent.dialogHandler.registerDefaultDialogs(m.CastleDessertSlumPackageDialog, new c.CastleGenericMerchantDialogProperties(null));
          break;
        case l.WorldVolcano.KINGDOM_ID:
          C.CastleComponent.dialogHandler.registerDefaultDialogs(O.CastleVolcanoSlumPackageDialog, new c.CastleGenericMerchantDialogProperties(null));
          break;
        case r.WorldIce.KINGDOM_ID:
          C.CastleComponent.dialogHandler.registerDefaultDialogs(f.CastleIcecreamSlumPackageDialog, new c.CastleGenericMerchantDialogProperties(null));
      }
    }
  };
  SlumSurroundingsVE.prototype.onSlumLevelChanged = function (e) {
    if (this.slumVO.kingdomId != s.WorldIsland.KINGDOM_ID) {
      this.updateDisp();
    }
  };
  Object.defineProperty(SlumSurroundingsVE.prototype, "slumParts", {
    get: function () {
      return this._slumParts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SlumSurroundingsVE.prototype, "slumVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  SlumSurroundingsVE.prototype.preCacheGlow = function () {
    if (this.slumParts != null) {
      for (var e = 0, t = this.slumParts; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.preCacheGlow();
        }
      }
    }
  };
  SlumSurroundingsVE.prototype.onCameraZoomChanged = function () {
    e.prototype.onCameraZoomChanged.call(this);
    if (this.slumParts != null) {
      for (var t = 0, i = this.slumParts; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onCameraZoomChanged();
        }
      }
    }
  };
  SlumSurroundingsVE.prototype.needsReCache = function (e) {
    if (this._slumParts.length > 0) {
      var t = this._slumParts[0].dispComponent.dispContainer;
      return t.children.length > 0 && t._cacheScale !== e;
    }
    return false;
  };
  return SlumSurroundingsVE;
}(d.ASurroundingBuildingVE);
exports.SlumSurroundingsVE = g;
var C = require("./14.js");
var _ = require("./1613.js");
var m = require("./3195.js");
var f = require("./3201.js");
var O = require("./3204.js");
var E = require("./46.js");
var y = require("./3207.js");
var b = require("./3208.js");
o.classImplementsInterfaces(g, "ICollectableRendererList", "IIngameUICapable");