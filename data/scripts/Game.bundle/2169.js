Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./162.js");
var r = function (e) {
  function MonumentDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(MonumentDetailView, e);
  Object.defineProperty(MonumentDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Monument");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  MonumentDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(MonumentDetailView.CLASSNAME_KEEP));
    this._layerLeft.addChild(this.getMovieClipByName(MonumentDetailView.CLASSNAME_BACKWALL_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(MonumentDetailView.CLASSNAME_BACKWALL_RIGHT));
    this._layerMiddle.addChild(this.getMovieClipByName(MonumentDetailView.CLASSNAME_GATE));
  };
  MonumentDetailView.__initialize_static_members = function () {
    MonumentDetailView.CLASSNAME_KEEP = "Monument_Keep";
    MonumentDetailView.CLASSNAME_BACKWALL_LEFT = "Monument_Left";
    MonumentDetailView.CLASSNAME_BACKWALL_RIGHT = "Monument_Right";
    MonumentDetailView.CLASSNAME_GATE = "Monument_Gate";
  };
  return MonumentDetailView;
}(s.FightDetailView);
exports.MonumentDetailView = r;
a.classImplementsInterfaces(r, "IFightDetailView");
r.__initialize_static_members();