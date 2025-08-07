Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./49.js");
var a = require("./2.js");
var s = require("./2.js");
var r = require("./2.js");
var l = require("./2.js");
var c = require("./2.js");
var u = require("./2.js");
var d = require("./2.js");
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./2.js");
var _ = require("./2.js");
var m = require("./2.js");
var f = require("./2.js");
var O = require("./2.js");
var E = require("./2.js");
var y = require("./2.js");
var b = require("./1.js");
var D = require("./1.js");
var I = require("./1.js");
var T = require("./1.js");
var v = require("./5.js");
var S = require("./3.js");
var A = require("./3.js");
var L = require("./3.js");
var P = require("./3.js");
var M = require("./3.js");
var R = require("./3.js");
var V = require("./6.js");
var x = require("./258.js");
var w = require("./23.js");
var B = require("./23.js");
var F = require("./16.js");
var N = require("./342.js");
var k = require("./4161.js");
var U = require("./4162.js");
var G = require("./1136.js");
var H = require("./364.js");
var j = require("./599.js");
var W = require("./491.js");
var Y = require("./44.js");
var K = require("./13.js");
var z = require("./15.js");
var q = require("./4.js");
var X = require("./17.js");
var Q = require("./847.js");
var J = require("./20.js");
var Z = require("./917.js");
var $ = require("./8.js");
var ee = require("./41.js");
var te = require("./131.js");
var ie = require("./4164.js");
var ne = require("./1869.js");
var oe = require("./381.js");
var ae = require("./4165.js");
var se = require("./4166.js");
var re = require("./1870.js");
var le = createjs.Point;
var ce = createjs.TimerEvent;
var ue = createjs.MouseEvent;
var de = function (e) {
  function ModernStartscreenPanel() {
    var t = this;
    t.loginIsVisible = false;
    t.focusState = ModernStartscreenPanel.FOCUS_REGISTER;
    t._registerBtnAlreadyClicked = false;
    t.loginBlocked = false;
    t._wasUserNameModified = false;
    t._wasPasswordModified = false;
    t.currentSelectedInstanceForTest = -1;
    t._worldReminderShown = false;
    t._deltaPoint = new le();
    CONSTRUCTOR_HACK;
    return t = e.call(this, new Library.CastleStartscreen4.ModernStartscreen()) || this;
  }
  n.__extends(ModernStartscreenPanel, e);
  ModernStartscreenPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.bannerUpdater = new re.StartScreenAdBannerLoader(this.registerDisp);
    this.initRegister();
    this.initLogin();
    this.initTermsAndPrivacy();
    this.textFieldManager.registerTextField(this.registerDisp.mc_nameSelection.txt_title, new M.LocalizedTextVO("generic_login_nameSuggestions"));
    this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_helpTooltip.txt_title, new M.LocalizedTextVO("generic_login_gameWorld_help_header"));
    var t = this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_helpTooltip.txt_description, new M.LocalizedTextVO("generic_login_gameWorld_help_desc"));
    this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.txt_title, new M.LocalizedTextVO("generic_login_gameWorld_reminder_header"));
    var i = this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.txt_description, new M.LocalizedTextVO("generic_login_gameWorld_reminder_desc"));
    this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_selection.txt_label, new M.LocalizedTextVO("generic_login_gameWorld")).verticalAlign = f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.panelDisp.mc_registerLogin.txt_or, new M.LocalizedTextVO("or"));
    this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.visible = false;
    this.worldSelectionDisp.mc_serverSelection.mc_helpTooltip.visible = false;
    this.worldSelectionDisp.mc_serverSelection.mc_helpTooltip.bg.height = t.textHeight + 90;
    this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.bg.height = i.textHeight + 90;
    this.initLanguageSelection();
    W.ClientBetaHelper.setSupportContextMenu();
    this.layoutManager.showServerAndClientVersion();
    if (D.MobileHelper.isScreenTooSmall()) {
      var n = this.panelDisp.getBounds();
      var o = n.x;
      var a = n.y;
      var s = n.width;
      var r = n.height;
      var l = new createjs.Shape();
      l.graphics.beginFill("#ffffff").drawRect(o - 120, a, s, r);
      l.alpha = 0.01;
      l.cache(o - 120, a, s, r);
      this.panelDisp.addChildAt(l, 0);
    }
    this._worldReminderTimer = new b.Timer(3000);
    this._worldReminderY = this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.y;
    this.updateDiscordTooltip();
  };
  ModernStartscreenPanel.prototype.destroy = function () {
    this.removeListener();
    e.prototype.destroy.call(this);
  };
  ModernStartscreenPanel.prototype.addListener = function () {
    this._txtInput_usernameRegister.focusIn.add(this.bindFunction(this.onFocusRegister));
    this._txtInput_usernameRegister.focusOut.add(this.bindFunction(this.onFocusOutRegisterName));
    this._txtInput_passwordRegister.focusIn.add(this.bindFunction(this.onFocusRegister));
    this._txtInput_passwordRegister.focusOut.add(this.bindFunction(this.onFocusOutRegisterPassword));
    this._txtInput_passwordRegister.keyDown.add(this.bindFunction(this.onKeyUp));
    this._txtInput_usernameRegister.click.add(this.bindFunction(this.hideErrorsAndFocusRegisterFields));
    this._txtInput_passwordRegister.click.add(this.bindFunction(this.hideErrorsAndFocusRegisterFields));
    this._txtInput_passwordLogin.focusIn.add(this.bindFunction(this.onFocusLogin));
    this._txtInput_passwordLogin.focusOut.add(this.bindFunction(this.onFocusOutPasswordLogin));
    this._txtInput_usernameLogin.focusIn.add(this.bindFunction(this.onFocusLogin));
    this._txtInput_usernameLogin.focusOut.add(this.bindFunction(this.onFocusOutUsernameLogin));
    this._txtInput_usernameLogin.click.add(this.bindFunction(this.hideErrorsAndFocusLoginFields));
    this._txtInput_passwordLogin.click.add(this.bindFunction(this.hideErrorsAndFocusLoginFields));
    this._txtInput_passwordLogin.keyDown.add(this.bindFunction(this.keyDownPwLogin));
    this.countrySelectionComponent.onOpenSignal.add(this.bindFunction(this.onOpenCountryList));
    this.countrySelectionComponent.onSelectSignal.add(this.bindFunction(this.onCountrySelected));
    this.serverSelectionComponent.onOpenSignal.add(this.bindFunction(this.onClickWorldSelection));
    this.serverSelectionComponent.onSelectSignal.add(this.bindFunction(this.onSelectWorld));
    this._floatingLabelRegisterName.onShow();
    this._floatingLabelRegisterPassword.onShow();
    this._floatingLabelLoginName.onShow();
    this._floatingLabelLoginPassword.onShow();
    this.controller.addEventListener(H.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.controller.addEventListener(H.CastleRegisterErrorEvent.LLI_ERROR, this.bindFunction(this.onLoginError));
    this.controller.addEventListener(G.CastleNameValidationEvent.VPN_OK, this.bindFunction(this.onRegisterNameOK));
    this.controller.addEventListener(G.CastleNameValidationEvent.VLN_OK, this.bindFunction(this.onLoginNameOK));
    c.BasicController.getInstance().addEventListener(a.CountryInstanceMappingEvent.PROCESS_COMPLETE, this.bindFunction(this.onNewLanguage));
    this.layoutManager.gamestage.addEventListener(ue.MOUSE_UP, this.bindFunction(this.onMouseUpOnLayoutManager));
    this.layoutManager.uiStage.addEventListener(ue.MOUSE_UP, this.bindFunction(this.onMouseUpOnLayoutManager));
    u.BasicLanguageFontManager.getInstance().addEventListener(O.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded), false, -50);
    this.countrySelectionComponent.onShow();
    this.serverSelectionComponent.onShow();
  };
  ModernStartscreenPanel.prototype.onNewLanguage = function (e) {
    this.updateTermsAndPrivacy();
  };
  ModernStartscreenPanel.prototype.onFocusOutRegisterName = function (e) {
    e.textContentVO = new R.TextVO(e.text);
    if (e.text) {
      var t = E.TextValide.getValideSmartFoxText(e.text);
      q.CastleModel.smartfoxClient.sendCommandVO(new U.C2SValidateNewPlayerNameVO(t));
    }
  };
  ModernStartscreenPanel.prototype.onFocusOutRegisterPassword = function (e) {
    e.textContentVO = new R.TextVO(e.text);
    if (e.text.length > 0 && e.text.length < x.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
      this._floatingLabelRegisterPassword.showError("error_password_too_short");
    }
  };
  ModernStartscreenPanel.prototype.removeListener = function () {
    this._txtInput_usernameRegister.focusIn.remove(this.bindFunction(this.onFocusRegister));
    this._txtInput_usernameRegister.focusOut.remove(this.bindFunction(this.onFocusOutRegisterName));
    this._txtInput_passwordRegister.focusIn.remove(this.bindFunction(this.onFocusRegister));
    this._txtInput_passwordRegister.focusOut.remove(this.bindFunction(this.onFocusOutRegisterPassword));
    this._txtInput_passwordRegister.keyDown.remove(this.bindFunction(this.onKeyUp));
    this._txtInput_usernameRegister.click.remove(this.bindFunction(this.hideErrorsAndFocusRegisterFields));
    this._txtInput_passwordRegister.click.remove(this.bindFunction(this.hideErrorsAndFocusRegisterFields));
    this._txtInput_passwordLogin.focusIn.remove(this.bindFunction(this.onFocusLogin));
    this._txtInput_passwordLogin.focusOut.remove(this.bindFunction(this.onFocusOutPasswordLogin));
    this._txtInput_usernameLogin.focusIn.remove(this.bindFunction(this.onFocusLogin));
    this._txtInput_usernameLogin.focusOut.remove(this.bindFunction(this.onFocusOutUsernameLogin));
    this._txtInput_usernameLogin.click.remove(this.bindFunction(this.hideErrorsAndFocusLoginFields));
    this._txtInput_passwordLogin.click.remove(this.bindFunction(this.hideErrorsAndFocusLoginFields));
    this._txtInput_passwordLogin.keyDown.remove(this.bindFunction(this.keyDownPwLogin));
    this.countrySelectionComponent.onOpenSignal.remove(this.bindFunction(this.onOpenCountryList));
    this.countrySelectionComponent.onSelectSignal.remove(this.bindFunction(this.onCountrySelected));
    this.serverSelectionComponent.onOpenSignal.remove(this.bindFunction(this.onClickWorldSelection));
    this.serverSelectionComponent.onSelectSignal.remove(this.bindFunction(this.onSelectWorld));
    this._floatingLabelRegisterName.onHide();
    this._floatingLabelRegisterPassword.onHide();
    this._floatingLabelLoginName.onHide();
    this._floatingLabelLoginPassword.onHide();
    this.controller.removeEventListener(H.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.controller.removeEventListener(H.CastleRegisterErrorEvent.LLI_ERROR, this.bindFunction(this.onLoginError));
    this.controller.removeEventListener(G.CastleNameValidationEvent.VPN_OK, this.bindFunction(this.onRegisterNameOK));
    this.controller.removeEventListener(G.CastleNameValidationEvent.VLN_OK, this.bindFunction(this.onLoginNameOK));
    this.layoutManager.gamestage.removeEventListener(ue.MOUSE_UP, this.bindFunction(this.onMouseUpOnLayoutManager));
    this.layoutManager.uiStage.removeEventListener(ue.MOUSE_UP, this.bindFunction(this.onMouseUpOnLayoutManager));
    u.BasicLanguageFontManager.getInstance().removeEventListener(O.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
    c.BasicController.getInstance().removeEventListener(a.CountryInstanceMappingEvent.PROCESS_COMPLETE, this.bindFunction(this.onNewLanguage));
    this.countrySelectionComponent.onHide();
    this.serverSelectionComponent.onHide();
  };
  ModernStartscreenPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.enableLoginButtons();
    this.checkReferral();
    this.addListener();
    this.setFocusToRegister();
    if (this.env.isLandingPageClient) {
      this.showLoginPanelImmediately();
    }
    if (_.EnvGlobalsHandler.globals.isClosedBeta) {
      this.registerDisp.visible = false;
      this._closedBetaBanner = new Library.CastleInterfaceElements.BetaTestBanner();
      this.textFieldManager.registerTextField(this._closedBetaBanner.txt_beta, new M.LocalizedTextVO("generic_country_closedbeta")).verticalAlign = f.GGSVerticalAlign.MIDDLE;
      this._closedBetaBanner.x = 6;
      this._closedBetaBanner.y = 300;
      this._closedBetaBanner.scaleX = this._closedBetaBanner.scaleY = 2;
      this.panelDisp.addChild(this._closedBetaBanner);
    } else {
      this.registerDisp.visible = true;
      if (this._closedBetaBanner) {
        this.panelDisp.removeChild(this._closedBetaBanner);
        this._closedBetaBanner = null;
      }
    }
    Q.CastleStartscreenComponent.onStartScreenShown.dispatch();
    this.bannerUpdater.startLoad();
    this.update();
    if (D.MobileHelper.isScreenTooSmall()) {
      this.panelDisp.addEventListener(ue.PRESS_MOVE, this.bindFunction(this.onMobilePressMove));
      this.panelDisp.addEventListener(ue.MOUSE_UP, this.bindFunction(this.onMobilePressUp));
      this.panelDisp.addEventListener(ue.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
    }
  };
  ModernStartscreenPanel.prototype.onMobilePressMove = function (e) {
    if (T.currentBrowserInfo.isTouchEvent(e)) {
      if (this.lastMobileTouchPoint) {
        this._deltaPoint.x = e.stageX - this.lastMobileTouchPoint.x;
        this._deltaPoint.y = e.stageY - this.lastMobileTouchPoint.y;
        var t = this.panelDisp.y + this._deltaPoint.y;
        if (t <= 0 && t >= this.panelDisp.stage.stageHeight - 650) {
          this.panelDisp.y = t;
          this.loginDisp.y -= this._deltaPoint.y;
          this.worldSelectionDisp.y -= this._deltaPoint.y;
          Q.CastleStartscreenComponent.onTouchMoveSignal.signal(this._deltaPoint);
        }
      } else {
        this.lastMobileTouchPoint = new le();
      }
      this.lastMobileTouchPoint.x = e.stageX;
      this.lastMobileTouchPoint.y = e.stageY;
    }
  };
  ModernStartscreenPanel.prototype.onMobilePressUp = function (e) {
    this.lastMobileTouchPoint = null;
  };
  ModernStartscreenPanel.prototype.onMobileDoubleClick = function () {
    this.layoutManager.toggleFullscreen();
  };
  ModernStartscreenPanel.prototype.checkReferral = function () {
    var e = this.env.urlVariables;
    if (e) {
      if (e.friendInviteCode) {
        this._inviterCode = e.friendInviteCode;
        var t = e.friendInviteZoneId;
        y.debug("--------------- going to try to find zone " + t);
        this.selectInstanceByZoneID(t);
      } else {
        this._inviterCode = "";
      }
      if (e.urlParams.has("refer_method")) {
        this._invite_refer_method = e.urlParams.get("refer_method");
      } else {
        this._invite_refer_method = "";
      }
    }
  };
  ModernStartscreenPanel.prototype.applyProperties = function () {
    this.isWaitingForServerMessage = false;
    this._txtInput_usernameRegister.maxChars = x.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    this._txtInput_passwordRegister.maxChars = x.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    var e = this.countrySelectionComponent.itemVOs.find(function (e) {
      return e.data == m.GGSCountryController.instance.currentCountry;
    });
    if (e) {
      this.countrySelectionComponent.selectedItem = e;
    } else if (this.countrySelectionComponent.itemVOs[0]) {
      this.countrySelectionComponent.selectedItem = this.countrySelectionComponent.itemVOs[0];
    }
    this.layoutManager.disableProgressbar();
    this.hideAllErrorMessages();
    this.update();
    this.unLockPanel();
    g.ClientFunnelTrackingController.getInstance().trackState("joined_startscreen");
    this.layoutManager.renderBGStage();
  };
  ModernStartscreenPanel.prototype.hide = function () {
    this.layoutManager.enableProgressbar();
    if (this.serverSelectionComponent) {
      this.serverSelectionComponent.closeDropdown();
    }
    if (this.countrySelectionComponent) {
      this.countrySelectionComponent.closeDropdown();
    }
    this.removeListener();
    e.prototype.hide.call(this);
    this.layoutManager.renderBGStage();
    if (D.MobileHelper.isScreenTooSmall()) {
      this.panelDisp.removeEventListener(ue.PRESS_MOVE, this.bindFunction(this.onMobilePressMove));
      this.panelDisp.removeEventListener(ue.MOUSE_UP, this.bindFunction(this.onMobilePressUp));
      this.panelDisp.removeEventListener(ue.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
      this.lastMobileTouchPoint = null;
      Q.CastleStartscreenComponent.onTouchMoveSignal.signal(null);
    }
  };
  ModernStartscreenPanel.prototype.onFocusRegister = function (e) {
    this.setFocusToRegister();
  };
  ModernStartscreenPanel.prototype.onFocusLogin = function (e) {
    this.setFocusToLogin();
  };
  ModernStartscreenPanel.prototype.onFocusOutUsernameLogin = function (e) {
    if (this._txtInput_usernameLogin.text == "") {
      this._wasUserNameModified = false;
    }
    if (e.text) {
      var t = E.TextValide.getValideSmartFoxText(e.text);
      q.CastleModel.smartfoxClient.sendCommandVO(new k.C2SValidateLoginNameVO(t));
    }
    this.fixBrowserAutofillBehaviour();
  };
  ModernStartscreenPanel.prototype.onFocusOutPasswordLogin = function (e) {
    if (this._txtInput_passwordLogin.text == "") {
      this._wasPasswordModified = false;
    }
    this.fixBrowserAutofillBehaviour();
  };
  ModernStartscreenPanel.prototype.fixBrowserAutofillBehaviour = function () {
    this._floatingLabelLoginName.fillFromHtmlText();
    this._floatingLabelLoginPassword.fillFromHtmlText();
  };
  ModernStartscreenPanel.prototype.initLanguageSelection = function () {
    var e = [];
    m.GGSCountryController.instance.activeCountries.forEach(function (t) {
      if (["BE", "ID", "PH"].indexOf(t.ggsCountryCode) == -1) {
        e.push(new se.ModernStartscreenDropdownComponentItemVO(P.Localize.text("language_native_ISO_" + t.ggsCountryCode.toLowerCase()), t));
      }
    });
    this.countrySelectionComponent = new ae.ModernStartscreenDropdownComponent(this.worldSelectionDisp.mc_countrySelection, true);
    this.countrySelectionComponent.init(e, 0);
    this.serverSelectionComponent = new ae.ModernStartscreenDropdownComponent(this.worldSelectionDisp.mc_serverSelection);
    $.ButtonHelper.initButtons([this.worldSelectionDisp.mc_serverSelection.mc_helpIcon], J.ClickFeedbackButtonHover);
  };
  ModernStartscreenPanel.prototype.updateElementsOnFontsLoaded = function (e) {
    this.initServerSelection();
    var t = this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_helpTooltip.txt_description, new M.LocalizedTextVO("generic_login_gameWorld_help_desc"));
    this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.txt_title, new M.LocalizedTextVO("generic_login_gameWorld_reminder_header"));
    var i = this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.txt_description, new M.LocalizedTextVO("generic_login_gameWorld_reminder_desc"));
    this.textFieldManager.registerTextField(this.worldSelectionDisp.mc_serverSelection.mc_selection.txt_label, new M.LocalizedTextVO("generic_login_gameWorld")).verticalAlign = f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.registerDisp.btn_register.txt_label, new R.TextVO(K.TextHelper.toUpperCaseLocaSafeTextId("generic_login_register"))).verticalAlign = f.GGSVerticalAlign.MIDDLE;
    this.worldSelectionDisp.mc_serverSelection.mc_helpTooltip.bg.height = t.textHeight + 90;
    this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.bg.height = i.textHeight + 90;
  };
  ModernStartscreenPanel.prototype.initRegister = function () {
    $.ButtonHelper.initButtons([this.registerDisp.btn_register, this.registerDisp.btn_fbRegister], J.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.registerDisp.btn_register.txt_label, new R.TextVO(K.TextHelper.toUpperCaseLocaSafeTextId("generic_login_register"))).verticalAlign = f.GGSVerticalAlign.MIDDLE;
    this.checkBoxAccept = new o.CheckBoxButton(this.registerDisp.mc_accept.cbx_accept);
    this.checkBoxAccept.deselected();
    $.ButtonHelper.enableButton(this.registerDisp.btn_register, false);
    this.registerDisp.btn_fbRegister.toolTipText = "generic_login_facebook_register";
    this.registerDisp.btn_fbRegister.visible = ge.CastleFacebookModule.available;
    this.panelDisp.mc_registerLogin.txt_or.visible = ge.CastleFacebookModule.available;
    this._floatingLabelRegisterName = new fe.StartscreenFloatingLabelTextfield(this.registerDisp.mc_username, "generic_username_login", false);
    this._floatingLabelRegisterPassword = new fe.StartscreenFloatingLabelTextfield(this.registerDisp.mc_password, "generic_login_password", true);
    this._txtInput_usernameRegister = this._floatingLabelRegisterName.inputTextField;
    this._txtInput_passwordRegister = this._floatingLabelRegisterPassword.inputTextField;
    this.textFieldManager.registerTextField(this.registerDisp.txt_passwordLimit, new M.LocalizedTextVO("generic_login_characterLimit"));
    this.textFieldManager.registerTextField(this.registerDisp.txt_switchTitle, new M.LocalizedTextVO("generic_login_alreadyHaveAccount"));
    this.textFieldManager.registerTextField(this.registerDisp.txt_switch, this.getLinkFormat("generic_login_logInPrompt"));
    this.registerDisp.txt_switch.actLikeButton = true;
    this.registerDisp.mc_passwordStrength.visible = false;
  };
  ModernStartscreenPanel.prototype.initLogin = function () {
    $.ButtonHelper.initButtons([this.loginDisp.btn_login, this.loginDisp.btn_fblogin], J.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.loginDisp.btn_login.txt_label, new M.LocalizedTextVO("generic_login_login"));
    this._floatingLabelLoginName = new fe.StartscreenFloatingLabelTextfield(this.loginDisp.mc_username, "generic_login_nameAndEmailAddress", false, "username");
    this._floatingLabelLoginPassword = new fe.StartscreenFloatingLabelTextfield(this.loginDisp.mc_password, "generic_login_password", true, "current-password");
    this._txtInput_usernameLogin = this._floatingLabelLoginName.inputTextField;
    this._txtInput_passwordLogin = this._floatingLabelLoginPassword.inputTextField;
    this._wasUserNameModified = false;
    this._wasPasswordModified = false;
    this.checkBoxComp = new o.CheckBoxButton(this.loginDisp.mc_savePassword.checkbox_savePassword);
    q.CastleModel.userData.persistentLogin = this.checkBoxComp.isSelected;
    this.textFieldManager.registerTextField(this.loginDisp.txt_forgotPassword, this.getLinkFormat("generic_login_lostpassword_url")).visible = !Y.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
    this.textFieldManager.registerTextField(this.loginDisp.mc_savePassword.txt_savePassword, new M.LocalizedTextVO("generic_login_rememberpassword")).mouseEnabled = false;
    this.loginDisp.btn_fblogin.toolTipText = "generic_login_facebook";
    this.loginDisp.btn_fblogin.visible = ge.CastleFacebookModule.available;
    this.textFieldManager.registerTextField(this.loginDisp.txt_switchTitle, new M.LocalizedTextVO("generic_login_noAccount"));
    this.textFieldManager.registerTextField(this.loginDisp.txt_switch, this.getLinkFormat("generic_login_signupAndPlay"));
    this.enableSaveData();
  };
  ModernStartscreenPanel.prototype.initTermsAndPrivacy = function () {
    ee.CastleMovieClipHelper.createHitArea(this.panelDisp.mc_registerLogin.agb_link);
    $.ButtonHelper.initBasicButton(this.panelDisp.mc_registerLogin.agb_link, 1);
    this.updateTermsAndPrivacy();
    this.textFieldManager.registerTextField(this.panelDisp.mc_registerLogin.mc_linkComponent.txt_ggsHeader, new M.LocalizedTextVO("empire_agb_terms_privacy_header"));
    this.textFieldManager.registerTextField(this.panelDisp.mc_registerLogin.mc_linkComponent.txt_reCaptchaHeader, new M.LocalizedTextVO("empire_agb_terms_privacy_reCAPTCHA_header"));
    this.agbLink = new ne.AGBLinkComponent(this.panelDisp.mc_registerLogin.mc_linkComponent.mc_ggsLinks);
    this.agbLink.colorData = [15921906, 15921906, F.ClientConstColor.DARK_LINK_COLOR];
    this.agbLink.verticalAlign = f.GGSVerticalAlign.TOP;
    this.agbLinkAccept = new ie.AGBLinkAcceptComponent(this.registerDisp.mc_accept);
    this.agbLinkAccept.colorData = [411053, 15921906, 411053];
    this.agbLinkAccept.verticalAlign = f.GGSVerticalAlign.TOP;
    this.reCaptchaLink = new oe.LinkComponent(this.panelDisp.mc_registerLogin.mc_linkComponent.mc_reCaptchaLinks, "empire_agb_terms_privacy_reCAPTCHA", "");
    this.reCaptchaLink.colorData = [15921906, 15921906, F.ClientConstColor.DARK_LINK_COLOR];
    this.reCaptchaLink.verticalAlign = f.GGSVerticalAlign.TOP;
    this.calculateLinkTooltipLayout();
    this.panelDisp.mc_registerLogin.mc_linkComponent.visible = false;
  };
  ModernStartscreenPanel.prototype.updateTermsAndPrivacy = function () {
    var e = "[url=1]" + P.Localize.text("empire_agb_terms_link") + "[/url]";
    P.Localize.text("empire_accept_agb_terms_privacy");
    this.textFieldManager.registerTextField(this.panelDisp.mc_registerLogin.agb_link.txt_desc, this.getLinkFormat(e, 3815994, 5921370));
  };
  ModernStartscreenPanel.prototype.calculateLinkTooltipLayout = function () {
    var e = 0;
    e = this.panelDisp.mc_registerLogin.mc_linkComponent.mc_reCaptchaLinks.y = e - this.panelDisp.mc_registerLogin.mc_linkComponent.mc_reCaptchaLinks.txt_desc.textHeight - 12;
    e = this.panelDisp.mc_registerLogin.mc_linkComponent.txt_reCaptchaHeader.y = e - this.panelDisp.mc_registerLogin.mc_linkComponent.txt_reCaptchaHeader.textHeight - 6;
    e = this.panelDisp.mc_registerLogin.mc_linkComponent.mc_separator.y = e - 8;
    e = this.panelDisp.mc_registerLogin.mc_linkComponent.mc_ggsLinks.y = e - this.panelDisp.mc_registerLogin.mc_linkComponent.mc_ggsLinks.txt_desc.textHeight - 12;
    var t = 10 - (e = this.panelDisp.mc_registerLogin.mc_linkComponent.txt_ggsHeader.y = e - this.panelDisp.mc_registerLogin.mc_linkComponent.txt_ggsHeader.textHeight - 6);
    this.panelDisp.mc_registerLogin.mc_linkComponent.bg.height = t;
  };
  ModernStartscreenPanel.prototype.getLinkFormat = function (e, t = 411053, i = 3367856) {
    var n = new L.HTMLTextCustomVO();
    n.addLocalizedTextVO(new M.LocalizedTextVO(e));
    var o = new A.HTMLLinkFormatVO(i, r.GGSTextDecoration.UNDERLINE);
    var a = new A.HTMLLinkFormatVO(i, r.GGSTextDecoration.UNDERLINE);
    var s = new A.HTMLLinkFormatVO(t, r.GGSTextDecoration.UNDERLINE);
    n.linkFormats = new S.HTMLLinkFormatsVO(o, a, s);
    return n;
  };
  ModernStartscreenPanel.prototype.keyDownPwLogin = function (e) {
    if (e.key == D.Keyboard.ENTER) {
      this.onLogin();
      e.stopImmediatePropagation();
    }
  };
  ModernStartscreenPanel.prototype.onOpenCountryList = function (e) {
    if (e) {
      this.serverSelectionComponent.closeDropdown();
      if (D.MobileHelper.isScreenTooSmall()) {
        this.layoutManager.toggleFullscreen(true);
      }
      g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.COUNTRY_SELECTION);
    }
  };
  ModernStartscreenPanel.prototype.onCountrySelected = function (e) {
    var t = e.data;
    var i = m.GGSCountryController.instance.currentCountry;
    this.currentSelectedInstanceForTest = this.env.isTest && !_.EnvGlobalsHandler.globals.urlVariables.urlParams.get("hideTestServers") ? d.BasicModel.instanceProxy.selectedInstanceVO.instanceId : -1;
    if (i.ggsCountryCode != t.ggsCountryCode) {
      g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.COUNTRY_CHANGED);
    }
    C.CommandController.instance.executeCommand(c.BasicController.COMMAND_CHANGE_COUNTRY, t);
    if (this.agbLink) {
      this.agbLink.update(this.env.urlAGB);
    }
    if (this.agbLinkAccept) {
      this.agbLinkAccept.update(this.env.urlAGB);
    }
    if (this.reCaptchaLink) {
      this.reCaptchaLink.update();
    }
    if (t.ggsCountryCode != "KR" || this.env.isIdentityManagementActive) {
      if (t.ggsCountryCode != "KR" && this.env.isIdentityManagementActive) {
        C.CommandController.instance.executeCommand(c.BasicController.COMMAND_IDENTITY_MANAGEMENT, false);
      }
    } else {
      C.CommandController.instance.executeCommand(c.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
    }
    this.bannerUpdater.startLoad();
    var n = d.BasicModel.instanceProxy.selectedInstanceVO;
    if (d.BasicModel.branchesModel && d.BasicModel.branchesModel.branchByZoneId(n.zoneId.toString()) != d.BasicModel.branchesModel.currentBranch) {
      C.CommandController.instance.executeCommand(c.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, n);
    }
    this.enableLoginButtons();
    this.updateDiscordTooltip();
  };
  ModernStartscreenPanel.prototype.onClickWorldSelection = function () {
    if (D.MobileHelper.isScreenTooSmall()) {
      this.layoutManager.toggleFullscreen(true);
    }
    this.countrySelectionComponent.closeDropdown();
    g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.SERVER_SELECTION);
    this.hideWorldReminder();
  };
  ModernStartscreenPanel.prototype.initServerSelection = function () {
    var e;
    var t = d.BasicModel.instanceProxy.instanceMap;
    var i = m.GGSCountryController.instance.currentCountry;
    var n = false;
    this.serverSelectionComponent.disp.visible = true;
    if (this.env.isTest || !this.hasEmptyServerInstance(t)) {
      var o;
      var a = [];
      var s = [];
      var r = new Map();
      t.forEach(function (e) {
        return r.set(e.instanceLocaId, (r.get(e.instanceLocaId) || 0) + 1);
      });
      for (var l = 0; l < t.length; l++) {
        var c = t[l];
        if ((!_.EnvGlobalsHandler.globals.urlVariables.urlParams.get("hideTestServers") || !(c.instanceId >= N.ClientConstInstanceIDs.INSTANCE_ID_TESTSERVER_START)) && c.instanceId != N.ClientConstInstanceIDs.INSTANCE_ID_TEMP && c.instanceId != N.ClientConstInstanceIDs.INSTANCE_ID_ABG) {
          var u = P.Localize.text(c.instanceLocaId);
          if (r.get(c.instanceLocaId) > 1) {
            u = u + ": " + c.instanceCountID;
          }
          e = new se.ModernStartscreenDropdownComponentItemVO(u, c);
          var p = c.countries.some(function (e) {
            return e.ggsCountryCode == i.ggsCountryCode;
          });
          if (!o && c.isFavorite && p) {
            o = e;
            a.unshift(o);
          } else if (p) {
            a.push(e);
          } else {
            s.push(e);
          }
          if (this.currentSelectedInstanceForTest >= 0 && c.instanceId == this.currentSelectedInstanceForTest) {
            n = true;
          }
        }
      }
      var h = a.concat(s);
      this.serverSelectionComponent.init(h, a.length - 1);
      this.selectInstance(n ? this.currentSelectedInstanceForTest : d.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
    } else {
      this.serverSelectionComponent.disp.visible = false;
    }
  };
  ModernStartscreenPanel.prototype.hasEmptyServerInstance = function (e) {
    return e.length == 1 && !e[0].instanceLocaId;
  };
  ModernStartscreenPanel.prototype.selectInstance = function (e) {
    var t = this.serverSelectionComponent.itemVOs.find(function (t) {
      return t.data.instanceId == e;
    });
    this.serverSelectionComponent.selectedItem = t || this.serverSelectionComponent.itemVOs[0];
  };
  ModernStartscreenPanel.prototype.selectInstanceByZoneID = function (e) {
    if (this.serverSelectionComponent && this.serverSelectionComponent.itemVOs) {
      var t = this.serverSelectionComponent.itemVOs.find(function (t) {
        return t.data.zoneId == e;
      });
      if (t) {
        this.serverSelectionComponent.selectedItem = t;
        var i = t.data;
        if (i.instanceId != d.BasicModel.instanceProxy.selectedInstanceVO.instanceId) {
          q.CastleModel.specialEventData.clearActiveEvents();
          C.CommandController.instance.executeCommand(c.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, i);
        }
      } else {
        this.serverSelectionComponent.selectedItem = this.serverSelectionComponent.itemVOs[0];
      }
    }
  };
  ModernStartscreenPanel.prototype.update = function () {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
    this.initServerSelection();
    var e = q.CastleModel.localData.readLoginDataUsername();
    if (e != null && e != "") {
      this.showLoginPanel();
      this._txtInput_usernameLogin.textContentVO = new R.TextVO(e);
      this.setFocusToLogin();
    }
    if (this.agbLink) {
      this.agbLink.update(this.env.urlAGB);
    }
    if (this.agbLinkAccept) {
      this.agbLinkAccept.update(this.env.urlAGB);
    }
    if (this.reCaptchaLink) {
      this.reCaptchaLink.update();
    }
    this.unLockPanel();
  };
  ModernStartscreenPanel.prototype.hideErrorsAndFocusRegisterFields = function (e) {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
  };
  ModernStartscreenPanel.prototype.hideErrorsAndFocusLoginFields = function (e) {
    this.hideAllErrorMessages();
    this.setFocusToLogin();
  };
  ModernStartscreenPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if ($.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.loginDisp.txt_switch:
          this.hideLoginPanel();
          break;
        case this.registerDisp.txt_switch:
          this.showLoginPanel();
          break;
        case this.registerDisp.btn_register:
          this.onRegister();
          if (D.MobileHelper.isScreenTooSmall()) {
            this.layoutManager.toggleFullscreen(true);
          }
          break;
        case this.registerDisp.btn_fbRegister:
          this.onFacebookRegister();
          this.disableLoginButtons();
          break;
        case this.loginDisp.btn_login:
          this.hideArrow();
          this.onLogin();
          if (D.MobileHelper.isScreenTooSmall()) {
            this.layoutManager.toggleFullscreen(true);
          }
          break;
        case this.loginDisp.btn_fblogin:
          this.hideArrow();
          this.onFacebookLogin();
          this.disableLoginButtons();
          break;
        case this.loginDisp.txt_password:
          if (!this._txtInput_passwordLogin.containsDefaultTextContent) {
            this._wasPasswordModified = true;
          }
          break;
        case this.loginDisp.txt_name:
          if (!this._txtInput_usernameLogin.containsDefaultTextContent) {
            this._wasUserNameModified = true;
          }
          break;
        case this.checkBoxComp.disp:
          this.hideArrow();
          this.onToggleSaveData();
          break;
        case this.loginDisp.txt_forgotPassword:
          this.hideArrow();
          this.focusState = ModernStartscreenPanel.FOCUS_NONE;
          Ce.CastleDialogHandler.getInstance().registerDialogs(me.CastleLostPasswordDialog, new Z.CastleLostPasswordDialogProperties(P.Localize.text("generic_login_lostpassword_title"), P.Localize.text("generic_login_lostpassword_copy"), null, null, P.Localize.text("generic_btn_okay"), P.Localize.text("generic_btn_cancel")));
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
          var i = t.target;
          this._txtInput_usernameRegister.clearText();
          this._txtInput_usernameRegister.textContentVO = new R.TextVO(this.textFieldManager.getTextField(i.txt_Name).text);
          this.hideAllErrorMessages();
          g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.PICKED_SUGGESTED_USERNAME);
          break;
        case this.panelDisp.btn_discord:
          C.CommandController.instance.executeCommand(z.CastleBasicController.OPEN_DISCORD, ["Login"]);
          break;
        case this.panelDisp.mc_registerLogin.agb_link:
          if (!this.panelDisp.mc_registerLogin.mc_linkComponent.visible) {
            this.calculateLinkTooltipLayout();
          }
          this.panelDisp.mc_registerLogin.mc_linkComponent.visible = !this.panelDisp.mc_registerLogin.mc_linkComponent.visible;
          break;
        case this.checkBoxAccept.disp:
          this.checkBoxAccept.toggleSelected();
          $.ButtonHelper.enableButton(this.registerDisp.btn_register, this.checkBoxAccept.isSelected);
      }
    }
  };
  ModernStartscreenPanel.prototype.onFacebookLogin = function () {
    if (!this._registerBtnAlreadyClicked) {
      this._registerBtnAlreadyClicked = true;
      this.hideAllErrorMessages();
      this.controller.addEventListener(j.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(j.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(j.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onLoginWithFacebookDetails));
      ge.CastleFacebookModule.login();
    }
  };
  ModernStartscreenPanel.prototype.onFacebookRegister = function () {
    if (!this._registerBtnAlreadyClicked && this._txtInput_usernameRegister.text.length < 1 || this._txtInput_usernameRegister.text.length > 0 && this.usernameIsValid()) {
      this._registerBtnAlreadyClicked = true;
      this.hideAllErrorMessages();
      this.controller.addEventListener(j.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(j.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(j.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onRegisterWithFacebookDetails));
      ge.CastleFacebookModule.login();
    }
  };
  ModernStartscreenPanel.prototype.onRegisterWithFacebookDetails = function (e) {
    this._registerBtnAlreadyClicked = false;
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onRegisterWithFacebookDetails));
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
    var t = {
      fid: e.authResponse.userID,
      ftk: e.authResponse.accessToken,
      pn: this._txtInput_usernameRegister && this._txtInput_usernameRegister.text.length > 0 ? this._txtInput_usernameRegister.text : null
    };
    C.CommandController.instance.executeCommand(he.IngameClientCommands.REGISTER_USER_WITH_FACEBOOK, t);
  };
  ModernStartscreenPanel.prototype.onLoginWithFacebookDetails = function (e) {
    this._registerBtnAlreadyClicked = false;
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onLoginWithFacebookDetails));
    C.CommandController.instance.executeCommand(c.BasicController.COMMAND_LOGIN, e.authResponse);
  };
  ModernStartscreenPanel.prototype.onToggleSaveData = function () {
    if (this.checkBoxComp.isSelected) {
      this.disableSaveData();
    } else {
      this.enableSaveData();
    }
  };
  ModernStartscreenPanel.prototype.enableSaveData = function () {
    q.CastleModel.userData.persistentLogin = true;
    this.checkBoxComp.selected();
  };
  ModernStartscreenPanel.prototype.disableSaveData = function () {
    this.checkBoxComp.deselected();
    q.CastleModel.userData.persistentLogin = false;
  };
  ModernStartscreenPanel.prototype.onRegister = function () {
    if (!this.loginBlocked && !this._registerBtnAlreadyClicked) {
      this.hideAllErrorMessages();
      if (!this.checkEmptyOK()) {
        return;
      }
      g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA);
      if (!this.checkTooShortOK() || !this.checkInvalidOK()) {
        return;
      }
      var e = [];
      e.push(this._txtInput_passwordRegister.text);
      if (!this.usernameIsValid()) {
        return;
      }
      e.push(E.TextValide.getValideSmartFoxText(this._txtInput_usernameRegister.text));
      if (this._inviterCode) {
        _.EnvGlobalsHandler.globals.inviterCode = this._inviterCode;
      } else {
        _.EnvGlobalsHandler.globals.inviterCode = "";
      }
      if (this._invite_refer_method) {
        _.EnvGlobalsHandler.globals.invite_refer_method = this._invite_refer_method;
      } else {
        _.EnvGlobalsHandler.globals.invite_refer_method = "";
      }
      this._registerBtnAlreadyClicked = true;
      C.CommandController.instance.executeCommand(c.BasicController.COMMAND_REGISTER_USER, e);
      this.disableLoginButtons();
    }
  };
  ModernStartscreenPanel.prototype.usernameIsValid = function () {
    if (!E.TextValide.isUsernameValide(this._txtInput_usernameRegister.text)) {
      g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_NAME_INVALID);
      this._floatingLabelRegisterName.showError("error_name_invalid");
      var e = E.TextValide.getValidUsername(this._txtInput_usernameRegister.text);
      if (e != "" && E.TextValide.isUsernameValide(e)) {
        this.initNameSelection([e]);
      }
      return false;
    }
    return true;
  };
  ModernStartscreenPanel.prototype.checkEmptyLoginCredentials = function () {
    var e = true;
    if (this._floatingLabelLoginName.inputText.length == 0) {
      this._floatingLabelLoginName.showError("generic_login_usernameFieldEmpty");
      e = false;
    }
    if (this._floatingLabelLoginPassword.inputText.length == 0) {
      this._floatingLabelLoginPassword.showError("generic_login_passwordFieldEmpty");
      e = false;
    }
    return e;
  };
  ModernStartscreenPanel.prototype.checkEmptyOK = function () {
    if (this._txtInput_usernameRegister.text.length == 0 && this._txtInput_passwordRegister.text.length == 0) {
      g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_CLICK_REGISTER_WITHOUT_DATA);
      this._floatingLabelRegisterName.showError("generic_login_usernameFieldEmpty");
      return false;
    }
    if (this._txtInput_usernameRegister.text.length == 0) {
      g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_NAME_EMPTY);
      this._floatingLabelRegisterName.showError("generic_login_usernameFieldEmpty");
      return false;
    }
    if (/(\s)\1+/g.test(this._txtInput_usernameRegister.text)) {
      this._floatingLabelRegisterName.showError("error_name_invalid_consecutiveSpaces");
      return false;
    } else {
      return this._txtInput_passwordRegister.text.length != 0 || (g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_PASS_EMPTY), this._floatingLabelRegisterPassword.showError("generic_login_passwordFieldEmpty"), false);
    }
  };
  ModernStartscreenPanel.prototype.checkTooShortOK = function () {
    if (this._txtInput_usernameRegister.text.length < d.BasicModel.basicLocalization.getUsernameMinLength) {
      g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_NAME_TOO_SHORT);
      this._floatingLabelRegisterName.showError("error_name_too_short");
      return false;
    } else {
      return !(this._txtInput_passwordRegister.text.length < x.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) || (g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_PASS_TOO_SHORT), this._floatingLabelRegisterPassword.showError("error_password_too_short"), false);
    }
  };
  ModernStartscreenPanel.prototype.checkInvalidOK = function () {
    return !!E.TextValide.isSmartFoxValide(this._txtInput_passwordRegister.text) || (g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_PASS_INVALID), this._floatingLabelRegisterPassword.showError("error_password_invalid"), false);
  };
  ModernStartscreenPanel.prototype.onKeyUp = function (e) {
    if (!this.isLocked) {
      if (e.key == D.Keyboard.ENTER) {
        switch (this.focusState) {
          case ModernStartscreenPanel.FOCUS_LOGIN:
            this.onLogin();
            break;
          case ModernStartscreenPanel.FOCUS_REGISTER:
            if (!this.checkBoxAccept.isSelected) {
              return;
            }
            this.onRegister();
            return;
        }
      }
      var t = /\n/g;
      var i = /\t/g;
      this._txtInput_usernameRegister.textContentVO.stringValue = this._txtInput_usernameRegister.text.replace(t, "");
      this._txtInput_passwordRegister.textContentVO.stringValue = this._txtInput_passwordRegister.text.replace(t, "");
      this._txtInput_usernameRegister.textContentVO.stringValue = this._txtInput_usernameRegister.text.replace(i, "");
      this._txtInput_passwordRegister.textContentVO.stringValue = this._txtInput_passwordRegister.text.replace(i, "");
      switch (e.target) {
        case this.registerDisp.mc_username.txt_input:
          if (!this._txtInput_usernameRegister.data.sended) {
            y.debug("---- sending username Register");
            this._txtInput_usernameRegister.data.sended = true;
            g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ENTER_NAME);
          }
          break;
        case this.registerDisp.mc_password.txt_input:
          if (x.CredentialsValidationConstants.PASSWORD_MAX_LENGTH <= this._txtInput_passwordRegister.text.length) {
            this._floatingLabelRegisterPassword.showError("error_password_too_long");
          } else {
            this.hideAllErrorMessages();
          }
          if (!this._txtInput_passwordRegister.data.sended) {
            y.debug("---- sending password Register");
            this._txtInput_passwordRegister.data.sended = true;
            g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ENTER_PASSWORD);
          }
          break;
        case this.loginDisp.mc_password.txt_input:
          if (!this._txtInput_passwordLogin.containsDefaultTextContent && !this._txtInput_passwordLogin.data.sended) {
            y.debug("---- sending password login");
            this._txtInput_passwordLogin.data.sended = true;
            this._wasPasswordModified = true;
            g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.LOGIN_ENTER_PASSWORD);
          }
          break;
        case this.loginDisp.mc_username.txt_input:
          if (!this._txtInput_usernameLogin.containsDefaultTextContent && !this._txtInput_usernameLogin.data.sended) {
            y.debug("---- sending username login");
            this._txtInput_usernameLogin.data.sended = true;
            this._wasUserNameModified = true;
            g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.LOGIN_ENTER_NAME);
          }
      }
    }
  };
  ModernStartscreenPanel.prototype.onRegisterNameOK = function (e = null) {
    this._floatingLabelRegisterName.showValidated();
    this.showWorldReminder();
  };
  ModernStartscreenPanel.prototype.onLoginNameOK = function (e) {
    this._floatingLabelLoginName.showValidated();
  };
  ModernStartscreenPanel.prototype.onLoginError = function (e) {
    this.enableLoginButtons();
    switch (e.params) {
      case v.ERROR.PLAYER_NOT_FOUND:
        this._floatingLabelLoginName.showError("generic_login_usernameNotFound");
        break;
      case v.ERROR.INVALID_PASSWORD:
        this._floatingLabelLoginPassword.showError("generic_login_passwordIncorrect");
    }
  };
  ModernStartscreenPanel.prototype.onRegisterError = function (e) {
    switch (e.errorType) {
      case H.CastleRegisterErrorEvent.INVALID_NAME:
        g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this._floatingLabelRegisterName.showError("error_name_invalid");
        this.initNameSelection(e.params.NS);
        break;
      case H.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE:
        g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_NAME_EXISTS);
        this._floatingLabelRegisterName.showError("generic_login_usernameTaken");
        this.initNameSelection(e.params.NS);
        break;
      case H.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS:
        g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this._floatingLabelRegisterName.showError("error_name_is_number");
        this.initNameSelection(e.params.NS);
        break;
      case H.CastleRegisterErrorEvent.USAGE_OF_BADWORDS:
        g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_NAME_BADWORD);
        this._floatingLabelRegisterName.showError("error_badword");
        this.initNameSelection(e.params.NS);
        break;
      case H.CastleRegisterErrorEvent.INVALID_PASSWORD:
        g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_PASS_INVALID);
        this._floatingLabelRegisterPassword.showError("error_password_invalid");
        break;
      case H.CastleRegisterErrorEvent.INVALID_LOGIN_FIELD:
        g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_INVALID_LOGIN_FIELD);
        this._txtInput_usernameLogin.textContentVO = new R.TextVO(this._txtInput_usernameRegister.text);
        this._txtInput_passwordLogin.textContentVO = new R.TextVO(this._txtInput_passwordRegister.text);
        Ce.CastleDialogHandler.getInstance().registerDialogs(_e.CastleStandardOkLoginDialog, new p.BasicStandardOkDialogProperties(P.Localize.text("generic_alert_information"), P.Localize.text("generic_login_accountexists"), this.bindFunction(this.openLoginAndShowArrow)));
    }
    this._registerBtnAlreadyClicked = false;
    this.enableLoginButtons();
  };
  ModernStartscreenPanel.prototype.openLoginAndShowArrow = function () {
    this.showLoginPanel();
    pe.CastleTutorialArrowController.instance.replace(this.loginDisp.btn_login, true, true);
  };
  ModernStartscreenPanel.prototype.hideArrow = function () {
    pe.CastleTutorialArrowController.instance.clear();
  };
  ModernStartscreenPanel.prototype.initNameSelection = function (e) {
    var t;
    var i = this.registerDisp.mc_nameSelection;
    for (var n = 0; n < 3; n++) {
      var o = i["i" + n];
      o.actLikeButton = true;
      o.mouseChildren = false;
      o.visible = true;
      t = "";
      if (e && n < e.length) {
        t = e[n];
      }
      if (t != "") {
        this.textFieldManager.registerTextField(o.txt_Name, new R.TextVO(t));
        o.suggestedName = t;
      } else {
        o.visible = false;
      }
    }
    g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.ERROR_NAME_DIALOG_CHOOSE_NAME);
    if (D.MobileHelper.isScreenTooSmall()) {
      if (D.MobileHelper.isPortrait()) {
        i.x = 15;
        i.y = 34;
      } else {
        i.x = 292;
        i.y = 34;
      }
    }
    i.visible = !!e;
    B.TweenMax.fromTo(i, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: w.Bounce.easeOut
    });
  };
  ModernStartscreenPanel.prototype.hideAllErrorMessages = function () {
    this.countrySelectionComponent.closeDropdown();
    this.serverSelectionComponent.closeDropdown();
    this.registerDisp.mc_nameSelection.visible = false;
    this.hideSmallErrorMessages();
  };
  ModernStartscreenPanel.prototype.hideSmallErrorMessages = function () {
    this._floatingLabelRegisterName.hideError();
    this._floatingLabelRegisterPassword.hideError();
    this._floatingLabelLoginName.hideError();
    this._floatingLabelLoginPassword.hideError();
  };
  ModernStartscreenPanel.prototype.onSelectWorld = function (e) {
    W.ClientBetaHelper.setSupportContextMenu();
    if (this.serverSelectionComponent.selectedItem) {
      var t = this.serverSelectionComponent.selectedItem.data;
      var i = d.BasicModel.branchesModel;
      var n = d.BasicModel.branchesModel.branchByZoneId(t.zoneId.toString());
      var o = d.BasicModel.branchesModel.currentBranch;
      var a = d.BasicModel.instanceProxy.selectedInstanceVO;
      var s = o.id == "default";
      var r = I.instanceOfClass(t, "TestInstanceVO") || t.zone.indexOf("Test") > 0;
      var l = I.instanceOfClass(a, "TestInstanceVO") || t.zone.indexOf("Test") > 0;
      if ((!i || n == null == s || n == o || r || l) && Oe.StartscreenHelper.usesModernStartscreen(t.zoneId)) {
        if (t.instanceId != d.BasicModel.instanceProxy.selectedInstanceVO.instanceId) {
          q.CastleModel.specialEventData.clearActiveEvents();
          C.CommandController.instance.executeCommand(c.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, t);
          g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.SERVER_CHANGED);
        }
      } else {
        C.CommandController.instance.executeCommand(c.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, t);
      }
    } else if (this.serverSelectionComponent.itemVOs.length > 0) {
      this.serverSelectionComponent.selectedItem = this.serverSelectionComponent.itemVOs[0];
    }
  };
  ModernStartscreenPanel.prototype.onMouseUpOnLayoutManager = function (e) {
    if (!l.MovieClipHelper.isChildrenOf(e.target, this.countrySelectionComponent.disp)) {
      this.countrySelectionComponent.closeDropdown();
    }
    if (!l.MovieClipHelper.isChildrenOf(e.target, this.panelDisp.mc_registerLogin.mc_linkComponent) && e.target != this.panelDisp.mc_registerLogin.agb_link) {
      this.panelDisp.mc_registerLogin.mc_linkComponent.visible = false;
    }
  };
  ModernStartscreenPanel.prototype.setFocusToRegister = function () {
    this.focusState = ModernStartscreenPanel.FOCUS_REGISTER;
    this._txtInput_usernameLogin.tabEnabled = false;
    this._txtInput_passwordLogin.tabEnabled = false;
    this._txtInput_usernameRegister.tabIndex = 1;
    this._txtInput_passwordRegister.tabIndex = 2;
    this._txtInput_usernameRegister.tabEnabled = true;
    this._txtInput_passwordRegister.tabEnabled = true;
    this.loginIsVisible = false;
    this.loginDisp.visible = false;
    this.registerDisp.visible = true;
  };
  ModernStartscreenPanel.prototype.setFocusToLogin = function () {
    this.focusState = ModernStartscreenPanel.FOCUS_LOGIN;
    this._txtInput_usernameRegister.tabEnabled = false;
    this._txtInput_passwordRegister.tabEnabled = false;
    this._txtInput_usernameLogin.tabIndex = 1;
    this._txtInput_passwordLogin.tabIndex = 2;
    this._txtInput_usernameLogin.tabEnabled = true;
    this._txtInput_passwordLogin.tabEnabled = true;
    this.loginIsVisible = true;
    this.loginDisp.visible = true;
    this.registerDisp.visible = false;
    this.enableLoginButtons();
    this.hideWorldReminder();
  };
  ModernStartscreenPanel.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (!this.isLocked) {
      switch (t.target) {
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
          var i = t.target;
          i.scaleX = i.scaleY = 1.05;
          break;
        case this.worldSelectionDisp.mc_serverSelection.mc_helpIcon:
          this.worldSelectionDisp.mc_serverSelection.mc_helpTooltip.visible = true;
          break;
        case this.panelDisp.btn_discord:
          X.CastleLayoutManager.getInstance().tooltipManager.hide();
          this.panelDisp.mc_discord_tooltip.visible = true;
      }
    }
  };
  ModernStartscreenPanel.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (!this.isLocked) {
      switch (t.target) {
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
          var i = t.target;
          i.scaleX = i.scaleY = 1;
          break;
        case this.worldSelectionDisp.mc_serverSelection.mc_helpIcon:
          this.worldSelectionDisp.mc_serverSelection.mc_helpTooltip.visible = false;
          break;
        case this.panelDisp.btn_discord:
          this.panelDisp.mc_discord_tooltip.visible = false;
      }
    }
  };
  ModernStartscreenPanel.prototype.onMouseDown = function (t) {
    e.prototype.onMouseDown.call(this, t);
    if (!this.isLocked) {
      switch (t.target) {
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
          var i = t.target;
          this._txtInput_usernameRegister.textContentVO = new R.TextVO(i.suggestedName);
      }
    }
  };
  ModernStartscreenPanel.prototype.showLoginPanelImmediately = function () {
    this.showLoginPanel();
  };
  ModernStartscreenPanel.prototype.showLoginPanel = function () {
    if (!this.loginIsVisible) {
      this.setFocusToLogin();
      this.hideAllErrorMessages();
    }
  };
  ModernStartscreenPanel.prototype.hideLoginPanel = function () {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
  };
  ModernStartscreenPanel.prototype.onLogin = function () {
    if (!this.loginBlocked) {
      if (this.checkEmptyLoginCredentials()) {
        this.lockPanel();
        this.hideAllErrorMessages();
        q.CastleModel.userData.userName = E.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_usernameLogin.text);
        q.CastleModel.userData.loginPwd = E.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_passwordLogin.text);
        if (!q.CastleModel.userData.persistentLogin) {
          q.CastleModel.localData.saveUsername("");
        }
        C.CommandController.instance.executeCommand(c.BasicController.COMMAND_LOGIN);
        C.CommandController.instance.executeCommand(he.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
        g.ClientFunnelTrackingController.getInstance().trackState(h.ClientFunnelGameStates.LOGIN_CLICKED);
        this.disableLoginButtons();
      }
    }
  };
  ModernStartscreenPanel.prototype.updateDiscordTooltip = function () {
    this.panelDisp.mc_discord_tooltip.visible = false;
    $.ButtonHelper.initButton(this.panelDisp.btn_discord, 1, J.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.panelDisp.mc_discord_tooltip.txt_title, new M.LocalizedTextVO("generic_login_discordButton_header"));
    this.textFieldManager.registerTextField(this.panelDisp.mc_discord_tooltip.txt_copy, new M.LocalizedTextVO("generic_login_discordButton_tooltip"));
  };
  ModernStartscreenPanel.prototype.updatePosition = function () {
    if (this.panelDisp && this.panelDisp.stage) {
      var e = this.disp.stage ? this.disp.stage.stageWidth : document.documentElement.clientWidth;
      var t = this.disp.stage ? this.disp.stage.stageHeight : document.documentElement.clientHeight;
      var i = V.int(document.getElementById("edgeStartscreenVideoReplacement").clientWidth) || 1920;
      var n = V.int(document.getElementById("edgeStartscreenVideoReplacement").clientHeight) || 1080;
      var o = V.int(Math.min(e, i));
      var a = V.int(Math.min(t, n));
      var r = s.MathBase.clamp(t / 820, ModernStartscreenPanel.MIN_SCALE, ModernStartscreenPanel.MAX_SCALE);
      var l = r * 35;
      this.panelDisp.x = e * 0.5;
      this.panelDisp.y = 0;
      this.panelDisp.mc_registerLogin.x = 0;
      this.panelDisp.mc_registerLogin.y = r * 323;
      this.panelDisp.mc_registerLogin.scaleX = this.panelDisp.mc_registerLogin.scaleY = r;
      this.worldSelectionDisp.x = o * 0.5 - l;
      this.worldSelectionDisp.y = l;
      this.worldSelectionDisp.scaleX = this.worldSelectionDisp.scaleY = r;
      this.panelDisp.btn_discord.y = a - l - this.panelDisp.btn_discord.height / 2;
      this.panelDisp.mc_discord_tooltip.y = this.panelDisp.btn_discord.y - 50;
      this.panelDisp.btn_discord.x = -o / 2 + l + this.panelDisp.btn_discord.width / 2 + 90;
      this.panelDisp.mc_discord_tooltip.x = this.panelDisp.btn_discord.x;
    }
  };
  ModernStartscreenPanel.prototype.onResize = function (t) {
    if (!T.currentBrowserInfo.isMobile || !D.TextField.isMobileKeyboardShown) {
      e.prototype.onResize.call(this, t);
      this.updatePosition();
    }
  };
  ModernStartscreenPanel.prototype.onFontsLoaded = function (e) {
    if (this.isVisible()) {
      this.update();
    }
  };
  Object.defineProperty(ModernStartscreenPanel.prototype, "worldSelectionDisp", {
    get: function () {
      return this.panelDisp.mc_worldSelection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenPanel.prototype, "registerDisp", {
    get: function () {
      return this.panelDisp.mc_registerLogin.mc_register;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenPanel.prototype, "loginDisp", {
    get: function () {
      return this.panelDisp.mc_registerLogin.mc_login;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ModernStartscreenPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  ModernStartscreenPanel.prototype.onFbCancelled = function (e) {
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onRegisterWithFacebookDetails));
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(j.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
    this._registerBtnAlreadyClicked = false;
    this.unLockPanel();
    this.enableLoginButtons();
  };
  ModernStartscreenPanel.prototype.enableLoginButtons = function () {
    $.ButtonHelper.enableButton(this.registerDisp.btn_register, this.checkBoxAccept.isSelected);
    $.ButtonHelper.enableButton(this.registerDisp.btn_fbRegister, true);
    $.ButtonHelper.enableButton(this.loginDisp.btn_login, true);
    $.ButtonHelper.enableButton(this.loginDisp.btn_fblogin, true);
    this.loginBlocked = false;
    this._registerBtnAlreadyClicked = false;
  };
  ModernStartscreenPanel.prototype.disableLoginButtons = function () {
    $.ButtonHelper.enableButton(this.registerDisp.btn_register, false);
    $.ButtonHelper.enableButton(this.registerDisp.btn_fbRegister, false);
    $.ButtonHelper.enableButton(this.loginDisp.btn_login, false);
    $.ButtonHelper.enableButton(this.loginDisp.btn_fblogin, false);
    this.loginBlocked = true;
  };
  ModernStartscreenPanel.prototype.showWorldReminder = function () {
    if (!this._worldReminderShown) {
      this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.visible = true;
      this._worldReminderTimer.start();
      this._worldReminderTimer.addEventListener(ce.TIMER, this.bindFunction(this.onWorldReminderTimer));
      this.onWorldReminderTimer();
      this._worldReminderShown = true;
    }
  };
  ModernStartscreenPanel.prototype.hideWorldReminder = function () {
    this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip.visible = false;
    this._worldReminderTimer.stop();
    this._worldReminderTimer.removeEventListener(ce.TIMER, this.bindFunction(this.onWorldReminderTimer));
  };
  ModernStartscreenPanel.prototype.onWorldReminderTimer = function () {
    var e = this;
    B.TweenMax.fromTo(this.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip, 0.5, {
      y: this._worldReminderY
    }, {
      y: this._worldReminderY + 5,
      onComplete: function () {
        B.TweenMax.fromTo(e.worldSelectionDisp.mc_serverSelection.mc_worldReminderTooltip, 1, {
          y: e._worldReminderY + 5
        }, {
          y: e._worldReminderY,
          ease: w.Bounce.easeOut
        });
      }
    });
  };
  ModernStartscreenPanel.NAME = "ModernStartscreenPanel";
  ModernStartscreenPanel.MIN_SCALE = 0.73;
  ModernStartscreenPanel.MAX_SCALE = 1;
  ModernStartscreenPanel.FOCUS_LOGIN = "FOCUS_LOGIN";
  ModernStartscreenPanel.FOCUS_REGISTER = "FOCUS_REGISTER";
  ModernStartscreenPanel.FOCUS_NONE = "FOCUS_NONE";
  return ModernStartscreenPanel;
}(te.CastlePanel);
exports.ModernStartscreenPanel = de;
var pe = require("./300.js");
var he = require("./29.js");
var ge = require("./193.js");
var Ce = require("./9.js");
var _e = require("./1871.js");
var me = require("./916.js");
var fe = require("./4167.js");
var Oe = require("./334.js");