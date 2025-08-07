Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./162.js");
var r = function (e) {
  function KingstowerDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(KingstowerDetailView, e);
  Object.defineProperty(KingstowerDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Castle");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  KingstowerDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(KingstowerDetailView.CLASSNAME_KEEP));
    this._layerLeft.addChild(this.getMovieClipByName(KingstowerDetailView.CLASSNAME_BACKWALL_LEFT));
    this._layerRight.addChild(this.getMovieClipByName(KingstowerDetailView.CLASSNAME_BACKWALL_RIGHT));
    this._layerMiddle.addChild(this.getMovieClipByName(KingstowerDetailView.CLASSNAME_FRONTWALL_LEFT));
    this._layerMiddle.addChild(this.getMovieClipByName(KingstowerDetailView.CLASSNAME_FRONTWALL_RIGHT));
    this._layerMiddle.addChild(this.getMovieClipByName(KingstowerDetailView.CLASSNAME_GATE));
  };
  KingstowerDetailView.__initialize_static_members = function () {
    KingstowerDetailView.CLASSNAME_KEEP = "CastleParts_Kingstower_Keep";
    KingstowerDetailView.CLASSNAME_BACKWALL_LEFT = "CastleParts_BackWall_Left_Level3";
    KingstowerDetailView.CLASSNAME_BACKWALL_RIGHT = "CastleParts_BackWall_Right_Level3";
    KingstowerDetailView.CLASSNAME_FRONTWALL_LEFT = "CastleParts_FrontWall_Left_Level3";
    KingstowerDetailView.CLASSNAME_FRONTWALL_RIGHT = "CastleParts_FrontWall_Right_Level3";
    KingstowerDetailView.CLASSNAME_GATE = "CastlePart_Gate_Level3";
  };
  return KingstowerDetailView;
}(s.FightDetailView);
exports.KingstowerDetailView = r;
a.classImplementsInterfaces(r, "IFightDetailView");
r.__initialize_static_members();