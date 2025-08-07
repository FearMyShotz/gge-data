Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = createjs.MovieClip;
var s = createjs.MouseEvent;
var r = createjs.Point;
var l = require("./81.js");
var c = require("./359.js");
var u = require("./355.js");
var d = require("./2.js");
var p = require("./85.js");
var h = require("./5.js");
var g = require("./4.js");
var C = require("./3.js");
var _ = require("./41.js");
var m = require("./405.js");
var f = require("./155.js");
var O = require("./25.js");
var E = require("./31.js");
var y = require("./52.js");
var b = require("./19.js");
var D = function (e) {
  function RewardHubDialogItem() {
    return e !== null && e.apply(this, arguments) || this;
  }
  n.__extends(RewardHubDialogItem, e);
  RewardHubDialogItem.prototype.initLoaded = function () {
    e.prototype.initLoaded.call(this);
    this.itemMc.actLikeButton = true;
    this.itemMc.mc_down.mouseEnabled = false;
    this.itemMc.mc_hover.mouseEnabled = false;
    this.itemMc.mc_item1.mc_rank.toolTipText = "rank";
    this.itemMc.mc_item1.mc_allianceRank.toolTipText = "rank";
    this.itemMc.mc_item1.mc_globalRank.toolTipText = "rank";
    this.itemMc.mc_item0.mc_rank.toolTipText = "rank";
    this.itemMc.mc_item0.mc_allianceRank.toolTipText = "rank";
    this.itemMc.mc_item0.mc_globalRank.toolTipText = "rank";
  };
  RewardHubDialogItem.prototype.fill = function () {
    this.setDownState(false);
    this.setMouseOverState(false);
    if (this.mainEventID == h.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
      d.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_title, new C.LocalizedTextVO("dialog_seasonLeague_HUD_name"));
    } else {
      d.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_title, new C.LocalizedTextVO("event_title_" + this.mainEventID));
    }
    d.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.txt_copy, new C.LocalizedTextVO(this.getSubTitle()));
    d.MovieClipHelper.clearMovieClip(this.itemMc.mc_event);
    this.itemMc.mc_event.addChild(u.EventIconHelper.createEventIconByEventID(this.mainEventID, new r(50, 50), false));
    d.MovieClipHelper.clearMovieClip(this.itemMc.mc_subEvent);
    if (this.mainEventID == h.EventConst.EVENTTYPE_KINGDOMS_LEAGUE) {
      if (this.subEventID > 0) {
        this.itemMc.mc_subEvent.addChild(u.EventIconHelper.createEventIconByEventID(this.subEventID, new r(20, 20), false));
      } else {
        var e = new (o.getDefinitionByName("Icon_Promotion"))();
        _.CastleMovieClipHelper.scaleWithAntiAliasing(e, 20, 20);
        this.itemMc.mc_subEvent.addChild(e);
      }
    }
    this.fillItem1();
    this.fillItem2();
  };
  RewardHubDialogItem.prototype.fillItem1 = function () {
    d.MovieClipHelper.clearMovieClip(this.itemMc.mc_item0.mc_placeholder);
    this.itemMc.mc_item0.mc_globalRank.visible = this.showRank && this.isGlobalRank;
    this.itemMc.mc_item0.mc_rank.visible = this.showRank && !this.isGlobalRank;
    this.itemMc.mc_item0.mc_allianceRank.visible = false;
    d.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_item0.txt_value, new p.CastleLocalizedNumberVO(this.rank)).visible = this.showRank;
    if (!this.showPoints) {
      var e = new a();
      this._promotionIcon = new c.SeasonLeaguePromotionIconComponent(e, c.SeasonLeaguePromotionIconComponent.TYPE_SMALL, new r(50, 50));
      this._promotionIcon.updateWithNewVO(this.promotionVO);
      this._promotionIcon.setVisibility(!!this.promotionVO);
      this.itemMc.mc_item1.mc_placeholder.addChild(e);
    }
  };
  RewardHubDialogItem.prototype.fillItem2 = function () {
    var e;
    d.MovieClipHelper.clearMovieClip(this.itemMc.mc_item1.mc_placeholder);
    this.itemMc.mc_item1.mc_rank.visible = false;
    this.itemMc.mc_item1.mc_allianceRank.visible = false;
    this.itemMc.mc_item1.mc_globalRank.visible = false;
    d.GoodgameTextFieldManager.getInstance().registerTextField(this.itemMc.mc_item1.txt_value, new p.CastleLocalizedNumberVO(this.points)).visible = this.showPoints;
    if (this.showPoints) {
      var t = this.subEventID > 0 ? this.subEventID : this.mainEventID;
      e = this.getPointsIcon(t);
    }
    this.itemMc.mc_item1.mc_placeholder.addChild(e);
  };
  RewardHubDialogItem.prototype.getPointsIcon = function (e) {
    var t = new r(30, 30);
    switch (e) {
      case h.EventConst.EVENTTYPE_ALIEN_INVASION_ALLIANCE:
      case h.EventConst.EVENTTYPE_RED_ALIEN_INVASION_ALLIANCE:
        (n = new Library.CastleInterfaceElements.Icon_Fame()).toolTipText = "dialog_fame_fame";
        break;
      case h.EventConst.EVENTTYPE_FACTION_INVASION:
        (n = new Library.CastleInterfaceElements_Icons.Icon_GallantryPoints()).toolTipText = "dialog_berimond_nobilityPoints";
        break;
      case h.EventConst.EVENTTYPE_DONATION:
        (n = u.EventIconHelper.createEventIconByEventID(this.mainEventID, t, false)).toolTipText = "tooltip_rankingGlobal_points";
        break;
      case h.EventConst.EVENTTYPE_LONGTERM_POINT_EVENT:
        (n = u.EventIconHelper.createEventIconByEventID(this.mainEventID, t, false)).toolTipText = "dialog_longPointsEvent_seasonalPoints";
    }
    if (n) {
      n.mouseChildren = false;
      _.CastleMovieClipHelper.scaleWithAntiAliasing(n, t.x, t.y);
      return n;
    }
    var i;
    var n = new a();
    var o = new b.CollectableRenderOptions(b.CollectableRenderOptions.SET_ICON, t);
    o.tooltip.useAmount = false;
    switch (e) {
      case h.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE:
        i = new f.CollectableItemGenericCurrencyVO(y.ClientConstCurrency.ID_KHAN_TABLET);
        break;
      case h.EventConst.EVENTTYPE_SAMURAI_INVASION:
      case h.EventConst.EVENTTYPE_SAMURAI_ALIEN_INVASION:
        i = new f.CollectableItemGenericCurrencyVO(y.ClientConstCurrency.ID_SAMURAI_TOKEN);
    }
    if (i) {
      O.CollectableRenderHelper.displaySingleItem(new E.CollectableRenderClips().addIconMc(n), i, o);
      return n;
    } else {
      return u.EventIconHelper.createEventIconByEventID(e, t, false);
    }
  };
  Object.defineProperty(RewardHubDialogItem.prototype, "showPoints", {
    get: function () {
      return this.showRank;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "showRank", {
    get: function () {
      return !this.promotionVO;
    },
    enumerable: true,
    configurable: true
  });
  RewardHubDialogItem.prototype.getSubTitle = function () {
    if (this.showPoints) {
      return "dialog_rewardHub_eventEndReward";
    } else {
      return "dialog_rewardHub_promotionReward";
    }
  };
  RewardHubDialogItem.prototype.addEventListener = function () {
    e.prototype.addEventListener.call(this);
    this.itemMc.addEventListener(s.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.itemMc.addEventListener(s.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  RewardHubDialogItem.prototype.removeEventListener = function () {
    this.itemMc.removeEventListener(s.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.itemMc.removeEventListener(s.MOUSE_UP, this.bindFunction(this.onMouseUp));
    e.prototype.removeEventListener.call(this);
  };
  RewardHubDialogItem.prototype.onMouseDown = function (e) {
    this.setDownState(true);
    this.setMouseOverState(false);
  };
  RewardHubDialogItem.prototype.onMouseUp = function (e) {
    this.setDownState(false);
    this.setMouseOverState(true);
  };
  RewardHubDialogItem.prototype.onRollOver = function (t) {
    e.prototype.onRollOver.call(this, t);
    this.setMouseOverState(true);
    this.setDownState(false);
  };
  RewardHubDialogItem.prototype.onRollOut = function (t) {
    e.prototype.onRollOut.call(this, t);
    this.setMouseOverState(false);
    this.setDownState(false);
  };
  RewardHubDialogItem.prototype.setDownState = function (e) {
    this.itemMc.mc_down.visible = e;
  };
  RewardHubDialogItem.prototype.setMouseOverState = function (e) {
    this.itemMc.mc_hover.visible = e;
  };
  Object.defineProperty(RewardHubDialogItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  RewardHubDialogItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    m.CastlePopUpHelper.displayPopUp(this.vo.popUpId, this.vo.popUpData);
  };
  Object.defineProperty(RewardHubDialogItem.prototype, "promotionVO", {
    get: function () {
      return g.CastleModel.seasonLeagueData.xml.getPromotion(this.promotionID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "promotionID", {
    get: function () {
      return this.vo.promotionID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "mainEventID", {
    get: function () {
      return this.vo.mainEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "subEventID", {
    get: function () {
      return this.vo.subEventID;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "rank", {
    get: function () {
      if (this.vo.counters[0]) {
        return this.vo.counters[0];
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "isGlobalRank", {
    get: function () {
      return this.vo.isGlobalRanking;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "points", {
    get: function () {
      if (this.vo.counters[1]) {
        return this.vo.counters[1];
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RewardHubDialogItem.prototype, "vo", {
    get: function () {
      return this.data;
    },
    enumerable: true,
    configurable: true
  });
  return RewardHubDialogItem;
}(l.AInfiniteScrollListItem);
exports.RewardHubDialogItem = D;
o.classImplementsInterfaces(D, "ICollectableRendererList");