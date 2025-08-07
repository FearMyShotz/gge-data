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
  function FactionTowerDetailView(t, i, n, o) {
    var a = this;
    a._factionFrame = 0;
    CONSTRUCTOR_HACK;
    return a = e.call(this, t, i, n, o) || this;
  }
  n.__extends(FactionTowerDetailView, e);
  Object.defineProperty(FactionTowerDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_" + this._kingdomVO.kingdomName + "_Level2");
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(l.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  FactionTowerDetailView.prototype.drawCastleVO = function () {
    var e = "_" + this._kingdomVO.kingdomName;
    var t = r.int(this._detailDrawAble.ownerInfo.factionID);
    this._factionFrame = r.int(t == s.FactionConst.RED_FACTION ? 1 : 2);
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerBackground.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_SHADOW + 2 + e));
    this._layerKeep.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_KEEP + 2 + e, this.bindFunction(this.onClipLoaded)));
    this._layerLeft.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_BACKWALL + "_Left_Level2" + e, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_FRONTWALL + "_Left_Level2" + e, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_FRONTWALL + "_Right_Level2" + e, this.bindFunction(this.onClipLoaded)));
    this._layerMiddle.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_GATE + 2 + e, this.bindFunction(this.onClipLoaded)));
    this._layerRight.addChild(this.getMovieClipByName(FactionTowerDetailView.CLASSNAME_BACKWALL + "_Right_Level2" + e, this.bindFunction(this.onClipLoaded)));
  };
  FactionTowerDetailView.prototype.onClipLoaded = function (e) {
    e.gotoAndStop(this._factionFrame);
  };
  FactionTowerDetailView.__initialize_static_members = function () {
    FactionTowerDetailView.CLASSNAME_KEEP = "Dungeon_Keep_Level";
    FactionTowerDetailView.CLASSNAME_BACKWALL = "Dungeon_BackWall";
    FactionTowerDetailView.CLASSNAME_FRONTWALL = "Dungeon_FrontWall";
    FactionTowerDetailView.CLASSNAME_GATE = "Dungeon_Gate_Level";
    FactionTowerDetailView.CLASSNAME_DETAIL = "Dungeon_Detail_Level";
    FactionTowerDetailView.CLASSNAME_SHADOW = "Dungeon_Shadow_Level";
  };
  return FactionTowerDetailView;
}(l.FightDetailView);
exports.FactionTowerDetailView = c;
a.classImplementsInterfaces(c, "IFightDetailView");
c.__initialize_static_members();