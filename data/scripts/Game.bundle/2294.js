Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./11.js");
var a = require("./3.js");
var s = require("./2.js");
var r = require("./8.js");
var l = require("./258.js");
var c = require("./1.js");
var u = require("./9.js");
var d = require("./4.js");
var p = require("./13.js");
var h = require("./20.js");
var g = require("./42.js");
var C = require("./23.js");
var _ = require("./37.js");
var m = require("./138.js");
var f = require("./135.js");
var O = require("./2295.js");
var E = require("./294.js");
var y = require("./272.js");
var b = require("./216.js");
var D = require("./32.js");
var I = require("./21.js");
var T = require("./1297.js");
var v = function (e) {
  function CastleChangePlayerNameDialog() {
    return e.call(this, CastleChangePlayerNameDialog.NAME) || this;
  }
  n.__extends(CastleChangePlayerNameDialog, e);
  CastleChangePlayerNameDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new a.TextVO(p.TextHelper.toUpperCaseLocaSafeTextId("dialog_options_newName_title")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new a.TextVO(a.Localize.text("dialog_options_newName_desc")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_player_name, new a.LocalizedTextVO("dialog_options_newName_newName_desc2"));
    this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_cost, new a.LocalizedTextVO("cost_simple"));
    this._txtInput_username = this.textFieldManager.registerTextField(this.dialogDisp.mc_name.input_playername, new a.TextVO(a.Localize.text("generic_enter")));
    this._defaultText = this._txtInput_username.text;
    this._txtInput_username.type = c.TextFieldType.INPUT;
    this._txtInput_username.multiline = false;
    this._txtInput_username.maxChars = l.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    r.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok], h.ClickFeedbackButtonHover);
    this._popoverComponent = new E.SimplePopoverComponent(this.dialogDisp);
    this._popoverComponent.init(new y.SimplePopoverConfig("StatusPopover"));
    this._popoverComponent.config.closeOnClick = true;
  };
  CastleChangePlayerNameDialog.prototype.onTyping = function () {
    var e = [];
    for (var t = 0; t < arguments.length; t++) {
      e[t] = arguments[t];
    }
    this._txtInput_username.textContentVO.stringValue = this._txtInput_username.text.replace(/\n/g, "");
    this._txtInput_username.textContentVO.stringValue = this._txtInput_username.text.replace(/\t/g, "");
  };
  CastleChangePlayerNameDialog.prototype.showLoaded = function (t = null) {
    e.prototype.showLoaded.call(this, t);
    this._popoverComponent.onShow();
    this.dialogDisp.mc_costs.mc_discount.visible = false;
    this.dialogDisp.mc_blacklistError.visible = false;
    this.dialogDisp.mc_name.mc_selected.visible = false;
    this._txtInput_username.focusIn.add(this.bindFunction(this.onTextFieldFocusIn));
    this._txtInput_username.focusOut.add(this.bindFunction(this.onTextFieldFocusOut));
    this._txtInput_username.keyUp.add(this.bindFunction(this.onTyping));
    this._popoverComponent.onSequenceCompleteSignal.add(this.bindFunction(this.onPopOverCompleted));
    this.controller.addEventListener(_.CastleServerMessageArrivedEvent.GNCI_ARRIVED, this.bindFunction(this.onServerResponsePlayerNameInfo));
    this.controller.addEventListener(_.CastleServerMessageArrivedEvent.CPNE_ARRIVED, this.bindFunction(this.onServerResponsePlayerNameChanged));
    d.CastleModel.smartfoxClient.sendCommandVO(new T.C2SChangePlayerNameInfo());
  };
  CastleChangePlayerNameDialog.prototype.applyPropertiesLoaded = function (t = null) {
    e.prototype.applyPropertiesLoaded.call(this, t);
    this._txtInput_username.text = this._defaultText;
    this.dialogDisp.mc_costs.mc_discount.visible = this.dialogProperties.discount > 0;
    if (this.dialogProperties.discount) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_discount.txt_discount, new a.LocalizedTextVO("generic_placeHolder_percentage", [this.dialogProperties.discount]));
    }
  };
  CastleChangePlayerNameDialog.prototype.onClick = function (t) {
    e.prototype.onClick.call(this, t);
    if (this._enableUI || r.ButtonHelper.isButtonEnabled(t.target)) {
      switch (t.target) {
        case this.dialogDisp.btn_ok:
          if (d.CastleModel.changePlayerNameData.resetNameChangeCooldownTimestamp > 0) {
            return;
          }
          if (this.usernameIsValid()) {
            if (d.CastleModel.currencyData.c2Amount < this.dialogProperties.cost) {
              u.CastleDialogHandler.getInstance().registerDefaultDialogs(m.CastleNoMoneyC2Dialog, new f.CastleNoMoneyC2DialogProperties());
            } else {
              this.changeName();
            }
          }
          break;
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_cancel:
          this.hide();
      }
    }
  };
  CastleChangePlayerNameDialog.prototype.onTextFieldFocusIn = function (e) {
    this.dialogDisp.mc_name.mc_selected.visible = true;
    this.dialogDisp.mc_blacklistError.visible = false;
    if (this._txtInput_username.text == this._defaultText) {
      this._txtInput_username.text = "";
    }
  };
  CastleChangePlayerNameDialog.prototype.onPopOverCompleted = function () {
    this._enableUI = true;
  };
  CastleChangePlayerNameDialog.prototype.onTextFieldFocusOut = function (e) {
    this.dialogDisp.mc_name.mc_selected.visible = false;
  };
  CastleChangePlayerNameDialog.prototype.usernameIsValid = function () {
    if (this._txtInput_username.text.charAt(0) == " " || this._txtInput_username.text.charAt(this._txtInput_username.text.length - 1) == " ") {
      this.showNameError("dialog_options_error_nameSpaces_desc");
      return false;
    }
    var e = this._txtInput_username.text.trim();
    if (e.length == 0) {
      this.showNameError("error_name_empty");
      return false;
    } else if (this._txtInput_username.text.match("^[0-9]*$")) {
      this.showNameError("dialog_options_error_nameOnlyNumbers_desc");
      return false;
    } else if (e.length < s.BasicModel.basicLocalization.getUsernameMinLength) {
      this.showNameError("error_name_too_short");
      return false;
    } else if (s.TextValide.isUsernameValide(e)) {
      return this._txtInput_username.text != this._defaultText;
    } else {
      this.showNameError("errorCode_28");
      return false;
    }
  };
  CastleChangePlayerNameDialog.prototype.onServerResponsePlayerNameChanged = function (e) {
    var t = e.params[0];
    if (e.params[1]) {
      d.CastleModel.userData.userName = this._txtInput_username.text;
      d.CastleModel.localData.saveUsername(d.CastleModel.userData.userName);
      this.controller.dispatchEvent(new D.CastleUserDataEvent(D.CastleUserDataEvent.CHANGE_USER_NAME));
      var i = this._popoverComponent.getAssetDisp();
      i.mc_icon.gotoAndStop(b.ClientConstFusion.ACTION_POPOVER_FRAME_LEVEL);
      this.textFieldManager.registerTextField(i.txt_text, new a.LocalizedTextVO(t)).autoFitToBounds = true;
      this._popoverComponent.startSequence();
      this.dialogProperties.cost = d.CastleModel.changePlayerNameData.getCurrentC2Cost;
      this._txtCost.textContentVO.stringValue = String(new a.LocalizedNumberVO(this.dialogProperties.cost));
      this.activateCooldown();
    } else {
      this.showNameError(t);
    }
  };
  CastleChangePlayerNameDialog.prototype.onServerResponsePlayerNameInfo = function (e) {
    var t = e.params[0];
    var i = e.params[1];
    this.dialogProperties.cost = t;
    this._txtCost = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.mc_costs1.txt_amount, new a.LocalizedNumberVO(this.dialogProperties.cost));
    if (i > 0) {
      this.activateCooldown();
    }
  };
  CastleChangePlayerNameDialog.prototype.activateCooldown = function () {
    if (!this._isCooldownActivated) {
      this._isCooldownActivated = true;
      r.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
      this.dialogDisp.btn_ok.toolTipText = "dialog_options_cooldown_tooltip";
      d.CastleModel.timerData.addEventListener(I.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    }
  };
  CastleChangePlayerNameDialog.prototype.deactivateCoolDown = function () {
    this._isCooldownActivated = false;
    d.CastleModel.timerData.removeEventListener(I.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.onTimeUpdate));
    r.ButtonHelper.enableButton(this.dialogDisp.btn_ok, true);
    this.dialogDisp.btn_ok.toolTipText = null;
  };
  CastleChangePlayerNameDialog.prototype.onTimeUpdate = function (e = null) {
    if (d.CastleModel.changePlayerNameData.resetNameChangeCooldownTimestamp <= 0) {
      this.deactivateCoolDown();
    }
  };
  CastleChangePlayerNameDialog.prototype.changeName = function () {
    d.CastleModel.smartfoxClient.sendCommandVO(new O.C2SChangePlayerName(s.TextValide.getValideSmartFoxText(this._txtInput_username.text)));
    this._enableUI = false;
  };
  CastleChangePlayerNameDialog.prototype.showNameError = function (e) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_blacklistError.txt_text, new a.LocalizedTextVO(e)).verticalAlign = g.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.dialogDisp.mc_blacklistError.visible = true;
    C.TweenMax.fromTo(this.dialogDisp.mc_blacklistError, 0.5, {
      scaleX: 0,
      scaleY: 0
    }, {
      scaleX: 1,
      scaleY: 1,
      ease: C.Bounce.easeOut
    });
  };
  CastleChangePlayerNameDialog.prototype.hideLoaded = function (t = null) {
    e.prototype.hideLoaded.call(this, t);
    this._txtInput_username.focusIn.remove(this.bindFunction(this.onTextFieldFocusIn));
    this._txtInput_username.focusOut.remove(this.bindFunction(this.onTextFieldFocusOut));
    this._txtInput_username.keyUp.remove(this.bindFunction(this.onTyping));
    this._popoverComponent.onSequenceCompleteSignal.remove(this.bindFunction(this.onPopOverCompleted));
    this.controller.removeEventListener(_.CastleServerMessageArrivedEvent.GNCI_ARRIVED, this.bindFunction(this.onServerResponsePlayerNameInfo));
    this.controller.removeEventListener(_.CastleServerMessageArrivedEvent.CPNE_ARRIVED, this.bindFunction(this.onServerResponsePlayerNameChanged));
  };
  Object.defineProperty(CastleChangePlayerNameDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleChangePlayerNameDialog.__initialize_static_members = function () {
    CastleChangePlayerNameDialog.NAME = "CastleChangePlayerName";
  };
  return CastleChangePlayerNameDialog;
}(o.CastleExternalDialog);
exports.CastleChangePlayerNameDialog = v;
v.__initialize_static_members();