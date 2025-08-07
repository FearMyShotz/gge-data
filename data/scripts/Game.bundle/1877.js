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
var d = require("./2.js");
var p = require("./3.js");
var h = require("./3.js");
var g = require("./6.js");
var C = require("./91.js");
var _ = require("./37.js");
var m = require("./4.js");
var f = require("./131.js");
var O = require("./334.js");
var E = require("./4207.js");
var y = createjs.Container;
var b = require("./15.js");
var D = function (e) {
  function IdentityManagementView() {
    var t = this;
    t._ingameShowIcons = false;
    t._ingameShowNotice = false;
    t._ingameShowTeenageProtectionNotice = false;
    t._outgameShow = false;
    t._showTimer = false;
    t._shutDownTimeMC = new Library.CastleInterfaceElements.InfoTooltip_Building();
    CONSTRUCTOR_HACK;
    t = e.call(this, new y()) || this;
    E.Siren24ViewUtil.loadKoreanAssets(t.bindFunction(t.onKoreanAssetsLoaded));
    return t;
  }
  n.__extends(IdentityManagementView, e);
  IdentityManagementView.prototype.onKoreanAssetsLoaded = function () {
    o.BasicController.getInstance().addEventListener(r.IdentityManagementEvent.ID_MANAGEMENT_ACTIVE, this.bindFunction(this.onIdManagementActivated));
    o.BasicController.getInstance().addEventListener(r.IdentityManagementEvent.ID_MANAGEMENT_INCTIVE, this.bindFunction(this.onIdManagementDeactivated));
    o.BasicController.getInstance().addEventListener(c.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
    o.BasicController.getInstance().addEventListener(C.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    o.BasicController.getInstance().addEventListener(l.IdentityManagementLicenseEvent.SHOW_LICENSE_INITIAL_AGE_RATING_TEXT, this.bindFunction(this.onIngameInitialAgeRating));
    o.BasicController.getInstance().addEventListener(l.IdentityManagementLicenseEvent.SHOW_LICENSE_LOGOS, this.bindFunction(this.onShowIngameLicense));
    o.BasicController.getInstance().addEventListener(l.IdentityManagementLicenseEvent.HIDE_LICENSE, this.bindFunction(this.onHideIngameLicense));
    o.BasicController.getInstance().addEventListener(_.CastleServerMessageArrivedEvent.CPS_ARRIVED, this.bindFunction(this.onCPSArrived));
    b.CastleBasicController.getInstance().addEventListener(C.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onStageResize));
    this.initialize();
  };
  IdentityManagementView.prototype.onCPSArrived = function (e) {
    if (e.params) {
      this._showTimer = true;
      this._shutDownTimer = e.params[0];
      this._shutDownTimer.showCountDownTimer.add(this.bindFunction(this.onTimerTick));
      this._shutDownTimer.hideCountDownTimer.add(this.bindFunction(this.onTimerComplete));
      this.panelDisp.addChild(this._shutDownTimeMC);
      this.updatePosition();
    }
  };
  IdentityManagementView.prototype.onTimerComplete = function () {
    this._showTimer = false;
    this.updatePosition();
  };
  IdentityManagementView.prototype.onTimerTick = function () {
    this.textFieldManager.registerTextField(this._shutDownTimeMC.txt_line1, new h.TextVO(u.TimeStringHelper.getShortTimeString((s.IdentityManagementConstants.SHUTDOWN_CONTROL_TIMER - this._shutDownTimer.shutDownTimer.currentCount) * 1000)));
  };
  IdentityManagementView.prototype.onHideIngameLicense = function (e) {
    this._ingameShowIcons = false;
    this._ingameShowTeenageProtectionNotice = false;
    this._ingameShowNotice = false;
    this.updatePosition();
    m.CastleModel.koreanData.koreaHoursPlayed++;
  };
  IdentityManagementView.prototype.onShowIngameLicense = function (e) {
    this._ingameShowIcons = true;
    this._ingameShowTeenageProtectionNotice = true;
    this.updatePosition();
  };
  IdentityManagementView.prototype.onIngameInitialAgeRating = function (e) {
    this._ingameShowIcons = true;
    this._ingameShowNotice = true;
    this.updatePosition();
  };
  IdentityManagementView.prototype.onChangeLayoutState = function (e) {
    if (this.layoutManager) {
      this.layoutManager.switchKoreanLayerToFront(this.layoutManager.isIngameState);
    }
    this._outgameShow = this.env.isIdentityManagementActive && this.layoutManager != null && !this.layoutManager.isIngameState;
    this._showTimer = this._showTimer && !!this.layoutManager && this.layoutManager.isIngameState;
    this.updatePosition();
  };
  IdentityManagementView.prototype.initialize = function () {
    if (this.env.isIdentityManagementActive) {
      this.onIdManagementActivated(null);
    } else {
      this.onIdManagementDeactivated(null);
    }
  };
  IdentityManagementView.prototype.onCountryInstanceMappingProcessComplete = function (e) {
    this.createLogos();
    this.updatePosition();
  };
  IdentityManagementView.prototype.createLogos = function () {
    try {
      this._ageRatingLogo ||= this._idManagementBtn.addChild(E.Siren24ViewUtil.ageRatingLogo);
      this._contentDesriptorLogo ||= this._idManagementBtn.addChild(E.Siren24ViewUtil.contentDescriptorLogo);
      if (!this._licenceTable) {
        this.updateLicenseTable();
      }
      if (!this._ingameNotice) {
        this._ingameNotice = new Library.CastleInterfaceElements.KoreanIdentityNotify();
        this.textFieldManager.registerTextField(this._ingameNotice.txt_label, new p.LocalizedTextVO(IdentityManagementView.NOTIFICATION_TEXT_ID));
        this.panelDisp.addChild(this._ingameNotice);
      }
      if (!this._teenagerProtectionNotice) {
        this._teenagerProtectionNotice = new Library.CastleInterfaceElements.KoreanTeengarProtectionNotification();
        this._itxtTeenProtection = this.textFieldManager.registerTextField(this._teenagerProtectionNotice.txt_value, new p.LocalizedTextVO("-"));
        this._teenagerProtectionNotice.visible = false;
        this.panelDisp.addChild(this._teenagerProtectionNotice);
      }
    } catch (e) {
      d.error("Logos not available yet");
    }
  };
  IdentityManagementView.prototype.updateLicenseTable = function () {
    var e;
    if (window.gamestage.stageHeight <= IdentityManagementView.LOW_GAME_HEIGHT) {
      this._isWideScreen = true;
      if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_COMPACT && window.gamestage.stageWidth > IdentityManagementView.GAME_WIDTH_WIDE_SCREEN) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_COMPACT;
        e = E.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_COMPACT);
      } else if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_VERTICAL && window.gamestage.stageWidth <= IdentityManagementView.GAME_WIDTH_WIDE_SCREEN) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_VERTICAL;
        e = E.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_VERTICAL);
      }
    } else if (window.gamestage.stageHeight > IdentityManagementView.LOW_GAME_HEIGHT) {
      this._isWideScreen = false;
      if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_COMPACT && window.gamestage.stageWidth <= IdentityManagementView.GAME_WIDTH_DEFAULT && window.gamestage.stageWidth > IdentityManagementView.GAME_WIDTH_WIDE_SCREEN) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_COMPACT;
        e = E.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_COMPACT);
      } else if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_DEFAULT && window.gamestage.stageWidth > IdentityManagementView.GAME_WIDTH_DEFAULT) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_DEFAULT;
        e = E.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_DEFAULT);
      } else if (this._currentTableType != IdentityManagementView.KOREAN_TABLE_VERTICAL && window.gamestage.stageWidth <= IdentityManagementView.GAME_WIDTH_WIDE_SCREEN) {
        this._currentTableType = IdentityManagementView.KOREAN_TABLE_VERTICAL;
        e = E.Siren24ViewUtil.licenceTable(IdentityManagementView.KOREAN_TABLE_VERTICAL);
      }
    }
    if (e) {
      if (this.panelDisp.table) {
        this.panelDisp.removeChild(this.panelDisp.table);
      }
      this.panelDisp.table = e;
      this._licenceTable = this.panelDisp.addChild(e);
      this._licenceTable.x = (this._ageRatingLogo ? this._ageRatingLogo.x : 0) - this._licenceTable.width / 2;
      this._licenceTable.y = this._ageRatingLogo ? this._ageRatingLogo.y : 0;
      this.updatePosition();
    }
  };
  IdentityManagementView.prototype.onStageResize = function (e) {
    this.updateLicenseTable();
  };
  IdentityManagementView.prototype.onIdManagementDeactivated = function (e) {
    o.BasicController.getInstance().removeEventListener(a.CountryInstanceMappingEvent.PROCESS_COMPLETE, this.bindFunction(this.onCountryInstanceMappingProcessComplete));
    if (this._idManagementBtn) {
      this._outgameShow = false;
      this.updatePosition();
    }
  };
  IdentityManagementView.prototype.onIdManagementActivated = function (e) {
    if (this.layoutManager) {
      this.layoutManager.switchKoreanLayerToFront(this.layoutManager.isIngameState);
    }
    if (!this._idManagementBtn) {
      this._idManagementBtn = new y();
      this.panelDisp.addChild(this._idManagementBtn);
    }
    o.BasicController.getInstance().addEventListener(a.CountryInstanceMappingEvent.PROCESS_COMPLETE, this.bindFunction(this.onCountryInstanceMappingProcessComplete));
    this.createLogos();
    this._outgameShow = true;
    this.updatePosition();
  };
  IdentityManagementView.prototype.updatePosition = function () {
    if (this.panelDisp.stage) {
      if (this.layoutManager.isIngameState) {
        this._shutDownTimeMC.visible = this._showTimer;
        this._shutDownTimeMC.x = this.panelDisp.stage.stageWidth / 2 - this._shutDownTimeMC.width / 2;
        this._shutDownTimeMC.y = this._shutDownTimeMC.height + 20;
        if (this._idManagementBtn) {
          this._idManagementBtn.visible = this._ingameShowIcons;
          if (this._ageRatingLogo) {
            this._ageRatingLogo.x = 0;
          }
          if (this._contentDesriptorLogo) {
            this._contentDesriptorLogo.x = this._ageRatingLogo.width + 10;
            this._contentDesriptorLogo.y = 0;
          }
          this.scaleObjectToPercentOfStage(this._idManagementBtn, IdentityManagementView.MIN_SCALE_AGECONTENT_DESC);
          this._idManagementBtn.y = 50;
          this._idManagementBtn.x = this.panelDisp.stage.stageWidth - this._idManagementBtn.width - 50;
        }
        if (this._ingameNotice) {
          this._ingameNotice.visible = this._ingameShowNotice;
          this.scaleObjectToPercentOfStage(this._ingameNotice, IdentityManagementView.MIN_SCALE_NOTICE_DESC);
          this._ingameNotice.x = this.panelDisp.stage.stageWidth / 2;
          this._ingameNotice.y = this._idManagementBtn.y + this._idManagementBtn.height + 10 + this._ingameNotice.height / 2;
        }
        if (this._licenceTable) {
          this._licenceTable.visible = false;
        }
        if (this._teenagerProtectionNotice) {
          var e = g.int(m.CastleModel.koreanData.koreaHoursPlayed);
          this._teenagerProtectionNotice.visible = this._ingameShowTeenageProtectionNotice && e > 0;
          this._itxtTeenProtection.textContentVO.textId = IdentityManagementView.TEENAGE_PROTECTION_TEXT_ID;
          this._itxtTeenProtection.textContentVO.textReplacements = [e.toString()];
          this.scaleObjectToPercentOfStage(this._ingameNotice, IdentityManagementView.MIN_SCALE_NOTICE_DESC);
          this._teenagerProtectionNotice.x = this.panelDisp.stage.stageWidth - this._teenagerProtectionNotice.width - IdentityManagementView.NOTIFICATION_OFFSET_X;
          this._teenagerProtectionNotice.y = this._idManagementBtn.y + this._idManagementBtn.height + 10 + this._ingameNotice.height / 2;
        }
      } else {
        this._shutDownTimeMC.visible = false;
        if (this._ingameNotice) {
          this._ingameNotice.visible = false;
        }
        if (this._teenagerProtectionNotice) {
          this._teenagerProtectionNotice.visible = false;
        }
        if (this._licenceTable) {
          this._licenceTable.visible = this._outgameShow;
          var t = 1;
          var i = 0;
          var n = 0;
          switch (this._currentTableType) {
            case IdentityManagementView.KOREAN_TABLE_DEFAULT:
              t = Math.min(800 / 1049, this.panelDisp.stage.stageWidth / 1049);
              n = 50;
              if (O.StartscreenHelper.usesModernStartscreen()) {
                n = 0;
                i = -50;
              }
              break;
            case IdentityManagementView.KOREAN_TABLE_COMPACT:
              t = Math.min(1092 / 1450, this.panelDisp.stage.stageWidth / 1450);
              i = 30;
              if (!this._isWideScreen) {
                n = 75;
              }
              break;
            case IdentityManagementView.KOREAN_TABLE_VERTICAL:
              t = Math.min(1092 / 1450, this.panelDisp.stage.stageWidth / 1450);
              i = 80;
              n = this._isWideScreen ? -20 : 75;
          }
          this._licenceTable.scaleX = this._licenceTable.scaleY = t;
          this._licenceTable.x = this.panelDisp.stage.stageWidth / 2 + i;
          this._licenceTable.y = this.panelDisp.stage.stageHeight - this._licenceTable.height / 2 - n;
          if (this._idManagementBtn) {
            this._idManagementBtn.visible = false;
          }
        }
      }
    }
  };
  IdentityManagementView.prototype.scaleObjectToPercentOfStage = function (e, t) {
    var i = e.width / e.height;
    var n = t * (this.panelDisp.stage.stageWidth * this.panelDisp.stage.stageHeight);
    var o = Math.sqrt(n / i);
    e.width = i * o;
    e.height = o;
  };
  IdentityManagementView.prototype.updateElementsOnFontsLoaded = function (e) {
    this.initialize();
    this.updatePosition();
  };
  Object.defineProperty(IdentityManagementView.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  IdentityManagementView.prototype.destroy = function () {
    e.prototype.destroy.call(this);
    o.BasicController.getInstance().removeEventListener(r.IdentityManagementEvent.ID_MANAGEMENT_ACTIVE, this.bindFunction(this.onIdManagementActivated));
    o.BasicController.getInstance().removeEventListener(r.IdentityManagementEvent.ID_MANAGEMENT_INCTIVE, this.bindFunction(this.onIdManagementDeactivated));
    o.BasicController.getInstance().removeEventListener(c.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
    o.BasicController.getInstance().removeEventListener(C.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    o.BasicController.getInstance().removeEventListener(l.IdentityManagementLicenseEvent.SHOW_LICENSE_INITIAL_AGE_RATING_TEXT, this.bindFunction(this.onIngameInitialAgeRating));
    o.BasicController.getInstance().removeEventListener(l.IdentityManagementLicenseEvent.SHOW_LICENSE_LOGOS, this.bindFunction(this.onShowIngameLicense));
    o.BasicController.getInstance().removeEventListener(l.IdentityManagementLicenseEvent.HIDE_LICENSE, this.bindFunction(this.onHideIngameLicense));
    b.CastleBasicController.getInstance().removeEventListener(C.CastleLayoutManagerEvent.ON_RESIZE, this.bindFunction(this.onStageResize));
  };
  IdentityManagementView.__initialize_static_members = function () {
    IdentityManagementView.NAME = "IdentityManagementView";
    IdentityManagementView.MIN_SCALE_FACTOR_LICENCE = 0.11;
    IdentityManagementView.MIN_SCALE_AGECONTENT_DESC = 0.05;
    IdentityManagementView.MIN_SCALE_NOTICE_DESC = 0.26;
    IdentityManagementView.NOTIFICATION_OFFSET_X = 5;
    IdentityManagementView.NOTIFICATION_TEXT_ID = "generic_childProtectionNotification_korea";
    IdentityManagementView.TEENAGE_PROTECTION_TEXT_ID = "dialog_warning_playtime_korea";
  };
  IdentityManagementView.KOREAN_TABLE_DEFAULT = "MC_KoreaTable";
  IdentityManagementView.KOREAN_TABLE_COMPACT = "MC_KoreaTableCompact";
  IdentityManagementView.KOREAN_TABLE_VERTICAL = "MC_KoreaTableVertical";
  IdentityManagementView.LOW_GAME_HEIGHT = 900;
  IdentityManagementView.GAME_WIDTH_WIDE_SCREEN = 1000;
  IdentityManagementView.GAME_WIDTH_DEFAULT = 1092;
  return IdentityManagementView;
}(f.CastlePanel);
exports.IdentityManagementView = D;
D.__initialize_static_members();