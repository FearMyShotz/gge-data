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
  function FactionCampDetailView(t, i, n, o) {
    var a = this;
    a._factionFrame = 0;
    CONSTRUCTOR_HACK;
    return a = e.call(this, t, i, n, o) || this;
  }
  n.__extends(FactionCampDetailView, e);
  Object.defineProperty(FactionCampDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Camp_Faction");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionCampDetailView.prototype.drawCastleVO = function () {
    var e = "_" + this._kingdomVO.kingdomName;
    var t = r.int(this._detailDrawAble.ownerInfo.factionID);
    this._factionFrame = r.int(t == s.FactionConst.RED_FACTION ? 1 : 2);
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(FactionCampDetailView.CLASSNAME_KEEP, this.bindFunction(this.onClipLoaded)));
    this._layerLeft.addChild(this.getMovieClipByName(FactionCampDetailView.CLASSNAME_BACKWALL + "_Left" + e, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCampDetailView.CLASSNAME_FRONTWALL + "_Left" + e, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCampDetailView.CLASSNAME_FRONTWALL + "_Right" + e, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCampDetailView.CLASSNAME_GATE, this.bindFunction(this.onClipLoaded)));
    this._layerRight.addChild(this.getMovieClipByName(FactionCampDetailView.CLASSNAME_BACKWALL + "_Right" + e, this.bindFunction(this.onClipLoaded)));
    if (this._detailDrawAble.moatLevel > 0) {
      this._layerMoat.addChild(this.getMovieClipByName(FactionCampDetailView.CLASSNAME_MOAT + e + this._detailDrawAble.moatLevel, this.bindFunction(this.onClipLoaded)));
    }
  };
  FactionCampDetailView.prototype.onClipLoaded = function (e) {
    e.gotoAndStop(this._factionFrame);
  };
  FactionCampDetailView.__initialize_static_members = function () {
    FactionCampDetailView.CLASSNAME_KEEP = "Camp_Keep_Faction";
    FactionCampDetailView.CLASSNAME_BACKWALL = "Camp_BackWall";
    FactionCampDetailView.CLASSNAME_FRONTWALL = "Camp_FrontWall";
    FactionCampDetailView.CLASSNAME_GATE = "Camp_Gate_Faction";
    FactionCampDetailView.CLASSNAME_MOAT = "Camp_Moat";
  };
  return FactionCampDetailView;
}(l.FightDetailView);
exports.FactionCampDetailView = c;
a.classImplementsInterfaces(c, "IFightDetailView");
c.__initialize_static_members();