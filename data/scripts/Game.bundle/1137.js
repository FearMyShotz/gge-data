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
var y = require("./1.js");
var b = require("./1.js");
var D = require("./1.js");
var I = require("./1.js");
var T = require("./3.js");
var v = require("./3.js");
var S = require("./3.js");
var A = require("./6.js");
var L = require("./258.js");
var P = require("./23.js");
var M = require("./23.js");
var R = require("./23.js");
var V = require("./342.js");
var x = require("./364.js");
var w = require("./600.js");
var B = require("./492.js");
var F = require("./44.js");
var N = require("./4.js");
var k = require("./306.js");
var U = require("./68.js");
var G = require("./848.js");
var H = require("./1870.js");
var j = require("./171.js");
var W = require("./42.js");
var Y = require("./918.js");
var K = require("./8.js");
var z = require("./41.js");
var q = require("./131.js");
var X = require("./1871.js");
var Q = require("./1872.js");
var J = createjs.Point;
var Z = createjs.MouseEvent;
var $ = function (e) {
  function CastleStartscreenPanel() {
    var t = this;
    t.loginIsVisible = false;
    t.focusState = CastleStartscreenPanel.FOCUS_REGISTER;
    t._registerBtnAlreadyClicked = false;
    t.loginBlocked = false;
    t._wasUserNameModified = false;
    t._wasPasswordModified = false;
    t.currentSelectedInstanceForTest = -1;
    t._deltaPoint = new J();
    CONSTRUCTOR_HACK;
    (t = e.call(this, new Library.CastleStartscreen.CastleStartscreen_zzz39Facebook_Toaster()) || this).defaultMailStringID = "generic_email";
    t.defaultNameStringID = "generic_username_login";
    t.defaultPasswordStringID = "generic_login_password";
    return t;
  }
  n.__extends(CastleStartscreenPanel, e);
  CastleStartscreenPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.bannerUpdater = new Q.StartScreenAdBannerLoader(this.registerDisp);
    this.checkBoxComp = new o.CheckBoxButton(this.loginDisp.mc_slideArea.mc_checkboxLogin);
    this.loginDisp.mc_slideArea.btn_loginArrow.mouseChildren = false;
    this.loginDisp.mc_slideArea.btn_login.mouseChildren = false;
    this.initRegister();
    this.initLogin();
    this.registerDisp.mc_korean.visible = false;
    this.textFieldManager.registerTextField(this.registerDisp.mc_nameSelection.txt_title, new v.LocalizedTextVO("error_name_propositions"));
    this.textFieldManager.registerTextField(this.registerDisp.mc_username.txt_label, new v.LocalizedTextVO(this.defaultNameStringID));
    this.textFieldManager.registerTextField(this.registerDisp.mc_password.txt_label, new v.LocalizedTextVO(this.defaultPasswordStringID));
    this.textFieldManager.registerTextField(this.registerDisp.btn_register.txt_label, new v.LocalizedTextVO("empirePlay")).verticalAlign = m.GGSVerticalAlign.MIDDLE;
    this.initLanguageSelection();
    B.ClientBetaHelper.setSupportContextMenu();
    this.layoutManager.showServerAndClientVersion();
    this.applyCache();
    if (y.MobileHelper.isScreenTooSmall()) {
      var t = this.panelDisp.getBounds();
      var i = t.x;
      var n = t.y;
      var a = t.width;
      var s = t.height;
      var r = new createjs.Shape();
      r.graphics.beginFill("#ffffff").drawRect(i - 120, n, a, s);
      r.alpha = 0.01;
      r.cache(i - 120, n, a, s);
      this.panelDisp.addChildAt(r, 0);
      this.panelDisp.swapChildren(this.loginDisp, this.countryDisp);
    }
  };
  CastleStartscreenPanel.prototype.applyCache = function () {
    if (this.loginDisp.getChildAt(0)) {
      this.loginDisp.getChildAt(0).doCache();
    }
    if (this.loginDisp.mc_slideArea.getChildAt(0)) {
      this.loginDisp.mc_slideArea.getChildAt(0).doCache();
    }
    if (this.registerDisp.mc_username.getChildAt(0)) {
      this.registerDisp.mc_username.getChildAt(0).doCache();
    }
    if (this.registerDisp.mc_password.getChildAt(0)) {
      this.registerDisp.mc_password.getChildAt(0).doCache();
    }
  };
  CastleStartscreenPanel.prototype.versionInfo = function () {
    return "Transpiled 2.156.3\n" + k.CastleVersionInformation.versionInstance.versionText;
  };
  CastleStartscreenPanel.prototype.destroy = function () {
    this.removeListener();
    e.prototype.destroy.call(this);
  };
  CastleStartscreenPanel.prototype.addListener = function () {
    this._txtInput_usernameRegister.focusIn.add(this.bindFunction(this.onFocusRegister));
    this._txtInput_usernameRegister.focusOut.add(this.bindFunction(this.onFocusOutRegister));
    this._txtInput_passwordRegister.focusIn.add(this.bindFunction(this.onFocusRegister));
    this._txtInput_passwordRegister.focusOut.add(this.bindFunction(this.onFocusOutRegister));
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
    this.selectCountryComponent.addEventListener(g.CountrySelectComponentEvent.COUNTRY_VIEW_OPENED, this.bindFunction(this.onOpenCountryList));
    this.selectCountryComponent.addEventListener(g.CountrySelectComponentEvent.COUNTRY_CHANGED, this.bindFunction(this.onCountrySelected));
    this.selectServerCombobox.userClickItemSignal.add(this.bindFunction(this.onTrackSelectWorld));
    this.countryDisp.cbx_world.addEventListener(a.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onClickWorldSelection));
    this.countryDisp.cbx_world.addEventListener(a.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectWorld));
    this.controller.addEventListener(x.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.controller.addEventListener(x.CastleRegisterErrorEvent.LLI_ERROR, this.bindFunction(this.onLoginError));
    this.layoutManager.addEventListener(Z.MOUSE_UP, this.bindFunction(this.onMouseUpOnLayoutManager));
    r.BasicLanguageFontManager.getInstance().addEventListener(f.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded), false, -50);
  };
  CastleStartscreenPanel.prototype.onFocusOutRegister = function (e) {
    e.textContentVO = new S.TextVO(e.text);
  };
  CastleStartscreenPanel.prototype.removeListener = function () {
    this._txtInput_usernameRegister.focusIn.remove(this.bindFunction(this.onFocusRegister));
    this._txtInput_usernameRegister.focusOut.remove(this.bindFunction(this.onFocusOutRegister));
    this._txtInput_passwordRegister.focusIn.remove(this.bindFunction(this.onFocusRegister));
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
    this.selectCountryComponent.removeEventListener(g.CountrySelectComponentEvent.COUNTRY_VIEW_OPENED, this.bindFunction(this.onOpenCountryList));
    this.selectCountryComponent.removeEventListener(g.CountrySelectComponentEvent.COUNTRY_CHANGED, this.bindFunction(this.onCountrySelected));
    this.selectServerCombobox.userClickItemSignal.remove(this.bindFunction(this.onTrackSelectWorld));
    this.countryDisp.cbx_world.removeEventListener(a.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onClickWorldSelection));
    this.countryDisp.cbx_world.removeEventListener(a.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectWorld));
    this.controller.removeEventListener(x.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.controller.removeEventListener(x.CastleRegisterErrorEvent.LLI_ERROR, this.bindFunction(this.onLoginError));
    this.layoutManager.removeEventListener(Z.MOUSE_UP, this.bindFunction(this.onMouseUpOnLayoutManager));
    r.BasicLanguageFontManager.getInstance().removeEventListener(f.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
  };
  CastleStartscreenPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.enableLoginButtons();
    this.checkReferral();
    this.addListener();
    this.setFocusToRegister();
    if (this.env.isLandingPageClient) {
      this.showLoginPanelImmediately();
    }
    if (C.EnvGlobalsHandler.globals.isClosedBeta) {
      this.registerDisp.visible = false;
      this._closedBetaBanner = new Library.CastleInterfaceElements.BetaTestBanner();
      this.textFieldManager.registerTextField(this._closedBetaBanner.txt_beta, new v.LocalizedTextVO("generic_country_closedbeta")).verticalAlign = m.GGSVerticalAlign.MIDDLE;
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
    G.CastleStartscreenComponent.onStartScreenShown.dispatch();
    this.bannerUpdater.startLoad();
    this.update();
    if (y.MobileHelper.isScreenTooSmall()) {
      this.panelDisp.addEventListener(Z.PRESS_MOVE, this.bindFunction(this.onMobilePressMove));
      this.panelDisp.addEventListener(Z.MOUSE_UP, this.bindFunction(this.onMobilePressUp));
      this.panelDisp.addEventListener(Z.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
    }
  };
  CastleStartscreenPanel.prototype.onMobilePressMove = function (e) {
    if (I.currentBrowserInfo.isTouchEvent(e)) {
      if (this.lastMobileTouchPoint) {
        this._deltaPoint.x = e.stageX - this.lastMobileTouchPoint.x;
        this._deltaPoint.y = e.stageY - this.lastMobileTouchPoint.y;
        var t = this.panelDisp.y + this._deltaPoint.y;
        if (t <= 0 && t >= this.panelDisp.stage.stageHeight - 650) {
          this.panelDisp.y = t;
          this.loginDisp.y -= this._deltaPoint.y;
          this.countryDisp.y -= this._deltaPoint.y;
          G.CastleStartscreenComponent.onTouchMoveSignal.signal(this._deltaPoint);
        }
      } else {
        this.lastMobileTouchPoint = new J();
      }
      this.lastMobileTouchPoint.x = e.stageX;
      this.lastMobileTouchPoint.y = e.stageY;
    }
  };
  CastleStartscreenPanel.prototype.onMobilePressUp = function (e) {
    this.lastMobileTouchPoint = null;
  };
  CastleStartscreenPanel.prototype.onMobileDoubleClick = function () {
    this.layoutManager.toggleFullscreen();
  };
  CastleStartscreenPanel.prototype.checkReferral = function () {
    var e = this.env.urlVariables;
    if (e) {
      if (e.friendInviteCode) {
        this._inviterCode = e.friendInviteCode;
        var t = e.friendInviteZoneId;
        E.debug("--------------- going to try to find zone " + t);
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
  CastleStartscreenPanel.prototype.applyProperties = function () {
    this.isWaitingForServerMessage = false;
    this._txtInput_usernameRegister.maxChars = L.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    this._txtInput_passwordRegister.maxChars = L.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    this.selectCountryComponent.setDefaultCountry(_.GGSCountryController.instance.currentCountry);
    this.layoutManager.disableProgressbar();
    this.hideAllErrorMessages();
    this.update();
    this.unLockPanel();
    d.ClientFunnelTrackingController.getInstance().trackState("joined_startscreen");
    this.layoutManager.renderBGStage();
  };
  CastleStartscreenPanel.prototype.hide = function () {
    this.layoutManager.enableProgressbar();
    this.selectServerCombobox.hideItems();
    this.removeListener();
    e.prototype.hide.call(this);
    this.layoutManager.renderBGStage();
    if (y.MobileHelper.isScreenTooSmall()) {
      this.panelDisp.removeEventListener(Z.PRESS_MOVE, this.bindFunction(this.onMobilePressMove));
      this.panelDisp.removeEventListener(Z.MOUSE_UP, this.bindFunction(this.onMobilePressUp));
      this.panelDisp.removeEventListener(Z.DOUBLE_CLICK, this.bindFunction(this.onMobileDoubleClick));
      this.lastMobileTouchPoint = null;
      G.CastleStartscreenComponent.onTouchMoveSignal.signal(null);
    }
  };
  CastleStartscreenPanel.prototype.onFocusRegister = function (e) {
    this.setFocusToRegister();
  };
  CastleStartscreenPanel.prototype.onFocusLogin = function (e) {
    this.setFocusToLogin();
  };
  CastleStartscreenPanel.prototype.onFocusOutUsernameLogin = function (e) {
    if (this._txtInput_usernameLogin.text == "") {
      this._wasUserNameModified = false;
    }
  };
  CastleStartscreenPanel.prototype.onFocusOutPasswordLogin = function (e) {
    if (this._txtInput_passwordLogin.text == "") {
      this._wasPasswordModified = false;
    }
  };
  CastleStartscreenPanel.prototype.initLanguageSelection = function () {
    this.selectServerCombobox = new oe.ComboboxComponent(this.countryDisp.cbx_world, "", -1, 25, 17, -1, 0, new H.ComboboxItemRendererServerSelection(), 8, false, false, 6, "comboBgrTop");
    this.selectCountryComponent = new h.CountrySelectComponent(this.countryDisp.mc_language, new Library.CastleStartscreen.CountrySelectionTooltip(), _.GGSCountryController.instance.activeCountries, 2, l.BasicModel.languageData.getTextById);
    this.selectCountryComponent.glowFilter = U.BitmapFilterHelper.FILTER_GLOW_STANDARD[0];
  };
  CastleStartscreenPanel.prototype.updateElementsOnFontsLoaded = function (e) {
    this.initSelectServerCombobox();
  };
  CastleStartscreenPanel.prototype.initRegister = function () {
    this.registerDisp.btn_register.mc_hoverState.visible = false;
    this.registerDisp.btn_register.mc_pressedState.visible = false;
    K.ButtonHelper.initBasicButton(this.registerDisp.btn_fbRegister);
    K.ButtonHelper.initBasicButton(this.loginDisp.mc_slideArea.btn_login);
    K.ButtonHelper.initBasicButton(this.loginDisp.mc_slideArea.btn_fblogin);
    K.ButtonHelper.initBasicButton(this.registerDisp.btn_register);
    this.registerDisp.btn_fbRegister.mc_hoverState.visible = false;
    this.registerDisp.btn_fbRegister.visible = ie.CastleFacebookModule.available;
    this.textFieldManager.registerTextField(this.registerDisp.btn_fbRegister.btnText, new v.LocalizedTextVO("facebook_connect"));
    this._txtInput_usernameRegister = this.textFieldManager.registerTextField(this.registerDisp.mc_username.txt_input, new S.TextVO(""));
    this._txtInput_usernameRegister.type = b.TextFieldType.INPUT;
    this._txtInput_usernameRegister.multiline = false;
    this._txtInput_passwordRegister = this.textFieldManager.registerTextField(this.registerDisp.mc_password.txt_input, new S.TextVO(""));
    this._txtInput_passwordRegister.displayAsPassword = true;
    this._txtInput_passwordRegister.type = b.TextFieldType.INPUT;
    this._txtInput_passwordRegister.multiline = false;
    if (ie.CastleFacebookModule.available) {
      this.textFieldManager.registerTextField(this.registerDisp.txt_facebook_header, new v.LocalizedTextVO("facebook_header")).autoFitToBounds = true;
    }
    this.agbLink = new X.AGBLinkComponent(this.registerDisp.agb_link);
  };
  CastleStartscreenPanel.prototype.initLogin = function () {
    this._txtInput_usernameLogin = this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.txt_name, new v.LocalizedTextVO(this.defaultNameStringID));
    this._txtInput_usernameLogin.type = b.TextFieldType.INPUT;
    this._txtInput_usernameLogin.textContentDefaultVO = new v.LocalizedTextVO(this.defaultNameStringID);
    this._txtInput_usernameLogin.multiline = false;
    this._txtInput_passwordLogin = this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.txt_password, new v.LocalizedTextVO(this.defaultPasswordStringID));
    this._txtInput_passwordLogin.type = b.TextFieldType.INPUT;
    this._txtInput_passwordLogin.textContentDefaultVO = new v.LocalizedTextVO(this.defaultPasswordStringID);
    this._txtInput_passwordLogin.displayAsPassword = true;
    this._txtInput_passwordLogin.multiline = false;
    this._wasUserNameModified = false;
    this._wasPasswordModified = false;
    N.CastleModel.userData.persistentLogin = this.checkBoxComp.isSelected;
    this.loginDisp.btn_alreadyLoggedIn.actLikeButton = true;
    this.loginDisp.mc_slideArea.btn_lostpassword.actLikeButton = true;
    this.loginDisp.mc_slideArea.btn_lostpassword.mouseChildren = false;
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.btn_lostpassword.txt_label, new v.LocalizedTextVO("generic_login_lostpassword"));
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.btn_fblogin.btnText, new v.LocalizedTextVO("facebook_connect"));
    this.loginDisp.mc_slideArea.btn_lostpassword.visible = !F.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.txt_savedata, new v.LocalizedTextVO("generic_login_rememberpassword")).mouseEnabled = false;
    this.loginDisp.mc_slideArea.btn_login.actLikeButton = true;
    this.loginDisp.mc_slideArea.btn_login.mc_hoverState.visible = false;
    this.loginDisp.mc_slideArea.btn_login.mc_pressedState.visible = false;
    K.ButtonHelper.initBasicButton(this.loginDisp.mc_slideArea.btn_fblogin);
    this.loginDisp.mc_slideArea.btn_fblogin.mc_hoverState.visible = false;
    this.loginDisp.mc_slideArea.btn_fblogin.visible = ie.CastleFacebookModule.available;
    this.enableSaveData();
  };
  CastleStartscreenPanel.prototype.keyDownPwLogin = function (e) {
    if (e.key == y.Keyboard.ENTER) {
      this.onLogin();
      e.stopImmediatePropagation();
    }
  };
  CastleStartscreenPanel.prototype.onOpenCountryList = function (e) {
    if (this.selectServerCombobox.isOpen) {
      this.selectServerCombobox.hideItems();
    }
    if (y.MobileHelper.isScreenTooSmall()) {
      this.layoutManager.toggleFullscreen(true);
    }
    this.countryDisp.setChildIndex(this.countryDisp.cbx_world, this.countryDisp.numChildren - 2);
    this.countryDisp.setChildIndex(this.countryDisp.mc_language, this.countryDisp.numChildren - 1);
    d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.COUNTRY_SELECTION);
  };
  CastleStartscreenPanel.prototype.onCountrySelected = function (e) {
    var t = e.selectedCountry;
    var i = _.GGSCountryController.instance.currentCountry;
    this.currentSelectedInstanceForTest = this.env.isTest && !C.EnvGlobalsHandler.globals.urlVariables.urlParams.get("hideTestServers") ? l.BasicModel.instanceProxy.selectedInstanceVO.instanceId : -1;
    if (i.ggsCountryCode != t.ggsCountryCode) {
      d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.COUNTRY_CHANGED);
    }
    p.CommandController.instance.executeCommand(s.BasicController.COMMAND_CHANGE_COUNTRY, t);
    if (this.agbLink) {
      this.agbLink.update(this.env.urlAGB);
    }
    if (t.ggsCountryCode != "KR" || this.env.isIdentityManagementActive) {
      if (t.ggsCountryCode != "KR" && this.env.isIdentityManagementActive) {
        p.CommandController.instance.executeCommand(s.BasicController.COMMAND_IDENTITY_MANAGEMENT, false);
      }
    } else {
      p.CommandController.instance.executeCommand(s.BasicController.COMMAND_IDENTITY_MANAGEMENT, true);
    }
    this.bannerUpdater.startLoad();
    var n = l.BasicModel.instanceProxy.selectedInstanceVO;
    if (l.BasicModel.branchesModel && l.BasicModel.branchesModel.branchByZoneId(n.zoneId.toString()) != l.BasicModel.branchesModel.currentBranch) {
      p.CommandController.instance.executeCommand(s.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, n);
    }
    this.enableLoginButtons();
  };
  CastleStartscreenPanel.prototype.onClickWorldSelection = function (e) {
    if (e.state == 0) {
      this.countryDisp.setChildIndex(this.countryDisp.cbx_world, this.countryDisp.numChildren - 2);
      this.countryDisp.setChildIndex(this.countryDisp.mc_language, this.countryDisp.numChildren - 1);
    } else {
      this.countryDisp.setChildIndex(this.countryDisp.cbx_world, this.countryDisp.numChildren - 1);
      this.countryDisp.setChildIndex(this.countryDisp.mc_language, this.countryDisp.numChildren - 2);
    }
    if (y.MobileHelper.isScreenTooSmall()) {
      this.layoutManager.toggleFullscreen(true);
    }
    this.selectCountryComponent.hideChoiceCountry();
    d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.SERVER_SELECTION);
  };
  CastleStartscreenPanel.prototype.initSelectServerCombobox = function () {
    var e;
    this.selectServerCombobox.clearItems();
    var t = l.BasicModel.instanceProxy.instanceMap;
    var i = false;
    this.selectServerCombobox.disp.visible = true;
    if (this.env.isTest || !this.hasEmptyServerInstance(t)) {
      for (var n = A.int(t.length - 1); n >= 0; n--) {
        var o = t[n];
        if ((!C.EnvGlobalsHandler.globals.urlVariables.urlParams.get("hideTestServers") || !(o.instanceId >= V.ClientConstInstanceIDs.INSTANCE_ID_TESTSERVER_START)) && o.instanceId != V.ClientConstInstanceIDs.INSTANCE_ID_TEMP && o.instanceId != V.ClientConstInstanceIDs.INSTANCE_ID_ABG) {
          (e = new j.ComboboxItemRendererVO()).itemLabel = T.Localize.text(o.instanceLocaId) + ": " + o.instanceCountID;
          e.data = o;
          e.autoFitToBounds = true;
          this.selectServerCombobox.addItem(e);
          if (this.currentSelectedInstanceForTest >= 0 && o.instanceId == this.currentSelectedInstanceForTest) {
            i = true;
          }
        }
      }
      this.selectInstance(i ? this.currentSelectedInstanceForTest : l.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
    } else {
      this.selectServerCombobox.disp.visible = false;
    }
  };
  CastleStartscreenPanel.prototype.hasEmptyServerInstance = function (e) {
    return e.length == 1 && !e[0].instanceLocaId;
  };
  CastleStartscreenPanel.prototype.selectInstance = function (e) {
    for (var t = 0; t < this.selectServerCombobox.itemData.length; t++) {
      if (this.selectServerCombobox.itemData[t].data.instanceId == e) {
        this.selectServerCombobox.selectItemIndex(t);
        return;
      }
    }
    this.selectServerCombobox.selectItemIndex(0);
  };
  CastleStartscreenPanel.prototype.selectInstanceByZoneID = function (e) {
    for (var t = 0; t < this.selectServerCombobox.itemData.length; t++) {
      if (this.selectServerCombobox.itemData[t].data.zoneId == e) {
        this.selectServerCombobox.selectItemIndex(t);
        var i = this.selectServerCombobox.selectedData;
        if (i.instanceId != l.BasicModel.instanceProxy.selectedInstanceVO.instanceId) {
          N.CastleModel.specialEventData.clearActiveEvents();
          p.CommandController.instance.executeCommand(s.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, i);
        }
        return;
      }
    }
    this.selectServerCombobox.selectItemIndex(0);
  };
  CastleStartscreenPanel.prototype.update = function () {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
    this.initSelectServerCombobox();
    this.registerDisp.scaleY *= 1.0001;
    this.registerDisp.scaleX *= 1.0001;
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.btn_login.txt_label, new v.LocalizedTextVO("generic_login_login")).autoFitToBounds = true;
    z.CastleMovieClipHelper.uncacheSafe(this.loginDisp.btn_alreadyLoggedIn);
    this.textFieldManager.registerTextField(this.loginDisp.btn_alreadyLoggedIn.txt_value, new v.LocalizedTextVO("generic_login_login"));
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.btn_lostpassword.txt_label, new v.LocalizedTextVO("generic_login_lostpassword"));
    this.textFieldManager.registerTextField(this.loginDisp.mc_slideArea.txt_savedata, new v.LocalizedTextVO("generic_login_rememberpassword"));
    if (this.agbLink) {
      this.agbLink.update(this.env.urlAGB);
    }
    this.unLockPanel();
  };
  CastleStartscreenPanel.prototype.hideErrorsAndFocusRegisterFields = function (e) {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
  };
  CastleStartscreenPanel.prototype.hideErrorsAndFocusLoginFields = function (e) {
    this.hideAllErrorMessages();
    this.setFocusToLogin();
  };
  CastleStartscreenPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (K.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.loginDisp.mc_slideArea.btn_loginArrow:
          this.hideArrow();
          if (this.loginIsVisible) {
            this.hideLoginPanel();
          } else {
            this.showLoginPanel();
          }
          break;
        case this.loginDisp.btn_alreadyLoggedIn:
          this.showLoginPanel();
          break;
        case this.registerDisp.btn_register:
          this.onRegister();
          if (y.MobileHelper.isScreenTooSmall()) {
            this.layoutManager.toggleFullscreen(true);
          }
          break;
        case this.registerDisp.btn_fbRegister:
          this.onFacebookRegister();
          this.disableLoginButtons();
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.hideArrow();
          this.onLogin();
          if (y.MobileHelper.isScreenTooSmall()) {
            this.layoutManager.toggleFullscreen(true);
          }
          break;
        case this.loginDisp.mc_slideArea.btn_fblogin:
          this.hideArrow();
          this.onFacebookLogin();
          this.disableLoginButtons();
          break;
        case this.loginDisp.mc_slideArea.txt_password:
          if (!this._txtInput_passwordLogin.containsDefaultTextContent) {
            this._wasPasswordModified = true;
          }
          break;
        case this.loginDisp.mc_slideArea.txt_name:
          if (!this._txtInput_usernameLogin.containsDefaultTextContent) {
            this._wasUserNameModified = true;
          }
          break;
        case this.loginDisp.mc_slideArea.mc_checkboxLogin:
          this.hideArrow();
          this.onToggleSaveData();
          break;
        case this.loginDisp.mc_slideArea.btn_lostpassword:
          this.hideArrow();
          this.focusState = CastleStartscreenPanel.FOCUS_NONE;
          ne.CastleDialogHandler.getInstance().registerDialogs(se.CastleLostPasswordDialog, new Y.CastleLostPasswordDialogProperties(T.Localize.text("generic_login_lostpassword_title"), T.Localize.text("generic_login_lostpassword_copy"), null, null, T.Localize.text("generic_btn_okay"), T.Localize.text("generic_btn_cancel")));
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
        case this.registerDisp.mc_nameSelection.i3:
          var i = t.target;
          this._txtInput_usernameRegister.clearText();
          this._txtInput_usernameRegister.textContentVO = new S.TextVO(this.textFieldManager.getTextField(i.txt_Name).text);
          this.hideAllErrorMessages();
          d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.PICKED_SUGGESTED_USERNAME);
      }
    }
  };
  CastleStartscreenPanel.prototype.onFacebookLogin = function () {
    if (!this._registerBtnAlreadyClicked) {
      this._registerBtnAlreadyClicked = true;
      this.hideAllErrorMessages();
      this.controller.addEventListener(w.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(w.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(w.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onLoginWithFacebookDetails));
      ie.CastleFacebookModule.login();
    }
  };
  CastleStartscreenPanel.prototype.onFacebookRegister = function () {
    if (!this._registerBtnAlreadyClicked && this._txtInput_usernameRegister.text.length < 1 || this._txtInput_usernameRegister.text.length > 0 && this.usernameIsValid()) {
      this._registerBtnAlreadyClicked = true;
      this.hideAllErrorMessages();
      this.controller.addEventListener(w.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(w.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
      this.controller.addEventListener(w.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onRegisterWithFacebookDetails));
      ie.CastleFacebookModule.login();
    }
  };
  CastleStartscreenPanel.prototype.onRegisterWithFacebookDetails = function (e) {
    this._registerBtnAlreadyClicked = false;
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onRegisterWithFacebookDetails));
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
    var t = {
      fid: e.authResponse.userID,
      ftk: e.authResponse.accessToken,
      pn: this._txtInput_usernameRegister && this._txtInput_usernameRegister.text.length > 0 ? this._txtInput_usernameRegister.text : null
    };
    p.CommandController.instance.executeCommand(te.IngameClientCommands.REGISTER_USER_WITH_FACEBOOK, t);
  };
  CastleStartscreenPanel.prototype.onLoginWithFacebookDetails = function (e) {
    this._registerBtnAlreadyClicked = false;
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onLoginWithFacebookDetails));
    p.CommandController.instance.executeCommand(s.BasicController.COMMAND_LOGIN, e.authResponse);
  };
  CastleStartscreenPanel.prototype.onToggleSaveData = function () {
    if (this.checkBoxComp.isSelected) {
      this.disableSaveData();
    } else {
      this.enableSaveData();
    }
  };
  CastleStartscreenPanel.prototype.enableSaveData = function () {
    N.CastleModel.userData.persistentLogin = true;
    this.checkBoxComp.selected();
  };
  CastleStartscreenPanel.prototype.disableSaveData = function () {
    this.checkBoxComp.deselected();
    N.CastleModel.userData.persistentLogin = false;
  };
  CastleStartscreenPanel.prototype.onRegister = function () {
    if (!this.loginBlocked && !this._registerBtnAlreadyClicked) {
      this.hideAllErrorMessages();
      if (!this.checkEmptyOK()) {
        return;
      }
      d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA);
      if (!this.checkTooShortOK() || !this.checkInvalidOK()) {
        return;
      }
      var e = [];
      e.push(this._txtInput_passwordRegister.text);
      if (!this.usernameIsValid()) {
        return;
      }
      e.push(O.TextValide.getValideSmartFoxText(this._txtInput_usernameRegister.text));
      if (this._inviterCode) {
        C.EnvGlobalsHandler.globals.inviterCode = this._inviterCode;
      } else {
        C.EnvGlobalsHandler.globals.inviterCode = "";
      }
      if (this._invite_refer_method) {
        C.EnvGlobalsHandler.globals.invite_refer_method = this._invite_refer_method;
      } else {
        C.EnvGlobalsHandler.globals.invite_refer_method = "";
      }
      this._registerBtnAlreadyClicked = true;
      p.CommandController.instance.executeCommand(s.BasicController.COMMAND_REGISTER_USER, e);
      this.disableLoginButtons();
    }
  };
  CastleStartscreenPanel.prototype.usernameIsValid = function () {
    if (!O.TextValide.isUsernameValide(this._txtInput_usernameRegister.text)) {
      d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_NAME_INVALID);
      this.showNameError("error_name_invalid");
      var e = O.TextValide.getValidUsername(this._txtInput_usernameRegister.text);
      if (e != "" && O.TextValide.isUsernameValide(e)) {
        this.initNameSelection([e]);
      }
      return false;
    }
    return true;
  };
  CastleStartscreenPanel.prototype.checkEmptyLoginCredentials = function () {
    return (!!this._wasUserNameModified || !this._txtInput_usernameLogin.containsDefaultTextContent) && (!!this._wasPasswordModified || !this._txtInput_passwordLogin.containsDefaultTextContent) || (ne.CastleDialogHandler.getInstance().registerDialogs(re.CastleStandardOkDialog, new c.BasicStandardOkDialogProperties(T.Localize.text("generic_alert_watchout"), T.Localize.text("generic_login_wronglogin"))), false);
  };
  CastleStartscreenPanel.prototype.checkEmptyOK = function () {
    if (this._txtInput_usernameRegister.text.length == 0 && this._txtInput_passwordRegister.text.length == 0) {
      d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_CLICK_REGISTER_WITHOUT_DATA);
      this.showNameError("error_name_empty");
      return false;
    }
    if (this._txtInput_usernameRegister.text.length == 0) {
      d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_NAME_EMPTY);
      this.showNameError("error_name_empty");
      return false;
    }
    if (/(\s)\1+/g.test(this._txtInput_usernameRegister.text)) {
      this.showNameError("error_name_invalid_consecutiveSpaces");
      return false;
    } else {
      return this._txtInput_passwordRegister.text.length != 0 || (d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_PASS_EMPTY), this.showPasswordError("error_password_empty"), false);
    }
  };
  CastleStartscreenPanel.prototype.checkTooShortOK = function () {
    if (this._txtInput_usernameRegister.text.length < l.BasicModel.basicLocalization.getUsernameMinLength) {
      d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_NAME_TOO_SHORT);
      this.showNameError("error_name_too_short");
      return false;
    } else {
      return !(this._txtInput_passwordRegister.text.length < L.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) || (d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_PASS_TOO_SHORT), this.showPasswordError("error_password_too_short"), false);
    }
  };
  CastleStartscreenPanel.prototype.checkInvalidOK = function () {
    return !!O.TextValide.isSmartFoxValide(this._txtInput_passwordRegister.text) || (d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_PASS_INVALID), this.showPasswordError("error_password_invalid"), false);
  };
  CastleStartscreenPanel.prototype.onKeyUp = function (e) {
    if (!this.isLocked) {
      if (e.key == y.Keyboard.ENTER) {
        switch (this.focusState) {
          case CastleStartscreenPanel.FOCUS_LOGIN:
            this.onLogin();
            break;
          case CastleStartscreenPanel.FOCUS_REGISTER:
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
            E.debug("---- sending username Register");
            this._txtInput_usernameRegister.data.sended = true;
            d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ENTER_NAME);
          }
          break;
        case this.registerDisp.mc_password.txt_input:
          if (L.CredentialsValidationConstants.PASSWORD_MAX_LENGTH <= this._txtInput_passwordRegister.text.length) {
            this.showPasswordError("error_password_too_long");
          } else {
            this.hideAllErrorMessages();
          }
          if (!this._txtInput_passwordRegister.data.sended) {
            E.debug("---- sending password Register");
            this._txtInput_passwordRegister.data.sended = true;
            d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ENTER_PASSWORD);
          }
          break;
        case this.loginDisp.mc_slideArea.txt_password:
          if (!this._txtInput_passwordLogin.containsDefaultTextContent && !this._txtInput_passwordLogin.data.sended) {
            E.debug("---- sending password login");
            this._txtInput_passwordLogin.data.sended = true;
            this._wasPasswordModified = true;
            d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.LOGIN_ENTER_PASSWORD);
          }
          break;
        case this.loginDisp.mc_slideArea.txt_name:
          if (!this._txtInput_usernameLogin.containsDefaultTextContent && !this._txtInput_usernameLogin.data.sended) {
            E.debug("---- sending username login");
            this._txtInput_usernameLogin.data.sended = true;
            this._wasUserNameModified = true;
            d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.LOGIN_ENTER_NAME);
          }
      }
    }
  };
  CastleStartscreenPanel.prototype.onLoginError = function (e) {
    this.enableLoginButtons();
  };
  CastleStartscreenPanel.prototype.onRegisterError = function (e) {
    switch (e.errorType) {
      case x.CastleRegisterErrorEvent.INVALID_NAME:
        d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this.showNameError("error_name_invalid");
        this.initNameSelection(e.params.NS);
        break;
      case x.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE:
        d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_NAME_EXISTS);
        this.showNameError("error_name_exists");
        this.initNameSelection(e.params.NS);
        break;
      case x.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS:
        d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this.showNameError("error_name_is_number");
        this.initNameSelection(e.params.NS);
        break;
      case x.CastleRegisterErrorEvent.USAGE_OF_BADWORDS:
        d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_NAME_BADWORD);
        this.showNameError("error_badword");
        this.initNameSelection(e.params.NS);
        break;
      case x.CastleRegisterErrorEvent.INVALID_PASSWORD:
        d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_PASS_INVALID);
        this.showPasswordError("error_password_invalid");
        break;
      case x.CastleRegisterErrorEvent.INVALID_LOGIN_FIELD:
        d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_INVALID_LOGIN_FIELD);
        this._txtInput_usernameLogin.textContentVO = new S.TextVO(this._txtInput_usernameRegister.text);
        this._txtInput_passwordLogin.textContentVO = new S.TextVO(this._txtInput_passwordRegister.text);
        ne.CastleDialogHandler.getInstance().registerDialogs(ae.CastleStandardOkLoginDialog, new c.BasicStandardOkDialogProperties(T.Localize.text("generic_alert_information"), T.Localize.text("generic_login_accountexists"), this.bindFunction(this.openLoginAndShowArrow)));
    }
    this._registerBtnAlreadyClicked = false;
    this.enableLoginButtons();
  };
  CastleStartscreenPanel.prototype.openLoginAndShowArrow = function () {
    this.showLoginPanel();
    ee.CastleTutorialArrowController.instance.replace(this.loginDisp.mc_slideArea.btn_login, true, true);
  };
  CastleStartscreenPanel.prototype.hideArrow = function () {
    ee.CastleTutorialArrowController.instance.clear();
  };
  CastleStartscreenPanel.prototype.initNameSelection = function (e) {
    var t;
    var i = this.registerDisp.mc_nameSelection;
    for (var n = 0; n < 4; n++) {
      var o = i["i" + n];
      o.actLikeButton = true;
      o.mouseChildren = false;
      o.visible = true;
      t = "";
      if (e && n < e.length) {
        t = e[n];
      }
      if (t != "") {
        this.textFieldManager.registerTextField(o.txt_Name, new S.TextVO(t));
        o.suggestedName = t;
      } else {
        o.visible = false;
      }
    }
    d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.ERROR_NAME_DIALOG_CHOOSE_NAME);
    if (y.MobileHelper.isScreenTooSmall()) {
      if (y.MobileHelper.isPortrait()) {
        i.x = 15;
        i.y = 175;
      } else {
        i.x = 250;
        i.y = 175;
      }
    }
    i.visible = !!e;
    R.TweenMax.fromTo(i, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: P.Bounce.easeOut
    });
  };
  CastleStartscreenPanel.prototype.hideAllErrorMessages = function () {
    this.selectCountryComponent.hideChoiceCountry();
    this.selectServerCombobox.hideItems();
    this.registerDisp.mc_nameSelection.visible = false;
    this.hideSmallErrorMessages();
  };
  CastleStartscreenPanel.prototype.hideSmallErrorMessages = function () {
    this.registerDisp.mc_errorName.visible = false;
    this.registerDisp.mc_errorPassword.visible = false;
  };
  CastleStartscreenPanel.prototype.showNameError = function (e) {
    var t = this.registerDisp.mc_errorName;
    this.textFieldManager.registerTextField(t.txt_errorText, new v.LocalizedTextVO(e)).verticalAlign = W.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    if (y.MobileHelper.isScreenTooSmall()) {
      if (y.MobileHelper.isPortrait()) {
        t.x = -30;
        t.y = 55;
      } else {
        t.x = 135;
        t.y = 85;
      }
    }
    t.visible = true;
    R.TweenMax.fromTo(t, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: P.Bounce.easeOut
    });
  };
  CastleStartscreenPanel.prototype.showPasswordError = function (e) {
    var t = this.registerDisp.mc_errorPassword;
    this.textFieldManager.registerTextField(t.txt_errorText, new v.LocalizedTextVO(e)).verticalAlign = W.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    if (y.MobileHelper.isScreenTooSmall()) {
      if (y.MobileHelper.isPortrait()) {
        t.x = -30;
        t.y = 124;
      } else {
        t.x = 135;
        t.y = 154;
      }
    }
    t.visible = true;
    R.TweenMax.fromTo(t, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: P.Bounce.easeOut
    });
  };
  CastleStartscreenPanel.prototype.onSelectWorld = function (e) {
    B.ClientBetaHelper.setSupportContextMenu();
    if (this.selectServerCombobox.selectedId != -1) {
      var t = this.selectServerCombobox.selectedData;
      var i = l.BasicModel.branchesModel;
      var n = l.BasicModel.branchesModel.branchByZoneId(t.zoneId.toString());
      var o = l.BasicModel.branchesModel.currentBranch;
      var a = l.BasicModel.instanceProxy.selectedInstanceVO;
      var r = o.id == "default";
      var c = D.instanceOfClass(t, "TestInstanceVO") || t.zone.indexOf("Test") > 0;
      var h = D.instanceOfClass(a, "TestInstanceVO") || t.zone.indexOf("Test") > 0;
      if (!i || n == null == r || n == o || c || h) {
        if (le.StartscreenHelper.usesModernStartscreen(t.zoneId)) {
          p.CommandController.instance.executeCommand(s.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, t);
        } else if (t.instanceId != l.BasicModel.instanceProxy.selectedInstanceVO.instanceId) {
          N.CastleModel.specialEventData.clearActiveEvents();
          p.CommandController.instance.executeCommand(s.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, t);
          d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.SERVER_SELECTION);
        }
      } else {
        p.CommandController.instance.executeCommand(s.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, t);
      }
    } else if (this.selectServerCombobox.itemData.length > 0) {
      this.selectServerCombobox.selectItemIndex(0);
    }
  };
  CastleStartscreenPanel.prototype.onTrackSelectWorld = function (e) {
    if (e) {
      d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.SERVER_CHANGED);
    }
  };
  CastleStartscreenPanel.prototype.onMouseUpOnLayoutManager = function (e) {
    if (!D.instanceOfClass(e.target, "Btn_OpenClose_CountrySelection") && e.target != this.registerDisp.mc_language) {
      this.selectCountryComponent.hideChoiceCountry();
    }
  };
  CastleStartscreenPanel.prototype.setFocusToRegister = function () {
    this.focusState = CastleStartscreenPanel.FOCUS_REGISTER;
    this._txtInput_usernameLogin.tabEnabled = false;
    this._txtInput_passwordLogin.tabEnabled = false;
    this._txtInput_usernameRegister.tabIndex = 1;
    this._txtInput_passwordRegister.tabIndex = 2;
    this._txtInput_usernameRegister.tabEnabled = true;
    this._txtInput_passwordRegister.tabEnabled = true;
  };
  CastleStartscreenPanel.prototype.setFocusToLogin = function () {
    this.focusState = CastleStartscreenPanel.FOCUS_LOGIN;
    this._txtInput_usernameRegister.tabEnabled = false;
    this._txtInput_passwordRegister.tabEnabled = false;
    this._txtInput_usernameLogin.tabIndex = 1;
    this._txtInput_passwordLogin.tabIndex = 2;
    this._txtInput_usernameLogin.tabEnabled = true;
    this._txtInput_passwordLogin.tabEnabled = true;
  };
  CastleStartscreenPanel.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    if (!this.isLocked) {
      switch (t.target) {
        case this.registerDisp.btn_register:
          this.registerDisp.btn_register.mc_hoverState.visible = true;
          break;
        case this.registerDisp.btn_fbRegister:
          this.registerDisp.btn_fbRegister.mc_hoverState.visible = K.ButtonHelper.isButtonEnabled(this.registerDisp.btn_fbRegister);
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.loginDisp.mc_slideArea.btn_login.mc_hoverState.visible = true;
          break;
        case this.loginDisp.mc_slideArea.btn_fblogin:
          this.loginDisp.mc_slideArea.btn_fblogin.mc_hoverState.visible = K.ButtonHelper.isButtonEnabled(this.loginDisp.mc_slideArea.btn_fblogin);
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
        case this.registerDisp.mc_nameSelection.i3:
          var i = t.target;
          i.scaleX = i.scaleY = 1.05;
      }
    }
  };
  CastleStartscreenPanel.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    if (!this.isLocked) {
      switch (t.target) {
        case this.registerDisp.btn_register:
          this.registerDisp.btn_register.mc_hoverState.visible = false;
          this.registerDisp.btn_register.mc_pressedState.visible = false;
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.loginDisp.mc_slideArea.btn_login.mc_hoverState.visible = false;
          this.loginDisp.mc_slideArea.btn_login.mc_pressedState.visible = false;
          break;
        case this.registerDisp.btn_fbRegister:
          this.registerDisp.btn_fbRegister.mc_hoverState.visible = false;
          break;
        case this.loginDisp.mc_slideArea.btn_fblogin:
          this.loginDisp.mc_slideArea.btn_fblogin.mc_hoverState.visible = false;
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
        case this.registerDisp.mc_nameSelection.i3:
          var i = t.target;
          i.scaleX = i.scaleY = 1;
      }
    }
  };
  CastleStartscreenPanel.prototype.onMouseDown = function (t) {
    e.prototype.onMouseDown.call(this, t);
    if (!this.isLocked) {
      switch (t.target) {
        case this.registerDisp.btn_register:
          this.registerDisp.btn_register.mc_pressedState.visible = true;
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.loginDisp.mc_slideArea.btn_login.mc_pressedState.visible = true;
          break;
        case this.registerDisp.mc_nameSelection.i0:
        case this.registerDisp.mc_nameSelection.i1:
        case this.registerDisp.mc_nameSelection.i2:
        case this.registerDisp.mc_nameSelection.i3:
          var i = t.target;
          this._txtInput_usernameRegister.textContentVO = new S.TextVO(i.suggestedName);
      }
    }
  };
  CastleStartscreenPanel.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    if (!this.isLocked) {
      switch (t.target) {
        case this.registerDisp.btn_register:
          this.registerDisp.btn_register.mc_pressedState.visible = false;
          break;
        case this.loginDisp.mc_slideArea.btn_login:
          this.loginDisp.mc_slideArea.btn_login.mc_pressedState.visible = false;
      }
    }
  };
  CastleStartscreenPanel.prototype.showLoginPanelImmediately = function () {
    if (!this.loginIsVisible) {
      this.setFocusToLogin();
      this.hideAllErrorMessages();
      this.loginDisp.mc_slideArea.y += 150;
      this.loginIsVisible = true;
      this.loginDisp.mc_slideArea.btn_loginArrow.gotoAndStop(2);
    }
  };
  CastleStartscreenPanel.prototype.showLoginPanel = function () {
    if (!this.loginIsVisible) {
      this.setFocusToLogin();
      this.hideAllErrorMessages();
      R.TweenMax.to(this.loginDisp.mc_slideArea, 0.5, {
        y: -2,
        ease: M.Linear.easeIn
      });
      this.loginIsVisible = true;
      this.loginDisp.mc_slideArea.btn_loginArrow.gotoAndStop(2);
    }
  };
  CastleStartscreenPanel.prototype.hideLoginPanel = function () {
    this.hideAllErrorMessages();
    this.setFocusToRegister();
    R.TweenMax.to(this.loginDisp.mc_slideArea, 0.5, {
      y: -152,
      ease: M.Linear.easeIn
    });
    this.loginIsVisible = false;
    this.loginDisp.mc_slideArea.btn_loginArrow.gotoAndStop(1);
  };
  CastleStartscreenPanel.prototype.onLogin = function () {
    if (!this.loginBlocked) {
      if (this.checkEmptyLoginCredentials()) {
        this.lockPanel();
        this.hideAllErrorMessages();
        N.CastleModel.userData.userName = O.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_usernameLogin.text);
        N.CastleModel.userData.loginPwd = O.TextValide.getValideSmartFoxJSONTextMessage(this._txtInput_passwordLogin.text);
        if (!N.CastleModel.userData.persistentLogin) {
          N.CastleModel.localData.saveUsername("");
        }
        p.CommandController.instance.executeCommand(s.BasicController.COMMAND_LOGIN);
        p.CommandController.instance.executeCommand(te.IngameClientCommands.INIT_EQUIPMENT_FAVORITES);
        d.ClientFunnelTrackingController.getInstance().trackState(u.ClientFunnelGameStates.LOGIN_CLICKED);
        this.disableLoginButtons();
      }
    }
  };
  CastleStartscreenPanel.prototype.updatePosition = function () {
    if (this.panelDisp && this.panelDisp.stage) {
      var e = A.int(this.panelDisp.stage.stageWidth);
      var t = A.int(this.panelDisp.stage.stageHeight);
      this.panelDisp.x = e * 0.5;
      this.panelDisp.y = 0;
      this.registerDisp.x = 0;
      this.registerDisp.y = 170;
      var i = e - A.int(e * 0.5 + 200);
      this.loginDisp.x = 200 + i * 0.5;
      this.loginDisp.y = 0;
      this.countryDisp.x = 0;
      this.countryDisp.y = CastleStartscreenPanel.getBottomOffset(e, t) - 10;
      if (y.MobileHelper.isScreenTooSmall()) {
        this.loginDisp.x = 0;
        G.CastleStartscreenComponent.onTouchMoveSignal.signal(null);
        if (y.MobileHelper.isLandscape()) {
          this.loginDisp.x = e / 2 - 100;
          this.countryDisp.x = e / 2 - 110;
        }
      }
    }
  };
  CastleStartscreenPanel.prototype.onResize = function (t) {
    if (!I.currentBrowserInfo.isMobile || !y.TextField.isMobileKeyboardShown) {
      e.prototype.onResize.call(this, t);
      this.updatePosition();
    }
  };
  CastleStartscreenPanel.prototype.onFontsLoaded = function (e) {
    if (this.isVisible()) {
      this.update();
    }
  };
  Object.defineProperty(CastleStartscreenPanel.prototype, "countryDisp", {
    get: function () {
      return this.panelDisp.mc_countrySelection;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenPanel.prototype, "registerDisp", {
    get: function () {
      return this.panelDisp.mc_register;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenPanel.prototype, "loginDisp", {
    get: function () {
      return this.panelDisp.mc_login;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleStartscreenPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleStartscreenPanel.prototype.onFbCancelled = function (e) {
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.CONNECTED, this.bindFunction(this.onRegisterWithFacebookDetails));
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.NOT_AUTHORIZED, this.bindFunction(this.onFbCancelled));
    this.controller.removeEventListener(w.CastleFacebookSDKEvent.NOT_CONNECTED, this.bindFunction(this.onFbCancelled));
    this._registerBtnAlreadyClicked = false;
    this.unLockPanel();
    this.enableLoginButtons();
  };
  CastleStartscreenPanel.__initialize_static_members = function () {
    CastleStartscreenPanel.NAME = "CastleStartscreenPanel";
    CastleStartscreenPanel.FOCUS_LOGIN = "FOCUS_LOGIN";
    CastleStartscreenPanel.FOCUS_REGISTER = "FOCUS_REGISTER";
    CastleStartscreenPanel.FOCUS_NONE = "FOCUS_NONE";
  };
  CastleStartscreenPanel.getBottomOffset = function (e, t) {
    var i = A.int(document.getElementById("edgeStartscreenVideoReplacement").clientHeight);
    return Math.min(t, i);
  };
  CastleStartscreenPanel.prototype.enableLoginButtons = function () {
    K.ButtonHelper.enableButton(this.registerDisp.btn_fbRegister, true);
    K.ButtonHelper.enableButton(this.loginDisp.mc_slideArea.btn_login, true);
    K.ButtonHelper.enableButton(this.loginDisp.mc_slideArea.btn_fblogin, true);
    K.ButtonHelper.enableButton(this.registerDisp.btn_register, true);
    this.loginBlocked = false;
    this._registerBtnAlreadyClicked = false;
  };
  CastleStartscreenPanel.prototype.disableLoginButtons = function () {
    K.ButtonHelper.enableButton(this.registerDisp.btn_fbRegister, false);
    K.ButtonHelper.enableButton(this.loginDisp.mc_slideArea.btn_login, false);
    K.ButtonHelper.enableButton(this.loginDisp.mc_slideArea.btn_fblogin, false);
    K.ButtonHelper.enableButton(this.registerDisp.btn_register, false);
    this.loginBlocked = true;
  };
  return CastleStartscreenPanel;
}(q.CastlePanel);
exports.CastleStartscreenPanel = $;
var ee = require("./300.js");
var te = require("./29.js");
var ie = require("./193.js");
var ne = require("./9.js");
var oe = require("./178.js");
var ae = require("./1873.js");
var se = require("./917.js");
var re = require("./38.js");
var le = require("./334.js");
$.__initialize_static_members();