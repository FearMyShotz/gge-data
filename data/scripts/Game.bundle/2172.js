Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./162.js");
var r = createjs.Container;
var l = function (e) {
  function DaimyoCastleDetailView(t, i, n, o) {
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(DaimyoCastleDetailView, e);
  Object.defineProperty(DaimyoCastleDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_DaimyoCastle");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoCastleDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_Daimyo");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DaimyoCastleDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_Daimyo";
  };
  DaimyoCastleDetailView.prototype.drawCastleVO = function () {
    this._castleLayer = new r();
    this._layerBackground = new r();
    this._layerMoat = new r();
    this._layerMoat.mouseChildren = false;
    this._layerKeep = new r();
    this._layerKeep.mouseChildren = false;
    this._layerFront = new r();
    this._layerLeft = new r();
    this._layerLeft.mouseChildren = false;
    this._layerRight = new r();
    this._layerRight.mouseChildren = false;
    this._layerMiddle = new r();
    this._layerMiddle.mouseChildren = false;
    this._castleLayer.y = -10;
    this._castleLayer.x = -20;
    this._castleLayer.addChild(this._layerBackground);
    this._castleLayer.addChild(this._layerMoat);
    this._layerFront.addChild(this._layerLeft);
    this._layerFront.addChild(this._layerRight);
    this._layerFront.addChild(this._layerKeep);
    this._layerFront.addChild(this._layerMiddle);
    this._castleLayer.addChild(this._layerFront);
    this._layerKeep.addChild(this.getMovieClipByName(DaimyoCastleDetailView.CLASSNAME_KEEP));
    this._layerLeft.addChild(this.getMovieClipByName(DaimyoCastleDetailView.CLASSNAME_BACKWALL_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(DaimyoCastleDetailView.CLASSNAME_BACKWALL_RIGHT));
    this._layerMiddle.addChild(this.getMovieClipByName(DaimyoCastleDetailView.CLASSNAME_GATE));
    this._layerMoat.addChild(this.getMovieClipByName(DaimyoCastleDetailView.CLASSNAME_MOAT));
  };
  DaimyoCastleDetailView.CLASSNAME_KEEP = "DaimyoCastle_Keep";
  DaimyoCastleDetailView.CLASSNAME_BACKWALL_LEFT = "DaimyoCastle_BackWall_Left";
  DaimyoCastleDetailView.CLASSNAME_BACKWALL_RIGHT = "DaimyoCastle_BackWall_Right";
  DaimyoCastleDetailView.CLASSNAME_GATE = "DaimyoCastle_Gate";
  DaimyoCastleDetailView.CLASSNAME_MOAT = "DaimyoCastle_Moat";
  return DaimyoCastleDetailView;
}(s.FightDetailView);
exports.DaimyoCastleDetailView = l;
a.classImplementsInterfaces(l, "IFightDetailView");