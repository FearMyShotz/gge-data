Object.defineProperty(exports, "__esModule", {
  value: true
});
var n = require("./0.js");
var o = require("./1.js");
var a = require("./3.js");
var s = require("./6.js");
var r = require("./258.js");
var l = require("./16.js");
var c = require("./2608.js");
var u = require("./1422.js");
var d = require("./4.js");
var p = require("./180.js");
var h = require("./43.js");
var g = require("./8.js");
var C = require("./11.js");
var _ = require("./981.js");
var m = require("./980.js");
var f = function (e) {
  function InviteAFriendEmailDialog() {
    var t = this;
    t.MAX_EMAIL_SYMBOLS = 254;
    CONSTRUCTOR_HACK;
    return t = e.call(this, InviteAFriendEmailDialog.NAME) || this;
  }
  n.__extends(InviteAFriendEmailDialog, e);
  InviteAFriendEmailDialog.prototype.applyPropertiesLoaded = function (e = null) {
    this.itxt_recipientName = this.textFieldManager.registerTextField(this.dialogDisp.tf_name, new a.LocalizedTextVO(""));
    this.itxt_address = this.textFieldManager.registerTextField(this.dialogDisp.tf_adress, new a.LocalizedTextVO(""));
    this.itxt_myName = this.textFieldManager.registerTextField(this.dialogDisp.tf_my_name, new a.LocalizedTextVO(d.CastleModel.userData.userName));
    this.itxt_text = this.textFieldManager.registerTextField(this.dialogDisp.tf_text, new a.LocalizedTextVO("dialog_referFriend_sendEmail_defaultText"));
    this.itxt_recipientName.maxChars = r.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    this.itxt_myName.maxChars = r.CredentialsValidationConstants.USERNAME_MAX_LENGTH;
    this.itxt_text.maxChars = this.MAX_EMAIL_SYMBOLS;
    this.textFieldManager.registerTextField(this.dialogDisp.tf_name_label, new a.LocalizedTextVO(InviteAFriendEmailDialog.TEXT_ID_FRIEND_NAME));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_adress_label, new a.LocalizedTextVO(InviteAFriendEmailDialog.TEXT_ID_FRIEND_MAIL));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_my_name_label, new a.LocalizedTextVO(InviteAFriendEmailDialog.TEXT_ID_YOUR_NAME));
    this.textFieldManager.registerTextField(this.dialogDisp.btn_send.tf_txt, new a.LocalizedTextVO("dialog_referFriend_sendEmail_sendButton"));
    this.textFieldManager.registerTextField(this.dialogDisp.tf_title, new a.LocalizedTextVO(InviteAFriendEmailDialog.TEXT_ID_HEADER)).autoFitToBounds = true;
    this.handleMaxSymbols(null);
  };
  InviteAFriendEmailDialog.prototype.showLoaded = function (t = null) {
    this.focosed_itxt = null;
    e.prototype.showLoaded.call(this, t);
    this._scrollComponent.onShow();
  };
  InviteAFriendEmailDialog.prototype.initLoaded = function (t = null) {
    e.prototype.initLoaded.call(this, t);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_help, this.dialogDisp.btn_send]);
    this._scrollComponent = new E.CastleTextScrollComponent(new p.CastleTextScrollVO(this.dialogDisp.tf_text, this.dialogDisp.mc_scrollHandle.btn_up, this.dialogDisp.mc_scrollHandle.btn_down, this.dialogDisp.mc_scrollHandle.btn_slider, this.dialogDisp.mc_scrollHandle.mc_sliderLine, [this.dialogDisp.mc_scrollHandle]));
    this._scrollComponent.invisibleOnFit = true;
    this._scrollComponent.hideArrowsOnScrollToEdges = true;
  };
  InviteAFriendEmailDialog.prototype.onClick = function (e) {
    if (g.ButtonHelper.isButtonEnabled(e.target)) {
      switch (e.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_help:
          O.CastleDialogHandler.getInstance().registerDefaultDialogs(b.InviteAFriendInstructionsDialog, new m.InviteAFriendInstructionsProperties(b.InviteAFriendInstructionsDialog.PAGE_NUMBER_EMAIL));
          break;
        case this.dialogDisp.btn_send:
          d.CastleModel.smartfoxClient.sendCommandVO(new c.C2SSendFriendInviteEmail(this.dialogDisp.tf_my_name.text, this.dialogDisp.tf_name.text, this.dialogDisp.tf_adress.text, this.dialogDisp.tf_text.text));
      }
    }
  };
  InviteAFriendEmailDialog.prototype.hideLoaded = function (t = null) {
    this._scrollComponent.onHide();
    e.prototype.hideLoaded.call(this);
  };
  InviteAFriendEmailDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(u.FriendInviteEmailEvent.SEND_EMAIL_RESPONSE, this.bindFunction(this.onEmailResponse));
  };
  InviteAFriendEmailDialog.prototype.onKeyUp = function (e) {
    this.handleMaxSymbols(null);
  };
  InviteAFriendEmailDialog.prototype.onEmailResponse = function (e) {
    var t = e.parameters;
    var i = t.SN;
    var n = t.TN;
    var o = t.EM;
    var a = t.TXT;
    var s = "";
    s = this.extendEmailErrorString(s, i, "dialog_referFriend_sendEmail_yourName");
    s = this.extendEmailErrorString(s, n, "dialog_referFriend_sendEmail_friendName");
    s = this.extendEmailErrorString(s, o, "dialog_referFriend_sendEmail_friendMail");
    if ((s = this.extendEmailErrorString(s, a, "messageContent")) != "") {
      O.CastleDialogHandler.getInstance().registerDialogsWithType(y.CastleExternalOKStandardDialog, new _.CastleExternalStandardOKDialogProperties("dialog_referFriend_failure_header", s, _.CastleExternalStandardOKDialogProperties.ERROR_RED_DECORATION), false, h.CastleDialogConsts.PRIORITY_LOW, 0, h.CastleDialogConsts.DIALOG_TYPE_MODAL);
    } else {
      O.CastleDialogHandler.getInstance().registerDialogsWithType(y.CastleExternalOKStandardDialog, new _.CastleExternalStandardOKDialogProperties("dialog_referFriend_successful_header", "dialog_referFriend_successful_sent", _.CastleExternalStandardOKDialogProperties.ALL_OK_GREEN_DECORATION, this.bindFunction(this.hide)), false, h.CastleDialogConsts.PRIORITY_LOW, 0, h.CastleDialogConsts.DIALOG_TYPE_MODAL);
    }
  };
  InviteAFriendEmailDialog.prototype.extendEmailErrorString = function (e, t, i) {
    if (t && t.length > 0) {
      e += new a.LocalizedTextVO(i).compose();
      e += "\n \n";
      if (t != null) {
        for (var n = 0, o = t; n < o.length; n++) {
          var s = o[n];
          if (s !== undefined) {
            e += new a.LocalizedTextVO("errorcode_" + s).compose();
            e += "\n";
          }
        }
      }
      e += "\n \n";
    }
    return e;
  };
  InviteAFriendEmailDialog.prototype.handleMaxSymbols = function (e) {
    var t = s.int(this.MAX_EMAIL_SYMBOLS - this.itxt_text.text.length);
    this.itxt_symbolsLeft = this.textFieldManager.registerTextField(this.dialogDisp.tf_symbolsleft, new a.LocalizedTextVO("dialog_messageLimit_charactersLeft"));
    this.itxt_symbolsLeft.textContentVO.textReplacements = [t];
    if (t < 1) {
      this.itxt_symbolsLeft.textContentVO.textReplacements = [0];
      this.itxt_symbolsLeft.color = l.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    } else {
      this.itxt_symbolsLeft.color = l.ClientConstColor.FONT_DEFAULT_COLOR;
    }
  };
  InviteAFriendEmailDialog.__initialize_static_members = function () {
    InviteAFriendEmailDialog.NAME = "InviteAFriendEmailForm";
    InviteAFriendEmailDialog.TEXT_ID_HEADER = "dialog_referFriend_sendEmail_header";
    InviteAFriendEmailDialog.TEXT_ID_FRIEND_NAME = "dialog_referFriend_sendEmail_friendName";
    InviteAFriendEmailDialog.TEXT_ID_FRIEND_MAIL = "dialog_referFriend_sendEmail_friendMail";
    InviteAFriendEmailDialog.TEXT_ID_YOUR_NAME = "dialog_referFriend_sendEmail_yourName";
  };
  return InviteAFriendEmailDialog;
}(C.CastleExternalDialog);
exports.InviteAFriendEmailDialog = f;
var O = require("./9.js");
var E = require("./182.js");
var y = require("./1423.js");
var b = require("./979.js");
o.classImplementsInterfaces(f, "ICollectableRendererList");
f.__initialize_static_members();