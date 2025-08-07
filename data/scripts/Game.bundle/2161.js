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
  function FactionCapitalDetailView(t, i, n, o) {
    var a = this;
    a._factionFrame = 0;
    CONSTRUCTOR_HACK;
    return a = e.call(this, t, i, n, o) || this;
  }
  n.__extends(FactionCapitalDetailView, e);
  FactionCapitalDetailView.prototype.getBackgroundClassName = function () {
    return "Castle_Landscape_" + this._kingdomVO.kingdomName;
  };
  Object.defineProperty(FactionCapitalDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Capital_Faction");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionCapitalDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    var e = r.int(this._detailDrawAble.ownerInfo.factionID);
    this._factionFrame = r.int(e == s.FactionConst.RED_FACTION ? 1 : 2);
    this._layerKeep.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_KEEP + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerLeft.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_BACKWALL + "_Left" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_TOWER + "_Left" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_FRONTWALL + "_Left" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_TOWER + "_Right" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_FRONTWALL + "_Right" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_GATE + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
    this._layerRight.addChild(this.getMovieClipByName(FactionCapitalDetailView.CLASSNAME_BACKWALL + "_Right" + FactionCapitalDetailView.FACTION, this.bindFunction(this.onClipLoaded)));
  };
  FactionCapitalDetailView.prototype.onClipLoaded = function (e) {
    e.gotoAndStop(this._factionFrame);
  };
  FactionCapitalDetailView.__initialize_static_members = function () {
    FactionCapitalDetailView.CLASSNAME_KEEP = "CastlePart_Keep";
    FactionCapitalDetailView.CLASSNAME_BACKWALL = "CastleParts_BackWall";
    FactionCapitalDetailView.CLASSNAME_FRONTWALL = "CastleParts_FrontWall";
    FactionCapitalDetailView.CLASSNAME_TOWER = "CastleParts_Tower";
    FactionCapitalDetailView.CLASSNAME_GATE = "CastlePart_Gate";
    FactionCapitalDetailView.FACTION = "_Faction";
  };
  return FactionCapitalDetailView;
}(l.FightDetailView);
exports.FactionCapitalDetailView = c;
a.classImplementsInterfaces(c, "IFightDetailView");
c.__initialize_static_members();