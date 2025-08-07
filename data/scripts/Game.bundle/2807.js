Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = createjs.Container;
var o = function () {
  function IsoMoatPartVE(e, t, i) {
    this._parentVE = e;
    this._partType = t;
    this._rawPosition = i;
  }
  IsoMoatPartVE.prototype.createDisp = function () {
    this._disp = null;
    if (this.canBeShown) {
      this._disp = new n();
      this._dispComponent = new r.DispCreatorComponent();
      this._dispComponent.cacheBehaviour = new a.IsoDispCreatorCacheBehaviour();
      this._dispComponent.init(this._disp);
      this._dispComponent.switchCreationState(true);
      this._dispComponent.addClip(this.parentVE.loadSubDispClip(this.assetClipName));
      if (this.hasDetailClip) {
        this._dispComponent.addClip(this.parentVE.loadSubDispClip(this.detailClipName));
      }
      this._dispComponent.onLoadedSignal.addOnce(this.bindFunction(this.onAllDispClipsLoaded));
      this._dispComponent.switchCreationState(false);
      var e = this.screenPos;
      this._disp.x = e.x;
      this._disp.y = e.y;
      if (this.partType == d.IsoMoatPartEnum.WALL && (this.rawPosition.rot == 1 || this.rawPosition.rot == 2)) {
        this.disp.x += s.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x;
      }
      return this._disp;
    }
    return null;
  };
  IsoMoatPartVE.prototype.destroy = function () {
    if (this._disp) {
      this._dispComponent.destroy();
      this._disp.removeChildren();
      this._disp = null;
    }
  };
  IsoMoatPartVE.prototype.updateRotation = function () {
    if (this.partType == d.IsoMoatPartEnum.WALL && this.disp) {
      this.disp.scaleX = this.rawPosition.rot == 1 || this.rawPosition.rot == 2 ? -1 : 1;
    }
  };
  IsoMoatPartVE.prototype.onAllDispClipsLoaded = function () {};
  Object.defineProperty(IsoMoatPartVE.prototype, "assetClipName", {
    get: function () {
      var e = this.parentVE.assetNamePrefix + "_" + this.moatVO.group;
      var t = this.moatVO.type;
      switch (this.moatVO.buildingState) {
        case u.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case u.IsoBuildingStateEnum.BUILD_STOPPED:
        case u.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case u.IsoBuildingStateEnum.UPGRADE_STOPPED:
          t = "Level1";
      }
      if (this.partType == d.IsoMoatPartEnum.GATE) {
        return e + "_Bridge_" + t + "_" + this.kingdomName;
      } else if (this.partType == d.IsoMoatPartEnum.INNER_CORNER || this.partType == d.IsoMoatPartEnum.OUTER_CORNER) {
        return e + "_Corner" + this.getCornerNumber() + "_" + t + "_" + this.kingdomName;
      } else {
        return e + "_Part" + this.getWallVariationNumber() + "_Dir" + (this.rawPosition.rot == 3 || this.rawPosition.rot == 2 ? 2 : 1) + "_" + t + "_" + this.kingdomName;
      }
    },
    enumerable: true,
    configurable: true
  });
  IsoMoatPartVE.prototype.getCornerNumber = function () {
    if (this.partType == d.IsoMoatPartEnum.INNER_CORNER) {
      switch (this.rawPosition.rot) {
        case 0:
          return 1;
        case 1:
          return 4;
        case 2:
          return 5;
        case 3:
          return 6;
      }
    } else {
      switch (this.rawPosition.rot) {
        case 0:
          return 0;
        case 1:
          return 3;
        case 2:
          return 2;
        case 3:
          return 7;
      }
    }
    return 0;
  };
  Object.defineProperty(IsoMoatPartVE.prototype, "canBeShown", {
    get: function () {
      if (this.parentVE.isoRenderer.isoData.areaData.isSeasonCamp) {
        return true;
      }
      switch (this.partType) {
        case d.IsoMoatPartEnum.OUTER_CORNER:
        case d.IsoMoatPartEnum.INNER_CORNER:
          return this.rawPosition.rot != 3;
        case d.IsoMoatPartEnum.GATE:
          return true;
        case d.IsoMoatPartEnum.WALL:
          return this.rawPosition.rot == 0 || this.rawPosition.rot == 1;
      }
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "screenPos", {
    get: function () {
      return this.parentVE.isoRenderer.camera.getScreenPosByGridPos(this.rawPosition.pos);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "detailClipName", {
    get: function () {
      switch (this.moatVO.buildingState) {
        case u.IsoBuildingStateEnum.BUILD_IN_PROGRESS:
        case u.IsoBuildingStateEnum.BUILD_STOPPED:
        case u.IsoBuildingStateEnum.UPGRADE_IN_PROGRESS:
        case u.IsoBuildingStateEnum.UPGRADE_STOPPED:
          return "Buildinglot_" + this.moatVO.group + "_Part_Detail" + this.getDetailVariationNumber() + "_Dir1_" + this.kingdomName;
        default:
          return this.moatVO.name + "_" + this.moatVO.group + "_" + this.moatVO.type + "_Detail" + this.getDetailVariationNumber() + "_Dir1_" + this.kingdomName;
      }
    },
    enumerable: true,
    configurable: true
  });
  IsoMoatPartVE.prototype.getWallVariationNumber = function () {
    return c.int(new l.SimpleRandom(this.moatVO.isoData.areaData.areaInfo.objectId + this.rawPosition.pos.x + this.rawPosition.pos.y).nextInt(2));
  };
  IsoMoatPartVE.prototype.getDetailVariationNumber = function () {
    return c.int(new l.SimpleRandom(this.moatVO.isoData.areaData.areaInfo.objectId + this.rawPosition.pos.x + this.rawPosition.pos.y).nextInt(10));
  };
  Object.defineProperty(IsoMoatPartVE.prototype, "hasDetailClip", {
    get: function () {
      if (this.partType != d.IsoMoatPartEnum.WALL) {
        return false;
      }
      var e = this.getDetailVariationNumber();
      return e >= 0 && e <= 2;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "kingdomName", {
    get: function () {
      return this._parentVE.kingdomName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "moatVO", {
    get: function () {
      return this.parentVE.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "parentVE", {
    get: function () {
      return this._parentVE;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "dispComponent", {
    get: function () {
      return this._dispComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "partType", {
    get: function () {
      return this._partType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoMoatPartVE.prototype, "rawPosition", {
    get: function () {
      return this._rawPosition;
    },
    enumerable: true,
    configurable: true
  });
  return IsoMoatPartVE;
}();
exports.IsoMoatPartVE = o;
var a = require("./1188.js");
var s = require("./144.js");
var r = require("./290.js");
var l = require("./2.js");
var c = require("./6.js");
var u = require("./87.js");
var d = require("./1528.js");