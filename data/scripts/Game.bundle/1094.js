Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./3.js");
var l = require("./6.js");
var c = require("./21.js");
var u = require("./26.js");
var d = require("./4.js");
var p = require("./1770.js");
var h = require("./27.js");
var g = require("./8.js");
var C = function (e) {
  function CastleAllianceSamuraiInvasionDialog() {
    var t = this;
    t.activeTab = 0;
    t.sublayers = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceSamuraiInvasionDialog.NAME) || this;
  }
  n.__extends(CastleAllianceSamuraiInvasionDialog, e);
  CastleAllianceSamuraiInvasionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER, new f.CastleAllianceSamuraiInvasionDialogPlayerSublayer(this.dialogDisp.sublayer_player));
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE, new _.CastleAllianceSamuraiInvasionDialogAllianceSublayer(this.dialogDisp.sublayer_alliance));
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT, new E.CastleSamuraiInvasionMerchantSublayer(this.dialogDisp.sublayer_merchant));
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO, new m.CastleAllianceSamuraiInvasionDialogDaimyoSublayer(this.dialogDisp.sublayer_daimyo));
    this.sublayers.set(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP, new O.CastleSamuraiInvasionDaimyoShopSublayer(this.dialogDisp.sublayer_daimyoShop));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close]);
    this.initTabButton(this.dialogDisp.tab_player, "dialog_samuraiInvasion_singleTab_tooltip");
    this.initTabButton(this.dialogDisp.tab_alliance, "dialog_samuraiInvasion_allianceTab_tooltip");
    this.initTabButton(this.dialogDisp.tab_merchant, "dialog_samuraiInvasion_shopTab_tooltip");
    this.initTabButton(this.dialogDisp.tab_daimyo, "samuraiInvasionDaimyo_tt");
    this.initTabButton(this.dialogDisp.tab_daimyoShop, "dialog_samuraiInvasionDaimyo_shopTab_tooltip");
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new r.LocalizedTextVO("dialog_samuraiInvasion_gambling_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new r.LocalizedTextVO("dialog_nomadInvasion_desc"));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new s.TextVO(""));
    this.dialogDisp.mc_time.mouseChildren = false;
    this._currentSublayer = this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
    this.activeTab = CastleAllianceSamuraiInvasionDialog.TAB_PLAYER;
    this.updateTabButtons();
    this.updateSpeechBubbleText();
  };
  CastleAllianceSamuraiInvasionDialog.prototype.initTabButton = function (e, t) {
    g.ButtonHelper.initBasicButton(e);
    e.toolTipText = t;
  };
  CastleAllianceSamuraiInvasionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    if (l.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      var i = d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_SAMURAI_INVASION);
      if (this.dialogProperties.sublayerIndex != -1) {
        this.showTab(this.dialogProperties.sublayerIndex);
      } else if (this.activeTab != CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO || i.daimyoInfoVO.isEnabled) {
        this.showCurrentSublayer();
      } else {
        this.showTab(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
      }
      d.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
      d.CastleModel.specialEventData.addEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
      d.CastleModel.timerData.addEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
      this.updateTimer();
      this.updateDaimyo();
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this.hideCurrentSublayer();
    d.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.ADD_SPECIALEVENT, this.bindFunction(this.onEventAdded));
    d.CastleModel.specialEventData.removeEventListener(u.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventRemoved));
    d.CastleModel.timerData.removeEventListener(c.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
  };
  CastleAllianceSamuraiInvasionDialog.prototype.applyPropertiesToSublayers = function () {
    if (this.samuraiEventVO) {
      this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER).setScoreBarData(this.samuraiEventVO.scoreBarVO);
      this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE).setScoreBarData(this.samuraiEventVO.allianceBarVO);
      this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT).setPackagesData(this.samuraiEventVO.eventPackagesVO, this.dialogProperties.eventVO);
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.showTab = function (e) {
    this.activeTab = e;
    this._currentSublayer = this.sublayers.get(this.activeTab);
    this.showCurrentSublayer();
    this.updateTabButtons();
    this.updateSpeechBubbleText();
  };
  CastleAllianceSamuraiInvasionDialog.prototype.changeTab = function (e) {
    if (e != this.activeTab) {
      this.hideCurrentSublayer();
      this.showTab(e);
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.showCurrentSublayer = function () {
    this.applyPropertiesToSublayers();
    this._currentSublayer = this.sublayers.get(this.activeTab);
    this.sublayers.get(this.activeTab).show(null);
  };
  CastleAllianceSamuraiInvasionDialog.prototype.hideCurrentSublayer = function () {
    this.sublayers.get(this.activeTab).hide();
  };
  CastleAllianceSamuraiInvasionDialog.prototype.updateTabButtons = function () {
    this.dialogDisp.tab_player.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_PLAYER ? 2 : 1);
    this.dialogDisp.tab_alliance.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE ? 2 : 1);
    this.dialogDisp.tab_merchant.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT ? 2 : 1);
    this.dialogDisp.tab_daimyo.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO ? 2 : 1);
    this.dialogDisp.tab_daimyoShop.gotoAndStop(this.activeTab == CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP ? 2 : 1);
  };
  CastleAllianceSamuraiInvasionDialog.prototype.updateDaimyo = function () {
    var e = d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_SAMURAI_INVASION);
    var t = d.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_DAIMYO_SHOP);
    var i = t != null;
    var n = !!e && e.isActive;
    this.dialogDisp.tab_daimyo.visible = !!e && e.daimyoInfoVO.isEnabled;
    this.dialogDisp.tab_daimyoShop.visible = i;
    this.dialogDisp.tab_player.visible = n;
    this.dialogDisp.tab_alliance.visible = n;
    this.dialogDisp.tab_merchant.visible = n;
    if (i) {
      this.sublayers.get(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP).setPackagesData(t.eventPackagesVO, t);
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.updateTimer = function () {
    var e = l.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds);
    this.itxt_time.textContentVO.stringValue = h.CastleTimeStringHelper.getEventTimeString(e);
    this.dialogDisp.mc_time.toolTipText = h.CastleTimeStringHelper.getEventToolTipString(e);
  };
  CastleAllianceSamuraiInvasionDialog.prototype.updateSpeechBubbleText = function () {
    var e = "";
    switch (this.activeTab) {
      case CastleAllianceSamuraiInvasionDialog.TAB_PLAYER:
        e = "dialog_samuraiInvasion_single_desc";
        break;
      case CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE:
        e = "dialog_samuraiInvasion_alliance_desc";
        break;
      case CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT:
        e = "dialog_samuraiInvasion_samuraiShop_desc";
        break;
      case CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO:
        e = "dialog_samuraiInvasionDaimyo_desc";
        break;
      case CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP:
        e = "dialog_samuraiMedalShop_desc_detail";
    }
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechbubble, new r.LocalizedTextVO(e));
  };
  CastleAllianceSamuraiInvasionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this._currentSublayer.showHelp();
        break;
      case this.dialogDisp.tab_player:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_PLAYER);
        break;
      case this.dialogDisp.tab_alliance:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE);
        break;
      case this.dialogDisp.tab_merchant:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT);
        break;
      case this.dialogDisp.tab_daimyo:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO);
        break;
      case this.dialogDisp.tab_daimyoShop:
        this.changeTab(CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP);
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.onUpdateEventTime = function (e) {
    if (l.int(this.dialogProperties.eventVO.remainingEventTimeInSeconds) <= 0) {
      this.hide();
    } else {
      this.updateTimer();
    }
  };
  CastleAllianceSamuraiInvasionDialog.prototype.onEventAdded = function (e) {
    this.updateDaimyo();
  };
  CastleAllianceSamuraiInvasionDialog.prototype.onEventRemoved = function (e) {
    this.updateDaimyo();
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_SAMURAI_INVASION) {
      this.hide();
    }
  };
  Object.defineProperty(CastleAllianceSamuraiInvasionDialog.prototype, "samuraiEventVO", {
    get: function () {
      if (this.dialogProperties.eventVO instanceof p.SamuraiInvasionEventVO) {
        return this.dialogProperties.eventVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceSamuraiInvasionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceSamuraiInvasionDialog.TAB_PLAYER = 1;
  CastleAllianceSamuraiInvasionDialog.TAB_ALLIANCE = 2;
  CastleAllianceSamuraiInvasionDialog.TAB_MERCHANT = 3;
  CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO = 4;
  CastleAllianceSamuraiInvasionDialog.TAB_DAIMYO_SHOP = 5;
  CastleAllianceSamuraiInvasionDialog.NAME = "CastleAllianceSamuraiInvasionEvent_Difficulty";
  return CastleAllianceSamuraiInvasionDialog;
}(require("./112.js").CastleExternalSubLayerDialog);
exports.CastleAllianceSamuraiInvasionDialog = C;
o.classImplementsInterfaces(C, "ICollectableRendererList");
var _ = require("./3736.js");
var m = require("./3738.js");
var f = require("./3750.js");
var O = require("./3751.js");
var E = require("./3753.js");