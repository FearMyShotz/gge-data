Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./44.js");
var r = require("./162.js");
var l = createjs.Container;
var c = function (e) {
  function AABGDetailView(t, i, n, o, a) {
    var s = e.call(this, t, i, n, o, a) || this;
    s.landmarkName = "";
    return s;
  }
  n.__extends(AABGDetailView, e);
  AABGDetailView.prototype.preConstructor = function (e = null) {
    this.landmarkName = e;
  };
  Object.defineProperty(AABGDetailView.prototype, "skinName", {
    get: function () {
      return s.SpecialServerHelper.skinName;
    },
    enumerable: true,
    configurable: true
  });
  AABGDetailView.prototype.drawCastleVO = function () {
    this._castleLayer = new l();
    this._layerBackground = new l();
    this._layerMoat = new l();
    this._layerMoat.mouseChildren = false;
    this._layerKeep = new l();
    this._layerKeep.mouseChildren = false;
    this._layerFront = new l();
    this._layerLeft = new l();
    this._layerLeft.mouseChildren = false;
    this._layerRight = new l();
    this._layerRight.mouseChildren = false;
    this._layerMiddle = new l();
    this._layerMiddle.mouseChildren = false;
    this._castleLayer.y = 3;
    this._castleLayer.x = 10;
    this._castleLayer.addChild(this._layerBackground);
    this._castleLayer.addChild(this._layerMoat);
    this._layerFront.addChild(this._layerKeep);
    this._layerFront.addChild(this._layerLeft);
    this._layerFront.addChild(this._layerRight);
    this._layerFront.addChild(this._layerMiddle);
    this._castleLayer.addChild(this._layerFront);
    if (this.landmarkName == "Castle") {
      this._layerKeep.addChild(this.getMovieClipByName("CastlePart_Keep_Level" + this._detailDrawAble.keepLevel, null, "DetailView_Castle"));
    } else {
      this._layerKeep.addChild(this.getMovieClipByName(this.keepName, null, this.keepName));
    }
    this._layerLeft.addChild(this.getMovieClipByName(this.classPrefix + "BackWall_Left", null, this.wallAssetName));
    this._layerRight.addChild(this.getMovieClipByName(this.classPrefix + "BackWall_Right", null, this.wallAssetName));
    this._layerMiddle.addChild(this.getMovieClipByName(this.classPrefix + "Gate", null, this.wallAssetName));
    this._layerMoat.addChild(this.getMovieClipByName(this.classPrefix + "Moat", null, this.wallAssetName));
  };
  Object.defineProperty(AABGDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_EventSkin_" + this.skinName);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(r.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  AABGDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_EventSkin_" + this.skinName;
  };
  Object.defineProperty(AABGDetailView.prototype, "wallAssetName", {
    get: function () {
      return this.classPrefix + "Wall";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AABGDetailView.prototype, "keepName", {
    get: function () {
      return this.classPrefix + this.landmarkName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AABGDetailView.prototype, "classPrefix", {
    get: function () {
      return AABGDetailView.PREFIX + this.skinName + "_";
    },
    enumerable: true,
    configurable: true
  });
  AABGDetailView.PREFIX = "DetailView_EventSkin_";
  return AABGDetailView;
}(r.FightDetailView);
exports.AABGDetailView = c;
a.classImplementsInterfaces(c, "IFightDetailView");