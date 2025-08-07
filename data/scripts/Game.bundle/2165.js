Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./6.js");
var l = require("./162.js");
var c = function (e) {
  function FactionVillageDetailView(t, i, n, o) {
    var a = this;
    a._factionFrame = 0;
    CONSTRUCTOR_HACK;
    return a = e.call(this, t, i, n, o) || this;
  }
  n.__extends(FactionVillageDetailView, e);
  Object.defineProperty(FactionVillageDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Village_Faction");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionVillageDetailView.prototype.drawCastleVO = function () {
    var e = r.int(this._detailDrawAble.ownerInfo.factionID);
    this._factionFrame = r.int(e == s.FactionConst.RED_FACTION ? 1 : 2);
    var t = "_" + this._kingdomVO.kingdomName;
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_KEEP + t, this.bindFunction(this.onClipLoaded)));
    this._layerLeft.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_BACKWALL + "_Left" + t, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_FRONTWALL + "_Left" + t, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_FRONTWALL + "_Right" + t, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_GATE + t, this.bindFunction(this.onClipLoaded)));
    this._layerRight.addChild(this.getMovieClipByName(FactionVillageDetailView.CLASSNAME_BACKWALL + "_Right" + t, this.bindFunction(this.onClipLoaded)));
  };
  FactionVillageDetailView.prototype.onClipLoaded = function (e) {
    e.gotoAndStop(this._factionFrame);
  };
  FactionVillageDetailView.__initialize_static_members = function () {
    FactionVillageDetailView.CLASSNAME_KEEP = "Village_Keep";
    FactionVillageDetailView.CLASSNAME_BACKWALL = "Village_BackWall";
    FactionVillageDetailView.CLASSNAME_FRONTWALL = "Village_FrontWall";
    FactionVillageDetailView.CLASSNAME_GATE = "Village_Gate";
  };
  return FactionVillageDetailView;
}(l.FightDetailView);
exports.FactionVillageDetailView = c;
a.classImplementsInterfaces(c, "IFightDetailView");
c.__initialize_static_members();