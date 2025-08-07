Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./2.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./53.js");
var c = require("./113.js");
var u = require("./313.js");
var d = createjs.Point;
var p = createjs.Rectangle;
var h = function (e) {
  function StaticBackgroundVE() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(StaticBackgroundVE, e);
  StaticBackgroundVE.prototype.init = function (t) {
    e.prototype.init.call(this, t);
    this.dispComponent.cacheDisp = false;
  };
  StaticBackgroundVE.prototype.initElementContainer = function () {
    e.prototype.initElementContainer.call(this);
    this.elementContainer.mouseEnabled = true;
  };
  StaticBackgroundVE.prototype.createDisp = function () {
    var e = this.getTilePosList();
    if (e != null) {
      for (var t = 0, i = e; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          var o = this.createBackgroundTileClip(n.x * n.y);
          o.x = n.x;
          o.y = n.y;
          o.scaleX = o.scaleY = StaticBackgroundVE.SCALE + StaticBackgroundVE.ADDITIONAL_SCALE;
          this.dispComponent.addClip(o);
        }
      }
    }
    if (this.dispComponent.isLoaded) {
      this.onLoadedAssetsUpdateStage();
    } else {
      this.dispComponent.onLoadedSignal.addOnce(this.bindFunction(this.onLoadedAssetsUpdateStage));
    }
  };
  StaticBackgroundVE.prototype.onLoadedAssetsUpdateStage = function () {
    C.CastleLayoutManager.getInstance().gamestage.update();
    C.CastleLayoutManager.getInstance().renderBGStage();
  };
  StaticBackgroundVE.prototype.createBackgroundTileClip = function (e) {
    var t = this.vo.type;
    if (this.canUseEventSkin_0()) {
      t += "_" + g.IsoHelper.view.getIsoEventSkinSuffix();
    }
    t += "_OuterBackground_T" + new a.SimpleRandom(e).nextInt(3);
    return this.loadExternalClip(t, null, null, 0, false, null, false, 1, false, false, false);
  };
  Object.defineProperty(StaticBackgroundVE.prototype, "assetFileName", {
    get: function () {
      var e = "Backgrounds" + this.vo.type;
      if (this.canUseEventSkin_0()) {
        e += "_" + g.IsoHelper.view.getIsoEventSkinSuffix();
      }
      return e;
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(u.AIsoObjectVE.prototype, "assetFileName").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  StaticBackgroundVE.prototype.getVELayerType = function () {
    return c.IsoLayerEnum.BACKGROUND;
  };
  StaticBackgroundVE.prototype.getScreenPos = function () {
    return new d(0, 0);
  };
  StaticBackgroundVE.prototype.canUseEventSkin_0 = function () {
    return g.IsoHelper.view.canUseIsoEventSkin() && g.IsoHelper.view.doesAssetFileExist("Backgrounds" + this.vo.type + "_" + g.IsoHelper.view.getIsoEventSkinSuffix()) || l.ABGHelper.isOnABGServer;
  };
  StaticBackgroundVE.prototype.getTilePosList = function () {
    var e = this.isoRenderer.camera.scrollBounds;
    for (var t = new p(-5000, -5000, 10000, 10000), i = [], n = r.int(t.top); n < t.bottom; n += r.int(StaticBackgroundVE.GFX_SIZE.y)) {
      for (var o = r.int(t.left); o < t.right; o += r.int(StaticBackgroundVE.GFX_SIZE.x)) {
        if (e.contains(o, n) || e.contains(o + StaticBackgroundVE.GFX_SIZE.x, n) || e.contains(o, n + StaticBackgroundVE.GFX_SIZE.y) || e.contains(o + StaticBackgroundVE.GFX_SIZE.x, n + StaticBackgroundVE.GFX_SIZE.y)) {
          i.push(new d(o, n));
        }
      }
    }
    return i;
  };
  StaticBackgroundVE.prototype.onSpecialEventUpdated = function (e) {
    if (e.specialEventVO.eventId == s.EventConst.EVENTTYPE_EVENT_SKIN) {
      this.updateDisp();
    }
  };
  StaticBackgroundVE.__initialize_static_members = function () {
    StaticBackgroundVE.UNSCALED_GFX_SIZE = new d(800, 400);
    StaticBackgroundVE.GFX_SIZE = new d(StaticBackgroundVE.UNSCALED_GFX_SIZE.x * StaticBackgroundVE.SCALE, StaticBackgroundVE.UNSCALED_GFX_SIZE.y * StaticBackgroundVE.SCALE);
  };
  StaticBackgroundVE.SCALE = 2;
  StaticBackgroundVE.ADDITIONAL_SCALE = 0.01;
  return StaticBackgroundVE;
}(u.AIsoObjectVE);
exports.StaticBackgroundVE = h;
var g = require("./46.js");
var C = require("./17.js");
h.__initialize_static_members();
o.classImplementsInterfaces(h, "ICollectableRendererList", "IIngameUICapable");