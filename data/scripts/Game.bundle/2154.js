Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./1.js");
var s = require("./5.js");
var r = require("./5.js");
var l = require("./5.js");
var c = require("./5.js");
var u = require("./6.js");
var d = require("./148.js");
var p = require("./4.js");
var h = require("./162.js");
var g = function (e) {
  function EventTreasurmapDetailView(t, i, n, o) {
    return e.call(this, t, i, n, o) || this;
  }
  n.__extends(EventTreasurmapDetailView, e);
  EventTreasurmapDetailView.prototype.getBackgroundClassName = function () {
    switch (this.backgroundAssetEventID) {
      case s.EventConst.EVENTTYPE_CRUSADE_THORNKING:
      case s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
      case s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        if (this.tmapNode.isVillage) {
          return "Castle_Landscape_Event" + this.backgroundAssetEventID + "_Village";
        } else if (this.tmapNode.isEndNode) {
          return "Castle_Landscape_Event" + this.backgroundAssetEventID + "_Endnode";
        } else {
          return "Castle_Landscape_Event" + this.backgroundAssetEventID + "_Dungeon";
        }
      default:
        var e = "Castle_Landscape_";
        switch (p.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID) {
          case l.WorldIce.KINGDOM_ID:
            e += "Icecream";
            break;
          case r.WorldDessert.KINGDOM_ID:
            e += "Dessert";
            break;
          case c.WorldVolcano.KINGDOM_ID:
            e += "Volcano";
            break;
          default:
            e += "Classic_Dungeon";
        }
        return e;
    }
  };
  Object.defineProperty(EventTreasurmapDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      switch (this.tmapNode.eventID) {
        case s.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        case s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        case s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          if (this.tmapNode.isVillage) {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Village_Event" + this.tmapNode.eventID);
          } else if (this.tmapNode.isEndNode) {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Endnode_Event" + this.tmapNode.eventID);
          } else if (this.tmapNode.isBridgeDungeon) {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Bridgedungeon_Event" + this.tmapNode.eventID);
          } else if (this.tmapNode.isMoralBooster) {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Moralbooster_Event" + this.tmapNode.eventID);
          } else {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_Event" + this.tmapNode.eventID);
          }
        default:
          if (this.tmapNode.mapID == 7) {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Castle");
          } else {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Dungeon_Classic_Level" + this._detailDrawAble.wallLevel);
          }
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.FightDetailView.prototype, "assetCastleFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventTreasurmapDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      switch (this.backgroundAssetEventID) {
        case s.EventConst.EVENTTYPE_CRUSADE_THORNKING:
        case s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
        case s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
          if (this.tmapNode.isVillage) {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_Event" + this.backgroundAssetEventID + "_Village");
          } else if (this.tmapNode.isEndNode) {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_Event" + this.backgroundAssetEventID + "_Endnode");
          } else {
            return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl("DetailView_Background_Event" + this.backgroundAssetEventID + "_Dungeon");
          }
        default:
          var e = "DetailView_Background_";
          switch (p.CastleModel.treasureHuntData.treasureHuntMapVO.kingdomID) {
            case l.WorldIce.KINGDOM_ID:
              e += "Icecream";
              break;
            case r.WorldDessert.KINGDOM_ID:
              e += "Dessert";
              break;
            case c.WorldVolcano.KINGDOM_ID:
              e += "Volcano";
              break;
            default:
              e += "Classic";
          }
          return o.BasicModel.basicLoaderData.getVersionedItemAssetUrl(e);
      }
    },
    set: function (e) {
      Object.getOwnPropertyDescriptor(h.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, e);
    },
    enumerable: true,
    configurable: true
  });
  EventTreasurmapDetailView.prototype.drawCastleVO = function () {
    this.initLayer();
    this._castleLayer.y = this.tmapNode.eventID != s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD ? 15 : 0;
    this._castleLayer.x = this.tmapNode.eventID != s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD ? -7 : 0;
    switch (this.tmapNode.eventID) {
      case s.EventConst.EVENTTYPE_CRUSADE_THORNKING:
      case s.EventConst.EVENTTYPE_CRUSADE_SEAQUEEN:
      case s.EventConst.EVENTTYPE_CRUSADE_UNDERWORLD:
        if (this.tmapNode.isVillage) {
          this.drawEventNode("Village");
        } else if (this.tmapNode.isEndNode) {
          this.drawEventNode("Endnode");
        } else if (this.tmapNode.isBridgeDungeon) {
          this.drawEventNode("Bridgedungeon");
        } else if (this.tmapNode.isMoralBooster) {
          this.drawEventNode("Moralbooster");
        } else {
          this.drawEventNode("Dungeon");
        }
        break;
      default:
        if (this.tmapNode.mapID == 7) {
          this.drawFakeCastle();
        } else {
          this.drawDungeon();
        }
    }
  };
  EventTreasurmapDetailView.prototype.drawFakeCastle = function () {
    this.tmapNode.crestVO = p.CastleModel.otherPlayerData.getOwnerInfoVO(d.ClientConstNPCs.NPC_ID_CLASSIC_DUNGEONS_FIRST_ID).crest;
    this._layerKeep.addChild(this.getMovieClipByName("CastlePart_Keep_Level1"));
    this._layerLeft.addChild(this.getMovieClipByName("CastleParts_BackWall_Left_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastleParts_Tower_Left_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastleParts_FrontWall_Left_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastleParts_Tower_Right_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastleParts_FrontWall_Right_Level1"));
    this._layerMiddle.addChild(this.getMovieClipByName("CastlePart_Gate_Level1"));
    this._layerRight.addChild(this.getMovieClipByName("CastleParts_BackWall_Right_Level1"));
  };
  EventTreasurmapDetailView.prototype.drawEventNode = function (e) {
    this._layerBackground.addChild(this.getMovieClipByName(e + "_Shadow_Event" + this.tmapNode.eventID));
    this._layerKeep.addChild(this.getMovieClipByName(e + "_Keep_Event" + this.tmapNode.eventID));
    this._layerLeft.addChild(this.getMovieClipByName(e + "_BackWall_Left_Event" + this.tmapNode.eventID));
    this._layerMiddle.addChild(this.getMovieClipByName(e + "_FrontWall_Left_Event" + this.tmapNode.eventID));
    this._layerMiddle.addChild(this.getMovieClipByName(e + "_FrontWall_Right_Event" + this.tmapNode.eventID));
    this._layerMiddle.addChild(this.getMovieClipByName(e + "_Gate_Event" + this.tmapNode.eventID));
    this._layerRight.addChild(this.getMovieClipByName(e + "_BackWall_Right_Event" + this.tmapNode.eventID));
  };
  EventTreasurmapDetailView.prototype.drawDungeon = function () {
    var e = this.backgroundAssetEventID == 1 ? "_Icecream" : "_Classic";
    var t = u.int(this._detailDrawAble.wallLevel);
    this.initLayer();
    this._castleLayer.y = 15;
    this._castleLayer.x = -7;
    this._layerBackground.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_SHADOW + t + e));
    this._layerKeep.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_KEEP + t + e));
    this._layerLeft.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_BACKWALL + "_Left_Level" + t + e));
    this._layerMiddle.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_FRONTWALL + "_Left_Level" + t + e));
    this._layerMiddle.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_FRONTWALL + "_Right_Level" + t + e));
    this._layerMiddle.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_GATE + t + e));
    this._layerMiddle.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_DETAIL + t + e));
    this._layerRight.addChild(this.getMovieClipByName(EventTreasurmapDetailView.CLASSNAME_BACKWALL + "_Right_Level" + t + e));
  };
  Object.defineProperty(EventTreasurmapDetailView.prototype, "tmapNode", {
    get: function () {
      return this._detailDrawAble;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(EventTreasurmapDetailView.prototype, "backgroundAssetEventID", {
    get: function () {
      return this.tmapNode.eventID;
    },
    enumerable: true,
    configurable: true
  });
  EventTreasurmapDetailView.CLASSNAME_KEEP = "Dungeon_Keep_Level";
  EventTreasurmapDetailView.CLASSNAME_BACKWALL = "Dungeon_BackWall";
  EventTreasurmapDetailView.CLASSNAME_FRONTWALL = "Dungeon_FrontWall";
  EventTreasurmapDetailView.CLASSNAME_GATE = "Dungeon_Gate_Level";
  EventTreasurmapDetailView.CLASSNAME_DETAIL = "Dungeon_Detail_Level";
  EventTreasurmapDetailView.CLASSNAME_SHADOW = "Dungeon_Shadow_Level";
  return EventTreasurmapDetailView;
}(h.FightDetailView);
exports.EventTreasurmapDetailView = g;
a.classImplementsInterfaces(g, "IFightDetailView");