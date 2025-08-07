Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./4.js");
var c = require("./162.js");
var u = function (e) {
  function EventDungeonDetailView(t, i, n, o) {
    CONSTRUCTOR_HACK;
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(EventDungeonDetailView, e);
  Object.defineProperty(EventDungeonDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      switch (this.skinID) {
        case s.DungeonConst.DUNGEON_SKIN_ST_PATRICKS_DAY:
        case s.DungeonConst.DUNGEON_SKIN_EASTER:
          return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_EventDungeon_3");
        default:
          return Object.getOwnPropertyDescriptor(c.FightDetailView.prototype, "assetBackgroundFileURL").get.call(this);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EventDungeonDetailView.prototype.getBackgroundClassName = function () {
    switch (this.skinID) {
      case s.DungeonConst.DUNGEON_SKIN_ST_PATRICKS_DAY:
      case s.DungeonConst.DUNGEON_SKIN_EASTER:
        return "DetailView_Background_EventDungeon_3";
      default:
        return "Castle_Landscape_Classic_Dungeon";
    }
  };
  Object.defineProperty(EventDungeonDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      var e = this.hasCastleSkin ? "DetailView_EventDungeon_" + this.skinID : "DetailView_EventDungeon";
      return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(c.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EventDungeonDetailView.prototype.drawCastleVO = function () {
    var e = this.hasCastleSkin ? "_" + this.skinID : "";
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerKeep.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_KEEP + e));
    this._layerLeft.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_BACKWALL + "_Left" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_FRONTWALL + "_Left" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_FRONTWALL + "_Right" + e));
    this._layerMiddle.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_GATE + e));
    this._layerRight.addChild(this.getMovieClipByName(EventDungeonDetailView.CLASSNAME_BACKWALL + "_Right" + e));
  };
  Object.defineProperty(EventDungeonDetailView.prototype, "hasCastleSkin", {
    get: function () {
      switch (this.skinID) {
        case s.DungeonConst.DUNGEON_SKIN_ROBBER_BARON_KING:
        case s.DungeonConst.DUNGEON_SKIN_COW:
          return false;
        default:
          return true;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventDungeonDetailView.prototype, "skinID", {
    get: function () {
      var e = l.CastleModel.specialEventData.getActiveEventByEventId(r.EventConst.EVENTTYPE_DUNGEON);
      if (e) {
        return e.skinID;
      } else {
        return s.DungeonConst.DUNGEON_SKIN_ROBBER_BARON_KING;
      }
    },
    enumerable: true,
    configurable: true
  });
  EventDungeonDetailView.__initialize_static_members = function () {
    EventDungeonDetailView.CLASSNAME_KEEP = "EventDungeon_Keep";
    EventDungeonDetailView.CLASSNAME_BACKWALL = "EventDungeon_BackWall";
    EventDungeonDetailView.CLASSNAME_FRONTWALL = "EventDungeon_FrontWall";
    EventDungeonDetailView.CLASSNAME_GATE = "EventDungeon_Gate";
  };
  return EventDungeonDetailView;
}(c.FightDetailView);
exports.EventDungeonDetailView = u;
a.classImplementsInterfaces(u, "IFightDetailView");
u.__initialize_static_members();