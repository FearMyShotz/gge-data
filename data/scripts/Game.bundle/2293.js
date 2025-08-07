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
var p = require("./100.js");
var h = require("./1.js");
var g = require("./1.js");
var C = require("./3.js");
var _ = require("./3.js");
var m = require("./3.js");
var f = require("./258.js");
var O = require("./23.js");
var E = require("./23.js");
var y = require("./16.js");
var b = require("./55.js");
var D = require("./919.js");
var I = require("./920.js");
var T = require("./32.js");
var v = require("./48.js");
var S = require("./31.js");
var A = require("./19.js");
var L = require("./44.js");
var P = require("./13.js");
var M = require("./15.js");
var R = require("./4.js");
var V = require("./9.js");
var x = require("./17.js");
var w = require("./14.js");
var B = require("./20.js");
var F = require("./285.js");
var N = require("./8.js");
var k = require("./25.js");
var U = require("./381.js");
var G = require("./573.js");
var H = require("./382.js");
var j = require("./914.js");
var W = createjs.Point;
var Y = function (e) {
  function OptionsDialogSaveAccountItem(t) {
    var i = e.call(this, new (g.getDefinitionByName("CastleOptions_SaveAccountItem_WithNewsletter"))(), t) || this;
    i._inputBehaviours = [];
    N.ButtonHelper.initButtons([i.contentMC.mc_facebook.btn_ok, i.contentMC.mc_default.btn_ok], B.ClickFeedbackButtonHover);
    N.ButtonHelper.initButtons([i.contentMC.mc_facebook.cbx_showPW], o.CheckBoxButton);
    i._checkBoxCompPassVisible = N.ButtonHelper.getBasicButton(i.contentMC.mc_facebook.cbx_showPW);
    w.CastleComponent.textFieldManager.registerTextField(i._headerMC.txt_default, new _.LocalizedTextVO("dialog_options_saveAccount"), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i._headerMC.mc_open.txt_selected, new _.LocalizedTextVO("dialog_options_saveAccount"), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_default.txt_mailTitle, new _.LocalizedTextVO("dialog_options_saveAccount_enterEmail_desc"), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_default.txt_mailTitle_verify, new _.LocalizedTextVO("dialog_options_saveAccount_confirmEmail_desc"), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_default.btn_ok.txt_label, new m.TextVO(P.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_saveAccount_button")), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.txt_mailTitle, new _.LocalizedTextVO("dialog_options_saveAccount_enterEmail_desc"), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.txt_mailTitle_verify, new _.LocalizedTextVO("dialog_options_saveAccount_confirmEmail_desc"), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.txt_passwordTitle, new _.LocalizedTextVO("dialog_options_saveAccount_enterPassword_desc"), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.txt_showPW, new _.LocalizedTextVO("dialog_options_changePassword_showPassword_desc"), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.btn_ok.txt_label, new m.TextVO(P.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_saveAccount_button")), new p.InternalGGSTextFieldConfigVO(true));
    w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.mc_linkText, new _.LocalizedTextVO("dialog_saveAccount_desc"), new p.InternalGGSTextFieldConfigVO(true));
    i.itxt_emailDefault = w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_default.mc_input1.txt_value, new m.TextVO(C.Localize.text("generic_enter")), new p.InternalGGSTextFieldConfigVO(true));
    i.itxt_emailDefault.maxChars = b.ClientConstUtils.MAX_EMAIL_CHARS;
    i.itxt_emailConfirmDefault = w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_default.mc_input2.txt_value, new m.TextVO(C.Localize.text("generic_enter")), new p.InternalGGSTextFieldConfigVO(true));
    i.itxt_emailConfirmDefault.maxChars = b.ClientConstUtils.MAX_EMAIL_CHARS;
    i.itxt_emailFacebook = w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.mc_input1.txt_value, new m.TextVO(C.Localize.text("generic_enter")), new p.InternalGGSTextFieldConfigVO(true));
    i.itxt_emailConfirmFacebook = w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.mc_input2.txt_value, new m.TextVO(C.Localize.text("generic_enter")), new p.InternalGGSTextFieldConfigVO(true));
    i.itxt_passwordFacebook = w.CastleComponent.textFieldManager.registerTextField(i.contentMC.mc_facebook.mc_input_password.txt_value, new m.TextVO(""), new p.InternalGGSTextFieldConfigVO(true));
    i.itxt_passwordFacebook.maxChars = f.CredentialsValidationConstants.PASSWORD_MAX_LENGTH;
    i._inputBehaviours.push(new F.HighlightAndClearInputTextBehaviour(i.contentMC.mc_default.mc_input1, i.itxt_emailDefault));
    i._inputBehaviours.push(new F.HighlightAndClearInputTextBehaviour(i.contentMC.mc_default.mc_input2, i.itxt_emailConfirmDefault));
    i._inputBehaviours.push(new F.HighlightAndClearInputTextBehaviour(i.contentMC.mc_facebook.mc_input1, i.itxt_emailFacebook));
    i._inputBehaviours.push(new F.HighlightAndClearInputTextBehaviour(i.contentMC.mc_facebook.mc_input2, i.itxt_emailConfirmFacebook));
    i._inputBehaviours.push(new F.HighlightAndClearInputTextBehaviour(i.contentMC.mc_facebook.mc_input_password, i.itxt_passwordFacebook));
    i.contentMC.mc_default.mc_blacklistError.visible = false;
    i.contentMC.mc_default.mc_mailConfirmError.visible = false;
    i.contentMC.mc_facebook.mc_blacklistError.visible = false;
    i.contentMC.mc_facebook.mc_mailConfirmError.visible = false;
    i.contentMC.mc_facebook.mc_newPasswordError.visible = false;
    return i;
  }
  n.__extends(OptionsDialogSaveAccountItem, e);
  OptionsDialogSaveAccountItem.prototype.onShow = function () {
    e.prototype.onShow.call(this);
    this._checkBoxCompPassVisible.selected();
    this.changePasswordVisibility();
    this._inputBehaviours.forEach(function (e) {
      return e.onShow();
    });
  };
  OptionsDialogSaveAccountItem.prototype.updateItem = function () {
    e.prototype.updateItem.call(this);
    this.disp.visible = !R.CastleModel.userData.hasSentMailVerification && R.CastleModel.userData.email == "" && !R.CastleModel.userData.hasValidatedEmail && !r.EnvGlobalsHandler.globals.loginIsKeyBased && !r.EnvGlobalsHandler.globals.isOnSpecialServer && !L.SpecialServerHelper.isOnKeyLoginToNormalLoginServer;
    this.contentMC.mc_facebook.visible = this.isPasswordTemporary && R.CastleModel.playerEmailData.newEmail == "";
    this.contentMC.mc_default.visible = !this.isPasswordTemporary && !R.CastleModel.playerEmailData.newEmail;
    if (R.CastleModel.userData.facebookEmail) {
      this.itxt_emailDefault.textContentVO.stringValue = R.CastleModel.userData.facebookEmail;
      this.itxt_emailConfirmDefault.textContentVO.stringValue = R.CastleModel.userData.facebookEmail;
      this.itxt_emailFacebook.textContentVO.stringValue = R.CastleModel.userData.facebookEmail;
      this.itxt_emailConfirmFacebook.textContentVO.stringValue = R.CastleModel.userData.facebookEmail;
    }
    this.activeLayer.cbx_newsletter.mouseChildren = false;
    this.updateNewsletter();
    this.updateMask();
  };
  OptionsDialogSaveAccountItem.prototype.onHide = function () {
    e.prototype.onHide.call(this);
    this._inputBehaviours.forEach(function (e) {
      return e.onHide();
    });
  };
  OptionsDialogSaveAccountItem.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (N.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.contentMC.mc_facebook.cbx_showPW:
          this.changePasswordVisibility();
          break;
        case this.activeLayer.btn_ok:
          this.onValidate();
          break;
        case this._checkboxMC:
          this._checkboxNewsletter.toggleSelected();
      }
    }
  };
  OptionsDialogSaveAccountItem.prototype.changePasswordVisibility = function () {
    this._checkBoxCompPassVisible.toggleSelected();
    this.itxt_passwordFacebook.displayAsPassword = !this._checkBoxCompPassVisible.isSelected;
  };
  OptionsDialogSaveAccountItem.prototype.onValidate = function () {
    var e = this;
    this.contentMC.mc_default.mc_blacklistError.visible = false;
    this.contentMC.mc_default.mc_mailConfirmError.visible = false;
    this.contentMC.mc_facebook.mc_blacklistError.visible = false;
    this.contentMC.mc_facebook.mc_mailConfirmError.visible = false;
    this.contentMC.mc_facebook.mc_newPasswordError.visible = false;
    var t = this._inputBehaviours.find(function (t) {
      return t.disp.parent == e.activeLayer && t.disp.name == "mc_input1";
    });
    var i = t ? t.text : "";
    var n = this._inputBehaviours.find(function (t) {
      return t.disp.parent == e.activeLayer && t.disp.name == "mc_input2";
    });
    var o = n ? n.text : "";
    var a = this._inputBehaviours.find(function (t) {
      return t.disp.parent == e.activeLayer && t.disp.name == "mc_input_password";
    });
    var s = a ? a.text : "";
    if (i.length == 0 || i == "") {
      this.showError("error_mail_empty", this.activeLayer.mc_blacklistError);
    }
    if (d.TextValide.isEmailString(i)) {
      if (d.TextValide.isSmartFoxValide(i)) {
        if (i == o) {
          if (this.contentMC.mc_facebook.visible) {
            if (s.length < f.CredentialsValidationConstants.PASSWORD_MIN_LENGTH) {
              this.showError("error_password_too_short", this.activeLayer.mc_newPasswordError);
              return;
            }
            if (!d.TextValide.isSmartFoxValide(s)) {
              this.showError("error_password_invalid", this.activeLayer.mc_newPasswordError);
              return;
            }
          }
          w.CastleComponent.controller.addEventListener(I.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, this.bindFunction(this.onResponse));
          var r = {
            MAIL: i,
            NEWSLETTER: this._checkboxNewsletter.isSelected
          };
          u.BasicModel.smartfoxClient.sendMessage(c.BasicSmartfoxConstants.C2S_VERIFY_PLAYER_MAIL_EVENT, [JSON.stringify(r)]);
          this.emailSent = i;
          this.passwordSent = s;
          V.CastleDialogHandler.getInstance().registerDialogs(G.CastleDarkOkDialog, new l.BasicStandardOkDialogProperties("dialog_mailVerticationWaiting_header", "dialog_mailVerticationWaiting_copy1"));
          N.ButtonHelper.enableButton(this.activeLayer.btn_ok, false);
        } else {
          this.showError("dialog_mailVertication_email_verify_error", this.activeLayer.mc_mailConfirmError);
        }
      } else {
        this.showError("generic_register_email_copy", this.activeLayer.mc_blacklistError);
      }
    } else {
      this.showError("generic_register_emailwrong_copy", this.activeLayer.mc_blacklistError);
    }
  };
  OptionsDialogSaveAccountItem.prototype.onResponse = function (e) {
    w.CastleComponent.controller.removeEventListener(I.CastleMailVerificationAnswerEvent.MAIL_VERIFICATION_ANSWER, this.bindFunction(this.onResponse));
    switch (e.status) {
      case I.CastleMailVerificationAnswerEvent.ALL_OK:
        w.CastleComponent.controller.dispatchEvent(new T.CastleUserDataEvent(T.CastleUserDataEvent.MAIL_VERIFICATION_SENT));
        R.CastleModel.userData.email = this.emailSent;
        R.CastleModel.smartfoxClient.sendCommandVO(new D.C2SSetCredentials("", d.TextValide.getValideSmartFoxJSONTextMessage(this.emailSent), this.passwordSent));
        R.CastleModel.smartfoxClient.sendCommandVO(new j.C2SGetNewsletterSubscriptionStatusVO());
        M.CastleBasicController.getInstance().dispatchEvent(new T.CastleUserDataEvent(T.CastleUserDataEvent.GPI_UPDATE));
        break;
      case I.CastleMailVerificationAnswerEvent.GENERAL_ERROR:
        this.showError("GENERAL_ERROR_1", this.activeLayer.mc_blacklistError);
        break;
      case I.CastleMailVerificationAnswerEvent.EMAIL_BLOCKED:
        this.showError("errorCode_173", this.activeLayer.mc_blacklistError);
        break;
      case I.CastleMailVerificationAnswerEvent.EMAIL_DOMAIN_BLOCKED:
        this.showError("EMAIL_DOMAIN_BLOCKED_8", this.activeLayer.mc_blacklistError);
        break;
      case I.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_IN_USE:
        this.showError("errorCode_23", this.activeLayer.mc_blacklistError);
        break;
      case I.CastleMailVerificationAnswerEvent.EMAIL_ALREADY_VERIFIED:
        this.showError("dialog_mailVertication_email_cooldown", this.activeLayer.mc_blacklistError);
        break;
      case I.CastleMailVerificationAnswerEvent.EMAIL_INVALID:
        this.showError("generic_register_emailwrong_copy", this.activeLayer.mc_blacklistError);
        break;
      case I.CastleMailVerificationAnswerEvent.EMAIL_TOO_LONG:
        this.showError("generic_register_emaillong_copy", this.activeLayer.mc_blacklistError);
    }
    N.ButtonHelper.enableButton(this.activeLayer.btn_ok, true);
    this.updateSignal.dispatch();
  };
  OptionsDialogSaveAccountItem.prototype.showError = function (e, t) {
    w.CastleComponent.textFieldManager.registerTextField(t.txt_text, new _.LocalizedTextVO(e), new p.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
    t.visible = true;
    t.scaleX = 0;
    t.scaleY = 0;
    E.TweenLite.to(t, 0.5, {
      scaleX: 1,
      scaleY: 1,
      ease: O.Bounce.easeOut
    });
    x.CastleLayoutManager.getInstance().hideDialog(G.CastleDarkOkDialog);
  };
  Object.defineProperty(OptionsDialogSaveAccountItem.prototype, "activeLayer", {
    get: function () {
      if (this.isPasswordTemporary) {
        return this.contentMC.mc_facebook;
      } else {
        return this.contentMC.mc_default;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialogSaveAccountItem.prototype, "isPasswordTemporary", {
    get: function () {
      return R.CastleModel.userData.isPasswordTemporary;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OptionsDialogSaveAccountItem.prototype, "contentHeight", {
    get: function () {
      return (this.contentMC.mc_facebook.visible ? this.contentMC.mc_facebook : this.contentMC.mc_default).height;
    },
    enumerable: true,
    configurable: true
  });
  OptionsDialogSaveAccountItem.prototype.updateNewsletter = function () {
    this._checkboxMC = this.activeLayer.cbx_newsletter;
    this._checkboxNewsletter = new o.CheckBoxButton(this.activeLayer.cbx_newsletter, true);
    this._checkboxNewsletter.selected();
    this.linkComponent = new U.LinkComponent(this.activeLayer.mc_link, "", "");
    this.updateLinkComponent();
    this.updateRewardsComponent();
  };
  OptionsDialogSaveAccountItem.prototype.updateLinkComponent = function () {
    var e = "";
    if (s.EnvironmentProvider.instance.current.data.languageCode == "ar") {
      e = "https://www.goodgamestudios.com/terms_ar/#privacy";
    }
    this.linkComponent.colorData = [y.ClientConstColor.DEFAULT_SUBSCRIPTION, y.ClientConstColor.DEFAULT_SUBSCRIPTION, y.ClientConstColor.DEFAULT_SUBSCRIPTION];
    this.linkComponent.verticalAlign = a.GGSVerticalAlign.TOP;
    this.linkComponent.update(e, "dialog_options_newsletter_desc2");
  };
  OptionsDialogSaveAccountItem.prototype.updateRewardsComponent = function () {
    var e = new v.CollectableList();
    R.CastleModel.newsletterData.newsletterVOs.forEach(function (t) {
      e.addList(R.CastleModel.rewardData.getListById(t.rewardID));
    });
    var t = new S.CollectableRenderClips(this.activeLayer.mc_reward.mc_item).addInfoBtn(this.activeLayer.mc_reward.btn_info);
    var i = new A.CollectableRenderOptions(A.CollectableRenderOptions.SET_BASIC, new W(136, 132));
    k.CollectableRenderHelper.displaySingleItemComplete(this, t, e.getItemByIndex(0), i);
  };
  return OptionsDialogSaveAccountItem;
}(H.AOptionsDialogCollapsibleItem);
exports.OptionsDialogSaveAccountItem = Y;
h.classImplementsInterfaces(Y, "ICollectableRendererList", "ICollapsibleItem", "ILayoutable");