Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./162.js");
var r = function (e) {
  function VillageDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(VillageDetailView, e);
  Object.defineProperty(VillageDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Village_" + this._kingdomVO.kingdomName);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  VillageDetailView.prototype.drawCastleVO = function () {
    var e = "_" + this._kingdomVO.kingdomName;
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_KEEP + e));
    this._layerLeft.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_BACKWALL + "_Left" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_FRONTWALL + "_Left" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_FRONTWALL + "_Right" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_GATE + e));
    this._layerRight.addChild(this.getMovieClipByName(VillageDetailView.CLASSNAME_BACKWALL + "_Right" + e));
  };
  VillageDetailView.__initialize_static_members = function () {
    VillageDetailView.CLASSNAME_KEEP = "Village_Keep";
    VillageDetailView.CLASSNAME_BACKWALL = "Village_BackWall";
    VillageDetailView.CLASSNAME_FRONTWALL = "Village_FrontWall";
    VillageDetailView.CLASSNAME_GATE = "Village_Gate";
  };
  return VillageDetailView;
}(s.FightDetailView);
exports.VillageDetailView = r;
a.classImplementsInterfaces(r, "IFightDetailView");
r.__initialize_static_members();