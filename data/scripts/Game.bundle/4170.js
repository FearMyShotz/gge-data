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
var p = require("./2.js");
var h = require("./2.js");
var g = require("./2.js");
var C = require("./2.js");
var _ = require("./2.js");
var m = require("./2.js");
var f = require("./2.js");
var O = require("./2.js");
var E = require("./1.js");
var y = require("./1.js");
var b = require("./3.js");
var D = require("./3.js");
var I = require("./3.js");
var T = require("./6.js");
var v = require("./258.js");
var S = require("./23.js");
var A = require("./23.js");
var L = require("./364.js");
var P = require("./491.js");
var M = require("./15.js");
var R = require("./4.js");
var V = require("./68.js");
var x = require("./1868.js");
var w = require("./171.js");
var B = require("./42.js");
var F = function (e) {
  function CastleSocialStartscreenPanel() {
    CONSTRUCTOR_HACK;
    return e.call(this, new (E.getDefinitionByName("CastleSocialStartscreen_Toaster"))()) || this;
  }
  n.__extends(CastleSocialStartscreenPanel, e);
  CastleSocialStartscreenPanel.prototype.init = function () {
    e.prototype.init.call(this);
    this.initGoodgameTextfields();
    this.initLanguageSelection();
    this.initServerSelection();
  };
  CastleSocialStartscreenPanel.prototype.initGoodgameTextfields = function () {
    this.initUsernameInputTextField();
    this.textFieldManager.registerTextField(this.panelDisp.mc_username.txt_label, new D.LocalizedTextVO("generic_username_login"));
    this.textFieldManager.registerTextField(this.panelDisp.mc_nameSelection.txt_title, new D.LocalizedTextVO("dialog_createAccount_chooseName"));
    this.i_register_txt_label = this.textFieldManager.registerTextField(this.panelDisp.btn_register.txt_label, new D.LocalizedTextVO("generic_register_letsgo"));
    this.i_register_txt_label.verticalAlign = C.GGSVerticalAlign.MIDDLE;
  };
  CastleSocialStartscreenPanel.prototype.initUsernameInputTextField = function () {
    this.defaultNameString = this.getDefaultNameString();
    this.i_username_txt_input = this.textFieldManager.registerTextField(this.panelDisp.mc_username.txt_input, new I.TextVO(this.defaultNameString));
    this.i_username_txt_input.textContentDefaultVO = new I.TextVO(this.defaultNameString);
    this.i_username_txt_input.maxChars = v.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    this.updateSocialPlayerName(r.BasicModel.socialData.displayNameExistingPlayer);
  };
  CastleSocialStartscreenPanel.prototype.updateSocialPlayerName = function (e) {
    this.defaultNameString = this.getDefaultNameString();
    if (e && e != "") {
      this.i_username_txt_input.textContentVO.stringValue = e;
      this.i_username_txt_input.type = y.TextFieldType.DYNAMIC;
      this.i_username_txt_input.selectable = false;
      this.panelDisp.mc_username.useFilters(V.BitmapFilterHelper.FILTER_DESATURATED_BUTTON_COLOR_MATRIX);
    } else {
      this.i_username_txt_input.textContentVO.stringValue = this.defaultNameString;
      this.i_username_txt_input.type = y.TextFieldType.INPUT;
      this.i_username_txt_input.selectable = true;
      this.panelDisp.mc_username.useFilters(V.BitmapFilterHelper.NO_FILTER);
    }
  };
  CastleSocialStartscreenPanel.prototype.getDefaultNameString = function () {
    var e = this.env.displayName;
    var t = r.BasicModel.socialData.displayNameExistingPlayer;
    this.defaultNameString = t && t != "" ? t : e && e != "" ? e.substr(0, this.env.maxUsernameLength) : b.Localize.text("generic_username_login");
    return this.defaultNameString;
  };
  CastleSocialStartscreenPanel.prototype.initServerSelection = function () {
    this.selectServerCombobox = new N.ComboboxComponent(this.panelDisp.cbx_world, "", -1, 25, 17, -1, 0, new x.ComboboxItemRendererServerSelection(), 8, false, false, 6, "comboBgrTop");
    P.ClientBetaHelper.setSupportContextMenu();
  };
  CastleSocialStartscreenPanel.prototype.initLanguageSelection = function () {
    this.selectCountryComponent = new d.CountrySelectComponent(this.panelDisp.mc_language, new (E.getDefinitionByName("CountrySelectionTooltip"))(), g.GGSCountryController.instance.activeCountries, 2, r.BasicModel.languageData.getTextById);
    this.panelDisp.mc_language.visible = R.CastleModel.worldAssignment.facade.activeCountries.length > 1;
    this.panelDisp.setChildIndex(this.panelDisp.mc_language, this.panelDisp.numChildren - 1);
  };
  CastleSocialStartscreenPanel.prototype.destroy = function () {
    this.removeEventlistener();
    e.prototype.destroy.call(this);
  };
  CastleSocialStartscreenPanel.prototype.show = function () {
    e.prototype.show.call(this);
    this.addEventlistener();
  };
  CastleSocialStartscreenPanel.prototype.hide = function () {
    this.layoutManager.enableProgressbar();
    this.removeEventlistener();
    e.prototype.hide.call(this);
  };
  CastleSocialStartscreenPanel.prototype.addEventlistener = function () {
    g.GGSCountryController.instance.currentCountryChanged.add(this.bindFunction(this.onCountryChanged));
    this.selectCountryComponent.addEventListener(p.CountrySelectComponentEvent.COUNTRY_CHANGED, this.bindFunction(this.onCountrySelected));
    s.BasicLanguageFontManager.getInstance().addEventListener(m.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded), false, -50);
    this.controller.addEventListener(L.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.panelDisp.cbx_world.addEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectWorld));
    this.selectServerCombobox.userClickItemSignal.add(this.bindFunction(this.onTrackSelectWorld));
    M.CastleBasicController.getInstance().addEventListener(f.SocialDataEvent.SOCIAL_PLAYER_NAME_CHANGED, this.bindFunction(this.onSocialPlayerNameChanged));
    this.i_username_txt_input.click.add(this.bindFunction(this.clickHandler));
  };
  CastleSocialStartscreenPanel.prototype.removeEventlistener = function () {
    g.GGSCountryController.instance.currentCountryChanged.remove(this.bindFunction(this.onCountryChanged));
    this.selectCountryComponent.removeEventListener(p.CountrySelectComponentEvent.COUNTRY_CHANGED, this.bindFunction(this.onCountrySelected));
    s.BasicLanguageFontManager.getInstance().removeEventListener(m.LanguageDataEvent.FONT_LOAD_COMPLETE, this.bindFunction(this.updateElementsOnFontsLoaded));
    this.controller.removeEventListener(L.CastleRegisterErrorEvent.REGISTER_ERROR, this.bindFunction(this.onRegisterError));
    this.panelDisp.cbx_world.removeEventListener(o.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectWorld));
    this.selectServerCombobox.userClickItemSignal.remove(this.bindFunction(this.onTrackSelectWorld));
    M.CastleBasicController.getInstance().removeEventListener(f.SocialDataEvent.SOCIAL_PLAYER_NAME_CHANGED, this.bindFunction(this.onSocialPlayerNameChanged));
    this.i_username_txt_input.click.remove(this.bindFunction(this.clickHandler));
  };
  CastleSocialStartscreenPanel.prototype.applyProperties = function () {
    this.layoutManager.disableProgressbar();
    this.panelDisp.btn_register.mc_hoverState.visible = false;
    this.panelDisp.btn_register.mc_pressedState.visible = false;
    var e = g.GGSCountryController.instance.currentCountry;
    this.selectCountryComponent.setDefaultCountry(e);
    this.update();
    c.ClientFunnelTrackingController.getInstance().trackState("joined_startscreen");
  };
  CastleSocialStartscreenPanel.prototype.clickHandler = function (e) {
    this.hideAllErrorMessages();
  };
  CastleSocialStartscreenPanel.prototype.updateElementsOnFontsLoaded = function (e) {
    this.update();
  };
  CastleSocialStartscreenPanel.prototype.onSocialPlayerNameChanged = function (e) {
    this.updateSocialPlayerName(e.playerName);
  };
  CastleSocialStartscreenPanel.prototype.onSelectWorld = function (e) {
    if (this.selectServerCombobox.selectedId != -1) {
      var t = this.selectServerCombobox.selectedData;
      if (t.instanceId != r.BasicModel.instanceProxy.selectedInstanceVO.instanceId) {
        R.CastleModel.specialEventData.clearActiveEvents();
        u.CommandController.instance.executeCommand(a.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, t);
      }
      P.ClientBetaHelper.setSupportContextMenu();
    } else if (this.selectServerCombobox.itemData.length > 0) {
      this.selectServerCombobox.selectItemIndex(0);
    }
  };
  CastleSocialStartscreenPanel.prototype.initSelectServerCombobox = function () {
    var e;
    this.selectServerCombobox.clearItems();
    var t = this.env.isTest ? r.BasicModel.instanceProxy.instanceMap : r.BasicModel.instanceProxy.getInstancesForActualCountry();
    for (var i = T.int(t.length - 1); i >= 0; i--) {
      var n = t[i];
      (e = new w.ComboboxItemRendererVO()).itemLabel = b.Localize.text(n.instanceLocaId);
      e.data = n;
      this.selectServerCombobox.addItem(e);
    }
    this.selectInstance(r.BasicModel.instanceProxy.selectedInstanceVO.instanceId);
    this.selectServerCombobox.disp.visible = t.length > 1 || this.env.isTest;
  };
  CastleSocialStartscreenPanel.prototype.selectInstance = function (e) {
    for (var t = 0; t < this.selectServerCombobox.itemData.length; t++) {
      if (this.selectServerCombobox.itemData[t].data.instanceId == e) {
        this.selectServerCombobox.selectItemIndex(t);
        return;
      }
    }
    this.selectServerCombobox.selectItemIndex(1);
  };
  CastleSocialStartscreenPanel.prototype.onCountryChanged = function (e) {
    this.update();
  };
  CastleSocialStartscreenPanel.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    switch (t.target) {
      case this.panelDisp.btn_register:
        this.onRegister();
        break;
      case this.panelDisp.mc_nameSelection.i0:
      case this.panelDisp.mc_nameSelection.i1:
      case this.panelDisp.mc_nameSelection.i2:
      case this.panelDisp.mc_nameSelection.i3:
        var i = t.target;
        this.i_username_txt_input.clearText();
        this.i_username_txt_input.textContentVO = new I.TextVO(this.textFieldManager.getTextField(i.txt_Name).text);
        this.hideAllErrorMessages();
    }
  };
  CastleSocialStartscreenPanel.prototype.onRegister = function () {
    this.hideAllErrorMessages();
    if (this.i_username_txt_input.text.length == 0 || this.i_username_txt_input.text == b.Localize.text("generic_username_login")) {
      c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ERROR_CLICK_REGISTER_WITHOUT_DATA_SSO);
      c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ERROR_NAME_EMPTY);
      this.showNameError("error_name_empty");
      return;
    }
    c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.CLICK_REGISTER_WITH_DATA_SSO);
    if (this.i_username_txt_input.text.length < r.BasicModel.basicLocalization.getUsernameMinLength) {
      c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ERROR_NAME_TOO_SHORT);
      this.showNameError("error_name_too_short");
      return;
    }
    if (O.TextValide.isUsernameValide(this.i_username_txt_input.text)) {
      r.BasicModel.socialData.setDisplayNameExistingPlayer(this.i_username_txt_input.text);
      u.CommandController.instance.executeCommand(a.BasicController.COMMAND_SOCIAL_LOGIN);
    } else {
      c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ERROR_NAME_INVALID);
      this.showNameError("error_name_invalid");
      var e = O.TextValide.getValidUsername(this.i_username_txt_input.text);
      if (e != "" && O.TextValide.isUsernameValide(e)) {
        this.initNameSelection([e]);
      }
    }
  };
  CastleSocialStartscreenPanel.prototype.update = function () {
    this.hideAllErrorMessages();
    this.panelDisp.btn_register.actLikeButton = true;
    this.panelDisp.scaleY *= 1.0001;
    this.panelDisp.scaleX *= 1.0001;
    this.unLockPanel();
    this.initSelectServerCombobox();
    this.updatePosition();
  };
  CastleSocialStartscreenPanel.prototype.hideAllErrorMessages = function () {
    if (this.selectCountryComponent) {
      this.selectCountryComponent.hideChoiceCountry();
    }
    this.panelDisp.mc_nameSelection.visible = false;
    this.panelDisp.mc_errorName.visible = false;
  };
  CastleSocialStartscreenPanel.prototype.showNameError = function (e) {
    if (this.i_errorname_txt_error) {
      this.i_errorname_txt_error.textContentVO.textId = e;
    } else {
      this.i_errorname_txt_error = this.textFieldManager.registerTextField(this.panelDisp.mc_errorName.txt_errorText, new D.LocalizedTextVO(e));
      this.i_errorname_txt_error.verticalAlign = B.CastleGGSVerticalAlign.MIDDLE;
    }
    this.panelDisp.mc_username.useFilters(V.BitmapFilterHelper.NO_FILTER);
    this.i_username_txt_input.type = y.TextFieldType.INPUT;
    this.i_username_txt_input.selectable = true;
    this.panelDisp.mc_errorName.visible = true;
    A.TweenMax.fromTo(this.panelDisp.mc_errorName, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: S.Bounce.easeOut
    });
  };
  CastleSocialStartscreenPanel.prototype.initNameSelection = function (e) {
    var t;
    for (var i = 0; i < 4; i++) {
      var n = this.panelDisp.mc_nameSelection["i" + i];
      n.actLikeButton = true;
      n.mouseChildren = false;
      t = "";
      if (i < e.length) {
        t = e[i];
      }
      if (t != "") {
        if (n.itxt_name) {
          n.itxt_name.textContentVO.stringValue = t;
        } else {
          this.textFieldManager.registerTextField(n.txt_Name, new I.TextVO(t));
        }
      } else {
        n.visible = false;
      }
    }
    this.panelDisp.mc_nameSelection.visible = true;
    A.TweenMax.fromTo(this.panelDisp.mc_nameSelection, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1.3,
      scaleY: 1.3,
      ease: S.Bounce.easeOut
    });
  };
  CastleSocialStartscreenPanel.prototype.onCountrySelected = function (e) {
    var t = e.selectedCountry;
    u.CommandController.instance.executeCommand(a.BasicController.COMMAND_CHANGE_COUNTRY, t);
    h.ExternalInterfaceController.instance.executeJavaScriptFunction(new _.JavascriptCallSetLanguageFactory());
    var i = r.BasicModel.instanceProxy.selectedInstanceVO;
    if (r.BasicModel.branchesModel && r.BasicModel.branchesModel.branchByZoneId(i.zoneId.toString()) != r.BasicModel.branchesModel.currentBranch) {
      u.CommandController.instance.executeCommand(a.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, i);
    }
  };
  CastleSocialStartscreenPanel.prototype.onTrackSelectWorld = function (e) {
    if (e) {
      c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.SERVER_CHANGED);
    }
  };
  CastleSocialStartscreenPanel.prototype.onRegisterError = function (e) {
    switch (e.errorType) {
      case L.CastleRegisterErrorEvent.INVALID_NAME:
        c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this.showNameError("error_name_invalid");
        break;
      case L.CastleRegisterErrorEvent.USAGE_OF_BADWORDS:
        c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ERROR_NAME_BADWORD);
        this.showNameError("error_badword");
        break;
      case L.CastleRegisterErrorEvent.NAME_ALREADY_IN_USE:
        c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ERROR_NAME_EXISTS);
        this.showNameError("error_name_exists");
        this.initNameSelection(e.params.NS);
        break;
      case L.CastleRegisterErrorEvent.NAME_HAS_ONLY_NUMBERS:
        c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ERROR_NAME_INVALID);
        this.showNameError("error_name_is_number");
    }
  };
  CastleSocialStartscreenPanel.prototype.onKeyUp = function (e) {
    if (!this.isLocked) {
      switch (e.target) {
        case this.panelDisp.mc_username.txt_input:
          if (this.panelDisp.mc_username.txt_input.length == 1) {
            c.ClientFunnelTrackingController.getInstance().trackState(l.ClientFunnelGameStates.ENTER_NAME);
          }
      }
    }
  };
  CastleSocialStartscreenPanel.prototype.onMouseOver = function (t) {
    e.prototype.onMouseOver.call(this, t);
    switch (t.target) {
      case this.panelDisp.btn_register:
        this.panelDisp.btn_register.mc_hoverState.visible = true;
        break;
      case this.panelDisp.mc_nameSelection.i0:
      case this.panelDisp.mc_nameSelection.i1:
      case this.panelDisp.mc_nameSelection.i2:
      case this.panelDisp.mc_nameSelection.i3:
        var i = t.target;
        i.scaleX = i.scaleY = 1.05;
    }
  };
  CastleSocialStartscreenPanel.prototype.onMouseOut = function (t) {
    e.prototype.onMouseOut.call(this, t);
    switch (t.target) {
      case this.panelDisp.btn_register:
        this.panelDisp.btn_register.mc_hoverState.visible = false;
        this.panelDisp.btn_register.mc_pressedState.visible = false;
        break;
      case this.panelDisp.mc_nameSelection.i0:
      case this.panelDisp.mc_nameSelection.i1:
      case this.panelDisp.mc_nameSelection.i2:
      case this.panelDisp.mc_nameSelection.i3:
        var i = t.target;
        i.scaleX = i.scaleY = 1;
    }
  };
  CastleSocialStartscreenPanel.prototype.onMouseDown = function (t) {
    e.prototype.onMouseDown.call(this, t);
    switch (t.target) {
      case this.panelDisp.btn_register:
        this.panelDisp.btn_register.mc_pressedState.visible = true;
    }
  };
  CastleSocialStartscreenPanel.prototype.onMouseUp = function (t) {
    e.prototype.onMouseUp.call(this, t);
    switch (t.target) {
      case this.panelDisp.btn_register:
        this.panelDisp.btn_register.mc_pressedState.visible = false;
    }
  };
  CastleSocialStartscreenPanel.prototype.updatePosition = function () {
    if (this.panelDisp && this.panelDisp.stage) {
      var e = T.int(this.panelDisp.stage.stageWidth);
      var t = T.int(this.panelDisp.stage.stageHeight);
      this.panelDisp.x = e * 0.5;
      this.panelDisp.y = 0;
      this.panelDisp.mc_username.y = 250;
      this.panelDisp.btn_register.y = this.panelDisp.mc_username.y + 170;
      this.panelDisp.mc_errorName.y = this.panelDisp.mc_username.y + this.i_username_txt_input.y + this.i_username_txt_input.height / 2;
      this.panelDisp.mc_nameSelection.y = this.panelDisp.mc_errorName.y + 120;
      this.panelDisp.mc_nameSelection.x += 15;
      T.int(e * 0.5 - 200);
      if (this.panelDisp.mc_language.visible && this.panelDisp.cbx_world.visible) {
        var i = T.int((this.panelDisp.mc_language.width + CastleSocialStartscreenPanel.LANGUAGE_WORLD_SPACING + this.panelDisp.cbx_world.width) / 2);
        this.panelDisp.mc_language.x = this.panelDisp.mc_language.width - i;
        this.panelDisp.mc_language.y = t - 10;
        this.panelDisp.cbx_world.x = this.panelDisp.mc_language.x + CastleSocialStartscreenPanel.LANGUAGE_WORLD_SPACING;
        this.panelDisp.cbx_world.y = t - 10 - 31.5;
      } else {
        this.panelDisp.mc_language.x = this.panelDisp.mc_language.width * 0.5;
        this.panelDisp.mc_language.y = t - 10;
        this.panelDisp.cbx_world.x = this.panelDisp.cbx_world.width * -0.5;
        this.panelDisp.cbx_world.y = t - 10 - 31.5;
      }
    }
  };
  Object.defineProperty(CastleSocialStartscreenPanel.prototype, "panelDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleSocialStartscreenPanel.__initialize_static_members = function () {
    CastleSocialStartscreenPanel.NAME = "CastleSocialStartscreenPanel";
    CastleSocialStartscreenPanel.LANGUAGE_WORLD_SPACING = 20;
  };
  return CastleSocialStartscreenPanel;
}(require("./131.js").CastlePanel);
exports.CastleSocialStartscreenPanel = F;
var N = require("./178.js");
F.__initialize_static_members();