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
  function FactionInvasionCampDetailView(t, i, n, o) {
    var a = this;
    a._factionFrame = 0;
    CONSTRUCTOR_HACK;
    return a = e.call(this, t, i, n, o) || this;
  }
  n.__extends(FactionInvasionCampDetailView, e);
  Object.defineProperty(FactionInvasionCampDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Camp_Faction");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionInvasionCampDetailView.prototype.drawCastleVO = function () {
    var e = r.int(this._detailDrawAble.ownerInfo.factionID);
    this._factionFrame = r.int(e == s.FactionConst.RED_FACTION ? 1 : 2);
    this.initLayer();
    this._layerKeep.addChild(this.getMovieClipByName(FactionInvasionCampDetailView.CLASSNAME_KEEP, this.bindFunction(this.onClipLoaded)));
    this._layerLeft.addChild(this.getMovieClipByName(FactionInvasionCampDetailView.CLASSNAME_BACKWALL + "_Left_Faction", this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionInvasionCampDetailView.CLASSNAME_FRONTWALL + "_Left_Faction", this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionInvasionCampDetailView.CLASSNAME_FRONTWALL + "_Right_Faction", this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionInvasionCampDetailView.CLASSNAME_GATE, this.bindFunction(this.onClipLoaded)));
    this._layerRight.addChild(this.getMovieClipByName(FactionInvasionCampDetailView.CLASSNAME_BACKWALL + "_Right_Faction", this.bindFunction(this.onClipLoaded)));
    if (this._detailDrawAble.moatLevel > 0) {
      this._layerMoat.addChild(this.getMovieClipByName(FactionInvasionCampDetailView.CLASSNAME_MOAT + "_Faction" + this._detailDrawAble.moatLevel, this.bindFunction(this.onClipLoaded)));
    }
  };
  FactionInvasionCampDetailView.prototype.onClipLoaded = function (e) {
    e.gotoAndStop(this._factionFrame);
  };
  FactionInvasionCampDetailView.__initialize_static_members = function () {
    FactionInvasionCampDetailView.CLASSNAME_KEEP = "Camp_Keep_Faction";
    FactionInvasionCampDetailView.CLASSNAME_BACKWALL = "Camp_BackWall";
    FactionInvasionCampDetailView.CLASSNAME_FRONTWALL = "Camp_FrontWall";
    FactionInvasionCampDetailView.CLASSNAME_GATE = "Camp_Gate_Faction";
    FactionInvasionCampDetailView.CLASSNAME_MOAT = "Camp_Moat";
  };
  return FactionInvasionCampDetailView;
}(l.FightDetailView);
exports.FactionInvasionCampDetailView = c;
a.classImplementsInterfaces(c, "IFightDetailView");
c.__initialize_static_members();