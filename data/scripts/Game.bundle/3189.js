Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./6.js");
var s = require("./21.js");
var r = require("./1497.js");
var l = require("./4.js");
var c = require("./145.js");
var u = function (e) {
  function ResourceCartSurroundingsVE() {
    var t = this;
    t.wasFullCartCached = false;
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(ResourceCartSurroundingsVE, e);
  ResourceCartSurroundingsVE.prototype.addEventListener = function () {
    l.CastleModel.resourceCartsData.addEventListener(r.CastleResourceCartsDataEvent.DATA_CHANGED, this.bindFunction(this.onDataChanged));
    l.CastleModel.resourceCartsData.addEventListener(r.CastleResourceCartsDataEvent.ON_RESOURCE_DROPPED, this.bindFunction(this.onResourceDropped));
    l.CastleModel.timerData.addEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    e.prototype.addEventListener.call(this);
  };
  ResourceCartSurroundingsVE.prototype.removeEventListener = function () {
    l.CastleModel.resourceCartsData.removeEventListener(r.CastleResourceCartsDataEvent.DATA_CHANGED, this.bindFunction(this.onDataChanged));
    l.CastleModel.resourceCartsData.removeEventListener(r.CastleResourceCartsDataEvent.ON_RESOURCE_DROPPED, this.bindFunction(this.onResourceDropped));
    l.CastleModel.timerData.removeEventListener(s.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimer));
    e.prototype.removeEventListener.call(this);
  };
  ResourceCartSurroundingsVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this.loadExternalClip(this.vo.getVisualClassName()));
  };
  ResourceCartSurroundingsVE.prototype.updateFrame = function () {
    if (this.cartDisp && this.cartDisp.isLoaded) {
      var e = ResourceCartSurroundingsVE.FRAME_EMPTY;
      if (this.resourceCartData.isCollectable) {
        switch (this.resourceCartData.resourceType) {
          case p.CollectableEnum.WOOD:
            e = ResourceCartSurroundingsVE.FRAME_WOOD;
            break;
          case p.CollectableEnum.STONE:
            e = ResourceCartSurroundingsVE.FRAME_STONE;
            break;
          case p.CollectableEnum.FOOD:
            e = ResourceCartSurroundingsVE.FRAME_FOOD;
            break;
          default:
            e = ResourceCartSurroundingsVE.FRAME_EMPTY;
        }
      } else {
        e = ResourceCartSurroundingsVE.FRAME_EMPTY;
      }
      if (e != this.cartDisp.currentshownDisplayObject.currentFrame + 1) {
        this.additionalClips.removeAllClips();
        this.cartDisp.currentshownDisplayObject.gotoAndStop(e);
        if (this.resourceCartData.isCollectable && !this.wasFullCartCached) {
          this.disp.doCache(0, 1);
          this.wasFullCartCached = true;
          this.invalidateGlowCache();
        } else if (!this.resourceCartData.isCollectable && this.wasFullCartCached) {
          this.disp.doCache(0, 1);
          this.wasFullCartCached = false;
          this.invalidateGlowCache();
        }
        this.updateAdditionalClips();
        this.updateDispBounds();
      }
    }
  };
  ResourceCartSurroundingsVE.prototype.createAdditionalClips = function () {
    if (this.resourceCartData.isCollectable) {
      this.additionalClips.addClips(c.IsoAdditionalClipEnum.EXCLAMATION_MARK);
    }
    e.prototype.createAdditionalClips.call(this);
  };
  Object.defineProperty(ResourceCartSurroundingsVE.prototype, "cartDisp", {
    get: function () {
      if (this.dispComponent.clipList.length >= 1) {
        return this.dispComponent.clipList[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  ResourceCartSurroundingsVE.prototype.onMouseClick = function () {
    if (this.resourceCartVO.resourceCartData.isCollectable) {
      l.CastleModel.smartfoxClient.sendCommandVO(new d.C2SIsoResourceCartCollectVO(this.resourceCartVO.resourceType));
    }
  };
  ResourceCartSurroundingsVE.prototype.onAllDispClipsLoaded = function () {
    this.disp.scaleX = -1;
    this.updateFrame();
    e.prototype.onAllDispClipsLoaded.call(this);
  };
  ResourceCartSurroundingsVE.prototype.onDataChanged = function (e) {
    this.updateFrame();
  };
  ResourceCartSurroundingsVE.prototype.onTimer = function (e) {
    this.updateFrame();
  };
  ResourceCartSurroundingsVE.prototype.onResourceDropped = function (e) {
    var t = e.params[0];
    if (t == this.resourceCartVO.resourceCartData.resourceType) {
      var i = a.int(e.params[1]);
      if (i > 0) {
        var n = this.getGlobalDispPosTopCenter();
        this.vo.isoData.updater.spawnCollectableFadeEffect(h.CollectableHelper.createVO(t, i), n);
      }
    }
  };
  Object.defineProperty(ResourceCartSurroundingsVE.prototype, "resourceCartVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceCartSurroundingsVE.prototype, "resourceCartData", {
    get: function () {
      return this.resourceCartVO.resourceCartData;
    },
    enumerable: true,
    configurable: true
  });
  ResourceCartSurroundingsVE.__initialize_static_members = function () {
    ResourceCartSurroundingsVE.FRAME_EMPTY = 1;
    ResourceCartSurroundingsVE.FRAME_FOOD = 2;
    ResourceCartSurroundingsVE.FRAME_STONE = 3;
    ResourceCartSurroundingsVE.FRAME_WOOD = 4;
  };
  return ResourceCartSurroundingsVE;
}(require("./194.js").ASurroundingBuildingVE);
exports.ResourceCartSurroundingsVE = u;
var d = require("./3190.js");
var p = require("./12.js");
var h = require("./45.js");
o.classImplementsInterfaces(u, "ICollectableRendererList", "IIngameUICapable");
u.__initialize_static_members();