Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./55.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./308.js");
var p = require("./24.js");
var h = require("./14.js");
var g = require("./41.js");
var C = require("./292.js");
var _ = require("./290.js");
var m = require("./145.js");
var f = require("./111.js");
var O = require("./293.js");
var E = require("./336.js");
var y = createjs.MovieClip;
var b = createjs.Container;
var D = createjs.Point;
var I = createjs.Rectangle;
var T = function (e) {
  function VEContainer(t) {
    var i = e.call(this) || this;
    i.veRef = t;
    if (s.currentBrowserInfo.isMobile) {
      i.doubleClickEnabled = true;
    }
    return i;
  }
  n.__extends(VEContainer, e);
  return VEContainer;
}(b);
exports.VEContainer = T;
var v = function (e) {
  function AIsoObjectVE() {
    var t = this;
    t._layers = new x.IsoObjectLayerManager();
    t._dispComponent = new _.DispCreatorComponent();
    t._additionalClips = new V.IsoAdditionalClipManager();
    t._statusIcons = new w.IsoStatusIconManager();
    t._hasRingMenu = false;
    t._dispLayerBounds = new I();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AIsoObjectVE, e);
  AIsoObjectVE.prototype.init = function (e) {
    this._vo = e;
    if (!this._objectType || this._objectType == P.IsoObjectEnum.UNKNOWN) {
      this._objectType = this._vo ? this._vo.objectType : P.IsoObjectEnum.getTypeByViewClass(l.ClientConstUtils.getClassFromObject(this));
    }
    this.dispComponent.cacheBehaviour = this.createCacheBahaviour();
    this.initElementContainer();
    this.layers.init(this);
    this.dispComponent.init(this.layers.getLayer(O.IsoObjectLayerEnum.DISP));
    this.additionalClips.init(this);
    this.statusIcons.init(this);
  };
  AIsoObjectVE.prototype.initElementContainer = function () {
    this._elementContainer = new T(this);
    var e = r.getQualifiedClassName(this);
    this.elementContainer.name = e.slice(e.lastIndexOf(":") + 1);
    this.elementContainer.mouseChildren = false;
  };
  AIsoObjectVE.prototype.destroy = function () {
    this.dispComponent.onLoadedSignal.removeAll();
    this.removeEventListener();
    this.destroyDisp();
    this.layers.destroy();
    if (this.elementContainer) {
      this.elementContainer.removeChildren();
      if (this.elementContainer.parent) {
        this.elementContainer.parent.removeChild(this.elementContainer);
      }
      this._elementContainer.veRef = null;
      this._elementContainer = null;
    }
    if (this._vo) {
      this._vo.destroy();
    }
  };
  AIsoObjectVE.prototype.updateDispBounds = function () {
    var e = this.uiDisp;
    if (e) {
      this._dispLayerBounds = e.getBounds(null);
    }
  };
  AIsoObjectVE.prototype.addEventListener = function () {
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
    u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
  };
  AIsoObjectVE.prototype.removeEventListener = function () {
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REFRESH_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onSpecialEventUpdated));
  };
  AIsoObjectVE.prototype.onSpecialEventUpdated = function (e) {};
  AIsoObjectVE.prototype.updateDisp = function () {
    if (this.elementContainer) {
      this.destroyDisp();
      this.dispComponent.switchCreationState(true);
      this.createDisp();
      this.dispComponent.onLoadedSignal.add(this.bindFunction(this.onAllDispClipsLoaded));
      this.dispComponent.switchCreationState(false);
      this.updatePosition();
      if (this.vo && this.vo.rotationType != E.IsoObjectRotationEnum._4GfxFor4Dir && this.vo.rotationType != E.IsoObjectRotationEnum.NONE) {
        this.updateRotation();
      }
      this.additionalClips.updatePositions();
      this.statusIcons.updatePosition();
      this.addEventListener();
      if (this.elementContainer.stage == S.CastleLayoutManager.getInstance().bgStage) {
        S.CastleLayoutManager.getInstance().renderBGStage();
      }
    }
  };
  AIsoObjectVE.prototype.destroyDisp = function () {
    g.CastleMovieClipHelper.stopAllMovies(this.elementContainer);
    this.removeEventListener();
    this.additionalClips.reset();
    this.statusIcons.reset();
    this.dispComponent.reset();
    this._elementContainer.x = this._elementContainer.y = 0;
    if (this._debugCenterCross) {
      this.layers.getLayer(O.IsoObjectLayerEnum.DEBUG_CROSS).removeChild(this._debugCenterCross);
      this._debugCenterCross = null;
    }
  };
  AIsoObjectVE.prototype.createDisp = function () {};
  Object.defineProperty(AIsoObjectVE.prototype, "dispOffset", {
    get: function () {
      return new D(-L.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x / 2, 0);
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVE.prototype.loadExternalClip = function (e, t = null, i = null, n = 0, o = false, a = null, s = false, r = 1, l = false, c = false, u = false) {
    var d = e == null ? this.assetClipName : e;
    var h = t == null ? this.assetFileName : t;
    return new p.CastleGoodgameExternalClip(d, M.IsoHelper.view.getAssetFileURL(h), i, n, o && M.IsoHelper.view.areAnimationsActive, a, s, r, l, c, u, this.delayLoadingUntilFree);
  };
  AIsoObjectVE.prototype.updateAdditionalClips = function () {
    this.additionalClips.removeAllClips();
    this.createAdditionalClips();
  };
  AIsoObjectVE.prototype.createAdditionalClips = function () {};
  AIsoObjectVE.prototype.updateStatusIcon = function () {
    this.statusIcons.removeAllIcons();
    this.createStatusIcons();
  };
  AIsoObjectVE.prototype.createStatusIcons = function () {};
  AIsoObjectVE.prototype.updatePosition = function () {
    if (this.vo && this.vo.isInBuildingDistrict) {
      var e = Math.abs(this.vo.width - this.vo.height) / 2;
      var t = 10 - (this.vo.width + this.vo.height) / 2;
      this.elementContainer.x = (e - 0.5) * L.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.x * (this.vo.rotation % 2 == 0 ? 1 : -1);
      this.elementContainer.y = t * L.IsoConst.GRID_TILE_DIMENSION_TRANSLATED.y;
    } else {
      var i = this.getScreenPos();
      this.elementContainer.x = i.x;
      this.elementContainer.y = i.y;
      this.updateDispOffset();
    }
  };
  AIsoObjectVE.prototype.updateDispOffset = function () {
    if (this.disp) {
      var e = this.dispOffset;
      e ||= new D();
      if (this.vo) {
        switch (this.vo.rotationType) {
          case E.IsoObjectRotationEnum._1FrameFor2Dir:
          case E.IsoObjectRotationEnum._2FramesFor4Dir:
            if (this.vo.rotation == 1 || this.vo.rotation == 3) {
              e.x *= -1;
            }
        }
      }
      this.disp.x = e.x;
      this.disp.y = e.y;
    }
  };
  AIsoObjectVE.prototype.updateRotation = function () {
    this.changeDispRotation(this.disp, this.vo.rotation);
    this.updateDispOffset();
    this.additionalClips.updatePositions();
    this.updateDispBounds();
  };
  AIsoObjectVE.prototype.changeDispRotation = function (e, t) {
    if (e) {
      var i = this.getMirrorDirection(t);
      switch (this.vo.rotationType) {
        case E.IsoObjectRotationEnum._1FrameFor2Dir:
          this.switchDispFrame(e, 1);
          this.mirrorDisp(e, i);
          break;
        case E.IsoObjectRotationEnum._2FramesFor4Dir:
          this.switchDispFrame(e, t == 0 || t == 1 ? 2 : 1);
          this.mirrorDisp(e, i);
          break;
        case E.IsoObjectRotationEnum._4FramesFor4Dir:
          this.switchDispFrame(e, t + 1);
          break;
        case E.IsoObjectRotationEnum._4GfxFor4Dir:
          this.updateDisp();
      }
    }
  };
  AIsoObjectVE.prototype.mirrorDisp = function (e, t) {
    if (e.scaleX != t) {
      e.scaleX *= -1;
    }
  };
  AIsoObjectVE.prototype.getMirrorDirection = function (e) {
    switch (this.vo.rotationType) {
      case E.IsoObjectRotationEnum._1FrameFor2Dir:
      case E.IsoObjectRotationEnum._2FramesFor4Dir:
        if (e == 0 || e == 2) {
          return 1;
        } else {
          return -1;
        }
      default:
        return 1;
    }
  };
  AIsoObjectVE.prototype.switchDispFrame = function (e, t) {
    if (e) {
      var i = false;
      if (e instanceof y) {
        var n = e;
        if (n.currentFrame !== t && !n.isPlaying) {
          n.gotoAndStop(t);
          i = true;
        }
      } else if (e instanceof o.AbstractGoodgameClip) {
        var a = e;
        if (a.currentFrame !== t && !a.running) {
          a.gotoAndStop(t);
          i = true;
        }
      }
      if (i && this.dispComponent.cacheDisp) {
        this.dispComponent.updateCache();
      }
    }
  };
  AIsoObjectVE.prototype.update = function (e) {
    this.statusIcons.update(e);
  };
  AIsoObjectVE.prototype.updateColorChange = function () {
    var e = g.CastleMovieClipHelper.getChildrenByAnyName(this.elementContainer, this.getFlagStrings());
    var t = !!this.vo && (this.vo.rotationType == E.IsoObjectRotationEnum._1FrameFor2Dir || this.vo.rotationType == E.IsoObjectRotationEnum._2FramesFor4Dir) && this.vo.rotation == 1;
    var i = this.getCrestVO();
    if (e && e.length) {
      for (var n = 0, o = e; n < o.length; n++) {
        var a = o[n];
        if (a !== undefined) {
          var s = a;
          if (s && s.visible) {
            C.FlagHelper.colorFlag(s, i, t);
            if (this.dispComponent.cacheDisp) {
              this.dispComponent.updateCache();
            }
          }
        }
      }
    }
  };
  AIsoObjectVE.prototype.getFlagStrings = function () {
    return ["flag", "flag0"];
  };
  AIsoObjectVE.prototype.getVELayerType = function () {
    return f.IsoLayerEnum.UNKNOWN;
  };
  AIsoObjectVE.prototype.getScreenPos = function () {
    var e = this.vo ? new D(this.vo.x, this.vo.y) : new D();
    return this.isoRenderer.camera.getScreenPosByGridPos(e);
  };
  AIsoObjectVE.prototype.getCrestVO = function () {
    var e;
    if (this.vo && this.vo.isoData && this.vo.isoData.areaData && this.vo.isoData.areaData.areaInfo) {
      e = this.vo.isoData.areaData.areaInfo;
    }
    if (!this.vo || e && u.CastleModel.userData && e.isOwnMapobject) {
      return u.CastleModel.userData.playerCrest;
    } else if (e && e.ownerInfo && e.ownerInfo.crest) {
      return e.ownerInfo.crest;
    } else {
      return d.CrestVO.createDummyCrest();
    }
  };
  AIsoObjectVE.prototype.getFlagClipColor = function () {
    var e = [];
    var t = (this.vo.rotationType == E.IsoObjectRotationEnum._1FrameFor2Dir || this.vo.rotationType == E.IsoObjectRotationEnum._2FramesFor4Dir) && this.vo.rotation == 1;
    var i = this.getCrestVO();
    if (!i) {
      return e;
    }
    if (t) {
      var n = [];
      n[0] = i.colorsFour[1];
      n[1] = i.colorsFour[0];
      n[2] = i.colorsFour[3];
      n[3] = i.colorsFour[2];
      e.push(new a.ClipColor("flag", n));
    } else {
      e.push(new a.ClipColor("flag", i.colorsFour));
    }
    return e;
  };
  AIsoObjectVE.prototype.getDispClipColor = function () {
    var e = [];
    e.push(new a.ClipColor("flag", this.getCrestVO().colorsTwo));
    return e;
  };
  Object.defineProperty(AIsoObjectVE.prototype, "assetFileName", {
    get: function () {
      var e = this.vo.getVisualClassName();
      if (this.canUseEventSkin()) {
        e += "_" + M.IsoHelper.view.getIsoEventSkinSuffix();
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "delayLoadingUntilFree", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "assetClipName", {
    get: function () {
      var e = this.vo.getVisualClassName();
      if (this.canUseEventSkin()) {
        e += "_" + M.IsoHelper.view.getIsoEventSkinSuffix();
      }
      return e;
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVE.prototype.canUseEventSkin = function () {
    return M.IsoHelper.view.canUseIsoEventSkin() && M.IsoHelper.view.doesAssetFileExist(this.vo.getVisualClassName() + "_" + M.IsoHelper.view.getIsoEventSkinSuffix());
  };
  AIsoObjectVE.prototype.getLocalDispPosTopCenter = function () {
    return new D(0, this.dispLayerBounds.top);
  };
  AIsoObjectVE.prototype.getGlobalDispPosTopCenter = function () {
    return M.IsoHelper.view.calcPosToCoordinateSystem(this.getLocalDispPosTopCenter(), this.uiDisp, this.isoRenderer.layers.transformLayer);
  };
  AIsoObjectVE.prototype.getLocalDispPosCenter = function () {
    return new D(this.dispLayerBounds.left + this.dispLayerBounds.width * 0.5, this.dispLayerBounds.top + this.dispLayerBounds.height * 0.5);
  };
  Object.defineProperty(AIsoObjectVE.prototype, "hasRingMenu", {
    get: function () {
      return this._hasRingMenu;
    },
    set: function (e) {
      this._hasRingMenu = e;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "uiPos", {
    get: function () {
      return this.getLocalDispPosCenter();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "uiDisp", {
    get: function () {
      return this.layers.getLayer(O.IsoObjectLayerEnum.DISP);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "uiBounds", {
    get: function () {
      return this.dispLayerBounds;
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVE.prototype.onAllDispClipsLoaded = function () {
    this.dispComponent.onLoadedSignal.remove(this.bindFunction(this.onAllDispClipsLoaded));
    this.additionalClips.reset();
    this.updateAdditionalClips();
    this.updateStatusIcon();
    if (this.vo && this.vo.rotationType != E.IsoObjectRotationEnum._4GfxFor4Dir && this.vo.rotationType != E.IsoObjectRotationEnum.NONE) {
      this.updateRotation();
    }
    this.updateColorChange();
    this.updatePosition();
    this.updateDispBounds();
    this.additionalClips.updatePositions();
    this.statusIcons.updatePosition();
  };
  AIsoObjectVE.prototype.onCrestColorUpdated = function (e) {
    this.updateColorChange();
    if (this.additionalClips.containsClipsByType(m.IsoAdditionalClipEnum.FLAG)) {
      this.additionalClips.removeClips(m.IsoAdditionalClipEnum.FLAG);
    }
    this.additionalClips.addClips(m.IsoAdditionalClipEnum.FLAG, 24, 1, true);
    this.disp.glowCache &&= null;
  };
  AIsoObjectVE.prototype.onMyAllianceInfoUpdated = function (e) {};
  AIsoObjectVE.prototype.onRenderStrategyChanged = function (e) {};
  AIsoObjectVE.prototype.onAnimationOptionChanged = function (e) {
    this.additionalClips.onAnimationOptionChanged();
  };
  Object.defineProperty(AIsoObjectVE.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "isoRenderer", {
    get: function () {
      return R.Iso.renderer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "additionalClips", {
    get: function () {
      return this._additionalClips;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "renderStrategy", {
    get: function () {
      return this.isoRenderer.strategies;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "objectInteractions", {
    get: function () {
      return this.isoRenderer.mouse;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "statusIcons", {
    get: function () {
      return this._statusIcons;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "dispComponent", {
    get: function () {
      return this._dispComponent;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "elementContainer", {
    get: function () {
      return this._elementContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "disp", {
    get: function () {
      return this.dispComponent.dispContainer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "layers", {
    get: function () {
      return this._layers;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "dispLayerBounds", {
    get: function () {
      return this._dispLayerBounds;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoObjectVE.prototype, "objectType", {
    get: function () {
      return this._objectType;
    },
    enumerable: true,
    configurable: true
  });
  AIsoObjectVE.prototype.onCameraZoomChanged = function () {
    this.dispComponent.updateCache();
  };
  AIsoObjectVE.prototype.createCacheBahaviour = function () {
    return new A.IsoDispCreatorCacheBehaviour();
  };
  AIsoObjectVE.prototype.needsReCache = function (e) {
    var t = !this.vo || !this.vo.isInBuildingDistrict;
    return this.dispComponent.cacheDisp && this.disp.children.length > 0 && this.disp._cacheScale !== e && t;
  };
  return AIsoObjectVE;
}(h.CastleComponent);
exports.AIsoObjectVE = v;
var S = require("./17.js");
var A = require("./1188.js");
var L = require("./144.js");
var P = require("./80.js");
var M = require("./46.js");
var R = require("./34.js");
var V = require("./2056.js");
var x = require("./2058.js");
var w = require("./2059.js");
s.classImplementsInterfaces(v, "ICollectableRendererList", "IIngameUICapable");