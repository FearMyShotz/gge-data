Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./87.js");
var s = require("./113.js");
var r = require("./1528.js");
var l = require("./122.js");
var c = require("./779.js");
var u = createjs.Container;
var d = createjs.Point;
var p = function (e) {
  function BasicMoatVE() {
    var t = this;
    t._parts = [];
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(BasicMoatVE, e);
  BasicMoatVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this.dispComponent.cacheDisp = false;
  };
  BasicMoatVE.prototype.onRenderStrategyChanged = function (e) {
    this.updateVisibility();
  };
  BasicMoatVE.prototype.createDisp = function () {
    this._kingdomName = this.vo.getAreaKingdomName();
    this._parts.length = 0;
    var e;
    var t = new u();
    for (var i = 0, n = this.moatVO.positions.walls; i < n.length; i++) {
      e = n[i];
      this.addMoatPart(t, r.IsoMoatPartEnum.WALL, e);
    }
    for (var o = 0, a = this.moatVO.positions.outerCorners; o < a.length; o++) {
      e = a[o];
      this.addMoatPart(t, r.IsoMoatPartEnum.OUTER_CORNER, e);
    }
    for (var s = 0, l = this.moatVO.positions.innerCorners; s < l.length; s++) {
      e = l[s];
      this.addMoatPart(t, r.IsoMoatPartEnum.INNER_CORNER, e);
    }
    this.addMoatPart(t, r.IsoMoatPartEnum.GATE, this.moatVO.positions.gate);
    this.dispComponent.addDisp(t);
  };
  BasicMoatVE.prototype.addMoatPart = function (e, t, i) {
    var n = new g.IsoMoatPartVE(this, t, i);
    var o = n.createDisp();
    if (o) {
      e.addChild(o);
      this._parts.push(n);
    }
    if (t == r.IsoMoatPartEnum.GATE) {
      this._gateVE = n;
    }
  };
  BasicMoatVE.prototype.loadSubDispClip = function (e) {
    return this.loadExternalClip(e, null, this.getFlagClipColor(), null, false, null, false, 1, false, false, false);
  };
  BasicMoatVE.prototype.destroyDisp = function () {
    if (this._parts != null) {
      for (var t = 0, i = this._parts; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.destroy();
        }
      }
    }
    this._parts.length = 0;
    e.prototype.destroyDisp.call(this);
  };
  BasicMoatVE.prototype.updateVisibility = function () {
    this.elementContainer.visible = this.canBeShown();
  };
  BasicMoatVE.prototype.createStatusIcons = function () {
    e.prototype.createStatusIcons.call(this);
    this.statusIcons.removeAllIcons();
  };
  BasicMoatVE.prototype.updateRotation = function () {
    if (this._parts != null) {
      for (var e = 0, t = this._parts; e < t.length; e++) {
        var i = t[e];
        if (i !== undefined) {
          i.updateRotation();
        }
      }
    }
  };
  BasicMoatVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.updateVisibility();
  };
  BasicMoatVE.prototype.getVELayerType = function () {
    return s.IsoLayerEnum.MOAT;
  };
  BasicMoatVE.prototype.getScreenPos = function () {
    return new d();
  };
  BasicMoatVE.prototype.canBeShown = function () {
    return this.renderStrategy.currentStrategy.isInNormalMode || this.renderStrategy.currentStrategy.isActive(l.IsoRenderStrategyEnum.BUILD_MODE) && !this.renderStrategy.currentStrategy.isActive(l.IsoRenderStrategyEnum.TRANSPARENT_DEFENCE_VIEW);
  };
  Object.defineProperty(BasicMoatVE.prototype, "assetFileName", {
    get: function () {
      return this.assetNamePrefix + "_" + this.moatVO.group + "_" + this.kingdomName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ADefenceBuildingVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVE.prototype, "assetNamePrefix", {
    get: function () {
      switch (this.moatVO.buildingState) {
        case a.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case a.IsoBuildingStateEnum.BUILD_STOPPED:
        case a.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case a.IsoBuildingStateEnum.UPGRADE_STOPPED:
          return "Buildinglot";
        default:
          return this.moatVO.name;
      }
    },
    enumerable: true,
    configurable: true
  });
  BasicMoatVE.prototype.addGlow = function () {
    if (this._gateVE) {
      var e = this._gateVE.dispComponent.dispContainer;
      if (!!e && (!e.filters || e.filters.length == 0)) {
        e.useFilters(h.IsoConst.VE_GLOW_FILTER_STANDARD, true);
        e._filterOffsetX = e._filterOffsetX / e._cacheScale;
        e._filterOffsetY = e._filterOffsetY / e._cacheScale;
      }
    }
  };
  BasicMoatVE.prototype.removeGlow = function () {
    if (this._gateVE && this._gateVE.dispComponent.dispContainer) {
      this._gateVE.dispComponent.dispContainer.useFilters([], true);
    }
  };
  Object.defineProperty(BasicMoatVE.prototype, "uiDisp", {
    get: function () {
      if (this._gateVE) {
        return this._gateVE.disp;
      } else {
        return null;
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.ADefenceBuildingVE.prototype, "uiDisp").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVE.prototype, "moatVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BasicMoatVE.prototype, "kingdomName", {
    get: function () {
      return this._kingdomName;
    },
    enumerable: true,
    configurable: true
  });
  BasicMoatVE.prototype.onCameraZoomChanged = function () {
    e.prototype.onCameraZoomChanged.call(this);
    for (var t = 0, i = this._parts; t < i.length; t++) {
      i[t].dispComponent.updateCache();
    }
    C.CastleLayoutManager.getInstance().renderStaticStage();
  };
  BasicMoatVE.prototype.needsReCache = function (e) {
    if (this._parts.length > 0) {
      var t = this._parts[0].dispComponent.dispContainer;
      return t.children.length > 0 && t._cacheScale !== e;
    }
    return false;
  };
  Object.defineProperty(BasicMoatVE.prototype, "buildingGroundIconClass", {
    get: function () {
      return Library.CastleInterfaceElements_Icons.Icon_Moat;
    },
    enumerable: true,
    configurable: true
  });
  return BasicMoatVE;
}(c.ADefenceBuildingVE);
exports.BasicMoatVE = p;
var h = require("./144.js");
var g = require("./2806.js");
var C = require("./17.js");
o.classImplementsInterfaces(p, "ICollectableRendererList", "IIngameUICapable");