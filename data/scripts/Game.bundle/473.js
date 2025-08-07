Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./5.js");
var a = require("./1.js");
var s = require("./18.js");
var r = require("./91.js");
var l = require("./131.js");
var c = require("./1820.js");
var u = require("./3928.js");
var d = require("./3933.js");
var p = require("./3934.js");
var h = require("./3935.js");
var g = require("./1119.js");
var C = createjs.MovieClip;
var _ = createjs.Container;
var m = function (e) {
  function CastleStatusPanel(t = null) {
    var i = e.call(this, t || new _()) || this;
    i._panel = i.disp;
    return i;
  }
  n.__extends(CastleStatusPanel, e);
  CastleStatusPanel.prototype.initComponents = function () {
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new se.StatusIconLastManStanding(o.FactionConst.BLUE_FACTION));
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new se.StatusIconLastManStanding(o.FactionConst.RED_FACTION));
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new Ce.StatusIconRepairAll());
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new W.StatusIconActivityBonusComponent());
    this._bars[CastleStatusPanel.BAR_RIGHT].addIcon(new ne.StatusIconGlobalEffectEvent());
    this._bars[CastleStatusPanel.BAR_RIGHT_2].addIcon(new Y.StatusIconStartupLoginBonusComponent());
    this._bars[CastleStatusPanel.BAR_LEFT].addIcon(new L.StatusIconAttackWarnings());
    this._bars[CastleStatusPanel.BAR_LEFT].addIcon(new K.StatusIconAdvisorAttack());
    this._bars[CastleStatusPanel.BAR_LEFT_2].addIcon(new H.StatusIconOpenGate());
    this._bars[CastleStatusPanel.BAR_LEFT_2].addIcon(new G.StatusIconNoobProtection());
    this._bars[CastleStatusPanel.BAR_LEFT_2].addIcon(new j.StatusIconPeaceProtection());
    this._bars[CastleStatusPanel.BAR_LEFT_2].addIcon(new U.StatusIconFactionProtection());
    this._bars[CastleStatusPanel.BAR_LEFT_3].addIcon(new J.StatusIconCapEyecatcher());
    this._bars[CastleStatusPanel.BAR_LEFT_3].addIcon(new ye.StatusIconWebshop());
    this._bars[CastleStatusPanel.BAR_LEFT_3].addIcon(new Q.StatusIconAllianceTeaserComponent());
    this._bars[CastleStatusPanel.BAR_LEFT_3].addIcon(new z.StatusIconAllianceAction());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new ce.StatusIconOfferHub());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new R.StatusIconDynamicOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new x.StatusIconPrimeAlliBonus());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new M.StatusIconAlliPaymentBonus());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new B.StatusIconSpecialIngameOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new F.StatusIconSpecialOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new N.StatusIconTimelessSpecialOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new ue.StatusIconPaymentReward());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new Ee.StatusIconTieredPaymentReward());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new ge.StatusIconReactivationPaymentRewardEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new w.StatusIconPrimeTimeOffer());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new v.StatusIconPrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new A.StatusIconUnitPrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new I.StatusIconEquipmentEnhancerPrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new T.StatusIconEventPackagePrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new pe.StatusIconPrimeSaleReviveAllEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new k.StatusIconWorldCup());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new V.StatusIconGoodgamesGift());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new de.StatusIconPersonalFameBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new te.StatusIconFameBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new ae.StatusIconKhanTabletBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new he.StatusIconRageBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new oe.StatusIconKhanMedalBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new _e.StatusIconSamuraiBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new X.StatusIconAllianceCoinBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new O.StatusIconBoosterSale());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new y.StatusIconSeasonPassSale());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new E.StatusIconBoosterSaleLabeled());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new be.StatusIconXPBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new ie.StatusIconGallantryBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new De.StatusIconFactionInvasionBooster());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new b.StatusIconShoppingCart());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new S.StatusIconRelicEnchanterPrimeSaleEvent());
    this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].addIcon(new le.StatusIconMailGiftComponent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new ce.StatusIconOfferHub());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new $.StatusIconEilandRanking());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new Oe.StatusIconTemporaryServerEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new q.StatusIconAllianceBattleGroundEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new fe.StatusIconSeasonLeagueEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new Z.StatusIconCollectorEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new ee.StatusIconFactionEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new me.StatusIconSeasonEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new re.StatusIconLeaveEvent());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new d.StatusIconSeasonGacha_Christmas());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new p.StatusIconSeasonGacha_Easter());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new h.StatusIconSeasonGacha_Summer());
    this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].addIcon(new u.StatusIconSeasonGacha_Anniversary());
    this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].addIcon(new D.StatusIconDailyQuest());
  };
  CastleStatusPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.dispToCache.tickEnabled = true;
    this._bars = [new c.CastleStatusBar(g.StatusBarExpansionDirectionEnum.EXPAND_LEFT, true), new c.CastleStatusBar(g.StatusBarExpansionDirectionEnum.EXPAND_DOWN), new c.CastleStatusBar(g.StatusBarExpansionDirectionEnum.EXPAND_RIGHT), new c.CastleStatusBar(g.StatusBarExpansionDirectionEnum.EXPAND_DOWN), new c.CastleStatusBar(g.StatusBarExpansionDirectionEnum.EXPAND_RIGHT), new P.CastleOfferHubStatusBar("events"), new P.CastleOfferHubStatusBar("offersOverview"), new c.CastleStatusBar(g.StatusBarExpansionDirectionEnum.EXPAND_LEFT)];
    if (this._bars != null) {
      for (var t = 0, i = this._bars; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          this._panel.addChild(n.disp);
        }
      }
    }
    this.repositioningBars();
    this.controller.addEventListener(r.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.initComponents();
  };
  CastleStatusPanel.prototype.destroy = function () {
    for (this.controller.removeEventListener(r.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState)); this._panel.numChildren > 0;) {
      this._panel.removeChildAt(0);
    }
    if (this._bars != null) {
      for (var t = 0, i = this._bars; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.dispose();
        }
      }
    }
    e.prototype.destroy.call(this);
  };
  CastleStatusPanel.prototype.onChangeLayoutState = function (e = null) {
    if (this._bars != null) {
      for (var t = 0, i = this._bars; t < i.length; t++) {
        var n = i[t];
        if (n !== undefined) {
          n.onChangeLayoutState();
        }
      }
    }
  };
  CastleStatusPanel.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      this.disp.y = 0;
      this.disp.x = 0;
      this.repositioningBars();
    }
  };
  CastleStatusPanel.prototype.onCastleStatusBarIconsRepositioned = function (e) {
    this.repositioningBars();
  };
  CastleStatusPanel.prototype.repositioningBars = function () {
    if (this.disp.visible) {
      this._bars[CastleStatusPanel.BAR_RIGHT].disp.x = this.disp.stage.stageWidth - (CastleStatusPanel.RIGHT_SPACE + CastleStatusPanel.RIGHT_SPACE_ACTIVITY_CHEST);
      this._bars[CastleStatusPanel.BAR_RIGHT].disp.y = CastleStatusPanel.TOP_SPACE_RIGHT_BAR;
      this._bars[CastleStatusPanel.BAR_RIGHT_2].disp.x = this.disp.stage.stageWidth - CastleStatusPanel.RIGHT_SPACE;
      this._bars[CastleStatusPanel.BAR_RIGHT_2].disp.y = this._bars[CastleStatusPanel.BAR_RIGHT].disp.y + CastleStatusPanel.BAR_SPACING;
      this._bars[CastleStatusPanel.BAR_LEFT].disp.x = CastleStatusPanel.LEFT_SPACE;
      this._bars[CastleStatusPanel.BAR_LEFT].disp.y = CastleStatusPanel.TOP_SPACE_LEFT_BAR;
      this._bars[CastleStatusPanel.BAR_LEFT_2].disp.x = CastleStatusPanel.LEFT_SPACE;
      this._bars[CastleStatusPanel.BAR_LEFT_2].disp.y = this._bars[CastleStatusPanel.BAR_LEFT].disp.y + CastleStatusPanel.BAR_SPACING;
      this._bars[CastleStatusPanel.BAR_LEFT_3].expandTo = g.StatusBarExpansionDirectionEnum.EXPAND_DOWN;
      this._bars[CastleStatusPanel.BAR_LEFT_3].disp.x = CastleStatusPanel.LEFT_SPACE_BAR_LEFT_3_DOWN;
      this._bars[CastleStatusPanel.BAR_LEFT_3].disp.y = CastleStatusPanel.TOP_SPACE_BAR_LEFT_3;
      if (this.disp.stage.stageHeight < CastleStatusPanel.MOVE_DAILY_QUEST_AT_HEIGHT) {
        this._bars[CastleStatusPanel.BAR_LEFT_3].addPositionReset(2, 80, 0, true);
      } else {
        this._bars[CastleStatusPanel.BAR_LEFT_3].clearPositionResets();
      }
      if (a.MobileHelper.isScreenTooSmall()) {
        this._bars[CastleStatusPanel.BAR_LEFT_3].disp.y -= 80;
      }
      if (this.disp.stage.stageWidth > CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SCALE_AT_WIDTH) {
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.y = this.disp.stage.stageHeight - CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL;
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.x = this.disp.stage.stageWidth - (this.layoutManager.isInEventState ? CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SEASON : CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL);
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.scaleX = this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.scaleY = 1;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.y = this.disp.stage.stageHeight - CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.x = CastleStatusPanel.LEFT_SPACE_MULTIINFOPANEL;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.scaleX = this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.scaleY = 1;
      } else {
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.y = this.disp.stage.stageHeight - (CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL - CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET);
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.x = this.disp.stage.stageWidth - (this.layoutManager.isInEventState ? CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SEASON - CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET : CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL - CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET);
        this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.scaleX = this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.scaleY = CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_SCALE;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.y = this.disp.stage.stageHeight - (CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL - CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET);
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.x = CastleStatusPanel.LEFT_SPACE_MULTIINFOPANEL_SMALL_RESOLUTION;
        this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.scaleX = this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].disp.scaleY = CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_SCALE;
        if (a.MobileHelper.isScreenTooSmall()) {
          this._bars[CastleStatusPanel.BAR_ACTION_PANEL_LEFT].disp.x += 50;
        }
      }
      this._bars[CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT].onChangeLayoutState();
      if (this.disp.stage.stageHeight < CastleStatusPanel.MOVE_DAILY_QUEST_AT_HEIGHT) {
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.x = this.disp.stage.stageWidth - CastleStatusPanel.RIGHT_SPACE_QUEST_SMALL_RESOLUTION;
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.y = this.disp.stage.stageHeight - CastleStatusPanel.BOTTOM_SPACE_QUEST_SMALL_RESOLUTION;
      } else {
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.x = this.disp.stage.stageWidth - CastleStatusPanel.RIGHT_SPACE_QUEST;
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.y = this.disp.stage.stageHeight - CastleStatusPanel.BOTTOM_SPACE_QUEST;
      }
      if (f.CastleQuestStartPanel.movePanelUp()) {
        this._bars[CastleStatusPanel.BAR_QUESTPANEL_TOP].disp.y += s.ClientConstCastle.SEASON_PANEL_OFFSET;
      }
    }
  };
  CastleStatusPanel.prototype.onClick = function (e) {
    if (e.target instanceof C && e.target.statusIcon) {
      e.target.statusIcon.onClick(e);
    }
  };
  CastleStatusPanel.prototype.addStatusIcon = function (e, t) {
    this._bars[e].addIcon(t);
    this.repositioningBars();
  };
  CastleStatusPanel.prototype.removeStatusIcon = function (e, t) {
    this._bars[e].removeIcon(t);
    this.repositioningBars();
  };
  CastleStatusPanel.prototype.hasStatusIcon = function (e, t) {
    return this._bars[e].hasIcon(t);
  };
  CastleStatusPanel.__initialize_static_members = function () {
    CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SCALE_AT_WIDTH = CastleStatusPanel.WIDTH_FOR_SMALL_RESOLUTION;
  };
  CastleStatusPanel.NAME = "CastleStatusPanel";
  CastleStatusPanel.BAR_RIGHT = 0;
  CastleStatusPanel.BAR_RIGHT_2 = 1;
  CastleStatusPanel.BAR_LEFT = 2;
  CastleStatusPanel.BAR_LEFT_2 = 3;
  CastleStatusPanel.BAR_LEFT_3 = 7;
  CastleStatusPanel.BAR_MULTIINFO_PANEL_RIGHT = 5;
  CastleStatusPanel.BAR_ACTION_PANEL_LEFT = 6;
  CastleStatusPanel.BAR_QUESTPANEL_TOP = 4;
  CastleStatusPanel.WIDTH_FOR_SMALL_RESOLUTION = 908;
  CastleStatusPanel.BAR_SPACING = 80;
  CastleStatusPanel.LEFT_SPACE = 190;
  CastleStatusPanel.RIGHT_SPACE = 180;
  CastleStatusPanel.TOP_SPACE_LEFT_BAR = 70;
  CastleStatusPanel.TOP_SPACE_RIGHT_BAR = 100;
  CastleStatusPanel.BOTTOM_SPACE = 35;
  CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL_LEFT = 10;
  CastleStatusPanel.BOTTOM_SPACE_OVER_VERSIONTEXT = 10;
  CastleStatusPanel.BOTTOM_SPACE_MULTIINFOPANEL_SMALL_RESOLUTION = 50;
  CastleStatusPanel.LEFT_SPACE_MULTIINFOPANEL = 222;
  CastleStatusPanel.LEFT_SPACE_MULTIINFOPANEL_SMALL_RESOLUTION = 212;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_SEASON = 357;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL = 515;
  CastleStatusPanel.LEFT_SPACE_BAR_LEFT_3_RIGHT = 40;
  CastleStatusPanel.LEFT_SPACE_BAR_LEFT_3_DOWN = 55;
  CastleStatusPanel.TOP_SPACE_BAR_LEFT_3 = 260;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_HIGH_RESOLUTION_OFFSET = 50;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_OFFSET = 10;
  CastleStatusPanel.BOTTOM_SPACE_ACTIONPANEL = 39;
  CastleStatusPanel.RIGHT_SPACE_ACTIONPANEL_LOW_RESOLUTION_SCALE = 0.75;
  CastleStatusPanel.BOTTOM_SPACE_QUEST = 285;
  CastleStatusPanel.RIGHT_SPACE_QUEST = 40;
  CastleStatusPanel.BOTTOM_SPACE_QUEST_SMALL_RESOLUTION = 190;
  CastleStatusPanel.RIGHT_SPACE_QUEST_SMALL_RESOLUTION = 120;
  CastleStatusPanel.RIGHT_SPACE_ACTIVITY_CHEST = 15;
  CastleStatusPanel.MOVE_DAILY_QUEST_AT_HEIGHT = 680;
  return CastleStatusPanel;
}(l.CastlePanel);
exports.CastleStatusPanel = m;
var f = require("./462.js");
var O = require("./3936.js");
var E = require("./3937.js");
var y = require("./3938.js");
var b = require("./3940.js");
var D = require("./3941.js");
var I = require("./3943.js");
var T = require("./3944.js");
var v = require("./3945.js");
var S = require("./3946.js");
var A = require("./3947.js");
var L = require("./930.js");
var P = require("./3948.js");
var M = require("./3949.js");
var R = require("./3950.js");
var V = require("./3952.js");
var x = require("./3953.js");
var w = require("./3954.js");
var B = require("./3955.js");
var F = require("./3956.js");
var N = require("./3957.js");
var k = require("./3958.js");
var U = require("./3965.js");
var G = require("./3974.js");
var H = require("./3975.js");
var j = require("./3976.js");
var W = require("./3977.js");
var Y = require("./3980.js");
var K = require("./3982.js");
var z = require("./3988.js");
var q = require("./4000.js");
var X = require("./4001.js");
var Q = require("./4003.js");
var J = require("./4004.js");
var Z = require("./4005.js");
var $ = require("./4006.js");
var ee = require("./4020.js");
var te = require("./4021.js");
var ie = require("./4022.js");
var ne = require("./4024.js");
var oe = require("./4025.js");
var ae = require("./4027.js");
var se = require("./4029.js");
var re = require("./4030.js");
var le = require("./4032.js");
var ce = require("./4033.js");
var ue = require("./4034.js");
var de = require("./4035.js");
var pe = require("./4037.js");
var he = require("./4038.js");
var ge = require("./4040.js");
var Ce = require("./4041.js");
var _e = require("./4042.js");
var me = require("./4044.js");
var fe = require("./4045.js");
var Oe = require("./4046.js");
var Ee = require("./4047.js");
var ye = require("./4048.js");
var be = require("./4049.js");
var De = require("./4052.js");
m.__initialize_static_members();