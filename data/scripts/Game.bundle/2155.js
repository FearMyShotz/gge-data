Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./162.js");
var r = createjs.Container;
var l = function (e) {
  function BossDungeonDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(BossDungeonDetailView, e);
  BossDungeonDetailView.prototype.getBackgroundClassName = function () {
    if (this._kingdomVO.kID == 0) {
      return "Castle_Landscape_" + this._kingdomVO.kingdomName + "_Dungeon";
    } else {
      return "Castle_Landscape_" + this._kingdomVO.kingdomName;
    }
  };
  Object.defineProperty(BossDungeonDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_BossDungeon_" + this._kingdomVO.kingdomName);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(s.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  BossDungeonDetailView.prototype.drawCastleVO = function () {
    switch (this._kingdomVO.kID) {
      case 3:
        this.drawDragonBossDungeon();
        break;
      default:
        this.drawDefault();
    }
  };
  BossDungeonDetailView.prototype.drawDragonBossDungeon = function () {
    this.initLayer();
    this._layerBackground.addChild(this.getMovieClipByName("BossDragonDungeon_BG_" + this._kingdomVO.kingdomName));
    this._layerKeep.addChild(new r());
    this._layerLeft.addChild(this.getMovieClipByName("BossDragonDungeon_Left_" + this._kingdomVO.kingdomName));
    this._layerMiddle.addChild(this.getMovieClipByName("BossDragonDungeon_Middle_" + this._kingdomVO.kingdomName));
    this._layerRight.addChild(this.getMovieClipByName("BossDragonDungeon_Right_" + this._kingdomVO.kingdomName));
  };
  BossDungeonDetailView.prototype.drawDefault = function () {
    var e = "_" + this._kingdomVO.kingdomName;
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerKeep.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_KEEP + e));
    this._layerLeft.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_BACKWALL + "_Left" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_FRONTWALL + "_Left" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_FRONTWALL + "_Right" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_GATE + e));
    this._layerRight.addChild(this.getMovieClipByName(BossDungeonDetailView.CLASSNAME_BACKWALL + "_Right" + e));
  };
  BossDungeonDetailView.__initialize_static_members = function () {
    BossDungeonDetailView.CLASSNAME_KEEP = "BossDungeon_Keep";
    BossDungeonDetailView.CLASSNAME_BACKWALL = "BossDungeon_BackWall";
    BossDungeonDetailView.CLASSNAME_FRONTWALL = "BossDungeon_FrontWall";
    BossDungeonDetailView.CLASSNAME_GATE = "BossDungeon_Gate";
  };
  return BossDungeonDetailView;
}(s.FightDetailView);
exports.BossDungeonDetailView = l;
a.classImplementsInterfaces(l, "IFightDetailView");
l.__initialize_static_members();