Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./6.js");
var c = require("./162.js");
var u = function (e) {
  function DungeonDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(DungeonDetailView, e);
  DungeonDetailView.prototype.getBackgroundClassName = function () {
    if (this._kingdomVO.kID == 0 || this._kingdomVO.kID == r.WorldIsland.KINGDOM_ID) {
      return "Castle_Landscape_" + this._kingdomVO.kingdomName + "_Dungeon";
    } else {
      return "Castle_Landscape_" + this._kingdomVO.kingdomName;
    }
  };
  Object.defineProperty(DungeonDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      var e = this._detailDrawAble ? this._detailDrawAble.visualDungeonWallLevel : this._detailDrawAble.wallLevel;
      var t = l.int(Math.min(e, DungeonDetailView.MAX_DRAWABLE_LEVEL));
      if (this._kingdomVO.kID == r.WorldIsland.KINGDOM_ID || this._kingdomVO.kID == s.FactionConst.KINGDOM_ID) {
        return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_" + this._kingdomVO.kingdomName + "_Level2");
      } else {
        return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_" + this._kingdomVO.kingdomName + "_Level" + t);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  DungeonDetailView.prototype.drawCastleVO = function () {
    var e = "_" + this._kingdomVO.kingdomName;
    var t = this._detailDrawAble ? this._detailDrawAble.visualDungeonWallLevel : this._detailDrawAble.wallLevel;
    var i = l.int(Math.min(t, DungeonDetailView.MAX_DRAWABLE_LEVEL));
    if (this._kingdomVO.kID == r.WorldIsland.KINGDOM_ID || this._kingdomVO.kID == s.FactionConst.KINGDOM_ID) {
      i = 2;
    }
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    if (this._kingdomVO.kID != r.WorldIsland.KINGDOM_ID) {
      this._layerBackground.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_SHADOW + i + e));
    }
    this._layerKeep.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_KEEP + i + e));
    this._layerLeft.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_BACKWALL + "_Left_Level" + i + e));
    this._layerMiddle.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_FRONTWALL + "_Left_Level" + i + e));
    this._layerMiddle.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_FRONTWALL + "_Right_Level" + i + e));
    this._layerMiddle.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_GATE + i + e));
    this._layerMiddle.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_DETAIL + i + e));
    this._layerRight.addChild(this.getMovieClipByName(DungeonDetailView.CLASSNAME_BACKWALL + "_Right_Level" + i + e));
  };
  DungeonDetailView.__initialize_static_members = function () {
    DungeonDetailView.CLASSNAME_KEEP = "Dungeon_Keep_Level";
    DungeonDetailView.CLASSNAME_BACKWALL = "Dungeon_BackWall";
    DungeonDetailView.CLASSNAME_FRONTWALL = "Dungeon_FrontWall";
    DungeonDetailView.CLASSNAME_GATE = "Dungeon_Gate_Level";
    DungeonDetailView.CLASSNAME_DETAIL = "Dungeon_Detail_Level";
    DungeonDetailView.CLASSNAME_SHADOW = "Dungeon_Shadow_Level";
    DungeonDetailView.MAX_DRAWABLE_LEVEL = 3;
  };
  return DungeonDetailView;
}(c.FightDetailView);
exports.DungeonDetailView = u;
a.classImplementsInterfaces(u, "IFightDetailView");
u.__initialize_static_members();