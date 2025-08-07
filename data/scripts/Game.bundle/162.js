Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./2.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./1.js");
var r = require("./4.js");
var l = require("./68.js");
var c = require("./24.js");
var u = require("./41.js");
var d = createjs.Container;
var p = function () {
  function FightDetailView(e, t, i, n, o = null) {
    this.preConstructor(o);
    this._detailDrawAble = e;
    this._targetBackgroundMC = t;
    this._targetCastleLayerMC = i;
    this._kingdomVO = n;
    this.drawBackground();
    this.drawCastleVO();
    this.drawCastleToTargetLayer();
  }
  FightDetailView.prototype.preConstructor = function (e = null) {};
  FightDetailView.prototype.drawCastleToTargetLayer = function () {
    a.MovieClipHelper.clearMovieClip(this._targetCastleLayerMC);
    this._castleLayer.scaleX = this._castleLayer.scaleY /= 2;
    this._targetCastleLayerMC.addChild(this._castleLayer);
  };
  FightDetailView.prototype.drawCastleVO = function () {};
  FightDetailView.prototype.drawBackground = function () {
    var e = new c.CastleGoodgameExternalClip(this.getBackgroundClassName(), this.assetBackgroundFileURL, null, 0, false);
    a.MovieClipHelper.clearMovieClip(this._targetBackgroundMC);
    e.scaleX = e.scaleY /= 2;
    this._targetBackgroundMC.addChild(e.asDisplayObject());
    this._targetBackgroundMC.cacheAsBitmap = true;
    this._targetBackgroundMC.doCache();
  };
  Object.defineProperty(FightDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      return n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_" + this._kingdomVO.kingdomName);
    },
    enumerable: true,
    configurable: true
  });
  FightDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_" + this._kingdomVO.kingdomName;
  };
  Object.defineProperty(FightDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return n.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Castle");
    },
    enumerable: true,
    configurable: true
  });
  FightDetailView.prototype.initLayer = function () {
    this._castleLayer = new d();
    this._castleLayer.name = "castleLayer";
    this._layerBackground = new d();
    this._layerMoat = new d();
    this._layerMoat.mouseChildren = false;
    this._layerKeep = new d();
    this._layerKeep.mouseChildren = false;
    this._layerFront = new d();
    this._layerLeft = new d();
    this._layerLeft.mouseChildren = false;
    this._layerRight = new d();
    this._layerRight.mouseChildren = false;
    this._layerMiddle = new d();
    this._layerMiddle.mouseChildren = false;
    this._castleLayer.addChild(this._layerBackground);
    this._castleLayer.addChild(this._layerMoat);
    this._castleLayer.addChild(this._layerKeep);
    this._layerFront.addChild(this._layerLeft);
    this._layerFront.addChild(this._layerRight);
    this._layerFront.addChild(this._layerMiddle);
    this._castleLayer.addChild(this._layerFront);
  };
  FightDetailView.prototype.addGlow = function (e) {
    this.removeGlow();
    e.useFilters(l.BitmapFilterHelper.FILTER_GLOW_FIGHT_DETAILS.concat(l.BitmapFilterHelper.FILTER_GLOW_FIGHT_DETAILS).concat(l.BitmapFilterHelper.FILTER_GLOW_FIGHT_DETAILS), false, 1);
  };
  FightDetailView.prototype.removeGlow = function () {
    if (this.selectedTarget != this._layerKeep) {
      this._layerKeep.useFilters(l.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerLeft) {
      this._layerLeft.useFilters(l.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerRight) {
      this._layerRight.useFilters(l.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerMiddle) {
      this._layerMiddle.useFilters(l.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerFront) {
      this._layerFront.useFilters(l.BitmapFilterHelper.NO_FILTER);
    }
    if (this.selectedTarget != this._layerMoat) {
      this._layerMoat.useFilters(l.BitmapFilterHelper.NO_FILTER);
    }
  };
  FightDetailView.prototype.clearView = function () {
    a.MovieClipHelper.clearMovieClip(this._layerBackground);
    a.MovieClipHelper.clearMovieClip(this._layerMoat);
    a.MovieClipHelper.clearMovieClip(this._layerKeep);
    a.MovieClipHelper.clearMovieClip(this._layerFront);
    a.MovieClipHelper.clearMovieClip(this._layerLeft);
    a.MovieClipHelper.clearMovieClip(this._layerRight);
    a.MovieClipHelper.clearMovieClip(this._layerMiddle);
    a.MovieClipHelper.clearMovieClip(this._castleLayer);
  };
  FightDetailView.prototype.onLoadedCallback = function (e) {
    if (!r.CastleModel.gfxData.animationActive) {
      u.CastleMovieClipHelper.stopAllMovies(e, 1);
    }
  };
  FightDetailView.prototype.getMovieClipByName = function (e, t = null, i = null) {
    var a = [];
    if (this._detailDrawAble.crestVO) {
      a.push(new o.ClipColor("flag", this._detailDrawAble.crestVO.colorsFour));
    }
    var s = this.assetCastleFileURL;
    if (i) {
      s = n.BasicModel.basicLoaderData.getVersionedItemAssetUrl(i);
    }
    var r = new c.CastleGoodgameExternalClip(e, s, a, 0, false);
    r.isInteractive = true;
    if (r.isLoaded) {
      this.onLoadedCallback(r);
      if (t != null) {
        t(r);
      }
    } else {
      r.clipLoaded.addOnce(this.bindFunction(this.onLoadedCallback));
      if (t != null) {
        r.clipLoaded.addOnce(t);
      }
    }
    return r.asDisplayObject();
  };
  Object.defineProperty(FightDetailView.prototype, "castleLayer", {
    get: function () {
      return this._castleLayer;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerKeep", {
    get: function () {
      return this._layerKeep;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerFront", {
    get: function () {
      return this._layerFront;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerLeft", {
    get: function () {
      return this._layerLeft;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerRight", {
    get: function () {
      return this._layerRight;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerMiddle", {
    get: function () {
      return this._layerMiddle;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "layerMoat", {
    get: function () {
      return this._layerMoat;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FightDetailView.prototype, "selectedTarget", {
    get: function () {
      return this._selectedTarget;
    },
    set: function (e) {
      this._selectedTarget = e;
    },
    enumerable: true,
    configurable: true
  });
  return FightDetailView;
}();
exports.FightDetailView = p;
s.classImplementsInterfaces(p, "IFightDetailView");