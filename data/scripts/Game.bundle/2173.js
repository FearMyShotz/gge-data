Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./162.js");
var r = createjs.Container;
var l = function (e) {
  function DaimyoTownshipDetailView(t, i, n, o) {
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(DaimyoTownshipDetailView, e);
  Object.defineProperty(DaimyoTownshipDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_DaimyoTownship");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DaimyoTownshipDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_Daimyo");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DaimyoTownshipDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_Daimyo";
  };
  DaimyoTownshipDetailView.prototype.drawCastleVO = function () {
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
    this._castleLayer.addChild(this._layerBackground);
    this._castleLayer.addChild(this._layerMoat);
    this._layerFront.addChild(this._layerLeft);
    this._layerFront.addChild(this._layerRight);
    this._layerFront.addChild(this._layerKeep);
    this._layerFront.addChild(this._layerMiddle);
    this._castleLayer.addChild(this._layerFront);
    this._layerKeep.addChild(this.getMovieClipByName(DaimyoTownshipDetailView.CLASSNAME_KEEP));
    this._layerLeft.addChild(this.getMovieClipByName(DaimyoTownshipDetailView.CLASSNAME_BACKWALL_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(DaimyoTownshipDetailView.CLASSNAME_BACKWALL_RIGHT));
    this._layerMiddle.addChild(this.getMovieClipByName(DaimyoTownshipDetailView.CLASSNAME_GATE));
    if (this._detailDrawAble.moatLevel > 0) {
      this._layerMoat.addChild(this.getMovieClipByName(DaimyoTownshipDetailView.CLASSNAME_MOAT));
    }
  };
  DaimyoTownshipDetailView.CLASSNAME_KEEP = "DaimyoTownship_Keep";
  DaimyoTownshipDetailView.CLASSNAME_BACKWALL_LEFT = "DaimyoTownship_BackWall_Left";
  DaimyoTownshipDetailView.CLASSNAME_BACKWALL_RIGHT = "DaimyoTownship_BackWall_Right";
  DaimyoTownshipDetailView.CLASSNAME_GATE = "DaimyoTownship_Gate";
  DaimyoTownshipDetailView.CLASSNAME_MOAT = "DaimyoTownship_Moat";
  return DaimyoTownshipDetailView;
}(s.FightDetailView);
exports.DaimyoTownshipDetailView = l;
a.classImplementsInterfaces(l, "IFightDetailView");