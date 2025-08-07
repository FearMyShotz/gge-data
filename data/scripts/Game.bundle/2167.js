Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./162.js");
var r = createjs.Container;
var l = function (e) {
  function LaboratoryDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(LaboratoryDetailView, e);
  Object.defineProperty(LaboratoryDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Laboratory");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  LaboratoryDetailView.prototype.drawCastleVO = function () {
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
    this._layerKeep.addChild(this.getMovieClipByName(LaboratoryDetailView.CLASSNAME_KEEP));
    this._layerLeft.addChild(this.getMovieClipByName(LaboratoryDetailView.CLASSNAME_BACKWALL_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(LaboratoryDetailView.CLASSNAME_BACKWALL_RIGHT));
    this._layerMiddle.addChild(this.getMovieClipByName(LaboratoryDetailView.CLASSNAME_GATE));
  };
  LaboratoryDetailView.__initialize_static_members = function () {
    LaboratoryDetailView.CLASSNAME_KEEP = "Laboratory_Keep";
    LaboratoryDetailView.CLASSNAME_BACKWALL_LEFT = "Laboratory_Left";
    LaboratoryDetailView.CLASSNAME_BACKWALL_RIGHT = "Laboratory_Right";
    LaboratoryDetailView.CLASSNAME_GATE = "Laboratory_Gate";
  };
  return LaboratoryDetailView;
}(s.FightDetailView);
exports.LaboratoryDetailView = l;
a.classImplementsInterfaces(l, "IFightDetailView");
l.__initialize_static_members();