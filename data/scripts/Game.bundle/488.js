Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./1.js");
var s = require("./6.js");
var r = require("./4.js");
var l = require("./113.js");
var c = require("./690.js");
var u = require("./293.js");
var d = require("./489.js");
var p = createjs.Point;
var h = function (e) {
  function AIsoMovementVE() {
    var t = this;
    t._currentActionType = c.IsoMovementActionEnum.STAND;
    t._currentRot = -1;
    t._currentGridPos = new p();
    t._clickAmount = 0;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(AIsoMovementVE, e);
  AIsoMovementVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this.dispComponent.cacheDisp = false;
  };
  AIsoMovementVE.prototype.updateFrameAnimation = function () {
    if (this._dispClip) {
      this.adjustDispFps();
      var e = this.getFrameRangeByState(this.movingVO.currentActionType);
      if (e[0] != e[1]) {
        this._dispClip.gotoAndPlay(e[0], e[1]);
      } else {
        this._dispClip.gotoAndStop(e[0]);
      }
    }
  };
  AIsoMovementVE.prototype.updateAnimationPlayback = function (e) {
    if (this._dispClip) {
      if (e) {
        this._dispClip.play();
      } else {
        this._dispClip.stop();
      }
    }
  };
  AIsoMovementVE.prototype.adjustDispFps = function () {
    var e = 1;
    switch (this.movingVO.currentAction.actionType) {
      case c.IsoMovementActionEnum.WALK:
        e = Math.floor(C.IsoConst.MOVEMENTS_FPS * this.movingVO.currentAction.currentWalkSpeed);
        break;
      case c.IsoMovementActionEnum.WORK:
        e = 10;
    }
    this._dispClip.targetFps = e;
  };
  AIsoMovementVE.prototype.update = function (t) {
    if (O.Iso.renderer.mouse.isWorldDragging) {
      this.updateAnimationPlayback(false);
    } else {
      e.prototype.update.call(this, t);
      this.updateAnimationPlayback(true);
      if (this._dispClip) {
        this._dispClip.alpha = this.movingVO.currentAction.currentTransparency;
      }
      if (this._currentActionType != this.movingVO.currentActionType || this._currentRot != this.movingVO.rotation) {
        this.updateRotation();
        this._currentActionType = this.movingVO.currentActionType;
      }
      this.updatePosition();
      if (this._currentGridPos.x != this.vo.x || this._currentGridPos.y != this.vo.y) {
        this._currentGridPos.x = this.vo.x;
        this._currentGridPos.y = this.vo.y;
        this.adjustDispFps();
        O.Iso.controller.processor.executeCommand(new m.IsoCommandZSortObject(this));
      }
    }
  };
  AIsoMovementVE.prototype.updateDisp = function () {
    e.prototype.updateDisp.call(this);
    this.updateResourceIcon();
  };
  AIsoMovementVE.prototype.updateResourceIcon = function () {
    var e = this.layers.getLayer(u.IsoObjectLayerEnum.RESOURCES);
    e.removeChildren();
    if (this.movingVO.hasResourceItem) {
      e.addChild(this._resourceDisp = new Library.CastleInterfaceElements.MovingInfoIcon_Ressources());
      this._resourceDisp.mc_Icon.gotoAndStop(this.getResourceIconFrame());
      this._resourceDisp.x = AIsoMovementVE.RESOURCE_ICON_POS.x;
      this._resourceDisp.y = AIsoMovementVE.RESOURCE_ICON_POS.y;
    }
  };
  AIsoMovementVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this._dispClip = this.loadExternalClip(this.assetClipName, this.assetFileName, null, 12));
  };
  AIsoMovementVE.prototype.shakeItBaby = function () {
    var e = this.getLocalDispPosCenter();
    var t = f.IsoHelper.view.calcPosToCoordinateSystem(new p(e.x, e.y).add(new p(0, 30)), this.uiDisp, this.isoRenderer.layers.transformLayer);
    var i = new E.IsoExplodeEffectVE(t);
    i.init(null);
    this.isoRenderer.camera.shakeCamera();
    O.Iso.controller.processor.executeCommand(new _.IsoCommandSpawnEffect(i));
    this.isoRenderer.isoData.updater.removeObjectByVO(this.vo);
  };
  AIsoMovementVE.prototype.updateRotation = function () {
    if (this.disp) {
      if (this._currentActionType != this.movingVO.currentActionType || this._currentRot != this.movingVO.rotation) {
        this.updateFrameAnimation();
        this.mirrorDisp(this.disp, this.getMirrorDirection(this.movingVO.rotation));
        this.updateDispOffset();
        this._currentActionType = this.movingVO.currentActionType;
        this._currentRot = s.int(this.movingVO.rotation);
      }
    }
  };
  AIsoMovementVE.prototype.getScreenPos = function () {
    return this.isoRenderer.camera.getScreenPosByGridPos(this.movingVO.precisePos);
  };
  Object.defineProperty(AIsoMovementVE.prototype, "assetClipName", {
    get: function () {
      var e = this.vo.name;
      e += "_" + (this.movingVO.isMale ? "Male" : "Female");
      return e += "_" + this.vo.getAreaKingdomName();
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInteractiveIsoObjectVE.prototype, "assetClipName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "assetFileName", {
    get: function () {
      return this.assetClipName;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(d.AInteractiveIsoObjectVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementVE.prototype.getResourceIconFrame = function () {
    var e = r.CastleModel.resourcePoolData.resourceItem;
    if (!e) {
      return 0;
    }
    if (r.CastleModel.resourcePoolData.hasExtraGoods) {
      return 11;
    }
    switch (e.itemType) {
      case g.CollectableEnum.STONE:
        return 1;
      case g.CollectableEnum.WOOD:
        return 2;
      case g.CollectableEnum.C1:
        return 3;
      case g.CollectableEnum.C2:
        return 4;
      case g.CollectableEnum.FOOD:
        return 5;
      case g.CollectableEnum.COAL:
        return 7;
      case g.CollectableEnum.OIL:
        return 8;
      case g.CollectableEnum.GLASS:
        return 9;
      default:
        return 10;
    }
  };
  AIsoMovementVE.prototype.getVELayerType = function () {
    return l.IsoLayerEnum.ISO_OBJECTS;
  };
  AIsoMovementVE.prototype.getFrameRangeByState = function (e) {
    var t = this.vo.rotation == 0 || this.vo.rotation == 1;
    switch (e) {
      case c.IsoMovementActionEnum.STAND:
        if (t) {
          return this.standFrontFrameRange;
        } else {
          return this.standBackFrameRange;
        }
      case c.IsoMovementActionEnum.WALK:
        if (t) {
          return this.walkFrontFrameRange;
        } else {
          return this.walkBackFrameRange;
        }
      case c.IsoMovementActionEnum.WORK:
        return this.workFrameRange;
    }
    return null;
  };
  Object.defineProperty(AIsoMovementVE.prototype, "standFrontFrameRange", {
    get: function () {
      return [1, 1];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "standBackFrameRange", {
    get: function () {
      return [10, 10];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "walkFrontFrameRange", {
    get: function () {
      return [2, 9];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "walkBackFrameRange", {
    get: function () {
      return [11, 18];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AIsoMovementVE.prototype, "workFrameRange", {
    get: function () {
      return [19, 36];
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementVE.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (!this.interactiveVO.isClickAvailable) {
      if (a.instanceOfClass(this.movingVO.currentAction, "IsoMovementActionWalk")) {
        this.movingVO.currentAction.giveSpeedBoost();
      }
      this.adjustDispFps();
    }
  };
  AIsoMovementVE.prototype.onAllDispClipsLoaded = function () {
    e.prototype.onAllDispClipsLoaded.call(this);
    this.updateFrameAnimation();
  };
  AIsoMovementVE.prototype.onMouseClick = function () {
    if (this.movingVO.hasResourceItem) {
      this.onResourceItemCollected();
    }
    this._clickAmount++;
    if (this._clickAmount == 8) {
      this.shakeItBaby();
    }
  };
  AIsoMovementVE.prototype.onResourceItemCollected = function () {
    O.Iso.controller.server.collectResourcePool();
    var e = AIsoMovementVE.RESOURCE_ICON_POS;
    var t = f.IsoHelper.view.calcPosToCoordinateSystem(new p(e.x, e.y).add(new p(40, 0)), this.uiDisp, this.isoRenderer.layers.transformLayer);
    this.isoRenderer.isoData.updater.spawnCollectableFadeEffect(r.CastleModel.resourcePoolData.resourceItem, t);
    r.CastleModel.resourcePoolData.registerNewMovementAsOwner(null);
    this.updateResourceIcon();
  };
  Object.defineProperty(AIsoMovementVE.prototype, "movingVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  AIsoMovementVE.prototype.createCacheBahaviour = function () {
    return null;
  };
  AIsoMovementVE.__initialize_static_members = function () {
    AIsoMovementVE.RESOURCE_ICON_POS = new p(0, -120);
  };
  return AIsoMovementVE;
}(d.AInteractiveIsoObjectVE);
exports.AIsoMovementVE = h;
var g = require("./12.js");
var C = require("./144.js");
var _ = require("./1190.js");
var m = require("./486.js");
var f = require("./46.js");
var O = require("./33.js");
var E = require("./1191.js");
o.classImplementsInterfaces(h, "ICollectableRendererList", "IIngameUICapable");
h.__initialize_static_members();