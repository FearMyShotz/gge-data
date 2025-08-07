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
var u = require("./2.js");
var d = require("./1.js");
var p = require("./5.js");
var h = require("./5.js");
var g = require("./3.js");
var C = require("./3.js");
var _ = require("./6.js");
var m = require("./1.js");
var f = require("./889.js");
var O = require("./1228.js");
var E = require("./53.js");
var y = require("./4.js");
var b = require("./27.js");
var D = require("./203.js");
var I = require("./43.js");
var T = require("./149.js");
var v = require("./136.js");
var S = require("./214.js");
var A = require("./235.js");
var L = require("./187.js");
var P = createjs.MovieClip;
var M = createjs.Point;
var R = function (e) {
  function CastleMapobjectInfoComponent(t) {
    var i = e.call(this, new P()) || this;
    i.namePlateColor = 0;
    i.setVO(t);
    return i;
  }
  n.__extends(CastleMapobjectInfoComponent, e);
  CastleMapobjectInfoComponent.prototype.onRollOver = function (t) {
    this.updateTimerTooltips();
    e.prototype.onRollOver.call(this, t);
  };
  CastleMapobjectInfoComponent.prototype.setVO = function (e) {
    this._worldmapObjectVO = e;
    this.updateMapobjectInfo();
  };
  CastleMapobjectInfoComponent.prototype.destroy = function () {
    if (this.namePlate) {
      o.assetsPool.recycle(this.namePlate);
      this.namePlate = null;
    }
    if (this._allianceCrestContainer && this._allianceCrestContainer.children.length) {
      var t = this._allianceCrestContainer.children.shift();
      o.assetsPool.recycle(t);
    }
    e.prototype.destroy.call(this);
  };
  CastleMapobjectInfoComponent.prototype.updateMapobjectInfo = function () {
    o.MovieClipHelper.clearMovieClip(this.nameMC);
    if (this._worldmapObjectVO.ownerInfo) {
      if (this._worldmapObjectVO.hasNameLabel) {
        this.namePlateColor = 0;
        if (this._worldmapObjectVO.isOwnMapobject) {
          this.namePlate = o.assetsPool.obtain(Library.CastleInterfaceElements.Name_Mapobject_Own);
          this.namePlate.castleName_txt.defaultCacheScale = 2;
          this.nameMC.addChild(this.namePlate);
          this.setAllianceRankingIconOnNameLabel();
        } else {
          this.namePlate = o.assetsPool.obtain(Library.CastleInterfaceElements.Name_Mapobject_Generic);
          this.namePlate.castleName_txt.defaultCacheScale = 2;
          this.nameMC.addChild(this.namePlate);
          this.updateNamePlateBgColor();
          this.setAllianceRankingIconOnNameLabel();
        }
        this.setNameOnNameLabel();
        this.setSpyIcon();
        this.setPeaceProtectionIconOnNameLabel();
      } else {
        this.setAllianceStatusIcon();
        this.setSpyIcon();
      }
    }
    if (this._worldmapObjectVO.bookmark) {
      this.setBookmarkIcon();
    } else {
      this.drawAllianceCrest();
    }
    this.drawABGTowerConnections();
  };
  CastleMapobjectInfoComponent.prototype.drawABGTowerConnections = function () {
    if (m.instanceOfClass(this._worldmapObjectVO, "ABGAllianceTowerMapobjectVO")) {
      var e = new P();
      e.x = CastleMapobjectInfoComponent.ABG_TOWER_CONNECTIONS_POS.x;
      e.y = CastleMapobjectInfoComponent.ABG_TOWER_CONNECTIONS_POS.y;
      this.nameMC.addChild(e);
      new w.ABGTowerConnectionsComponent(e, B.ABGTowerConnectionStateComponent.TYPE_MAP, B.ABGTowerConnectionStateComponent.SIZE_MAP, B.ABGTowerConnectionStateComponent.SPACING_MAP).setConnections(this._worldmapObjectVO.connections);
    }
    if (m.instanceOfClass(this._worldmapObjectVO, "CastleMapobjectVO") && E.ABGHelper.isOnABGAndTower) {
      var t = this._worldmapObjectVO.getMinConnectionsAsABGTowerConnection();
      var i = new B.ABGTowerConnectionStateComponent(B.ABGTowerConnectionStateComponent.TYPE_MAP, B.ABGTowerConnectionStateComponent.SIZE_MAP, true);
      i.setConnection(t[0]);
      var n = new P();
      n.addChild(i.disp);
      n.x = CastleMapobjectInfoComponent.ABG_TOWER_CONNECTION_CASTLE_POS.x;
      n.y = CastleMapobjectInfoComponent.ABG_TOWER_CONNECTION_CASTLE_POS.y;
      this.nameMC.addChild(n);
    }
  };
  CastleMapobjectInfoComponent.prototype.updateNamePlateBgColor = function () {
    if (this.namePlate && this.namePlate.bg && this._worldmapObjectVO && !this._worldmapObjectVO.isOwnMapobject && this._worldmapObjectVO.ownerInfo) {
      var e = this.namePlateColor;
      this.namePlateColor = this.getColorByAllianceStatus(this._worldmapObjectVO.ownerInfo.allianceID);
      var t = this.namePlateColor !== e;
      if (t) {
        var i = new d.ColorTransform();
        i.color = this.namePlateColor;
        this.namePlate.bg.useFilters([new createjs.ColorFilter(i.redMultiplier, i.greenMultiplier, i.blueMultiplier, i.alphaMultiplier, i.redOffset, i.greenOffset, i.blueOffset, i.alphaOffset)]);
      }
      return t && e !== 0;
    }
    return false;
  };
  CastleMapobjectInfoComponent.prototype.drawAllianceCrestOn = function (e) {
    return m.instanceOfClass(e, "CapitalMapobjectVO") || m.instanceOfClass(e, "MetropolMapobjectVO") || m.instanceOfClass(e, "CastleMapobjectVO") || m.instanceOfClass(e, "ABGAllianceTowerMapobjectVO");
  };
  CastleMapobjectInfoComponent.prototype.drawAllianceCrest = function () {
    if (this._allianceCrestContainer && this._allianceCrestContainer.parent) {
      o.MovieClipHelper.clearMovieClip(this._allianceCrestContainer);
    }
    if (this.drawAllianceCrestOn(this._worldmapObjectVO) && this._worldmapObjectVO.ownerInfo && this._worldmapObjectVO.ownerInfo.allianceCrestVO && (!m.instanceOfClass(this._worldmapObjectVO, "ABGAllianceTowerMapobjectVO") || this._worldmapObjectVO.ownerInfo.allianceCrestVO != U.ABGAllianceTowerMapobjectVO.DEFAULT_CREST_TOWER)) {
      if (!this._allianceCrestContainer) {
        this._allianceCrestContainer = new P();
        if (m.instanceOfClass(this._worldmapObjectVO, "ABGAllianceTowerMapobjectVO")) {
          this._allianceCrestContainer.x = CastleMapobjectInfoComponent._allianceCrestPositionTower.x;
          this._allianceCrestContainer.y = CastleMapobjectInfoComponent._allianceCrestPositionTower.y;
        } else {
          this._allianceCrestContainer.x = CastleMapobjectInfoComponent._allianceCrestPosition.x;
          this._allianceCrestContainer.y = CastleMapobjectInfoComponent._allianceCrestPosition.y;
        }
      }
      var e = S.AllianceCrestEnum.DEFAULT_CREST_SIMPLE;
      this.nameMC.addChild(this._allianceCrestContainer);
      L.CastleAllianceCrestHelper.setCrestGraphics(this._allianceCrestContainer, this._worldmapObjectVO.ownerInfo.allianceCrestVO, A.AllianceCrestSizeEnum.WORLD_MAP, e);
      CastleMapobjectInfoComponent.setOnClickFunction(this._allianceCrestContainer, this.bindFunction(this.onClickAllianceIcon));
    }
  };
  CastleMapobjectInfoComponent.prototype.setBookmarkIcon = function () {
    var e = this._worldmapObjectVO.bookmark;
    this.bookmark = CastleMapobjectInfoComponent.createBookmarkIcon(e);
    this.bookmark.toolTipText = CastleMapobjectInfoComponent.getBookmarkTooltip(e);
    this.bookmark.x = this._worldmapObjectVO.hasNameLabel ? CastleMapobjectInfoComponent.NAMELABEL_BOOKMARK_ICON_POSITION.x : CastleMapobjectInfoComponent.BOOKMARK_ICON_POSITION.x;
    this.bookmark.y = this._worldmapObjectVO.hasNameLabel ? CastleMapobjectInfoComponent.NAMELABEL_BOOKMARK_ICON_POSITION.y : CastleMapobjectInfoComponent.BOOKMARK_ICON_POSITION.y;
    this.bookmark.scaleX = CastleMapobjectInfoComponent.SCALE_BOOKMARK_ICON;
    this.bookmark.scaleY = CastleMapobjectInfoComponent.SCALE_BOOKMARK_ICON;
    this.bookmark.scaleX = this.bookmark.scaleY /= 2;
    this.nameMC.addChild(this.bookmark);
  };
  CastleMapobjectInfoComponent.prototype.setNameOnNameLabel = function () {
    var e = l.GoodgameTextFieldManager.getInstance().registerTextField(this.namePlate.castleName_txt, new g.TextVO(this._worldmapObjectVO.areaNameString), new u.InternalGGSTextFieldConfigVO(true));
    e.autoFitToBounds = true;
    e.textAlign = r.GGSTextAlign.CENTER;
  };
  CastleMapobjectInfoComponent.prototype.setPeaceProtectionIconOnNameLabel = function () {
    this.namePlate.mc_dove.visible = (this._worldmapObjectVO.ownerInfo.isPeaceProtected || this._worldmapObjectVO.ownerInfo.isNoobProtected) && this._worldmapObjectVO.areaType != h.WorldConst.AREA_TYPE_METROPOL && this._worldmapObjectVO.areaType != h.WorldConst.AREA_TYPE_CAPITAL;
  };
  CastleMapobjectInfoComponent.prototype.setSpyIcon = function () {
    if (y.CastleModel.subscriptionData.isAutoSpyActiveForArea(this._worldmapObjectVO)) {
      (e = new Library.CastleInterfaceElements_Icons.MapobjectSpyIcon_AutoSpy()).scaleX = e.scaleY /= H.CastleWorldmapConst.ZOOM_MAX;
      e.toolTipText = "dialog_openSpyReport_Tooltip";
      e.x = CastleMapobjectInfoComponent.SPY_ICON_POSITION.x;
      e.y = CastleMapobjectInfoComponent.SPY_ICON_POSITION.y;
      CastleMapobjectInfoComponent.setOnClickFunction(e, this.bindFunction(this.onClickSpyIcon));
      this.nameMC.addChild(e);
    } else if (this._worldmapObjectVO.remainingSpyInfoTime > 0) {
      var e;
      (e = new Library.CastleInterfaceElements_Icons.MapobjectSpyIcon()).scaleX = e.scaleY /= H.CastleWorldmapConst.ZOOM_MAX;
      e.toolTipText = "dialog_openSpyReport_Tooltip";
      e.x = CastleMapobjectInfoComponent.SPY_ICON_POSITION.x;
      e.y = CastleMapobjectInfoComponent.SPY_ICON_POSITION.y;
      CastleMapobjectInfoComponent.setOnClickFunction(e, this.bindFunction(this.onClickSpyIcon));
      this.nameMC.addChild(e);
    }
  };
  CastleMapobjectInfoComponent.prototype.setAllianceStatusIcon = function () {
    var e;
    var t = _.int(this._worldmapObjectVO.ownerInfo.allianceID);
    if (this._worldmapObjectVO.isOwnMapobject) {
      (e = new Library.CastleInterfaceElements.AllianceScroll_Own()).toolTipText = "dialog_playerOwnLocation_tooltip";
    } else {
      if (m.instanceOfClass(this._worldmapObjectVO, "FactionInteractiveMapobjectVO") || this._worldmapObjectVO.areaType == h.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP) {
        return;
      }
      if (y.CastleModel.userData.isUserInMyAlliance(this._worldmapObjectVO.ownerInfo)) {
        var i = new Library.CastleInterfaceElements.AllianceScroll_SameAlliance();
        if (i instanceof P) {
          (e = i).toolTipText = "dialog_alliance_AllianceMate_tooltip";
        }
      } else if (t >= 0) {
        switch (y.CastleModel.allianceData.getStatusByAlliance(t)) {
          case p.AllianceConst.DIPLOMACY_REAL_ALLIED:
            var n = new Library.CastleInterfaceElements.AllianceScroll_HardAllied();
            if (n instanceof P) {
              (e = n).toolTipText = "dialog_alliance_infoPact";
            }
            break;
          case p.AllianceConst.DIPLOMACY_SOFT_ALLIED:
            var o = new Library.CastleInterfaceElements.AllianceScroll_SoftAllied();
            if (o instanceof P) {
              (e = o).toolTipText = "dialog_alliance_infoNoAttack";
            }
            break;
          case p.AllianceConst.DIPLOMACY_IN_WAR:
            var a = new Library.CastleInterfaceElements.AllianceScroll_War();
            if (a instanceof P) {
              (e = a).toolTipText = "dialog_alliance_infoInWar";
            }
            break;
          default:
            return;
        }
      }
    }
    if (e != null) {
      e.scaleX = e.scaleY /= H.CastleWorldmapConst.ZOOM_MAX;
      e.x = CastleMapobjectInfoComponent.DIPLOMACY_ICON_POSITION.x;
      e.y = CastleMapobjectInfoComponent.DIPLOMACY_ICON_POSITION.y;
      this.nameMC.addChild(e);
    }
  };
  CastleMapobjectInfoComponent.prototype.setAllianceRankingIconOnNameLabel = function () {
    this.namePlate.mc_searchAlliance.visible = false;
    this.namePlate.mc_rank.visible = false;
    this.namePlate.iconHitArea.toolTipText = null;
    if (this._worldmapObjectVO.ownerInfo.isInAlliance) {
      this.namePlate.mc_rank.visible = true;
      var e = _.int(this._worldmapObjectVO.ownerInfo.allianceRank + 1);
      this.namePlate.mc_rank.icon.gotoAndStop(e);
      this.namePlate.iconHitArea.toolTipText = "dialog_alliance_rank" + V.CastleAllianceData.getTextIDForRank(this._worldmapObjectVO.ownerInfo.allianceRank);
      CastleMapobjectInfoComponent.setOnClickFunction(this.namePlate.iconHitArea, this.bindFunction(this.onClickAllianceIcon));
    } else if (this._worldmapObjectVO.ownerInfo.isSearchingAlliance) {
      this.namePlate.mc_searchAlliance.visible = true;
      if (y.CastleModel.userData.isInAlliance) {
        if (y.CastleModel.userData.canInviteToAlliance) {
          this.namePlate.iconHitArea.toolTipText = "dialog_lookingForAlliance_active_tooltip";
          CastleMapobjectInfoComponent.setOnClickFunction(this.namePlate.iconHitArea, this.bindFunction(this.onClickAllianceSearchIcon));
        } else {
          this.namePlate.iconHitArea.toolTipText = "dialog_lookingForAlliance_active_tooltip_noRights";
        }
      } else {
        this.namePlate.iconHitArea.toolTipText = "dialog_lookingForAlliance_tooltip";
      }
    }
  };
  CastleMapobjectInfoComponent.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (!y.CastleModel.tutorialData.isTutorialActive) {
      var i = G.CastleMovieClipHelper.getFirstMovieClipParent(t.target);
      if (i && i.clickFunction) {
        i.clickFunction();
      }
    }
  };
  CastleMapobjectInfoComponent.prototype.getColorByAllianceStatus = function (e) {
    if (y.CastleModel.userData.isUserInMyAlliance(this._worldmapObjectVO.ownerInfo)) {
      return 7714850;
    }
    switch (y.CastleModel.allianceData.getStatusByAlliance(e)) {
      case p.AllianceConst.DIPLOMACY_NEUTRAL:
        return 15388850;
      case p.AllianceConst.DIPLOMACY_REAL_ALLIED:
        return 15124482;
      case p.AllianceConst.DIPLOMACY_SOFT_ALLIED:
        return 16771289;
      case p.AllianceConst.DIPLOMACY_IN_WAR:
        return 10360577;
      default:
        return 15388850;
    }
  };
  CastleMapobjectInfoComponent.prototype.onClickSpyIcon = function () {
    y.CastleModel.smartfoxClient.sendCommandVO(new O.C2SSpySpyUnits(this._worldmapObjectVO.absAreaPosX, this._worldmapObjectVO.absAreaPosY));
  };
  CastleMapobjectInfoComponent.prototype.onClickAllianceIcon = function () {
    if (y.CastleModel.userData.isInAlliance && y.CastleModel.userData.allianceID == this._worldmapObjectVO.ownerInfo.allianceID) {
      x.CastleDialogHandler.getInstance().registerDefaultDialogs(N.CastleAllianceDialog, new v.CastleAllianceDialogProperties());
    } else {
      x.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(F.CastleAllianceInfoDialog, new T.CastleAllianceInfoDialogProperties(this._worldmapObjectVO.ownerInfo.allianceID), I.CastleDialogConsts.DIALOG_TYPE_SINGLE);
    }
  };
  CastleMapobjectInfoComponent.prototype.onClickAllianceSearchIcon = function () {
    x.CastleDialogHandler.getInstance().registerDefaultDialogs(k.CastleStandardYesNoDialog, new a.BasicStandardYesNoDialogProperties(C.Localize.text("generic_alert_watchout"), C.Localize.text("dialog_allianceInvitationSecurityAlert_desc"), this.bindFunction(this.onInvitePlayerToAlliance)));
  };
  CastleMapobjectInfoComponent.setOnClickFunction = function (e, t) {
    e.clickFunction = t;
  };
  Object.defineProperty(CastleMapobjectInfoComponent.prototype, "nameMC", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleMapobjectInfoComponent.prototype.onInvitePlayerToAlliance = function (e) {
    y.CastleModel.smartfoxClient.sendCommandVO(new f.C2SAllianceInvitePlayerVO(String(this._worldmapObjectVO.ownerInfo.playerID)));
  };
  CastleMapobjectInfoComponent.getBookmarkTooltip = function (e) {
    switch (e.type) {
      case D.EWorldmapBookmarkType.PLAYER_ENEMY:
        return "Bookmarks_worldmap_player_enemy_tooltip";
      case D.EWorldmapBookmarkType.PLAYER_FRIEND:
        return "Bookmarks_worldmap_player_friend_tooltip";
      case D.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK:
        return "Bookmarks_worldmap_alliance_freeTarget_tooltip";
      case D.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER:
        var t = _.int(e.attackOrderDetails.remainingTimeInMilliSeconds);
        return {
          t: "Bookmarks_worldmap_alliance_plannedTarget_tooltip",
          p: [c.TimeStringHelper.getShortTimeString(t, c.TimeStringHelper.ONE_TIME_FORMAT)]
        };
      case D.EWorldmapBookmarkType.ALLIANCE_DEFEND:
        return "Bookmarks_worldmap_alliance_supportTarget_tooltip";
    }
    return null;
  };
  CastleMapobjectInfoComponent.createBookmarkIcon = function (e) {
    switch (e.type) {
      case D.EWorldmapBookmarkType.PLAYER_ENEMY:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_Enemy();
      case D.EWorldmapBookmarkType.PLAYER_FRIEND:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_Friend();
      case D.EWorldmapBookmarkType.ALLIANCE_FREE_ATTACK:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_FreeAttack();
      case D.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_TimedAttack();
      case D.EWorldmapBookmarkType.ALLIANCE_DEFEND:
        return new Library.CastleInterfaceElements_Icons.BookmarkIcon_Support();
    }
    return null;
  };
  CastleMapobjectInfoComponent.prototype.updateTimerTooltips = function () {
    this.updateBookmarkTooltip();
    this.updatePeaceProtectionTooltip();
  };
  CastleMapobjectInfoComponent.prototype.updateBookmarkTooltip = function () {
    if (this.bookmark && this._worldmapObjectVO.bookmark && this._worldmapObjectVO.bookmark.attackOrderDetails) {
      var e = _.int(this._worldmapObjectVO.bookmark.attackOrderDetails.remainingTimeInMilliSeconds);
      var t = c.TimeStringHelper.getShortTimeString(e, c.TimeStringHelper.ONE_TIME_FORMAT);
      if (this._worldmapObjectVO.bookmark.type == D.EWorldmapBookmarkType.ALLIANCE_ATTACK_ORDER) {
        this.bookmark.toolTipText = {
          t: "Bookmarks_worldmap_alliance_plannedTarget_tooltip",
          p: [t]
        };
      }
    }
  };
  CastleMapobjectInfoComponent.prototype.updatePeaceProtectionTooltip = function () {
    if (this.namePlate && this.namePlate.mc_dove.visible) {
      var e = 0;
      if (this._worldmapObjectVO.isOwnMapobject) {
        e = Math.max(y.CastleModel.userData.getRemainingNoobTime(), y.CastleModel.userData.getRemainingPeaceStatusTime());
      } else if (this._worldmapObjectVO.ownerInfo) {
        e = Math.max(this._worldmapObjectVO.ownerInfo.remainingPeaceTime, this._worldmapObjectVO.ownerInfo.remainingNoobTime);
      }
      if (e < 0) {
        this.namePlate.mc_dove.toolTipText = "castleHasCooldown_noTimeLimit";
      } else {
        var t = b.CastleTimeStringHelper.getCantAttackTimeString(e);
        this.namePlate.mc_dove.toolTipText = {
          t: this._worldmapObjectVO.isOwnMapobject ? "dialog_peaceProtection_active_tooltip" : "dialog_attackCooldown_tooltip",
          p: [t]
        };
      }
    }
  };
  CastleMapobjectInfoComponent.__initialize_static_members = function () {
    CastleMapobjectInfoComponent.SPY_ICON_POSITION = new M(40, 50);
    CastleMapobjectInfoComponent.DIPLOMACY_ICON_POSITION = new M(30, 40);
    CastleMapobjectInfoComponent.NAMELABEL_BOOKMARK_ICON_POSITION = new M(-20, 50);
    CastleMapobjectInfoComponent.BOOKMARK_ICON_POSITION = new M(10, 50);
    CastleMapobjectInfoComponent._allianceCrestPosition = new M(-20, 50);
    CastleMapobjectInfoComponent._allianceCrestPositionTower = new M(-25, 40);
    CastleMapobjectInfoComponent.ABG_TOWER_CONNECTIONS_POS = new M(-25, 73);
    CastleMapobjectInfoComponent.ABG_TOWER_CONNECTION_CASTLE_POS = new M(95, 45);
  };
  CastleMapobjectInfoComponent.SCALE_BOOKMARK_ICON = 0.8;
  return CastleMapobjectInfoComponent;
}(s.FlashUIComponent);
exports.CastleMapobjectInfoComponent = R;
var V = require("./317.js");
var x = require("./9.js");
var w = require("./704.js");
var B = require("./424.js");
var F = require("./132.js");
var N = require("./125.js");
var k = require("./151.js");
var U = require("./882.js");
var G = require("./41.js");
var H = require("./276.js");
R.__initialize_static_members();