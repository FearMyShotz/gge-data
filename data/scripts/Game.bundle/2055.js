Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./1.js");
var l = require("./14.js");
var c = require("./41.js");
var u = require("./293.js");
var d = require("./2056.js");
var p = createjs.Container;
var h = function (e) {
  function IsoAdditionalClipManager() {
    var t = this;
    t._layersList = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this) || this;
  }
  n.__extends(IsoAdditionalClipManager, e);
  IsoAdditionalClipManager.prototype.init = function (e) {
    this._ve = e;
  };
  IsoAdditionalClipManager.prototype.reset = function () {
    this.destroy();
  };
  IsoAdditionalClipManager.prototype.destroy = function () {
    this.removeAllClips();
    this._layersList = new Map();
  };
  IsoAdditionalClipManager.prototype.addClips = function (e, t = 12, i = 1, n = false) {
    var s = this.getLayersByType(e);
    if (s && !this.containsClipsByType(e)) {
      var r = g.IsoHelper.view.getAssetFileURL(e.assetAndClipName);
      if (s != null) {
        for (var l = 0, c = s; l < c.length; l++) {
          var u = c[l];
          if (u !== undefined) {
            var d = a.GoodgameBitmapEngine.clipFactory.getExternalClipSource(e.assetAndClipName, r, this.ve.getFlagClipColor(), null, null, n);
            var p = new o.GoodgameBitmapClipExternal(d, t, g.IsoHelper.view.areAnimationsActive);
            p.isInteractive = false;
            u.newLayer.addChild(p.asDisplayObject());
            p.x = p.y = 0;
            p.scaleX = p.scaleY = i;
            p.name = e.assetAndClipName;
            u.newLayer.mouseEnabled = false;
            if (d.isLoaded) {
              this.onClipLoaded(p);
            } else {
              p.clipLoaded.addOnce(this.bindFunction(this.onClipLoaded));
            }
          }
        }
      }
    }
  };
  IsoAdditionalClipManager.prototype.removeClips = function (e) {
    for (var t = 0, i = this.getLayersByType(e); t < i.length; t++) {
      i[t].newLayer.removeChildren();
    }
  };
  IsoAdditionalClipManager.prototype.removeAllClips = function () {
    if (this.layersList != null) {
      for (var e = 0, t = Array.from(this.layersList.values()); e < t.length; e++) {
        var i = t[e];
        if (i !== undefined && i != null) {
          for (var n = 0, o = i; n < o.length; n++) {
            var a = o[n];
            if (a !== undefined) {
              a.newLayer.removeChildren();
            }
          }
        }
      }
    }
  };
  IsoAdditionalClipManager.prototype.updatePositions = function () {
    if (this.ve && this.ve.layers) {
      var e = this.ve.layers.getLayer(u.IsoObjectLayerEnum.ADDITIONAL_CLIPS);
      if (e && (e.x = this.ve.dispOffset.x, e.y = this.ve.dispOffset.y, this.layersList != null)) {
        for (var t = 0, i = Array.from(this.layersList.values()); t < i.length; t++) {
          var n = i[t];
          if (n !== undefined && n != null) {
            for (var o = 0, a = n; o < a.length; o++) {
              var s = a[o];
              if (s !== undefined && s) {
                s.updatePosition();
              }
            }
          }
        }
      }
    }
  };
  IsoAdditionalClipManager.prototype.setVisibility = function (e) {
    var t = this.ve.layers.getLayer(u.IsoObjectLayerEnum.ADDITIONAL_CLIPS);
    if (t) {
      t.visible = e;
    }
  };
  IsoAdditionalClipManager.prototype.updateAnimationState = function () {
    var e = g.IsoHelper.view.areAnimationsActive;
    if (this.layersList != null) {
      for (var t = 0, i = Array.from(this.layersList.values()); t < i.length; t++) {
        var n = i[t];
        if (n !== undefined && n != null) {
          for (var o = 0, a = n; o < a.length; o++) {
            var r = a[o];
            if (r !== undefined) {
              for (var l = 0; l < r.newLayer.numChildren; ++l) {
                var u = s.castAs(r.newLayer.getChildAt(l), "GoodgameBitmapClipExternal");
                if (u) {
                  if (e) {
                    c.CastleMovieClipHelper.uncacheSafe(u);
                    u.play();
                  } else {
                    u.stop();
                    if (u.children.length == 1) {
                      u.children[0];
                      createjs.Bitmap;
                    }
                    c.CastleMovieClipHelper.uncacheSafe(u);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  IsoAdditionalClipManager.prototype.initLayerByType = function (e) {
    var t = c.CastleMovieClipHelper.getChildrenByName(this.ve.disp, e.layerName);
    var i = [];
    if (t.length == 0 && e.addWithoutSubClip) {
      var n = new p();
      this.ve.layers.getLayer(u.IsoObjectLayerEnum.DISP).addChild(n);
      var o = this.ve.layers.getLayer(u.IsoObjectLayerEnum.FLOOR).getBounds(null);
      n.x = o.width / 3;
      t.push(n);
    }
    if (t != null) {
      for (var a = 0, s = t; a < s.length; a++) {
        var r = s[a];
        if (r !== undefined && r instanceof p) {
          var l = new d.IsoAdditionalClipLayerVO(r, e);
          this.ve.layers.getLayer(u.IsoObjectLayerEnum.ADDITIONAL_CLIPS).addChild(l.newLayer);
          l.updatePosition();
          i.push(l);
        }
      }
    }
    this.layersList.set(e, i);
  };
  IsoAdditionalClipManager.prototype.containsClipsByType = function (e) {
    for (var t = 0, i = this.getLayersByType(e); t < i.length; t++) {
      if (i[t].newLayer.numChildren > 0) {
        return true;
      }
    }
    return false;
  };
  IsoAdditionalClipManager.prototype.getLayersByType = function (e) {
    if (!this.layersList.get(e)) {
      this.initLayerByType(e);
    }
    return this.layersList.get(e);
  };
  IsoAdditionalClipManager.prototype.onClipLoaded = function (e) {
    this.updatePositions();
    if (g.IsoHelper.view.areAnimationsActive) {
      e.play();
    } else {
      e.stop();
      if (e.children.length == 1 && e.children[0] instanceof createjs.Bitmap) {
        c.CastleMovieClipHelper.uncacheSafe(e);
      } else {
        e.doCache();
      }
    }
  };
  IsoAdditionalClipManager.prototype.onAnimationOptionChanged = function () {
    this.updateAnimationState();
  };
  Object.defineProperty(IsoAdditionalClipManager.prototype, "layersList", {
    get: function () {
      return this._layersList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoAdditionalClipManager.prototype, "ve", {
    get: function () {
      return this._ve;
    },
    enumerable: true,
    configurable: true
  });
  return IsoAdditionalClipManager;
}(l.CastleComponent);
exports.IsoAdditionalClipManager = h;
var g = require("./46.js");
r.classImplementsInterfaces(h, "ICollectableRendererList");