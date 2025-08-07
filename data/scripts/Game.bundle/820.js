Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./5.js");
var s = require("./3.js");
var r = require("./6.js");
var l = require("./21.js");
var c = require("./26.js");
var u = require("./4.js");
var d = require("./27.js");
var p = function (e) {
  function CastleAllianceNomadInvasionDialog() {
    var t = this;
    t.activeTab = CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT;
    t.sublayers = new Map();
    CONSTRUCTOR_HACK;
    return t = e.call(this, CastleAllianceNomadInvasionDialog.NAME) || this;
  }
  n.__extends(CastleAllianceNomadInvasionDialog, e);
  CastleAllianceNomadInvasionDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this);
    this._subLayer = this.sublayers;
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_MERCHANT, new _.CastleNomadInvasionMerchantSublayer(this.dialogDisp.sublayer_merchant));
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS, new C.CastleNomadInvasionMedalMerchantSublayer(this.dialogDisp.sublayer_merchant2));
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT, new m.CastleNomadInvasionPointsEventSublayer(this.dialogDisp.sublayer_pointEvent));
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT, new g.CastleAllianceNomadInvasionPointsEventSublayer(this.dialogDisp.sublayer_allianceEvent));
    this.sublayers.set(CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT, new h.CastleAllianceCampNomadInvasionPointsEventSublayer(this.dialogDisp.sublayer_allianceCampEvent));
    this.initBasicButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.tab_pointsEvent, this.dialogDisp.tab_merchant, this.dialogDisp.tab_alliance, this.dialogDisp.tab_allianceCamp, this.dialogDisp.tab_merchant2]);
    this.dialogDisp.btn_help.toolTipText = "generic_help";
    this.dialogDisp.tab_pointsEvent.toolTipText = "dialog_nomadInvasion_overviewTab_tooltip";
    this.dialogDisp.tab_merchant.toolTipText = "dialog_nomadInvasion_khanTabletShop_tooltip";
    this.dialogDisp.tab_alliance.toolTipText = "dialog_nomadInvasionAlliance_allianceTab_tooltip";
    this.dialogDisp.tab_allianceCamp.toolTipText = "dialog_nomadInvasion_khanContest_khanTab_tooltip";
    this.dialogDisp.tab_merchant2.toolTipText = "dialog_nomadInvasion_khanContest_khanTrader_tab_tooltip";
    this.updateTabButtons();
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.mc_time.txt_time, new s.TextVO(""));
    this.dialogDisp.mc_time.mouseChildren = false;
    this._currentSublayer = this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT);
  };
  CastleAllianceNomadInvasionDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this);
    this.hideCurrentSublayer();
    u.CastleModel.timerData.removeEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
    u.CastleModel.specialEventData.removeEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
  };
  CastleAllianceNomadInvasionDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this);
    if (this.eventVO || this.merchantEventVO) {
      this.applyPropertiesToSublayers();
      if (this.dialogProperties.sublayerIndex != -1) {
        this.showTab(this.dialogProperties.sublayerIndex);
      } else {
        this.showCurrentSublayer();
      }
      this.updateTabVisibility();
      this.updateTimer();
      u.CastleModel.timerData.addEventListener(l.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onUpdateEventTime));
      u.CastleModel.specialEventData.addEventListener(c.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onEventEnd));
    } else {
      this.hide();
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.dialogDisp.btn_close:
        this.hide();
        break;
      case this.dialogDisp.btn_help:
        this._currentSublayer.showHelp();
        break;
      case this.dialogDisp.tab_pointsEvent:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT);
        break;
      case this.dialogDisp.tab_merchant:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_MERCHANT);
        break;
      case this.dialogDisp.tab_alliance:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT);
        break;
      case this.dialogDisp.tab_allianceCamp:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT);
        break;
      case this.dialogDisp.tab_merchant2:
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS);
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.applyPropertiesToSublayers = function () {
    if (this.eventVO) {
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT).setScoreBarData(this.eventVO.scoreBarVO);
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT).setScoreBarData(this.eventVO.allianceBarVO);
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT).setEventVO(this.eventVO);
    }
    if (this.merchantEventVO) {
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_MERCHANT).setPackagesData(this.merchantEventVO.eventPackagesVO, this.merchantEventVO);
      this.sublayers.get(CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS).setPackagesData(this.merchantEventVO.eventPackagesVO, this.merchantEventVO);
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.showTab = function (e) {
    this.activeTab = e;
    this._currentSublayer = this.sublayers.get(this.activeTab);
    this.showCurrentSublayer();
    this.updateTabButtons();
  };
  CastleAllianceNomadInvasionDialog.prototype.changeTab = function (e) {
    if (e != this.activeTab) {
      this.hideCurrentSublayer();
      this.showTab(e);
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.showCurrentSublayer = function () {
    this._currentSublayer = this.sublayers.get(this.activeTab);
    this.sublayers.get(this.activeTab).show(null);
  };
  CastleAllianceNomadInvasionDialog.prototype.hideCurrentSublayer = function () {
    this.sublayers.get(this.activeTab).hide();
  };
  CastleAllianceNomadInvasionDialog.prototype.updateTabButtons = function () {
    this.dialogDisp.tab_pointsEvent.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT ? 2 : 1);
    this.dialogDisp.tab_merchant.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_MERCHANT ? 2 : 1);
    this.dialogDisp.tab_alliance.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT ? 2 : 1);
    this.dialogDisp.tab_allianceCamp.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT ? 2 : 1);
    this.dialogDisp.tab_merchant2.gotoAndStop(this.activeTab == CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS ? 2 : 1);
  };
  CastleAllianceNomadInvasionDialog.prototype.onUpdateEventTime = function (e) {
    this.updateTimer();
  };
  CastleAllianceNomadInvasionDialog.prototype.updateTimer = function () {
    if (this.activeTab == CastleAllianceNomadInvasionDialog.TAB_MERCHANT || this.activeTab == CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS) {
      if (this.merchantEventVO) {
        var e = r.int(this.merchantEventVO.remainingEventTimeInSeconds);
        this.itxt_time.textContentVO.stringValue = d.CastleTimeStringHelper.getEventTimeString(e);
        this.dialogDisp.mc_time.toolTipText = d.CastleTimeStringHelper.getEventToolTipString(e);
      }
    } else if (this.eventVO) {
      var t = r.int(this.eventVO.remainingEventTimeInSeconds);
      this.itxt_time.textContentVO.stringValue = d.CastleTimeStringHelper.getEventTimeString(t);
      this.dialogDisp.mc_time.toolTipText = d.CastleTimeStringHelper.getEventToolTipString(t);
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.onEventEnd = function (e) {
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE) {
      if (!this.merchantEventVO || this.activeTab != CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT && this.activeTab != CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT && this.activeTab != CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT) {
        if (!this.merchantEventVO) {
          this.hide();
        }
      } else {
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_MERCHANT);
        this.updateTabVisibility();
      }
    }
    if (e.specialEventVO.eventId == a.EventConst.EVENTTYPE_NOMADINVASION_VENDOR) {
      if (!this.eventVO || this.activeTab != CastleAllianceNomadInvasionDialog.TAB_MERCHANT && this.activeTab != CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS) {
        if (!this.eventVO) {
          this.hide();
        }
      } else {
        this.changeTab(CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT);
        this.updateTabVisibility();
      }
    }
  };
  CastleAllianceNomadInvasionDialog.prototype.updateTabVisibility = function () {
    this.dialogDisp.tab_pointsEvent.visible = this.eventVO;
    this.dialogDisp.tab_merchant.visible = this.merchantEventVO;
    this.dialogDisp.tab_alliance.visible = this.eventVO;
    this.dialogDisp.tab_allianceCamp.visible = this.eventVO && this.eventVO.khanCampBarVO && u.CastleModel.userData.userLevel >= this.eventVO.eventExtensionUnlock;
    this.dialogDisp.tab_merchant2.visible = this.merchantEventVO && u.CastleModel.userData.userLevel >= this.merchantEventVO.eventExtensionUnlock;
  };
  Object.defineProperty(CastleAllianceNomadInvasionDialog.prototype, "eventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_NOMADINVASION_ALLIANCE);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionDialog.prototype, "merchantEventVO", {
    get: function () {
      return u.CastleModel.specialEventData.getActiveEventByEventId(a.EventConst.EVENTTYPE_NOMADINVASION_VENDOR);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceNomadInvasionDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleAllianceNomadInvasionDialog.TAB_MERCHANT = 0;
  CastleAllianceNomadInvasionDialog.TAB_POINTSEVENT = 1;
  CastleAllianceNomadInvasionDialog.TAB_ALLIANCEEVENT = 2;
  CastleAllianceNomadInvasionDialog.TAB_MERCHANT_MEDALS = 4;
  CastleAllianceNomadInvasionDialog.TAB_ALLIANCECAMPEVENT = 5;
  CastleAllianceNomadInvasionDialog.NAME = "CastleAllianceNomadInvasionEvent_Difficulty";
  return CastleAllianceNomadInvasionDialog;
}(require("./114.js").CastleExternalSubLayerDialog);
exports.CastleAllianceNomadInvasionDialog = p;
o.classImplementsInterfaces(p, "ICollectableRendererList");
var h = require("./3711.js");
var g = require("./3715.js");
var C = require("./3716.js");
var _ = require("./3718.js");
var m = require("./3719.js");