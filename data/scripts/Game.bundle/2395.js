Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./2.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./1.js");
var d = require("./5.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./5.js");
var C = require("./5.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./3.js");
var O = require("./44.js");
var E = require("./4.js");
var y = require("./222.js");
var b = require("./8.js");
var D = require("./517.js");
var I = createjs.MovieClip;
var T = createjs.Point;
var v = function (e) {
  function CastlePlayerInfoCastleListEntry(t) {
    var i = this;
    i.displayedFrame = 0;
    i._castleButton = new I();
    CONSTRUCTOR_HACK;
    i = e.call(this, t) || this;
    b.ButtonHelper.initBasicButtons([t.btn_bookmark, t.btn_jumptTo]);
    i._bookmarkButton = new L.ButtonBookmarkComponent(t.btn_bookmark.basicButton);
    return i;
  }
  n.__extends(CastlePlayerInfoCastleListEntry, e);
  CastlePlayerInfoCastleListEntry.prototype.customFillItem = function () {
    e.prototype.customFillItem.call(this);
    this.switchFrames();
    this.setNameAndDistance();
    this.setJumpToButton();
    this.setBookmarkButton();
  };
  CastlePlayerInfoCastleListEntry.prototype.switchFrames = function () {
    this.displayedFrame = CastlePlayerInfoCastleListEntry.CASTLE_FRAME;
    if (M.instanceOfClass(this.castleVO, "VillageMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.VILLAGE_FRAME;
    } else if (M.instanceOfClass(this.castleVO, "KingstowerMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.TOWER_FRAME;
    } else if (M.instanceOfClass(this.castleVO, "MonumentMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.MONUMENT_FRAME;
    } else if (M.instanceOfClass(this.castleVO, "LaboratoryMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.LABORATORY_FRAME;
    } else if (M.instanceOfClass(this.castleVO, "ABGAllianceTowerMapobjectVO")) {
      this.displayedFrame = CastlePlayerInfoCastleListEntry.OTHER_FRAME;
    }
    this.setCastleIcon(this.displayedFrame);
    this.handleKingdomIcon();
    this.dispItem.btn_jumptTo.gotoAndStop(this.displayedFrame);
  };
  CastlePlayerInfoCastleListEntry.prototype.setCastleIcon = function (e) {
    s.MovieClipHelper.clearMovieClip(this.dispItem.mc_leftIcons.mc_holder);
    var t;
    var i = this.castleVO;
    t = E.CastleModel.userData.userLevel < E.CastleModel.kingdomData.getKingdomVOByID(i.kingdomID).minLevel ? "errorCode_12" : e == CastlePlayerInfoCastleListEntry.CASTLE_FRAME ? this.isJumpToButtonEnabled ? "panel_action_jumpTo" : i.ownerInfo.isRuin && M.instanceOfClass(i, "CastleMapobjectVO") ? "isRuin" : "not_unlocked" : "panel_action_jumpTo";
    var n = e == CastlePlayerInfoCastleListEntry.CASTLE_FRAME ? CastlePlayerInfoCastleListEntry.ICON_SIZE_CASTLES : CastlePlayerInfoCastleListEntry.ICON_SIZE_VILLAGE;
    this._castleButton = P.WorldmapObjectIconHelper.drawMapObjectIcon(i, n, true, false, this.isJumpToButtonEnabled, t);
    this.dispItem.mc_leftIcons.mc_holder.addChild(this._castleButton);
  };
  CastlePlayerInfoCastleListEntry.prototype.handleKingdomIcon = function () {
    this.dispItem.mc_leftIcons.mc_kingdomIcon.mouseChildren = false;
    D.KingdomCrestsAndSymbolsHelper.addSymbolToMC(this.dispItem.mc_leftIcons.mc_kingdomIcon, null, this.castleVO.kingdomID, new T(32, 32), 6178616);
    switch (this.castleVO.kingdomID) {
      case C.WorldIce.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Icecream";
        break;
      case d.WorldDessert.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Dessert";
        break;
      case p.WorldVolcano.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Volcano";
        break;
      case g.WorldIsland.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Eiland";
        break;
      case h.FactionConst.KINGDOM_ID:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = "kingdomName_Faction";
        break;
      default:
        this.dispItem.mc_leftIcons.mc_kingdomIcon.toolTipText = O.SpecialServerHelper.checkTextIDForSkinText("kingdomName_Classic");
    }
  };
  CastlePlayerInfoCastleListEntry.prototype.setNameAndDistance = function () {
    var e = this.castleVO;
    var t = E.CastleModel.userData.castleList.getMainCastleByKingdomID(e.kingdomID);
    if (t) {
      var i = Math.round(y.MapHelper.getShortestDistance(new T(e.absAreaPosX, e.absAreaPosY), new T(t.absAreaPosX, t.absAreaPosY)));
      this.textFieldManager.registerTextField(this.dispItem.txt_distance, new m.LocalizedNumberVO(i), new o.InternalGGSTextFieldConfigVO(true));
    } else {
      this.textFieldManager.registerTextField(this.dispItem.txt_distance, new _.TextVO("-"), new o.InternalGGSTextFieldConfigVO(true));
    }
    this.textFieldManager.registerTextField(this.dispItem.txt_name, new _.TextVO(e.areaNameString), new o.InternalGGSTextFieldConfigVO(true));
    this.dispItem.icon_distance.toolTipText = "distance";
  };
  CastlePlayerInfoCastleListEntry.prototype.setBookmarkButton = function () {
    if (this.isJumpToButtonEnabled) {
      this.disp.btn_bookmark.toolTipText = "ringmenu_markLocation";
      this._bookmarkButton.targetWMO = this.castleVO;
      this._bookmarkButton.initBookmarkButton(true);
    } else {
      b.ButtonHelper.enableButton(this.disp.btn_bookmark, false);
      this.disp.btn_bookmark.toolTipText = this.getJumpToButtonToolTip();
    }
  };
  CastlePlayerInfoCastleListEntry.prototype.setJumpToButton = function () {
    b.ButtonHelper.enableButton(this.dispItem.btn_jumptTo, this.isJumpToButtonEnabled);
    this.dispItem.btn_jumptTo.toolTipText = this.getJumpToButtonToolTip();
  };
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "isJumpToButtonEnabled", {
    get: function () {
      return (!this.castleVO.ownerInfo.isRuin || !M.instanceOfClass(this.castleVO, "CastleMapobjectVO")) && E.CastleModel.userData.castleList.hasCastleInKingdom(this.castleVO.kingdomID) && !E.CastleModel.tutorialData.isTutorialActive;
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoCastleListEntry.prototype.getJumpToButtonToolTip = function () {
    if (this.castleVO.ownerInfo.isRuin) {
      return "isRuin";
    } else if (E.CastleModel.userData.castleList.hasCastleInKingdom(this.castleVO.kingdomID)) {
      if (this.displayedFrame == CastlePlayerInfoCastleListEntry.CASTLE_FRAME) {
        return "ringmenu_visit_castle";
      } else {
        return "panel_action_jumpTo";
      }
    } else {
      return "not_unlocked";
    }
  };
  CastlePlayerInfoCastleListEntry.prototype.villageIconToolTip = function () {
    return f.Localize.text(l.GenericTextIds.VALUE_COORDS, [this.castleVO.absAreaPosX, this.castleVO.absAreaPosY]);
  };
  CastlePlayerInfoCastleListEntry.prototype.onMouseClick = function (t) {
    if (b.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dispItem.btn_jumptTo:
          A.CastleLayoutManager.getInstance().hideAllDialogs();
          if (this.displayedFrame == CastlePlayerInfoCastleListEntry.VILLAGE_FRAME || M.instanceOfClass(this.castleVO, "KingstowerMapobjectVO") || M.instanceOfClass(this.castleVO, "UpgradableLandmarkMapobjectVO") || this.displayedFrame == CastlePlayerInfoCastleListEntry.OTHER_FRAME) {
            c.CommandController.instance.executeCommand(S.IngameClientCommands.SWITCH_TO_WORLDMAP_COMMAND, this.castleVO);
          } else {
            c.CommandController.instance.executeCommand(S.IngameClientCommands.JOIN_AREA_WITHOUT_POSITION_SAVE_COMMAND, this.castleVO);
          }
          break;
        case this.dispItem.btn_bookmark:
          this._bookmarkButton.onClick();
      }
      e.prototype.onMouseClick.call(this, t);
    }
  };
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "layoutManager", {
    get: function () {
      return A.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "dispItem", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "castleVO", {
    get: function () {
      return this._scrollItemVO.worldMapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastlePlayerInfoCastleListEntry.prototype, "textFieldManager", {
    get: function () {
      return r.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastlePlayerInfoCastleListEntry.__initialize_static_members = function () {
    CastlePlayerInfoCastleListEntry.ICON_SIZE_VILLAGE = new T(38, 38);
    CastlePlayerInfoCastleListEntry.ICON_SIZE_CASTLES = new T(41, 41);
  };
  CastlePlayerInfoCastleListEntry.CASTLE_FRAME = 1;
  CastlePlayerInfoCastleListEntry.VILLAGE_FRAME = 2;
  CastlePlayerInfoCastleListEntry.TOWER_FRAME = 3;
  CastlePlayerInfoCastleListEntry.MONUMENT_FRAME = 4;
  CastlePlayerInfoCastleListEntry.LABORATORY_FRAME = 5;
  CastlePlayerInfoCastleListEntry.OTHER_FRAME = 6;
  return CastlePlayerInfoCastleListEntry;
}(a.ScrollItem);
exports.CastlePlayerInfoCastleListEntry = v;
u.classImplementsInterfaces(v, "MovieClip");
var S = require("./29.js");
var A = require("./17.js");
var L = require("./1354.js");
var P = require("./70.js");
var M = require("./1.js");
v.__initialize_static_members();